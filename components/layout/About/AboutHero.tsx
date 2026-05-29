import { ScrollReveal } from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { PillIconButton } from "@/components/common/PillIconButton";
import { BRAND_INFO } from "@/lib/data";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import {
  DownloadSimple,
  Sparkle,
  MapPin,
  Lightning,
  PersonSimpleThrowIcon,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function AboutHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
      {/* Left: Copy */}
      <ScrollReveal direction="left">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-6"
        >
          <PersonSimpleThrowIcon size={32} />
          {/* <Sparkle size={14} weight="fill" /> */}
          About me
        </motion.span>
        <h1 className={cn(
          "text-5xl md:text-6xl xl:text-7xl font-heading font-black tracking-tight leading-none mb-6",
          isDark ? "text-white" : "text-[#111]"
        )}>
          Engineering <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Experiences
            </span>
          </span>
        </h1>
        <p className={cn(
          "text-lg leading-relaxed max-w-xl mb-8",
          isDark ? "text-[var(--text-muted)]" : "text-slate-600"
        )}>
          I&apos;m a Senior Product Engineer with a relentless focus on creating high-performance,
          aesthetically superior digital products. I believe software should not only work
          perfectly — it should feel physical and premium.
        </p>
        {/* CTA Row */}
        <div className={cn("flex flex-col lg:flex-row gap-7",
          "items-center justify-center"
        )}>
          {/* <div className="flex flex-wrap items-center gap-4"> */}
          <PillIconButton
            icon={<DownloadSimple size={18} weight="bold" className="text-white" />}
            title="Download Resume"
            type="button"
            onClick={() => setIsResumeOpen(true)}
          />
        </div>
      </ScrollReveal>
      {/* Right: Profile image + floating stat card */}
      <ScrollReveal direction="right" className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-primary/30 blur-2xl scale-110 pointer-events-none" />
          <div className={cn(
            "relative w-[260px] h-[320px] md:w-[300px] md:h-[360px] rounded-3xl overflow-hidden border shadow-2xl",
            isDark ? "border-white/10" : "border-slate-200"
          )}>
            <Image
              src="/images/Moi/David.png"
              alt={BRAND_INFO.name}
              fill
              className="object-cover hover:grayscale transition-all duration-700"
              priority
            />
            {/* Name overlay at bottom */}
            <div className={cn(
              "absolute bottom-0 inset-x-0 px-5 py-4",
              "bg-gradient-to-t from-black/80 to-transparent"
            )}>
              <p className="text-white font-heading font-bold text-lg leading-tight">{BRAND_INFO.name}</p>
              <p className="text-white/60 text-xs font-medium">Product Engineer</p>
            </div>
          </div>
          {/* Floating badge — top-right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className={cn(
              "absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg border text-sm font-semibold",
              isDark ? "bg-[var(--surface)] border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
            )}
          >
            <Lightning size={14} weight="fill" className="text-yellow-400" />
            Available for hire
          </motion.div>
        </div>
        {/* Stat pill row beneath image */}
        {/* ... omitted for brevity, can be extracted similarly */}
      </ScrollReveal>
    </div>
  );
}
