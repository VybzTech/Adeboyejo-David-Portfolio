// import { ScrollReveal } from "@/components/common/ScrollReveal";
// import { cn } from "@/lib/utils";
// import { PillIconButton } from "@/components/common/PillIconButton";
// import { ArrowUpRight } from "@phosphor-icons/react";
// import { educationItems } from "./aboutData";

// interface AboutEducationProps {
//   isDark: boolean;
// }

// export const AboutEducation: React.FC<AboutEducationProps> = ({ isDark }) => (
//   <section className="mb-24">
//     <ScrollReveal>
//       <div className={cn("flex items-center gap-3 mb-3", isDark ? "text-white" : "text-[#111]"))}>
//       <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>🏫</div>
//       <span className="text-sm font-semibold uppercase tracking-widest text-primary">Education</span>
//     </div>
//     <h2 className={cn("text-3xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]"))}>My Journey</h2>
//     </ScrollReveal >
//     <div className="space-y-8">
//       {educationItems.map((edu, idx) => (
//         <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
//           <div className={cn("p-5 rounded-2xl border transition-all duration-200", isDark ? "bg-[var(--surface)] border-white/8 hover:border-primary/30" : "bg-white border-slate-200 shadow-sm hover:border-primary/30"))}>
//             <div className="flex items-start justify-between mb-2">
//               <span className={cn("text-xs font-bold uppercase tracking-widest", isDark ? "text-[var(--text-muted)]" : "text-slate-400")}>{edu.period}</span>
//               {edu.current && (
//                 <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">Current</span>
//               )}
//             </div>
//             <h3 className={cn("text-base font-bold mb-1", isDark ? "text-white" : "text-[#111]"))}>{edu.degree}</h3>
//             <p className={cn("text-sm font-medium mb-2", isDark ? "text-[var(--text-muted)]" : "text-slate-500"))}>{edu.institution}</p>
//             <p className={cn("text-sm leading-relaxed", isDark ? "text-[var(--text-muted)]" : "text-slate-600"))}>{edu.description}</p>
//           </div >
//         </ScrollReveal >
//       ))}
//     </div >
//   </section >
// );

// components/layout/About/AboutEducation.tsx
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PillIconButton } from "@/components/common/PillIconButton";
import { ArrowUpRight, GraduationCapIcon } from "@phosphor-icons/react";
import { educationItems, EducationItems } from "./aboutData";
import { useTheme } from "@/components/providers/ThemeProvider";

interface AboutEducationProps {
  educationItems: EducationItems[]
}

export const AboutEducation: React.FC<AboutEducationProps> = ({ educationItems }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return <section className="mt-16">
    <ScrollReveal>
      <div
        className={cn(
          "flex items-center gap-3 mb-3",
          isDark ? "text-white" : "text-[#111]"
        )}
      >
        <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
          {/* Icon placeholder */}
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
            className={cn(
              "p-5 rounded-2xl border transition-all duration-200",
              isDark
                ? "bg-[var(--surface)] border-white/8 hover:border-primary/30"
                : "bg-white border-slate-200 shadow-sm hover:border-primary/30 hover:shadow-md"
            )}
          >
            <div className="flex items-start justify-between mb-2">
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-widest",
                  isDark ? "text-[var(--text-muted)]" : "text-slate-400"
                )}
              >
                {ed.period}
              </span>
              <ArrowUpRight size={16} className={isDark ? "text-white/20" : "text-slate-300"} />
            </div>
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
        </ScrollReveal>
      ))}
    </div>
  </section>

};
