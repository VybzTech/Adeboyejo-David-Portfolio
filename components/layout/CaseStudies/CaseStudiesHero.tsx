"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FolderOpen, Sparkle } from "@phosphor-icons/react";

interface CaseStudiesHeroProps {
  isDark: boolean;
  totalCount: number;
}

export function CaseStudiesHero({ isDark, totalCount }: CaseStudiesHeroProps) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Label */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-5">
          <Sparkle size={14} weight="fill" />
          Portfolio
        </span>

        <h1 className={cn(
          "text-5xl md:text-7xl font-heading font-black tracking-tight leading-none mb-6",
          isDark ? "text-white" : "text-[#111]"
        )}>
          Case{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
            Studies
          </span>
        </h1>

        <p className={cn(
          "text-lg md:text-xl max-w-2xl leading-relaxed",
          isDark ? "text-[var(--text-muted)]" : "text-slate-600"
        )}>
          A deep dive into the{" "}
          <span className={cn("font-semibold", isDark ? "text-white" : "text-[#111]")}>
            {totalCount} projects
          </span>{" "}
          I&apos;ve built — the problems solved and the impact delivered.
        </p>
      </motion.div>

      {/* Decorative rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "left" }}
        className="mt-10 h-px bg-gradient-to-r from-primary/40 via-blue-400/20 to-transparent"
      />
    </div>
  );
}
