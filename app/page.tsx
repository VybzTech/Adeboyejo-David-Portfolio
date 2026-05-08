import { Navbar } from '@/components/layout';
import { Footer } from '@/components/layout';
import { Hero, WhatIDo, AboutPreview, FeaturedCaseStudies, Contact } from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatIDo />
      <AboutPreview />
      <FeaturedCaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
