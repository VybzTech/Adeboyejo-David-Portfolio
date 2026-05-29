# Split About Page into Modular Components

## Goal Description

Refactor the large `app/about/page.tsx` component into smaller, reusable sub‑components located in the directory `components/layout/About`. This improves readability, maintainability, and allows each section to be styled and tested independently while keeping the premium UI design intact.

## User Review Required

The user should review the proposed component breakdown and confirm any additional sections they want extracted. If they have preferences for component naming or prop passing, let us know.

> [!IMPORTANT]
> Ensure the new components preserve the existing rich design (gradients, glass‑morphism, micro‑animations). No visual regression should occur.

## Open Questions

- Do you want a separate component for the **Stat pills** inside the hero, or keep them within `AboutHero`?
- Should the **Resume modal** handling stay in the page component or be moved into a dedicated `AboutResumeModal` component?
- Any other sections (e.g., Testimonials) you plan to add later that should be scaffolded now?

## Proposed Changes

---
### Components/Layout/About

#### [NEW] `AboutHero.tsx`
- Renders the hero row (copy, profile image, stat pills).
- Props: `isDark: boolean`, `onOpenResume: () => void`.
- Uses existing `ScrollReveal`, `PillIconButton`, icons, and animation.

#### [NEW] `AboutSkills.tsx`
- Renders the Skills section (category headings, skill pills with progress bars).
- Props: `isDark: boolean`.

#### [NEW] `AboutExperience.tsx`
- Renders the Experience timeline.
- Props: `isDark: boolean`.

#### [NEW] `AboutEducation.tsx`
- Renders the Education timeline.
- Props: `isDark: boolean`.

#### [NEW] `AboutCTA.tsx`
- Renders the final Call‑to‑Action card with the "Let's work together" button.
- Props: `isDark: boolean`.

#### [NEW] `AboutResumeModal.tsx` (optional)
- Wraps the existing `ResumeModal` component; keeps modal logic isolated.
- Props: `isOpen: boolean`, `onClose: () => void`.

---
### Page Update

Modify `app/about/page.tsx` to import and compose the new components:
```tsx
import { AboutHero } from "@/components/layout/About/AboutHero";
import { AboutSkills } from "@/components/layout/About/AboutSkills";
import { AboutExperience } from "@/components/layout/About/AboutExperience";
import { AboutEducation } from "@/components/layout/About/AboutEducation";
import { AboutCTA } from "@/components/layout/About/AboutCTA";
import { AboutResumeModal } from "@/components/layout/About/AboutResumeModal";
```
- Maintain state `isResumeOpen` and pass `setIsResumeOpen` to `AboutHero`.
- Render `<AboutResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />` at the bottom.

### Verification Plan

- Run `npm run dev` and visually inspect the About page for any layout shifts.
- Ensure the resume modal still works.
- Check that all dark/light theme toggles affect the new components.

## Automated Tests
- No unit tests exist yet; manual visual verification is sufficient.

## Manual Verification
- Open the About page in a browser, toggle dark/light mode, click Download Resume, and ensure the modal appears.
- Verify all sections (Hero, Skills, Experience, Education, CTA) render correctly.

---
