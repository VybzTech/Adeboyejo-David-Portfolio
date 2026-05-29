import Image from "next/image";
import { cn } from "@/lib/utils";

interface SkillLogoProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export const SkillLogo: React.FC<SkillLogoProps> = ({ src, alt, size = 24, className }) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    loading="lazy"
    className={cn("object-contain", className)}
    sizes="(max-width: 768px) 40px, 24px"
  />
);
