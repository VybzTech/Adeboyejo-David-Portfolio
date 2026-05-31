"use client";

import { NavLink } from "./NavLink";
import { DownloadSimple } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";

interface NavsProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export function Navs({ isMobile, onLinkClick }: NavsProps) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/case-studies" },
    { name: "Contact", href: "/#contact" },
    { name: "Studio", href: "/studio" },
  ];

  return (
    <div className={isMobile ? "flex flex-col items-center gap-8 py-8" : "flex items-center gap-4"}>
      {links.map((link) => (
        // process.env.PROJECT_ENV === "dev" && link?.name === "Studio" ? null:
          <NavLink key={link.name} href={link.href} onClick={onLinkClick}>
            {link.name}
          </NavLink>
      ))}
    </div>
  );
}
