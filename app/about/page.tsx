"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ResumeModal } from "@/components/layout/Home/ResumeModal";
import { useState } from "react";
import { PillIconButton } from "@/components/common/PillIconButton";
import { BRAND_INFO, SKILLS } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import {
  DownloadSimple,
  SuitcaseSimple,
  GraduationCap,
  MapPin,
  Code,
  Rocket,
  Star,
  ArrowUpRight,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  InstagramLogo,
  Sparkle,
  Medal,
  Lightning,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const statItems = [
  { value: "4+", label: "Years Experience", icon: <Star size={18} weight="fill" /> },
  { value: "20+", label: "Projects Shipped", icon: <Rocket size={18} weight="fill" /> },
  { value: "10+", label: "Happy Clients", icon: <Medal size={18} weight="fill" /> },
  { value: "∞", label: "Lines of Code", icon: <Code size={18} weight="fill" /> },
];

const experienceItems = [
  {
    period: "2022 – Present",
    role: "Senior Product Engineer",
    company: "VybzTech",
    companyType: "Self-founded",
    description: "Leading development of high-performance web and mobile applications for global clients, focused on Next.js, React, and full-stack architecture.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    current: true,
  },
  {
    period: "2021 – 2022",
    role: "Full Stack Developer",
    company: "Freelance",
    companyType: "Remote",
    description: "Collaborated with early-stage startups to build MVPs and scale existing products. Specialised in React and Node.js ecosystems.",
    tags: ["React", "Node.js", "Firebase"],
    current: false,
  },
];

const educationItems = [
  {
    period: "2018 – 2022",
    degree: "B.Sc. Computer Science",
    institution: "University of Lagos",
    description: "Studied algorithms, software engineering, data structures, and computer networks.",
    current: false,
  },
];

const socialLinks = [
  { icon: <GithubLogo size={20} weight="fill" />, href: BRAND_INFO.github, label: "GitHub" },
  { icon: <LinkedinLogo size={20} weight="fill" />, href: BRAND_INFO.linkedin, label: "LinkedIn" },
  { icon: <TwitterLogo size={20} weight="fill" />, href: BRAND_INFO.twitter, label: "Twitter" },
  { icon: <InstagramLogo size={20} weight="fill" />, href: BRAND_INFO.instagram, label: "Instagram" },
];

const skillCategories = ["frontend", "backend", "design", "tools"] as const;
type SkillCategory = typeof skillCategories[number];

const categoryLabel: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  design: "Design",
  tools: "Tools & Infra",
};

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <> <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        isDark ? "bg-[var(--background)]" : "bg-[#f9f9fa]"
      )}
    >
      {/* ── Ambient background orbs ─────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary animate-pulse" />
        <div
          className="absolute bottom-1/3 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10 bg-blue-400 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">

        {/* ── HERO ROW ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left: Copy */}
          <ScrollReveal direction="left">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-6"
            >
              <Sparkle size={14} weight="fill" />
              About me
            </motion.span>

            <h1 className={cn(
              "text-5xl md:text-6xl xl:text-7xl font-heading font-black tracking-tight leading-none mb-6",
              isDark ? "text-white" : "text-[#111]"
            )}>
              Engineering{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
                  Experiences
                </span>
              </span>
            </h1>

            <p className={cn(
              "text-lg leading-relaxed max-w-xl mb-8",
              isDark ? "text-[var(--text-muted)]" : "text-slate-600"
            )}>
              I&apos;m a Senior Product Engineer with a relentless focus on creating high-performance,
              aesthetically superior digital products. I believe software should not only work
              perfectly — it should feel physical and premium.
            </p>

            {/* Location chip */}
            <div className={cn(
              "inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border mb-10",
              isDark
                ? "bg-white/5 border-white/10 text-[var(--text-muted)]"
                : "bg-white border-slate-200 text-slate-500 shadow-sm"
            )}>
              <MapPin size={14} weight="fill" className="text-primary" />
              Lagos, Nigeria · Open to Remote
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4">
              <PillIconButton
                icon={<DownloadSimple size={18} weight="bold" className="text-white" />}
                title="Download Resume"
                type="button"
                onClick={() => setIsResumeOpen(true)}
              />

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <motion.div
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "p-2.5 rounded-full border transition-colors duration-200",
                        isDark
                          ? "bg-white/5 border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20"
                          : "bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                      )}
                    >
                      {s.icon}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Profile image + floating stat card */}
          <ScrollReveal direction="right" className="flex flex-col items-center gap-6">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-primary/30 blur-2xl scale-110 pointer-events-none" />

              {/* Profile image — smaller: 300×360 */}
              <div className={cn(
                "relative w-[260px] h-[320px] md:w-[300px] md:h-[360px] rounded-3xl overflow-hidden border shadow-2xl",
                isDark ? "border-white/10" : "border-slate-200"
              )}>
                <Image
                  src="/images/Moi/David.png"
                  alt={BRAND_INFO.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Name overlay at bottom */}
                <div className={cn(
                  "absolute bottom-0 inset-x-0 px-5 py-4",
                  "bg-gradient-to-t from-black/80 to-transparent"
                )}>
                  <p className="text-white font-heading font-bold text-lg leading-tight">{BRAND_INFO.name}</p>
                  <p className="text-white/60 text-xs font-medium">Product Engineer</p>
                </div>
              </div>

              {/* Floating badge — top-right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className={cn(
                  "absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg border text-sm font-semibold",
                  isDark
                    ? "bg-[var(--surface)] border-white/10 text-white"
                    : "bg-white border-slate-200 text-slate-800"
                )}
              >
                <Lightning size={14} weight="fill" className="text-yellow-400" />
                Available for hire
              </motion.div>
            </div>

            {/* Stat pill row beneath image */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px]">
              {statItems.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={cn(
                    "flex flex-col items-center text-center p-4 rounded-2xl border transition-colors",
                    isDark
                      ? "bg-[var(--surface)] border-white/8 hover:border-white/15"
                      : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                  )}
                >
                  <span className="text-primary mb-1">{s.icon}</span>
                  <span className={cn("text-2xl font-heading font-black", isDark ? "text-white" : "text-[#111]")}>
                    {s.value}
                  </span>
                  <span className={cn("text-xs font-medium mt-0.5", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── SKILLS SECTION ──────────────────────────────────── */}
        <section className="mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-3">
              <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
                <Code size={20} weight="bold" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Expertise</span>
            </div>
            <h2 className={cn("text-3xl md:text-4xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]")}>
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Arsenal</span>
            </h2>
          </ScrollReveal>

          {/* Skills grouped by category */}
          <div className="space-y-10">
            {skillCategories.map((cat) => {
              const group = SKILLS.filter((s) => s.category === cat);
              if (!group.length) return null;
              return (
                <div key={cat}>
                  <p className={cn("text-xs font-bold uppercase tracking-widest mb-4", isDark ? "text-[var(--text-muted)]" : "text-slate-400")}>
                    {categoryLabel[cat]}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {group.map((skill, i) => (
                      <ScrollReveal key={skill.name} delay={i * 0.05}>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={cn(
                            "group flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-200 cursor-default",
                            isDark
                              ? "bg-[var(--surface)] border-white/8 hover:border-primary/40 hover:bg-primary/5"
                              : "bg-white border-slate-200 shadow-sm hover:border-primary/30 hover:shadow-md"
                          )}
                        >
                          <div className="flex flex-col">
                            <span className={cn("text-sm font-semibold leading-tight", isDark ? "text-white" : "text-[#111]")}>
                              {skill.name}
                            </span>
                            {/* Mini progress bar */}
                            <div className={cn("mt-1.5 w-16 h-1 rounded-full overflow-hidden", isDark ? "bg-white/10" : "bg-slate-100")}>
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="h-full rounded-full bg-gradient-to-r from-blue-400 to-primary"
                              />
                            </div>
                          </div>
                          <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.level}%
                          </span>
                        </motion.div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── EXPERIENCE & EDUCATION ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Experience */}
          <section>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("p-2 rounded-xl", isDark ? "bg-primary/10 text-primary" : "bg-blue-50 text-primary")}>
                  <SuitcaseSimple size={20} weight="bold" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Career</span>
              </div>
              <h2 className={cn("text-3xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]")}>
                Experience
              </h2>
            </ScrollReveal>

            <div className="relative pl-6 space-y-10">
              {/* Timeline rail */}
              <div className={cn("absolute left-0 top-2 bottom-0 w-px", isDark ? "bg-white/10" : "bg-slate-200")} />

              {experienceItems.map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="relative">
                    {/* Dot */}
                    <div className={cn(
                      "absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 shadow-md",
                      item.current
                        ? "bg-primary border-primary shadow-[0_0_8px_rgba(19,91,232,0.5)]"
                        : isDark ? "bg-white/20 border-white/20" : "bg-slate-300 border-slate-200"
                    )} />

                    {/* Card */}
                    <div className={cn(
                      "p-5 rounded-2xl border transition-all duration-200 hover:shadow-md",
                      isDark
                        ? "bg-[var(--surface)] border-white/8 hover:border-white/15"
                        : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                    )}>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className={cn("text-xs font-bold uppercase tracking-widest",
                            item.current ? "text-primary" : isDark ? "text-[var(--text-muted)]" : "text-slate-400"
                          )}>
                            {item.period}
                          </span>
                          {item.current && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
                              Current
                            </span>
                          )}
                        </div>
                        <ArrowUpRight size={16} className={isDark ? "text-white/20" : "text-slate-300"} />
                      </div>

                      <h3 className={cn("text-base font-bold mb-0.5", isDark ? "text-white" : "text-[#111]")}>
                        {item.role}
                      </h3>
                      <p className={cn("text-sm font-medium mb-3", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>
                        {item.company} · {item.companyType}
                      </p>
                      <p className={cn("text-sm leading-relaxed mb-4", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span key={t} className={cn(
                            "text-[11px] font-semibold px-2.5 py-1 rounded-full",
                            isDark ? "bg-primary/10 text-primary/80" : "bg-blue-50 text-primary"
                          )}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("p-2 rounded-xl", isDark ? "bg-secondary/10 text-secondary" : "bg-indigo-50 text-secondary")}>
                  <GraduationCap size={20} weight="bold" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Academic</span>
              </div>
              <h2 className={cn("text-3xl font-heading font-black mb-10", isDark ? "text-white" : "text-[#111]")}>
                Education
              </h2>
            </ScrollReveal>

            <div className="relative pl-6 space-y-10">
              <div className={cn("absolute left-0 top-2 bottom-0 w-px", isDark ? "bg-white/10" : "bg-slate-200")} />

              {educationItems.map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="relative">
                    <div className={cn(
                      "absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2",
                      isDark
                        ? "bg-secondary border-secondary shadow-[0_0_8px_rgba(6,77,165,0.6)]"
                        : "bg-indigo-400 border-indigo-300"
                    )} />
                    <div className={cn(
                      "p-5 rounded-2xl border transition-all duration-200 hover:shadow-md",
                      isDark
                        ? "bg-[var(--surface)] border-white/8 hover:border-white/15"
                        : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                    )}>
                      <span className={cn("text-xs font-bold uppercase tracking-widest mb-2 block",
                        isDark ? "text-secondary" : "text-indigo-500"
                      )}>
                        {item.period}
                      </span>
                      <h3 className={cn("text-base font-bold mb-0.5", isDark ? "text-white" : "text-[#111]")}>
                        {item.degree}
                      </h3>
                      <p className={cn("text-sm font-medium mb-3", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>
                        {item.institution}
                      </p>
                      <p className={cn("text-sm leading-relaxed", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ── CTA card ── */}
            <ScrollReveal delay={0.2}>
              <div className={cn(
                "mt-10 p-6 rounded-2xl border relative overflow-hidden",
                isDark
                  ? "bg-gradient-to-br from-primary/10 to-blue-500/5 border-primary/20"
                  : "bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-sm"
              )}>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                <h3 className={cn("font-heading font-bold text-lg mb-2", isDark ? "text-white" : "text-[#111]")}>
                  Ready to build something great?
                </h3>
                <p className={cn("text-sm leading-relaxed mb-5", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>
                  I&apos;m open to remote roles, freelance contracts, and exciting collaborative projects.
                </p>
                <Link href="/#contact">
                  <PillIconButton 
                    icon={<ArrowUpRight size={18} weight="bold" className="text-white" />}
                    title="Let's work together"
                    className="!mx-0"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
