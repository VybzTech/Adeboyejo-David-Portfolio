'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { List, X } from 'phosphor-react';
import Button from '@/components/ui/Button';
import { NAVIGATION, BRAND } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">D</span>
              </div>
              <span className="hidden sm:inline font-display font-bold text-lg text-text-primary">
                {BRAND.shortName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-muted hover:text-text-primary transition-colors duration-300 font-medium text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button
                href="/#contact"
                variant="primary"
                size="sm"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-primary hover:text-accent-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 top-16 z-30 bg-background md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-6 p-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-accent-primary transition-colors text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/#contact"
              variant="primary"
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
