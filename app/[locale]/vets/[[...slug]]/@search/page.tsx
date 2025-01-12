import { Search } from '@/components/Search/Search';
import { findNearbyVets } from '@/util/queries/vets';
import { getCoordinatesFromCookie } from '../_utils/getCoordinatesFromCookie';
import { SearchResultsBox } from './_components/SearchResultsBox';
import { SearchResultsList } from './_components/SearchResultsList';

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
  const vets =
    searchText && searchText.length >= 3
      ? await findNearbyVets(searchText || '', coordinates)
      : [];

  return (
    <div className="relative z-10 flex max-w-[21.25rem] grow pb-8">
      <div className="flex w-full grow flex-col gap-3.5 pt-3.5">
        <Search />
        {vets.length > 0 && <SearchResultsBox count={vets.length} />}
        <SearchResultsList vets={vets} activeSlug={slug} />
      </div>
    </div>
  );
};

export default VetsSearchPage;
