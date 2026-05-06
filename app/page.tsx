import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative z-0">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
