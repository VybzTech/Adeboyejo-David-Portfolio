"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Logo from "./Logo";
import { Navs } from "./Navs";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import Theme from "./Theme";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
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
          "max-h-[10vh]",
          isScrolled
            ? (theme === "light" ? "on-scroll-white" : "on-scroll-dark")
            : "lg:bg-transparent  bg-white/3 dark:bg-black/5 backdrop-blur-xs border-[1.8px] border-white/5 dark:border-dark/5",
          "lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:w-full lg:ml-0 lg:rounded-none lg:mt-0 lg:h-[10vh]"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <Logo
              className="w-[9.5vw] sm:w-[9vw] md:w-[6vw] lg:w-[5vw] xl:w-[2.5vw] max-w-[100px]"
              svgFill={"#333"}
              AFill={theme === "light" ? "#135be8" : "#c70b0b"}
              theme={theme}
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Navs />
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
              {isMobileMenuOpen ? <XIcon size={26} /> : <ListIcon size={26} />}
            </button>
          </div>
        </div>
      </header>
      <motion.div
        className="h-1.5 rounded-full shadow-lg fixed top-[10.01vh] z-[101]"
        style={{
          transition: "width 0.2s ease",
          background: "linear-gradient(90deg, #4f46e5, #a78bfa)",
          boxShadow: "0 0 8px 2px rgba(79,70,229,0.7)"
        }}
      />

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
                "border-[1.8px] border-white/7 top-20",
                "fixed left-4 right-4 z-[95] rounded-2xl overflow-hidden lg:hidden shadow-2xl",
                isScrolled && (theme === "light" ? "on-scroll-white" : "on-scroll-dark"),
              )}
            >
              <div className="p-6">
                <Navs
                  isMobile
                  onLinkClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
