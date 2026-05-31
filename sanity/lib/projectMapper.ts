import { Project } from '@/lib/types';

/**
 * Sanity document structure as returned by GROQ query
 */
interface SanityProject {
  _id: string;
  id: number;
  title: string;
  name?: string;
  slug: string;
  status: 'completed' | 'In-Progress' | 'Not-started';
  role: string;
  timeline: string;
  description: string;
  fullContent?: string;
  tags: string[];
  stack: string[];
  github?: string;
  link?: string;
  image?: string;
  alt?: string;
  images?: string[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
}

/**
 * Maps Sanity project document to frontend Project interface
 * Handles field name conversions and optional field population
 */
export function sanityProjectToFrontend(sanityDoc: SanityProject): Project {
  return {
    id: sanityDoc.id,
    name: sanityDoc.name || sanityDoc.title,
    status: sanityDoc.status as 'completed' | 'In-Progress',
    description: sanityDoc.description,
    fullContent: sanityDoc.fullContent,
    tags: sanityDoc.tags || [],
    github: sanityDoc.github,
    link: sanityDoc.link,
    image: sanityDoc.image || '',
    images: sanityDoc.images && sanityDoc.images.length > 0 ? sanityDoc.images : undefined,
    role: sanityDoc.role,
    timeline: sanityDoc.timeline,
    metrics: sanityDoc.metrics && sanityDoc.metrics.length > 0 ? sanityDoc.metrics : undefined,
    stack: sanityDoc.stack || [],
  };
}

/**
 * Maps an array of Sanity projects to frontend Project interface
 */
export function sanityProjectsToFrontend(sanityDocs: SanityProject[]): Project[] {
  return sanityDocs.map(sanityProjectToFrontend);
}

/**
 * Create ID to slug mapping for efficient lookups
 * Useful for converting numeric IDs to slug-based queries
 */
export function createIdToSlugMap(projects: SanityProject[]): Record<number, string> {
  const map: Record<number, string> = {};
  projects.forEach(project => {
    map[project.id] = project.slug;
  });
  return map;
}

/**
 * Find project by numeric ID
 */
export function findProjectById(projects: Project[], id: number): Project | undefined {
  return projects.find(p => p.id === id);
}

/**
 * Filter projects by tag
 */
export function filterProjectsByTag(projects: Project[], tag: string): Project[] {
  if (tag === 'All') return projects;
  return projects.filter(p => p.tags.includes(tag));
}
