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
  const isActive = pathname === href;
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Link
      href={href}
      onClick={onClick}
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
