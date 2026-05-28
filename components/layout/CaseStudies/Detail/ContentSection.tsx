"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ContentSectionProps {
  description: string;
  fullContent?: string;
  stack: string[];
  tags: string[];
  github?: string;
  link?: string;
}

export function ContentSection({
  description,
  fullContent,
  stack,
  tags,
  github,
  link,
}: ContentSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2"
      >
        {/* Description */}
        <div className="mb-12">
          <h2 className={cn(
            "text-2xl md:text-3xl font-heading font-bold mb-6",
            isDark ? "text-white" : "text-slate-900"
          )}>
            Overview
          </h2>
          <p className={cn(
            "text-base md:text-lg leading-relaxed mb-6",
            isDark ? "text-white/70" : "text-slate-600"
          )}>
            {description}
          </p>
          {fullContent && (
            <p className={cn(
              "text-base md:text-lg leading-relaxed",
              isDark ? "text-white/60" : "text-slate-600"
            )}>
              {fullContent}
            </p>
          )}
        </div>

        {/* Tags/Categories */}
        {tags.length > 0 && (
          <div className="mb-12">
            <h3 className={cn(
              "text-sm font-bold uppercase tracking-widest mb-4",
              isDark ? "text-white/50" : "text-slate-500"
            )}>
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors",
                    isDark
                      ? "bg-primary/20 text-primary hover:bg-primary/30"
                      : "bg-blue-100 text-primary hover:bg-blue-200"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Sidebar - Stack & Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {/* Tech Stack */}
        <div className={cn(
          "rounded-2xl border p-6 mb-8",
          isDark
            ? "bg-white/5 border-white/10"
            : "bg-slate-50 border-slate-200"
        )}>
          <h3 className={cn(
            "text-sm font-bold uppercase tracking-widest mb-5",
            isDark ? "text-white/50" : "text-slate-500"
          )}>
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-default",
                  isDark
                    ? "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(github || link) && (
          <div className={cn(
            "rounded-2xl border p-6",
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-slate-50 border-slate-200"
          )}>
            <h3 className={cn(
              "text-sm font-bold uppercase tracking-widest mb-4",
              isDark ? "text-white/50" : "text-slate-500"
            )}>
              Resources
            </h3>
            <div className="flex flex-col gap-3">
              {link && (
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className={cn(
                      "w-full flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                      isDark
                        ? "bg-primary/20 text-primary hover:bg-primary/30"
                        : "bg-blue-100 text-primary hover:bg-blue-200"
                    )}
                  >
                    <Globe size={16} />
                    <span>Live Demo</span>
                  </motion.button>
                </Link>
              )}
              {github && (
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className={cn(
                      "w-full flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                      isDark
                        ? "bg-white/10 text-white hover:bg-white/15"
                        : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                    )}
                  >
                    <GithubLogo size={16} />
                    <span>GitHub</span>
                  </motion.button>
                </Link>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
