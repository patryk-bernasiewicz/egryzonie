'use client';

import { cn } from 'clsx-for-tailwind';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
    <nav>
      <ul className="flex justify-center gap-x-2">
        <li>
          <Link
            href={{
              pathname,
              query: { ...params, [paginationKey]: 1 },
            }}
            className="font-semibold"
          >
            First
          </Link>
        </li>
        {new Array(total).fill(null).map((_, index) => {
          const page = index + 1;
          return (
            <li key={index}>
              <Link
                href={{
                  pathname,
                  query: { ...params, [paginationKey]: page },
                }}
                className={cn(
                  'font-semibold',
                  page === Number(current) && 'font-black underline',
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={{
              pathname,
              query: { ...params, [paginationKey]: total },
            }}
            className="font-semibold"
          >
            Last
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
