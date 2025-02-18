import 'simplebar-react/dist/simplebar.min.css';

import Navbar from './_components/Navbar/Navbar';
import AuthWrapper from './_components/AuthWrapper/AuthWrapper';

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthWrapper>
      <Navbar />
      <div className="container relative h-full pt-10">{children}</div>
    </AuthWrapper>
  );
}
