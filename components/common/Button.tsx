"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none overflow-hidden rounded-xl";
    
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantStyles = {
      primary: "bg-primary text-background shadow-[4px_4px_10px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.1)] border-t border-white/10",
      secondary: "bg-surface text-text-primary shadow-[4px_4px_10px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.05)] border-t border-white/5",
      outline: "bg-transparent border-2 border-primary/30 text-primary hover:bg-primary/5 shadow-none",
      ghost: "bg-transparent text-text-muted hover:text-text-primary shadow-none",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {/* Skeuomorphic inner glare */}
        {variant !== "ghost" && variant !== "outline" && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 to-transparent opacity-50" />
        )}
        
        <span className="relative z-10 flex items-center gap-2">
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            children
          )}
        </span>

        {/* Shadow for pressed state simulation in CSS if needed, but whileTap scale covers most of it */}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
