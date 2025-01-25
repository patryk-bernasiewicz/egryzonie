import { ReactNode } from 'react';
import { montserrat } from './fonts';
import 'leaflet/dist/leaflet.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | eGryzonie',
    default: 'eGryzonie',
  },
};

const AppLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={montserrat.className}>
    <body>{children}</body>
  </html>
);

export default AppLayout;
