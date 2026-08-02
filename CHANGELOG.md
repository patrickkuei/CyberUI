# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **`Pagination`** component — a cyberpunk-styled page control for list/table views with more results than fit on one page. Always controlled via `currentPage`/`onPageChange`. Defaults to `compact` ellipsis-collapsing (`siblingCount`/`boundaryCount` tunable) so large page counts collapse distant pages behind an ellipsis, keeping boundary pages and a window around the current page visible; `compact={false}` renders every page. `showPrevNext` toggles Previous/Next controls, `variant` (`primary`/`secondary`/`accent`) reuses Button/Badge's palette for the active-page highlight and hover glow, and `size` supports responsive values (new `RESPONSIVE_SIZE_MAPS.pagination` entry). Page/Previous/Next controls are native `<button>`s in normal tab order with `aria-current="page"` on the active page; `Home`/`End` jump to the first/last page from anywhere inside the control.
- **`DropdownMenu`** component — a cyberpunk-styled dropdown/context menu anchored to a trigger element, for row actions and context menus attached to a button. Reuses `TabNavigation`'s dropdown anchor+menu pattern internally (click-outside close, viewport-aware alignment, staged open/close transition). `trigger` accepts either a single React element (cloned with the required `onClick`/`aria-*` wiring) or a render prop for full control. `items` takes `{ label, icon?, onClick?, disabled?, danger? }` entries, with `danger` reusing `Button`'s destructive-action styling. Supports controlled (`open`/`onOpenChange`) or uncontrolled usage, `align` (`start`/`end`, auto-flips on overflow), and a responsive `size` (new `RESPONSIVE_SIZE_MAPS.dropdownMenu` entry). Full keyboard support: `ArrowDown`/`ArrowUp` on the trigger opens the menu focused on the first/last item; inside the menu, `ArrowDown`/`ArrowUp` move focus via roving tabindex (wrapping, skipping disabled items), `Home`/`End` jump to the first/last item, `Enter`/`Space` activates the focused item, and `Escape` closes the menu and returns focus to the trigger.

## [2.5.0] - 2026-07-23

### Added

- **`Accordion`** component — a collapsible section list for FAQs, settings panels, and grouped content. `items` takes `{ id?, title, content, disabled? }` pairs; `mode` controls whether `single` (default, opening one panel closes any other) or `multiple` panels can be open at once, with `defaultOpenIds`/`openIds`/`onOpenIdsChange` for uncontrolled or controlled usage. Keyboard support follows the WAI-ARIA accordion pattern: `ArrowDown`/`ArrowUp` move focus between headers (wrapping, and skipping disabled items), `Home`/`End` jump to the first/last header, `Enter`/`Space` toggle natively via the underlying `<button>`. Each header wires `aria-expanded`/`aria-controls`, and each panel gets `role="region"`/`aria-labelledby`/`aria-hidden`, plus `inert` while collapsed so focusable panel content can't be tabbed into while hidden. Height transitions use a pure-CSS `grid-template-rows` 0fr/1fr trick (no JS measuring, no new dependency). Expanded panels get an accent neon border/glow and the trailing chevron rotates 180°, matching the existing token system.
- **`Tooltip`** component — a neon-bordered popover that reveals supplemental info on hover or keyboard focus. Supports `placement` (`top`/`bottom`/`left`/`right`, responsive), `variant` (`primary`/`secondary`/`accent`, reusing Button/Card's palette), `size`, a configurable show `delay`, `disabled`, and controlled (`open`/`onOpenChange`) or uncontrolled usage. Wires `aria-describedby` onto the trigger and dismisses on Escape.
- **`FormField`** component — a generic label/helper-text/error/success wrapper for any form control, for wrapping native elements (`<textarea>`, a raw `<input>`) or custom/third-party controls that don't manage their own label wiring the way `Input`/`Select` already do. Clones its single child to inject `id`, `disabled`, `aria-invalid`, `aria-required`, and a merged `aria-describedby`; adds a `success` validation state (green, via the existing `--color-success` token) alongside `error`, which `Input`/`Select` don't have. Supports `required` (adds a `*` indicator + `aria-required`), `disabled`, and a responsive `size` controlling label/message text size.
- **`Avatar`** component — a circular profile image for user avatars, comment threads, and team rosters. Accepts `src`/`alt`, falling back to glitch-style initials (derived from `alt`, or overridden via `initials`) when there's no image or it fails to load, and to a generic operative icon (or a custom `fallbackIcon`) when no initials can be derived. Supports a glowing `status` dot (`online`/`offline`/`away`) on the bottom-right edge and a responsive `size` (`sm`/`md`/`lg`/`xl`, new `RESPONSIVE_SIZE_MAPS.avatar` entry).
- **`RadioGroup`** component — a neon-styled radio group for mutually-exclusive single-choice selection, matching `Checkbox`'s SVG dot treatment. `options` takes `{ value, label, disabled? }` pairs; `value`/`onValueChange` (controlled) or `defaultValue` (uncontrolled) manage selection, and `name` sets the underlying native `<input type="radio">` group name (auto-generated when omitted). `orientation` (`horizontal`/`vertical`, responsive) and `size` (`sm`/`md`/`lg`, responsive) control layout. Keyboard navigation follows a roving-tabindex pattern: `ArrowDown`/`ArrowRight` and `ArrowUp`/`ArrowLeft` move focus *and* selection between enabled options, wrapping at the ends and skipping disabled ones; only the selected (or first enabled) option is a Tab stop.

## [2.4.0] - 2026-07-10

### Added

- **`.github/workflows/ci.yml`** — the repo's first PR-gating CI. `validate` job mirrors the already-documented `npm run lint && npm run type-check && npm test -- --project=unit` gate from `CLAUDE.md`; `bundle-size` job (needs: `validate`) builds the library and runs the new `npm run size` check. Triggers on `pull_request` and `push: master` — the push trigger matters because `master` has zero required status checks today (confirmed via `gh api .../branches/master/protection` → 404), so it's the only thing validating a direct push.
- **Bundle-size regression guard** (`size-limit` + `@size-limit/esbuild` + `@size-limit/file`, `npm run size`) — three checks: a single-component import (`{ Button }` from `dist/index.es.js`, guards specifically against a tree-shaking regression), the full library, and the CSS stylesheet. Thresholds set with ~40% headroom over measured gzip sizes.
- **`engines` field in `package.json`** (`"node": ">=20"`) — matches the Node version both CI workflows already pinned; permissive lower bound since nothing in the build actually requires an upper bound.
- **Runtime dev warnings for silent-wrong states that TypeScript can't catch** — `Steps` now warns (once per distinct case) when `current` is out of range, calling out the classic 1-based-indexing mistake specifically when `current === items.length`; `LinearProgress` and `CircularProgress` now warn when `progress` is outside 0-100, since both previously rendered visibly broken output (an overflowing bar / skewed arc) with no signal why. Shares a new `warnOnce` helper (`src/utils/devWarn.ts`) with the existing styles.css-missing check in `src/index.ts`, deduped by a stable key so a misconfigured component re-rendering doesn't spam the console.
- **`public/component-manifest.json`** — a generated single source of truth for the library's component/hook/context inventory, extracted from TypeScript prop types + JSDoc via `react-docgen-typescript`. `npm run docs:generate` (new script, `scripts/generate-manifest.js`) regenerates it plus the component table/list block inside `CLAUDE.md`, `AGENT.md`, `README.md`, `public/llms.txt`, and `bin/usage-content.js` — the five places that previously had to be hand-synced and had already drifted (see Fixed, below). Hand-written prose in those files is untouched; only the marked block is replaced, using the same `<!-- cyberui-2045:...:start/end -->` pattern `bin/init.js` already used for consumer-file injection (factored into a shared `bin/markers.js` helper). `SegmentedProgress`'s discriminated-union props need a hand-written override in the script (`react-docgen-typescript` flattens/garbles discriminated unions); hooks are hand-authored too, since they aren't components with a props interface. Wired into `/new-component` (Step 6) and `/release` (Step 2) so new components and every release regenerate these docs automatically instead of by hand.
- **`npx cyberui-2045 init --agents`** — new target writing the usage guide to `AGENTS.md`, the open cross-tool standard (read by Codex, Windsurf, Amp, and others). `--all` now covers four targets instead of three.
- **`dist/component-manifest.json` shipped in the npm package** — added to `package.json`'s `"files"`, so it lands in `node_modules/cyberui-2045/dist/component-manifest.json` on install, not just on the docs site.

### Fixed

- **Tree-shaking was completely broken** — confirmed empirically (a synthetic bundle importing only `Button` pulled in all 21 components, 86.65 KB minified instead of a few KB) before assuming any bundle work was needed. Root cause: `src/index.ts`'s styles.css-missing check runs unconditionally at module top level, and since `package.json`'s `sideEffects` array only excludes `*.css` (not `dist/index.es.js` itself), any bundler doing conservative tree-shaking had to treat the *entire* single merged output file as side-effecting, and couldn't safely drop the other 20 unused components bundled alongside it. Fixed by adding `rollupOptions.output.preserveModules: true` for the ES build in `vite.config.ts` (UMD is unaffected — it can't be split, since it must stay one self-contained file for direct `<script>` usage) — Rollup now emits one file per source module (`dist/components/Button.js`, etc., mirroring the existing `dist/components/*.d.ts` structure) instead of one merged blob, so the side-effecting check no longer poisons the other components' tree-shakeability. Re-verified after the fix: same synthetic Button-only bundle dropped to 30.49 KB (or 10.15 KB gzip, per the new size-limit check) with zero other component code present. `dist/index.es.js` itself is now a ~2.9 KB re-export barrel instead of a 196 KB merged bundle.
- **`deploy-demo.yml`/`storybook.yml` package manager mismatch** — both ran `yarn install` despite the repo's lockfile being `package-lock.json` (npm), with no `yarn.lock` anywhere. Since there's no yarn.lock, `yarn install` silently ignored the lockfile and resolved its own dependency graph from `package.json`'s semver ranges — meaning production/Storybook deploys were not built from the exact versions the repo has locked. Both now use `npm ci`.
- **Component table ordering drift** — `CLAUDE.md`/`AGENT.md` listed the Feedback category as `Notification, Badge, Skeleton` while `README.md`/`public/llms.txt`/`bin/usage-content.js` listed `Badge, Notification, Skeleton` — a second drift found while building the generator above, on top of the `llms.txt` one already fixed. All 5 files now derive their order from `src/components/index.ts`'s export order, so this can't recur.
- **`public/llms.txt`** — "Key Components" list hadn't been updated since the file was first added and only named 5 of the library's 21 components. Now lists all components by category plus hooks/context, matching `AGENT.md` and `README.md`.
- **`package-lock.json` drift** — the lockfile's own version field had been stuck at `1.4.0` since 2026-04-07; every release since only bumped `package.json`, so the lockfile silently drifted for 4 releases and would re-sync (with a noisy diff) on every fresh clone + install. Re-synced to `2.3.1` and added `npm install` + a lockfile diff check to the `/release` checklist so it can't drift again.
- **`ModalProps` JSDoc gap** — 15 props (`title`, `children`, `footer`, `onCancel`, `onConfirm`, `cancelText`, `confirmText`, `confirmLoading`, `showCancel`, `showConfirm`, `closeOnOverlayClick`, `closeOnEscape`, `animation`, `className`, `overlayClassName`, `showCloseButton`) had no per-prop documentation, unlike every other component's props interface. Added JSDoc with `@default` tags matching the component's actual defaults, so editor hover/autocomplete and the generated `.d.ts` now describe them.
- **Stale version fallbacks** — `bin/init.js`'s fallback version (used only if `package.json` can't be read) and `bin/usage-content.js`'s default parameter were still `1.3.2` and `2.2.0` respectively, several releases behind. Bumped both to `2.3.1` and added them to the `/release` checklist so future bumps don't miss them.

### Changed

- **`bin/usage-content.js`'s Component Reference table now points at local `.d.ts` files instead of production Storybook URLs.** Storybook's docs pages are a client-side-rendered SPA, so a raw fetch mostly returns an empty HTML shell — low value for an agent, and many coding agents lack web access at all anyway. Since the package already ships per-component type declarations separately (`dist/components/<Name>.d.ts`, confirmed by inspecting the actual build output), each row now points there instead — local, reliable, and scoped to just that component. README.md keeps its Storybook links, since those serve human readers browsing docs, not agents.
- **Generator now escapes backticks when writing into `bin/usage-content.js`** — its content sits inside a JS template literal, so a literal backtick in generated content (e.g. `` `dist/components/Button.d.ts` ``) would otherwise break out of the string. Fixed generally in `updateDocFile()` rather than per-caller, so future generated content with backticks can't reintroduce this.
- **Trimmed the injected "Critical API notes" section** in `bin/usage-content.js` (and therefore in every `CLAUDE.md`/`.cursorrules`/`copilot-instructions.md`/`AGENTS.md` this gets written into) from ~90 lines of per-component gotchas down to ~10. That content — every one of the per-component notes — turned out to already be verbatim-duplicated in each component's own JSDoc, which ships in `dist/index.d.ts` and reaches a TypeScript-aware agent for free via hover, independent of whether the mistake would also trigger a compile error. Kept only the facts that don't belong to any single component's own types (the `Button`/`Badge` variant-set mix-up) plus a pointer to the newly-shipped `component-manifest.json`. This block gets loaded into context on every session that reads the injected config file, whether or not that session touches CyberUI at all, so cutting redundant content there is a direct, recurring token savings for every consumer.

## [2.3.1] - 2026-05-19

### Fixed

- **`displayName` on all components** — added `ComponentName.displayName = "CyberUI.ComponentName"` to 19 components that were missing it (`Badge`, `Button`, `Card`, `Carousel`, `Checkbox`, `CircularProgress`, `Divider`, `GradientText`, `Input`, `LinearProgress`, `Notification`, `SectionTitle`, `SegmentedProgress`, `Select`, `Skeleton`, `Steps`, `TabNavigation`, `Timeline`, `Toggle`). Only `Modal` and `Image` had it set previously. React DevTools now shows clean `CyberUI.*` labels for every component.

## [2.3.0] - 2026-04-08

### Added

- **`SegmentedProgress` `variant="block"`** — linear discrete-block bar (▮▮▮▯▯) as an alternative to the existing radial gauge. New `segments` prop (default 10) controls the number of blocks. `variant="radial"` remains the default; all existing usage is unchanged. Props typed via discriminated union so `children` is radial-only and `segments` is block-only.

### Fixed

- **Badge font size** — variant classes were hardcoding `text-base` on every variant, overriding the `size` prop's text sizing. Removed the hardcoded value; `sm` → `text-xs`, `md` → `text-sm`, `lg` → `text-base` now work correctly.
- **Card content text color** — card wrapper had no text color set, leaving children text invisible on dark backgrounds. Added `text-primary` to all three variants (`default`, `accent`, `small`).
- **Button hover scale** — `hover:scale-105` caused buttons to visually expand on hover, which looks jarring in tight layouts. Replaced with `hover:brightness-110` on primary; removed scale on secondary/danger/ghost. `active:scale-95` (press-down feel) kept on all enabled variants.

### Changed

- **`SegmentedProgress` stories** — rewritten to use the `size` prop (previously used raw `className` for sizing) and to cover both `radial` and `block` variants with full size/segment matrices and an `AllVariants` render story.
- **`Modal` JSDoc** — `ModalAnimationConfig` and `ModalCallbacks` now include clear descriptions and inline usage examples explaining that callbacks are flat props while animation config is a nested `animation={}` object.

### Docs

- **`AGENT.md`** — added missing `LinearProgress` and `SegmentedProgress` rows to the component table; fixed `Badge` variants (were listed as `default/success/warning/danger`, now correctly `primary/secondary/accent/success/error/warning`); documented `SegmentedProgress` block variant.
- **`bin/usage-content.js`** — updated `SegmentedProgress` API note to document both `radial` and `block` variants.
- **`CLAUDE.md`** — bumped component inventory to v2.2.0; added rules: update stories/tests when modifying a component, and update `AGENT.md` + `bin/usage-content.js` when changing public API.

## [2.2.0] - 2026-04-07

### Added

- **`useAnimatedProgress` exported** — was missing from the public API. `useAnimatedProgress({ min?, max?, speed? })` returns an oscillating number useful for pulse/loading animations.
- **Select `onValueChange` prop** — convenience callback `(value: string) => void` matching the Toggle/Checkbox pattern. Standard `onChange` (raw event) still works for backwards compatibility.

### Fixed

- **`bin/usage-content.js` rewritten** — all component APIs now accurate: correct prop names (`progress` not `value` for progress components, `children` not `label` for Badge, `string[]` for TabNavigation tabs), correct Button variants (no `accent`), correct `useCyberNotifications` API (`showNotification(type, title, msg)`), correct `useAnimatedProgress` signature.
- **`dist/index.d.ts` JSDoc** — hook API descriptions corrected.

## [2.1.1] - 2026-04-07

### Added

- **Usage guide in `dist/index.d.ts`** — JSDoc on the `version` export is emitted into the published type declarations. AI agents read this when introspecting types, surfacing the correct import pattern, full component list, and `npx cyberui-2045 init` prompt automatically — no README required.

### Changed

- **npm description** updated to "The AI-first cyberpunk React UI library — built-in coding assistant context for Claude, Cursor, and Copilot out of the box."
- **npm keywords** expanded with `ai-friendly`, `claude`, `cursor`, `copilot`, `design-system`, `component-library`.

## [2.1.0] - 2026-04-07

### Added

- **Checkbox `onCheckedChange` prop** — convenience callback `(checked: boolean) => void` that mirrors Toggle's `onChange` API. The existing `onChange` (raw React event) is kept for backwards compatibility; `onCheckedChange` is now the recommended way to handle controlled checkboxes.
- **Card HTML attributes passthrough** — `CardProps` now extends `React.HTMLAttributes<HTMLDivElement>`, so `onClick`, `onMouseEnter`, `data-*`, `aria-*`, and all other div attributes are fully typed and forwarded.
- **Modal `variant="danger"`** — red pulsing glow border, red title text, red dividers, and a danger-styled confirm button for destructive confirmation dialogs.

## [2.0.4] - 2026-04-07

### Added

- **postinstall tip** — after `npm install`, prints a two-line message pointing to `npx cyberui-2045 init` and the docs. Only shown in interactive terminals (TTY), silent in CI. Ensures both humans and AI agents discover the init command at the right moment.

## [2.0.3] - 2026-04-07

### Fixed

- **CLI bin warning** — removed `./` prefix from bin path (`"./bin/init.js"` → `"bin/init.js"`). npm normalizes the prefix away and emits a cosmetic "was invalid and removed" warning; the CLI worked in 2.0.x but the warning was misleading. Now publishes cleanly with zero warnings.

## [2.0.2] - 2026-04-07

### Fixed

- **CLI bin registration** — switched bin field to string format (`"bin": "./bin/init.js"`) to avoid npm normalizer stripping the `./` prefix and silently removing the entry. `npx cyberui-2045 init` now works correctly.

## [2.0.1] - 2026-04-07

### Fixed

- **CLI bin path** — corrected `bin/init.js` to `./bin/init.js` so `npx cyberui-2045 init` resolves correctly after install

## [2.0.0] - 2026-04-07

### Breaking Changes

- **Runtime dependencies added** — `clsx` and `tailwind-merge` are now required runtime dependencies (previously zero-dep). Run `npm install` to pick them up automatically.
- **CSS layer isolation** — All CyberUI styles are now wrapped in `@layer cyberui`. If you had unlayered overrides targeting CyberUI internals, they will continue to win (this is the intended behaviour), but `!important` workarounds may no longer be needed.
- **Internal demo tab exports removed** — `HomeTab`, `InteractiveTab`, `ElementsTab`, and `FeedbackTab` are no longer exported from the package. These were never part of the public API.

### Added

- **`npx cyberui-2045 init` CLI** — zero-install setup for AI coding assistants. Writes a concise CyberUI usage guide into `CLAUDE.md`, `.cursorrules`, or `.github/copilot-instructions.md`. Supports `--claude`, `--cursor`, `--copilot`, `--all`, and `--dry-run` flags. Idempotent — safe to re-run after upgrades.
- **`cn()` utility exported** — `import { cn } from 'cyberui-2045'` gives consumers the same clsx + tailwind-merge helper used internally.

### Changed

- **All 21 components** now use `cn()` internally for className composition — `className` prop overrides are resolved consistently via tailwind-merge (last class wins on conflict).
- **Animation keyframes** — hardcoded RGB values replaced with CSS token references (`var(--color-primary)` etc.), so custom token overrides now also affect animations.

## [1.4.0] - 2025-12-05

### Added

- **Checkbox Component** - Cyberpunk-styled checkbox with neon glow effects, responsive sizing (sm/md/lg), and custom SVG icons
- **Divider Component** - Flexible divider with gradient, solid, and dashed variants
- **GradientText Component** - Text component with primary, secondary, and accent gradient options
- **SectionTitle Component** - Standardized section title with decorative gradient line and responsive sizing
- **Steps Component** - Multi-step progress indicator with responsive layout (vertical/horizontal), animated underlines, and triangle indicators
- **Timeline Component** - Vertical event timeline with status indicators and responsive sizing

### Enhanced

- **Button Component** - Refined focus ring to be thinner and semi-transparent for better accessibility
- **Modal Component** - Improved footer layout to prevent "ESC to abort" text overlap on mobile devices
- **Demo Application** - Reorganized demo tabs into a dedicated `src/demo` directory for better structure

## [1.3.3] - 2025-12-04

### Added

- **AGENT.md** - Comprehensive guide for AI coding agents included in the NPM package
- **llms.txt** - Discoverability manifest for AI search engines

### Enhanced

- **Documentation** - Added rich JSDoc examples (`@example`) to core components and precise params/returns to hooks for better AI context

## [1.3.2] - 2025-09-16

### Fixed

- Restored missing CSS and full type declarations (1.3.1 packaging issue)

### Changed

- Simplified Storybook title handling

### Internal

- Added sourcemaps
- Clarified React peer dependency configuration
- Excluded story/test declaration files from published package

## [1.3.1] - 2025-09-12

### Added

- **TabNavigation Component** - Responsive design (RWD) support with dropdown mode for mobile

### Enhanced

- **useCyberScrollbar Hook** - Improved performance and event handling
- **TabNavigation Component** - More flexible API accepting custom tab names

### Fixed

- **TabNavigation Component** - Type restrictions for real-world usage
- **Storybook** - Documentation display issues for TabNavigation

### Deprecated

- **Tab Type Export** - Use custom string arrays instead. Will be removed in v2.0.0.

## [1.3.0] - 2025-08-16

### Added

- **Modal Component** - Cyberpunk-themed modal with CRT power-on animation and RGB borders
- **Notification System** - Complete provider/hook pattern with `CyberNotificationProvider` and `useCyberNotifications`
- **useCyberScrollbar Hook** - Velocity-responsive cyberpunk scrollbar with direction-aware arrows
- **Arrow Component** - Directional indicators for carousel navigation

### Enhanced

- **InteractiveTab** - 6 interactive cyberpunk modals with rich content and notification integration
- **Image Component** - Portal rendering for true fullscreen preview mode
- **Carousel Component** - Improved objectFit implementation with arrow indicators
- **Demo Application** - Integrated cyberpunk scrollbar throughout
- **Documentation** - Complete Storybook API reference for notification system

### Fixed

- **Image Component** - Resolved ESC key freeze issue in preview mode

## [1.2.0] - 2025-08-12

### Added

- **Image Component**: Click-to-expand preview with cyberpunk effects

  - Full-screen preview mode with animated overlay
  - Fallback image support for error handling
  - Loading states with customizable placeholders
  - Cyberpunk visual effects (grid background, scanning lines, corner brackets)
  - Responsive sizing (sm, md, lg) with clear size differentiation
  - Accessibility features (ARIA attributes, keyboard navigation)
  - Lazy loading and eager loading options
  - Smooth animations and transitions
  - Perfect Storybook integration with contained preview mode

- **Skeleton Component**: Loading placeholder component

  - Multiple variants (text, circular, rectangular, button)
  - Customizable dimensions and animation
  - Responsive sizing support
  - Cyberpunk-themed styling with gradient animations

- **Select Component**: Dropdown select component

  - Multiple variants (primary, secondary, danger)
  - Form integration with labels and validation states
  - Responsive design with proper focus states
  - Accessible with keyboard navigation

- **Toggle Component**: Switch/toggle component

  - Multiple variants with cyberpunk styling
  - Form integration and controlled/uncontrolled modes
  - Accessible with proper ARIA attributes
  - Smooth animations and hover effects

- **LinearProgress Component**: Progress bar component
  - Determinate and indeterminate modes
  - Customizable colors and sizing
  - Smooth animations and cyberpunk styling
  - Responsive design

### Documentation

- **Design Tokens Documentation**: Comprehensive design system guide in Storybook
  - Color palette documentation
  - Typography system
  - Spacing and sizing guidelines
  - Component design patterns

### Enhanced

- **ElementsTab**: Updated showcase with new components

  - Added Image Gallery section with demo images
  - Enhanced form controls section with Select and Toggle
  - Improved layout and organization

- **Responsive Utilities**: Extended responsive system
  - Added new size mappings for components
  - Enhanced responsive value support

### Infrastructure

- Added demo images for Image component showcase
- Updated roadmap with development progress
- Enhanced Storybook configuration for better component testing
- Improved build system and type definitions

## [1.1.0] - 2025-08-11

### Added

- **Card Component**: Container component with cyberpunk styling
- **Badge Component**: Status indicator with multiple variants
- **Input Component**: Form input with validation states

## [1.0.0] - 2025-08-05

### Added

- Initial release of CyberUI 2045
- **Button Component**: 4 variants (primary, secondary, danger, ghost), 3 sizes, enhanced disabled states
- **CircularProgress Component**: Customizable progress indicator with neon styling
- **SegmentedProgress Component**: Multi-segment progress bar
- **Notification Component**: Toast-style notifications with different types
- **TabNavigation Component**: Cyberpunk-themed tab navigation
- Full TypeScript support with exported type definitions
- Comprehensive Storybook documentation
- Cyberpunk theme with neon colors and futuristic aesthetics
- Tailwind CSS integration with custom color palette
- Demo application showcasing all components
- GitHub Actions for automated Storybook deployment

### Features

- 🎨 Cyberpunk-themed UI components
- 📱 Responsive design
- ⚡ React 19 support
- 🎯 TypeScript first
- 📚 Comprehensive Storybook documentation
- 🚀 Modern build system with Vite
- 🎨 Tailwind CSS with custom theme
- ♿ Accessibility-focused design

### Technical Details

- Built with React 19 and TypeScript
- Styled with Tailwind CSS v4
- Bundled with Vite
- Type definitions included
- ESM and UMD module formats
- CSS imported separately for better tree-shaking
