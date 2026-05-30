"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { PillIconButton } from "@/components/common/PillIconButton";
import { X, BookOpenIcon } from "@phosphor-icons/react";
import Image from "next/image";

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
  current: boolean;
  logo?: string;
  coursework?: string[];
  achievements?: string[];
}

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: EducationItem;
}

export const EducationModal: React.FC<EducationModalProps> = ({ isOpen, onClose, item }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="education-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm",
            isDark ? "bg-black/65" : "bg-black/45"
          )}
          onClick={onClose}
        >
          <motion.div
            key="education-modal"
            initial={{ scale: 0.93, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.93, y: 20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-2xl mx-4 rounded-2xl overflow-hidden",
              "shadow-2xl border",
              isDark
                ? "bg-[var(--surface)] border-white/10"
                : "bg-white border-slate-200"
            )}
          >
            {/* ── Top bar ─────────────────────────────────────────── */}
            <div
              className={cn(
                "flex items-start justify-between gap-4 px-6 py-4 border-b flex-shrink-0",
                isDark ? "border-white/8 bg-[var(--surface)]" : "border-slate-100 bg-white"
              )}
            >
              <div className="flex items-start gap-4 flex-1">
                {item.logo && (
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border shadow-sm" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                    <Image
                      src={item.logo}
                      alt={item.institution}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain bg-white/50 dark:bg-white/5"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h2 className={cn(
                    "text-2xl font-heading font-bold mb-1",
                    isDark ? "text-white" : "text-slate-900"
                  )}>
                    {item.degree}
                  </h2>
                  <p className={cn(
                    "text-sm font-medium",
                    isDark ? "text-white/60" : "text-slate-500"
                  )}>
                    {item.institution} • {item.period}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full border transition-all cursor-pointer flex-shrink-0",
                  isDark
                    ? "border-white/10 text-white/60 hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/10"
                    : "border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50"
                )}
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            {/* ── Content ─────────────────────────────────────────── */}
            <div className="px-6 pt-4 pb-8 overflow-y-auto scrollbar-hide" style={{ maxHeight: "calc(88vh - 140px)" }}>
              {/* Description */}
              <div className="mb-8">
                <p className={cn(
                  "text-base leading-relaxed",
                  isDark ? "text-white/70" : "text-slate-600"
                )}>
                  {item.description}
                </p>
              </div>

              {/* Coursework */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="mb-8">
                  <h3 className={cn(
                    "text-sm font-bold uppercase tracking-widest mb-4",
                    isDark ? "text-white/50" : "text-slate-500"
                  )}>
                    Key Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className={cn(
                          "text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors",
                          isDark
                            ? "bg-primary/20 text-primary hover:bg-primary/30"
                            : "bg-blue-100 text-primary hover:bg-blue-200"
                        )}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div>
                  <h3 className={cn(
                    "text-sm font-bold uppercase tracking-widest mb-4",
                    isDark ? "text-white/50" : "text-slate-500"
                  )}>
                    Achievements
                  </h3>
                  <ul className="space-y-3">
                    {item.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <BookOpenIcon
                          size={18}
                          className="text-primary flex-shrink-0 mt-0.5"
                          weight="fill"
                        />
                        <span className={cn(
                          "text-sm leading-relaxed",
                          isDark ? "text-white/70" : "text-slate-600"
                        )}>
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
