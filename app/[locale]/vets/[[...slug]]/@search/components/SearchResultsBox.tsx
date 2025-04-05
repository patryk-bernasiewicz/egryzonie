'use client';

import { ReactComponent as CartIcon } from '@/svg/cart.svg';

type SearchResultsBoxProps = {
  count: number;
};

export const SearchResultsBox = ({ count }: SearchResultsBoxProps) => (
  <div className="flex h-14 shrink-0 flex-col overflow-hidden rounded bg-white">
    <div className="flex grow items-center gap-1 bg-white px-4 align-middle leading-none">
      <CartIcon className="h-5" />
      <span className="whitespace-nowrap text-sm">{count} gabinetów</span>
      <span className="whitespace-nowrap text-sm font-bold uppercase text-[#efd74d]">
        Polecani weterynarze
      </span>
    </div>
    <div className="h-1 bg-[#e0e0e5]" />
  </div>
);
