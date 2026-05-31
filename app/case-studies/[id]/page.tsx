import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/layout/CaseStudies/Detail/BackButton";
import { ProjectDetailContent } from "@/components/layout/CaseStudies/Detail/ProjectDetailContent";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  if (!project) notFound();

  return (
    <>
      <BackButton />
      <ProjectDetailContent project={project} />
    </>
  );
}
