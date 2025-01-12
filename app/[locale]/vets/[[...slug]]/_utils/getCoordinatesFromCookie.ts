'use server';

import { GEOLOCATION_COOKIE } from '@/const/cookies';
import { GeoPoint } from '@/types/geopoint';
import { StringCoordinates } from '@/types/string-coordinates';
import { cookies } from 'next/headers';

const parseCoordinates = (coordinates?: StringCoordinates) => {
  if (!coordinates) {
    return null;
  }

  const [latitude, longitude] = coordinates.split(';');
  return {
    latitude: Number(latitude),
    longitude: Number(longitude),
  } as GeoPoint;
};

export const getCoordinatesFromCookie = async () => {
  const cookieStore = await cookies();
  const coordinates = cookieStore.get(GEOLOCATION_COOKIE);
  const parsedCoordinates = parseCoordinates(
    coordinates?.value as StringCoordinates,
  );

  return parsedCoordinates;
};
