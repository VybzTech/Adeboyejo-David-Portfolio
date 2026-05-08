'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/common/ScrollReveal';
import { itemVariants } from '@/lib/animation';

export default function AboutPreview() {
  return (
    <section className="section-container bg-background relative py-20 md:py-32">
      {/* Diagonal Banner Background */}
      <div className="absolute inset-0 top-0 h-32 md:h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent -skew-y-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Panel - Pinned */}
          <ScrollReveal className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto lg:mx-0 rounded-2xl bg-surface border border-border shadow-soft overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 flex items-center justify-center">
                  <span className="text-text-muted text-sm">Avatar</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">About David</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Product-focused engineer building premium SaaS products that ship fast.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-text-muted">
                  <span>📍</span>
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <span>🕐</span>
                  <span>WAT (UTC+1)</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <span>✨</span>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Panel - Scroll Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Who I Am */}
            <ScrollReveal className="bg-surface border border-border rounded-2xl p-8 md:p-10">
              <h4 className="text-xl font-bold text-text-primary mb-4">Who I Am</h4>
              <p className="text-text-muted leading-relaxed">
                Full-stack engineer with 4+ years building SaaS products. I specialize in premium user experiences with scalable backends. Every feature serves a business goal.
              </p>
            </ScrollReveal>

            {/* Experience */}
            <ScrollReveal className="space-y-6">
              <h4 className="text-xl font-bold text-text-primary">Experience</h4>
              {[
                { title: 'Senior Product Engineer', company: 'VybzTech', period: '2023 - Present', desc: 'Full-stack SaaS development' },
                { title: 'Frontend Engineer', company: 'Tech Startup', period: '2021 - 2023', desc: 'React & TypeScript focus' },
              ].map((job, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-surface border border-border rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-text-primary">{job.title}</h5>
                    <span className="text-text-muted text-sm">{job.period}</span>
                  </div>
                  <p className="text-accent-primary text-sm mb-2">{job.company}</p>
                  <p className="text-text-muted text-sm">{job.desc}</p>
                </motion.div>
              ))}
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
              <Link href="/about">
                <Button size="lg" fullWidth>
                  Read Full Story
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
