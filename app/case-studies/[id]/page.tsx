import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/layout/CaseStudies/Detail/BackButton";
import { ProjectDetailContent } from "@/components/layout/CaseStudies/Detail/ProjectDetailContent";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === parseInt(params.id));

  if (!project) notFound();

  return (
    <>
      <BackButton />
      <ProjectDetailContent project={project} />
    </>
  );
}
