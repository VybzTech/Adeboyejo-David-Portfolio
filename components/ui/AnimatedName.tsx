"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedNameProps {
  name?: string;
  className?: string;
}

const gradientVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function AnimatedName({ name = "Adeboyejo", className }: AnimatedNameProps) {
  return (
    <motion.div
      variants={gradientVariants}
      animate="animate"
      className={cn(
        "relative inline-block",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {name}
    </motion.div>
  );
}
