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
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array to create a seamless loop
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className={cn(
      "w-full overflow-hidden py-4 md:py-6 mt-6 md:mt-10",
      "bg-blue/10 backdrop-blur-[2px] shadow-[0_10px_20px_rgba(0,0,100,0.3)]"
    )}>
      <motion.div
        className="flex items-center gap-10 md:gap-16 whitespace-nowrap px-4"
        animate={{
          x: isHovered ? 0 : [0, -1200], // Approximate width to shift smoothly
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // Slower, more elegant speed
            ease: "linear",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedStack.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2.5 md:gap-3 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center  opacity-70 group-hover:opacity-100 transition-all duration-300">
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
            </div>
            {/* <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{tech.name}</span> */}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
