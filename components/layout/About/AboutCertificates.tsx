"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowUpRight, Certificate } from "@phosphor-icons/react";
import { certificateItems, CertificateItems } from "./aboutData";
import { useTheme } from "@/components/providers/ThemeProvider";
import { CertificateModal } from "./CertificateModal";
import Image from "next/image";

interface AboutCertificatesProps {
  certificateItems: CertificateItems[]
}

export const AboutCertificates: React.FC<AboutCertificatesProps> = ({ certificateItems }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selected, setSelected] = useState<CertificateItems | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = (item: CertificateItems) => {
    setSelected(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section className="mt-16">
      <ScrollReveal>
        <div
          className={cn(
            "flex items-center gap-3 mb-3",
            isDark ? "text-white" : "text-[#111]"
          )}
        >
          <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
            <Certificate size={32} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Certifications
          </span>
        </div>
        <h2
          className={cn(
            "text-3xl font-heading font-black mb-10",
            isDark ? "text-white" : "text-[#111]"
          )}
        >
          Professional Credentials
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificateItems.map((cert, i) => (
          <ScrollReveal key={cert.id} direction="up" delay={i * 0.1}>
            <div
              onClick={() => openModal(cert)}
              className={cn(
                "hover:cursor-pointer h-full",
                "p-5 rounded-2xl border transition-all duration-200 hover:shadow-md",
                isDark
                  ? "bg-[var(--surface)] border-white/8 hover:border-primary/30"
                  : "bg-white border-slate-200 shadow-sm hover:border-primary/30"
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest",
                      isDark ? "text-[var(--text-muted)]" : "text-slate-400"
                    )}
                  >
                    {cert.issuedDate}
                  </span>
                  {cert.expiryDate && (
                    <span className={cn(
                      "ml-2 text-[10px] font-medium",
                      isDark ? "text-[var(--text-muted)]" : "text-slate-500"
                    )}>
                      expires {cert.expiryDate}
                    </span>
                  )}
                </div>
                <ArrowUpRight size={20} className={isDark ? "text-white/20" : "text-slate-300"} />
              </div>

              {/* Logo + Certificate Info */}
              <div className="flex items-start gap-3 mb-3">
                {cert.logo && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain bg-white/50 dark:bg-white/5"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className={cn("text-base font-bold mb-0.5 line-clamp-2", isDark ? "text-white" : "text-[#111]")}>
                    {cert.name}
                  </h3>
                  <p className={cn("text-sm font-medium", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={cn("text-sm leading-relaxed line-clamp-2", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>
                {cert.description}
              </p>

              {/* Skills Tags */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cert.skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "text-[10px] font-semibold px-2 py-1 rounded-full",
                        isDark ? "bg-primary/20 text-primary/80" : "bg-blue-50 text-primary"
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span
                      className={cn(
                        "text-[10px] font-semibold px-2 py-1 rounded-full",
                        isDark ? "bg-primary/20 text-primary/80" : "bg-blue-50 text-primary"
                      )}
                    >
                      +{cert.skills.length - 2} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {selected && (
        <CertificateModal isOpen={open} onClose={closeModal} item={selected} />
      )}
    </section>
  );
};
