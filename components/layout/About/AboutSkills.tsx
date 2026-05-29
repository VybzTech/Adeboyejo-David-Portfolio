import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PillIconButton } from "@/components/common/PillIconButton";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/lib/data";
import { Lightning, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

interface AboutSkillsProps {
  skillCategories: readonly ["frontend", "backend", "design", "tools"];
  isDark: boolean;
}

export const AboutSkills: React.FC<AboutSkillsProps> = ({ skillCategories, isDark }) => (
  <section className="mb-24">
    <ScrollReveal>
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
          {/* Icon placeholder */}
        </div>
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Expertise</span>
      </div>
      <h2 className={cn("text-3xl md:text-4xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]")}>Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Arsenal</span></h2>
    </ScrollReveal>
    <div className="space-y-10">
      {skillCategories.map((cat) => {
        const group = SKILLS.filter((s) => s.category === cat);
        if (!group.length) return null;
        return (
          <div key={cat}>
            <p className={cn("text-xs font-bold uppercase tracking-widest mb-4", isDark ? "text-[var(--text-muted)]" : "text-slate-400")}>{
              {"frontend": "Frontend", "backend": "Backend", "design": "Design", "tools": "Tools & Infra"}[cat]
            }</p>
            <div className="flex flex-wrap gap-3">
              {group.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 0.05}>
                  <div className={cn(
                    "group flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-200 cursor-default",
                    isDark
                      ? "bg-[var(--surface)] border-white/8 hover:border-primary/40 hover:bg-primary/5"
                      : "bg-white border-slate-200 shadow-sm hover:border-primary/30 hover:shadow-md"
                  )}>
                    <div className="flex flex-col">
                      <span className={cn("text-sm font-semibold leading-tight", isDark ? "text-white" : "text-[#111]")}>{skill.name}</span>
                      <div className={cn("mt-1.5 w-16 h-1 rounded-full overflow-hidden", isDark ? "bg-white/10" : "bg-slate-100")}>
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-primary" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
