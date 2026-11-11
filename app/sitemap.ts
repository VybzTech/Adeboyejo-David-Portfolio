import { MetadataRoute } from "next";
import { getProjects } from "@/lib/projectsService";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://david-adeboyejo.web.app";

  const projects = await getProjects();

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/case-studies/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
