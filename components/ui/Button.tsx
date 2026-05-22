"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--accent-primary)] text-white hover:brightness-110 shadow-lg",
      secondary: "bg-[var(--accent-secondary)] text-white hover:brightness-110",
      outline: "border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white",
      ghost: "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5",
      glass: "glass-morphism text-[var(--text-primary)] hover:bg-white/10",
    };

    const sizes = {
      sm: "px-4 py-1.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
      icon: "p-3 rounded-full",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "premium-button inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
