import { findVetBySlug } from '@/util/queries/vets';
import MapDisplay from '../_components/MapDisplay';

const defaultLatitude = 52.230036220572636;
const defaultLongitude = 21.01191567834609;

const MapPage = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const activeSlug = (await params)?.slug?.[0];
  const specificVet = activeSlug ? await findVetBySlug(activeSlug) : null;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 -z-10">
      <MapDisplay
        latitude={specificVet?.latitude || defaultLatitude}
        longitude={specificVet?.longitude || defaultLongitude}
      />
    </div>
  );
};

export default MapPage;
