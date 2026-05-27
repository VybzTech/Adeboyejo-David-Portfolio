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
                className={cn("group h-full overflow-hidden rounded-2xl border-2",
                    "flex flex-col border-1  shadow-lg transition-all duration-300",
                      "text-primary text-sm lg:text-[1rem] ease-in-out",
            isDark
                  ? "border-blue-600 shadow-md shadow-blue-800/30 hover:shadow-blue-800"
                  : "border-blue-100/30 inset 0 1px 2px rgba(255,255,255,1), 0 8px 16px rgba(19,91,232,0.1)",
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
                    <h3 className={cn("text-lg md:text-xl lg:text-2xl font-heading font-bold mb-2 tracking-[0.25px]", isDark ? "text-white" : "text-slate-900")}>{project.name}</h3>
                    <p className={cn("text-sm mb-4 line-clamp-2", isDark ? "text-slate-300" : "text-slate-900")}> 
                        
                        {project.description}
                    </p>
                    <div className="mt-auto  pt-4 border-t border-2/8 dark:border-sky-600/20">
                        <Link href={`/case-studies/${project.id}`}>
                            <button className={cn("w-fit ml-auto text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 group/link", isDark ? "text-white" : "text-slate-900")}>
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
