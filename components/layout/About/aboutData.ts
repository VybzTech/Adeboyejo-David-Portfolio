// aboutData.ts – shared data for About page modular components

import { BRAND_INFO, SKILLS } from "@/lib/data";
import { CodeIcon, StarIcon, RocketIcon, MedalIcon, IconProps, GithubLogoIcon, LinkedinLogoIcon, TwitterLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";
import React from "react";

export interface SocialLinks {
  icon: React.ComponentType<IconProps>;
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
  responsibilities:string[]
}

export interface StatItems {
  value: string;
  label: string;
  icon: React.ComponentType<IconProps>;
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
    responsibilities: [
      "Architected and deployed scalable full-stack web applications serving 10,000+ monthly active users",
      "Built premium user interfaces with Framer Motion animations and responsive design patterns",
      "Optimized application performance achieving 90+ Lighthouse scores across all metrics",
      "Led technical strategy and mentored 3+ junior developers on React and Node.js best practices",
      "Implemented CI/CD pipelines with GitHub Actions and automated testing frameworks",
    ]
  },
  {
    period: "2021 – 2022",
    role: "Full Stack Developer",
    company: "Freelance",
    companyType: "Remote",
    description: "Collaborated with early-stage startups to build MVPs and scale existing products. Specialized in React and Node.js ecosystems.",
    tags: ["React", "Node.js", "Firebase"],
    current: false,
    responsibilities: [
      "Developed 15+ production web applications for SaaS startups and agencies",
      "Built real-time features using Firebase and WebSockets for collaborative applications",
      "Designed and implemented RESTful APIs with Node.js and Express",
      "Migrated legacy monolithic applications to modern microservices architecture",
      "Maintained 99.5% uptime across deployed applications with monitoring and alerting",
    ]
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
