"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typo } from "./Typo";
import { AnimatedName } from "@/components/ui/AnimatedName";
import { cn } from "@/lib/utils";

export function Intro() {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    // Hide the greeting after 4.5 seconds (0.2s delay + 0.6s intro + 3.7s visible)
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start text-start">
      {/* Hello I'm Animation */}
      <div className="h-[32px] md:h-[40px] mb-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }} // Exit by sliding down and fading out
              transition={{ duration: 0.6, delay: showGreeting ? 0.2 : 0 }}
            >
              <p className={cn("text-[15px] text-white font-body font-light",
                "md:text-lg lg:text-xl"
              )}>
                Hello, I&apos;m
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        className={cn("text-[3.25rem] mb-4" , 
          "leading-[0.9] tracking-[-0.1px]",
        "font-body font-black capitalize",
        "md:text-6xl lg:text-[5.5rem]"
      )}
      >David Adeboyejo</motion.h1>

      {/* Animated Roles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Typo />
      </motion.div>
    </div>
  );
}
