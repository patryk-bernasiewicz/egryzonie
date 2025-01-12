import { GeolocationWrapper } from '@/components/GeolocationWrapper/GeolocationWrapper';
import { findVetBySlug } from '@/util/queries/vets';
import { VetMapDetails } from './_components/VetMapDetails';
import { VetInfoDetails } from './_components/VetInfoDetails';

const Vets = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const activeSlug = (await params)?.slug?.[0];
  const specificVet = activeSlug ? await findVetBySlug(activeSlug) : null;

  return (
    <GeolocationWrapper>
      <div className="relative flex grow items-end justify-end gap-4 pb-8">
        {specificVet && (
          <>
            <div className="h-[400px] w-1/3">
              <VetMapDetails vet={specificVet} />
            </div>
            <div className="h-[400px] w-2/3">
              <VetInfoDetails vet={specificVet} />
            </div>
          </>
        )}
      </div>
    </GeolocationWrapper>
  );
};

export default Vets;
