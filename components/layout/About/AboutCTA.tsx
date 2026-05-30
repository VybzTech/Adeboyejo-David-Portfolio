// components/layout/About/AboutCTA.tsx
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PillIconButton } from "@/components/common/PillIconButton";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface AboutCTAProps {
  openResume: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({  openResume }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

    return(
  <section className="mt-20 text-center">
    <ScrollReveal>
      <h2
        className={cn(
          "text-3xl font-heading font-black mb-6",
          isDark ? "text-white" : "text-[#111]"
        )}
      >
        Let’s Build Something Amazing
      </h2>
      <p
        className={cn(
          "max-w-xl mx-auto text-lg mb-8",
          isDark ? "text-[var(--text-muted)]" : "text-slate-600"
        )}
      >
        Ready to turn your ideas into reality? Whether you need a polished product
        or a prototype, I’m here to help. Let’s discuss how we can create a
        high‑performance, premium experience together.
      </p>
      <PillIconButton
        icon={<ArrowUpRight size={18} weight="bold" />}
        title="Download Resume"
        variant="secondary"
        onClick={openResume}
        hideTextOnSmall={false}
        className="mx-auto"
      />
    </ScrollReveal>
  </section>
)}