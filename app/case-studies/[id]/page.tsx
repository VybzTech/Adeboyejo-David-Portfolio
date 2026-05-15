import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, Globe, ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === parseInt(params.id));

  if (!project) notFound();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group text-sm font-bold uppercase tracking-widest">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>

          <div className="flex gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-primary">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">{project.name}</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 rounded-3xl bg-surface-elevated/50 border border-white/5">
            <div>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Role</p>
              <p className="text-sm font-bold">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Timeline</p>
              <p className="text-sm font-bold">{project.timeline}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Status</p>
              <p className="text-sm font-bold capitalize">{project.status}</p>
            </div>
            <div className="flex gap-2 items-end">
              {project.link && (
                <Link href={project.link} target="_blank">
                  <Button size="icon" variant="glass" className="w-10 h-10">
                    <Globe size={18} />
                  </Button>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <Button size="icon" variant="glass" className="w-10 h-10">
                    <GithubLogo size={18} />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <ScrollReveal direction="up">
              <h2 className="text-2xl font-heading font-bold mb-6">Overview</h2>
              <p className="text-text-muted leading-relaxed mb-8 text-lg">
                {project.description}
              </p>
              <p className="text-text-muted leading-relaxed">
                This project represents a significant milestone in engineering, focusing on performance optimization, user experience design, and scalable architecture.
              </p>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-2xl font-heading font-bold mb-6">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
