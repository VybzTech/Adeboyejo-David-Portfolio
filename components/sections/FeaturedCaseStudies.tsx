'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/common/ScrollReveal';
import { cardHoverVariants, containerVariants, itemVariants } from '@/lib/animation';
import { ArrowRight } from 'phosphor-react';

export default function FeaturedCaseStudies() {
  const projects = [
    {
      slug: 'project-1',
      title: 'SaaS Dashboard',
      image: '/case-studies/saas-dashboard.png',
      role: 'Lead Developer',
      problem: 'Building a real-time analytics platform',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
      metric: '40% faster reporting',
    },
    {
      slug: 'project-2',
      title: 'Mobile App',
      image: '/case-studies/mobile-app.png',
      role: 'Full Stack',
      problem: 'Cross-platform app with offline sync',
      stack: ['React Native', 'Node.js', 'Firebase'],
      metric: '100k+ downloads',
    },
    {
      slug: 'project-3',
      title: 'AI Integration',
      image: '/case-studies/ai-integration.png',
      role: 'Backend Lead',
      problem: 'LLM-powered automation tool',
      stack: ['Next.js', 'OpenAI', 'Stripe'],
      metric: '3x revenue growth',
    },
  ];

  return (
    <section className="section-container bg-surface/30 relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <h2 className="heading-lg text-text-primary mb-4">Featured Work</h2>
          <p className="text-text-muted text-lg max-w-3xl">
            Recent projects showcasing full-stack capabilities and product thinking.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Link href={`/case-studies/${project.slug}`}>
                <motion.div
                  variants={cardHoverVariants}
                  className="h-full bg-background border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden bg-surface">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Badge size="sm" variant="secondary" className="mb-2">
                        {project.role}
                      </Badge>
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4">{project.problem}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} size="xs" variant="subtle">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-accent-primary font-semibold text-sm">{project.metric}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-accent-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    View Case Study
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <ScrollReveal className="mt-16 md:mt-20 text-center">
          <Link href="/case-studies">
            <Button size="lg">
              See All Projects
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
