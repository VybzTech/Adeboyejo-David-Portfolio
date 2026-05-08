'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { HERO, METRICS } from '@/lib/constants';
import {
  heroNameVariants,
  heroDescriptionVariants,
  heroCTAVariants,
} from '@/lib/animation';

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % HERO.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0 bg-gradient-to-b from-background to-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Greeting */}
            <motion.p
              className="text-text-muted text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {HERO.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              className="heading-xl text-text-primary"
              variants={heroNameVariants}
              initial="hidden"
              animate="visible"
            >
              {HERO.name}
            </motion.h1>

            {/* Rotating Title */}
            <div className="h-20 relative">
              {HERO.titles.map((title, index) => (
                <motion.div
                  key={title}
                  className="absolute heading-lg text-accent-primary font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentTitleIndex ? 1 : 0,
                    y: index === currentTitleIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-text-muted leading-relaxed max-w-md"
              variants={heroDescriptionVariants}
              initial="hidden"
              animate="visible"
            >
              {HERO.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={heroCTAVariants}
              initial="hidden"
              animate="visible"
            >
              {HERO.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant as 'primary' | 'secondary'}
                  size="lg"
                >
                  {cta.label}
                </Button>
              ))}
            </motion.div>

            {/* Metrics */}
            <motion.div
              className="flex flex-wrap gap-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {METRICS.map((metric) => (
                <Badge key={metric.label} variant="subtle" size="sm">
                  <span className="font-bold text-accent-primary">{metric.label}</span>
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl border border-border/30 flex items-center justify-center">
              <div className="text-center text-text-muted">
                <p className="text-sm font-medium mb-2">3D Scene Coming Soon</p>
                <p className="text-xs">React Three Fiber Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
