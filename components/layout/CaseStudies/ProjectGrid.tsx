"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CaseStudyCard } from "./CaseStudyCard";
import { Project } from "@/lib/types";
import { FolderOpen } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  isDark: boolean;
}

export function ProjectGrid({ projects, isDark }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-28 text-center"
      >
        <div className={cn(
          "p-5 rounded-2xl mb-5",
          isDark ? "bg-white/5" : "bg-slate-100"
        )}>
          <FolderOpen size={40} className={isDark ? "text-white/20" : "text-slate-300"} />
        </div>
        <p className={cn("text-base font-semibold", isDark ? "text-[var(--text-muted)]" : "text-slate-400")}>
          No projects match this filter.
        </p>
        <p className={cn("text-sm mt-1", isDark ? "text-white/20" : "text-slate-300")}>
          Try selecting a different category.
        </p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        {projects?.map((project, index) => (
          <CaseStudyCard
            key={`${project.id} ${index} ${project.name}`}
            project={project}
            index={index}
            isDark={isDark}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
