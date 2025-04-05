'use client';

import { cn } from 'clsx-for-tailwind';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

import { ReactComponent as GlassesIcon } from '@/svg/glasses.svg';

export const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defaultValue =
    new URLSearchParams(Array.from(searchParams.entries())).get('text') || '';
  const [value, setValue] = useState<string>(defaultValue);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const updateSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      const query = value ? `?text=${value}` : '';

      router.push(`${pathname}${query}`);
    }, 200);
  }, [pathname, router, value]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-stretch rounded border border-[#b1d3db] focus-within:border-[#438291]">
        <label className="flex grow">
          <input
            type="search"
            onChange={updateSearch}
            value={value}
            className={cn(
              'h-[3.125rem] grow rounded border-0 border-slate-500 bg-[#f9f9ff] p-2 px-3 align-middle text-sm text-[#374044] outline-none focus:outline-none',
              'placeholder:text-[#fafaff]',
            )}
            placeholder="Weterynarz, miejscowość"
          />
        </label>
        <button
          type="submit"
          className="border-0 inline-flex w-24 items-center justify-center rounded bg-yellow-300"
        >
          <span className="sr-only">Szukaj</span>
          <GlassesIcon className="h-5 fill-white" />
        </button>
      </div>
      <p className="text-xs">Wpisz min. 3 znaki, by wyszukać</p>
    </div>
  );
};
