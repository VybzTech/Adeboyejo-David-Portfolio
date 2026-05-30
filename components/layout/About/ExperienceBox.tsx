import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";
import { PillIconButton } from "@/components/common/PillIconButton";
import { ArrowBendUpRightIcon, ArrowUpRightIcon, SuitcaseIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function ExperienceBox({ item, i, isDark, openModal }: {
    item: any;
    i: number;
    isDark: boolean;
    openModal: (item: any) => void;
}) {
    return (
        <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <div className="relative">
                {/* Dot */}
                <div className={cn(
                    "absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full border-2 shadow-md",
                    item.current
                    ? "bg-primary border-1 border-blue-400 shadow-[0_0_8px_rgba(19,91,232,0.5)]"
                    : isDark ? "bg-white/20 border-white/20" : "bg-slate-300 border-slate-200"
                )}/>
                {/* Card */}
                <div 
                onClick={() => openModal(item)}
                className={cn(
                    "hover:cursor-pointer",
                    "p-5 rounded-2xl border transition-all duration-200 hover:shadow-md",
                    isDark
                        ? "bg-[var(--surface)] border-white/8 hover:border-white/15"
                        : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                )}>
                    <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                            <span className={cn("text-xs font-bold uppercase tracking-widest", item.current ? "text-primary" : isDark ? "text-[var(--text-muted)]" : "text-slate-400")}>
                                {item.period}
                            </span>
                            {item.current && (
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">Current</span>
                            )}
                        </div>
                        <ArrowUpRightIcon size={22} className={isDark ? "text-white/20" : "text-slate-300"} />
                    </div>

                    {/* Company Logo + Role */}
                    <div className="flex items-start gap-3 mb-3">
                        {item.logo && (
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                                <Image
                                    src={item.logo}
                                    alt={item.company}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain bg-white/50 dark:bg-white/5"
                                />
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <h3 className={cn("text-base font-bold", isDark ? "text-white" : "text-[#111]")}>{item.role}</h3>
                            <p className={cn("text-sm font-medium", isDark ? "text-[var(--text-muted)]" : "text-slate-500")}>{item.company} · {item.companyType}</p>
                        </div>
                    </div>
                    <p className={cn("text-sm leading-relaxed mb-4", isDark ? "text-[var(--text-muted)]" : "text-slate-600")}>{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((t: string) => (
                            <span key={t} className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full", isDark ? "bg-primary/10 text-primary/80" : "bg-blue-50 text-primary")}>{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}