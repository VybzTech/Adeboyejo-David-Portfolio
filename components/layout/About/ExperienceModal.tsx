import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { PillIconButton } from "@/components/common/PillIconButton";
import { X } from "@phosphor-icons/react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyType: string;
  description: string;
  tags: string[];
  current: boolean;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ExperienceItem;
  isDark: boolean;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose, item, isDark }) => {
  if (!isOpen) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",
      isDark ? "text-white" : "text-[#111]"
    )}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative w-full max-w-xl bg-white dark:bg-[var(--surface)] rounded-2xl p-6 shadow-xl",
          isDark ? "border-white/10" : "border-slate-200"
        )}
      >
        {/* Close button */}
        <PillIconButton
          icon={<X size={20} weight="bold" />}
          title="Close"
          variant="secondary"
          onClick={onClose}
          className="absolute top-4 right-4"
        />

        {/* Header */}
        <ScrollReveal>
          <h3 className={cn("text-2xl font-bold mb-2", isDark ? "text-white" : "text-[#111]")}>{item.role}</h3>
          <span className={cn("text-sm font-medium mb-4 block", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>
            {item.company} · {item.companyType} ({item.period})
          </span>
        </ScrollReveal>

        {/* Body */}
        <p className={cn("text-base leading-relaxed mb-4", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((t) => (
            <span key={t} className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full", isDark ? "bg-primary/10 text-primary/80" : "bg-blue-50 text-primary")}>
              {t}
            </span>
          ))}
        </div>
        {/* Action */}
        <PillIconButton
          icon={<ArrowUpRight size={18} weight="bold" />}
          title="Close"
          variant="secondary"
          onClick={onClose}
        />
      </motion.div>
    </div>
  );
};
