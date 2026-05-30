import { SkillPill } from "@/components/common/SkillPill";
import { cn } from "@/lib/utils";
import { Skill } from "@/lib/types";
import { SkillCategory } from "./aboutData";


export const SkillGroup = ({ cat, isDark, group }: { cat: SkillCategory, isDark: boolean, group: Skill[] }) => (
    <div key={cat}>
        <p className={cn("text-xs font-semibold font-heading uppercase tracking-widest mb-4", isDark ? "text-[var(--text-muted)]" : "text-slate-400")}>
            {cat}
        </p>
        <div className="flex flex-wrap gap-3">
            {group.map((skill, i) => (
                <SkillPill key={skill.name} skill={skill} isDark={isDark} delay={i * 0.05} />
            ))}
        </div>
    </div>
);