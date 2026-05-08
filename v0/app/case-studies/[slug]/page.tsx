'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/common/ScrollReveal';
import { itemVariants } from '@/lib/animation';
import { ArrowLeft, ArrowUpRight } from 'phosphor-react';
import Link from 'next/link';

export default function CaseStudyDetail() {
  // Placeholder content - would be fetched from CMS in production
  const caseStudy = {
    title: 'SaaS Analytics Dashboard',
    role: 'Lead Developer',
    period: '6 months',
    client: 'Tech Startup',
    overview: 'Built a real-time analytics platform that processes 100k+ events per day with sub-second query response times.',
    challenge:
      'The client needed a modern analytics dashboard that could handle high-volume data ingestion while providing instant insights to their users.',
    solution:
      'Designed and built a full-stack solution using Next.js for the frontend, Node.js for the backend API, PostgreSQL with custom indexing for data storage, and Redis for caching.',
    results: [
      { metric: '100ms', description: 'Average query response time' },
      { metric: '40%', description: 'Faster reporting than competitor' },
      { metric: '99.9%', description: 'System uptime' },
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example',
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="section-container bg-background pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/case-studies" className="flex items-center gap-2 text-accent-primary hover:gap-3 transition-all">
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-container bg-gradient-to-b from-surface/30 to-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary">{caseStudy.title}</h1>
            <p className="text-xl text-text-muted">{caseStudy.overview}</p>

            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div>
                <p className="text-text-muted mb-1">Role</p>
                <p className="font-semibold text-text-primary">{caseStudy.role}</p>
              </div>
              <div>
                <p className="text-text-muted mb-1">Duration</p>
                <p className="font-semibold text-text-primary">{caseStudy.period}</p>
              </div>
              <div>
                <p className="text-text-muted mb-1">Client</p>
                <p className="font-semibold text-text-primary">{caseStudy.client}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Image */}
      <section className="section-container bg-background py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl"></div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-container bg-surface/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          <ScrollReveal className="space-y-4">
            <h2 className="text-3xl font-bold text-text-primary">The Challenge</h2>
            <p className="text-lg text-text-muted leading-relaxed">{caseStudy.challenge}</p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h2 className="text-3xl font-bold text-text-primary">Our Solution</h2>
            <p className="text-lg text-text-muted leading-relaxed">{caseStudy.solution}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="section-container bg-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary">Results & Impact</h2>
          </ScrollReveal>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.results.map((result, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-surface border border-border rounded-xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-accent-primary mb-2">{result.metric}</p>
                <p className="text-text-muted">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-container bg-surface/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.stack.map((tech) => (
                <Badge key={tech} size="sm" variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Links */}
      <section className="section-container bg-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="space-y-6">
            <h2 className="text-2xl font-bold text-text-primary">View Project</h2>
            <div className="flex flex-wrap gap-4">
              <a href={caseStudy.links.live} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="flex items-center gap-2">
                  Live Demo
                  <ArrowUpRight size={16} />
                </Button>
              </a>
              <a href={caseStudy.links.github} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="flex items-center gap-2">
                  View Code
                  <ArrowUpRight size={16} />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="section-container bg-gradient-to-b from-surface/30 to-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">Ready to Start Your Project?</h2>
            <p className="text-text-muted text-lg">Let&apos;s discuss how I can help bring your vision to life.</p>
            <Link href="/#contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
