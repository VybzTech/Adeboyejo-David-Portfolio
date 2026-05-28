"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Tag } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";

interface ProjectDetailHeaderProps {
  project: Project;
  isDark: boolean;
}

export function ProjectDetailHeader({ project, isDark }: ProjectDetailHeaderProps) {
  return (
    <div className="mb-10">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
              isDark ? "bg-primary/10 text-primary border border-primary/20" : "bg-blue-50 text-primary border border-blue-200"
            )}
          >
            <Tag size={9} />
            {tag}
          </span>
        ))}
        {/* Status */}
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
          project.status === "completed"
            ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30"
            : "bg-amber-400/15 text-amber-500 border border-amber-400/30"
        )}>
          {project.status === "completed" ? "✓ Completed" : "⏳ In Progress"}
        </span>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "text-4xl md:text-5xl xl:text-6xl font-heading font-black tracking-tight leading-none mb-4",
          isDark ? "text-white" : "text-[#111]"
        )}
      >
        {project.name}
      </motion.h1>

      {/* Sub-line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className={cn(
          "text-base md:text-lg leading-relaxed max-w-2xl",
          isDark ? "text-[var(--text-muted)]" : "text-slate-600"
        )}
      >
        {project.description}
      </motion.p>
    </div>
  );
}
