"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Warning, ArrowCounterClockwise, House } from "@phosphor-icons/react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,91,232,0.1),transparent_50%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center relative z-10"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
          <Warning size={40} className="text-primary" weight="duotone" />
        </div>
        
        <h1 className="text-4xl font-heading font-bold mb-4 tracking-tight">
          Something went wrong
        </h1>
        
        <p className="text-text-muted mb-10 leading-relaxed">
          An unexpected error occurred. We&apos;ve been notified and are working to fix it.
          {error.digest && (
            <span className="block mt-2 text-xs opacity-50 font-mono">
              Error ID: {error.digest}
            </span>
          )}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="premium-button flex items-center gap-2"
          >
            <ArrowCounterClockwise size={20} weight="bold" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium border border-border hover:bg-surface-elevated transition-colors"
          >
            <House size={20} weight="bold" />
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
