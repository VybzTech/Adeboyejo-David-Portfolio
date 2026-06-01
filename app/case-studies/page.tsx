"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { CaseStudiesHero } from "@/components/layout/CaseStudies/CaseStudiesHero";
import { CategoryFilter } from "@/components/layout/CaseStudies/CategoryFilter";
import { ProjectGrid } from "@/components/layout/CaseStudies/ProjectGrid";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery } from "@/sanity/lib/queries";
import { sanityProjectsToFrontend } from "@/sanity/lib/projectMapper";
import { Project } from "@/lib/types";

export default function CaseStudiesPage() {

  const [projects, setProjects] = useState<Project[]>([]);

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
    async function fetchProjects() {
      const sanityProjects = await client.fetch(allProjectsQuery);
      const mappedProjects = sanityProjectsToFrontend(sanityProjects);
      setProjects(mappedProjects);
    }

    fetchProjects();
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




// import Image from "next/image";
// import Link from "next/link";
// import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr"; // Server-safe icon variants
// import { TrackedProjectCard } from "./TrackedProjectCard"; // We will create this client wrapper next
// import { urlFor } from "@/sanity/lib/image";

// import { client } from "@/sanity/lib/client";
// // Fetching structured contents from Sanity Edge Network via GROQ
// async function getProjects() {
//   const query = `*[_type == "project"] | order(_createdAt desc) {
//     title,
//     "slug": slug.current,
//     description,
//     mainImage,
//     links,
//     isFeatured,
//     techStack
//   }`;

//   // revalidate every hour (3600s), or set to 0 for real-time dynamic rendering
//   return await client.fetch(query, {}, { next: { revalidate: 10 } });
// }

// export default async function CaseStudiesPage() {
//   const projects = await getProjects();

//   return (
//     <main className="min-h-screen bg-slate-950 text-white py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-16">
//           <h1 className="text-4xl md:text-6xl font-black mb-4">Case Studies</h1>
//           <p className="text-slate-400 max-w-xl text-lg">
//             A deep dive into platforms and systems I've engineered, pulled straight from Sanity.io.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project: any) => (
//             <TrackedProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }