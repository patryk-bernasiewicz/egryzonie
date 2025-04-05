import Image from 'next/image';
import type { Vet } from '@prisma/client';

import background from '@/public/map-cover.webp';

type VetMapDetailsProps = {
  vet: Vet;
};

export const VetMapDetails = ({ vet }: VetMapDetailsProps) => (
  <div className="relative flex h-full w-full items-end justify-between overflow-hidden p-4">
    <Image
      className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover"
      alt="Tło mapy"
      src={background}
      placeholder="blur"
      sizes="600"
    />
    <div className="relative">
      <div className="text-lg font-bold text-white">{vet.name}</div>
      <div className="text-sm font-medium text-[#374044]">{vet.address}</div>
    </div>
  </div>
);
