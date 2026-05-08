'use client';

import { Navbar, Footer } from '@/components/layout';
import { Hero, WhatIDo, AboutPreview, FeaturedCaseStudies, Contact } from '@/components/sections';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
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
