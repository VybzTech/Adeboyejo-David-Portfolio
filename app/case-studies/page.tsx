"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { CaseStudiesHero } from "@/components/layout/CaseStudies/CaseStudiesHero";
import { CategoryFilter } from "@/components/layout/CaseStudies/CategoryFilter";
import { ProjectGrid } from "@/components/layout/CaseStudies/ProjectGrid";
import { getProjects } from "@/lib/projectsService";
import { Project } from "@/lib/types";

export default function CaseStudiesPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const CATEGORIES = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "SaaS", "AI"];

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" || project.tags?.toLocaleString().toLowerCase().includes(activeCategory.toLowerCase())
  );

  const projectCount = (cat: string) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.tags.includes(cat)).length;

  useEffect(() => {
    async function loadProjects() {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        isDark ? "bg-[var(--background)]" : "bg-[#f9f9fa]"
      )}
    >
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-5 bg-primary animate-pulse" />
        <div
          className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full blur-3xl opacity-15 bg-blue-400/50 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hero & Content Section */}
      <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <CaseStudiesHero isDark={isDark} totalCount={projects?.length} />

        {/* Filters - Integrated Below Hero */}
        <div className="mt-16 mb-16">
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            isDark={isDark}
            projectCount={projectCount}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Projects Grid */}
        <ProjectGrid projects={filteredProjects} isDark={isDark} />
      </div>
    </div>
  );
}
