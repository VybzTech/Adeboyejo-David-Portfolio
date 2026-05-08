import { Hero } from "@/components/sections/hero";
import { WhatIDo } from "@/components/sections/what-i-do";
import { AboutPreview } from "@/components/sections/about-preview";
import { FeaturedCaseStudies } from "@/components/sections/featured-case-studies";
import { ContactCTA } from "@/components/sections/contact-cta";

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
