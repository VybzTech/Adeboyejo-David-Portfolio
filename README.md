# David Adeboyejo - Product Engineer Portfolio

A premium, production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for high performance (Lighthouse 95+), SEO optimization, and premium user experience.

## Overview

This is a full-stack portfolio showcasing work as a Product Engineer specializing in full-stack development, SaaS products, and modern web technologies. The site features:

- **Premium dark mode aesthetic** with cyan/violet accents (Apple × Linear × SaaS style)
- **Tactile soft-UI** with hover lift effects, button depress states, and smooth transitions
- **Optimized performance** with Lighthouse 95+ target, server components, and dynamic imports
- **SEO-first architecture** with metadata per page, JSON-LD schema, dynamic sitemap, and RSS feed
- **Accessible design** with WCAG AAA contrast, keyboard navigation, skip links, and semantic HTML
- **Full-stack capabilities** including form validation, email delivery (Resend), and API routes

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Animations**: Framer Motion for scroll reveals and interactive states
- **Forms**: React Hook Form + Zod for validation
- **Email**: Resend for contact form delivery
- **Icons**: Phosphor Icons (primary) + React Icons (fallback)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ with pnpm (or npm/yarn)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/VybzTech/Adeboyejo-David-Portfolio.git
cd Adeboyejo-David-Portfolio

# Install dependencies
pnpm install

# Set up environment variables (see .env.example)
cp .env.example .env.local
# Edit .env.local with your actual values
```

### Development

```bash
# Start dev server (runs on http://localhost:3000)
pnpm dev

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Format code
pnpm format
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Deploy to Vercel
# Push to GitHub and Vercel will auto-deploy, or use:
# vercel deploy --prod
```

## Project Structure

```
/app
  /api                    # API routes
    /contact             # Contact form endpoint
  /case-studies          # Case studies pages
    /[slug]             # Dynamic case study detail
  /about                 # About page
  page.tsx              # Home page
  layout.tsx            # Root layout with fonts
  globals.css           # Global styles & design tokens

/components
  /layout               # Layout components (Navbar, Footer)
  /sections             # Page sections (Hero, WhatIDo, etc.)
  /cards                # Reusable card components
  /ui                   # Basic UI components (Button, Input, etc.)
  /common               # Common utilities (ScrollReveal)

/lib
  /constants.ts         # Brand info, nav, projects, skills
  /animation.ts         # Framer Motion variants
  /metadata.ts          # SEO metadata helpers
  /zod-schemas.ts       # Form validation schemas

/public
  /og-image.png         # OpenGraph image
  /case-studies/        # Project screenshots
  /resume.pdf          # Resume download
  /robots.txt          # SEO robots directive
```

## Key Features

### Performance
- Server Components by default (reduced client JS)
- Dynamic imports for heavy components
- next/image with AVIF/WebP conversion
- Lazy loading for below-fold sections
- Target: Lighthouse 95+ on all metrics

### SEO
- Per-page metadata with OpenGraph
- JSON-LD schema (Person, WebSite, Breadcrumb)
- Dynamic sitemap.xml
- RSS feed endpoint
- Canonical tags
- Semantic HTML

### Accessibility
- WCAG AAA color contrast (cyan on navy = 15:1)
- Keyboard navigation with visible focus states
- Skip-to-main-content link
- Screen reader friendly (sr-only utilities)
- Semantic heading hierarchy
- Form labels and ARIA attributes
- Reduced motion support

### Animations
- Scroll reveals: fade-up with stagger (0.1s between items)
- Button press: scale 0.98 with shadow reduction
- Card hover: lift (transform y-8px) with shadow growth
- All animations GPU-safe and respect prefers-reduced-motion

## Forms & Validation

The contact form includes:
- Client validation with React Hook Form + Zod
- Server-side validation
- Honeypot field for bot protection
- Rate limiting (5 submissions per IP per hour)
- Email delivery via Resend
- Success/error feedback

## Environment Variables

Create `.env.local`:

```env
# Email service (Resend)
NEXT_PUBLIC_RESEND_API_KEY=your_api_key_here

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id_here
```

## Customization

### Colors
Edit `tailwind.config.ts` and `app/globals.css` to change the color palette:
- `--background: #0a0e27` (deep navy)
- `--accent-primary: #00d9ff` (cyan)
- `--accent-secondary: #7c3aed` (violet)

### Content
Update content in:
- `/lib/constants.ts` for brand, skills, projects, experience
- `/components/sections/` for section content
- `/app/*/page.tsx` for page copy

### Fonts
Configure in `/app/layout.tsx`:
- Headlines: Clash Display or Space Grotesk
- Body: Inter or Montserrat

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Add environment variables
4. Deploy (auto on push to main)

### Other Platforms

The project is compatible with any Node.js 18+ host. Build output is in `.next/` after running `pnpm build`.

## Performance Metrics

Target metrics:
- **Lighthouse**: 95+ across all categories
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Bundle Size**: <200KB JS gzipped
- **First Contentful Paint**: <1.5s

## SEO Target Keywords

- David Adeboyejo
- Product Engineer
- Full Stack Developer Nigeria
- React Developer Nigeria
- Next.js Developer
- Frontend Engineer Africa
- Node.js Engineer
- SaaS Developer
- Portfolio Developer Lagos

## Future Enhancements (Phase 5+)

- [ ] Blog with Sanity CMS
- [ ] Testimonials section
- [ ] Advanced analytics with PostHog
- [ ] Chat widget for support
- [ ] 3D hero scene with React Three Fiber
- [ ] Dark/light theme toggle
- [ ] Localization (i18n)
- [ ] Advanced email campaigns with Loops

## Contributing

Contributions welcome! Please follow the code style and run linting before submitting PRs.

```bash
pnpm lint --fix
pnpm format
pnpm type-check
```

## License

MIT - feel free to use this as a template for your own portfolio.

## Support

For issues, questions, or feedback:
- Email: david@example.com
- LinkedIn: [David Adeboyejo](https://linkedin.com/in/davidadeboyejo)
- GitHub: [VybzTech](https://github.com/vybztech)

---

Built with care for high performance, accessibility, and premium user experience.
