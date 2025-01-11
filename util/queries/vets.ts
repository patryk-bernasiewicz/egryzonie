import "server-only";
import { db } from "@/util/db";
import { Vet } from "@prisma/client";
import { GeoPoint } from "@/types/geopoint";

type VetWithDistance = Vet & {
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

export const findNearbyVets = async (
  searchText: string,
  point?: GeoPoint | null
): Promise<VetWithDistance[]> => {
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
    .sort((a, b) => a.distance - b.distance);
};

export const findVetBySlug = async (slug: string): Promise<Vet | null> =>
  await db.vet.findUnique({
    where: { slug },
  });
