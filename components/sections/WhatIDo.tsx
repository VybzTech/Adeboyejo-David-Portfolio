'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/common/ScrollReveal';
import { SERVICES } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animation';
import * as Icons from 'phosphor-react';

export default function WhatIDo() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Code: <Icons.Code size={32} weight="fill" />,
      Database: <Icons.Database size={32} weight="fill" />,
      Rocket: <Icons.Rocket size={32} weight="fill" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <section className="section-container bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="heading-lg text-text-primary mb-4">What I Do</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            I specialize in building premium SaaS products across the full stack.
            From frontend to backend, I focus on performance, scalability, and user experience.
          </p>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              custom={index}
              className="group"
            >
              <div
                className="card p-8 h-full flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedService(
                  selectedService === service.title ? null : service.title
                )}
              >
                {/* Icon */}
                <div className="mb-4 text-accent-primary group-hover:text-accent-secondary transition-colors">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="heading-sm text-text-primary mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-text-muted flex-grow mb-6">{service.description}</p>

                {/* CTA */}
                <Button variant="ghost" size="sm" className="text-left w-max">
                  Learn more →
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Details Panel */}
        {selectedService && (
          <motion.div
            className="mt-16 p-8 bg-surface rounded-xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {SERVICES.find((s) => s.title === selectedService)?.details && (
              <div className="max-w-3xl">
                <h4 className="heading-sm text-text-primary mb-4">{selectedService}</h4>
                <p className="text-text-muted mb-6">
                  {SERVICES.find((s) => s.title === selectedService)?.details.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-text-primary mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.find((s) => s.title === selectedService)?.details.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-background rounded-full text-sm text-accent-primary border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-text-primary mb-3">Use Cases</h5>
                    <ul className="space-y-2">
                      {SERVICES.find((s) => s.title === selectedService)?.details.useCases.map((useCase) => (
                        <li key={useCase} className="text-text-muted text-sm flex items-center gap-2">
                          <Icons.Check size={16} className="text-accent-primary" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="primary" size="md">
                  Start a Project
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
