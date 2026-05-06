'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    link: '#',
    impact: 'Increased sales conversion by 35%',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team workspaces, and analytics.',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    link: '#',
    impact: 'Used by 50+ teams daily',
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    description: 'Intelligent chatbot interface with multi-turn conversations, context awareness, and custom integrations.',
    tags: ['Next.js', 'Claude API', 'React', 'Tailwind CSS'],
    link: '#',
    impact: 'Reduced response time by 60%',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive visualizations and data exploration tools.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    link: '#',
    impact: 'Processed 1M+ data points daily',
  },
  {
    id: 5,
    title: 'Mobile App',
    description: 'Cross-platform mobile application for on-the-go productivity and team collaboration.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
    impact: '10K+ downloads in first month',
  },
  {
    id: 6,
    title: 'Content Management System',
    description: 'Headless CMS with flexible content modeling, version control, and powerful APIs.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    link: '#',
    impact: 'Managing 50K+ content items',
  },
];

export default function Work() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300 h-full flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-xs text-primary font-semibold">📈 Impact: {project.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-primary/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-foreground">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-foreground/70 text-lg mb-6">{selectedProject.description}</p>

              <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-primary font-semibold">📈 Impact: {selectedProject.impact}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-lg bg-secondary/20 text-secondary border border-secondary/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={selectedProject.link}
                className="block w-full px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:shadow-glow-cyan-strong transition-all duration-300 text-center"
              >
                View Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
