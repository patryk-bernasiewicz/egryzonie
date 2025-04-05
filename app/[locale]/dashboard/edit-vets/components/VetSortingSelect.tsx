'use client';

import { useRouter } from 'next/navigation';

import Select from '@/components/Select/Select';

import { EditVetsPageParams, VetSortByOption } from '../types';

type VetSortingSelectProps = {
  params?: EditVetsPageParams;
  options: VetSortByOption[];
};

const VetSortingSelect = ({ params, options }: VetSortingSelectProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <Select
        value={params?.sortBy}
        options={options.map((option) => ({
          value: option,
          label: option,
        }))}
        onChange={(value) => {
          const updatedParams = new URLSearchParams(window.location.search);
          updatedParams.set('sortBy', value);
          updatedParams.set(
            'sortDirection',
            params?.sortBy === value && params?.sortDirection === 'asc'
              ? 'desc'
              : 'asc',
          );

          router.push(`/dashboard/edit-vets?${updatedParams.toString()}`);
        }}
      />
      <Select
        value={params?.sortDirection}
        options={[
          { label: 'ASC', value: 'asc' },
          { label: 'DESC', value: 'desc' },
        ]}
        onChange={(value) => {
          const updatedParams = new URLSearchParams(window.location.search);
          updatedParams.set('sortDirection', value);

          router.push(`/dashboard/edit-vets?${updatedParams.toString()}`);
        }}
      />
    </div>
  );
};

export default VetSortingSelect;
