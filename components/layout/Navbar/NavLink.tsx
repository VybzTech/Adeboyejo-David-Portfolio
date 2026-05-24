"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      // 1. If we are on '/about' and this link is '/about'
      if (href === "/about") {
        setIsActive(pathname === "/about");
        return;
      }

      // 2. If we are on '/case-studies' or any of its subpages and this link is '/case-studies'
      if (href === "/case-studies") {
        setIsActive(pathname.startsWith("/case-studies"));
        return;
      }

      // 3. For Home ("/") and Contact ("/#contact")
      if (pathname === "/") {
        const hash = window.location.hash;
        
        if (href.includes("#contact")) {
          const contactElement = document.getElementById("contact");
          if (contactElement) {
            const rect = contactElement.getBoundingClientRect();
            // If the top of contact section is in viewport or above the middle of viewport
            const isInViewport = rect.top < window.innerHeight * 0.5 && rect.bottom > 100;
            setIsActive(hash === "#contact" || isInViewport);
          } else {
            setIsActive(hash === "#contact");
          }
        } else if (href === "/") {
          // Home is active only if Contact is NOT active
          const contactElement = document.getElementById("contact");
          let isContactActive = hash === "#contact";
          if (contactElement) {
            const rect = contactElement.getBoundingClientRect();
            isContactActive = rect.top < window.innerHeight * 0.5 && rect.bottom > 100;
          }
          setIsActive(!isContactActive);
        }
      } else {
        // If we are on `/about` or `/case-studies`, then "/" or "/#contact" are not active
        setIsActive(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      checkActive();
    };

    // Run initially
    checkActive();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", checkActive);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", checkActive);
    };
  }, [pathname, href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the href is a section hash link on the current page
    if (href.includes("#") || href.startsWith("/#")) {
      const parts = href.split("#");
      const hash = parts[parts.length - 1];
      
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    } else if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "px-1 py-2 mx-[1vh]",
        "nav-link text-sm font-medium relative transition-colors duration-300",
        "rounded-md uppercase",
        isScrolled && !isActive ? "text-[var(--text-surface)]" : "text-[var(--text-primary)]",
        isActive ? "text-[var(--accent-primary)]" : "hover:text-[var(--accent-primary-hover)]",
      )}
    >
      <span className="relative">
        {children}
        {(isActive || isHovered) && (
          <motion.div
            layoutId="nav-underline"
            className={cn(
              "absolute bottom-[-3px]",
              "rounded-sm h-[3px] bg-[var(--accent-primary)]",
              isActive || isHovered ? "block" : "hidden"
            )}
            initial={{ width: "88%" }}
            animate={{ width: isActive || isHovered ? "100%" : "60%" }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </span>
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-[var(--accent-primary)]/5 rounded-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
}
