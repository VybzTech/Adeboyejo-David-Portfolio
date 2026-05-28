'use client'

import { Hero } from "@/components/layout/Home/Hero";
import { ResumeModal } from "@/components/layout/Home/ResumeModal";
import { WhatIDo } from "@/components/layout/Home/Skills/WhatIDo";
import { AboutPreview } from "@/components/layout/Home/About/AboutPreview";
import { FeaturedCaseStudies } from "@/components/layout/Home/Projects/FeaturedCaseStudies";
import { ContactCTA } from "@/components/layout/Home/Contact/ContactCTA";
import { useState } from "react";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero onDownloadCV={() => setIsResumeOpen(true)} />
      <WhatIDo />
      <AboutPreview />
      <FeaturedCaseStudies />
      <ContactCTA />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

