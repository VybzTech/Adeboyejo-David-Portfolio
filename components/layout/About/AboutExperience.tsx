import { useState } from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PillIconButton } from "@/components/common/PillIconButton";
import { ExperienceModal } from "./ExperienceModal";
import { ArrowBendUpRightIcon, ArrowUpRightIcon, SuitcaseSimpleIcon } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyType: string;
  description: string;
  tags: string[];
  current: boolean;
}

interface AboutExperienceProps {
  experienceItems: ExperienceItem[];
  // isDark: boolean;
}

export const AboutExperience: React.FC<AboutExperienceProps> = ({ experienceItems }) => {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const openModal = (item: ExperienceItem) => {
    setSelected(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section>
      <ScrollReveal>
        <div className={cn("flex items-center gap-3 mb-3", isDark ? "text-white" : "text-[#111]")}>
          <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary" )}>
            <SuitcaseSimpleIcon size={20} weight="bold" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Career</span>
        </div>
        <h2 className={cn("text-3xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]")}>Experience</h2>
      </ScrollReveal>
      <div className="relative pl-6 space-y-10">
        <div className={cn("absolute left-0 top-2 bottom-0 w-px", isDark ? "bg-white/10" : "bg-slate-200")} />
        {experienceItems.map((item, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <div className="relative">
              {/* Dot */}
              <div className={cn(
                "absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 shadow-md",
                item.current
                  ? "bg-primary border-primary shadow-[0_0_8px_rgba(19,91,232,0.5)]"
                  : isDark ? "bg-white/20 border-white/20" : "bg-slate-300 border-slate-200"
              )} />
              {/* Card */}
              <div className={cn(
                "p-5 rounded-2xl border transition-all duration-200 hover:shadow-md",
                isDark
                  ? "bg-[var(--surface)] border-white/8 hover:border-white/15"
                  : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
              )}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className={cn("text-xs font-bold uppercase tracking-widest", item.current ? "text-primary" : isDark ? "text-[var(--text-muted)]" : "text-slate-400")}>
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">Current</span>
                    )}
                  </div>
                  <ArrowUpRightIcon size={16} className={isDark ? "text-white/20" : "text-slate-300"} />
                </div>
                <h3 className={cn("text-base font-bold mb-0.5", isDark ? "text-white" : "text-[#111]")}>{item.role}</h3>
                <p className={cn("text-sm font-medium mb-3", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>{item.company} · {item.companyType}</p>
                <p className={cn("text-sm leading-relaxed mb-4", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((t) => (
                    <span key={t} className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full", isDark ? "bg-primary/10 text-primary/80" : "bg-blue-50 text-primary")}>{t}</span>
                  ))}
                </div>
                <PillIconButton
                  icon={<ArrowBendUpRightIcon size={18} weight="bold" />}
                  title="Preview"
                  variant="secondary"
                  onClick={() => openModal(item)}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      {selected && (
        <ExperienceModal isOpen={open} onClose={closeModal} item={selected} isDark={isDark} />
      )}
    </section>
  );
};
