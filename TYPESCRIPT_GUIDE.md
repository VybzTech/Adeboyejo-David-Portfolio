# TypeScript Best Practices - Quick Reference

## 1. Framer Motion Component Typing

### ❌ Don't spread HTML attributes onto motion components
```tsx
interface ButtonProps extends HTMLButtonAttributes<HTMLButtonElement> {}
<motion.button {...props} />  // Type conflict!
```

### ✅ Do exclude conflicting handlers
```tsx
type MotionButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onTransitionEnd'
>;

interface ButtonProps extends MotionButtonProps {
  variant?: string;
}
```

### ✅ Or use HTMLMotionProps with explicit children
```tsx
interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
}
```

---

## 2. Animation Transitions

### ❌ Don't use string easing values
```tsx
transition: {
  duration: 4,
  ease: "easeInOut",  // ❌ Type error
}
```

### ✅ Do use proper Framer Motion transition types
```tsx
transition: {
  duration: 4,
  type: "tween" as const,  // or "spring"
}
```

---

## 3. Event Handlers

### ❌ Don't pass HTML drag handlers to motion elements
```tsx
const onDrag: DragEventHandler = (e) => {};  // Wrong signature
<motion.div onDrag={onDrag} />  // Type conflict
```

### ✅ Do use Framer Motion's drag handler signature
```tsx
const onDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {};
<motion.div onDrag={onDrag} />
```

---

## 4. Styling Props on Motion Elements

### ❌ Don't pass HTML attributes as props
```tsx
<motion.div pointerEvents="none" />  // ❌ Not a valid prop
```

### ✅ Do use the style prop
```tsx
<motion.div style={{ pointerEvents: "none" }} />
```

---

## 5. Route Handlers

### ❌ Don't leave route files without exports
```tsx
// app/api/route.ts
// (empty or only comments)  // ❌ Next.js expects an export
```

### ✅ Do export proper handler functions
```tsx
export async function POST(req: Request) {
  // Implementation
}
```

---

## 6. Pre-commit Type Checking

All commits are validated with TypeScript before acceptance:
```bash
npm run type-check  # Run locally before committing
```

If your commit fails the hook, fix errors and try again.

---

## Quick Fixes Checklist

- [ ] Components using motion: check Omit<> for conflicting handlers
- [ ] Transitions: use `type: "tween"` instead of `ease: "string"`
- [ ] Style properties: wrap in `style={{}}` prop
- [ ] API routes: ensure exports exist
- [ ] Run `npm run type-check` before pushing

---

## Common Issues Fixed

| Issue | Cause | Fix |
|-------|-------|-----|
| Motion + HTML attributes conflict | Spreading HTML props onto motion components | Use `Omit<>` to exclude drag/animation handlers |
| "ease is not assignable to Easing" | String easing values in transitions | Use `type: "tween"` or `type: "spring"` |
| MotionValue type errors | children as MotionValue in motion props | Exclude children with `Omit<>` and re-declare |
| Invalid motion props | HTML props on motion elements | Move to `style={{}}` prop |
| Route module errors | No exported handler in API route | Add `export async function POST/GET()` |

