"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="w-10 h-10 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
      >
        D
      </motion.div>
      <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
        David<span className="text-[var(--accent-primary)]">.</span>
      </span>
    </Link>
  );
}
