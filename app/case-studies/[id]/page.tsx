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
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-5 bg-primary animate-pulse" />
        <div
          className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full blur-3xl opacity-15 bg-blue-400/50 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <BackButton />
      <ProjectDetailContent project={project} />
    </>
  );
}
