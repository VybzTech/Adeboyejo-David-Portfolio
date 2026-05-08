"use client";

import { ScrollReveal } from "@/components/common/scroll-reveal";
import { BRAND_INFO, SKILLS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DownloadSimple, SuitcaseSimple, GraduationCap, MapPin } from "@phosphor-icons/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <ScrollReveal direction="left">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              Engineering <br /><span className="text-gradient">Experiences</span>.
            </h1>
            <p className="text-xl text-text-muted max-w-xl mb-10 leading-relaxed">
              I&apos;m a Senior Product Engineer with a relentless focus on creating high-performance, aesthetically superior digital products. I believe that software should not only work perfectly but also feel physical and premium.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                <DownloadSimple size={20} />
                Download Resume
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden glass-panel border-white/10 p-4">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="/hero-visual.png"
                alt={BRAND_INFO.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Skills Section */}
        <section className="mb-32">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold mb-12">Technical <span className="text-primary">Arsenal</span>.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 0.05}>
                <Card className="p-6 flex flex-col items-center text-center group hover:bg-primary/5">
                  <div className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">{skill.name}</div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <section>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <SuitcaseSimple size={24} weight="bold" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Experience</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal direction="up">
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-primary shadow-glow" />
                  <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">2022 - PRESENT</span>
                  <h3 className="text-xl font-bold text-white mb-1">Senior Product Engineer</h3>
                  <p className="text-text-muted mb-4 font-medium">VybzTech (Self-founded)</p>
                  <p className="text-text-muted leading-relaxed">
                    Leading the development of high-performance web and mobile applications for global clients. Focused on Next.js, React, and Full-stack architecture.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-text-muted text-sm font-bold uppercase tracking-widest mb-2 block">2021 - 2022</span>
                  <h3 className="text-xl font-bold text-white mb-1">Full Stack Developer</h3>
                  <p className="text-text-muted mb-4 font-medium">Freelance / Remote</p>
                  <p className="text-text-muted leading-relaxed">
                    Collaborated with startups to build MVPs and scale existing products. Specialized in React and Node.js ecosystems.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <section>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  <GraduationCap size={24} weight="bold" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-white">Education</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal direction="up">
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                  <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-2 block">2018 - 2022</span>
                  <h3 className="text-xl font-bold text-white mb-1">B.Sc. Computer Science</h3>
                  <p className="text-text-muted mb-4 font-medium">University of Lagos</p>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
