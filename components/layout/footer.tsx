import Link from "next/link";
import { BRAND_INFO } from "@/lib/data";
import { GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-background text-sm">
                DA
              </div>
              <span className="font-heading text-lg font-bold">
                {BRAND_INFO.brand}
              </span>
            </Link>
            <p className="text-text-muted max-w-sm mb-8 leading-relaxed">
              Senior Product Engineer dedicated to building premium digital experiences that blend aesthetics with extreme performance.
            </p>
            <div className="flex gap-5">
              <Link href={BRAND_INFO.github} className="text-text-muted hover:text-primary transition-colors">
                <GithubLogo size={24} />
              </Link>
              <Link href={BRAND_INFO.linkedin} className="text-text-muted hover:text-primary transition-colors">
                <LinkedinLogo size={24} />
              </Link>
              <Link href={BRAND_INFO.twitter} className="text-text-muted hover:text-primary transition-colors">
                <TwitterLogo size={24} />
              </Link>
              <Link href={BRAND_INFO.instagram} className="text-text-muted hover:text-primary transition-colors">
                <InstagramLogo size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 text-text-muted">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/case-studies#labs" className="hover:text-primary transition-colors">Labs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-text-muted">
              <li><a href={`mailto:${BRAND_INFO.email}`} className="hover:text-primary transition-colors">{BRAND_INFO.email}</a></li>
              <li><a href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{BRAND_INFO.phone}</a></li>
              <li>{BRAND_INFO.location}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>© {currentYear} {BRAND_INFO.brand}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
