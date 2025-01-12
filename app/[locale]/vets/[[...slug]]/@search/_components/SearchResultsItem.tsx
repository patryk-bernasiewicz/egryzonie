import { Vet } from '@prisma/client';

type SearchResultsItemProps = {
  vet: Vet;
};

export const SearchResultsItem = ({ vet }: SearchResultsItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <span>&gt;</span>
      <div className="flex w-full flex-col gap-0.5">
        <div className="text-sm">{vet.name}</div>
        <div className="text-sm font-bold">
          {vet.address} {vet.streetName} {vet.streetNumber} {vet.buildingNumber}
        </div>
      </div>
    </div>
  );
};
