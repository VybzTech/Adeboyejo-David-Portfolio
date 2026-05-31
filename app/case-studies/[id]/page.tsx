import { notFound } from "next/navigation";
import { BackButton } from "@/components/layout/CaseStudies/Detail/BackButton";
import { ProjectDetailContent } from "@/components/layout/CaseStudies/Detail/ProjectDetailContent";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery, projectByIdQuery } from "@/sanity/lib/queries";
import { sanityProjectToFrontend } from "@/sanity/lib/projectMapper";

export async function generateStaticParams() {
  const projects = await client.fetch(allProjectsQuery);
  return projects.map((project: { id: number }) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numId = parseInt(id);

  const query = projectByIdQuery(numId);
  const sanityProject = await client.fetch(query);

  if (!sanityProject) notFound();

  const project = sanityProjectToFrontend(sanityProject);

  return (
    <>
      <BackButton />
      <ProjectDetailContent project={project} />
    </>
  );
}
