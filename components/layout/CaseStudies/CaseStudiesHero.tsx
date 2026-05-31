"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CodesandboxLogoIcon, PlugsIcon } from "@phosphor-icons/react";
import { AnimeName } from "@/components/common/AnimeName";
import { AnimatedName } from "@/components/ui/AnimatedName";

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
      className="text-center mb-4 flex flex-col items-center justify-center gap-3"
    >
      {/* Premium Badge with Icon */}
      <div className="inline-flex items-center gap-1.5">
        {/* 
        <div className={cn(
          "p-2.5 rounded-lg",
          isDark ? "bg-primary/15" : "bg-primary/10"
        )}>
        </div>
        */}
        <CodesandboxLogoIcon size={24} className="text-primary" />
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Portfolio
        </span>
      </div>

      {/* Centered Hero Title - Together with Animation */}
      <AnimatedName name={"Case Studies"}
        className={cn(
          "text-5xl md:text-7xl font-heading font-black ml-2",
          // isDark ? "text-white" : "text-[#111]"
        )}
      />
      {/* Premium Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "center" }}
        className="mt-4 h-[1.25px] bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full max-w-md mx-auto"
      />
    </motion.div>
  );
}
