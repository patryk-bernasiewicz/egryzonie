import { GeolocationWrapper } from "@/components/GeolocationWrapper/GeolocationWrapper";
import { findVetBySlug } from "@/util/queries/vets";

const Vets = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const activeSlug = (await params)?.slug?.[0];
  const specificVet = activeSlug ? await findVetBySlug(activeSlug) : null;

  return (
    <GeolocationWrapper>
      <div className="relative">
        <div className="relative z-10">
          <h1>Vets page</h1>
          {specificVet && (
            <div>
              <div>Selected vet:</div>
              <div>{JSON.stringify(specificVet, null, 2)}</div>
            </div>
          )}
        </div>
      </div>
    </GeolocationWrapper>
  );
};

export default Vets;
