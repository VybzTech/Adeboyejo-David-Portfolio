"use client";

import { motion } from "framer-motion";
import { Sparkle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface AnimatedBadgeProps {
  text?: string;
  className?: string;
}

export function AnimatedBadge({ text = "Available for new projects", className }: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden mb-8",
        className
      )}
    >
      {/* Animated Border */}
      <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent-primary)_0%,transparent_50%,var(--accent-secondary)_100%)]" />

      {/* Inner Content */}
      <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--background)] border border-white/5 backdrop-blur-md z-10 w-full h-full text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
        <Sparkle size={14} weight="fill" className="text-[var(--accent-primary)] animate-pulse" />
        {text}
      </div>
    </motion.div>
  );
}
