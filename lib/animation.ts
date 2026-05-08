import { Variants } from 'framer-motion';

// Scroll Reveal Animations
export const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

// Hero Load Sequence
export const heroNameVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const heroTitleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.2,
    },
  },
};

export const heroDescriptionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.4,
    },
  },
};

export const heroCTAVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.6,
    },
  },
};

export const heroVisualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.8,
    },
  },
};

// Card Animations
export const cardHoverVariants: Variants = {
  initial: { y: 0, shadow: '0 10px 30px rgba(0, 0, 0, 0.3)' },
  hover: {
    y: -8,
    shadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Button Animations
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

// Container Stagger
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Item Stagger
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Fade In Animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Slide In Animation
export const slideInVariants = (direction: 'left' | 'right' | 'up' | 'down' = 'up'): Variants => {
  const initialPositions = {
    left: { x: -30 },
    right: { x: 30 },
    up: { y: 30 },
    down: { y: -30 },
  };

  return {
    hidden: {
      opacity: 0,
      ...initialPositions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
};

// Parallax Scroll
export const parallaxVariants: Variants = {
  initial: { y: 0 },
  animate: (offset: number = 50) => ({
    y: offset,
  }),
};

// Hover Glow
export const glowHoverVariants: Variants = {
  initial: { boxShadow: '0 0 20px rgba(0, 217, 255, 0)' },
  hover: { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
};

// Common Transition Config
export const transitionConfig = {
  fast: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  default: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  slow: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};
