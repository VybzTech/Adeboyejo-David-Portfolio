"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  isDark: boolean;
  projectCount: (cat: string) => number;
  onSelect: (cat: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  isDark,
  projectCount,
  onSelect,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="flex flex-wrap gap-2.5 mb-12 justify-center"
    >
      {categories.map((category) => {
        const count = projectCount(category);
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              "relative px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
              "focus:outline-none",
              isActive
                ? "bg-primary border-primary text-white shadow-[0_0_16px_rgba(19,91,232,0.35)]"
                : isDark
                ? "bg-white/5 border-white/10 text-[var(--text-muted)] hover:border-white/20 hover:text-white"
                : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-800 shadow-sm"
            )}
          >
            {category}
            <span className={cn(
              "ml-1.5 text-xs font-bold",
              isActive ? "text-white/70" : "text-primary/70"
            )}>
              ({count})
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
