"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { AnimatedName } from "@/components/ui/AnimatedName";

interface AboutNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "about", label: "Who I Am", emoji: "👤" },
  { id: "experience", label: "Experience", emoji: "💼" },
  { id: "education", label: "Education", emoji: "🎓" },
  { id: "certification", label: "Certifications", emoji: "🏆" },
];

export function AboutNav({ activeSection, onSectionChange }: AboutNavProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2
            className={cn(
              "text-primary font-bold tracking-widest uppercase text-sm mb-4"
            )}
          >
            About
          </h2>
          {/* <h3
            className={cn(
              "text-6xl md:text-5xl font-heading font-black mb-8",
              isDark
                ? "text-[var(--text-primary)]"
                : "text-slate-900"
            )}
          >
            Who <span className="text-primary">I</span> Am
          </h3> */}
          <AnimatedName name="Who I am" className="text-5xl md:text-5xl lg:text-7xl font-heading font-black mb-8" />
          {/* <AnimatedName name="David" className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8" /> */}
        </div>

        <nav className="space-y-3">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              whileHover={{ x: 8 }}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 font-semibold",
                activeSection === section.id
                  ? isDark
                    ? "bg-primary/20 border border-primary/50 text-primary shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                    : "bg-blue-100 border border-blue-300 text-blue-700 shadow-[0_0_20px_rgba(19,91,232,0.2)]"
                  : isDark
                    ? "bg-white/5 border border-white/10 text-text-secondary hover:bg-white/10"
                    : "bg-slate-100/50 border border-slate-300/40 text-slate-600 hover:bg-slate-100"
              )}
            >
              <span className="text-xl">{section.emoji}</span>
              {section.label}
            </motion.button>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}
