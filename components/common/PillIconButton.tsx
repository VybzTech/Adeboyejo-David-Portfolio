"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PillIconButtonProps = {
  icon: React.ReactNode;
  title: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  /**
   * Visual style of the button. Primary is gradient, secondary is subtle gray texture.
   */
  variant?: "primary" | "secondary";
  /**
   * Hide the title on very small screens (xs) while keeping the icon visible.
   */
  hideTextOnSmall?: boolean;
  /**
   * When provided the component renders an <a> instead of a <button>.
   */
  href?: string;
  download?: string;
};

export const PillIconButton = ({
  icon,
  title,
  disabled = false,
  className,
  type = "button",
  onClick,
  variant = "primary",
  hideTextOnSmall = false,
  href,
  download,
}: PillIconButtonProps) => {
  const baseClasses = cn(
    "capitalize cursor-pointer tracking-tight",
    "w-fit relative rounded-full py-3 px-8 font-semibold",
    variant === "secondary"
      ? "bg-white/5 border border-gray-300 text-gray-800 hover:bg-white/10"
      : "bg-gradient-to-br from-blue-400 to-primary hover:from-blue-500 hover:to-blue-800",
    "transition-all duration-300 shadow-lg hover:shadow-xl mx-auto",
    "flex items-center justify-center gap-3 ease-in-out",
    disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] hover:cursor-pointer",
    className
  );

  const titleClasses = cn(
    "relative z-10 font-semibold",
    hideTextOnSmall && "hidden sm:inline"
  );

  // Render as a link when href is supplied
  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={onClick}
        className={baseClasses}
        aria-disabled={disabled}
      >
        <span className={titleClasses}>{title}</span>
        <motion.div className="relative z-10" whileHover={{ rotate: disabled ? 0 : -25 }}>
          {icon}
        </motion.div>
      </a>
    );
  }

  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      size="md"
      className={baseClasses}
    >
      <span className={titleClasses}>{title}</span>
      <motion.div className="relative z-10" whileHover={{ rotate: disabled ? 0 : -25 }}>
        {icon}
      </motion.div>
    </Button>
  );
};
