import Pagination from '@/components/Pagination/Pagination';
import { findPaginatedVets } from '@/util/queries/vets';

import EditableVetsList from './components/EditableVetsList';
import VetSortingSelect from './components/VetSortingSelect';
import { vetSortByOptions } from './const';
import type { EditVetsPageParams } from './types';

type EditVetsProps = {
  searchParams: Promise<EditVetsPageParams>;
};

const EditVets = async ({ searchParams }: EditVetsProps) => {
  const params = await searchParams;
  const sortBy =
    params?.sortBy && vetSortByOptions.includes(params.sortBy)
      ? params.sortBy
      : undefined;
  const sortDirection =
    !params?.sortDirection || params?.sortDirection === 'asc' ? 'asc' : 'desc';

  const { data: vets, meta } = await findPaginatedVets({
    search: params?.search,
    page: params?.page,
    sortBy,
    sortDirection,
  });

  return (
    <div className="flex flex-col items-center gap-2">
      <Pagination
        total={meta.totalPages}
        current={meta.currentPage.toString()}
        pathname="/dashboard/edit-vets"
        paginationKey="page"
      />
      <VetSortingSelect params={params} options={vetSortByOptions} />
      <div className="self-stretch">
        <EditableVetsList vets={vets} />
      </div>
      <VetSortingSelect params={params} options={vetSortByOptions} />
      <Pagination
        total={meta.totalPages}
        current={meta.currentPage.toString()}
        pathname="/dashboard/edit-vets"
        paginationKey="page"
      />
    </div>
  );
};

export default EditVets;
