'use client';

import dynamic from 'next/dynamic';
import { MapDisplayClientProps } from './MapDisplayClient';
const MapDisplayClient = dynamic(() => import('./MapDisplayClient'), {
  ssr: false,
});

export default function MapDisplay(props: MapDisplayClientProps) {
  return <MapDisplayClient {...props} />;
}
