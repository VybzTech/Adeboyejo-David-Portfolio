"use client";

import { PROJECTS } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GithubLogo, Globe } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export function FeaturedCaseStudies() {
  const featured = PROJECTS.slice(0, 3); // Top 3 projects

  return (
    <section className="py-32 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Case Studies</h2>
              <p className="text-4xl md:text-5xl font-heading font-bold max-w-xl">
                Featured <span className="text-gradient">Projects</span>.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Link href="/case-studies">
              <Button variant="ghost" className="group">
                View All Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.1}
              className={index === 0 ? "lg:col-span-2" : "col-span-1"}
            >
              <Card className="group overflow-hidden border-white/5 hover:border-primary/20 transition-all duration-500">
                <div className={cn(
                  "relative overflow-hidden flex flex-col lg:flex-row h-full",
                  index === 0 ? "lg:min-h-[500px]" : "lg:min-h-[400px]"
                )}>
                  {/* Image Section */}
                  <div className={cn(
                    "relative w-full overflow-hidden bg-surface-elevated",
                    index === 0 ? "lg:w-3/5" : "lg:w-full h-64 lg:h-72"
                  )}>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Section */}
                  <div className={cn(
                    "p-8 lg:p-12 flex flex-col justify-center",
                    index === 0 ? "lg:w-2/5" : "w-full"
                  )}>
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-text-muted mb-8 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex gap-4 mt-auto">
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <Button size="sm" variant="primary" className="gap-2">
                            <Globe size={18} />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <Button size="sm" variant="glass" className="gap-2">
                            <GithubLogo size={18} />
                            Source
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

