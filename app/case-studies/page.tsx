'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/common/ScrollReveal';
import { containerVariants, itemVariants } from '@/lib/animation';
import { ArrowRight } from 'phosphor-react';

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      slug: 'saas-dashboard',
      title: 'SaaS Analytics Dashboard',
      role: 'Lead Developer',
      problem: 'Built a real-time analytics platform processing 100k+ events/day',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
      category: ['fullstack', 'saas', 'dashboard'],
      metric: '40% faster reporting',
    },
    {
      slug: 'mobile-app',
      title: 'Cross-Platform Mobile App',
      role: 'Full Stack',
      problem: 'Developed native mobile apps with offline-first sync architecture',
      stack: ['React Native', 'Node.js', 'Firebase'],
      category: ['mobile', 'fullstack'],
      metric: '100k+ downloads',
    },
    {
      slug: 'ai-integration',
      title: 'AI-Powered Automation Tool',
      role: 'Backend Lead',
      problem: 'Integrated LLMs for intelligent automation workflows',
      stack: ['Next.js', 'OpenAI', 'Stripe', 'PostgreSQL'],
      category: ['fullstack', 'saas', 'ai'],
      metric: '3x revenue growth',
    },
    {
      slug: 'design-system',
      title: 'Enterprise Design System',
      role: 'Frontend Architect',
      problem: 'Created reusable component library for 20+ internal apps',
      stack: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
      category: ['frontend'],
      metric: '60% faster development',
    },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'SaaS', value: 'saas' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'AI', value: 'ai' },
  ];

  const filtered = selectedFilter === 'all' ? projects : projects.filter((p) => p.category.includes(selectedFilter));

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero */}
      <section className="section-container bg-gradient-to-b from-surface/30 to-background pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary">Case Studies</h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Selected projects showcasing full-stack capabilities and product thinking.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="section-container bg-background sticky top-0 z-40 py-6 md:py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedFilter === filter.value
                    ? 'bg-accent-primary text-background'
                    : 'bg-surface border border-border text-text-muted hover:border-accent-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((project) => (
              <motion.div key={project.slug} variants={itemVariants} className="group">
                <Link href={`/case-studies/${project.slug}`}>
                  <div className="h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent-primary transition-colors cursor-pointer">
                    {/* Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20"></div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <div>
                        <Badge size="sm" variant="secondary" className="mb-2">
                          {project.role}
                        </Badge>
                        <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-muted">{project.problem}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <Badge key={tech} size="xs" variant="subtle">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-accent-primary font-semibold text-sm">{project.metric}</p>
                      </div>

                      <div className="flex items-center text-accent-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        View Case Study
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
