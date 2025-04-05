import 'simplebar-react/dist/simplebar.min.css';

import AuthWrapper from './components/AuthWrapper/AuthWrapper';
import Navbar from './components/Navbar/Navbar';
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
