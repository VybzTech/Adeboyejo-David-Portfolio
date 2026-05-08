'use client';

import { motion } from 'framer-motion';
import { Download } from 'phosphor-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/common/ScrollReveal';
import { itemVariants, containerVariants } from '@/lib/animation';

// For server-side metadata, this needs to be in a layout.tsx or separate metadata file
// For now, using client-side approach with Helmet or Next.js head component

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'PostgreSQL', 'API Design', 'Authentication', 'DevOps'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero */}
      <section className="section-container bg-gradient-to-b from-surface/30 to-background pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary">About Me</h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Building premium SaaS products that deliver real business value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-container bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              I&apos;m a full-stack engineer with 4+ years building SaaS products. My journey started with a passion for
              clean code and great user experiences. Over the years, I&apos;ve evolved to focus on the intersection of
              engineering excellence and business impact.
            </p>
            <p>
              Every line of code I write serves a purpose. I believe in building products that users love, teams
              maintain easily, and businesses can scale. That&apos;s why I specialize in full-stack development with
              deep expertise in React, Next.js, Node.js, and modern DevOps practices.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source, and mentoring
              junior developers. I&apos;m always excited to discuss product strategy, architecture decisions, and how
              technology can solve real problems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills */}
      <section className="section-container bg-surface/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Technical Skills</h2>
            <p className="text-text-muted text-lg">
              A comprehensive toolkit built over years of professional development.
            </p>
          </ScrollReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skills.map((skillGroup) => (
              <motion.div key={skillGroup.category} variants={itemVariants} className="space-y-4">
                <h3 className="text-lg font-bold text-text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} size="sm" variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resume CTA */}
      <section className="section-container bg-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Ready to Explore?</h2>
            <p className="text-text-muted text-lg">
              Download my resume for detailed information about my experience and projects.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/resume.pdf" download>
                <Button size="lg" className="flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
