import { Metadata } from 'next';

import { GeolocationWrapper } from '@/components/GeolocationWrapper/GeolocationWrapper';
import { findVetBySlug } from '@/util/queries/vets';

import { VetInfoDetails } from './components/VetInfoDetails';
import { VetMapDetails } from './components/VetMapDetails';

export const metadata: Metadata = {
  title: 'Wyszukiwarka weterynarzy',
};

const Vets = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const activeSlug = (await params)?.slug?.[0];
  const specificVet = activeSlug ? await findVetBySlug(activeSlug) : null;

  return (
    <GeolocationWrapper>
      <div className="relative flex grow flex-col items-end justify-end gap-4 pb-8 lg:flex-row">
        {specificVet && (
          <>
            <div className="w-full lg:h-[400px] lg:w-1/2 xl:w-1/3">
              <VetMapDetails vet={specificVet} />
            </div>
            <div className="w-full lg:h-[400px] lg:w-1/2 xl:w-2/3">
              <VetInfoDetails vet={specificVet} />
            </div>
          </>
        )}
      </div>
    </GeolocationWrapper>
  );
};

export default Vets;
