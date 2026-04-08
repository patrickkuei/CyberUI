# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
