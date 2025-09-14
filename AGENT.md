# AGENT.md — CyberUI

A single, vendor‑neutral guide for AI coding agents working on this repository. Adapted from AGENT.md and AGENTS.md best practices and tailored to CyberUI.

## Mission & Scope
- Build and maintain a React + TypeScript UI component library with neon cyberpunk aesthetics.
- Scope: `src/components`, `src/hooks`, `src/utils`, `src/contexts`, Storybook docs, demo wiring.
- Non‑goals: Introducing new frameworks, changing build tooling, or broad refactors unrelated to the task. Avoid breaking public APIs without explicit intent and changelog updates.

## Repo Overview
- Stack: React 19, TypeScript 5, Vite 7, Tailwind v4, Storybook 9, ESLint, Vitest (available).
- Packages/scripts: see `package.json`.
- Key paths: `src/components/*`, `src/hooks/*`, `src/utils/*`, `src/contexts/*`, `.storybook/*`, `vite.config.ts`.
- Library outputs: ESM/CJS + types in `dist/`; style export `./styles.css`.

## Commands
- Dev server: `npm run dev`
- Storybook: `npm run storybook`
- Lint: `npm run lint`
- Build (typecheck + bundle): `npm run build`
- Build library: `npm run build:lib`
- Preview build: `npm run preview`

## Coding Standards
- TypeScript: strict mode is enabled; preserve and respect current `tsconfig.*` options. Prefer precise types, avoid `any`. Do not suppress with `// @ts-ignore` or `// @ts-expect-error` unless absolutely necessary and justified.
- Style: follow existing repository style and ESLint config. Do not add a formatter or reflow files; keep diffs minimal. Match current semicolon and quote usage.
- Naming: PascalCase for components, camelCase for functions/variables. Use consistent acronym casing: `URL`, `API`, `ID`.
- React: functional components with typed props. Prefer existing export patterns (default component export + named types where used). Keep components focused; extract hooks to `src/hooks`.
- Accessibility: include ARIA attributes and keyboard/focus handling for interactive components.
- Responsiveness: use `ResponsiveValue` types and helpers from `src/utils/responsive.ts`. Ensure sensible defaults (mobile‑first) and progressive enhancement across breakpoints.
- Theming: use Tailwind v4 classes and existing CSS variables/tokens. Avoid adding external style systems.

## Component Conventions
- Location: create under `src/components/ComponentName.tsx`. Add stories: `src/components/ComponentName.stories.tsx`.
- Types: define explicit interfaces for props; provide default prop values where appropriate.
- Exports: re‑export from `src/components/index.ts` to include in the public surface.
- Stories: include basic, variants, sizes, and accessibility examples. Keep stories deterministic.
- Dependencies: do not add new runtime dependencies without approval. Prefer zero‑dep solutions.

## Testing & Quality
- Linting: run `npm run lint` after moving files or changing imports.
- Typecheck/build: run `npm run build` locally to ensure types + build succeed.
- Vitest: available for unit tests. Name tests `*.test.ts[x]` or `*.spec.ts[x]`. Keep tests small and focused; mock externalities as needed. Avoid adding new test libraries without approval.
- Storybook: treat stories as living documentation; update alongside code changes.

## Docs & Changelog
- Update README/Storybook when changing public APIs or UX.
- Keep `CHANGELOG.md` using Keep‑a‑Changelog and SemVer. Categorize under Added/Changed/Fixed/Deprecated.
- Add focused examples to `src/stories/*.mdx` when introducing new tokens or patterns.

## Git & PR Hygiene
- Branches: feature branches for changes (e.g., `feat/<topic>`, `fix/<issue>`).
- Before PR: `npm run lint` and `npm run build` (and `npm test` if tests exist) must pass.
- Commit messages: concise and descriptive. Group related changes; avoid noisy formatting‑only diffs.
- Never force‑push `main`. If needed on feature branches, prefer `--force-with-lease`.

## Agent Behavior & Tooling
- Planning: outline a short plan and update as you progress. Keep steps minimal and outcome‑oriented.
- File ops: make surgical edits; avoid sweeping refactors unless requested. Keep patches focused and small.
- Reading/searching: prefer `rg` for searching; read files in small chunks. Avoid network actions or installing packages without approval.
- Safety: do not run destructive commands. Do not change licensing or add headers. Do not introduce unrelated changes.
- Validation: when you modify code, lint and build locally. If adding tests, run them; otherwise, rely on type checks and Storybook where applicable.

## Change Playbooks
- New component:
  1) Implement in `src/components/` with typed props and accessibility.
  2) Export from `src/components/index.ts`.
  3) Add `*.stories.tsx` covering variants/sizes/responsive behavior.
  4) Validate: `npm run lint`, `npm run build`, optionally add small Vitest tests.
  5) Update README/Storybook docs if public API.

- Bug fix:
  1) Reproduce via Storybook story or minimal example.
  2) Write a focused fix; avoid breaking APIs.
  3) Add or update a test or story to prevent regression.
  4) Run lint/build; update CHANGELOG under Fixed.

- API change (minor/major):
  1) Propose shape; ensure backward compatibility when possible.
  2) Update types, stories, and docs.
  3) Add migration notes in README/CHANGELOG.

## Quick Checklist
- Aligned with existing style and exports.
- Props are fully typed; no stray `any` or suppressed errors.
- Responsive and accessible by default.
- Stories updated; docs reflect changes.
- Lint + build pass locally; tests updated/added when applicable.
- Minimal, focused diff; no unrelated changes.

— End of AGENT.md —

