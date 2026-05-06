# Adeboyejo David - Portfolio v2.0

A beautifully crafted full-stack developer portfolio built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. Features a neo-skeuomorphic dark mode design with smooth animations and interactive elements.

## 🚀 Features

- **Next.js 15 App Router** - Modern server-first architecture with TypeScript
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Neo-Skeuomorphic UI** - Physical, tactile design with depth and shadows
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Dark Mode** - Professional dark theme with cyan (#00f0ff) accent color
- **Interactive Components**:
  - Typewriter effect on hero section
  - Scroll-triggered animations
  - Project modals with details
  - Experience timeline
  - Contact form
  - Floating chat widget
- **SEO Optimized** - Proper metadata, Open Graph, and structured data
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── globals.css                # Global styles with Tailwind
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Home page
├── components/
│   ├── Navigation.tsx             # Sticky navigation with mobile menu
│   ├── Hero.tsx                   # Hero section with typewriter
│   ├── About.tsx                  # About section with skills
│   ├── Work.tsx                   # Projects showcase grid
│   ├── Experience.tsx             # Work experience timeline
│   ├── Contact.tsx                # Contact form & info
│   ├── ChatWidget.tsx             # Floating chat widget
│   └── Footer.tsx                 # Footer with links
├── public/
│   └── logo.png                   # VybzTech logo
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS config with tokens
├── postcss.config.js              # PostCSS with Tailwind plugin
└── tsconfig.json                  # TypeScript configuration
```

## 🎨 Design System

### Color Palette

- **Background**: `rgb(10, 10, 18)` - Deep navy
- **Foreground**: `rgb(240, 240, 245)` - Off-white
- **Primary**: `rgb(0, 240, 255)` - Bright cyan
- **Secondary**: `rgb(80, 100, 255)` - Deep blue
- **Accent**: `rgb(0, 240, 255)` - Cyan glow
- **Muted**: `rgb(60, 70, 100)` - Desaturated blue

### Custom Effects

- **Neumorphic Shadows**: Dual-layer shadows for depth
- **Glow Effects**: Cyan glow on interactive elements
- **Grain Overlay**: Subtle texture for tactile feel
- **Glassmorphism**: Frosted glass effects on components

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19 RC** - Latest React capabilities
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Advanced animations
- **GSAP** - Timeline animations (ready to use)

### Backend
- **Next.js API Routes** - Serverless functions
- **TypeScript** - Type safety

### DevTools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler (built into Next.js 15)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app will be available at `http://localhost:3000`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically deploys on push to main

```bash
# Or deploy via Vercel CLI
npm install -g vercel
vercel
```

### Environment Variables

No environment variables required for the current implementation. To integrate Claude AI Chat:

```bash
ANTHROPIC_API_KEY=your_key_here
```

## 📝 Customization Guide

### Update Personal Info

Edit the following components to add your information:

- **Hero**: Update name and description in `components/Hero.tsx`
- **About**: Modify skills and bio in `components/About.tsx`
- **Work**: Add your projects in `components/Work.tsx`
- **Experience**: Update work history in `components/Experience.tsx`
- **Contact**: Update email and social links in `components/Contact.tsx`

### Customize Colors

Edit design tokens in:
1. `app/globals.css` - CSS custom properties (root)
2. `tailwind.config.ts` - Tailwind color extensions

### Add New Sections

Create new components in `components/` and import them in `app/page.tsx`:

```tsx
// components/YourSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function YourSection() {
  return (
    <section id="your-id" className="py-20">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import YourSection from '@/components/YourSection';

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <YourSection />
    </main>
  );
}
```

## 🎬 Animations

All animations respect `prefers-reduced-motion` for accessibility:

- **Scroll Triggers**: Components animate when scrolled into view
- **Stagger Effects**: Child elements animate sequentially
- **Hover States**: Interactive elements respond to user interaction
- **Typewriter**: Smooth character-by-character text effect

## 📱 Responsive Breakpoints

- **Mobile**: Default styles
- **Tablet** (md): 768px
- **Desktop** (lg): 1024px
- **Large Desktop** (xl): 1280px

## 🔍 SEO

- Dynamic metadata in `app/layout.tsx`
- Open Graph support for social sharing
- Structured semantic HTML
- Mobile viewport optimization
- Theme color configuration

## 📄 License

This portfolio is open source and available for personal use.

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📞 Contact

- Email: hello@adeboyejo.dev
- GitHub: [@VybzTech](https://github.com)
- LinkedIn: [Adeboyejo David](https://linkedin.com)

---

Built with ❤️ using Next.js 15 and Tailwind CSS 4
