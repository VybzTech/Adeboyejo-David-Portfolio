"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
}

const certificationData: CertificationItem[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-001",
    skills: ["Cloud Architecture", "AWS Services", "Infrastructure"],
  },
  {
    title: "Google Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCACE-001",
    skills: ["GCP", "Cloud Computing", "DevOps"],
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udacity",
    date: "2021",
    credentialId: "UDACITY-FS-001",
    skills: ["Full Stack", "Web Development", "Database Design"],
  },
  {
    title: "Advanced React Patterns",
    issuer: "Scrimba",
    date: "2020",
    credentialId: "SCRIMBA-REACT-001",
    skills: ["React", "JavaScript", "Performance Optimization"],
  },
];

interface CertificationCardProps {
  item: CertificationItem;
  isDark: boolean;
}

function CertificationCard({ item, isDark }: CertificationCardProps) {
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
            {item.title}
          </h4>
          <p
            className={cn(
              "text-sm font-semibold",
              isDark ? "text-text-secondary" : "text-slate-600"
            )}
          >
            {item.issuer}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-widest",
              isDark ? "text-primary/60" : "text-blue-600/60"
            )}
          >
            {item.date}
          </p>
          <p
            className={cn(
              "text-xs font-mono",
              isDark ? "text-text-muted" : "text-slate-500"
            )}
          >
            ID: {item.credentialId}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill, idx) => (
          <span
            key={idx}
            className={cn(
              "text-xs px-2.5 py-1 rounded-full font-semibold",
              isDark
                ? "bg-primary/15 text-primary"
                : "bg-blue-100/60 text-blue-700"
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Certification() {
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
          Certifications
        </h3>
        <p
          className={cn(
            "text-sm",
            isDark ? "text-text-secondary" : "text-slate-600"
          )}
        >
          Industry-recognized credentials and achievements
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide pb-4"
      >
        <div className="flex gap-6 w-max">
          {certificationData.map((item, idx) => (
            <CertificationCard key={idx} item={item} isDark={isDark} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
