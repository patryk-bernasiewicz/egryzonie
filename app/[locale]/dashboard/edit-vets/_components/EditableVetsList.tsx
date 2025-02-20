'use client';

import { Vet } from '@prisma/client';
import { useState } from 'react';

import EditableVetsItem from './EditableVetsItem';

type EditableVetsListProps = {
  vets: Vet[];
};

export type ViewType = 'compact' | 'expanded';

const EditableVetsList = ({ vets }: EditableVetsListProps) => {
  const [viewType, setViewType] = useState<ViewType>('compact');

  return (
    <ul className="flex flex-col gap-y-4">
      {vets.map((vet) => (
        <li key={vet.id}>
          <EditableVetsItem vet={vet} viewType={viewType} />
        </li>
      ))}
    </ul>
  );
};

export default EditableVetsList;
