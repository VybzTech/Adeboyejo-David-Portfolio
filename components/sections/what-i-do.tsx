"use client";

import { SERVICES } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { CodeIcon, CpuIcon, FigmaLogoIcon, ArrowRightIcon, CubeIcon } from "@phosphor-icons/react";

const ICON_MAP: Record<string, any> = {
  CodeIcon,
  CpuIcon,
  FigmaLogoIcon,
};

export function WhatIDo() {
  return (
    <section className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <ScrollReveal direction="left" distance={30}>
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">What I Do</h2>
              <p className="text-4xl md:text-5xl font-heading font-bold max-w-xl">
                I help brands build <span className="text-gradient">high-performance</span> digital systems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={30}>
            <p className="text-text-muted max-w-sm mb-2">
              Combining technical excellence with design thinking to deliver products that stand out.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || CubeIcon;

            return (
              <ScrollReveal key={service.name} delay={index * 0.1}>
                <Card className="p-10 h-full flex flex-col group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <Icon size={32} weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{service.name}</h3>
                  <p className="text-text-muted leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    LEARN MORE <ArrowRightIcon size={16} />
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
