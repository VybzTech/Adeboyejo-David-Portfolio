"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function AboutMe() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const highlights = [
    {
      title: "Engineering Excellence",
      description: "Building scalable, performant solutions with attention to code quality and architecture.",
    },
    {
      title: "Design Philosophy",
      description: "Creating beautiful interfaces that prioritize user experience and accessibility.",
    },
    {
      title: "Remote First",
      description: "Operating globally from Lagos, Nigeria with expertise in async communication.",
    },
    {
      title: "Tech Philosophy",
      description: "Server-first mentality, aggressive optimization, and delightful user experiences.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <p
          className={cn(
            "text-lg leading-relaxed",
            isDark ? "text-text-secondary" : "text-slate-700"
          )}
        >
          David Adeboyejo is a Senior Product Engineer with a passion for building software that users actually love. With a background in both design and engineering, he brings a unique perspective to every project.
        </p>
        <p
          className={cn(
            "text-lg leading-relaxed",
            isDark ? "text-text-secondary" : "text-slate-700"
          )}
        >
          Specializing in high-performance web applications, I've helped multiple startups scale from MVP to millions of users. My focus is on creating seamless experiences across the entire stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((highlight, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "p-4 rounded-lg border transition-all duration-300 hover:shadow-lg",
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                : "bg-blue-50/50 border-blue-200/50 hover:bg-blue-50 hover:border-blue-300"
            )}
          >
            <h4
              className={cn(
                "font-semibold mb-2",
                isDark ? "text-primary" : "text-blue-700"
              )}
            >
              {highlight.title}
            </h4>
            <p
              className={cn(
                "text-sm",
                isDark ? "text-text-secondary" : "text-slate-600"
              )}
            >
              {highlight.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
