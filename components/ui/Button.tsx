
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-accent-primary text-background hover:shadow-glow active:scale-95',
        secondary: 'bg-surface text-text-primary border border-border hover:border-accent-primary active:scale-95',
        outline: 'border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-background active:scale-95',
        ghost: 'text-accent-primary hover:bg-surface active:scale-95',
      },
      size: {
        xs: 'px-3 py-1.5 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = ({
  className,
  variant,
  size,
  fullWidth,
  asChild,
  href,
  target,
  rel,
  isLoading,
  loadingText = 'Loading...',
  children,
  disabled,
  ...props
}: ButtonProps) => {
    const isDisabled = disabled || isLoading;

    if (href) {
      return (
        <Link href={href} target={target} rel={rel || 'noopener noreferrer'}>
          <button
            className={buttonVariants({
              variant,
              size,
              fullWidth,
              className,
            })}
            disabled={isDisabled}
            {...props}
          >
            {isLoading ? loadingText : children}
          </button>
        </Link>
      );
    }

    return (
      <button
        className={buttonVariants({
          variant,
          size,
          fullWidth,
          className,
        })}
        disabled={isDisabled}
        {...props}
      >
        {isLoading ? loadingText : children}
      </button>
    );
  };

export default Button;
