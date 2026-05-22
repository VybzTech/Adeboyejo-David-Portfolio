"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CustomScrollbarProps {
  children: React.ReactNode;
}

export function CustomScrollbar({ children }: CustomScrollbarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const totalScrollableHeight = container.scrollHeight - container.clientHeight;
      const currentScrollPosition = container.scrollTop;
      const progress = totalScrollableHeight > 0
        ? (currentScrollPosition / totalScrollableHeight) * 100
        : 0;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
      {children}

      {/* Custom Scrollbar Track */}
      <div className="fixed top-0 right-4 w-2 h-screen bg-transparent pointer-events-none z-50">
        {/* Track Background */}
        <div className="absolute inset-0 w-full rounded-full bg-white/5 backdrop-blur-sm border border-white/10" />

        {/* Bottle Fill Effect */}
        <motion.div
          className="absolute inset-x-0 top-0 w-full rounded-full bg-gradient-to-b from-[#135be8] via-[#0088ff] to-[#00d2ff] opacity-70"
          style={{
            height: `${scrollProgress}%`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {/* Glow effect for fill */}
        <motion.div
          className="absolute inset-x-0 top-0 w-full rounded-full bg-gradient-to-b from-[#135be8]/40 via-[#0088ff]/20 to-transparent blur-lg"
          style={{
            height: `${scrollProgress}%`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {/* Diamond Thumb */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${scrollProgress}%`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Main Diamond (slightly rounded 5-sided style) */}
          <div
            className="relative w-6 h-6 animate-shimmer"
            style={{
              transform: "translateX(-50%) rotate(45deg)",
              background: "linear-gradient(135deg, #e6f7ff 0%, #00d2ff 50%, #0051ff 100%)",
              borderRadius: "2px",
              border: "2px solid #ffffff",
              boxShadow: `
                0 0 20px #00d2ff,
                0 0 40px #0051ff,
                0 0 60px #135be8,
                inset 0 0 6px rgba(255, 255, 255, 0.9)
              `,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          >
            {/* Inner shimmer highlight */}
            <div
              className="absolute inset-1"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />

            {/* Light Spark - top corner */}
            <motion.div
              className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-white"
              animate={{
                boxShadow: [
                  "0 0 8px 2px #ffffff, 0 0 15px 4px #00d2ff",
                  "0 0 12px 3px #ffffff, 0 0 25px 6px #135be8",
                  "0 0 8px 2px #ffffff, 0 0 15px 4px #00d2ff",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Light Spark - right corner */}
            <motion.div
              className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-white/80"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 0 6px 1px #00d2ff",
              }}
            />

            {/* Light Spark - bottom corner */}
            <motion.div
              className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-white/60"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 0 4px 0.5px #0051ff",
              }}
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 8px #00d2ff);
          }
          50% {
            filter: brightness(1.3) drop-shadow(0 0 20px #00d2ff);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
