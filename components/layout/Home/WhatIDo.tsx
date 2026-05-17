"use client";

import { AnimatedName } from "@/components/ui/AnimatedName";
import { PremiumCards } from "./Hero/PremiumCards";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function WhatIDo() {
  const { theme } = useTheme();

  return (
    <section className={`relative py-24 overflow-hidden ${theme === 'dark' ? 'bg-[var(--background)]' : 'bg-[#fff]'}`}>
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 md:items-center md:text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-medium uppercase text-xs text-primary tracking-tight"
            >
              professional
            </motion.span>
            {/* <h1 className={`text-5xl md:text-7xl lg:text-7xl font-heading font-black tracking-tight ${theme === 'dark' ? 'text-primary' : 'text-[#111]'}`}>
              SkillSet
            </h1> */}
            <AnimatedName name="SkillSet" className={cn(
              "text-5xl md:text-7xl lg:text-7xl font-heading font-black tracking-tight text-[#111]",
               theme === 'dark' ? 'text-primary' : 'text-[#111]'
            )} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg md:text-xl max-w-3xl pt-2 md:mx-auto ${theme === 'dark' ? 'text-text-secondary' : 'text-[#222]'}`}
            >
              Specializing in high-performance applications and scalable systems that deliver exceptional user experiences.
            </motion.p>
          </motion.div>
        </div>

        <PremiumCards />
      </div>

      {/* Bottom Gradient Fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${theme === 'dark' ? 'from-[var(--background)] to-transparent' : 'from-[#fff] to-transparent'} pointer-events-none`} />
    </section>
  );
}
