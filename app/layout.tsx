import { ReactNode } from 'react';
import { montserrat } from './fonts';

const AppLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={montserrat.className}>
    <body>{children}</body>
  </html>
);

export default AppLayout;
