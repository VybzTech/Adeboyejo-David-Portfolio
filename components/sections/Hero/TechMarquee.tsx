"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FigmaLogo,
  GithubLogo,
  Code,
  FileCss,
  FileJs,
  Atom,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

// Custom icons or text-based if phosphor doesn't have all
const TECH_STACK = [
  { name: "React", icon: <Atom size={32} weight="fill" /> },
  { name: "Next.js", icon: <span className="font-bold text-xl">Next</span> },
  { name: "TypeScript", icon: <span className="font-bold text-xl">TS</span> },
  { name: "HTML5", icon: <Code size={32} weight="bold" /> },
  { name: "CSS3", icon: <FileCss size={32} weight="fill" /> },
  { name: "JavaScript", icon: <FileJs size={32} weight="fill" /> },
  { name: "Tailwind", icon: <span className="font-bold text-xl">TW</span> },
  { name: "Figma", icon: <FigmaLogo size={32} weight="fill" /> },
  { name: "Git", icon: <GithubLogo size={32} weight="fill" /> },
];

export function TechMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array to create a seamless loop
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="w-full overflow-hidden py-10 mt-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{
          x: isHovered ? 0 : [0, -1035], // Approximate width of one set
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedStack.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors cursor-default"
          >
            {tech.icon}
            <span className="text-sm font-bold uppercase tracking-widest">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
