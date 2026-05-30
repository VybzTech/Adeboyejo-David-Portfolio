import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/lib/data";
import { HeadCircuitIcon } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { SkillGroup } from "./SkillGroup";
import { SkillCategory } from "@/lib/types";

interface AboutSkillsProps {
  skillCategories: readonly SkillCategory[];
}

export const AboutSkills: React.FC<AboutSkillsProps> = ({ skillCategories }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section className="mb-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-3">
          <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
            {/* Icon placeholder */}
            <HeadCircuitIcon size={30} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Expertise</span>
        </div>
        <h2 className={cn("text-3xl md:text-4xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]")}>Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Arsenal</span></h2>
      </ScrollReveal>
      <div className="space-y-10">
        {skillCategories.map((cat) => {
          const group = SKILLS.filter((s) => s.category === cat);
          if (!group.length) return null;
          return <SkillGroup key={cat} cat={cat} isDark={isDark} group={group} />
        })}
      </div>
    </section>
  )
};
