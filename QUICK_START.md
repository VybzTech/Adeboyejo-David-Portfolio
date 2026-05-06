# Quick Start Guide - Your Portfolio

## 🚀 Get Running in 3 Steps

### Step 1: Install & Run
```bash
cd /vercel/share/v0-project
npm install --legacy-peer-deps
npm run dev
```
Open **http://localhost:3000** in your browser.

### Step 2: Customize Your Info
Edit these files with your information:

**Hero Section** (`components/Hero.tsx`)
```tsx
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3', 'Your Role 4'];
// Line 6: Update the roles array
```

**About Section** (`components/About.tsx`)
```tsx
// Line 10-12: Update bio text
// Line 28-30: Update your skills
// Line 84-87: Update your stats
```

**Work Section** (`components/Work.tsx`)
```tsx
// Line 16-40: Update projects array with your projects
// Each project needs: title, description, tags, link, impact
```

**Experience Section** (`components/Experience.tsx`)
```tsx
// Line 16-40: Update experiences array with your jobs
// Each job needs: role, company, period, description, achievements
```

**Contact Section** (`components/Contact.tsx`)
```tsx
// Line 81-82: Update email address
// Line 88-89: Update location
// Line 95: Update availability
// Line 106-113: Update social media links
```

### Step 3: Deploy
```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel
npx vercel
```

## 🎨 Styling & Colors

All colors are CSS variables in `app/globals.css`:

```css
:root {
  --color-background: 10 10 18;        /* Deep navy */
  --color-foreground: 240 240 245;     /* Off-white */
  --color-primary: 0 240 255;          /* Cyan accent */
  --color-secondary: 80 100 255;       /* Blue */
  --color-accent: 0 240 255;           /* Cyan glow */
  --color-muted: 60 70 100;            /* Gray */
}
```

To customize:
1. Edit the RGB values in `app/globals.css` (lines 10-16)
2. Tailwind will automatically use these colors
3. No need to change anything else!

## 📱 What Each Component Does

| Component | Location | Purpose |
|-----------|----------|---------|
| Navigation | `components/Navigation.tsx` | Top menu bar |
| Hero | `components/Hero.tsx` | Big title section |
| About | `components/About.tsx` | Bio + skills |
| Work | `components/Work.tsx` | Projects showcase |
| Experience | `components/Experience.tsx` | Job history |
| Contact | `components/Contact.tsx` | Contact form |
| ChatWidget | `components/ChatWidget.tsx` | Chat bubble |
| Footer | `components/Footer.tsx` | Bottom section |

## 🔧 Common Customizations

### Change Accent Color
In `app/globals.css`, line 15:
```css
--color-primary: 0 240 255;  /* Change these numbers */
```

### Add a New Project
In `components/Work.tsx`, line 16:
```tsx
const projects: Project[] = [
  // ... existing projects
  {
    id: 7,  // New ID
    title: 'Your Project Name',
    description: 'What your project does...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    link: '#',
    impact: 'What it achieved',
  },
];
```

### Add a New Skill
In `components/About.tsx`, line 28:
```tsx
const skills = [
  { 
    category: 'My New Category', 
    items: ['Skill1', 'Skill2', 'Skill3'] 
  },
  // ... other categories
];
```

## ✅ Pre-Launch Checklist

Before sharing with the world:

- [ ] Updated your name and headline (Hero)
- [ ] Added your real bio (About)
- [ ] Added your actual projects (Work)
- [ ] Updated your work history (Experience)
- [ ] Updated your email address (Contact)
- [ ] Updated social media links (Contact & Footer)
- [ ] Changed accent color if desired
- [ ] Tested on mobile
- [ ] Tested contact form
- [ ] Built for production (`npm run build`)
- [ ] Deployed to Vercel

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install --legacy-peer-deps

# Try again
npm run dev
```

### Build Errors
```bash
# Check TypeScript
npm run build

# Look for the error message
# Usually related to missing data in components
```

### Styling Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Check if Tailwind classes are spelled correctly
- Verify globals.css is imported in layout.tsx

## 📚 File Locations Quick Reference

```
Your portfolio
├── 📁 app/
│   ├── 📄 page.tsx          👈 Main home page
│   ├── 📄 layout.tsx        👈 Metadata & root HTML
│   └── 📄 globals.css       👈 Global styles & colors
│
├── 📁 components/
│   ├── 📄 Navigation.tsx     👈 Top menu
│   ├── 📄 Hero.tsx          👈 Title section
│   ├── 📄 About.tsx         👈 Bio & skills
│   ├── 📄 Work.tsx          👈 Projects
│   ├── 📄 Experience.tsx    👈 Jobs
│   ├── 📄 Contact.tsx       👈 Contact form
│   ├── 📄 ChatWidget.tsx    👈 Chat bubble
│   └── 📄 Footer.tsx        👈 Bottom
│
├── 📁 public/
│   └── 📄 logo.png          👈 Your VybzTech logo
│
├── 📄 README.md             👈 Full documentation
├── 📄 REBUILD_SUMMARY.md    👈 Build details
└── 📄 tailwind.config.ts    👈 Theme config
```

## 🎯 Design Features Explained

### Typewriter Effect
- The hero title types out different roles automatically
- Edit roles in `components/Hero.tsx` line 6

### Hover Animations
- Cards lift up on hover (smooth `y` translation)
- Text color changes with transitions
- Shadows glow on interactive elements

### Scroll Animations
- Components fade and slide in as you scroll
- Uses `react-intersection-observer`
- Respect motion preferences automatically

### Responsive Menus
- Desktop: Full navigation bar
- Mobile: Hamburger menu appears
- Breakpoint at 768px (tailwind `md:` size)

## 💡 Pro Tips

1. **Keep content current** - Update your projects regularly
2. **Test links** - Make sure project URLs work
3. **Check mobile** - Always test on phone size
4. **Use real images** - Replace with actual project screenshots
5. **Keep it simple** - Don't overload with too many sections
6. **Monitor analytics** - Add Google Analytics after deploy

## 🎓 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🎉 You're All Set!

Your modern portfolio is ready to go. It's built with the latest technologies, looks incredible, and will impress potential clients and employers.

**Questions?** Check README.md for detailed documentation.

---

Happy coding! 🚀
