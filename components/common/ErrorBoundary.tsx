"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";
import { Warning, ArrowCounterClockwise } from "@phosphor-icons/react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center bg-background px-6 py-12 rounded-3xl border border-border/50 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-500/20">
              <Warning size={32} className="text-red-500" weight="duotone" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-3">Component Error</h2>
            <p className="text-text-muted mb-6 max-w-sm mx-auto">
              Something went wrong while rendering this section.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-elevated border border-border hover:bg-border transition-colors mx-auto text-sm font-medium"
            >
              <ArrowCounterClockwise size={18} weight="bold" />
              Try Again
            </button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
