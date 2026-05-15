"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, Globe, MagnifyingGlass, ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "SaaS", "AI"];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(project =>
    activeCategory === "All" || project.tags.includes(activeCategory)
  );

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
            Case <span className="text-gradient">Studies</span>.
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mb-16">
            A deep dive into the projects I&apos;ve built, the problems I&apos;ve solved, and the impact I&apos;ve delivered.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full border text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary border-primary text-background shadow-glow"
                    : "border-white/10 hover:border-white/20 text-text-muted"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.05}>
              <Card className="group h-full flex flex-col overflow-hidden border-white/5 hover:border-primary/20 transition-all duration-500">
                <div className="relative h-64 overflow-hidden bg-surface-elevated">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <Button size="icon" variant="primary">
                          <Globe size={20} />
                        </Button>
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <Button size="icon" variant="glass">
                          <GithubLogo size={20} />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{project.name}</h3>
                  <p className="text-text-muted text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-medium text-text-muted">{project.timeline}</span>
                    <Link href={`/case-studies/${project.id}`}>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Details <ArrowRight size={14} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

