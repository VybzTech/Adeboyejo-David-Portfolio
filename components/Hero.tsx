'use client';

import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, roleIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-4 z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-primary text-lg font-semibold tracking-wider uppercase">Hey there, welcome</p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold mb-6 text-foreground"
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Adeboyejo David
          </span>
        </motion.h1>

        {/* Typewriter effect */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl text-foreground/80 mb-8 h-16 flex items-center justify-center"
        >
          <span className="text-primary font-semibold">{displayText}</span>
          <span className="animate-pulse ml-1">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-foreground/70 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting elegant solutions to complex problems. Specializing in Next.js, React, TypeScript, and modern web technologies to build scalable and beautiful applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#work"
            className="px-8 py-3 rounded-lg bg-primary text-background font-semibold hover:shadow-glow-cyan-strong transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 font-semibold transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
