"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  images: string[];
  projectName: string;
  isDark: boolean;
}

export function ImageSlider({ images, projectName, isDark }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (index: number, dir: 1 | -1 = 1) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const prev = useCallback(() => {
    const idx = (current - 1 + images.length) % images.length;
    goTo(idx, -1);
  }, [current, images.length, goTo]);

  const next = useCallback(() => {
    const idx = (current + 1) % images.length;
    goTo(idx, 1);
  }, [current, images.length, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full mb-16">
      {/* ── Main slide ─────────────────────────────────────── */}
      <div
        className={cn(
          "relative w-full aspect-video rounded-2xl overflow-hidden border select-none",
          isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-100"
        )}
      >
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${projectName} – screenshot ${current + 1}`}
              fill
              className="object-cover"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 z-20",
                "flex items-center justify-center w-10 h-10 rounded-full",
                "backdrop-blur-md border transition-all duration-200 cursor-pointer",
                isDark
                  ? "bg-black/40 border-white/15 text-white hover:bg-black/60 hover:border-white/30"
                  : "bg-white/70 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-300 shadow-md"
              )}
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 z-20",
                "flex items-center justify-center w-10 h-10 rounded-full",
                "backdrop-blur-md border transition-all duration-200 cursor-pointer",
                isDark
                  ? "bg-black/40 border-white/15 text-white hover:bg-black/60 hover:border-white/30"
                  : "bg-white/70 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-300 shadow-md"
              )}
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </>
        )}

        {/* Slide counter */}
        <div className={cn(
          "absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border",
          isDark ? "bg-black/50 border-white/10 text-white" : "bg-white/80 border-slate-200 text-slate-700"
        )}>
          {current + 1} / {images.length}
        </div>
      </div>

      {/* ── Dot navigator ──────────────────────────────────── */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to image ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-200 cursor-pointer",
                i === current
                  ? "w-6 h-2 bg-primary"
                  : isDark
                  ? "w-2 h-2 bg-white/20 hover:bg-white/40"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      )}

      {/* ── Thumbnail strip ────────────────────────────────── */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-5 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Thumbnail ${i + 1}`}
              className={cn(
                "relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer",
                i === current
                  ? "border-primary shadow-[0_0_12px_rgba(19,91,232,0.4)]"
                  : isDark
                  ? "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30"
                  : "border-slate-200 opacity-60 hover:opacity-90 hover:border-slate-300"
              )}
            >
              <Image
                src={src}
                alt={`Thumb ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
