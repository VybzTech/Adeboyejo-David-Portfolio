import { ScrollReveal } from "@/components/common/ScrollReveal";
import { CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EmblaCarouselSlide } from "./EmblaCarouselSlide";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

// Project Card Component
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";  

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        className={cn("group h-full overflow-hidden rounded-2xl border-2" ,
            "flex flex-col",
           isDark   
            ? "border-blue-200/60 dark:border-blue-800/40 bg-white dark:bg-slate-800 transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-[0_20px_50px_rgba(19,91,232,0.1)]"
       : "border-white bg-white text-slate-800 transition-all duration-500 shadow-[0_10px_20px_rgba(19,91,232,0.1), inset_0_10px_20px_rgba(255,255,255,0.7)] hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(19,91,232,0.1)]"
        )}
      >
        {/* Image Carousel */}
        <EmblaCarouselSlide images={project.images || [project.image]} projectName={project.name} />

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex gap-2 mb-3 flex-wrap">
            {project.tags.slice(0, 2).map((tag: string) => (
              <span key={tag} className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-heading font-bold mb-2 text-slate-900 dark:text-white">{project.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
            <Link href={`/case-studies/${project.id}`}>
              <button className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 group/link">
                View Details
                <CaretRight size={14} weight="bold" className="group-hover/link:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
