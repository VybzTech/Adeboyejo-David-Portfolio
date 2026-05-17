"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import { GithubLogo, Globe, CaretRight, CaretLeft } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

export function FeaturedCaseStudies() {
  const { theme } = useTheme();
  const featured = PROJECTS.slice(0, 6); // Show 6 projects in grid
  const isDark = theme === "dark";
  const [toolsOpen, setToolsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleTools = (projectId: string) => {
    setToolsOpen((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-blue-600">
                Case Studies
              </h2>
              <p className="text-4xl md:text-5xl font-heading font-bold max-w-xl text-slate-900">
                Featured <span className="text-blue-600">Projects</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* <ScrollReveal direction="right">
            <Link href="/case-studies">
              <OutlineButton variant="default">View All</OutlineButton>
            </Link>
          </ScrollReveal> */}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group h-full overflow-hidden rounded-2xl border border-blue-200/60 bg-gradient-to-b from-white to-blue-50/50 transition-all duration-500 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(19,91,232,0.1)] flex flex-col"
              >
                {/* Image Carousel with Embla */}
                <EmblaCarouselSlide images={project.images || [project.image]} projectName={project.name} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Centered View All Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/case-studies">
            <OutlineButton variant="default">View All Projects</OutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Embla Carousel Component
function EmblaCarouselSlide({
  images,
  projectName,
}: {
  images: string[];
  projectName: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 });
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
    <div className="relative overflow-hidden h-64 md:h-72 bg-blue-100" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((img, idx) => (
          <div key={idx} className="flex-[0_0_100%] min-w-0 relative">
            <Image
              src={img}
              alt={`${projectName} ${idx}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 bg-white/90 hover:bg-white text-blue-600 disabled:opacity-50"
          >
            <CaretLeft size={20} weight="fill" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 bg-white/90 hover:bg-white text-blue-600 disabled:opacity-50"
          >
            <CaretRight size={20} weight="fill" />
          </button>
        </>
      )}
    </div>
  );
}

