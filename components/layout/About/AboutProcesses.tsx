"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { processSteps, ProcessStep } from "@/lib/servicesData";
import { useTheme } from "@/components/providers/ThemeProvider";
import { ProcessModal } from "./ProcessModal";
import { ArrowUpRight, Lightbulb } from "@phosphor-icons/react";
import dynamic from "next/dynamic";

// Dynamically import service icons
const Planning = dynamic(() => import("@/components/services/Design").then(mod => ({ default: mod.default })), { ssr: false });
const Design = dynamic(() => import("@/components/services/Design").then(mod => ({ default: mod.default })), { ssr: false });
const Code = dynamic(() => import("@/components/services/Code").then(mod => ({ default: mod.default })), { ssr: false });
const Testing = dynamic(() => import("@/components/services/Debug").then(mod => ({ default: mod.default })), { ssr: false });
const Launch = dynamic(() => import("@/components/services/Development").then(mod => ({ default: mod.default })), { ssr: false });
const Growth = dynamic(() => import("@/components/services/Seo").then(mod => ({ default: mod.default })), { ssr: false });
const Support = dynamic(() => import("@/components/services/Maintenance").then(mod => ({ default: mod.default })), { ssr: false });

const iconMap: Record<string, React.ComponentType<any>> = {
  Planning,
  Design,
  Code,
  Testing,
  Launch,
  Growth,
  Support,
};

interface AboutProcessesProps {
  processes?: ProcessStep[];
}

export const AboutProcesses: React.FC<AboutProcessesProps> = ({ processes = processSteps }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selected, setSelected] = useState<ProcessStep | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = (process: ProcessStep) => {
    setSelected(process);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section className="mt-24">
      <ScrollReveal>
        <div
          className={cn(
            "flex items-center gap-3 mb-3",
            isDark ? "text-white" : "text-[#111]"
          )}
        >
          <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
            <Lightbulb size={32} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Process
          </span>
        </div>
        <h2
          className={cn(
            "text-3xl font-heading font-black mb-4",
            isDark ? "text-white" : "text-[#111]"
          )}
        >
          How We Work
        </h2>
        <p
          className={cn(
            "text-lg max-w-2xl mb-12",
            isDark ? "text-white/60" : "text-slate-600"
          )}
        >
          A proven, professional approach from discovery to delivery and beyond
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processes.map((process, i) => {
          const IconComponent = iconMap[process.icon];

          return (
            <ScrollReveal key={process.id} direction="up" delay={i * 0.1}>
              <div
                onClick={() => openModal(process)}
                className={cn(
                  "hover:cursor-pointer h-full group",
                  "p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg relative overflow-hidden",
                  isDark
                    ? "bg-[var(--surface)] border-white/8 hover:border-primary/40"
                    : "bg-white border-slate-200 shadow-sm hover:border-primary/30"
                )}
              >
                {/* Icon overlay at bottom right */}
                <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  {IconComponent && <IconComponent />}
                </div>

                <div className="relative z-10">
                  {/* Icon at top left in blue */}
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    isDark ? "bg-primary/20" : "bg-primary/10"
                  )}>
                    {IconComponent && (
                      <div className="text-primary">
                        <IconComponent />
                      </div>
                    )}
                  </div>

                  {/* Title and description */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className={cn("text-lg font-heading font-bold", isDark ? "text-white" : "text-[#111]")}>
                      {process.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className={cn(
                        "flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
                        isDark ? "text-white/20 group-hover:text-primary/60" : "text-slate-300 group-hover:text-primary"
                      )}
                    />
                  </div>

                  <p className={cn(
                    "text-sm leading-relaxed",
                    isDark ? "text-white/60" : "text-slate-600"
                  )}>
                    {process.shortDescription}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {selected && (
        <ProcessModal isOpen={open} onClose={closeModal} process={selected} />
      )}
    </section>
  );
};
