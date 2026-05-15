"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BackgroundImageProps {
  src: string;
  alt?: string;
  overlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundImage({ 
  src, 
  alt = "Background", 
  overlay = true, 
  className,
  children 
}: BackgroundImageProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/40 to-[var(--background)]" />
        )}
      </div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
