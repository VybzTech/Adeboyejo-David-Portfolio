"use client";

import React from "react";
import { PROJECTS } from "@/lib/data";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatedName } from "@/components/ui/AnimatedName";
import { ProjectCard } from "./ProjectCard";
import { AnimatedCounter } from "./AnimatedCounter";

export function FeaturedCaseStudies() {
  const { theme } = useTheme();
  const featured = PROJECTS.slice(0, 3); // Show first 3 projects -  change to favorite: true 
  const isDark = theme === "dark";

  const metrics = [
    { label: "Years Experience", value: 4, suffix: "+", delay: 0.1 },
    { label: "Projects Completed", value: 10, suffix: "+", delay: 0.3 },
    { label: "Happy Clients", value: 5, suffix: "+", delay: 0.5 },
  ];


  return (
    // <section className={`relative py-24 px-14 overflow-hidden ${theme === 'dark' ? 'bg-[var(--background)]' : 'bg-[#fff]'}`}> 
    <section className={cn("px-20 relative overflow-hidden", theme === "light" ? "bg-white" : "bg-[var(--background)]")}>
      <div className="max-w-7xl mx-auto pt-14 pb-8">
        {/* Metrics Section */}
        <ScrollReveal>
          <div className={cn("grid rounded-3xl grid-cols-1 md:grid-cols-3 gap-8 mb-20 p-8 md:p-12",
            // " bg-gradient-to-r from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10"
            "shadow-[0_0_50px_rgba(59,130,255,0.1),inset_0_1px_7px_rgba(59,95,246,0.15),0_20px_20px_rgba(59,130,255,0.05)]",
            isDark
              ? "bg-gradient-to-br from-surface/50 to-surface/20 border-white/10 shadow-[0_0_40px_rgba(59,130,255,0.1),inset_0_1px_7px_rgba(59,95,246,0.1),0_15px_15px_rgba(59,130,255,0.05)]"
              : "bg-gradient-to-br from-blue-50/50 to-white border-blue-200/50"
          )}>
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} delay={metric.delay} />
                </h3>
                <p className={cn("text-lg text-black", isDark ? "text-white" : "text-black font-medium")}>{metric.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Header */}
      <div className="[&>div]:w-full flex flex-col md:flex-row justify-between items-end gap-6 mt-8 mb-16">
        <ScrollReveal direction="down">
          <div className={cn("w-full text-center")}>
            {/* <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-blue-600">
                Featured Projects
              </h2> */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-medium uppercase block text-sm text-primary tracking-[0.5px]"
            >Highlighted
              {/* Featured Projects */}
            </motion.span>
            <AnimatedName name="Case Studies" className={cn("my-3",
              "text-4xl md:text-5xl lg:text-7xl font-heading font-black"
            )} />
            {/* <p className={cn("text-4xl md:text-5xl lg:text-6xl font-heading font-bold", theme === "light" ? "text-slate-900" : "text-white")}>
                <span className="text-blue-600">Case Studies</span>
              </p> */}
          </div>
        </ScrollReveal>
      </div>

      {/* TV-View Container for Desktop */}
      <div className="hidden lg:block mb-8">
        <ScrollReveal>
          <div
            className={cn(
              "rounded-2xl p-8 md:p-12 border transition-all duration-300",
              "shadow-[0_0_50px_rgba(59,130,255,0.1),inset_0_1px_7px_rgba(59,95,246,0.15),0_20px_20px_rgba(59,130,255,0.05)]",
              isDark
                ? "bg-gradient-to-br from-surface/50 to-surface/20 border-white/10 shadow-[0_0_40px_rgba(59,130,255,0.1),inset_0_1px_7px_rgba(59,95,246,0.1),0_15px_15px_rgba(59,130,255,0.05)]"
                : "bg-gradient-to-br from-blue-50/50 to-white border-blue-200/50"
            )}
          >
            {/* <div className="
          p-8 rounded-3xl
           border-2 border-slate-200 dark:border-slate-800\
           bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 
           shadow-2xl
           "> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Centered View All Button */}
      {/* <div className="mt-16 flex justify-center">
        <Link href="/projects">
          <OutlineButton variant="default">View All Projects</OutlineButton>
        </Link>
      </div> */}
    </section>
  );
}

