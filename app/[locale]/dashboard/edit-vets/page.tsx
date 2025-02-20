import { findPaginatedVets } from '@/util/queries/vets';
import Pagination from '@/components/Pagination/Pagination';
import EditableVetsList from './_components/EditableVetsList';

type EditVetsProps = {
  searchParams: Promise<{
    search?: string;
    page?: number;
    hideColumns?: string[];
  }>;
};

const EditVets = async ({ searchParams }: EditVetsProps) => {
  const params = await searchParams;
  const { data: vets, meta } = await findPaginatedVets(
    params?.search,
    params?.page,
  );

  return (
    <div>
      <Pagination
        total={meta.totalPages}
        current={meta.currentPage}
        pathname="/dashboard/edit-vets"
        paginationKey="page"
      />
      <EditableVetsList vets={vets} />
    </div>
  );
};

export default EditVets;
