# Redesign Concept

*This document outlines the visual and interaction strategy for the portfolio redesign, focusing on a premium skeuomorphic aesthetic with modern depth.*

## 🎯 Objectives
- [ ] Implement a **premium skeuomorphic** visual identity with physical depth.
- [ ] Optimize for **mobile-to-desktop** responsive flow (Mobile-First).
- [ ] Enhance **tactile interactions** (button depress, hover lift, smooth transitions).
- [ ] Standardize typography using **Clash Display** (Headings) and **Inter/Montserrat** (Body).

## 💡 Ideas & Inspiration
- **Linear.app**: Clean, efficient, high-contrast dark mode.
- **Apple.com**: Smooth transitions, premium feel, focus on white space (even in dark mode).
- **Vercel**: Minimalist, developer-focused aesthetic.

## 🎨 Proposed Color Palette & Depth
- **Background**: `#0a0e27` (Deep Space Navy)
- **Primary Accent**: `#00d9ff` (Electric Cyan)
- **Secondary Accent**: `#7c3aed` (Deep Violet)
- **Surface (Raised)**: Multi-layered shadows (top-left light, bottom-right dark) to create a "lifted" effect.
- **Surface (Recessed)**: Inner shadows to create a "pressed-in" effect for inputs and containers.
- **Glassmorphism**: High-blur background filters for overlays and floating navigation.

## 🏗️ Redesign Steps
1. **Audit**: Review current root components vs. legacy `v0` designs.
2. **Moodboard**: Finalize the visual direction.
3. **Component Refresh**: Rebuild UI components (Buttons, Cards, Inputs) with Tailwind 4.
4. **Layout Overhaul**: Ensure seamless transitions between sections.
