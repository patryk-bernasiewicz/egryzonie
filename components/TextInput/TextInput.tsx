import { cn } from 'clsx-for-tailwind';
import React, { type InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError | string;
};

const TextInput = ({ label, error, ...inputProps }: TextInputProps) => {
  return (
    <div className="mb-2 mt-1 flex flex-col">
      <label htmlFor={inputProps.name}>{label}</label>
      <input
        {...inputProps}
        className={cn(
          'h-8 rounded border border-slate-400 px-2',
          inputProps.className,
        )}
      />
      {error && (
        <p className="text-red-900">
          {typeof error === 'string' ? error : error.message}
        </p>
      )}
    </div>
  );
};

export default TextInput;
