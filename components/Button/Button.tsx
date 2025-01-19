import { cn } from 'clsx-for-tailwind';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  variant = 'primary',
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded px-4 py-1 font-bold',
        variant === 'primary' && 'bg-yellow-400',
        variant === 'secondary' && 'bg-blue-500',
        buttonProps.className,
      )}
    />
  );
};
