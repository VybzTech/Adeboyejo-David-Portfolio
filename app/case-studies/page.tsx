"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { CaseStudiesHero } from "@/components/layout/CaseStudies/CaseStudiesHero";
import { CategoryFilter } from "@/components/layout/CaseStudies/CategoryFilter";
import { ProjectGrid } from "@/components/layout/CaseStudies/ProjectGrid";
import HeroBackground from "@/components/common/HeroBackground";

const CATEGORIES = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "SaaS", "AI"];

export default function CaseStudiesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((project) =>
    activeCategory === "All" || project.tags.includes(activeCategory)
  );

  const projectCount = (cat: string) =>
    cat === "All"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.tags.includes(cat)).length;

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        isDark ? "bg-[var(--background)]" : "bg-[#f9f9fa]"
      )}
    >
      <HeroBackground children={
        <div>
        {/* Ambient background orbs */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary animate-pulse" />
            <div
              className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-blue-400 animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <CaseStudiesHero isDark={isDark} totalCount={PROJECTS.length} />
            <CategoryFilter
              categories={CATEGORIES}
              activeCategory={activeCategory}
              isDark={isDark}
              projectCount={projectCount}
              onSelect={setActiveCategory}
            />

            <ProjectGrid projects={filteredProjects} isDark={isDark} />
          </div>
        </div>
      } />
    </div>
  );
}
