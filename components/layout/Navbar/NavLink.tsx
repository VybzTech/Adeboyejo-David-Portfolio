"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "nav-link text-sm font-medium uppercase tracking-wider relative",
        isActive && "text-[var(--accent-primary)]"
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="nav-underline"
          className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--accent-primary)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
}
