"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const scrollingTitles = [
  "PRODUCT ENGINEER",
  "FULL STACK DEVELOPER",
  "UI/UX DESIGNER",
  "REACT EXPERT",
  "MOBILE DEVELOPER",
  "PERFORMANCE ENGINEER",
];

export function AboutBanner() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bannerXReverse = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const isDark = theme === "dark";

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary Auto-Looping Banner (Independent of Scroll) */}
      <div
        className={cn(
          "w-[200%] h-16 md:h-24",
          "absolute left-1/2 flex items-center",
          "border-y shadow-[0_0_20px_2px_rgba(0,0,0,0.15)]",
          isDark
            ? "bg-[var(--surface)] border-white/10"
            : "bg-white border-blue-200/50"
        )}
        style={{
          top: "8%",
          transform: "translate(-50%, -50%) rotate(-12deg)",
        }}
      >
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap gap-12"
        >
          {[...scrollingTitles, ...scrollingTitles, ...scrollingTitles].map((title, i) => (
            <div key={i} className="flex items-center gap-12">
              <span
                className={cn(
                  "font-heading font-black",
                  "text-3xl md:text-5xl",
                  "tracking-tight uppercase",
                  isDark ? "text-white/70" : "text-blue-900"
                )}
              >
                {title}
              </span>
              <span className="text-primary text-2xl md:text-3xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Secondary Scroll-Dependent Blue Banner */}
      <div
        className={cn(
          "w-[200%] h-16 md:h-22",
          "absolute left-1/2 flex items-center",
          "border-y",
          isDark
            ? "bg-primary/20 border-primary/30"
            : "bg-primary/70 border-primary/80"
        )}
        style={{
          top: "8%",
          transform: "translate(-50%, -50%) rotate(-3deg)",
          marginTop: "1.5rem",
        }}
      >
        <motion.div
          style={{ x: bannerXReverse }}
          className="flex whitespace-nowrap gap-12 opacity-40"
        >
          {scrollingTitles.map((title, i) => (
            <span
              key={`shadow-${i}`}
              className="text-3xl md:text-5xl font-heading font-black text-transparent"
              style={{
                WebkitTextStroke: isDark ? "1px rgba(255,255,255,0.4)" : "1px rgba(26,19,232,0.6)",
              }}
            >
              {title}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
