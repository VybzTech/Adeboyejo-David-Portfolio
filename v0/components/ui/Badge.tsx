
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full font-semibold transition-colors duration-300',
  {
    variants: {
      variant: {
        primary: 'bg-accent-primary text-background',
        secondary: 'bg-accent-secondary text-background',
        outline: 'border border-accent-primary text-accent-primary',
        subtle: 'bg-surface text-text-primary border border-border',
      },
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'subtle',
      size: 'sm',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

const Badge = ({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: BadgeProps) => (
  <div
    className={badgeVariants({ variant, size, className })}
    {...props}
  >
    {icon && <span>{icon}</span>}
    {children}
  </div>
);

export default Badge;
