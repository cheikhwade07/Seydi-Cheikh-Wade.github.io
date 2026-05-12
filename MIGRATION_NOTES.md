# Migration Notes

## Source Inventory

- Legacy bundle preserved at `legacy/index.html`.
- Runtime source was embedded in root `index.html` as compressed manifest entries.
- Main visual source of truth was `portfolio-heist.jsx`.
- Shared content came from `portfolio-data.jsx`: `ME`, `PROJECTS`, `SKILLS`, and the seeded contribution grid.
- Removed runtime Babel/React CDN flow and replaced it with a compiled Vite React build.

## Ported Sections

- Top bar with availability pill, primary links, hamburger drawer below 760px, and persistent theme toggle.
- Heist hero with echo wordmark, cyan Cheikh accent, italic WADE, portrait card, moon/sun mode visual, blurb, and metadata cards.
- Current-focus list from `ME.now`.
- Selected work grid with project cards, award pills, live links, repository links, and stack chips.
- Skills grid with grouped chips.
- GitHub contribution pulse card.
- CTA and footer.

## Responsive Fixes

- Hero now uses CSS Grid instead of absolute-positioned portrait magic numbers.
- Portrait stacks above the wordmark on mobile and moves right on desktop.
- Echo wordmark layers are hidden below 768px to prevent overflow.
- Name type is mobile-first and uses `overflow-wrap` to avoid horizontal scroll at 320px.
- Project and skills grids use `auto-fit` with bounded `minmax()`.
- CTA buttons stack by default and become inline above 600px.
- Touch targets are at least 44px for nav, drawer, mode toggle, and CTA controls.
- Safe-area insets are respected on the page wrapper and sticky top bar.

## Performance Changes

- Removed in-browser Babel and CDN React startup work.
- Added Vite production build with CSS splitting and a separate React vendor chunk.
- Lazy-loaded projects, skills, and GitHub sections behind the hero.
- Replaced many DOM particles with a single canvas particle layer.
- Ambient animation uses transform/opacity and is disabled for reduced motion.
- Fonts are self-hosted through `@fontsource` packages.

## Accessibility Changes

- Added skip link.
- Theme toggle exposes `aria-pressed` and descriptive labels.
- Mobile drawer exposes `aria-expanded`.
- Project titles are real links.
- Focus rings are visible and global.
- Reduced-motion media query disables ambient motion.
- Contribution grid has an accessible label.

## Remaining Verification Checklist

- Run `npm run build`.
- Run `npm run preview`.
- Check 320px, 375px, 393px, 768px, 1024px, and 1440px widths.
- Run Lighthouse mobile and capture screenshots before opening the PR.
