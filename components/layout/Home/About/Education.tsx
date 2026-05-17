"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  year: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    school: "University of Lagos",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "2016 - 2020",
    description: "Studied computer science with focus on software engineering, algorithms, and distributed systems.",
  },
  {
    school: "Udacity",
    degree: "Nanodegree",
    field: "Full Stack Web Developer",
    year: "2020 - 2021",
    description: "Completed intensive program covering modern web development practices and technologies.",
  },
  {
    school: "Scrimba",
    degree: "Certificate",
    field: "Frontend Developer",
    year: "2019 - 2020",
    description: "Advanced frontend development with React, JavaScript, and modern CSS techniques.",
  },
  {
    school: "Coursera",
    degree: "Professional Certificate",
    field: "Google Cloud",
    year: "2021 - 2022",
    description: "Cloud infrastructure, deployment, and DevOps practices on Google Cloud Platform.",
  },
];

interface EducationCardProps {
  item: EducationItem;
  isDark: boolean;
}

function EducationCard({ item, isDark }: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "min-w-[320px] md:min-w-[400px] rounded-2xl p-6 border transition-all duration-300",
        isDark
          ? "bg-gradient-to-br from-surface to-surface/50 border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
          : "bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(19,91,232,0.1)]"
      )}
    >
      <div className="space-y-3 mb-4">
        <div>
          <h4
            className={cn(
              "text-xl font-heading font-bold",
              isDark ? "text-primary" : "text-blue-700"
            )}
          >
            {item.degree}
          </h4>
          <p
            className={cn(
              "text-sm font-semibold",
              isDark ? "text-text-secondary" : "text-slate-600"
            )}
          >
            {item.field}
          </p>
          <p
            className={cn(
              "text-sm font-semibold",
              isDark ? "text-text-muted" : "text-slate-500"
            )}
          >
            {item.school}
          </p>
        </div>
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-widest",
            isDark ? "text-primary/60" : "text-blue-600/60"
          )}
        >
          {item.year}
        </p>
      </div>

      <p
        className={cn(
          "text-sm leading-relaxed",
          isDark ? "text-text-secondary" : "text-slate-700"
        )}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export function Education() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="space-y-6"
    >
      <div>
        <h3
          className={cn(
            "text-2xl font-heading font-bold mb-2",
            isDark ? "text-[var(--text-primary)]" : "text-slate-900"
          )}
        >
          Educational Background
        </h3>
        <p
          className={cn(
            "text-sm",
            isDark ? "text-text-secondary" : "text-slate-600"
          )}
        >
          Continuous learning and skill development
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide pb-4"
      >
        <div className="flex gap-6 w-max">
          {educationData.map((item, idx) => (
            <EducationCard key={idx} item={item} isDark={isDark} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
