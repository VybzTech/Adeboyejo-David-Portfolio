"use client";

import { motion } from "framer-motion";
import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import heroGif from "@/public/images/Home-Design.gif";
import { AnimatedBadge } from "@/components/ui/AnimatedBadge";
import { Intro } from "./Intro";
import { useTheme } from "@/components/providers/ThemeProvider";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { ArrowRightIcon, EyeIcon } from "@phosphor-icons/react";
import { TechMarquee } from "./TechMarquee";
import { cn } from "@/lib/utils";
import { Animation } from "@/components/common/Animation";

export function Hero() {

  const { theme } = useTheme();
  const contactButtonClass = cn(
    "overflow-hidden rounded-3xl border transition-all duration-500",
    theme === "dark"
      ? "bg-gray-800/70 backdrop-blur-sm border-gray-600/40"
      : "bg-black/10 backdrop-blur-sm border-white/30",
    "shadow-[0_0_60px_2px_rgba(59,130,246,0.2),inset_0_1px_0_2px_rgba(255,255,255,0.8)]",
    "hover:shadow-[0_0_80px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.8),0_20px_60px_rgba(59,130,246,0.15)]"
  );

  return (
    <section className="relative w-full overflow-hidden bg-white" id="Home">
      {/* md+: padded wrapper gives the card-with-margin look from the design */}
      {/* md:overflow-visible */}
      {/* <div className={cn("md:px-[5%] md:py-4 lg:px-[6%] lg:pt-[10.1vh]",
      )}> */}
      <BackgroundImage
        src={heroGif}
        className={cn("min-h-screen h-screen",
          // "md:rounded-3xl md:h-[90vh] md:max-h-[90vh]",
          // "lg:h-[90vh] lg:max-h-[90vh] md:min-h-auto"
          // "lg:rounded-3xl lg:overflow-hidden"

        )}
        overlay={theme === "light" ? false : true}
      >
        <div className={cn(
          "flex-1 flex flex-col items-between justify-start text-center",
          "px-[7vw] pt-[18vh]",
          "md:px-[6vw] md:pt-[14vh]",
          "lg:px-[8vw] lg:pt-[18vh]")}>
          <div className="mx-auto w-full flex flex-col items-start">
            <AnimatedBadge text="Let's Build" />
            <Intro />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className={cn("flex flex-wrap gap-2.5 lg:gap-7 justify-center mt-0 items-center",
                "md:justify-start"
              )}
            >
              <Link href="/case-studies">
                <OutlineButton>
                  View Case Studies
                </OutlineButton>
              </Link>
              <OutlineButton>
                Download CV
              </OutlineButton> 
            </motion.div>
          </div>
        </div>

        {/* Tech Marquee */}
        {/* <div className="pb-5"> */}
        <Animation animation="bounce-in" delay={2} duration={1}>

        <TechMarquee />
        </Animation>
        {/* </div> */}
      </BackgroundImage>
      {/* </div> */}
    </section>
  );
}