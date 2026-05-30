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
  logo?: string;
  coursework?: string[];
  achievements?: string[];
}

export interface ExperienceItems {
  period: string;
  role: string;
  company: string;
  companyType: string;
  description: string;
  tags: string[];
  current: boolean;
  responsibilities: string[];
  logo?: string;
}

export interface CertificateItems {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  logo?: string;
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
    company: "LIRS",
    companyType: "Government",
    description: "Leading development of high-performance web and mobile applications for global clients, focused on Next.js, React, and full-stack architecture.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    current: true,
    logo: "/images/Companies/LIRS.png",
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
    // logo: "/images/Companies/VT.png",
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
    description: "Comprehensive computer science program focusing on software engineering principles, algorithms, and systems design. Developed strong foundation in core CS concepts and practical software development.",
    current: false,
    coursework: [
      "Algorithms & Data Structures",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
      "Web Development",
    ],
    logo: "/images/Companies/LASU.jpg",
    achievements: [
      "First Class Honours graduate with CGPA 3.8/4.0",
      "Best Final Year Project Award for innovative task management system",
      "Led Computer Science Student Association for 2 years",
      "Published 2 research papers on web performance optimization",
    ]
  },
];

export const certificateItems: CertificateItems[] = [
  {
    id: "next-advanced",
    name: "Advanced Next.js & React",
    issuer: "Vercel",
    issuedDate: "March 2024",
    credentialId: "CERT-2024-001",
    credentialUrl: "https://vercel.com/certificates/advanced-nextjs",
    description: "Comprehensive certification covering advanced Next.js patterns, performance optimization, and modern React development practices. Demonstrates expertise in building production-grade applications.",
    skills: ["Next.js", "React Server Components", "Performance Optimization", "API Routes"],
  },
  {
    id: "aws-developer",
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    issuedDate: "January 2024",
    expiryDate: "January 2027",
    credentialId: "AWS-DA-2024-001",
    credentialUrl: "https://aws.amazon.com/certification",
    description: "Validates ability to develop, deploy, and debug cloud-based applications using AWS services. Covers EC2, Lambda, RDS, DynamoDB, and API Gateway.",
    skills: ["AWS EC2", "AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
  },
  {
    id: "gcp-cloud-engineer",
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    issuedDate: "September 2023",
    expiryDate: "September 2025",
    credentialId: "GCP-ACE-2023-001",
    credentialUrl: "https://cloud.google.com/certification",
    description: "Demonstrates competency in deploying and managing applications on Google Cloud Platform. Covers Compute Engine, Cloud Storage, and Kubernetes.",
    skills: ["Google Cloud Platform", "Compute Engine", "Kubernetes", "Cloud Storage"],
  },
  {
    id: "typescript-pro",
    name: "TypeScript Professional",
    issuer: "Scrimba",
    issuedDate: "July 2023",
    credentialId: "SCRIMBA-TS-001",
    credentialUrl: "https://scrimba.com/certificates",
    description: "Advanced TypeScript mastery covering generics, decorators, advanced types, and best practices for large-scale applications.",
    skills: ["TypeScript Generics", "Advanced Types", "Decorators", "Best Practices"],
  },
  {
    id: "figma-design",
    name: "Figma Design Fundamentals",
    issuer: "Figma",
    issuedDate: "May 2023",
    credentialId: "FIGMA-DF-001",
    description: "Comprehensive UI/UX design certification covering design systems, component libraries, and collaborative design workflows.",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
];

export const socialLinks: SocialLinks[] = [
  { icon: GithubLogoIcon, href: BRAND_INFO.github, label: "GitHub" },
  { icon: LinkedinLogoIcon, href: BRAND_INFO.linkedin, label: "LinkedIn" },
  { icon: TwitterLogoIcon, href: BRAND_INFO.twitter, label: "Twitter" },
  { icon: InstagramLogoIcon, href: BRAND_INFO.instagram, label: "Instagram" },
];
