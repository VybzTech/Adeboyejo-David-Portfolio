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
  "PRODUCT ENGINEER",
  "FULL STACK DEVELOPER",
  "UI/UX DESIGNER",
];

export function AboutBanner() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bannerX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const isDark = theme === "dark";

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute top-1/2 left-1/2 w-[200%] h-40 -rotate-[25deg] -translate-x-1/2 -translate-y-1/2 z-0 flex items-center overflow-hidden border-y pointer-events-none",
        isDark
          ? "bg-secondary/10 border-white/5"
          : "bg-blue-500/5 border-blue-300/20"
      )}
    >
      <motion.div style={{ x: bannerX }} className="flex whitespace-nowrap gap-12">
        {scrollingTitles.map((title, i) => (
          <span
            key={i}
            className={cn(
              "text-4xl md:text-6xl font-heading font-black",
              isDark ? "text-white/20" : "text-blue-900/15"
            )}
          >
            {title}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
