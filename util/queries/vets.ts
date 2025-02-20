import 'server-only';
import { db } from '@/util/db';
import { Vet } from '@prisma/client';
import { GeoPoint } from '@/types/geopoint';
import { unstable_cache } from 'next/cache';

export type VetWithDistance = Vet & {
  distance?: number;
};

const calculateDistance = (locationFrom: GeoPoint, locationTo: GeoPoint) => {
  const R = 6371;
  const dLat = ((locationTo.latitude - locationFrom.latitude) * Math.PI) / 180;
  const dLon =
    ((locationTo.longitude - locationFrom.longitude) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((locationFrom.latitude * Math.PI) / 180) *
      Math.cos((locationTo.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const findNearbyVets = unstable_cache(
  async (
    searchText: string,
    point?: GeoPoint | null,
  ): Promise<VetWithDistance[]> => {
    const limit = searchText.length < 3 ? 5 : undefined;

    const items = await db.vet.findMany({
      where: {
        OR: [
          { name: { contains: searchText } },
          { address: { contains: searchText } },
        ],
      },
    });

    if (!point) {
      return items;
    }

    return items
      .map((item) => ({
        ...item,
        distance: calculateDistance(point, {
          latitude: Number(item.latitude),
          longitude: Number(item.longitude),
        }),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);
  },
  [],
  {
    revalidate: 3600,
  },
);

export const findVetBySlug = unstable_cache(
  async (slug: string): Promise<Vet | null> => {
    return await db.vet.findUnique({
      where: { slug },
    });
  },
  [],
  {
    revalidate: 3600,
  },
);

export const findPaginatedVets = unstable_cache(
  async (
    search?: string,
    page = 1,
    limit = 10,
  ): Promise<{
    data: Vet[];
    meta: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
    };
  }> => {
    const where = search?.length
      ? {
          OR: [
            { name: { contains: search } },
            { address: { contains: search } },
          ],
        }
      : undefined;

    const vets = await db.vet.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
    });
    const count = await db.vet.count({
      where,
    });

    return {
      data: vets,
      meta: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    };
  },
  [],
  {
    revalidate: 600,
    tags: ['admin-vets'],
  },
);
