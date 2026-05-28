import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={cn("relative w-full h-[500px] overflow-hidden", isDark ? "bg-[var(--background)]" : "bg-white")}>
      {/* Dark Mode Background */}
      {isDark && (
        <>
          {/* Radial gradient backdrop - deep blue to dark slate */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />

          {/* Large blurred orbs - blended fade */}
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl bg-blue-600/20 opacity-60" />
          <div className="absolute -top-32 right-1/3 w-96 h-96 rounded-full blur-3xl bg-blue-500/15 opacity-50" />
          <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full blur-3xl bg-blue-400/10 opacity-40" />

          {/* Grid pattern - larger squares */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(#60a5fa 0.5px, transparent 0.5px), linear-gradient(90deg, #60a5fa 0.5px, transparent 0.5px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </>
      )}

      {/* Light Mode Background */}
      {!isDark && (
        <>
          {/* Radial gradient backdrop - white to silver to sky blue */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-sky-50" />

          {/* Large blurred orbs - professional color blend */}
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-sky-300 to-sky-200 opacity-40" />
          <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-slate-200 to-sky-200 opacity-35" />
          <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-sky-100 to-slate-100 opacity-30" />
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-slate-100 to-sky-100 opacity-25" />

          {/* Grid pattern - larger squares with subtle color */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `linear-gradient(#cbd5e1 0.5px, transparent 0.5px), linear-gradient(90deg, #cbd5e1 0.5px, transparent 0.5px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </>
      )}

      {children}
    </div>
  );
}