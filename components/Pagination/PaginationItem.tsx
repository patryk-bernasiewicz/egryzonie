import { cn } from 'clsx-for-tailwind';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

type PaginationLinkProps = LinkProps & {
  isActive?: boolean;
  children: ReactNode;
  disabled?: boolean;
};

const PaginationLink = ({
  isActive,
  children,
  disabled,
  ...linkProps
}: PaginationLinkProps) => (
  <Link
    className={cn(
      'font-semibold bg-yellow-500/20 hover:bg-yellow-500/30 rounded-full w-8 h-8 flex items-center justify-center',
      isActive && 'font-bold bg-yellow-500/100',
      disabled && 'cursor-not-allowed opacity-50 bg-gray-300 hover:bg-gray-300',
    )}
    {...linkProps}
    onClick={(e) => disabled && e.preventDefault()}
  >
    {children}
  </Link>
);

export default PaginationLink;
