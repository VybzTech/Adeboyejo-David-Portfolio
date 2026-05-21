"use client";

import { useRef, useState } from "react";
import { ContactForm } from "./ContactForm";
import { BRAND_INFO } from "@/lib/data";
import { EnvelopeSimpleIcon, PhoneIcon, LinkedinLogo, CopyIcon, CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export function ContactCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [copied, setCopied] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      icon: <EnvelopeSimpleIcon size={24} weight="fill" />,
      label: "Email",
      value: BRAND_INFO.email,
      href: `mailto:${BRAND_INFO.email}`,
    },
    {
      icon: <PhoneIcon size={24} weight="fill" />,
      label: "Phone",
      value: BRAND_INFO.phone,
      href: `tel:${BRAND_INFO.phone}`,
    },
    {
      icon: <LinkedinLogo size={24} weight="fill" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/adeboyejo",
    },
  ];

  return (
    <section id="contact" className={cn("py-32 px-6 relative overflow-hidden", theme === "dark" ? "bg-gray-900" : "bg-white")}>
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse bg-blue-400" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-blue-300" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={containerRef}
          whileHover={{ y: -4 }}
          className={cn(
              "overflow-hidden rounded-3xl border transition-all duration-500",
              theme === "dark"
                ? "bg-gray-800/80 backdrop-blur-lg border-gray-600/40"
                : "bg-gradient-to-br from-white via-blue-50/30 to-white border-blue-300/40",
              "shadow-[0_0_60px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.8)]",
              "hover:shadow-[0_0_80px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.8),0_20px_60px_rgba(59,130,246,0.15)]"
            )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Content */}
            <div className={cn(
              "p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r",
              theme === "dark"
                ? "bg-gray-800/70 backdrop-blur-lg border-gray-600/40"
                : "bg-white/30 backdrop-blur-md border-blue-200/40",
              "shadow-xl rounded-xl"
            )}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Let's Connect
                  </p>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">
                    Contact Me
                  </h2>
                </div>

                {/* Description */}
                <div className="space-y-4 text-slate-700">
                  <p className="text-base leading-relaxed">
                    Looking for a Product Engineer who builds scalable, high-performance digital experiences with strong frontend craftsmanship and full-stack thinking? Let's connect.
                  </p>
                  <p className="text-base leading-relaxed">
                    I'm always open to discussing remote opportunities, ambitious products, SaaS platforms, creative collaborations, and systems that solve real business problems. Whether you're building from scratch, improving an existing product, or looking for someone who can bridge design, engineering, and product thinking — I'd love to hear about it.
                  </p>
                </div>

                {/* Signature */}
                <p className={cn("text-sm font-semibold pt-4 border-t", isDark ? "text-gray-400 border-gray-700" : "text-slate-600 border-blue-200/40")}>
                  — David Adeboyejo<br />
                  <span className="text-xs font-normal">Product Engineer • Full-Stack Developer • Frontend Systems Builder</span>
                </p>
              </motion.div>

              {/* Contact Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 pt-8 border-t border-blue-200/40"
              >
                {contactItems.map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 border border-blue-300 text-blue-700 hover:bg-blue-200 hover:border-blue-400 transition-all duration-300 font-semibold text-sm"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.button>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-blue-50/40 to-white/50 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                {/* Name & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Subject"
                    className="px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                />

                {/* Message */}
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white/80 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                />

                {/* Send Button */}
                <div className="relative pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full relative rounded-full py-3 px-8 font-semibold text-white",
                      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
                      "transition-all duration-300 shadow-lg hover:shadow-xl",
                      "flex items-center justify-center gap-3"
                    )}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0"
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content */}
                    <span className="relative z-10 font-semibold">Send Message</span>
                    <motion.div
                      className="relative z-10 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center"
                      whileHover={{ rotate: 45 }}
                    >
                      <PaperPlaneTilt size={16} weight="fill" className="text-white" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
