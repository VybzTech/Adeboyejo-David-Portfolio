"use client";

import { motion } from "framer-motion";
import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import { TechMarquee } from "./TechMarquee";
import { PremiumCards } from "./PremiumCards";
import { BRAND_INFO } from "@/lib/data";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative w-full">
      <BackgroundImage 
        src="/hero-bg.png" 
        className="min-h-screen flex flex-col pt-32"
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
            </span>
            Available for new projects
          </motion.div>

          {/* Title with Clash Display (Heading font) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-[0.9] tracking-tight mb-8"
          >
            PRODUCT <br />
            <span className="text-[var(--accent-primary)]">ENGINEER</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed font-body"
          >
            Building high-performance digital products that blend aesthetics with extreme performance. Based in {BRAND_INFO.location}.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Button size="lg" icon={<ArrowRight weight="bold" />}>
              Explore Work
            </Button>
            <Button variant="outline" size="lg" icon={<DownloadSimple weight="bold" />}>
              Resume
            </Button>
          </motion.div>
        </div>

        {/* Tech Marquee */}
        <TechMarquee />
      </BackgroundImage>
    </section>
  );
}
