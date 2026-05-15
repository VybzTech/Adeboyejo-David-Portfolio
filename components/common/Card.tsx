"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: boolean;
}

export const Card = ({ children, className, interactive = true, glow = false }: CardProps) => {
  return (
    <motion.div
      whileHover={interactive ? { y: -8, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl bg-surface border border-white/5 overflow-hidden",
        /* Premium Skeuomorphic Lift */
        "shadow-[10px_10px_30px_rgba(0,0,0,0.4),-4px_-4px_10px_rgba(255,255,255,0.02)]",
        glow && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-50",
        className
      )}
    >
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
