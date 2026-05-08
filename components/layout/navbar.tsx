"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { BRAND_INFO } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-background group-hover:scale-105 transition-transform">
            DA
          </div>
          <span className="font-heading text-xl font-bold hidden sm:block">
            {BRAND_INFO.brand}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-text-muted"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-0.5 bg-primary mt-0.5 rounded-full"
                />
              )}
            </Link>
          ))}
          <Link href="/#contact">
            <Button variant="primary" size="sm" className="ml-4">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(true)}
        >
          <ListIcon size={32} weight="bold" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-heading text-2xl font-bold">{BRAND_INFO.brand}</span>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <XIcon size={32} weight="bold" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl font-bold tracking-tighter",
                    pathname === link.href ? "text-primary" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="mt-8 w-full"
                >
                  Hire Me
                </Button>
              </Link>
            </div>

            <div className="mt-auto pt-12 border-t border-white/5 flex flex-col gap-4 text-text-muted">
              <p>{BRAND_INFO.email}</p>
              <div className="flex gap-6">
                <Link href={BRAND_INFO.github}>GitHub</Link>
                <Link href={BRAND_INFO.linkedin}>LinkedIn</Link>
                <Link href={BRAND_INFO.twitter}>Twitter</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
