"use client";

import { motion } from "framer-motion";
import { ChatCircle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

interface CommentSectionProps {
  projectName: string;
}

export function CommentSection({ projectName }: CommentSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleCommentClick = () => {
    // Scroll to or focus on comment form - to be implemented
    console.log("Comment on project clicked");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-2xl border p-8 md:p-12 mb-16",
        isDark
          ? "bg-white/5 border-white/10 hover:border-white/20"
          : "bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 hover:border-slate-300"
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full",
            isDark ? "bg-primary/20" : "bg-primary/10"
          )}>
            <ChatCircle size={24} className="text-primary" weight="fill" />
          </div>
          <div>
            <h3 className={cn(
              "text-lg font-heading font-bold mb-1",
              isDark ? "text-white" : "text-slate-900"
            )}>
              Have feedback on {projectName}?
            </h3>
            <p className={cn(
              "text-sm",
              isDark ? "text-white/60" : "text-slate-600"
            )}>
              Share your thoughts and let's start a conversation.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCommentClick}
          className={cn(
            "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap",
            isDark
              ? "bg-primary text-white hover:bg-blue-600 shadow-lg hover:shadow-xl"
              : "bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
          )}
        >
          Add Comment
        </motion.button>
      </div>
    </motion.div>
  );
}
