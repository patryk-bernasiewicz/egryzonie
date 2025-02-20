'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';

type EditVetMapPositionProps = {
  value: { latitude: number | null; longitude: number | null };
  onChange: (latitude: number, longitude: number) => void;
};

const defaultLatitude = 52.230036220572636;
const defaultLongitude = 21.01191567834609;

const EditVetMapPosition = ({
  value = { latitude: defaultLatitude, longitude: defaultLongitude },
  onChange,
}: EditVetMapPositionProps) => {
  const mapRef = useRef<L.Map>(null);
  const markerRef = useRef<L.Marker>(null);

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

    let { latitude, longitude } = value;
    if (!latitude) latitude = defaultLatitude;
    if (!longitude) longitude = defaultLongitude;

    mapRef.current = L.map('map', {
      attributionControl: false,
    }).setView([latitude, longitude], 14, {
      animate: false,
    });

    L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    ).addTo(mapRef.current);

    markerRef.current = L.marker([latitude, longitude], {
      draggable: true,
      icon: L.icon({
        iconUrl: '/map-marker.svg',
        iconSize: [32, 32],
      }),
    }).addTo(mapRef.current);

    markerRef.current.on('dragend', (event) => {
      const { lat, lng } = event.target.getLatLng();
      onChange(lat, lng);
    });

    return () => {
      mapRef.current?.remove();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mapRef.current || !value.latitude || !value.longitude) return;

    mapRef.current.setView([value.latitude, value.longitude], 14, {});
    if (markerRef.current) {
      markerRef.current.setLatLng([value.latitude, value.longitude]);
    }
  }, [value]);

  return (
    <div className="pointer-events-auto relative z-10 h-[300px] w-[300px]">
      <div id="map" className="absolute inset-0" />
    </div>
  );
};

export default EditVetMapPosition;
