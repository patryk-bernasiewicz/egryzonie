import { findNearbyVets } from '@/util/queries/vets';

import { getCoordinatesFromCookie } from '../utils/getCoordinatesFromCookie';
import { SearchInput } from './components/SearchInput';
import { SearchResultsBox } from './components/SearchResultsBox';
import { SearchResultsList } from './components/SearchResultsList';

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
  const vets = await findNearbyVets(searchText || '', coordinates);

  return (
    <div className="relative z-10 flex max-w-[21.25rem] grow pb-8">
      <div className="flex w-full grow flex-col gap-3.5 pt-3.5">
        <SearchInput />
        {vets.length > 0 && <SearchResultsBox count={vets.length} />}
        <SearchResultsList vets={vets} activeSlug={slug} />
        {process.env.IS_DEV_MODE == 'true' && (
          <div>
            ‼️ Strona w trakcie budowy. Nie przedstawiamy tu jeszcze żadnych
            danych realnych placówek. ‼️
          </div>
        )}
      </div>
    </div>
  );
};

export default VetsSearchPage;
