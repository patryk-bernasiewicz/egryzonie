import type { Vet } from '@prisma/client';
import { cn } from 'clsx-for-tailwind';

type VetInfoDetailsProps = {
  vet: Vet;
};

export const VetInfoDetails = ({ vet }: VetInfoDetailsProps) => {
  const baseAddress = [vet.address || null, vet.streetName || null].join(', ');

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div
        className={cn(
          'relative flex h-14 items-center rounded-t bg-[#bdcfd3] px-4 pt-1',
          'before:absolute before:left-0 before:top-0 before:block before:h-1 before:w-full before:rounded-xl before:bg-[#d1dde0]',
        )}
      >
        <div className="text-sm font-bold text-white">
          Gabinet weterynaryjny
        </div>
      </div>
      <div
        className={cn(
          'relative grow p-8',
          'after:absolute after:bottom-0 after:left-0 after:block after:h-1 after:w-full after:rounded-xl after:bg-[#d1dde0]',
        )}
      >
        <ul className="flex flex-col gap-8 font-medium text-[#374044]">
          {vet.address && (
            <li>
              {baseAddress} {vet.streetNumber} {vet.buildingNumber}
            </li>
          )}
          {vet.phone && (
            <li>
              <a href={`tel:${vet.phone}`}>{vet.phone}</a>
            </li>
          )}
          {vet.email && (
            <li>
              <a href={`mailto:${vet.email}`}>{vet.email}</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
