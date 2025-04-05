'use client';

import React from 'react';

import { ReactComponent as Triangle } from '@/svg/triangle.svg';
import { Vet } from '@prisma/client';
import Link from 'next/link';
import { SearchResultsItem } from './SearchResultsItem';
import { useSearchParams } from 'next/navigation';
import { createUrlWithSearchParams } from '@/util/links';
import { cn } from 'clsx-for-tailwind';

type SearchResultsListProps = {
  vets: Vet[];
  activeSlug?: string;
};

export const SearchResultsList = ({
  vets,
  activeSlug,
}: SearchResultsListProps) => {
  const searchParams = useSearchParams();

  return (
    <div className="custom-scrollbar relative grow overflow-auto md:h-0">
      <Triangle className="absolute -top-3 left-4 h-3 fill-[#bdcfd3]" />
      <ul>
        {vets.map((vet) => (
          <li
            className={cn(
              'border-b border-b-[#aababd] bg-[#bdcfd3] last-of-type:border-b-0',
              'first-of-type:rounded-t last-of-type:rounded-b',
              activeSlug === vet.slug && 'bg-[#aababe]',
            )}
            key={vet.id}
          >
            <Link
              key={vet.id}
              href={createUrlWithSearchParams(
                `/vets/${vet.slug}`,
                searchParams,
              )}
            >
              <SearchResultsItem vet={vet} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
