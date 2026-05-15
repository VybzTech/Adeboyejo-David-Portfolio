"use client";

import { PremiumCards } from "./Hero/PremiumCards";
import { motion } from "framer-motion";

export function WhatIDo() {
  return (
    <section className="py-20 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <span className="text-[var(--accent-primary)] font-bold uppercase tracking-[0.2em] text-xs">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight">
            WHAT I <span className="text-[var(--accent-primary)]">DO</span>
          </h2>
        </motion.div>
      </div>
      
      <PremiumCards />
    </section>
  );
}
