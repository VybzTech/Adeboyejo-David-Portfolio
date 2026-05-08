'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { scrollRevealVariants } from '@/lib/animation';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'stagger';
  custom?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  variant = 'default',
  custom = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  if (variant === 'stagger') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={scrollRevealVariants}
        custom={custom}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={scrollRevealVariants}
    >
      {children}
    </motion.div>
  );
}
