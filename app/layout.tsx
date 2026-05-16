import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "David Adeboyejo | Product Engineer & Full Stack Developer",
    template: "%s | David Adeboyejo",
  },
  description: "Senior Product Engineer specializing in high-performance web applications, SaaS products, and premium user experiences. Based in Nigeria, available for remote work worldwide.",
  keywords: [
    "David Adeboyejo",
    "Product Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Nigeria",
    "SaaS",
    "Web Performance",
  ],
  authors: [{ name: "David Adeboyejo" }],
  creator: "David Adeboyejo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://david-adeboyejo.web.app",
    title: "David Adeboyejo | Product Engineer",
    description: "Senior Product Engineer specializing in high-performance web applications.",
    siteName: "David Adeboyejo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Adeboyejo | Product Engineer",
    description: "Senior Product Engineer specializing in high-performance web applications.",
    creator: "@djay_vybz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};


import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(spaceGrotesk.variable, montserrat.variable, "scroll-smooth")}>
      <body className="bg-background text-text-primary font-body antialiased selection:bg-primary/30">
        <div className="noise-bg" />
        <LenisProvider>
          <ThemeProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
