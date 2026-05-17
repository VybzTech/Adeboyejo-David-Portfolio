"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface OutlineButtonProps extends HTMLMotionProps<"button"> {
  icon?: React.ReactNode;
  variant?: "default" | "secondary";
}

const OutlineButton = React.forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ className, icon, children, variant = "default", ...props }, ref) => {
    const isSecondary = variant === "secondary";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "uppercase text-[13px]",
          "relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-in-out",
          "backdrop-blur-sm outline-none disabled:opacity-50 disabled:pointer-events-none",
          isSecondary
            ? "border border-white/10 text-primary hover:bg-white/5 hover:border-white/20 px-4 py-2 rounded-lg"
            : "border-2 border-primary text-primary hover:bg-primary/10 px-5 py-2.5 rounded-lg tracking-tight",
          className
        )}
        {...props}
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ x: icon ? 2 : 0 }}
        >
          {icon && (
            <motion.span
              className="flex items-center"
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {icon}
            </motion.span>
          )}
          <span>{children}</span>
        </motion.div>

        {!isSecondary && (
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
            pointerEvents="none"
          />
        )}
      </motion.button>
    );
  }
);

OutlineButton.displayName = "OutlineButton";

export { OutlineButton };
