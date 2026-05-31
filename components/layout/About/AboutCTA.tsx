// // components/layout/About/AboutCTA.tsx
// import { cn } from "@/lib/utils";
// import { ScrollReveal } from "@/components/common/ScrollReveal";
// import { PillIconButton } from "@/components/common/PillIconButton";
// import { ArrowUpRight } from "@phosphor-icons/react";
// import { useTheme } from "@/components/providers/ThemeProvider";

// interface AboutCTAProps {
//   openResume: () => void;
// }

// export const AboutCTA: React.FC<AboutCTAProps> = ({  openResume }) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//     return(
//   <section className="mt-20 text-center">
//     <ScrollReveal>
//       <h2
//         className={cn(
//           "text-3xl font-heading font-black mb-6",
//           isDark ? "text-white" : "text-[#111]"
//         )}
//       >
//         Let’s Build Something Amazing
//       </h2>
//       <p
//         className={cn(
//           "max-w-xl mx-auto text-lg mb-8",
//           isDark ? "text-[var(--text-muted)]" : "text-slate-600"
//         )}
//       >
//         Ready to turn your ideas into reality? Whether you need a polished product
//         or a prototype, I’m here to help. Let’s discuss how we can create a
//         high‑performance, premium experience together.
//       </p>
//       <PillIconButton
//         icon={<ArrowUpRight size={18} weight="bold" />}
//         title="Download Resume"
//         variant="secondary"
//         onClick={openResume}
//         hideTextOnSmall={false}
//         className="mx-auto"
//       />
//     </ScrollReveal>
//   </section>
// )}





// components/layout/About/AboutCTA.tsx
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PillIconButton } from "@/components/common/PillIconButton";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";

interface AboutCTAProps {
  openResume: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({ openResume }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="mt-20 text-center">
      <ScrollReveal delay={0.2}>
        <div className={cn(
          "mt-10 p-6 rounded-2xl border relative overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-[0_3px_12px_rgba(0,94,250,0.2)]",
          isDark
            ? "bg-gradient-to-br from-primary/10 to-blue-500/5 border-primary/20"
            : "bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-sm"
        )}>
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
          <h3 className={cn("font-heading font-bold text-lg mb-2", isDark ? "text-white" : "text-[#111]")}>
            Ready to build something great?
          </h3>
          <p className={cn("text-sm leading-relaxed mb-5", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>
            I&apos;m open to remote roles, freelance contracts, and exciting collaborative projects.
          </p>
          <Link href="/#contact">
            <PillIconButton
              icon={<ArrowUpRight size={18} className="text-white" />}
              title="Let's work together"
              className="mx-auto"
            />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}