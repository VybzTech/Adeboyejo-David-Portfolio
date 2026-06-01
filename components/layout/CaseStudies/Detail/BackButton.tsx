"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

export function BackButton() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed z-40 pointer-events-none right-8 lg:right-16 top-[11vh] lg:top-[15vh]">
      <Link href="/case-studies" className="pointer-events-auto">
        <motion.button
          whileHover={{ x: -8 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm",
            "backdrop-blur-md border transition-all duration-300 cursor-pointer",
            isDark
              ? "bg-black/50 border-white/10 text-white hover:bg-black/70 hover:border-white/20"
              : "bg-white/80 border-slate-200 text-slate-900 hover:bg-white hover:border-slate-300 shadow-lg"
          )}
        >
          <CaretLeft size={16} weight="bold" />
          <span className="hidden md:block">Back</span>
        </motion.button>
      </Link>
    </div>
  );
}
