import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PillIconButton } from "@/components/common/PillIconButton";
import { cn } from "@/lib/utils";
import { STAR, ROCKET, MEDAL, CODE } from "@phosphor-icons/react";
import { BRAND_INFO, SKILLS } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useState } from "react";
import { ResumeModal } from "@/components/layout/Home/ResumeModal";
import { AboutHero } from "@/components/layout/About/AboutHero";
import { AboutSkills } from "@/components/layout/About/AboutSkills";
import { AboutExperience } from "@/components/layout/About/AboutExperience";
import { AboutEducation } from "@/components/layout/About/AboutEducation";
import { AboutCTA } from "@/components/layout/About/AboutCTA";
import { skillCategories, statItems, experienceItems, educationItems, socialLinks } from "@/components/layout/About/aboutData";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "min-h-screen transition-colors duration-300",
          isDark ? "bg-[var(--background)]" : "bg-[#f9f9fa]"
        )}
      >
        {/* Ambient background orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary animate-pulse" />
          <div
            className="absolute bottom-1/3 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-blue-400 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
          {/* Hero */}
          <AboutHero isDark={isDark} statItems={statItems} socialLinks={socialLinks} />

          {/* Skills Section */}
          <AboutSkills skillCategories={skillCategories} isDark={isDark} />

          {/* Experience & Education */}
          <AboutExperience experienceItems={experienceItems} isDark={isDark} />
          <AboutEducation educationItems={educationItems} isDark={isDark} />

          {/* CTA */}
          <AboutCTA isDark={isDark} />
        </div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
