'use client';

import { Vet } from '@prisma/client';

import EditableVetsItem from './EditableVetsItem';

type EditableVetsListProps = {
  vets: Vet[];
};

const EditableVetsList = ({ vets }: EditableVetsListProps) => {
  return (
    <ul className="flex flex-col gap-y-4 max-w-[800px] mx-auto">
      {vets.map((vet) => (
        <li key={vet.id}>
          <EditableVetsItem vet={vet} />
        </li>
      ))}
    </ul>
  );
};

export default EditableVetsList;
