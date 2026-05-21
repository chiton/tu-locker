# AGENTS.md

## Core Principle
This project follows spec-driven development and modern Next.js best practices.
The agent must prioritize correctness, performance, and maintainability over speed.

---

## Tech Stack
- Next.js (App Router)
- React Server Components
- TypeScript
- Tailwind CSS (if present)

---

## Development Workflow
1. Always read /specs before implementing features
2. Do not implement features without a defined spec
3. Follow tasks.md when available
4. Keep changes minimal and scoped

---

## Architecture Guidelines

### Component Strategy
- Prefer **Server Components by default**
- Use **Client Components only when necessary**:
  - event handlers
  - browser APIs
  - stateful UI

### Folder Structure
- app/ → routing and layouts
- components/ → reusable UI components
- lib/ → utilities and shared logic
- services/ → business logic and API calls

---

## Data Fetching
- Use **server-side data fetching** whenever possible
- Prefer:
  - `fetch()` with caching
  - `async` Server Components
- Avoid client-side fetching unless required

---

## State Management
- Prefer **React server state**
- Use client state only for UI interactions
- Avoid global state unless necessary

---

## API & Backend
- Use Route Handlers (`app/api/...`)
- Keep business logic out of route handlers
- Delegate logic to services layer

---

## Performance Rules
- Minimize Client Components
- Avoid unnecessary re-renders
- Use dynamic imports for heavy components
- Optimize images using `next/image`

---

## Styling
- Use Tailwind CSS (if available)
- Prefer utility-first styling
- Avoid inline styles unless necessary

---

## Testing
- Write tests for critical logic
- Prefer unit tests for services
- Ensure predictable behavior

---

## Constraints
- Do not introduce unnecessary dependencies
- Do not duplicate logic
- Do not mix client/server concerns
- Do not bypass architecture layers

---

## Anti-Patterns to Avoid
- Overusing `use client`
- Fetching data inside Client Components
- Putting business logic in UI components
- Large monolithic components

---

## Behavior Rules
- If requirements are unclear, ask for clarification
- Do not invent features not defined in specs
- Prefer consistency with existing patterns