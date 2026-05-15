"use client";

import Link from "next/link";
import { BRAND_INFO } from "@/lib/data";
import { GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GithubLogo size={24} />, href: BRAND_INFO.github, label: "GitHub" },
    { icon: <LinkedinLogo size={24} />, href: BRAND_INFO.linkedin, label: "LinkedIn" },
    { icon: <TwitterLogo size={24} />, href: BRAND_INFO.twitter, label: "Twitter" },
    { icon: <InstagramLogo size={24} />, href: BRAND_INFO.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] pt-20 pb-10 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-[var(--accent-primary)] rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:rotate-6 transition-transform">
                DA
              </div>
              <span className="font-heading text-xl font-bold tracking-tight">
                {BRAND_INFO.brand}
              </span>
            </Link>
            <p className="text-[var(--text-muted)] max-w-sm mb-8 leading-relaxed">
              Senior Product Engineer dedicated to building premium digital experiences that blend aesthetics with extreme performance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, color: "var(--accent-primary)" }}
                  className="text-[var(--text-muted)] transition-colors p-2 rounded-lg hover:bg-[var(--surface-elevated)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
              <li><Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--accent-primary)] transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={20} className="text-[var(--accent-primary)]" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[var(--accent-primary)] transition-colors">{BRAND_INFO.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[var(--accent-primary)]" />
                <a href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`} className="hover:text-[var(--accent-primary)] transition-colors">{BRAND_INFO.phone}</a>
              </li>
              <li className="text-sm opacity-80">{BRAND_INFO.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)]">
          <p>© {currentYear} {BRAND_INFO.brand}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
