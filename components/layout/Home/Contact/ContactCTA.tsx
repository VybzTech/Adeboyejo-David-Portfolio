"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/common/Button";
import { BRAND_INFO } from "@/lib/data";
import { EnvelopeSimple as EnvelopeSimpleIcon, Phone as PhoneIcon, LinkedinLogo as LinkedinLogoIcon, PaperPlaneTilt as PaperPlaneTiltIcon, ArrowRightIcon, XCircle } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Label } from "./Label";
import toast from "react-hot-toast";
import { PillIconButton } from "@/components/common/PillIconButton";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [copied, setCopied] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    const errorCount = Object.keys(errors).length;
    if (errorCount > 0) {
      toast.error(`Please fix ${errorCount} error${errorCount > 1 ? 's' : ''} in the form.`, { duration: 3000 });
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
          icon: "✓",
        });
        reset();
      } else {
        const errorData = await response.json();
        toast.dismiss(loadingToast);
        toast.error(errorData.error || "Failed to send message. Please try again.", {
          duration: 4000,
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please check your connection and try again.", {
        duration: 4000,
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      icon: <EnvelopeSimpleIcon size={24} weight="fill" />,
      label: "Email",
      value: BRAND_INFO.email,
      href: `mailto:${BRAND_INFO.email}`,
    },
    {
      icon: <PhoneIcon size={24} weight="fill" />,
      label: "Phone",
      value: BRAND_INFO.phone,
      href: `tel:${BRAND_INFO.phone}`,
    },
    {
      icon: <LinkedinLogoIcon size={24} weight="fill" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: BRAND_INFO.linkedin,
    },
  ];

  return (
    <section id="contact" className={cn("py-32 px-6 relative overflow-hidden", theme === "dark" ? "bg-[var(--background)]" : "bg-white")}>
      {/* Animated Background Orbs */}
      {/* <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse bg-blue-400" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-blue-300" style={{ animationDelay: "2s" }} />
      </div> */}

      <div className="relative z-10 mx-auto w-[80vw] max-w-[82vw]">
        <motion.div
          ref={containerRef}
          whileHover={{ y: -4 }}
          className={cn("rounded-3xl",
            // "rounded-tl-3xl rounded-br-3xl",
            "overflow-hidden border transition-all duration-500",
            theme === "dark"
              ? "bg-gray-800/80 backdrop-blur-lg border-gray-600/40"
              : "bg-gradient-to-br from-white via-blue-50/30 to-white border-blue-300/40",
            "shadow-[0_0_60px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.8)]",
            "hover:shadow-[0_0_80px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.8),0_20px_60px_rgba(59,130,246,0.15)]"
            // ,"bg-black"  
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Content */}
            <div className={cn(
              "p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r",
              theme === "dark"
                ? "bg-[var(--background)] backdrop-blur-lg border-gray-600/70"
                : "bg-white/30 backdrop-blur-md border-blue-200/40",
              "shadow-xl rounded-tl-3xl lg:rounded-bl-3xl "
            )}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="space-y-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-medium uppercase text-sm text-primary tracking-[0.8px]"
                  >
                    Let's Connect
                  </motion.span>
                  {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Let's Connect
                  </p> */}
                  <h2 className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-heading font-black",
                    isDark ? "text-primary" : "text-black"
                  )}>
                    Contact Me
                  </h2>
                </div>

                {/* Description */}
                <div className={cn("space-y-4",
                  isDark ? "text-white" : "text-slate-700"
                )}>
                  <p className="text-base leading-relaxed">
                    Looking for a Product Engineer who builds scalable, high-performance digital experiences with strong frontend craftsmanship and full-stack thinking? Let's connect.
                  </p>
                  <p className="text-base leading-relaxed">
                    I'm always open to discussing remote opportunities, ambitious products, SaaS platforms, creative collaborations, and systems that solve real business problems. Whether you're building from scratch, improving an existing product, or looking for someone who can bridge design, engineering, and product thinking — I'd love to hear about it.
                  </p>
                </div>

                {/* Signature */}
                <p className={cn("text-sm font-semibold pt-4 pb-2.5 border-t", isDark ? "text-gray-400 border-slate-800/50" : "text-slate-600 border-blue-200/40")}>
                  David Adeboyejo<br />
                  <span className="text-xs font-normal">Product Engineer • Full-Stack Developer • Frontend Systems Builder</span>
                </p>
              </motion.div>

              {/* Contact Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={cn("flex gap-4 pt-8 border-t ",
                  isDark ? "border-slate-800/60" : "border-blue-200/40")}
              >
                {contactItems.map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={cn("flex items-center gap-2 px-4 py-2 rounded-lg hover:cursor-pointer",
                        isDark ? "bg-[var(--background)] border-slate-800/60 text-white hover:bg-slate-800/60 hover:border-slate-800/60"
                          : "bg-blue-100 border border-blue-300 text-blue-700 hover:bg-blue-200 hover:border-blue-400"
                      )}
                    >
                      {item.icon}
                      <span className="hidden md:block lg:block">{item.label}</span>
                    </motion.button>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className={cn("p-8 md:p-12 lg:p-16",
              "flex flex-col justify-center",
              isDark ? "bg-gradient-to-br from-surface to-surface border-slate-700/20 shadow-[0_0_40px_rgba(59,130,255,0.1),inset_0_1px_7px_rgba(59,95,246,0.1),0_15px_15px_rgba(59,130,255,0.05)]"
                :
                "bg-gradient-to-br from-slate-200/50 to-slate-100/35",
            )}>
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                {/* Name & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-light text-slate-500 mb-2">Your Name</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="David Adeboyejo"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border placeholder-slate-400 focus:outline-none transition-all duration-300",
                        errors.name
                          ? "border-red-400/50 focus:ring-2 focus:ring-red-400/20 focus:border-red-400"
                          : "border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20",
                        isDark ? "bg-transparent text-white border-primary" : " bg-white/80 text-slate-900"
                      )}
                    />
                    {errors.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-2 text-xs text-red-600 font-body"
                      >
                        <XCircle size={14} weight="fill" />
                        <span>{errors.name.message}</span>
                      </motion.div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-light text-slate-500 mb-2">Subject</label>
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="Project Inquiry"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border placeholder-slate-400 focus:outline-none transition-all duration-300",
                        errors.subject
                          ? "border-red-400/50 focus:ring-2 focus:ring-red-400/20 focus:border-red-400"
                          : "border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20",
                        isDark ? "bg-transparent text-white border-primary" : " bg-white/80 text-slate-900"
                      )}
                    />
                    {errors.subject && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-2 text-xs text-red-600 font-body"
                      >
                        <XCircle size={14} weight="fill" />
                        <span>{errors.subject.message}</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-body font-light text-slate-500 mb-2">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="hello@example.com"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border placeholder-slate-400 focus:outline-none transition-all duration-300",
                      errors.email
                        ? "border-red-400/50 focus:ring-2 focus:ring-red-400/20 focus:border-red-400"
                        : "border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20",
                      isDark ? "bg-transparent text-white border-primary" : " bg-white/80 text-slate-900"
                    )}
                  />
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mt-2 text-xs text-red-600 font-body"
                    >
                      <XCircle size={14} weight="fill" />
                      <span>{errors.email.message}</span>
                    </motion.div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-body font-light text-slate-500 mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border placeholder-slate-400 focus:outline-none transition-all duration-300 resize-none",
                      errors.message
                        ? "border-red-400/50 focus:ring-2 focus:ring-red-400/20 focus:border-red-400"
                        : "border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20",
                      isDark ? "bg-transparent text-white border-primary" : " bg-white/80 text-slate-900"
                    )}
                  />
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mt-2 text-xs text-red-600 font-body"
                    >
                      <XCircle size={14} weight="fill" />
                      <span>{errors.message.message}</span>
                    </motion.div>
                  )}
                </div>

                {/* Send Button */}
                <div className="relative pt-2">
                   {/* <Button
                    type="submit"
                    isLoading={isSubmitting}
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    className={cn(
                      "w-fit relative rounded-full py-3 px-8 font-semibold text-white",
                      "bg-gradient-to-br from-blue-400 to-primary hover:from-blue-500 hover:to-blue-800",
                      "transition-all duration-300 shadow-lg hover:shadow-xl mx-auto",
                      "flex items-center justify-center gap-3 ease-in-out",
                      Object.keys(errors).length > 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] hover:cursor-pointer"
                    )}
                  >
                    <span className="relative z-10 font-semibold">{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && (
                      <motion.div
                        className="relative z-10"
                        whileHover={{ rotate: Object.keys(errors).length > 0 ? 0 : -25 }}
                      >
                        <PaperPlaneTiltIcon weight="bold" size={20} className="text-white" />
                      </motion.div>
                    )}
                  </Button> */}
                  <PillIconButton icon={<PaperPlaneTiltIcon weight="bold" size={20} className="text-white" />} title="Send Message" isLoading={isSubmitting} disabled={isSubmitting || Object.keys(errors).length > 0} className="mx-auto" />
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
