'use client';

import { useEffect } from 'react';
import L from 'leaflet';

export type MapDisplayClientProps = {
  latitude: number;
  longitude: number;
  name?: string;
  address?: string;
};

const XOffset = -0.0075;
const YOffset = -0.0185;

const MapDisplayClient = ({
  latitude,
  longitude,
  name,
  address,
}: MapDisplayClientProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const container = L.DomUtil.get('map');

    if (container !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      container._leaflet_id = null;
    }

    const map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
    }).setView([latitude + XOffset, longitude + YOffset], 14, {
      animate: false,
    });

    L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    ).addTo(map);

    const marker = L.marker([latitude, longitude], {
      icon: L.icon({
        iconUrl: '/map-marker.svg',
        iconSize: [32, 32],
      }),
    }).addTo(map);

    if (name && address) {
      marker
        .bindPopup(
          `<div class="font-bold text-lg">${name}</div><div class="font-bold">${address}</div>`,
          {
            offset: L.point(-20, -20),
            className: 'leaflet-popup-content',
            autoClose: false,
            closeButton: false,
          },
        )
        .openPopup();
    }

    return () => {
      map.remove();
    };
  }, [latitude, longitude, name, address]);

  return (
    <div className="relative h-full w-full">
      <div id="map" className="absolute inset-0" />
    </div>
  );
};

export default MapDisplayClient;
