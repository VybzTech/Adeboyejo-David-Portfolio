"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { X, CheckCircle, LinkSimple } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  logo?: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CertificateItem;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, item }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="certificate-backdrop"
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
            key="certificate-modal"
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
                      alt={item.issuer}
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
                    {item.name}
                  </h2>
                  <p className={cn(
                    "text-sm font-medium",
                    isDark ? "text-white/60" : "text-slate-500"
                  )}>
                    {item.issuer} • {item.issuedDate}
                    {item.expiryDate && ` - Expires ${item.expiryDate}`}
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

              {/* Credential Info */}
              {(item.credentialId || item.credentialUrl) && (
                <div className="mb-8">
                  <h3 className={cn(
                    "text-sm font-bold uppercase tracking-widest mb-4",
                    isDark ? "text-white/50" : "text-slate-500"
                  )}>
                    Credential Details
                  </h3>
                  <div className={cn(
                    "p-4 rounded-lg border",
                    isDark
                      ? "bg-white/5 border-white/10"
                      : "bg-slate-50 border-slate-200"
                  )}>
                    {item.credentialId && (
                      <p className={cn(
                        "text-sm mb-2",
                        isDark ? "text-white/70" : "text-slate-600"
                      )}>
                        <span className={cn("font-semibold", isDark ? "text-white/90" : "text-slate-900")}>ID:</span> {item.credentialId}
                      </p>
                    )}
                    {item.credentialUrl && (
                      <Link href={item.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-2 text-sm text-primary hover:text-blue-600 cursor-pointer"
                        >
                          <LinkSimple size={16} />
                          <span>View Certificate</span>
                        </motion.div>
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {/* Skills */}
              {item.skills && item.skills.length > 0 && (
                <div>
                  <h3 className={cn(
                    "text-sm font-bold uppercase tracking-widest mb-4",
                    isDark ? "text-white/50" : "text-slate-500"
                  )}>
                    Key Skills Covered
                  </h3>
                  <ul className="space-y-3">
                    {item.skills.map((skill, idx) => (
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
                          {skill}
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
