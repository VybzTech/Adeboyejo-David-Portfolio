import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textareaVariants = cva(
  'w-full px-4 py-3 rounded-lg bg-surface border border-border text-text-primary placeholder-text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-vertical',
  {
    variants: {
      size: {
        sm: 'text-sm py-2 px-3 min-h-20',
        md: 'text-base py-3 px-4 min-h-32',
        lg: 'text-lg py-4 px-5 min-h-40',
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, error, ...props }, ref) => (
    <textarea
      ref={ref}
      className={textareaVariants({ size, error, className })}
      {...props}
    />
  )
);

Textarea.displayName = 'Textarea';

export default Textarea;
