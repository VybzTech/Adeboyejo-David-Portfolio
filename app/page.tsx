import { Hero } from "@/components/layout/Home/Hero";
import { WhatIDo } from "@/components/layout/Home/WhatIDo";
import { AboutPreview } from "@/components/layout/Home/AboutPreview";
import { FeaturedCaseStudies } from "@/components/layout/Home/FeaturedCaseStudies";
import { ContactCTA } from "@/components/layout/Home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* <WhatIDo />
      <AboutPreview />
      <FeaturedCaseStudies />
      <ContactCTA /> */}
    </div>
  );
}
