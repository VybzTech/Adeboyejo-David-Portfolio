'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ResumeModal } from "@/components/layout/Home/ResumeModal";
import AboutHero from "@/components/layout/About/AboutHero";
import { AboutSkills } from "@/components/layout/About/AboutSkills";
import { AboutExperience } from "@/components/layout/About/AboutExperience";
import { skillCategories, statItems, experienceItems, educationItems, certificateItems, socialLinks } from "@/components/layout/About/aboutData";
import { useTheme } from "@/components/providers/ThemeProvider";
import { AboutEducation } from "@/components/layout/About/AboutEducation";
import { AboutCertificates } from "@/components/layout/About/AboutCertificates";
import { AboutProcesses } from "@/components/layout/About/AboutProcesses";
import { AboutCTA } from "@/components/layout/About/AboutCTA";



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
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-5 bg-primary animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/12 -left-40 w-80 h-80 rounded-full blur-3xl opacity-10 bg-blue-400/50 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 pt-32 pb-24 px-6 pl-8 max-w-7xl mx-auto">
          <AboutHero openUp={() => setIsResumeOpen(true)} statItems={statItems} socialLinks={socialLinks} />
          <AboutSkills skillCategories={skillCategories} />
          {/* JOURNEY SO FAR HEADER */}
          <AboutExperience experienceItems={experienceItems} />
          <AboutEducation educationItems={educationItems} />
          <AboutCertificates certificateItems={certificateItems} />
          <AboutProcesses />
          <AboutCTA openResume={() => setIsResumeOpen(true)} />
        </div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
