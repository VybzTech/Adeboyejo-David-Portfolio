"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { BRAND_INFO } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const scrollingTitles = [
  "PRODUCT ENGINEER", "FULL STACK DEVELOPER", "UI/UX DESIGNER",
  "REACT EXPERT", "MOBILE DEVELOPER", "PERFORMANCE ENGINEER",
  "PRODUCT ENGINEER", "FULL STACK DEVELOPER", "UI/UX DESIGNER"
];

export function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bannerX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background py-64">
      {/* Diagonal Banner */}
      <div className="absolute top-1/2 left-1/2 w-[200%] h-40 bg-secondary/10 -rotate-[25deg] -translate-x-1/2 -translate-y-1/2 z-0 flex items-center overflow-hidden border-y border-white/5 pointer-events-none">
        <motion.div style={{ x: bannerX }} className="flex whitespace-nowrap gap-12">
          {scrollingTitles.map((title, i) => (
            <span key={i} className="text-4xl md:text-6xl font-heading font-black text-white/20">
              {title}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-40 flex flex-col lg:flex-row gap-20">
        {/* Pinned Summary */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <ScrollReveal direction="left">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              A decade of <span className="text-gradient">excellence</span> in digital craftsmanship.
            </h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              I specialize in bridging the gap between complex engineering and intuitive design. My philosophy is rooted in performance, accessibility, and aesthetic perfection.
            </p>
            <Link href="/about">
              <Button variant="outline" className="group">
                Full Story
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        {/* Scroll Story */}
        <div className="lg:w-2/3 flex flex-col gap-24 relative pl-12 border-l border-white/5">
          <ScrollReveal direction="up">
            <div className="relative">
              <div className="absolute -left-[60px] top-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-background z-20 shadow-glow">1</div>
              <div className="glass-panel p-10 rounded-3xl">
                <h4 className="text-2xl font-heading font-bold mb-4">Who I Am</h4>
                <p className="text-text-muted leading-relaxed">
                  David is a Senior Product Engineer with a passion for building software that users actually love. With a background in both design and engineering, he brings a unique perspective to every project.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative">
              <div className="absolute -left-[60px] top-4 w-6 h-6 rounded-full bg-surface-elevated border border-white/10 flex items-center justify-center text-[10px] font-bold text-text-muted z-20">2</div>
              <div className="glass-panel p-10 rounded-3xl">
                <h4 className="text-2xl font-heading font-bold mb-4">Remote Readiness</h4>
                <p className="text-text-muted leading-relaxed">
                  Operating globally from Lagos, Nigeria. I have mastered the art of asynchronous communication and remote collaboration across multiple timezones (GMT to PST).
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative">
              <div className="absolute -left-[60px] top-4 w-6 h-6 rounded-full bg-surface-elevated border border-white/10 flex items-center justify-center text-[10px] font-bold text-text-muted z-20">3</div>
              <div className="glass-panel p-10 rounded-3xl">
                <h4 className="text-2xl font-heading font-bold mb-4">Tech Philosophy</h4>
                <p className="text-text-muted leading-relaxed">
                  I don&apos;t just write code; I architect solutions. I believe in the &quot;Server First&quot; mentality, aggressive optimization, and the importance of a delightful user experience.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
