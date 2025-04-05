'use client';

import { cn } from 'clsx-for-tailwind';
import { SelectHTMLAttributes, forwardRef } from 'react';

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, onChange, ...selectProps }, ref) => (
    <select
      {...selectProps}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      ref={ref}
      className={cn(
        'rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm cursor-pointer',
        'hover:border-blue-500 focus:border-blue-500 focus:bg-blue-50 focus:outline-none focus:ring-blue-500',
        selectProps.className,
      )}
    >
      {options.map((option) => (
        <option key={String(option.value)} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  ),
);

Select.displayName = 'Select';

export default Select;
