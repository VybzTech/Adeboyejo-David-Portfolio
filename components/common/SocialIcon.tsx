import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialLinks } from "../layout/About/aboutData";
import { useTheme } from "../providers/ThemeProvider";

export function SocialIcon({ s }: { s: SocialLinks }) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
        >
            <motion.div
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "p-2.5 rounded-full border transition-colors duration-200",
                    isDark
                        ? "bg-white/5 border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20"
                        : "bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                )}
            >
                <s.icon size={18} weight="fill" />
            </motion.div>
        </Link>
    )
}
