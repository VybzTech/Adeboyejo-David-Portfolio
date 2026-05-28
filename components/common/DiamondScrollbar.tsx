"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

export function DiamondScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Store a reference to the active lenis instance
  const lenisRef = useRef<any>(null);

  // 1. Sync Lenis scroll progress with UI
  useLenis((lenis) => {
    lenisRef.current = lenis;
    
    // Only update styles via scroll depth if the user isn't actively hijacking the thumb
    if (!isDragging) {
      const scrollPercent = lenis.progress * 100;
      updateScrollbarStyles(scrollPercent);
    }
  });

  // Reusable style layout updates
  const updateScrollbarStyles = (percentage: number) => {
    const clamped = Math.max(0, Math.min(100, percentage));
    if (fillRef.current && thumbRef.current) {
      fillRef.current.style.height = `${clamped}%`;
      thumbRef.current.style.top = `${clamped}%`;
    }
  };

  // 2. Click-to-jump calculation on the track
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === thumbRef.current || !trackRef.current || !lenisRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top; // Relative calculation accounting for top-[10vh]
    const clickPercentage = clickY / rect.height;

    lenisRef.current.scrollTo(clickPercentage * lenisRef.current.limit);
  };

  // 3. Initiate drag sequences
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current || !lenisRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const dragY = e.clientY - rect.top;
      const progress = Math.max(0, Math.min(1, dragY / rect.height));

      // Immediate visual style update for ultra-snappy execution loops
      updateScrollbarStyles(progress * 100);

      // Tell Lenis to snap instantly to targeted metric limit
      lenisRef.current.scrollTo(progress * lenisRef.current.limit, { immediate: true });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Native window listeners ensure smooth dragging even if the mouse strays away from the 4px track
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    /* Changed pointer-events-none to pointer-events-auto and locked selections */
    <div className="fixed top-[10vh] right-[4px] w-[4px] h-[calc(100vh-10vh)] z-[99] pointer-events-auto select-none">
      {/* Track Background */}
      <div 
        ref={trackRef}
        onClick={handleTrackClick}
        className="custom-scrollbar-track relative w-full h-full cursor-pointer"
      >
        {/* Dynamic Blue Liquid Fill */}
        <div
          ref={fillRef}
          className="scrollbar-fill pointer-events-none"
          style={{ height: "0%" }}
        />
        {/* Shimmering Diamond Head */}
        <div
          ref={thumbRef}
          onMouseDown={handleThumbMouseDown}
          className="scrollbar-thumb-diamond"
          style={{ top: "0%", cursor: isDragging ? "grabbing" : "grab" }}
        />
      </div>
    </div>
  );
}