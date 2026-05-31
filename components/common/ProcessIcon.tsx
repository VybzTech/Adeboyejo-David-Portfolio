import React from "react";
import { cn } from "@/lib/utils";

interface ProcessIconProps {
  icon: React.ComponentType<any>;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ProcessIcon: React.FC<ProcessIconProps> = ({
  icon: Icon,
  size = "md",
  className
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={cn(
      "flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:fill-current",
      sizeClasses[size],
      className
    )}>
      <Icon />
    </div>
  );
};
