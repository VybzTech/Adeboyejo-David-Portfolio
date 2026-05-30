"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { PillIconButton } from "@/components/common/PillIconButton";
import Image from "next/image";

const RESUME_PAGES = [
  "/pdf/David_Adeboyejo_Resume_1.jpg",
  "/pdf/David_Adeboyejo_Resume_2.jpg",
];
const RESUME_PDF = "/pdf/Adeboyejo-David.pdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Scrollable container ref & scroll-tracking state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPct, setScrollPct] = useState(0);

  // Single-page view state (for the page dot navigator)
  const [activePage, setActivePage] = useState(0);
  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);

  // Reset on open & lock body scroll
  useEffect(() => {
    if (isOpen) {
      setScrollPct(0);
      setActivePage(0);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Track scroll percentage + which page is in view
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const total = scrollHeight - clientHeight;
    setScrollPct(total > 0 ? (scrollTop / total) * 100 : 0);

    // Determine active page from scroll midpoint
    if (page2Ref.current) {
      const page2Top = page2Ref.current.offsetTop;
      setActivePage(scrollTop + clientHeight / 2 >= page2Top ? 1 : 0);
    }
  };

  // Scroll to a page by index
  const scrollToPage = (idx: number) => {
    const ref = idx === 0 ? page1Ref : page2Ref;
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="resume-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className={cn(
            "fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-sm",
            isDark ? "bg-black/65" : "bg-black/45"
          )}
          onClick={onClose}
        >
          {/* ── Modal shell ──────────────────────────────────────── */}
          <motion.div
            key="resume-modal"
            initial={{ scale: 0.93, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.93, y: 20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-3xl mx-4 mt-16 rounded-2xl overflow-hidden",
              "flex flex-col",
              "shadow-2xl border",
              isDark
                ? "bg-[var(--surface)] border-white/10"
                : "bg-white border-slate-200"
            )}
            style={{ maxHeight: "88vh" }}
          >
            {/* ── Top bar ─────────────────────────────────────────── */}
            <div
              className={cn(
                "flex items-center justify-between px-5 py-3.5 border-b flex-shrink-0",
                isDark ? "border-white/8 bg-[var(--surface)]" : "border-slate-100 bg-white"
              )}
            >
              {/* Title + page indicator */}
              <div className="flex items-center gap-3">
                <span className={cn(
                  "text-sm font-bold tracking-tight",
                  isDark ? "text-white" : "text-[#111]"
                )}>
                  David Adeboyejo — Resume
                </span>
                <span className={cn(
                  "text-xs font-semibold px-2 py-0.5 rounded-full",
                  isDark ? "bg-white/8 text-[var(--text-muted)]" : "bg-slate-100 text-slate-500"
                )}>
                  {RESUME_PAGES.length} pages
                </span>
              </div>

              {/* Page navigation dots */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToPage(Math.max(0, activePage - 1))}
                  aria-label="Previous page"
                  className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full border transition-all cursor-pointer",
                    isDark
                      ? "border-white/15 text-white/60 hover:text-white hover:border-white/30 disabled:opacity-30"
                      : "border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 disabled:opacity-30"
                  )}
                  disabled={activePage === 0}
                >
                  <ArrowLeft size={13} weight="bold" />
                </button>

                {RESUME_PAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToPage(i)}
                    aria-label={`Page ${i + 1}`}
                    className={cn(
                      "rounded-full transition-all duration-200 cursor-pointer",
                      i === activePage
                        ? "w-5 h-2 bg-primary"
                        : isDark
                        ? "w-2 h-2 bg-white/20 hover:bg-white/40"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    )}
                  />
                ))}

                <button
                  onClick={() => scrollToPage(Math.min(RESUME_PAGES.length - 1, activePage + 1))}
                  aria-label="Next page"
                  className={cn(
                    "flex items-center justify-center w-7 h-7 rounded-full border transition-all cursor-pointer",
                    isDark
                      ? "border-white/15 text-white/60 hover:text-white hover:border-white/30 disabled:opacity-30"
                      : "border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 disabled:opacity-30"
                  )}
                  disabled={activePage === RESUME_PAGES.length - 1}
                >
                  <ArrowRight size={13} weight="bold" />
                </button>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close resume"
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full border transition-all cursor-pointer",
                  isDark
                    ? "border-white/10 text-white/60 hover:text-red-400 hover:border-red-400/30 hover:bg-red-400/10"
                    : "border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50"
                )}
              >
                <X size={15} weight="bold" />
              </button>
            </div>

            {/* ── Scrollable content ──────────────────────────────── */}
            <div className="relative flex-1 min-h-0 overflow-y-auto">
              {/* Diamond scrollbar track */}
              <div className="custom-scrollbar-track" style={{ zIndex: 50 }}>
                <div
                  className="scrollbar-fill"
                  style={{ height: `${scrollPct}%` }}
                />
                <div
                  className="scrollbar-thumb-diamond"
                  style={{ top: `${scrollPct}%` }}
                />
              </div>

              {/* Pages container */}
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className={cn(
                  "h-full overflow-y-auto overflow-x-hidden scrollbar-hide",
                  "flex flex-col gap-4 p-4"
                )}
              >
                {RESUME_PAGES.map((src, i) => (
                  <div
                    key={i}
                    ref={i === 0 ? page1Ref : page2Ref}
                    className={cn(
                      "relative w-full rounded-xl overflow-hidden flex-shrink-0 border",
                      isDark ? "border-white/8 shadow-lg" : "border-slate-200 shadow-md"
                    )}
                    // A4 aspect ratio — 1 : √2 ≈ 1 : 1.414
                    style={{ aspectRatio: "1 / 1.415" }}
                  >
                    <Image
                      src={src}
                      alt={`Resume page ${i + 1}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 768px"
                    />

                    {/* Page label */}
                    <div className={cn(
                      "absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border",
                      isDark ? "bg-black/50 border-white/10 text-white" : "bg-white/80 border-slate-200 text-slate-600"
                    )}>
                      Page {i + 1} / {RESUME_PAGES.length}
                    </div>
                  </div>
                ))}

                {/* Bottom breathing room so last page isn't flush against action bar */}
                <div className="h-4 flex-shrink-0" />
              </div>
            </div>

            {/* ── Action bar ──────────────────────────────────────── */}
            <div
              className={cn(
                "flex items-center justify-center gap-3 px-5 py-3.5 border-t flex-shrink-0",
                isDark ? "border-white/8 bg-[var(--surface)]" : "border-slate-100 bg-white"
              )}
            >
              <PillIconButton
                href={RESUME_PDF}
                download="David_Adeboyejo_Resume.pdf"
                icon={<Download size={17} weight="bold" className="text-white" />}
                title="Download PDF"
                className="!mx-0 !py-2.5 !px-6 text-sm"
              />
              <PillIconButton
                onClick={onClose}
                icon={<X size={17} weight="bold" />}
                title="Close"
                hideTextOnSmall
                variant="secondary"
                className="!mx-0 !py-2.5 !px-6 text-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}











// import { motion } from "framer-motion";
// import { X, Download } from "@phosphor-icons/react";
// import { useTheme } from "@/components/providers/ThemeProvider";
// import { cn } from "@/lib/utils";
// import { PillIconButton } from "@/components/common/PillIconButton";
// const Resume = "/pdf/Adeboyejo-David.pdf#view=FitH&pagemode=none";

// interface ResumeModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
//   const { theme } = useTheme();

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: isOpen ? 1 : 0 }}
//       exit={{ opacity: 0 }}
//       className={cn(
//         "fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-sm transition-opacity",
//         isOpen ? "pointer-events-auto" : "pointer-events-none",
//         theme === "light" ? "bg-black/40" : "bg-black/60"
//       )}
//       onClick={onClose}
//     >
//       <div className="w-full h-full mt-16 px-8 flex justify-center items-start">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className={cn(
//             "absolute top-4 right-4 z-10 text-gray-200",
//             "p-4 lg:p-5 rounded-full transition-colors",
//             "hover:bg-gray-800/40 hover:text-red-600"
//             // : "hover:bg-white/10 text-white"
//           )}
//         >
//           <X size={28} />
//         </button>
//         <motion.div
//           initial={{ scale: 0.9, y: 10 }}
//           animate={{ scale: isOpen ? 1 : 0.9, y: isOpen ? 0 : 10 }}
//           className={cn(
//             "relative w-full max-w-4xl h-[84vh] rounded-2xl overflow-hidden",
//             theme === "light"
//               ? "bg-white shadow-xl"
//               : "bg-[var(--surface)] shadow-2xl"
//           )}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Resume preview */}
//           <iframe
//             src={Resume}
//             className="w-full h-full"
//           />
//         </motion.div>
//         {/* Action buttons */}
//         <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
//           <PillIconButton
//             href={Resume}
//             download="David_Adeboyejo_Resume.pdf"
//             icon={<Download size={18} weight="bold" className="text-white" />}
//             title="Download PDF"
//             className="!mx-0"
//           />
//           <PillIconButton
//             onClick={onClose}
//             icon={<X size={18} weight="bold" className="text-black hover:text-red-600" />}
//             title="Close"
//             hideTextOnSmall={true}
//             className="!mx-0"
//             variant="secondary"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }