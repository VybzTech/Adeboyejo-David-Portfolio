"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { LuMousePointerClick } from "react-icons/lu";

export interface CardProps {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  icon: React.ReactNode;
  onViewMore: () => void;
}

export function SkillCard({ title, description, details, technologies, icon, onViewMore }: CardProps) {
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
      className="relative h-96 w-full rounded-3xl cursor-pointer z-10"
    >
      {/* Premium Border */}
      <div
        className="absolute inset-0 rounded-3xl p-[2px]"
        style={{
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
          >
            <motion.div
              className={cn(
                "font-medium font-body capitalize cursor-pointer",
                "relative overflow-hidden rounded-3xl transition-all duration-300 flex items-center justify-between group/btn",
                "text-primary text-sm lg:text-[1rem]"
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
