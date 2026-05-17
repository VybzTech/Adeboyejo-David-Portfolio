"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AxeIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface AnimatedBadgeProps {
  text?: string;
  className?: string;
}

const colorVariants = {
  pulse: {
    color: ["#ef4444", "#3b82f6", "#ef4444"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  static: {
    color: "#ef4444",
    transition: { duration: 0.3 },
  },
};

export function AnimatedBadge({ text = "Let's Build", className }: AnimatedBadgeProps) {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative inline-flex items-center justify-center p-px rounded-full overflow-hidden mb-8 self-center",
        className
      )}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#ef4444_0%,var(--accent-primary)_25%,var(--accent-primary)_50%,var(--accent-secondary)_75%,#ef4444_100%)]" />

      {/* Inner Content */}
      <div
        className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-b from-[var(--background)] to-[var(--background)]/95 border border-white/10 shadow-[inset_0_1px_4px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.1)] backdrop-blur-xl z-10 text-xs font-semibold capitalize tracking-wide text-[var(--text-primary)] transition-all cursor-pointer"
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocus={() => setIsInteracting(true)}
        onBlur={() => setIsInteracting(false)}
      >
        <motion.div
          variants={colorVariants}
          animate={isInteracting ? "static" : "pulse"}
        >
          <AxeIcon size={17} weight="fill" />
        </motion.div>
        {text}
      </div>
    </motion.div>
  );
}
