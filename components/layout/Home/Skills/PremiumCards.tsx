"use client";

import { useState } from "react";
import { Cpu, Globe, RocketLaunch } from "@phosphor-icons/react";
import { SkillCard, CardProps } from "./SkillCard";
import { SkillModal, SkillDetail } from "./SkillModal";

export function PremiumCards() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const cards: (CardProps & { id: number })[] = [
    {
      id: 1,
      title: "Product Engineering",
      description: "Crafting end-to-end digital solutions with a focus on scalability, performance, and elite user experience.",
      icon: <Cpu size={32} weight="duotone" />,
      details: [
        "Full-stack product development from concept to production",
        "User-centric design philosophy with data-driven decisions",
        "Performance optimization and core web vitals mastery",
        "Scalable architecture for millions of concurrent users",
        "Cross-platform compatibility and accessibility standards",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL"],
      onViewMore: () => {
        setSelectedSkill({
          title: "Product Engineering",
          description: "Crafting end-to-end digital solutions with a focus on scalability, performance, and elite user experience.",
          icon: <Cpu size={32} weight="duotone" />,
          details: [
            "Full-stack product development from concept to production",
            "User-centric design philosophy with data-driven decisions",
            "Performance optimization and core web vitals mastery",
            "Scalable architecture for millions of concurrent users",
            "Cross-platform compatibility and accessibility standards",
          ],
          technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL"],
        });
      },
    },
    {
      id: 2,
      title: "Full-Stack Systems",
      description: "Building robust architectures that seamlessly bridge the gap between frontend elegance and backend power.",
      icon: <Globe size={32} weight="duotone" />,
      details: [
        "RESTful and GraphQL API design and implementation",
        "Database architecture with PostgreSQL, MongoDB, and Redis",
        "Microservices architecture and distributed systems",
        "Real-time data synchronization and WebSocket integration",
        "Infrastructure as code with Docker and Kubernetes",
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS"],
      onViewMore: () => {
        setSelectedSkill({
          title: "Full-Stack Systems",
          description: "Building robust architectures that seamlessly bridge the gap between frontend elegance and backend power.",
          icon: <Globe size={32} weight="duotone" />,
          details: [
            "RESTful and GraphQL API design and implementation",
            "Database architecture with PostgreSQL, MongoDB, and Redis",
            "Microservices architecture and distributed systems",
            "Real-time data synchronization and WebSocket integration",
            "Infrastructure as code with Docker and Kubernetes",
          ],
          technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS"],
        });
      },
    },
    {
      id: 3,
      title: "High Performance",
      description: "Optimizing applications for extreme speed, accessibility, and search engine dominance.",
      icon: <RocketLaunch size={32} weight="duotone" />,
      details: [
        "Advanced performance metrics and optimization strategies",
        "Code splitting, lazy loading, and resource prioritization",
        "Image optimization and responsive design implementation",
        "SEO optimization and structured data markup",
        "Lighthouse score optimization and Core Web Vitals",
      ],
      technologies: ["Web Vitals", "Lighthouse", "Webpack", "Vite", "Image Optimization", "CDN"],
      onViewMore: () => {
        setSelectedSkill({
          title: "High Performance",
          description: "Optimizing applications for extreme speed, accessibility, and search engine dominance.",
          icon: <RocketLaunch size={32} weight="duotone" />,
          details: [
            "Advanced performance metrics and optimization strategies",
            "Code splitting, lazy loading, and resource prioritization",
            "Image optimization and responsive design implementation",
            "SEO optimization and structured data markup",
            "Lighthouse score optimization and Core Web Vitals",
          ],
          technologies: ["Web Vitals", "Lighthouse", "Webpack", "Vite", "Image Optimization", "CDN"],
        });
      },
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 lg:gap-12 w-full max-w-7xl mx-auto px-6 py-20">
        {cards.map((card) => (
          <SkillCard key={card.id} {...card} />
        ))}
      </div>

      {/* Skill Modal */}
      <SkillModal skill={selectedSkill} isOpen={!!selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  );
}
