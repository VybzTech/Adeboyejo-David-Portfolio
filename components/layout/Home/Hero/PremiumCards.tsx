"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Cpu, Globe, RocketLaunch } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Card({ title, description, icon }: CardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-full rounded-3xl transition-all duration-500"
    >
      {/* Silver Edge / Border */}
      <div 
        className="absolute inset-0 rounded-3xl p-[2px]" 
        style={{
          background: "linear-gradient(135deg, #c0c0c0 0%, #ffffff 50%, #808080 100%)",
        }}
      >
        {/* Neomorphic Content */}
        <div 
          className="h-full w-full rounded-[22px] bg-[var(--surface)] p-8 flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_0_20px_rgba(19,91,232,0.3)]"
          style={{
            transform: "translateZ(50px)",
            boxShadow: "inset 4px 4px 10px rgba(0,0,0,0.5), inset -4px -4px 10px rgba(255,255,255,0.05)",
          }}
        >
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--accent-primary)] shadow-lg group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)]">
              {title}
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
            Learn More
            <div className="w-8 h-[1px] bg-[var(--accent-primary)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PremiumCards() {
  const cards = [
    {
      title: "Product Engineering",
      description: "Crafting end-to-end digital solutions with a focus on scalability, performance, and elite user experience.",
      icon: <Cpu size={32} weight="duotone" />,
    },
    {
      title: "Full-Stack Systems",
      description: "Building robust architectures that seamlessly bridge the gap between frontend elegance and backend power.",
      icon: <Globe size={32} weight="duotone" />,
    },
    {
      title: "High Performance",
      description: "Optimizing applications for extreme speed, accessibility, and search engine dominance.",
      icon: <RocketLaunch size={32} weight="duotone" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6 py-20">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
