'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full bg-slate-100 after:block after:h-1 after:bg-slate-200">
      <div className="container flex h-10 items-center justify-between">
        <Image
          src="/logo-color.svg"
          alt="eGryzonie"
          width={540}
          height={140}
          className="-mb-1 h-8 w-auto"
          style={{
            filter: 'drop-shadow(0px 2px 2px #0000002a)',
          }}
        />
        <Link href="/weterynarze" className="font-medium">
          Weterynarze
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
