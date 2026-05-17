"use client";

import { NavLink } from "./NavLink";
import { DownloadSimple } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";

interface NavsProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
  onOpenResume: () => void;
}

export function Navs({ isMobile, onLinkClick, onOpenResume }: NavsProps) {
  const links = [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={isMobile ? "flex flex-col items-center gap-8 py-8" : "flex items-center gap-4"}>
      {links.map((link) => (
        <NavLink key={link.name} href={link.href} onClick={onLinkClick}>
          {link.name}
        </NavLink>
      ))}

      <Button
        icon={<DownloadSimple size={18} weight="bold" />}
        onClick={onOpenResume}
      >
        Resume
      </Button>
    </div>
  );
}
