"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, DownloadSimple, FilePdf } from "@phosphor-icons/react";

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Resume({ isOpen, onClose }: ResumeProps) {
  const resumeUrl = "/pdf/Adeboyejo David.pdf";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-full max-h-[92vh] bg-[#0f0f0f] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-glow">
                  <FilePdf size={28} weight="duotone" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl leading-none mb-1.5 text-white tracking-tight">Curriculum Vitae</h3>
                  <p className="text-xs text-text-muted font-medium uppercase tracking-widest opacity-70">Adeboyejo David • Product Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  download="Adeboyejo_David_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/5 group shadow-sm"
                  title="Download Resume"
                >
                  <DownloadSimple size={20} weight="bold" className="group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline font-medium text-sm">Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-2xl transition-all border border-red-500/20 group"
                  title="Close Modal"
                >
                  <X size={24} weight="bold" className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="flex-1 bg-[#121212] relative overflow-hidden group">
               <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full h-full border-none opacity-0 animate-in fade-in duration-1000 fill-mode-forwards"
                title="Adeboyejo David Resume"
              />
              
              {/* Fallback/Loader Hint */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <p className="text-text-muted text-sm font-medium">Loading Experience...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
