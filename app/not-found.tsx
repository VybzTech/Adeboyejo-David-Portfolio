"use client";

import { motion } from "framer-motion";
import { Ghost, House, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,91,232,0.1),transparent_50%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center relative z-10"
      >
        <div className="relative inline-block mb-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20"
          >
            <Ghost size={48} className="text-primary" weight="duotone" />
          </motion.div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-primary/20 blur-md rounded-full" />
        </div>
        
        <h1 className="text-6xl font-heading font-black mb-4 tracking-tighter">
          404
        </h1>
        
        <h2 className="text-2xl font-heading font-bold mb-4">
          Lost in the matrix?
        </h2>
        
        <p className="text-text-muted mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved to a different dimension.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium border border-border hover:bg-surface-elevated transition-colors"
          >
            <ArrowLeft size={20} weight="bold" />
            Go Back
          </button>
          
          <Link
            href="/"
            className="premium-button flex items-center gap-2"
          >
            <House size={20} weight="bold" />
            Home Base
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
