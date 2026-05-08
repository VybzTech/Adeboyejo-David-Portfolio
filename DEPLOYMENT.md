# Deployment Guide

This guide covers deploying the David Adeboyejo Portfolio to production on Vercel.

## Prerequisites

- GitHub account with the repository pushed
- Vercel account (free tier works great)
- Environment variables configured
- Custom domain (optional, can use Vercel subdomain)

## Deployment Steps

### 1. Connect to Vercel

**Option A: Using Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "New Project"
4. Select your GitHub repository
5. Click "Import"

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# For production
vercel --prod
```

### 2. Configure Environment Variables

In Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add the following:
   - `RESEND_API_KEY` - Your Resend email API key
   - `NEXT_PUBLIC_SITE_URL` - Your site URL (e.g., https://davidadeboyejo.com)
   - `NEXT_PUBLIC_CONTACT_EMAIL` - Your contact email

For local development, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
# Edit with your actual values
```

### 3. Add Custom Domain (Optional)

1. In Vercel Project Settings → Domains
2. Add your custom domain (e.g., davidadeboyejo.com)
3. Follow Vercel's DNS setup instructions
4. Update DNS records at your domain registrar
5. Domain typically active within 24-48 hours

### 4. Configure Build Settings

In Vercel Project Settings:

- **Framework Preset**: Next.js (auto-detected)
- **Node.js Version**: 18.x or 20.x (recommended)
- **Build Command**: `next build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `pnpm install` (or `npm install`)

### 5. Automatic Deployments

By default, Vercel auto-deploys on:
- **Production** (main/master branch): Any push to main branch
- **Preview** (other branches): Pull requests and pushed branches

To change:
1. Project Settings → Git
2. Adjust production branch if needed
3. Enable/disable auto-deploy preview environments

## Monitoring & Analytics

### Vercel Analytics

Vercel includes built-in analytics. To view:

1. Project Dashboard → Analytics
2. Monitor Core Web Vitals
3. Check page performance metrics

### Google Search Console

1. Add site to Google Search Console
2. Verify ownership via DNS or HTML file
3. Monitor search performance
4. Check for indexing issues
5. Monitor crawl errors

### Google Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics ID
2. Add to environment variables or directly import in layout
3. Use `@vercel/analytics` for Vercel analytics

## Monitoring Performance

### Lighthouse CI

Set up automated Lighthouse testing:

```bash
# Install
npm i -g @lhci/cli@latest

# Initialize
lhci autorun

# This will check performance on each deploy
```

### Core Web Vitals

Monitor at:
- Vercel Analytics (dashboard)
- Google Search Console
- PageSpeed Insights

Target metrics:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Troubleshooting

### Build Fails

```bash
# Check build locally first
pnpm build

# Verify environment variables are set
# Check for TypeScript errors
pnpm type-check

# Check for linting errors
pnpm lint
```

### Site Not Found After Deploy

- Check that domain is properly configured in Vercel
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Clear browser cache

### Contact Form Not Working

1. Verify `RESEND_API_KEY` is set in environment variables
2. Check Resend dashboard for delivery issues
3. Test locally with `pnpm dev`
4. Check Vercel function logs in Analytics → Functions

### Performance Issues

1. Check Lighthouse score in Vercel Analytics
2. Analyze Core Web Vitals
3. Review bundle size with `pnpm build` output
4. Check for slow database queries or API calls
5. Optimize images if needed

## Rollback

To rollback to a previous deployment:

1. Project Settings → Deployments
2. Find the previous working deployment
3. Click the deployment
4. Select "Promote to Production"

## Security Checklist

- [ ] All environment variables are set (never commit `.env.local`)
- [ ] HTTPS is enabled (automatic on Vercel)
- [ ] Security headers are configured in `next.config.js`
- [ ] Contact form has honeypot protection
- [ ] Rate limiting is active on API routes
- [ ] No console logs with sensitive data in production

## Scaling

For increased traffic:

1. Vercel auto-scales with serverless functions
2. Monitor concurrency in analytics
3. Optimize database queries if using backend
4. Consider upgrading Vercel plan if needed

## Continuous Deployment Workflow

Recommended workflow:

```bash
# 1. Create feature branch
git checkout -b feature/new-section

# 2. Make changes locally
# 3. Test locally
pnpm dev

# 4. Check quality
pnpm lint
pnpm type-check
pnpm build

# 5. Commit and push
git add .
git commit -m "feat: add new section"
git push origin feature/new-section

# 6. Create pull request on GitHub
# 7. Vercel creates preview deployment
# 8. Review preview
# 9. Merge to main
# 10. Vercel auto-deploys to production
```

## Environment Variables Reference

### Required

- `RESEND_API_KEY` - Resend email service API key (from https://resend.com)

### Recommended

- `NEXT_PUBLIC_SITE_URL` - Base URL of your site (for canonical tags, sitemap)
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email (for contact form)

### Optional

- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` - Vercel analytics ID
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (if using GA)

## Support

For Vercel-specific issues:
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/help)
- [Next.js Docs](https://nextjs.org/docs)

For this project:
- Check GitHub issues
- Contact: david@example.com
