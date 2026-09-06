# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **`Pagination`** component — a cyberpunk-styled page control for list/table views with more results than fit on one page. Always controlled via `currentPage`/`onPageChange`. Defaults to `compact` ellipsis-collapsing (`siblingCount`/`boundaryCount` tunable) so large page counts collapse distant pages behind an ellipsis, keeping boundary pages and a window around the current page visible; `compact={false}` renders every page. `showPrevNext` toggles Previous/Next controls, `variant` (`primary`/`secondary`/`accent`) reuses Button/Badge's palette for the active-page highlight and hover glow, and `size` supports responsive values (new `RESPONSIVE_SIZE_MAPS.pagination` entry). Page/Previous/Next controls are native `<button>`s in normal tab order with `aria-current="page"` on the active page; `Home`/`End` jump to the first/last page from anywhere inside the control.
- **`Slider`** component — a cyberpunk-styled slider for single-value or two-thumb range selection (volume, brightness, price range), with a neon-glow track fill matching `LinearProgress`'s gradient treatment. `value`/`onValueChange` (controlled) or `defaultValue` (uncontrolled) accept either a single number (single-thumb mode) or a `[min, max]` tuple (two-thumb range mode, thumbs can't cross). Supports `min`/`max`/`step`, `variant` (`primary`/`secondary`/`accent`, reusing Button/Badge's palette), a responsive `size` (new `RESPONSIVE_SIZE_MAPS.slider` entry), `showValue`/`formatValue`, and drag-to-set via pointer events on the track or either thumb. Each thumb is a `role="slider"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` wired the same way as `LinearProgress`/`CircularProgress`. Full keyboard support: `ArrowRight`/`ArrowUp` and `ArrowLeft`/`ArrowDown` step by `step`, `PageUp`/`PageDown` step by `step * 10`, `Home`/`End` jump to `min`/`max`.
- **`Drawer`** component — a cyberpunk-styled slide-in side panel for mobile nav, filters, or detail views without a full page navigation. Shares `Modal`'s controlled `isOpen`/`onClose` pattern, overlay backdrop, Escape/overlay-click dismissal (`closeOnOverlayClick`/`closeOnEscape`), body scroll lock, and RGB/danger glow border treatment. `side` (`left`/`right`/`top`/`bottom`, default `right`) picks the edge the panel slides in from; `size` (`sm`/`md`/`lg`/`xl`/`full`) sets panel width for `left`/`right` or height for `top`/`bottom`. The panel translates in from offscreen instead of Modal's scale/fade, per the CRT-boot animation family. `role="dialog"`/`aria-modal="true"` with `aria-labelledby` wired to the title (or `aria-label` when no title is set).
- **`Combobox`** component — a cyberpunk-styled searchable dropdown for long option lists (country pickers, tag search), extending `Select`'s controlled-value pattern with `Input`'s focus-glow styling. A text input filters `options` by label substring as the user types, following the WAI-ARIA combobox pattern (`role="combobox"` + a `listbox` popup with `aria-activedescendant`) so arrow keys move a highlight without moving DOM focus off the input. `value`/`onValueChange` (controlled) or `defaultValue` (uncontrolled) manage the committed selection; the full option list stays visible on focus until a keystroke narrows it. `allowCustomValue` lets typed text that doesn't match any option commit as-is (on Enter or blur) instead of reverting — text that exactly matches an option's label still selects that option. Keyboard support: `ArrowDown`/`ArrowUp` move the highlighted option (wrapping, skipping disabled options), `Home`/`End` jump to the first/last match, `Enter` selects the highlighted option (or commits/reverts per `allowCustomValue`), and `Escape` reverts to the last committed value's label. `variant` (`primary`/`secondary`/`danger`/`ghost`) and responsive `size` reuse `Input`/`Select`'s existing vocabulary.
- **`DatePicker`** component — a cyberpunk-styled single-date picker: a read-only text-input trigger (matching `Input`'s variant/size vocabulary) that opens a keyboard-navigable calendar grid popover (matching `Modal`/`Select`'s overlay treatment). `value`/`onValueChange` (controlled) or `defaultValue` (uncontrolled) manage the selected `Date`; `minDate`/`maxDate` bound selectable days, rendering out-of-range cells dimmed and disabled. Reuses `DropdownMenu`'s click-outside/staged open-close popover mechanics. Selected day gets a neon `bg-accent` highlight; today gets an accent glow ring via `aria-current="date"`. Full keyboard support: `ArrowDown`/`Enter`/`Space` on the trigger opens the calendar; inside the grid, `ArrowLeft`/`ArrowRight` move focus a day at a time, `ArrowUp`/`ArrowDown` a week at a time, `Home`/`End` jump to the start/end of the focused week, `PageUp`/`PageDown` step a month, `Enter`/`Space` selects the focused day, and `Escape` closes the calendar and returns focus to the trigger. Ships with single-date selection only — range mode is a natural follow-up.
- **`DropdownMenu`** component — a cyberpunk-styled dropdown/context menu anchored to a trigger element, for row actions and context menus attached to a button. Reuses `TabNavigation`'s dropdown anchor+menu pattern internally (click-outside close, viewport-aware alignment, staged open/close transition). `trigger` accepts either a single React element (cloned with the required `onClick`/`aria-*` wiring) or a render prop for full control. `items` takes `{ label, icon?, onClick?, disabled?, danger? }` entries, with `danger` reusing `Button`'s destructive-action styling. Supports controlled (`open`/`onOpenChange`) or uncontrolled usage, `align` (`start`/`end`, auto-flips on overflow), and a responsive `size` (new `RESPONSIVE_SIZE_MAPS.dropdownMenu` entry). Full keyboard support: `ArrowDown`/`ArrowUp` on the trigger opens the menu focused on the first/last item; inside the menu, `ArrowDown`/`ArrowUp` move focus via roving tabindex (wrapping, skipping disabled items), `Home`/`End` jump to the first/last item, `Enter`/`Space` activates the focused item, and `Escape` closes the menu and returns focus to the trigger.
- **Demo Application** — added a new `Console` tab (`src/demo/ConsoleTab.tsx`) curating the 8 components that had never appeared anywhere in the demo app (`Accordion`, `Avatar`, `DropdownMenu`, `FormField`, `Pagination`, `RadioGroup`, `TabNavigation`, `Tooltip`), framed as an operative-records archive terminal split into an "Operative Dossier" and "Archive Navigation" section. Also added `Slider`/`Combobox`/`DatePicker` to `ElementsTab`'s new "Advanced Controls" section and `Drawer` to `InteractiveTab`'s new "Side Panel Access" section, so all 32 published components now appear somewhere in the demo app instead of only 28.

### Fixed

- **`TabNavigation` dropdown timers leaked past unmount** — `TabDropdown`'s `toggleOpen`/outside-click handlers scheduled `setTimeout` callbacks for the staged open/close animation but never cancelled them, so a callback could still fire `setState` after the component (or, in CI, the whole test environment) had already torn down — surfacing as a flaky "window is not defined" crash. Both timers are now ref-tracked and cleared on unmount and before each new timer is scheduled.
- **⚠️ Regression since `2.3.0` (published) — `Badge` text was invisible for `variant="primary"` when nested in a default-variant `Card`.** `Badge` never set its own text color, relying entirely on inherited `color`; `Card`'s default/small/accent variants all set `text-primary` as a fallback color for children that don't set their own, which exactly matches `variant="primary"`'s `bg-primary` fill, making the label unreadable. Both changes landed in the *same* `2.3.0` commit — one fixing Badge's font-size bug (below) by removing its hardcoded `text-base`, the other adding Card's `text-primary` fallback "so content is readable on dark backgrounds" — each reasonable in isolation, but together they've left this broken in every published version since: `2.3.0`, `2.3.1`, `2.4.0`, and the current `2.5.0`. Every `Badge` variant now sets its own contrasting text color explicitly via `text-inverse` — a token that was already declared in `src/index.css` for exactly this purpose ("text on a bright/colored fill") but had never actually been used anywhere, so nobody reached for it. Deliberately not `text-base`, which happens to share `--color-base`'s value here but would silently override the `size` prop's `text-xs`/`text-sm` sizing (the exact regression already fixed once before, see the "Badge font size" entry below) — `--color-base` collides with Tailwind's own `base` font-size step, and can't be renamed away from it since it's a published, "guaranteed stable" theming token (README.md's Customization section).
- **`Combobox` couldn't be cleared when `allowCustomValue` is set** — backspacing the field to empty and then blurring (or pressing Enter) always fell into the revert branch, silently restoring the previously-selected label even though `allowCustomValue` means typed text *is* the value. An empty edit is now committed as an empty value in that mode, so the field can actually be cleared; `allowCustomValue={false}` is unchanged — it still reverts an unmatched or empty edit, since a value there must come from `options`.
- **`Combobox`'s selected option was unreadable at the default size, and `DropdownMenu` had the same latent risk** — caught before either component's first publish (neither is in a released version yet). `RESPONSIVE_SIZE_MAPS.dropdownMenu`'s `md` tier — shared by both components — used the `text-base` keyword utility purely for its 1rem font size, which (per the entry above) also sets `color: var(--color-base)` in this project. That silently beat `Combobox`'s `text-accent` selected-option color and `DropdownMenu`'s hover/danger colors in the cascade, rendering a selected `Combobox` option dark-on-dark against the listbox's `bg-surface`. Changed the `md` tier to `text-(length:--text-base)`, a type-hinted CSS-variable reference that resolves Tailwind's own `--text-base` variable strictly as a length, sidestepping the color side effect entirely (rather than a plain `text-[1rem]` hardcoded value, so this stays a live reference to Tailwind's real scale step instead of a frozen magic number).
- **Audited every remaining `text-base` usage in the library for the same collision, after finding it three times independently above.** Testing confirmed the cascade winner between `text-base` and another color class on the same element isn't reliably predictable from reading the code — in different components today, `text-default`/`text-muted`/`text-error` happen to beat `text-base`, while `text-accent` happens to lose to it, for reasons internal to how Tailwind currently orders its generated output, not any rule a future change is guaranteed to preserve. Found one more live bug this way: `DatePicker`'s **selected day** rendered in barely-visible `text-default` instead of its intended dark contrast color against the `bg-accent` fill (also pre-release, not published). Rather than leave the rest as "currently correct by accident," every `text-base` usage in the library was converted to whichever safe form matches its actual intent — `text-(length:--text-base)` where it's only ever meant to set size (`Badge`, `Checkbox`, `RadioGroup`, `SectionTitle`, `Timeline`, and the `input`/`card`/`skeleton`/`tooltip`/`formField`/`accordion`/`pagination` entries in `RESPONSIVE_SIZE_MAPS`), or `text-inverse` where it's deliberately used for dark-on-bright contrast (`DatePicker`'s selected day, `Notification`, `Image`'s preview badge, `Button`, `Pagination`, `DropdownMenu`'s danger-hover state) — `text-inverse` was already declared in `src/index.css` for exactly this purpose but had never been used anywhere until now. No visible change for the cases that already rendered correctly — verified against the demo app and the full test suite — this removes the underlying ambiguity everywhere instead of leaving it to resurface the next time an unrelated change shifts Tailwind's output order.
- **Considered renaming `--color-base` outright** (it's the actual root cause: this project's own token collides with Tailwind's `base` font-size step) but confirmed it's documented in README.md's Customization section as a published, "guaranteed stable across minor versions" theming token, and is present in the currently-published `2.5.0` package — a consumer could have `:root { --color-base: <their color>; }` in their own app right now. Renaming it would silently break that override with no error, which isn't something to fold into a routine bugfix pass; kept the name and treated the collision as permanent instead (see `text-(length:--text-base)`/`text-inverse` above).
- **Added `src/utils/tokens.test.ts`** so this class of bug can't recur silently: one check fails the build if a new `--color-*` token's name collides with a Tailwind default color name or scale step (with `base` as the sole, documented, grandfathered exception — see its comment for why); another fails the build if a declared token is never actually referenced anywhere in `src/` (this is exactly how `--color-inverse` sat unused above). Also added a short pointer in `CLAUDE.md` to check `src/index.css`'s `@theme` block — which now carries a top comment explaining both rules — before adding or reaching for a design token.

### Changed

- **Extracted `src/hooks/useDialogBehavior.ts`**, a shared staged-open/close + Escape + click-outside + focus-restore + ref-counted body-scroll-lock hook, and migrated `TabNavigation`'s dropdown mode, `DropdownMenu`, `Modal`, `DatePicker`, and `Drawer` onto it — each previously hand-rolled an independent copy of this pattern, and the copies had already drifted from each other in real ways (issue #30). Fixed along the way: `Modal`'s staged timers were completely untracked (no ref, nothing cleared on unmount or before scheduling a new one — the exact bug class fixed for `TabNavigation` above); body scroll-lock had no ref-counting anywhere, so a `Modal` and `Drawer` open at once could have one's cleanup unlock scroll while the other was still visually open if closed out of LIFO order; `Modal`'s Escape listener wasn't stabilized against a fresh inline `onClose` the way `Drawer`'s already was, the same latent re-subscribe bug left unfixed. `TabNavigation`'s dropdown mode gains Escape-to-close and focus-restore-on-close, neither of which it had at all before. Focus-restore is keyboard-only across all 5: it only fires after a keyboard-driven dismissal (Escape, or a keyboard-activated item select), never after a mouse/touch dismissal (outside click, overlay click, or a click-driven item select) — a pointer dismissal already tells the browser where focus should go, so forcing it back would fight the user rather than help them. Tracked via a single page-wide input-modality listener (the same heuristic native `:focus-visible` uses), entirely inside the hook — none of the 5 components needed to change for this. Every pre-existing test across all 5 components' own suites passes unchanged; `Modal.test.tsx` and `TabNavigation.test.tsx` gained new coverage for behavior their suites weren't exercising before (overlay-click/Escape/focus-restore/scroll-lock/unmount-timer-leak for `Modal`; Escape and focus-restore for `TabNavigation`, since that behavior is new). `openDuration` is now optional on the hook: `DatePicker` doesn't stage an open animation and never read `isOpening`/`onOpenSettle`, so it no longer passes one — omitting it skips the open-settle timer entirely instead of scheduling one purely to flip state nothing consumes, which also fixes a spurious `act()` warning that timer caused in `DatePicker.test.tsx` under real timers. `close()` is now idempotent while already closing: Escape and outside-click stay live for the whole close-animation window (`isOpen` doesn't flip to `false` until the close timer completes) and both called `close()` unconditionally, so mashing Escape or repeatedly clicking outside during that window used to clear-and-reschedule the same timer for a fresh full `closeDuration` each time, deferring completion indefinitely instead of being a no-op.

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
