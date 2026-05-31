"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimeNameProps {
  children: ReactNode;
  className?: string;
}

export const AnimeName: React.FC<AnimeNameProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
