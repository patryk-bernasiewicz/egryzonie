"use client";
import { sendGeolocationData } from "@/actions/send-geolocation";
import { StringCoordinates } from "@/types/string-coordinates";
import React, { useEffect } from "react";

export const GeolocationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const watch = navigator.geolocation.watchPosition((position) => {
      const coordinates: StringCoordinates = `${position.coords.latitude};${position.coords.longitude}`;
      sendGeolocationData(coordinates);
    });

    return () => navigator.geolocation.clearWatch(watch);
  }, []);

  return children;
};
