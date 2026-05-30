export interface Project {
  id: number;
  name: string;
  status: 'completed' | 'In-Progress';
  description: string;
  fullContent?: string;
  tags: string[];
  github?: string;
  link?: string;
  image: string;
  images?: string[];
  role: string;
  timeline: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  stack: string[];
}

export type SkillCategory = "frontend" | "backend" | "design" | "tools";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
  image: string;
}

export interface Service {
  name: string;
  description: string;
  icon: string;
}
