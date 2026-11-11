export interface Project {
  id: number;
  docId?: string;
  name: string;
  title?: string;
  slug?: string;
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
  isFeatured?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
  stack: string[];
  createdAt?: string | number | null;
  updatedAt?: string | number | null;
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
