// aboutData.ts – shared data for About page modular components

import { BRAND_INFO, SKILLS } from "@/lib/data";
import { CodeIcon, StarIcon, RocketIcon, MedalIcon, IconProps, GithubLogoIcon, LinkedinLogoIcon, TwitterLogoIcon, InstagramLogoIcon, Icon } from "@phosphor-icons/react";
 
export interface SocialLinks {
  icon: Icon;
  href: string;
  label: string;
}

export interface EducationItems {
  period: string;
  degree: string;
  institution: string;
  description: string;
  current: boolean;
}

export interface ExperienceItems {
  period: string;
  role: string;
  company: string;
  companyType: string;
  description: string;
  tags: string[];
  current: boolean;
}

export interface StatItems {
  value: string;
  label: string;
  icon: Icon;
}

export const statItems:StatItems[] = [
  // { value: "4+", label: "Years Experience", icon: <Star size={18} weight="fill" /> },
  // { value: "20+", label: "Projects Shipped", icon: <Rocket size={18} weight="fill" /> },
  // { value: "10+", label: "Happy Clients", icon: <Medal size={18} weight="fill" /> },
  // { value: "∞", label: "Lines of Code", icon: <Code size={18} weight="fill" /> },
  { value: "4+", label: "Years Experience", icon: StarIcon },
  { value: "20+", label: "Projects Shipped", icon: RocketIcon  },
  { value: "10+", label: "Happy Clients", icon: MedalIcon },
  { value: "∞", label: "Lines of Code", icon: CodeIcon},
];

export const skillCategories = ["frontend", "backend", "design", "tools"] as const;
export type SkillCategory = typeof skillCategories[number];

export const categoryLabel: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  design: "Design",
  tools: "Tools & Infra",
};

export const experienceItems:ExperienceItems[] = [
  {
    period: "2022 – Present",
    role: "Senior Product Engineer",
    company: "VybzTech",
    companyType: "Self-founded",
    description: "Leading development of high-performance web and mobile applications for global clients, focused on Next.js, React, and full-stack architecture.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    current: true,
  },
  {
    period: "2021 – 2022",
    role: "Full Stack Developer",
    company: "Freelance",
    companyType: "Remote",
    description: "Collaborated with early-stage startups to build MVPs and scale existing products. Specialized in React and Node.js ecosystems.",
    tags: ["React", "Node.js", "Firebase"],
    current: false,
  },
];

export const educationItems:EducationItems[] = [
  {
    period: "2018 – 2022",
    degree: "B.Sc. Computer Science",
    institution: "University of Lagos",
    description: "Studied algorithms, software engineering, data structures, and computer networks.",
    current: false,
  },
];



export const socialLinks: SocialLinks[] = [
  { icon: GithubLogoIcon, href: BRAND_INFO.github, label: "GitHub" },
  { icon: LinkedinLogoIcon, href: BRAND_INFO.linkedin, label: "LinkedIn" },
  { icon: TwitterLogoIcon, href: BRAND_INFO.twitter, label: "Twitter" },
  { icon: InstagramLogoIcon, href: BRAND_INFO.instagram, label: "Instagram" },
];
