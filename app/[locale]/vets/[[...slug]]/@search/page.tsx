import { Search } from "@/components/Search/Search";
import { findNearbyVets } from "@/util/queries/vets";
import Link from "next/link";
import { getCoordinatesFromCookie } from "../_utils/getCoordinatesFromCookie";

type VetsSearchPageProps = {
  searchParams: Promise<{ text?: string }>;
  params: Promise<{ slug?: string[] }>;
};

const VetsSearchPage = async ({
  searchParams,
  params,
}: VetsSearchPageProps) => {
  const coordinates = await getCoordinatesFromCookie();
  const slug = (await params).slug?.[0];
  const searchText = (await searchParams).text;
  const vets = await findNearbyVets(searchText || "", coordinates);

  return (
    <div>
      <div>Search page</div>
      <Search />
      {vets.map((vet) => (
        <Link key={vet.id} href={`/vets/${vet.slug}`}>
          <div className={`${vet.slug === slug ? "bg-blue-800" : ""}`}>
            {vet.name}{" "}
            <div>
              {vet.latitude}, {vet.longitude} (
              {vet.distance ? vet.distance.toFixed(1).replace(".", ",") : ""}{" "}
              km)
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VetsSearchPage;
