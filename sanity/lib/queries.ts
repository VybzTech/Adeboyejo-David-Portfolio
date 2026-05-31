// GROQ queries for fetching project data from Sanity CMS

/**
 * Query to fetch a single project by ID
 * @param id - numeric project ID
 */
export const projectByIdQuery = (id: number) => `*[_type == "project" && id == ${id}][0] {
  _id,
  id,
  title,
  name,
  "slug": slug.current,
  status,
  role,
  timeline,
  description,
  fullContent,
  tags,
  stack,
  github,
  "link": liveDemo,
  "image": mainImage.asset->url,
  "alt": mainImage.alt,
  "images": images[].asset->url,
  "metrics": metrics[] { label, value }
}`;

/**
 * Query to fetch all projects ordered by ID
 */
export const allProjectsQuery = `*[_type == "project"] | order(id asc) {
  _id,
  id,
  title,
  name,
  "slug": slug.current,
  status,
  role,
  timeline,
  description,
  fullContent,
  tags,
  stack,
  github,
  "link": liveDemo,
  "image": mainImage.asset->url,
  "alt": mainImage.alt,
  "images": images[].asset->url,
  "metrics": metrics[] { label, value }
}`;

/**
 * Query to fetch featured projects (with isFeatured flag)
 * Using a limit for homepage display
 */
export const featuredProjectsQuery = `*[_type == "project" && isFeatured == true] | order(id asc)[0...3] {
  _id,
  id,
  title,
  name,
  "slug": slug.current,
  status,
  role,
  timeline,
  description,
  fullContent,
  tags,
  stack,
  github,
  "link": liveDemo,
  "image": mainImage.asset->url,
  "alt": mainImage.alt,
  "images": images[].asset->url,
  "metrics": metrics[] { label, value }
}`;

/**
 * Query to fetch all project IDs (for static generation)
 */
export const projectIdsQuery = `*[_type == "project"] | order(id asc) {
  id
}`;
