"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowUpRight, GraduationCapIcon } from "@phosphor-icons/react";
import { educationItems, EducationItems } from "./aboutData";
import { useTheme } from "@/components/providers/ThemeProvider";
import { EducationModal } from "./EducationModal";
import Image from "next/image";

interface AboutEducationProps {
  educationItems: EducationItems[]
}

export const AboutEducation: React.FC<AboutEducationProps> = ({ educationItems }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selected, setSelected] = useState<EducationItems | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = (item: EducationItems) => {
    setSelected(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section className="mt-16">
      <ScrollReveal>
        <div
          className={cn(
            "flex items-center gap-3 mb-3",
            isDark ? "text-white" : "text-[#111]"
          )}
        >
          <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
            <GraduationCapIcon size={32} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Education
          </span>
        </div>
        <h2
          className={cn(
            "text-3xl font-heading font-black mb-10",
            isDark ? "text-white" : "text-[#111]"
          )}
        >
          Academic Journey
        </h2>
      </ScrollReveal>

      <div className="space-y-8">
        {educationItems.map((ed, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <div
              onClick={() => openModal(ed)}
              className={cn(
                "hover:cursor-pointer",
                "p-5 rounded-2xl border transition-all duration-200 hover:shadow-md",
                isDark
                  ? "bg-[var(--surface)] border-white/8 hover:border-primary/30"
                  : "bg-white border-slate-200 shadow-sm hover:border-primary/30"
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest",
                      isDark ? "text-[var(--text-muted)]" : "text-slate-400"
                    )}
                  >
                    {ed.period}
                  </span>
                  {ed.current && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">Current</span>
                  )}
                </div>
                <ArrowUpRight size={22} className={isDark ? "text-white/20" : "text-slate-300"} />
              </div>

              {/* Institution Logo + Degree */}
              <div className="flex items-start gap-3">
                {ed.logo && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                    <Image
                      src={ed.logo}
                      alt={ed.institution}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain bg-white/50 dark:bg-white/5"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className={cn("text-base font-bold mb-1", isDark ? "text-white" : "text-[#111]")}>
                    {ed.degree}
                  </h3>
                  <p className={cn("text-sm font-medium mb-2", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>
                    {ed.institution}
                  </p>
                  <p className={cn("text-sm leading-relaxed", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>
                    {ed.description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {selected && (
        <EducationModal isOpen={open} onClose={closeModal} item={selected} />
      )}
    </section>
  );
};
