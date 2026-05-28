"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export interface SkillDetail {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  icon: React.ReactNode;
}

interface SkillModalProps {
  skill: SkillDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SkillModal({ skill, isOpen, onClose }: SkillModalProps) {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const totalScrollableHeight = scrollHeight - clientHeight;
      if (totalScrollableHeight > 0) {
        setScrollPercentage((scrollTop / totalScrollableHeight) * 100);
      } else {
        setScrollPercentage(0);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setScrollPercentage(0);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [isOpen, skill]);

  if (!skill) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className={cn("SkillModal",
        "fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm transition-opacity overflow-y-auto",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
        theme === "light" ? "bg-black/50" : "bg-black/60"
      )}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: isOpen ? 1 : 0.9, y: isOpen ? 0 : 20 }}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative max-w-2xl w-full mx-4 rounded-2xl overflow-hidden",
          "mt-[10.1vh]",
          theme === "light"
            ? "bg-gradient-to-br from-white to-slate-50"
            : "bg-gradient-to-br from-[var(--surface)] to-[var(--background)]"
        )}
        style={{
          boxShadow:
            theme === "light"
              ? "0 20px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,1)"
              : "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          maxHeight: "calc(100vh - 10.01vh)",
        }}
      >
        {/* Custom Scrollbar */}
        <div className="custom-scrollbar-track">
          <div className="scrollbar-fill" style={{ height: `${scrollPercentage}%` }}></div>
          <div className="scrollbar-thumb-diamond" style={{ top: `${scrollPercentage}%` }}></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className={cn(
            "absolute top-6 right-8 z-10 p-2 rounded-full transition-colors hover:text-red-600",
            theme === "light"
              ? "hover:bg-slate-100 text-blue-600"
              : "hover:bg-white/10 text-primary"
          )}
        >
          <X size={24} />
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full w-full overflow-y-auto lg:overflow-y-hidden scrollbar-hide"
          style={{ maxHeight: "calc(100vh - 10.01vh)" }}
        >
          {/* Content */}
          <div className="p-8 md:p-12 space-y-6 pr-10">
            {/* Header */}
            <div className="flex items-start gap-6">
              <div
                className={cn(
                  "w-20 h-20 rounded-3xl flex items-center justify-center text-4xl flex-shrink-0 shadow-lg",
                  theme === "light"
                    ? "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600"
                    : "bg-gradient-to-br from-primary/20 to-primary/5 text-primary"
                )}
              >
                {skill.icon}
              </div>
              <div className="flex-1">
                <h2
                  className={cn(
                    "text-3xl font-heading font-black mb-2",
                    theme === "light" ? "text-blue-600" : "text-primary"
                  )}
                >
                  {skill.title}
                </h2>
                <p
                  className={cn(
                    "text-base leading-relaxed",
                    theme === "light" ? "text-slate-600" : "text-text-secondary"
                  )}
                >
                  {skill.description}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3 border-t border-white/10">
              <h3
                className={cn(
                  "text-sm font-bold uppercase tracking-widest",
                  theme === "light" ? "text-slate-500" : "text-text-secondary"
                )}
              >
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold capitalize border transition-colors",
                      theme === "light"
                        ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
                        : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    )}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 pt-2">
              <h3
                className={cn(
                  "text-sm font-bold uppercase tracking-widest",
                  theme === "light" ? "text-slate-500" : "text-text-secondary"
                )}
              >
                Key Capabilities
              </h3>
              <div className="space-y-2">
                {skill.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-lg border transition-colors",
                      theme === "light"
                        ? "bg-blue-50/50 border-blue-200 hover:bg-blue-100/50"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    )}
                  >
                    <div
                      className={cn(
                        "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
                        theme === "light" ? "bg-blue-600" : "bg-primary"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        theme === "light" ? "text-slate-700" : "text-text-primary"
                      )}
                    >
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
