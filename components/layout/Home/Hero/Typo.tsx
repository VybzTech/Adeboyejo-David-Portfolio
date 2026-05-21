"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TITLES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Typo() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % TITLES.length;
      const fullText = TITLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Default typing speed
      setTypingSpeed(isDeleting ? 100 : 200);

      if (!isDeleting && text === fullText) {
        // Pause at the end of the full text
        setTypingSpeed(2500);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Pause before starting the next text
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="h-[40px] md:h-[60px] flex items-center justify-center mb-8">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }} // Initial delay similar to classic v0
        className={cn("text-[16px] text-white font-body font-medium uppercase",
          " md:text-[19px] tracking-tighter"
        )}
      >
        {text}
        <span className="animate-[pulse_1s_ease-in-out_infinite] inline-block border-r-2 border-[var(--text-danger)] ml-0.5 h-[0.95em] align-middle" />
      </motion.p>
    </div>
  );
}
