

import { motion } from "framer-motion";
import { X, Download } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { PillIconButton } from "@/components/common/PillIconButton";
const Resume = "/pdf/Adeboyejo-David.pdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-sm transition-opacity",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
        theme === "light" ? "bg-black/40" : "bg-black/60"
      )}
      onClick={onClose}
    >
      <div className="w-full h-full mt-16 px-8 flex justify-center items-start">
        {/* Close button */}
        <button
          onClick={onClose}
          className={cn(
            "absolute top-4 right-4 z-10 text-gray-200",
            "p-4 lg:p-5 rounded-full transition-colors",
            "hover:bg-gray-800/40 hover:text-red-600"
            // : "hover:bg-white/10 text-white"
          )}
        >
          <X size={28} />
        </button>
        <motion.div
          initial={{ scale: 0.9, y: 10 }}
          animate={{ scale: isOpen ? 1 : 0.9, y: isOpen ? 0 : 10 }}
          className={cn(
            "relative w-full max-w-4xl h-[84vh] rounded-2xl overflow-hidden",
            theme === "light"
              ? "bg-white shadow-xl"
              : "bg-[var(--surface)] shadow-2xl"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Resume preview */}
          <iframe
            src={Resume}
            className="w-full h-full"
          />
        </motion.div>
        {/* Action buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          <PillIconButton
            href={Resume}
            download="David_Adeboyejo_Resume.pdf"
            icon={<Download size={18} weight="bold" className="text-white" />}
            title="Download PDF"
            className="!mx-0"
          />
          <PillIconButton
            onClick={onClose}
            icon={<X size={18} weight="bold" className="text-black hover:text-red-600" />}
            title="Close"
            hideTextOnSmall={true}
            className="!mx-0"
            variant="secondary"
          />
        </div>
      </div>
    </motion.div>
  );
}
