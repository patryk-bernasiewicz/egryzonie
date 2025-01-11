"use server";
import { cookies } from "next/headers";

import { GEOLOCATION_COOKIE } from "@/const/cookies";
import { StringCoordinates } from "@/types/string-coordinates";

export const sendGeolocationData = async (coordinates: StringCoordinates) => {
  "use server";

  const cookieStore = await cookies();
  const existing = cookieStore.get(GEOLOCATION_COOKIE);

  if (!existing || !existing.value.length) {
    cookieStore.set(GEOLOCATION_COOKIE, coordinates, {
      secure: true,
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    });
  }

  return;
};
