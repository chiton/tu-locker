## Context

The Planes y Formas de Pago section uses a dark background (`bg-slate-950`), but its heading is rendered through the shared `SectionHeading` component, which currently applies dark text colors intended for light backgrounds.

This creates a contrast issue in a high-conversion section where visitors compare plan durations and payment methods.

## Goals / Non-Goals

**Goals:**

- Make the Planes section eyebrow, title, and description readable on the dark background.
- Keep the existing layout, copy, cards, plans, and payment method content unchanged.
- Prefer a reusable styling path for section headings on dark surfaces.
- Avoid new dependencies or broad visual redesign.

**Non-Goals:**

- Redesign all site sections.
- Change pricing, payment copy, or plan structure.
- Add theme switching or global dark mode.
- Replace Tailwind styling approach.

## Decisions

- Extend `SectionHeading` with a dark-surface variant or equivalent prop.
  Alternative considered: hardcode custom heading markup inside the Planes section. A variant keeps styling reusable and avoids duplication.

- Use light text colors for dark surfaces: white title, blue/cyan eyebrow, and slate/blue-tinted description.
  Alternative considered: lightening the entire Planes background. Keeping the section dark preserves its contrast with surrounding sections.

- Apply the variant only to the Planes section for this change.
  Alternative considered: updating all instances. Only the Planes section currently has the reported contrast issue.

## Risks / Trade-offs

- Variant prop could make `SectionHeading` more complex -> Mitigate by keeping the API small and defaulting to the current light-surface behavior.
- Colors might pass build but still feel visually weak -> Mitigate by choosing high-contrast Tailwind colors and reviewing the section against the dark background.
- Fix could unintentionally affect other sections -> Mitigate by preserving default styles unless the dark variant is explicitly requested.

## Migration Plan

1. Update `SectionHeading` to support a dark-surface color variant.
2. Apply the dark variant to the Planes y Formas de Pago section.
3. Verify lint, build, and visual contrast of the Planes heading.
