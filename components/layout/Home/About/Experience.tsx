"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Tech Startup Inc",
    title: "Senior Product Engineer",
    period: "2022 - Present",
    description: "Leading full-stack development of core platform features serving millions of users.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Design Studio Pro",
    title: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Built responsive interfaces and scalable backend systems for creative agency clients.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    company: "Digital Agency",
    title: "Frontend Developer",
    period: "2018 - 2020",
    description: "Created pixel-perfect interfaces and optimized performance across multiple projects.",
    technologies: ["React", "JavaScript", "CSS", "Webpack"],
  },
  {
    company: "Freelance Developer",
    title: "Full Stack Engineer",
    period: "2016 - 2018",
    description: "Developed custom solutions for startups and established companies worldwide.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
  },
];

interface ExperienceCardProps {
  item: ExperienceItem;
  isDark: boolean;
}

function ExperienceCard({ item, isDark }: ExperienceCardProps) {
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
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4
              className={cn(
                "text-xl font-heading font-bold",
                isDark ? "text-primary" : "text-blue-700"
              )}
            >
              {item.title}
            </h4>
            <p
              className={cn(
                "text-sm font-semibold",
                isDark ? "text-text-secondary" : "text-slate-600"
              )}
            >
              {item.company}
            </p>
          </div>
        </div>
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-widest",
            isDark ? "text-primary/60" : "text-blue-600/60"
          )}
        >
          {item.period}
        </p>
      </div>

      <p
        className={cn(
          "text-sm leading-relaxed mb-4",
          isDark ? "text-text-secondary" : "text-slate-700"
        )}
      >
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech, idx) => (
          <span
            key={idx}
            className={cn(
              "text-xs px-2.5 py-1 rounded-full font-semibold",
              isDark
                ? "bg-primary/15 text-primary"
                : "bg-blue-100/60 text-blue-700"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Experience() {
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
          Professional Journey
        </h3>
        <p
          className={cn(
            "text-sm",
            isDark ? "text-text-secondary" : "text-slate-600"
          )}
        >
          Scroll to explore my career progression
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide pb-4"
      >
        <div className="flex gap-6 w-max">
          {experienceData.map((item, idx) => (
            <ExperienceCard key={idx} item={item} isDark={isDark} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
