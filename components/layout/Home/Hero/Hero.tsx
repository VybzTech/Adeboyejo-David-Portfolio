"use client";

import { motion } from "framer-motion";
import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import { TechMarquee } from "./TechMarquee";
import { PremiumCards } from "./PremiumCards";
import { BRAND_INFO } from "@/lib/data";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import heroGif from "@/public/images/Home-Design.gif";
import { useTheme } from "@/components/providers/ThemeProvider";
import { AnimatedBadge } from "@/components/ui/AnimatedBadge";

export function Hero() {

  const { theme } = useTheme();

  return (
    <section className="relative w-full overflow-hidden" id="Home">
      <BackgroundImage 
        src={heroGif}
        className="min-h-screen"
        overlay={theme === "light" ? false : true}
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            {/* Badge */}
            <AnimatedBadge text="Available for new projects" />

            {/* Title */}
            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-9xl font-heading font-black leading-[0.9] tracking-tighter mb-8 uppercase"
            >
              PRODUCT <br />
              <span className="text-[var(--accent-primary)]">ENGINEER</span>
            </motion.h1> */}

            {/* Subtitle */}
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed font-body"
            >
              Building high-performance digital products that blend aesthetics with extreme performance. Based in Remote.
            </motion.p> */}

            {/* Action Buttons */}
            {/* <motion.div
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
            </motion.div> */}
          </div>
        </div>

        {/* Tech Marquee */}
        {/* <div className="pb-10">
          <TechMarquee />
        </div> */}
      </BackgroundImage>
    </section>
  );
}