// "use client";

// import Link from "next/link";
// import { BRAND_INFO } from "@/lib/data";
// import { GithubLogoIcon, LinkedinLogoIcon, TwitterLogoIcon, InstagramLogoIcon, EnvelopeSimpleIcon, PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
// import { motion } from "framer-motion";
// import Logo from "@/components/layout/Navbar/Logo";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <GithubLogoIcon size={24} />, href: BRAND_INFO.github, label: "GitHub" },
//     { icon: <LinkedinLogoIcon size={24} />, href: BRAND_INFO.linkedin, label: "LinkedIn" },
//     { icon: <TwitterLogoIcon size={24} />, href: BRAND_INFO.twitter, label: "Twitter" },
//     { icon: <InstagramLogoIcon size={24} />, href: BRAND_INFO.instagram, label: "Instagram" },
//     { icon: <WhatsappLogoIcon size={24} />, href: "https://wa.me/2348121820645", label: "WhatsApp" },
//   ];

//   return (
//     <footer className="relative bg-[var(--background)] border-t border-[var(--border)] pt-20 pb-10 px-6 transition-all duration-500 overflow-hidden">
//       {/* Intense Deep Blue Glows */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(19,91,232,0.12),transparent_30%)] pointer-events-none" />
//       <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary/25 blur-[130px] rounded-full pointer-events-none opacity-20" />
//       <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/15 blur-[150px] rounded-full pointer-events-none opacity-40" />

//       <div className="max-w-7xl mx-auto relative z-1">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
//           {/* Brand Section */}
//           <div className="col-span-1 md:col-span-2">
//             <Link href="/" className="flex items-start gap-2.5 mb-6 group">
//               <Logo
//                 className="w-[11vw] sm:w-[10vw] lg:w-[5vw] xl:w-[2.5vw] max-w-[200px]"
//                 svgFill={"#5559"}
//                 AFill={"#f22"}
//                 theme={"light"}
//               />
//               <span className="font-heading text-2xl font-bold tracking-[-0.02em]">
//                 {BRAND_INFO.name}
//               </span>
//             </Link>
//             <p className="text-[var(--text-muted)] max-w-sm mb-8 leading-relaxed">
//               Senior Product Engineer dedicated to building premium digital experiences that blend aesthetics with extreme performance.
//             </p>
//             <div className="flex gap-4">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ y: -4, color: "var(--accent-primary)" }}
//                   className="text-[var(--text-muted)] transition-colors p-2 rounded-lg hover:bg-[var(--surface-elevated)]"
//                   aria-label={social.label}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h4 className="font-heading font-bold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-md">Site map</h4>
//             <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
//               <li><Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link></li>
//               <li><Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors">About</Link></li>
//               <li><Link href="/case-studies" className="hover:text-[var(--accent-primary)] transition-colors">Case Studies</Link></li>
//               <li><Link href="/contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="font-heading font-bold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-md">Contact</h4>
//             <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
//               <li className="flex items-center gap-3">
//                 <EnvelopeSimpleIcon size={20} className="text-[var(--accent-primary)]" />
//                 <a href={`mailto:${BRAND_INFO?.email}`} className="hover:text-[var(--accent-primary)] transition-colors">{BRAND_INFO?.email}</a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <PhoneIcon size={20} className="text-[var(--accent-primary)]" />
//                 <a href={`tel:${BRAND_INFO?.phone?.replace(/\s/g, '')}`} className="hover:text-[var(--accent-primary)] transition-colors">{BRAND_INFO?.phone}</a>
//               </li>
//               <li className="text-sm opacity-80">{BRAND_INFO.location}</li>
//               <li className="text-sm opacity-80">{BRAND_INFO.location2}</li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//           <p className="text-slate-500">© {currentYear} {BRAND_INFO?.brand}. All rights reserved.</p>
//           {/* <p className="text-[var(--text-muted)]">© {currentYear} {BRAND_INFO.brand}. All rights reserved.</p> */}
//           <p className="text-slate-500 italic tracking-tight text-sm">
//             Building scalable systems to optimize workflows — engineering how people work, efficiently.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }







"use client";

import Link from "next/link";
import { BRAND_INFO } from "@/lib/data";
import { GithubLogoIcon, LinkedinLogoIcon, TwitterLogoIcon, InstagramLogoIcon, EnvelopeSimpleIcon, PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Logo from "@/components/layout/Navbar/Logo";
import { trackInteraction } from "@/app/actions/portfolioActions"; // Importing click telemetry

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GithubLogoIcon size={24} />, href: BRAND_INFO.github, label: "GitHub" },
    { icon: <LinkedinLogoIcon size={24} />, href: BRAND_INFO.linkedin, label: "LinkedIn" },
    { icon: <TwitterLogoIcon size={24} />, href: BRAND_INFO.twitter, label: "Twitter" },
    { icon: <InstagramLogoIcon size={24} />, href: BRAND_INFO.instagram, label: "Instagram" },
    { icon: <WhatsappLogoIcon size={24} />, href: "https://wa.me/2348121820645", label: "WhatsApp" },
  ];

  // Callback to execute server tracking action
  const handleSocialClick = async (platform: string) => {
    await trackInteraction(platform, "click_social_footer");
  };

  return (
    <footer className="relative bg-[var(--background)] border-t border-[var(--border)] pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-start gap-2.5 lg:gap-4 mb-6 group">
              <Logo className="w-[3rem] md:w-[2.75rem] lg:w-[3.1rem] xl:w-[3.25rem]" svgFill={"#5559"} AFill={"#f22"} theme={"light"} />
              <span className="font-heading text-2xl font-bold tracking-[-0.02em]">{BRAND_INFO.name}</span>
            </Link>
            <p className="text-[var(--text-muted)] max-w-sm mb-8 leading-relaxed">
              Senior Product Engineer dedicated to building premium digital experiences that blend aesthetics with extreme performance.
            </p>
            
            {/* Monitored Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, color: "var(--accent-primary)" }}
                  className="text-[var(--text-muted)] transition-colors p-2 rounded-lg hover:bg-[var(--surface-elevated)]"
                  aria-label={social.label}
                  onClick={() => handleSocialClick(social.label)} // Capture click integration
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Map */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-md">Site map</h4>
            <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
              <li><Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-[var(--accent-primary)] transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Direct Communications Info */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-primary)] mb-6 uppercase tracking-wider text-md">Contact</h4>
            <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
              <li className="flex items-center gap-3">
                <EnvelopeSimpleIcon size={20} className="text-[var(--accent-primary)]" />
                <a href={`mailto:${BRAND_INFO?.email}`} onClick={() => handleSocialClick("Direct Email")} className="hover:text-[var(--accent-primary)] transition-colors">{BRAND_INFO?.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={20} className="text-[var(--accent-primary)]" />
                <a href={`tel:${BRAND_INFO?.phone?.replace(/\s/g, '')}`} onClick={() => handleSocialClick("Direct Call")} className="hover:text-[var(--accent-primary)] transition-colors">{BRAND_INFO?.phone}</a>
              </li>
              <li className="text-sm opacity-80">{BRAND_INFO.location}</li>
            </ul>
          </div>
        </div>

        {/* Closing Footnote */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">© {currentYear} {BRAND_INFO?.brand}. All rights reserved.</p>
          <p className="text-slate-500 italic tracking-tight">
            Building scalable systems to optimize workflows — engineering how people work, efficiently.
          </p>
        </div>
      </div>
    </footer>
  );
}