"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  FigmaLogo,
  GithubLogo,
  Code,
  FileCss,
  FileJs,
  Atom,
  Wind,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

// Using real images from public/images/Tools with icons as fallbacks
const TECH_STACK = [
  { name: "React", image: "/images/Tools/ReactJS.png", icon: <Atom size={28} weight="fill" /> },
  { name: "Next.js", image: "/images/Tools/Next-JS.svg", icon: <span className="font-bold">Next</span> },
  { name: "Tailwind", image: "/images/Tools/TailwindCSS.png", icon: <Wind size={28} weight="fill" /> },
  { name: "JavaScript", image: "/images/Tools/JS.png", icon: <FileJs size={28} weight="fill" /> },
  { name: "C#", image: "/images/Tools/c-sharp.png", icon: <span className="font-bold">C#</span> },
  { name: ".NET", image: "/images/Tools/DOTNET-1.svg", icon: <span className="font-bold">.NET</span> },
  { name: "Flutter", image: "/images/Tools/Flutter.svg", icon: <span className="font-bold">Flutter</span> },
  { name: "Figma", image: "/images/Tools/Figma.png", icon: <FigmaLogo size={28} weight="fill" /> },
  { name: "Git", image: "/images/Tools/Github.png", icon: <GithubLogo size={28} weight="fill" /> },
];

export function TechMarquee() {
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Duplicate the array to create a seamless loop
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className={cn(
      "w-full overflow-visible py-4 md:py-6 mt-6 md:mt-10",
      "bg-black/10 backdrop-blur-[2px] shadow-[0_10px_20px_rgba(0,0,100,0.3)]",
      "relative"
    )}>
      <motion.div
        className="flex items-center gap-10 md:gap-16 whitespace-nowrap px-4"
        animate={{
          x: isMarqueeHovered ? 0 : [0, -1200],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
        onMouseEnter={() => setIsMarqueeHovered(true)}
        onMouseLeave={() => setIsMarqueeHovered(false)}
      >
        {duplicatedStack.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="relative flex items-center gap-2.5 md:gap-3 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {/* Glow effect on hover - grows with icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredTech === tech.name ? 1 : 0,
                scale: hoveredTech === tech.name ? 1.4 : 0.8,
              }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#135be8]/25 via-[#135be8]/15 to-transparent blur-2xl pointer-events-none"
            />

            {/* Tech Icon - swells on hover */}
            <motion.div
              className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center z-9 flex-shrink-0"
              animate={{
                scale: hoveredTech === tech.name ? 1.3 : 1,
                opacity: hoveredTech === tech.name ? 1 : 0.7,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {tech.image ? (
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 768px) 24px, 32px"
                  className="object-contain"
                />
              ) : (
                tech.icon
              )}
            </motion.div>

            {/* Soft tooltip name - pops from behind marquee */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.6,
                zIndex: -1,
              }}
              animate={hoveredTech === tech.name ? {
                opacity: 1,
                y: -64,
                scale: 1,
                zIndex: 50,
              } : {
                opacity: 0,
                y: 20,
                scale: 0.6,
                zIndex: -1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                mass: 0.8,
              }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
            >
              <div className="relative">
                {/* Glow background for name */}
                <div className="absolute inset-0 bg-[#135be8]/40 blur-xl rounded-md" />

                {/* Name text with glow - responsive sizing */}
                <div className="relative px-2.5 md:px-3.5 lg:px-4 py-1.5 md:py-2 lg:py-2.5 rounded-lg bg-[#135be8]/15 border border-[#135be8]/40 backdrop-blur-xl whitespace-nowrap shadow-lg shadow-[#135be8]/20">
                  <span className="text-[9px] md:text-[11px] lg:text-[13px] font-light tracking-widest text-[#135be8] font-body uppercase block">
                    {tech.name}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
