"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { trackInteraction } from "@/app/actions/portfolioActions";

export function TrackedProjectCard({ project }: { project: any }) {
  
  const handleLinkClick = async (platformType: string) => {
    // Log the click event to your Supabase interaction logging system
    await trackInteraction(`${project.title} - ${platformType}`, "project_outbound_click");
  };

  return (
    <div className={`group rounded-2xl border p-6 bg-slate-900/50 transition-all duration-300 ${
      project.isFeatured ? 'border-blue-500/40 shadow-lg shadow-blue-500/5' : 'border-slate-800'
    }`}>
      {/* 1. Image Render Section */}
      {project.mainImage && (
        <div className="relative h-56 w-full mb-6 overflow-hidden rounded-xl bg-slate-800">
          <Image
            src={urlFor(project.mainImage).width(800).quality(85).url()}
            alt={project.mainImage.alt || project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-w-7xl) 50vw, 100vw"
          />
          {project.isFeatured && (
            <span className="absolute top-3 left-3 bg-blue-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Featured Build
            </span>
          )}
        </div>
      )}

      {/* 2. Text Details */}
      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* 3. Tech Stack Tags Array mapping */}
      {project.techStack && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tag: string) => (
            <span key={tag} className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* 4. Telemetry Tracked Action Buttons */}
      <div className="flex gap-4 border-t border-slate-800/80 pt-4">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("GitHub")}
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <GithubLogo size={18} />
            Code Repository
          </a>
        )}

        {project.links?.liveDemo && (
          <a
            href={project.links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Live Demo")}
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto"
          >
            Live Site
            <ArrowSquareOut size={18} />
          </a>
        )}
      </div>
    </div>
  );
}