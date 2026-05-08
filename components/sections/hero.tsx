"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { BRAND_INFO } from "@/lib/data";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroScene = dynamic(() => import("./hero-scene").then(mod => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-surface/20 animate-pulse rounded-3xl" />,
});

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <ScrollReveal direction="left" distance={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" distance={50} delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6">
              Building <span className="text-gradient">Premium</span> <br />
              Digital Products.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="left" distance={50} delay={0.2}>
            <p className="text-lg md:text-xl text-text-muted max-w-xl mb-10 leading-relaxed">
              I&apos;m <span className="text-white font-medium">{BRAND_INFO.name}</span>, a Senior Product Engineer specialized in crafting high-performance full-stack applications with an elite tactile aesthetic.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" distance={50} delay={0.3}>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/case-studies">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button variant="outline" size="lg">
                  <DownloadSimple size={20} />
                  Download CV
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={20} delay={0.5} className="mt-12 flex flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">4+</span>
              <span className="text-xs text-text-muted uppercase tracking-wider">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-xs text-text-muted uppercase tracking-wider">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Remote</span>
              <span className="text-xs text-text-muted uppercase tracking-wider">Worldwide</span>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>

          {/* Floating Code Card Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl border-white/10 shadow-2xl z-20 max-w-xs"
          >
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <pre className="text-xs font-mono text-primary/80 leading-relaxed">
              <code>{`const developer = {
  name: "${BRAND_INFO.name}",
  skills: ["Next.js", "TS", "Go"],
  focus: "Performance",
  status: "Elite"
};`}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
