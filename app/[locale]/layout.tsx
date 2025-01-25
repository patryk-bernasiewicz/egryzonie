import './globals.css';
import 'simplebar-react/dist/simplebar.min.css';
import Navbar from './_components/Navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="container relative h-full pt-10">{children}</div>
    </>
  );
}
