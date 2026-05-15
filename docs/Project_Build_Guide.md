# Project Build Guide

This guide outlines the technical architecture and development standards for the **David Adeboyejo Portfolio**.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion + GSAP + Lenis (Smooth Scroll)
- **3D**: Three.js + React Three Fiber (R3F)
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Phosphor Icons
- **State Management**: Zustand
- **Deployment**: Vercel

## 📁 Project Structure

```
/app                # Next.js App Router (Pages & API)
  /api/             # Backend endpoints (Contact form, etc.)
  /case-studies/    # Detailed project breakdowns
  /about/           # About page
  layout.tsx        # Global layout (Fonts, SEO, Providers)
  page.tsx          # Homepage
/components         # React components
  /layout/          # Navbar, Footer
  /sections/        # Hero, Projects, Skills, etc.
  /ui/              # Atomic components (Buttons, Inputs)
  /cards/           # Project/Skill cards
/lib                # Shared logic
  constants.ts      # Site-wide data and configurations
  utils.ts          # Utility functions (cn, formatting)
  animation.ts      # Framer Motion variants
/public             # Static assets (Images, Icons, Resume)
/docs               # Project documentation
/v0                 # Legacy codebase (for reference)
```

## 🛠️ Development Workflow

### Installation
```bash
npm install # or pnpm install
```

### Running Locally
```bash
npm run dev
```

### Code Standards
- **Component Pattern**: Functional components with TypeScript interfaces.
- **Styling**: Use Tailwind CSS 4. Avoid inline styles unless dynamic (via Framer Motion).
- **Icons**: Always use `@phosphor-icons/react`.
- **SEO**: Ensure every page has metadata defined in the `layout.tsx` or `page.tsx`.

## 🎨 Design Philosophy
- **Aesthetic**: Premium Dark Mode, Apple-inspired, Linear-style.
- **Color Palette**: Deep Navy background, Cyan/Violet accents.
- **Interactions**: Tactile feedback (button presses), smooth transitions, and scroll reveals.
- **Performance**: Target 95+ Lighthouse score across all categories.
