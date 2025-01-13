import { VetWithDistance } from '@/util/queries/vets';

type SearchResultsItemProps = {
  vet: VetWithDistance;
};

export const SearchResultsItem = ({ vet }: SearchResultsItemProps) => (
  <div className="flex items-center gap-4 p-4">
    <span>&gt;</span>
    <div className="flex w-full flex-col gap-0.5">
      <div className="text-sm">{vet.name}</div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">{vet.address}</div>
        <div className="text-xs font-medium">
          ~{Math.round(Number(vet.distance))} km
        </div>
      </div>
    </div>
  </div>
);
