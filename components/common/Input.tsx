"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-text-muted ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          <input
            ref={ref}
            className={cn(
              "w-full bg-surface text-text-primary px-4 py-3 rounded-xl border border-white/5 transition-all duration-300",
              "placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
              /* Skeuomorphic depth (Recessed look) */
              "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4),inset_-1px_-1px_3px_rgba(255,255,255,0.05)]",
              error ? "border-red-500/50 focus:ring-red-500/20" : "focus:border-primary/50",
              className
            )}
            {...props}
          />
          
          {/* Subtle outer glow on focus */}
          <div className="absolute -inset-[1px] rounded-xl bg-primary/20 opacity-0 group-focus-within:opacity-100 blur-[2px] pointer-events-none transition-opacity duration-300" />
        </div>
        {error && (
          <p className="text-xs text-red-500 ml-1 mt-1 animate-in fade-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
