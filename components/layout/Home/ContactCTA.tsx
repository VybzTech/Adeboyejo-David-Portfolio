"use client";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { BRAND_INFO } from "@/lib/data";
import { EnvelopeSimpleIcon, PhoneIcon, MapPinIcon, CopyIcon, CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ContactCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
      {/* Background Gradient */}
      <div
        className={cn(
          "absolute inset-0",
          isDark
            ? "bg-gradient-to-b from-[var(--background)] via-secondary/5 to-[var(--background)]"
            : "bg-gradient-to-b from-blue-50/50 via-white to-white"
        )}
      />

      {/* Animated Orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className={cn(
            "absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse",
            isDark ? "bg-primary/20" : "bg-blue-400/15"
          )}
        />
        <div
          className={cn(
            "absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse",
            isDark ? "bg-secondary/20" : "bg-blue-300/10"
          )}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -4 }}
            className={cn(
              "overflow-hidden rounded-3xl border transition-all duration-500",
              isDark
                ? "bg-gradient-to-br from-surface/80 to-surface/40 border-white/10 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,240,255,0.15)]"
                : "bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 hover:border-blue-400/50 hover:shadow-[0_20px_60px_rgba(19,91,232,0.15)]"
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Form */}
              <div
                className={cn(
                  "p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r",
                  isDark ? "border-white/5" : "border-blue-200/50"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2
                    className={cn(
                      "text-3xl md:text-4xl font-heading font-bold mb-4",
                      isDark
                        ? "text-[var(--text-primary)]"
                        : "text-slate-900"
                    )}
                  >
                    Let&apos;s build something{" "}
                    <span className={cn(isDark ? "text-primary" : "text-blue-600")}>epic</span>.
                  </h2>
                  <p
                    className={cn(
                      "mb-10 text-lg",
                      isDark ? "text-text-secondary" : "text-slate-700"
                    )}
                  >
                    Ready to start your next project? Fill out the form and I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
                <ContactForm />
              </div>

              {/* Right: Details */}
              <div
                className={cn(
                  "p-8 md:p-12 lg:p-16",
                  isDark
                    ? "bg-surface-elevated/30"
                    : "bg-blue-50/30"
                )}
              >
                <h3
                  className={cn(
                    "text-xl font-heading font-bold mb-8 uppercase tracking-widest",
                    isDark ? "text-primary/80" : "text-blue-600/80"
                  )}
                >
                  Direct Contact
                </h3>

                <div className="space-y-6">
                  {contactItems.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group"
                    >
                      <div
                        className={cn(
                          "flex items-center gap-5 p-4 rounded-xl border transition-all duration-300",
                          isDark
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30"
                            : "bg-blue-100/30 border-blue-200/40 hover:bg-blue-100/50 hover:border-blue-300/60"
                        )}
                      >
                        <motion.div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 transition-all duration-300",
                            isDark
                              ? "bg-white/5 border-white/10 text-primary group-hover:bg-primary group-hover:text-background"
                              : "bg-blue-100 border-blue-300/40 text-blue-700 group-hover:bg-blue-600 group-hover:text-white"
                          )}
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={cn(
                              "text-xs font-bold uppercase tracking-wider",
                              isDark ? "text-text-muted" : "text-slate-600"
                            )}
                          >
                            {item.label}
                          </p>
                          <p
                            className={cn(
                              "text-lg font-semibold truncate",
                              isDark ? "text-white" : "text-slate-900"
                            )}
                          >
                            {item.value}
                          </p>
                        </div>
                        <motion.button
                          onClick={() => copyToClipboard(item.value, item.label)}
                          className={cn(
                            "p-2 rounded-lg transition-all duration-300 flex-shrink-0",
                            isDark
                              ? "hover:bg-white/10 text-text-muted hover:text-primary"
                              : "hover:bg-blue-200/50 text-slate-600 hover:text-blue-700"
                          )}
                          whileHover={{ scale: 1.1 }}
                        >
                          {copied === item.label ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <CheckCircle size={20} />
                            </motion.div>
                          ) : (
                            <CopyIcon size={20} />
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={cn(
                    "mt-8 p-6 rounded-2xl border transition-all duration-300",
                    isDark
                      ? "bg-primary/10 border-primary/20 hover:border-primary/40"
                      : "bg-blue-100/40 border-blue-300/40 hover:border-blue-400/60"
                  )}
                >
                  <h4
                    className={cn(
                      "font-bold mb-2",
                      isDark ? "text-primary" : "text-blue-700"
                    )}
                  >
                    ⏰ Timezone
                  </h4>
                  <p
                    className={cn(
                      "text-sm",
                      isDark ? "text-text-muted" : "text-slate-700"
                    )}
                  >
                    Currently in {BRAND_INFO.location} (GMT+1). Available for meetings between 9 AM - 6 PM.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
