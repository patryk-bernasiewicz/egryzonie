import { findVetBySlug } from '@/util/queries/vets';

const zoom = 15;
const defaultName = ' ';
const defaultLatitude = 52.230036220572636;
const defaultLongitude = 21.01191567834609;
const apiKey = process.env.NEXT_GOOGLE_MAPS_KEY as string;

const buildSrc = (params?: {
  name?: string | null;
  city?: string | null;
  streetName?: string | null;
  streetNumber?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}) => {
  const encodedName = encodeURIComponent(
    `${params?.name || defaultName}, ${params?.city}, ${
      params?.streetName || ''
    } ${params?.streetNumber || ''}`,
  );
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedName}&zoom=${zoom}&center=${
    params?.latitude || defaultLatitude
  },${params?.longitude || defaultLongitude}&maptype=roadmap`;
};

const MapPage = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const activeSlug = (await params)?.slug?.[0];
  const specificVet = activeSlug ? await findVetBySlug(activeSlug) : null;

  const mapSrc = buildSrc({
    name: specificVet?.name,
    city: specificVet?.address,
    streetName: specificVet?.streetName,
    streetNumber: specificVet?.streetNumber,
    latitude: specificVet?.latitude,
    longitude: specificVet?.longitude,
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 -z-10">
      {mapSrc && (
        <iframe
          width="130%"
          height="120%"
          style={{
            pointerEvents: 'none',
            border: 0,
            position: 'fixed',
            top: '-10%',
            left: '-15%',
            bottom: '-10%',
            right: '-15%',
            overflow: 'hidden',
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        />
      )}
    </div>
  );
};

export default MapPage;
