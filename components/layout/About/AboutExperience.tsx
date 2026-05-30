import { useState } from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExperienceModal } from "./ExperienceModal";
import { ArrowBendUpRightIcon, ArrowUpRightIcon, BriefcaseIcon, SuitcaseSimpleIcon } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import ExperienceBox from "./ExperienceBox";
import { ExperienceItems } from "./aboutData";

interface AboutExperienceProps {
  experienceItems: ExperienceItems[];
  // isDark: boolean;
}

export const AboutExperience: React.FC<AboutExperienceProps> = ({ experienceItems }) => {
  const [selected, setSelected] = useState<ExperienceItems | null>(null);
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const openModal = (item: ExperienceItems) => {
    setSelected(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section>
      <ScrollReveal>
        <div className={cn("flex items-center gap-3 mb-3", isDark ? "text-white" : "text-[#111]")}>
          <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary" )}>
            <BriefcaseIcon size={28} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Career</span>
        </div>
        <h2 className={cn("text-3xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]")}>Experience</h2>
      </ScrollReveal>
      <div className="relative pl-6 space-y-10">
        <div className={cn("absolute left-0 top-2 bottom-0 w-px", isDark ? "bg-white/10" : "bg-slate-200")} />
        {experienceItems.map((item, i) => (
         <ExperienceBox key={i} item={item} i={i} isDark={isDark} openModal={openModal} />
        ))}
      </div>
      {selected && (
        <ExperienceModal isOpen={open} onClose={closeModal} item={selected} />
      )}
    </section>
  );
};
