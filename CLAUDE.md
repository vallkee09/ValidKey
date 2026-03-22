# ValidKey — Claude Code Instructions

## Project Overview
ValidKey is a Next.js 14 (App Router) QA mentorship platform.
Stack: Next.js, TypeScript, Tailwind CSS, shadcn/ui, Lenis (smooth scroll).
Design: vibrant modern style — purple #7c3aed → pink #ec4899 gradient, bg #faf8ff.

---

## 🧪 QA SKILL — Bug Finder & UI Auditor

When I ask you to "audit", "QA", "check", "test", or "знайди баги" — activate this skill fully.

### How to run a QA audit

1. Read ALL component files in /components
2. Read app/globals.css and tailwind.config.ts
3. Go through every checklist below
4. Report findings grouped by severity: 🔴 Critical / 🟡 Warning / 🔵 Info
5. For every bug — show exact file + line and a ready fix

---

### ✅ CHECKLIST 1 — Visual Bugs

- [ ] Gradient text: does `-webkit-background-clip: text` have a fallback color?
- [ ] Are all gradient definitions unique IDs? (duplicate SVG gradient IDs break rendering)
- [ ] Do blobs/backgrounds overflow and cause horizontal scroll?
- [ ] Is `overflow: hidden` missing on the hero causing layout shift?
- [ ] Are border-radius values consistent? (pill buttons = 99px, cards = 16px, icons = 12px)
- [ ] Are box shadows consistent across similar components?
- [ ] Does the sticky navbar cover content when scrolling to anchor links? (needs scroll-margin-top)
- [ ] Are there any hardcoded colors that should use CSS variables instead?
- [ ] Do focus states exist on all interactive elements (buttons, links, inputs)?

---

### ✅ CHECKLIST 2 — Spacing & Layout

- [ ] Are section paddings consistent? (should be py-20 sm:py-24 or 60px/72px)
- [ ] Is max-width consistent across all sections? (should be max-w-6xl = 1152px)
- [ ] Are horizontal paddings consistent? (px-4 sm:px-6 lg:px-8)
- [ ] Do cards in the same grid have equal height? (use flex flex-col + flex-1 on content)
- [ ] Is there enough spacing between navbar and first section content?
- [ ] Are icon sizes consistent? (small: 16px, medium: 20px, large: 24px)
- [ ] Does the footer have enough top padding before the border?

---

### ✅ CHECKLIST 3 — Typography

- [ ] Is font-weight consistent? (body: 400, medium labels: 500, headings: 600)
- [ ] Are letter-spacing values applied correctly? (h1: -2px, h2: -1px, labels: +2px uppercase)
- [ ] Is line-height set on body text? (should be 1.6)
- [ ] Are all uppercase labels the same size? (should be 11px, tracking: 2px)
- [ ] Is text color consistent? (primary: #1a1a2e, secondary: #6b7280, muted: #9ca3af)
- [ ] Are there any text overflow issues on mobile (long words breaking layout)?

---

### ✅ CHECKLIST 4 — Responsiveness

- [ ] Does the navbar collapse correctly on mobile? (hamburger menu works)
- [ ] Do 4-column grids collapse to 2 or 1 column on mobile?
- [ ] Do 3-column course cards stack on mobile?
- [ ] Does the 2-column mentorship section stack on mobile?
- [ ] Is the hero H1 font-size smaller on mobile? (should be ~32px mobile vs 48px desktop)
- [ ] Are buttons full-width on mobile where appropriate?
- [ ] Does the news feed list items wrap correctly on small screens?
- [ ] Is there any horizontal overflow on mobile? (check with overflow-x: hidden on body)

---

### ✅ CHECKLIST 5 — Animations & Scroll

- [ ] Does Lenis initialize correctly without errors in console?
- [ ] Do IntersectionObserver animations trigger correctly on first load?
- [ ] Are animations skipped when `prefers-reduced-motion: reduce` is set?
- [ ] Do animated elements have `will-change: transform, opacity` for GPU acceleration?
- [ ] Is there a FOUC (flash of unstyled content) on page load?
- [ ] Do scroll-triggered animations replay if user scrolls back up? (should not replay)
- [ ] Is the scroll progress bar at the top working correctly?
- [ ] Do stats counters start counting only when visible in viewport?

---

### ✅ CHECKLIST 6 — Accessibility (a11y)

- [ ] Do all images have meaningful `alt` attributes?
- [ ] Do icon-only buttons have `aria-label`?
- [ ] Is color contrast ratio at least 4.5:1 for body text? (check #6b7280 on #faf8ff)
- [ ] Are interactive elements reachable via keyboard (Tab key)?
- [ ] Does the mobile menu have proper aria-expanded state?
- [ ] Are section headings in correct hierarchy? (h1 → h2 → h3, no skipping)
- [ ] Do links have visible focus rings?

---

### ✅ CHECKLIST 7 — Next.js Specific

- [ ] Are Client Components marked with "use client" where needed? (useState, useEffect, event handlers)
- [ ] Are there any unnecessary "use client" on components that could be Server Components?
- [ ] Is the metadata exported correctly from app/layout.tsx?
- [ ] Is the favicon referenced correctly in metadata?
- [ ] Are there any hydration errors? (check for mismatched server/client HTML)
- [ ] Are external fonts loaded via next/font (not @import)?
- [ ] Are images using next/image component with proper width/height?

---

### ✅ CHECKLIST 8 — Design Consistency (ValidKey Brand)

- [ ] Is the gradient always 135deg from #7c3aed to #ec4899?
- [ ] Is the logo always "Valid" (normal) + "Key" (gradient)?
- [ ] Are badge/tag styles consistent across sections?
- [ ] Is the featured course card always using border: 2px solid #c4b5fd?
- [ ] Is the footer background always #1a1a2e?
- [ ] Are all pill buttons using border-radius: 99px?
- [ ] Are card hover states defined? (translateY(-4px) + stronger shadow)

---

## 📋 Audit Report Template

When reporting findings, use this format:

```
## QA Audit Report — ValidKey
Date: [date]
Files checked: [list]

### 🔴 Critical (must fix)
1. [component.tsx:42] — Description of bug
   Fix: `code fix here`

### 🟡 Warning (should fix)
1. [component.tsx:15] — Description of issue
   Fix: `code fix here`

### 🔵 Info (nice to have)
1. [component.tsx:8] — Suggestion
   Fix: `code fix here`

### ✅ Passed checks
- [list of things that are correct]
```

---

## 🚀 Quick Commands

When I say these phrases — you know what to do:

| Command | Action |
|---|---|
| `qa full` | Run all 8 checklists on entire project |
| `qa visual` | Run only Checklist 1 + 2 + 3 |
| `qa mobile` | Run only Checklist 4 |
| `qa a11y` | Run only Checklist 6 |
| `qa brand` | Run only Checklist 8 |
| `qa [component]` | Audit specific component file only |
| `fix all warnings` | Auto-fix all 🟡 Warning findings |
| `fix all critical` | Auto-fix all 🔴 Critical findings |

---

## Design Tokens (reference)

```
Gradient:     linear-gradient(135deg, #7c3aed, #ec4899)
BG page:      #faf8ff
BG dark:      #1a1a2e
Text primary: #1a1a2e
Text second:  #6b7280
Text muted:   #9ca3af
Purple light: #ede9fe
Border card:  #f3f0ff
Border brand: #c4b5fd
Radius pill:  99px
Radius card:  16px
Radius icon:  12px
Max width:    1152px (max-w-6xl)
Section pad:  60-72px vertical, px-4 sm:px-6 lg:px-8
```
