"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Cpu, Globe, RocketLaunch, X } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { TbClick } from "react-icons/tb";
import { LuMousePointerClick } from "react-icons/lu";

interface CardProps {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  icon: React.ReactNode;
  onViewMore: () => void;
}

interface SkillDetail {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  icon: React.ReactNode;
}

function SkillModal({ skill, isOpen, onClose }: { skill: SkillDetail | null; isOpen: boolean; onClose: () => void }) {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const totalScrollableHeight = scrollHeight - clientHeight;
      if (totalScrollableHeight > 0) {
        setScrollPercentage((scrollTop / totalScrollableHeight) * 100);
      } else {
        setScrollPercentage(0);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setScrollPercentage(0);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [isOpen, skill]);

  if (!skill) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center backdrop-blur-sm transition-opacity overflow-y-auto",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
        theme === "light" ? "bg-black/50" : "bg-black/60"
      )}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: isOpen ? 1 : 0.9, y: isOpen ? 0 : 20 }}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative max-w-2xl w-full mx-4 rounded-2xl overflow-hidden",
          "mt-[10.1vh]",
          theme === "light"
            ? "bg-gradient-to-br from-white to-slate-50"
            : "bg-gradient-to-br from-[var(--surface)] to-[var(--background)]"
        )}
        style={{
          boxShadow:
            theme === "light"
              ? "0 20px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,1)"
              : "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          maxHeight: "calc(100vh - 10.01vh)",
        }}
      >
        {/* Custom Scrollbar */}
        <div className="custom-scrollbar-track">
            <div className="scrollbar-fill" style={{ height: `${scrollPercentage}%` }}></div>
            <div className="scrollbar-thumb-diamond" style={{ top: `${scrollPercentage}%` }}></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className={cn(
            "absolute top-6 right-8 z-10 p-2 rounded-full transition-colors hover:text-red-600",
            theme === "light"
              ? "hover:bg-slate-100 text-blue-600"
              : "hover:bg-white/10 text-primary"
          )}
        >
          <X size={24} />
        </button>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full w-full overflow-y-auto lg:overflow-y-hidden scrollbar-hide"
          style={{ maxHeight: "calc(100vh - 10.01vh)" }}
        >
          {/* Content */}
          <div className="p-8 md:p-12 space-y-6 pr-10">
          {/* Header */}
          <div className="flex items-start gap-6">
            <div
              className={cn(
                "w-20 h-20 rounded-3xl flex items-center justify-center text-4xl flex-shrink-0 shadow-lg",
                theme === "light"
                  ? "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600"
                  : "bg-gradient-to-br from-primary/20 to-primary/5 text-primary"
              )}
            >
              {skill.icon}
            </div>
            <div className="flex-1">
              <h2
                className={cn(
                  "text-3xl font-heading font-black mb-2",
                  theme === "light" ? "text-blue-600" : "text-primary"
                )}
              >
                {skill.title}
              </h2>
              <p
                className={cn(
                  "text-base leading-relaxed",
                  theme === "light" ? "text-slate-600" : "text-text-secondary"
                )}
              >
                {skill.description}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-3 border-t border-white/10">
            <h3
              className={cn(
                "text-sm font-bold uppercase tracking-widest",
                theme === "light" ? "text-slate-500" : "text-text-secondary"
              )}
            >
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold capitalize border transition-colors",
                    theme === "light"
                      ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
                      : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                  )}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          
          {/* Details */}
          <div className="space-y-4 pt-2">
            <h3
              className={cn(
                "text-sm font-bold uppercase tracking-widest",
                theme === "light" ? "text-slate-500" : "text-text-secondary"
              )}
            >
              Key Capabilities
            </h3>
            <div className="space-y-2">
              {skill.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-lg border transition-colors",
                    theme === "light"
                      ? "bg-blue-50/50 border-blue-200 hover:bg-blue-100/50"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  )}
                >
                  <div
                    className={cn(
                      "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
                      theme === "light" ? "bg-blue-600" : "bg-primary"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      theme === "light" ? "text-slate-700" : "text-text-primary"
                    )}
                  >
                    {detail}
                  </span>
                </motion.div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Card({ title, description, details, technologies, icon, onViewMore }: CardProps) {
  const { theme } = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 120 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 120 });
  const rotateXSpring = useSpring(rotateXVal, { damping: 25, stiffness: 120 });
  const rotateYSpring = useSpring(rotateYVal, { damping: 25, stiffness: 120 });

  const rotateX = useTransform(rotateXSpring, (val: number) => `${val}deg`);
  const rotateY = useTransform(rotateYSpring, (val: number) => `${val}deg`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Distance from center (-1 to 1)
    const distX = (mouseX - centerX) / centerX;
    const distY = (mouseY - centerY) / centerY;

    x.set(distX);
    y.set(distY);

    // Stronger rotation with perspective compression
    rotateXVal.set(distY * 12);
    rotateYVal.set(distX * -12);

    // Grab cursor when near edges/corners
    const cardEl = e.currentTarget as HTMLElement;
    if (Math.abs(distX) > 0.2 || Math.abs(distY) > 0.2) {
      cardEl.style.cursor = 'pointer';
    } else {
      cardEl.style.cursor = 'default';
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateXVal.set(0);
    rotateYVal.set(0);
    (event?.currentTarget as HTMLElement)?.style.setProperty('cursor', 'default');
  };

  const isDark = theme === "dark";

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 w-full rounded-3xl cursor-pointer z-19"
    >
      {/* Premium Border */}
      <div
        className="absolute inset-0 rounded-3xl p-[2px]"
        style={{
          //    rgba(0,240,255,0.3)
          background: isDark
            ? "linear-gradient(120deg, rgba(19, 91, 232, 0.04) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(47, 116, 255, 0.4) 100%)"
            : "linear-gradient(135deg, rgba(220, 225, 231, 0.3) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(30, 91, 251, 0.02) 100%)",
        }}
      >
        {/* Main Card */}
        <motion.div
          className={cn(
            "h-full w-full rounded-3xl p-8 flex flex-col justify-between group transition-all duration-500",
            isDark
              ? "bg-gradient-to-br from-[var(--surface)] to-[var(--background)]/50"
              : "bg-gradient-to-br from-white to-slate-50/80"
          )}
          style={{
            transform: "translateZ(50px)",
            boxShadow: isDark
              ? `
              inset 1px 1px 0 rgba(255,255,255,0.1),
              inset -1px -1px 0 rgba(0,0,0,0.3),
              0 20px 40px rgba(0,0,0,0.2),
              0 0 30px rgba(0, 140, 255, 0.1)
            `
              : `
              inset 1px 1px 0 rgba(255,255,255,1),
              inset -1px -1px 0 rgba(0,0,0,0.05),
              0 10px 30px rgba(19,91,232,0.1),
              0 0 20px rgba(19,91,232,0.05)
            `,
          }}
          whileHover={{
            boxShadow: isDark
              ? `
              inset 1px 1px 0 rgba(255,255,255,0.15),
              inset -1px -1px 0 rgba(0,0,0,0.4),
              0 30px 60px rgba(0,140,255,0.15),
              0 0 40px rgba(0,140,255,0.2)
            `
              : `
              inset 1px 1px 0 rgba(255,255,255,1),
              inset -1px -1px 0 rgba(0,0,0,0.08),
              0 20px 50px rgba(19,91,232,0.15),
              0 0 30px rgba(19,91,232,0.1)
            `,
          }}
        >
          <div className="space-y-4">
            <motion.div
              className={cn(
                "w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg",
                isDark
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 text-primary"
                  : "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600"
              )}
              style={{
                boxShadow: isDark
                  ? "inset 0 1px 2px rgba(255,255,255,0.2), 0 8px 16px rgba(0,140,255,0.15)"
                  : "inset 0 1px 2px rgba(255,255,255,1), 0 8px 16px rgba(19,91,232,0.1)",
              }}
              whileHover={{ scale: 1.1 }}
              onClick={onViewMore}
            >
              {icon}
            </motion.div>
            <h3
              className={cn(
                "text-2xl font-heading font-bold",
                isDark ? "text-[var(--text-primary)]" : "text-slate-900"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-[var(--text-secondary)]" : "text-slate-600"
              )}
            >
              {description}
            </p>
          </div>

          {/* Creative Explore Button */}
          <motion.button
            onClick={onViewMore}
            className="mt-4 opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          // group-hover:opacity-100
          >
            <motion.div
              className={cn(
                "font-medium font-body capitalize cursor-pointer",
                "relative overflow-hidden rounded-3xl transition-all duration-300 flex items-center justify-between group/btn",
                "text-primary text-sm lg:text-[1rem]",
                // isDark
                //   ? "bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 hover:border-primary/60 text-primary"
                //   : "bg-gradient-to-r from-blue-100/50 to-blue-50/50 border border-blue-300/40 hover:border-blue-400 text-blue-700"
              )}
              whileHover={{ y: -2 }}
            >
              {/* Animated background */}
              <motion.div
                className={cn(
                  "absolute inset-0 -z-10 rounded-3xl",
                  isDark
                    ? "bg-gradient-to-r from-primary/20 to-transparent"
                    : "bg-gradient-to-r from-blue-200/30 to-transparent"
                )}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <span className="tracking-normal lg:tracking-[-0.5px] capitalize">View more</span>

              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <LuMousePointerClick strokeWidth={1.5}
                  //  <TbClick size={38} strokeWidth={1.5}
                  className={cn(
                    "text-xl pr-5 font-bold",
                    "w-14 h-14",
                    "md:w-16 md:h-16",
                    "lg:w-14 lg:h-14",

                    isDark ? "text-[var(--text-secondary)]" : "text-blue-600"
                  )}
                />
              </motion.div>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PremiumCards() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const cards: (CardProps & { id: number })[] = [
    {
      id: 1,
      title: "Product Engineering",
      description: "Crafting end-to-end digital solutions with a focus on scalability, performance, and elite user experience.",
      icon: <Cpu size={32} weight="duotone" />,
      details: [
        "Full-stack product development from concept to production",
        "User-centric design philosophy with data-driven decisions",
        "Performance optimization and core web vitals mastery",
        "Scalable architecture for millions of concurrent users",
        "Cross-platform compatibility and accessibility standards",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL"],
      onViewMore: () => {
        setSelectedSkill({
          title: "Product Engineering",
          description: "Crafting end-to-end digital solutions with a focus on scalability, performance, and elite user experience.",
          icon: <Cpu size={32} weight="duotone" />,
          details: [
            "Full-stack product development from concept to production",
            "User-centric design philosophy with data-driven decisions",
            "Performance optimization and core web vitals mastery",
            "Scalable architecture for millions of concurrent users",
            "Cross-platform compatibility and accessibility standards",
          ],
          technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL"],
        });
      },
    },
    {
      id: 2,
      title: "Full-Stack Systems",
      description: "Building robust architectures that seamlessly bridge the gap between frontend elegance and backend power.",
      icon: <Globe size={32} weight="duotone" />,
      details: [
        "RESTful and GraphQL API design and implementation",
        "Database architecture with PostgreSQL, MongoDB, and Redis",
        "Microservices architecture and distributed systems",
        "Real-time data synchronization and WebSocket integration",
        "Infrastructure as code with Docker and Kubernetes",
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS"],
      onViewMore: () => {
        setSelectedSkill({
          title: "Full-Stack Systems",
          description: "Building robust architectures that seamlessly bridge the gap between frontend elegance and backend power.",
          icon: <Globe size={32} weight="duotone" />,
          details: [
            "RESTful and GraphQL API design and implementation",
            "Database architecture with PostgreSQL, MongoDB, and Redis",
            "Microservices architecture and distributed systems",
            "Real-time data synchronization and WebSocket integration",
            "Infrastructure as code with Docker and Kubernetes",
          ],
          technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS"],
        });
      },
    },
    {
      id: 3,
      title: "High Performance",
      description: "Optimizing applications for extreme speed, accessibility, and search engine dominance.",
      icon: <RocketLaunch size={32} weight="duotone" />,
      details: [
        "Advanced performance metrics and optimization strategies",
        "Code splitting, lazy loading, and resource prioritization",
        "Image optimization and responsive design implementation",
        "SEO optimization and structured data markup",
        "Lighthouse score optimization and Core Web Vitals",
      ],
      technologies: ["Web Vitals", "Lighthouse", "Webpack", "Vite", "Image Optimization", "CDN"],
      onViewMore: () => {
        setSelectedSkill({
          title: "High Performance",
          description: "Optimizing applications for extreme speed, accessibility, and search engine dominance.",
          icon: <RocketLaunch size={32} weight="duotone" />,
          details: [
            "Advanced performance metrics and optimization strategies",
            "Code splitting, lazy loading, and resource prioritization",
            "Image optimization and responsive design implementation",
            "SEO optimization and structured data markup",
            "Lighthouse score optimization and Core Web Vitals",
          ],
          technologies: ["Web Vitals", "Lighthouse", "Webpack", "Vite", "Image Optimization", "CDN"],
        });
      },
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 lg:gap-12 w-full max-w-7xl mx-auto px-6 py-20">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      {/* Skill Modal */}
      <SkillModal skill={selectedSkill} isOpen={!!selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  );
}
