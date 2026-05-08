"use client";

import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ContactForm } from "./contact-form";
import { BRAND_INFO } from "@/lib/data";
import { EnvelopeSimpleIcon, PhoneIcon, MapPinIcon, CopyIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function ContactCTA() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    { icon: <EnvelopeSimpleIcon size={24} />, label: "Email", value: BRAND_INFO.email },
    { icon: <PhoneIcon size={24} />, label: "Phone", value: BRAND_INFO.phone },
    { icon: <MapPinIcon size={24} />, label: "Location", value: BRAND_INFO.location },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Blends */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <Card variant="elevated" className="p-0 overflow-hidden border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Form */}
              <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/5">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Let&apos;s build something <span className="text-gradient">epic</span>.</h2>
                <p className="text-text-muted mb-10">
                  Ready to start your next project? Fill out the form and I&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>

              {/* Right: Details */}
              <div className="p-8 md:p-12 lg:p-16 bg-surface-elevated/30">
                <h3 className="text-xl font-heading font-bold mb-8 uppercase tracking-widest text-primary/80">Direct Contact</h3>

                <div className="space-y-8">
                  {contactItems.map((item) => (
                    <div key={item.label} className="group">
                      <div className="flex items-center gap-5 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-text-muted uppercase tracking-wider">{item.label}</p>
                          <p className="text-lg font-medium text-white">{item.value}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(item.value, item.label)}
                          className="ml-auto p-2 text-text-muted hover:text-primary transition-colors relative"
                        >
                          <CopyIcon size={20} />
                          {copied === item.label && (
                            <span className="absolute -top-8 right-0 text-[10px] bg-primary text-background px-2 py-1 rounded font-bold whitespace-nowrap">
                              COPIED!
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10">
                  <h4 className="font-bold mb-2">Timezone</h4>
                  <p className="text-sm text-text-muted">Currently in {BRAND_INFO.location} (GMT+1). Available for meetings between 9 AM - 6 PM.</p>
                </div>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
