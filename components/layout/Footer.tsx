import Link from 'next/link';
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { NAVIGATION, BRAND, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">D</span>
              </div>
              <span className="font-display font-bold text-lg text-text-primary">
                {BRAND.shortName}
              </span>
            </Link>
            <p className="text-text-muted text-sm">
              {BRAND.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Navigation</h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-accent-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg text-text-muted hover:text-accent-primary hover:bg-surface transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubLogo size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg text-text-muted hover:text-accent-primary hover:bg-surface transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg text-text-muted hover:text-accent-primary hover:bg-surface transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterLogo size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-text-muted">
              <a
                href={SOCIAL_LINKS.email}
                className="hover:text-accent-primary transition-colors block"
              >
                {BRAND.email}
              </a>
              <p>{BRAND.location}</p>
              <p>{BRAND.timezone}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p>Made with care by a product engineer.</p>
        </div>
      </div>
    </footer>
  );
}
