"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

export const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defaultValue =
    new URLSearchParams(Array.from(searchParams.entries())).get("text") || "";
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
      const query = value ? `?text=${value}` : "";

      router.push(`${pathname}${query}`);
    }, 200);
  }, [pathname, router, value]);

  return (
    <input
      type="search"
      onChange={updateSearch}
      value={value}
      className="h-8 border-slate-500 bg-slate-900 text-slate-50 p-2"
    />
  );
};
