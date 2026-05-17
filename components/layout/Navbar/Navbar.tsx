"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Sun, Moon } from "@phosphor-icons/react";
import Logo from "./Logo";
import { Navs } from "./Navs";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import Theme from "./Theme";
import { Resume } from "../Resume";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-[96vw] z-[100] transition-all duration-500 ease-in-out",
          "px-6 py-3 ml-[2vw] my-2 rounded-[2.2rem]",
          isScrolled
            ? (theme === "light" ? "on-scroll-white" : "on-scroll-dark")
            : "bg-white/5 dark:bg-black/10 backdrop-blur-xs border-[1.65px] border-white/10 dark:border-dark/5",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <Logo 
              className="w-[9.5vw] sm:w-[9vw] lg:w-[4vw] xl:w-[2.5vw] max-w-[100px]"
              svgFill={"#333"} 
              AFill={theme === "light" ? "#135be8" : "#c70b0b"} 
              theme={theme} 
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Navs onOpenResume={() => setIsResumeOpen(true)} />
            <Theme theme={theme} toggleTheme={toggleTheme} isScrolled={isScrolled} />
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-1.5">
            <Theme theme={theme} toggleTheme={toggleTheme} isScrolled={isScrolled} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2 text-[var(--text-primary)]",
                "rounded-full ",
                isScrolled && (theme === "light" ? "on-scroll-white" : "on-scroll-dark"),
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed top-20 left-4 right-4 z-[95] rounded-2xl overflow-hidden lg:hidden shadow-2xl",
                isScrolled && (theme === "light" ? "on-scroll-white" : "on-scroll-dark"),
              )}
            >
              <div className="p-8">
                <Navs 
                  isMobile 
                  onLinkClick={() => setIsMobileMenuOpen(false)} 
                  onOpenResume={() => {
                    setIsMobileMenuOpen(false);
                    setIsResumeOpen(true);
                  }} 
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
