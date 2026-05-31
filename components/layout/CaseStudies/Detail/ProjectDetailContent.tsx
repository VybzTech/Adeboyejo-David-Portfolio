"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { ImageSlider } from "./ImageSlider";
import { MetricsSection } from "./MetricsSection";
import { ContentSection } from "./ContentSection";
import { CommentSection } from "./CommentSection";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const images = project.images || [project.image];

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      isDark ? "bg-[var(--background)]" : "bg-white"
    )}>
      {/* Hero Section with Image Slider */}
      <div className="relative pt-30 pb-7 px-7 md:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className={cn(
              "text-5xl md:text-7xl font-heading font-black mb-5 leading-tight",
              isDark ? "text-white" : "text-slate-900"
            )}>
              {project.name}
            </h1>
            <p className={cn(
              "text-md md:text-xl mr-8",
              isDark ? "text-white/60" : "text-slate-600"
            )}>
              {project.description}
            </p>
          </motion.div>

          {/* Image Slider with Navigation */}
          <ImageSlider images={images} projectName={project.name} isDark={isDark} />

          {/* Metrics Section */}
          <MetricsSection
            role={project.role}
            timeline={project.timeline}
            status={project.status}
            metrics={project.metrics}
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <ContentSection
            description={project.description}
            fullContent={project.fullContent}
            stack={project.stack}
            tags={project.tags}
            github={project.github}
            link={project.link}
          />
        </div>
      </div>

      {/* Comment Section */}
      <div className="px-6 pb-18">
        <div className="max-w-6xl mx-auto">
          <CommentSection projectName={project.name} />
        </div>
      </div>
    </div>
  );
}
