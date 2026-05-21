## Context

The current site uses a basic `TL` mark in the header. It is readable but generic, and it does not visually communicate the business category of self-storage or the trust/security message central to tu-locker.

This change introduces a lightweight, reusable logo treatment based on a storage-building silhouette combined with a padlock. The logo must fit the existing Next.js App Router site, Tailwind visual language, and server-first component strategy.

## Goals / Non-Goals

**Goals:**

- Replace the placeholder `TL` mark with a more distinctive storage-building + padlock identity.
- Keep the logo simple enough to work in small sizes, including favicon-style contexts.
- Use the current blue, gray, and white palette to preserve visual consistency.
- Avoid adding dependencies or external image assets.
- Apply the identity consistently in header, footer, and site icon metadata where practical.

**Non-Goals:**

- Create a complete brand book or alternate logo family.
- Redesign the full website layout or color system.
- Add paid fonts, external illustration packs, or a design-system dependency.
- Change commercial copy, plans, contact behavior, or site navigation.

## Decisions

- Implement the logo as a reusable React component with inline SVG.
  Alternative considered: image file in `public/`. Inline SVG keeps color variants easy, avoids asset management overhead, and stays crisp at any size.

- Build the mark from simple geometric shapes: pitched-roof storage silhouette, horizontal shutter lines, and a padlock/secure-door area.
  Alternative considered: detailed warehouse illustration. A simple mark is more legible in header and favicon sizes.

- Keep the wordmark text as real HTML next to the SVG instead of baking it into the SVG.
  Alternative considered: full logo as one SVG including text. Real text improves accessibility, responsiveness, and font consistency with the site.

- Provide light/dark variants through props or className rather than separate components.
  Alternative considered: duplicate header and footer logo components. A single component reduces drift.

- Use existing Tailwind colors and no icon library.
  Alternative considered: adding an icon package. The logo needs a custom mark, so a dependency would add cost without much value.

## Risks / Trade-offs

- The mark may become visually busy at favicon size -> Mitigate by keeping the favicon/icon version focused on the simplified locker + padlock shape without relying on text.
- Inline SVG can grow hard to maintain if over-detailed -> Mitigate by using a small number of basic paths/shapes and clear component naming.
- Header/footer contrast needs differ -> Mitigate with a variant prop or CSS classes for light and dark surfaces.
- Replacing the old `TL` mark can reduce letter recognition -> Mitigate by keeping `tu-locker` wordmark adjacent to the isotipo in normal-size placements.

## Migration Plan

1. Add a reusable logo component under `components/`.
2. Replace the existing header `TL` badge with the new logo component.
3. Update footer branding to use the same identity.
4. Add or update favicon/icon metadata with a simplified SVG icon if supported by the current setup.
5. Verify contrast, responsive sizing, lint, and production build.

## Open Questions

- Whether the final favicon should include only the locker + padlock mark or a very small `TL` monogram inside the locker.
- Whether future real brand assets should replace the inline SVG if a designer provides official files.
