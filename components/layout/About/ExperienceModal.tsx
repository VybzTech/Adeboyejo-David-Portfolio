"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { PillIconButton } from "@/components/common/PillIconButton";
import { X, CheckCircle } from "@phosphor-icons/react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyType: string;
  description: string;
  tags: string[];
  responsibilities: string[];
  current: boolean;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ExperienceItem;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose, item }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="experience-backdrop"
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
            key="experience-modal"
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
                "flex items-center justify-between px-6 py-4 border-b flex-shrink-0",
                isDark ? "border-white/8 bg-[var(--surface)]" : "border-slate-100 bg-white"
              )}
            >
              <div>
                <h2 className={cn(
                  "text-2xl font-heading font-bold mb-1",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  {item.role}
                </h2>
                <p className={cn(
                  "text-sm font-medium",
                  isDark ? "text-white/60" : "text-slate-500"
                )}>
                  {item.company} · {item.companyType} • {item.period}
                </p>
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
            <div className="px-6 py-6 overflow-y-auto scrollbar-hide" style={{ maxHeight: "calc(88vh - 140px)" }}>
              {/* Description */}
              <div className="mb-8">
                <p className={cn(
                  "text-base leading-relaxed",
                  isDark ? "text-white/70" : "text-slate-600"
                )}>
                  {item.description}
                </p>
              </div>

              {/* Responsibilities */}
              {item.responsibilities && item.responsibilities.length > 0 && (
                <div className="mb-8">
                  <h3 className={cn(
                    "text-sm font-bold uppercase tracking-widest mb-4",
                    isDark ? "text-white/50" : "text-slate-500"
                  )}>
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle
                          size={18}
                          className="text-primary flex-shrink-0 mt-0.5"
                          weight="fill"
                        />
                        <span className={cn(
                          "text-sm leading-relaxed",
                          isDark ? "text-white/70" : "text-slate-600"
                        )}>
                          {resp}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className={cn(
                  "text-sm font-bold uppercase tracking-widest mb-4",
                  isDark ? "text-white/50" : "text-slate-500"
                )}>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors",
                        isDark
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : "bg-blue-100 text-primary hover:bg-blue-200"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Action bar ──────────────────────────────────────── */}
            <div
              className={cn(
                "flex items-center justify-end gap-3 px-6 py-4 border-t flex-shrink-0",
                isDark ? "border-white/8 bg-[var(--surface)]" : "border-slate-100 bg-white"
              )}
            >
              <PillIconButton
                icon={<X size={16} weight="bold" />}
                title="Close"
                disabled={false}
                onClick={onClose}
                className="!mx-0 !py-2 !px-4 text-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
