## Context

The repository currently contains OpenSpec configuration and package metadata, but no application source code. The project guidelines require a spec-driven workflow and modern Next.js practices: App Router, TypeScript, Server Components by default, minimal Client Components, and Tailwind CSS when available.

The change introduces a complete Spanish marketing website for tu-locker, a self-storage and guardamuebles business located at Montevideo 1450, Bahia Blanca, Buenos Aires, Argentina. The target domain is `tu-locker.com.ar`. The primary stakeholders are prospective customers who need storage for personal belongings, furniture, moving, or commercial use, and the business team receiving inquiries through WhatsApp, phone, email, and contact form entry points.

## Goals / Non-Goals

**Goals:**

- Build a deploy-ready marketing website in Spanish for `tu-locker.com.ar`.
- Use Next.js App Router with TypeScript and Tailwind CSS.
- Keep most UI as Server Components to avoid unnecessary client-side JavaScript.
- Provide strong conversion paths to WhatsApp `+54 291 4239860` and email `contacto@tu-locker.com.ar`.
- Include all required business sections, responsive layout, SEO metadata, illustrative storage imagery, icons, and trust-building content.
- Keep the code organized into reusable components and shared content data.
- Use a modern, clean, professional visual language based on blue, gray, and white tones associated with security and trust.

**Non-Goals:**

- Implement user accounts, reservations, online payments, or inventory management.
- Persist contact form submissions in a database.
- Add third-party analytics, CMS, or paid map APIs.
- Create multiple pages unless required by implementation; a single-page landing with anchored navigation is sufficient for the first version.

## Decisions

- Use Next.js App Router as the application foundation.
  Alternative considered: plain HTML/CSS/JavaScript. Next.js better matches repository guidance, gives built-in metadata support, and keeps the project scalable for future pages or route handlers.

- Use a single landing page with anchor navigation.
  Alternative considered: separate pages for each section. A single landing page reduces routing overhead and is more appropriate for a local service business focused on quick conversion.

- Structure the page as visually differentiated sections with reusable cards and section headings.
  Alternative considered: one large page component with inline markup. Reusable components keep the code cleaner and support future expansion while preserving a simple information architecture.

- Use Tailwind CSS for styling.
  Alternative considered: CSS modules or global CSS only. Tailwind aligns with project guidance and allows consistent responsive styling without adding dependencies beyond the standard Next.js setup.

- Store repeated marketing content in typed arrays near the page or in a lightweight `lib/` module.
  Alternative considered: hardcoding every card inline. Typed data keeps the page easier to maintain while avoiding premature CMS complexity.

- Use Server Components for static sections and a small Client Component only if interactive mobile navigation or form behavior requires browser state.
  Alternative considered: making the whole page a Client Component. Server-first rendering improves performance and follows project constraints.

- Use an embedded Google Maps iframe URL for the address.
  Alternative considered: Google Maps JavaScript SDK. An iframe avoids API keys and keeps implementation simple.

- Implement the contact form as static UI for the first version.
  Alternative considered: backend route handler for email delivery. Without SMTP/provider requirements, a static form plus direct WhatsApp/email links avoids fake persistence and keeps expectations clear.

- Include gentle CSS-based motion for hover/focus and section polish rather than a JavaScript animation library.
  Alternative considered: adding an animation dependency. CSS transitions are sufficient for the requested soft animations and avoid unnecessary dependencies.

## Risks / Trade-offs

- Contact form does not send messages automatically -> Mitigate by making WhatsApp, phone, and email CTAs prominent and by keeping the form ready for a future route handler.
- Estimated prices may become outdated -> Mitigate by keeping plan and size data centralized for easy edits.
- Remote illustrative images can affect reliability -> Mitigate by using optimized `next/image` with configured remote sources or local CSS/SVG-style visual treatments if external images are not desired.
- Iconography can become inconsistent -> Mitigate by using a small internal icon pattern or simple inline SVGs instead of adding a broad icon dependency unless already present.
- Embedded map depends on Google Maps availability -> Mitigate by also displaying the written address and access instructions.
- Single-page landing can grow large -> Mitigate by splitting sections into reusable components under `components/`.

## Migration Plan

1. Initialize the Next.js project files in the repository root if missing.
2. Add TypeScript, Next.js, React, Tailwind, and required configuration.
3. Implement content and components incrementally against the `marketing-website` spec.
4. Verify with linting and production build.
5. Deploy as a standard Next.js static/server-rendered application.

Rollback is straightforward because this is a new application surface: revert the generated application files or deploy the previous version if one exists.

## Open Questions

- Final real pricing can replace estimated prices when confirmed by the business.
- Real facility photos can replace illustrative storage imagery when available.
- Contact form delivery provider can be selected later if automatic email delivery is required.
