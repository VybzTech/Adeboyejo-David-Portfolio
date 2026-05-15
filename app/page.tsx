import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FeaturedCaseStudies } from "@/components/sections/FeaturedCaseStudies";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatIDo />
      <AboutPreview />
      <FeaturedCaseStudies />
      <ContactCTA />
    </div>
  );
}
