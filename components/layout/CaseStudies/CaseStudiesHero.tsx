"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CodesandboxLogoIcon, PlugsIcon } from "@phosphor-icons/react";
import { AnimeName } from "@/components/common/AnimeName";

interface CaseStudiesHeroProps {
  isDark: boolean;
  totalCount: number;
}

export function CaseStudiesHero({ isDark, totalCount }: CaseStudiesHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      className="text-center mb-12"
    >
      {/* Premium Badge with Icon */}
      <div className="inline-flex items-center gap-2 mb-6">
        <div className={cn(
          "p-2.5 rounded-lg",
          isDark ? "bg-primary/15" : "bg-primary/10"
        )}>
          {/* <PlugsIcon size={20} className="text-primary" /> */}
          <CodesandboxLogoIcon size={20} className="text-primary" />
        </div>
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Portfolio
        </span>
      </div>

      {/* Centered Hero Title - Together with Animation */}
      <AnimeName
        className={cn(
          "text-5xl md:text-7xl font-heading font-black tracking-tight leading-tight mb-8",
          isDark ? "text-white" : "text-[#111]"
        )}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600">
          Case Studies
        </span>
      </AnimeName>

      {/* Animated Bulb Badge with Color Cycling */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="inline-flex items-center gap-3"
      >
        {/* Cycling Color Bulb - Yellow → Red → Green */}
        <motion.div
          animate={{
            backgroundColor: ["#eab308", "#ef4444", "#22c55e", "#eab308"],
            boxShadow: [
              "0 0 25px rgba(234, 179, 8, 0.8), inset 0 0 12px rgba(234, 179, 8, 0.5)",
              "0 0 25px rgba(239, 68, 68, 0.8), inset 0 0 12px rgba(239, 68, 68, 0.5)",
              "0 0 25px rgba(34, 197, 94, 0.8), inset 0 0 12px rgba(34, 197, 94, 0.5)",
              "0 0 25px rgba(234, 179, 8, 0.8), inset 0 0 12px rgba(234, 179, 8, 0.5)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-3 h-3 rounded-full shadow-lg"
        />

        <span className={cn(
          "text-sm font-semibold",
          isDark ? "text-white" : "text-[#111]"
        )}>
          <span className="text-primary font-bold">{totalCount}</span> Projects
        </span>
      </motion.div>

      {/* Premium Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "center" }}
        className="mt-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-md mx-auto"
      />
    </motion.div>
  );
}
