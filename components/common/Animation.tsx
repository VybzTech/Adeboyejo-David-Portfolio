"use client";

import { motion, Variant } from "framer-motion";
import { ReactNode } from "react";

type AnimationType =
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "slide-down"
  | "scale-in"
  | "bounce-in"
  | "flip-in"
  | "rotate-in";

interface AnimationProps {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

const animations: Record<AnimationType, { initial: Variant; animate: Variant }> = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  },
  "scale-in": {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  "bounce-in": {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
  },
  "flip-in": {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
  },
  "rotate-in": {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
  },
};

export function Animation({
  children,
  animation = "fade-in",
  duration = 0.5,
  delay = 0,
  staggerChildren = 0,
  className = "",
}: AnimationProps) {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      transition={{
        duration,
        delay,
        staggerChildren,
      }}
    >
      {children}
    </motion.div>
  );
}

// Preset variants for common use cases
export const AnimationPresets = {
  fadeIn: (delay?: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay },
  }),
  slideInFromLeft: (delay?: number) => ({
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay },
  }),
  slideInFromRight: (delay?: number) => ({
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay },
  }),
  slideInFromTop: (delay?: number) => ({
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  }),
  slideInFromBottom: (delay?: number) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  }),
  scaleIn: (delay?: number) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay },
  }),
  bounceIn: (delay?: number) => ({
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 200, damping: 15, delay },
  }),
};
