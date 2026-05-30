import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";
import { Skill } from "@/lib/types";
import { HTMLAttributes, SyntheticEvent, useState } from "react";
import Image from "next/image";

interface SkillPillProps extends HTMLAttributes<HTMLDivElement> {
    skill: Skill;
    isDark: boolean;
    delay?: number;
}

export const SkillPill: React.FC<SkillPillProps> = ({ skill, isDark, delay = 0 }) => {
    const [src, setSrc] = useState<string>(`/images/Tools/${skill.image}`);
    const handleError = (e: SyntheticEvent<HTMLImageElement>) => console.log("error: ", e)
        // setSrc(`/images/Tools/${skill.image}.svg`);

    return (
        <ScrollReveal key={skill.name} delay={delay}>
            <div className={cn(
                "group flex items-center gap-2.5 pl-4 pr-3.5 py-3 rounded-2xl border transition-all duration-200 cursor-default",
                isDark
                    ? "bg-[var(--surface)] border-white/8 hover:border-primary/40 hover:bg-primary/5"
                    : "bg-white border-slate-200 shadow-sm hover:border-primary/30 hover:shadow-md"
            )}>
                <div className="flex items-center gap-2">
                    <Image
                        src={src}
                        alt={skill.name}
                        width={20}
                        height={20}
                        className="object-contain"
                        onError={handleError}
                    />
                    <div className="flex flex-col">
                        <span className={cn("text-sm font-semibold leading-tight", isDark ? "text-white" : "text-[#111]")}>{skill.name}</span>
                        <div className={cn("mt-1.5 w-16 h-1 rounded-full overflow-hidden", isDark ? "bg-white/10" : "bg-slate-100")}>
                            <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-primary" style={{ width: `${skill.level}%` }} />
                        </div>
                    </div>
                </div>
                <span className="text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
            </div>
        </ScrollReveal>
    );
}