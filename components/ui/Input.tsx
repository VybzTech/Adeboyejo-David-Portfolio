import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'text-sm py-2 px-3',
        md: 'text-base py-3 px-4',
        lg: 'text-lg py-4 px-5',
      },
      error: {
        true: 'border-red-500 focus:ring-red-500',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, error, ...props }, ref) => (
    <input
      ref={ref}
      className={inputVariants({ size, error, className })}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
