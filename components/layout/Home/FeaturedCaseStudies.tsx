"use client";

import React, { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import { GithubLogo, Globe, CaretRight, CaretLeft } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatedName } from "@/components/ui/AnimatedName";

export function FeaturedCaseStudies() {
  const { theme } = useTheme();
  const featured = PROJECTS.slice(0, 3); // Show first 3 projects -  change to favorite: true 
  const isDark = theme === "dark";

  const metrics = [
    { label: "Years Experience", value: 4, suffix: "+", delay: 0.1 },
    { label: "Projects Completed", value: 10, suffix: "+", delay: 0.3 },
    { label: "Happy Clients", value: 5, suffix: "+", delay: 0.5 },
  ];

  function AnimatedCounter({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, value, {
          duration: 2,
          delay: delay,
          ease: "easeOut"
        });
        return controls.stop;
      }
    }, [isInView, value, delay, count]);

    return (
      <span ref={ref} className="inline-flex items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </span>
    );
  }

  return (
    // <section className={`relative py-24 px-14 overflow-hidden ${theme === 'dark' ? 'bg-[var(--background)]' : 'bg-[#fff]'}`}> 
    <section className={cn("px-20 relative overflow-hidden", theme === "light" ? "bg-white" : "bg-[var(--background)]")}> 
      <div className="max-w-7xl mx-auto pt-14 pb-8">
        {/* Metrics Section */}
        <ScrollReveal>
          <div className={cn("grid rounded-3xl grid-cols-1 md:grid-cols-3 gap-8 mb-20 p-8 md:p-12",
            // " bg-gradient-to-r from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10"
            "shadow-[0_0_50px_rgba(59,130,255,0.1),inset_0_1px_7px_rgba(59,95,246,0.15),0_20px_20px_rgba(59,130,255,0.05)]",
            isDark
              ? "bg-gradient-to-br from-surface/50 to-surface/20 border-white/10 shadow-[0_0_40px_rgba(59,130,255,0.1),inset_0_1px_7px_rgba(59,95,246,0.1),0_15px_15px_rgba(59,130,255,0.05)]"
              : "bg-gradient-to-br from-blue-50/50 to-white border-blue-200/50"
          )}>
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} delay={metric.delay} />
                </h3>
                <p className={cn("text-lg text-black", isDark ? "text-white" : "text-black font-medium")}>{metric.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Header */}
      <div className="[&>div]:w-full flex flex-col md:flex-row justify-between items-end gap-6 mt-8 mb-16">
        <ScrollReveal direction="down">
          <div className={cn("w-full text-center")}>
            {/* <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-blue-600">
                Featured Projects
              </h2> */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-medium uppercase block text-sm text-primary tracking-[0.5px]"
            >Highlighted
              {/* Featured Projects */}
            </motion.span>
            <AnimatedName name="Case Studies" className={cn( "my-3",
              "text-4xl md:text-5xl lg:text-7xl font-heading font-black"
            )} />
            {/* <p className={cn("text-4xl md:text-5xl lg:text-6xl font-heading font-bold", theme === "light" ? "text-slate-900" : "text-white")}>
                <span className="text-blue-600">Case Studies</span>
              </p> */}
          </div>
        </ScrollReveal>
      </div>

      {/* TV-View Container for Desktop */}
      {/* <div className="hidden lg:block">
        <ScrollReveal>
          <div className="p-8 rounded-3xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div> */}

      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Centered View All Button */}
      {/* <div className="mt-16 flex justify-center">
        <Link href="/projects">
          <OutlineButton variant="default">View All Projects</OutlineButton>
        </Link>
      </div> */}
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group h-full overflow-hidden rounded-2xl border border-blue-200/60 dark:border-blue-800/40 bg-white dark:bg-slate-800 transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-[0_20px_50px_rgba(19,91,232,0.1)] flex flex-col"
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

// Embla Carousel Component
function EmblaCarouselSlide({
  images,
  projectName,
}: {
  images: (string | undefined)[];
  projectName: string;
}) {
  const validImages = images.filter((img): img is string => !!img);

  if (!validImages.length) {
    return (
      <div className="relative overflow-hidden h-64 md:h-72 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
        <p className="text-slate-400">No image available</p>
      </div>
    );
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: validImages.length > 1 });
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onSelect = React.useCallback((api: any) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative overflow-hidden h-64 md:h-72 bg-blue-100 dark:bg-slate-700" ref={emblaRef}>
      <div className="flex h-full">
        {validImages.map((img, idx) => (
          <div key={idx} className="flex-[0_0_100%] min-w-0 relative">
            <Image
              src={img}
              alt={`${projectName} ${idx}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 bg-white/90 hover:bg-white text-blue-600 disabled:opacity-50"
            aria-label="Previous image"
          >
            <CaretLeft size={20} weight="fill" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 bg-white/90 hover:bg-white text-blue-600 disabled:opacity-50"
            aria-label="Next image"
          >
            <CaretRight size={20} weight="fill" />
          </button>
        </>
      )}
    </div>
  );
}

