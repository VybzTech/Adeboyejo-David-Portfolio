import { Hero } from "@/components/layout/Home/Hero";
import { WhatIDo } from "@/components/layout/Home/Skills/WhatIDo";
import { AboutPreview } from "@/components/layout/Home/About/AboutPreview";
import { FeaturedCaseStudies } from "@/components/layout/Home/Projects/FeaturedCaseStudies";
import { ContactCTA } from "@/components/layout/Home/Contact/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <WhatIDo />
      <AboutPreview />
      <FeaturedCaseStudies />
      <ContactCTA />
    </div>
  );
}
