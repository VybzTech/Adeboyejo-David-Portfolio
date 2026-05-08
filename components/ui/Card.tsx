import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "glass";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-surface border border-white/5",
    elevated: "bg-surface-elevated border border-white/10 shadow-premium",
    glass: "glass-panel",
  };

  return (
    <div className={cn(
      "tactile-card",
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
}
