"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

interface MetricsSectionProps {
  role: string;
  timeline: string;
  status: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export function MetricsSection({ role, timeline, status, metrics }: MetricsSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const metricItems = [
    { label: "Role", value: role },
    { label: "Timeline", value: timeline },
    { label: "Status", value: status === "completed" ? "Completed" : "In Progress" },
    ...(metrics || []),
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8"
    >
      {metricItems.map((metric, idx) => (
        <motion.div
          key={`${metric.label}-${idx}`}
          variants={itemVariants}
          className={cn(
            "p-6 rounded-2xl border transition-all duration-300",
            isDark
              ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              : "bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200 shadow-sm hover:shadow-md"
          )}
        >
          <p className={cn(
            "text-xs font-semibold font-body uppercase tracking-wide mb-2",
            isDark ? "text-white/50" : "text-slate-500"
          )}>
            {metric.label}
          </p>
          <p className={cn(
            "text-lg md:text-xl font-heading font-bold leading-tight",
            isDark ? "text-white" : "text-slate-900"
          )}>
            {metric.value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
