"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { X, CheckCircle } from "@phosphor-icons/react";
import { ProcessStep } from "@/lib/servicesData";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import service icons
const Planning = dynamic(() => import("@/components/services/Code").then(mod => ({ default: mod.default })), { ssr: false });
const Design = dynamic(() => import("@/components/services/Design").then(mod => ({ default: mod.default })), { ssr: false });
const Development = dynamic(() => import("@/components/services/Development").then(mod => ({ default: mod.default })), { ssr: false });
const Testing = dynamic(() => import("@/components/services/Debug").then(mod => ({ default: mod.default })), { ssr: false });
const Launch = dynamic(() => import("@/components/services/Deployment").then(mod => ({ default: mod.default })), { ssr: false });
const Growth = dynamic(() => import("@/components/services/Seo").then(mod => ({ default: mod.default })), { ssr: false });
const Support = dynamic(() => import("@/components/services/Maintenance").then(mod => ({ default: mod.default })), { ssr: false });

const iconMap: Record<string, React.ComponentType<any>> = {
  Planning,
  Design,
  Development,
  Testing,
  Launch,
  Growth,
  Support,
};

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  process: ProcessStep;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose, process }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="process-backdrop"
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
            key="process-modal"
            initial={{ scale: 0.93, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.93, y: 20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden",
              "shadow-2xl border",
              isDark
                ? "bg-[var(--surface)] border-white/10"
                : "bg-white border-slate-200"
            )}
          >
            {/* ── Header ─────────────────────────────────────────── */}
            <div
              className={cn(
                "flex items-start justify-between gap-4 px-8 py-6 border-b flex-shrink-0",
                isDark ? "border-white/8 bg-[var(--surface)]" : "border-slate-100 bg-white"
              )}
            >
              <div className="flex items-start gap-4 flex-1">
                {/* Icon bubble */}
                <div className={cn(
                  "rounded-lg flex items-center justify-center flex-shrink-0",
                  isDark ? "bg-primary/20" : "bg-primary/10",
                  "w-24 h-24 mt-0.5 p-3.5"
                )}>
                  {(() => {
                    const IconComponent = iconMap[process.icon];
                    return IconComponent ? (
                      <div className="w-full h-full flex items-center justify-center text-primary [&_svg]:w-20 [&_svg]:h-20 [&_svg]:fill-current">
                        <IconComponent />
                      </div>
                    ) : null;
                  })()}
                </div>

                {/* Title and description */}
                <div className="flex-1">
                  <h2 className={cn(
                    "text-3xl font-heading font-bold mb-2",
                    isDark ? "text-white" : "text-slate-900"
                  )}>
                    {process.title}
                  </h2>
                  <p className={cn(
                    "text-base",
                    isDark ? "text-white/60" : "text-slate-600"
                  )}>
                    {process.fullDescription}
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full border transition-all cursor-pointer flex-shrink-0 mt-1",
                  isDark
                    ? "border-white/10 text-white/60 hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/10"
                    : "border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50"
                )}
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            {/* ── Content ─────────────────────────────────────────── */}
            <div
              className={cn(
                "px-8 py-8 overflow-y-auto",
                isDark
                  ? "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/40"
                  : "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb:hover]:bg-slate-400"
              )}
              style={{ maxHeight: "calc(88vh - 180px)" }}
            >
              {/* What We Do */}
              <div className="mb-10">
                <h3 className={cn(
                  "text-xl font-heading font-bold mb-6",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  What We Do
                </h3>
                <ul className="space-y-3">
                  {process.details.whatWeDo.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={20}
                        className="text-primary flex-shrink-0 mt-0.5"
                        weight="fill"
                      />
                      <span className={cn(
                        "text-base leading-relaxed",
                        isDark ? "text-white/70" : "text-slate-600"
                      )}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Why It Matters */}
              <div className="mb-10">
                <h3 className={cn(
                  "text-xl font-heading font-bold mb-4",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  Why It Matters
                </h3>
                <div className={cn(
                  "p-5 rounded-xl border",
                  isDark ? "bg-white/5 border-white/10" : "bg-blue-50 border-blue-200"
                )}>
                  <p className={cn(
                    "text-base leading-relaxed",
                    isDark ? "text-white/70" : "text-slate-700"
                  )}>
                    {process.details.whyItMatters}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className={cn(
                  "text-xl font-heading font-bold mb-6",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  What You Get
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {process.details.deliverables.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={cn(
                        "p-4 rounded-lg border transition-all",
                        isDark
                          ? "bg-white/5 border-white/10 hover:border-primary/30"
                          : "bg-white border-slate-200 hover:border-primary/30"
                      )}
                    >
                      <p className={cn(
                        "text-sm font-medium",
                        isDark ? "text-white/80" : "text-slate-700"
                      )}>
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
