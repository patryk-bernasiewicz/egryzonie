'use client';

import { cn } from 'clsx-for-tailwind';
import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/Button/Button';

type EditVetMapPositionProps = {
  value: { latitude: number | null; longitude: number | null };
  onChange: (latitude: number, longitude: number) => void;
  onReset: () => void;
};

const defaultLatitude = 52.230036220572636;
const defaultLongitude = 21.01191567834609;

const EditVetMapPosition = ({
  value = { latitude: defaultLatitude, longitude: defaultLongitude },
  onChange,
  onReset,
}: EditVetMapPositionProps) => {
  const mapRef = useRef<L.Map>(null);
  const markerRef = useRef<L.Marker>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [zoom, setZoom] = useState(14);

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
    }).setView([latitude, longitude], zoom, {
      animate: false,
    });

    mapRef.current.on('zoomend', () => {
      setZoom(mapRef.current?.getZoom() || 14);
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
      const map = mapRef.current;
      const marker = markerRef.current;

      if (!map) return;
      map.off('zoomend');
      map.remove();

      if (!marker) return;
      marker.off('dragend');
      marker.remove();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mapRef.current || !value.latitude || !value.longitude) return;

    mapRef.current.setView([value.latitude, value.longitude], zoom, {});
    if (markerRef.current) {
      markerRef.current.setLatLng([value.latitude, value.longitude]);
    }
  }, [zoom, value]);

  const handleToggleMap = () => setIsOpened((prev) => !prev);

  return (
    <>
      <div
        className={cn(
          'group',
          'overflow-hidden grid grid-rows-[0fr] w-full pointer-events-auto relative z-10 md:h-[300px] md:w-[300px] transition-all duration-300 ease-in-out',
          'md:block h-auto',
          isOpened && 'grid-rows-[1fr]',
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-2 items-start mb-2 invisible transition-all min-h-0 md:visible',
            isOpened && 'visible',
          )}
        >
          <div className="relative w-full min-h-[300px] min-w-[300px]">
            <div id="map" className="w-full h-full absolute inset-0" />
          </div>
          <Button variant="secondary" type="button" onClick={onReset}>
            Reset map position
          </Button>
        </div>
      </div>
      <div className="sm:block md:hidden">
        <Button type="button" className="bg-blue-400" onClick={handleToggleMap}>
          {isOpened ? 'Hide map' : 'Show map'}
        </Button>
      </div>
    </>
  );
};

export default EditVetMapPosition;
