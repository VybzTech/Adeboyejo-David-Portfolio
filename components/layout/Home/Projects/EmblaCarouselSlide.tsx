"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface EmblaCarouselSlideProps {
  images: (string | undefined)[];
  projectName: string;
}

export function EmblaCarouselSlide({ images, projectName }: EmblaCarouselSlideProps) {
  const validImages = images.filter((img): img is string => !!img);

  if (!validImages.length) {
    return (
      <div className="relative overflow-hidden h-64 md:h-72 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
        <p className="text-slate-400">No image available</p>
      </div>
    );
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: validImages.length > 1 });
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onSelect = React.useCallback((api: any) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative overflow-hidden h-64 md:h-72 bg-blue-100 dark:bg-slate-700" ref={emblaRef}>
      <div className="flex h-full">
        {validImages.map((img, idx) => (
          <div key={idx} className="flex-[0_0_100%] min-w-0 relative">
            <Image
              src={img}
              alt={`${projectName} ${idx}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 bg-white/90 hover:bg-white text-blue-600 disabled:opacity-50"
            aria-label="Previous image"
          >
            <CaretLeft size={20} weight="fill" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 bg-white/90 hover:bg-white text-blue-600 disabled:opacity-50"
            aria-label="Next image"
          >
            <CaretRight size={20} weight="fill" />
          </button>
        </>
      )}
    </div>
  );
}
