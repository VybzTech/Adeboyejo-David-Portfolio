"use client";

import { motion } from "framer-motion";
import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import heroGif from "@/public/images/Home-Design.gif";
import { AnimatedBadge } from "@/components/ui/AnimatedBadge";
import { Intro } from "./Intro";
import { useTheme } from "@/components/providers/ThemeProvider";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { ArrowRightIcon, EyeIcon } from "@phosphor-icons/react";
import { TechMarquee } from "./TechMarquee";

export function Hero() {

  const { theme } = useTheme();

  return (
    <section className="relative w-full overflow-hidden" id="Home">
      <BackgroundImage
        src={heroGif}
        className="min-h-screen h-screen"
        overlay={theme === "light" ? false : true}
      >
        <div className="flex-1 flex flex-col items-between justify-start text-center px-6 pt-[18vh]">
          <div className="mx-auto w-full flex flex-col items-start">
            <AnimatedBadge text="Let's Build" /> 
            <Intro />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap gap-6 justify-center mt-4"
            >
              {/* <Button size="lg" icon={<ArrowRightIcon weight="bold" />}>
                Explore Work
              </Button> */}
              <OutlineButton icon={<EyeIcon weight="bold" size={16} />}>
                View Case Studies
              </OutlineButton>
            </motion.div>
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="pb-10">
          <TechMarquee />
        </div>
      </BackgroundImage>
    </section>
  );
}