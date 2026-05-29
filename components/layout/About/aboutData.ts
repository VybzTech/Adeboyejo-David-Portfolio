// aboutData.ts – shared data for About page modular components

import { BRAND_INFO, SKILLS } from "@/lib/data";

export const statItems = [
  { value: "4+", label: "Years Experience", icon: <Star size={18} weight="fill" /> },
  { value: "20+", label: "Projects Shipped", icon: <Rocket size={18} weight="fill" /> },
  { value: "10+", label: "Happy Clients", icon: <Medal size={18} weight="fill" /> },
  { value: "∞", label: "Lines of Code", icon: <Code size={18} weight="fill" /> },
];

export const skillCategories = ["frontend", "backend", "design", "tools"] as const;
export type SkillCategory = typeof skillCategories[number];

export const categoryLabel: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  design: "Design",
  tools: "Tools & Infra",
};

export const experienceItems = [
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

export const educationItems = [
  {
    period: "2018 – 2022",
    degree: "B.Sc. Computer Science",
    institution: "University of Lagos",
    description: "Studied algorithms, software engineering, data structures, and computer networks.",
    current: false,
  },
];

export const socialLinks = [
  { icon: <GithubLogo size={20} weight="fill" />, href: BRAND_INFO.github, label: "GitHub" },
  { icon: <LinkedinLogo size={20} weight="fill" />, href: BRAND_INFO.linkedin, label: "LinkedIn" },
  { icon: <TwitterLogo size={20} weight="fill" />, href: BRAND_INFO.twitter, label: "Twitter" },
  { icon: <InstagramLogo size={20} weight="fill" />, href: BRAND_INFO.instagram, label: "Instagram" },
];
