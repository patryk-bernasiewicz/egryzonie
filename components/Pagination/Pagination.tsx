'use client';

import { useParams } from 'next/navigation';

import PaginationLink from './PaginationItem';

type PaginationProps = {
  total: number;
  current: number;
  pathname: string;
  paginationKey: string;
};

const Pagination = ({
  total,
  current,
  pathname,
  paginationKey = 'page',
}: PaginationProps) => {
  const params = useParams();

  return (
    <nav className="my-2">
      <ul className="flex justify-center gap-x-2">
        <li>
          <PaginationLink
            href={{
              pathname,
              query: { ...params, [paginationKey]: '1' },
            }}
            disabled={current === 1}
          >
            &laquo;
          </PaginationLink>
        </li>
        {new Array(total).fill(null).map((_, index) => {
          const page = index + 1;
          const isActive = page === current;

          return (
            <li key={index}>
              <PaginationLink
                href={{
                  pathname,
                  query: { ...params, [paginationKey]: page },
                }}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </li>
          );
        })}
        <li>
          <PaginationLink
            href={{
              pathname,
              query: { ...params, [paginationKey]: total },
            }}
            disabled={current === total}
          >
            &raquo;
          </PaginationLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
