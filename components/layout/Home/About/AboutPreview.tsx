"use client";

import { useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { AboutBanner } from "./AboutBanner";
import { AboutNav } from "./AboutNav";
import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certification } from "./Certification";

export function AboutPreview() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const isDark = theme === "dark";

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "certification":
        return <Certification />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <section
      className={cn(
        "relative py-24 md:py-32", // Removed overflow-hidden to allow banner to overlap previous section
        isDark ? "bg-[var(--background)]" : "bg-white"
      )}
    >
      {/* Banner Background */}
      <AboutBanner />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="pt-20 md:pt-40 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Navigation */}
          <AboutNav activeSection={activeSection} onSectionChange={setActiveSection} />

          {/* Right Content */}
          <div
            className={cn(
              "lg:w-2/3 rounded-2xl p-8 md:p-12 border transition-all duration-300",
              isDark
                ? "bg-gradient-to-br from-surface/50 to-surface/20 border-white/10"
                : "bg-gradient-to-br from-blue-50/50 to-white border-blue-200/50"
            )}
          >
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none",
          isDark
            ? "from-[var(--background)] to-transparent"
            : "from-white to-transparent"
        )}
      />
    </section>
  );
}
