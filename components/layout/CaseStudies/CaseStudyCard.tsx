"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, Globe, ArrowRight, Clock, Tag } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";

interface CaseStudyCardProps {
  project: Project;
  index: number;
  isDark: boolean;
}

export function CaseStudyCard({ project, index, isDark }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
      layout
      className={cn(
        "group h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-300",
        isDark
          ? "bg-[var(--surface)] border-white/8 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(19,91,232,0.15)]"
          : "bg-white border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-xl"
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-white/5 flex-shrink-0">
        <Image
  src={project.image}
  alt={project.name}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover transition-transform duration-700 group-hover:scale-105"
/>

        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold shadow-lg"
              >
                <Globe size={14} />
                Live Site
              </motion.button>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold shadow-lg"
              >
                <GithubLogo size={14} />
                GitHub
              </motion.button>
            </Link>
          )}
        </div>

        {/* Status badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className={cn(
            "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
            project.status === "completed"
              ? "bg-emerald-500/90 text-white"
              : "bg-amber-400/90 text-white"
          )}>
            {project.status === "completed" ? "Completed" : "In Progress"}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md",
                isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary"
              )}
            >
              <Tag size={8} />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={cn(
          "text-xl font-heading font-bold mb-2 leading-tight group-hover:text-primary transition-colors",
          isDark ? "text-white" : "text-[#111]"
        )}>
          {project.name}
        </h3>

        {/* Description */}
        <p className={cn(
          "text-sm leading-relaxed line-clamp-3 mb-5 flex-1",
          isDark ? "text-[var(--text-muted)]" : "text-slate-600"
        )}>
          {project.description}
        </p>

        {/* Stack pills */}
        {project.stack && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={cn(
                  "text-[10px] font-medium px-2 py-0.5 rounded",
                  isDark
                    ? "bg-white/5 text-[var(--text-muted)]"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className={cn(
                "text-[10px] font-medium px-2 py-0.5 rounded",
                isDark ? "bg-white/5 text-[var(--text-muted)]" : "bg-slate-100 text-slate-400"
              )}>
                +{project.stack.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className={cn(
          "flex items-center justify-between pt-4 border-t",
          isDark ? "border-white/8" : "border-slate-100"
        )}>
          {project.timeline && (
            <span className={cn(
              "flex items-center gap-1.5 text-xs font-medium",
              isDark ? "text-[var(--text-muted)]" : "text-slate-400"
            )}>
              <Clock size={12} />
              {project.timeline}
            </span>
          )}
          <Link href={`/case-studies/${project.id}`} className="ml-auto">
            <motion.button
              whileHover={{ x: 3 }}
              className={cn(
                "flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer",
                isDark ? "text-primary hover:text-blue-400" : "text-primary hover:text-blue-700"
              )}
            >
              View Details
              <ArrowRight size={13} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
