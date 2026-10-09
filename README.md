# CyberUI

A cyberpunk-themed React UI library with neon-styled components and futuristic aesthetics.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Demo & Documentation

<details>
  <summary>Check out the Demo Video 🎬</summary>
  <video src="https://github.com/user-attachments/assets/00d3de8d-d243-4ae0-80c4-e6b97b71c0f0">
  </video>
</details>

- **[Live Demo & Storybook](https://patrickkuei.github.io/CyberUI)** — interactive component docs and examples

## Quick Start

```bash
npm install cyberui-2045
```

Import the stylesheet once in your app entry, then use any component:

```tsx
import 'cyberui-2045/styles.css';
import { Button, Card, CircularProgress } from 'cyberui-2045';

function App() {
  return (
    <Card>
      <CircularProgress progress={75} radius={20}>
        <span>75%</span>
      </CircularProgress>
      <Button variant="primary">Jack In</Button>
    </Card>
  );
}
```

## Templates

[cyberui-templates](https://github.com/patrickkuei/cyberui-templates) are complete example apps built with CyberUI that you can start a new app from.

| Template | What it is | Live preview |
|----------|------------|--------------|
| [AI Product Monitoring](https://github.com/patrickkuei/cyberui-templates/tree/main/packages/monitoring) (`monitoring`) | Request volume, latency percentiles, error rate, and a live alerts feed for an AI API. | [Open](https://patrickkuei.github.io/cyberui-templates/live/monitoring/) |
| [Agent Control Panel](https://github.com/patrickkuei/cyberui-templates/tree/main/packages/agent-panel) (`agent-panel`) | A conversation, task queue, live status and reasoning trace for an AI assistant, with a human approval step. | [Open](https://patrickkuei.github.io/cyberui-templates/live/agent-panel/) |

Start a **new** app from a template:

```bash
npx cyberui-2045 templates                  # list the templates, with live previews
npx cyberui-2045 create monitoring my-app   # copy one into ./my-app (dir defaults to the template name)
cd my-app && npm install && npm run dev
```

`create` runs `npx tiged` for you, so it needs network access. It refuses a directory that already has files in it, and `--dry-run` prints the command without running it. The same thing by hand:

```bash
npx tiged patrickkuei/cyberui-templates/packages/<template-name> my-app
```

In an existing app, read a template's source for patterns instead of copying it in.

Browse all templates on the [templates site](https://patrickkuei.github.io/cyberui-templates/). The [repository](https://github.com/patrickkuei/cyberui-templates) has the current list as more templates are added.

## Components

<!-- cyberui-2045:manifest:start -->
| Component | Category | Docs |
|-----------|----------|------|
| Button | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-button--docs) |
| Input | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-input--docs) |
| Toggle | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-toggle--docs) |
| Select | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-select--docs) |
| Checkbox | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-checkbox--docs) |
| FormField | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-formfield--docs) |
| RadioGroup | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-radiogroup--docs) |
| Slider | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-slider--docs) |
| Combobox | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-combobox--docs) |
| DatePicker | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-datepicker--docs) |
| Card | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-card--docs) |
| Modal | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-modal--docs) |
| Divider | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-divider--docs) |
| Accordion | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-accordion--docs) |
| Drawer | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-drawer--docs) |
| Notification | Feedback | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-notification--docs) |
| Badge | Feedback | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-badge--docs) |
| Skeleton | Feedback | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-skeleton--docs) |
| Tooltip | Feedback | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-tooltip--docs) |
| CircularProgress | Progress | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-circularprogress--docs) |
| SegmentedProgress | Progress | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-segmentedprogress--docs) |
| LinearProgress | Progress | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-linearprogress--docs) |
| TabNavigation | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-tabnavigation--docs) |
| Carousel | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-carousel--docs) |
| Steps | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-steps--docs) |
| DropdownMenu | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-dropdownmenu--docs) |
| Pagination | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-pagination--docs) |
| GradientText | Typography | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-gradienttext--docs) |
| SectionTitle | Typography | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-sectiontitle--docs) |
| Timeline | Display | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-timeline--docs) |
| Table | Display | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-table--docs) |
| Image | Media | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-image--docs) |
| Avatar | Media | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-avatar--docs) |

Also includes hooks (`useCyberScrollbar`, `useCyberNotifications`, `useAnimatedProgress`, `usePrefersReducedMotion`) and `CyberNotificationProvider` context.
<!-- cyberui-2045:manifest:end -->

## AI Coding Setup

If you use an AI coding assistant (Claude Code, Gemini CLI, Cursor, GitHub Copilot, or any tool that reads the open `AGENTS.md` standard), run this once after installing:

```bash
npx cyberui-2045 init
```

It gives your assistant a concise CyberUI usage guide — components, hooks, tokens, and patterns — in the way each tool supports best. By default the guide goes in a file of its own, so your own instruction file stays short:

| Flag | Default: the guide's own file | With `--inline` |
|---|---|---|
| `--claude` | `.claude/cyberui.md`, imported from `CLAUDE.md` by one `@.claude/cyberui.md` line | pasted into `CLAUDE.md` |
| `--gemini` | `.gemini/cyberui.md`, imported from `GEMINI.md` by one `@./.gemini/cyberui.md` line | pasted into `GEMINI.md` |
| `--cursor` | `.cursor/rules/cyberui.mdc` (always applied) | pasted into `.cursorrules` |
| `--copilot` | `.github/instructions/cyberui.instructions.md` (applies to TS/JS/CSS files) | pasted into `.github/copilot-instructions.md` |
| `--agents` | pasted into `AGENTS.md` (the format has no alternative) | same |

```bash
npx cyberui-2045 init --claude --cursor   # combine targets
npx cyberui-2045 init --all               # all five
npx cyberui-2045 init --all --inline      # paste the guide in everywhere instead
npx cyberui-2045 init --all --dry-run     # show every file it would write; write nothing
```

With no flags, `init` asks which tools to set up, then "own file (recommended) or inline?". Where the guide is pasted in, it sits between `<!-- cyberui-2045:start -->` and `<!-- cyberui-2045:end -->` markers. Updating the guide changes only what is between them. Adding a new block trims trailing blank lines and spaces at the end of your file and puts one blank line before the block. For Claude Code, `CLAUDE.md` gets only this:

```md
<!-- cyberui-2045:start -->
@.claude/cyberui.md
<!-- cyberui-2045:end -->
```

Re-run `init` after upgrading: it rewrites only the guide file, and a file that is already up to date is left alone. If an older version pasted the guide into `CLAUDE.md` or `GEMINI.md`, that block becomes the import line; if it pasted it into `.cursorrules` or `.github/copilot-instructions.md`, the block is taken out of that file together with the blank line next to it (and, if the block was at the end, any trailing blank lines and spaces before it), the file is deleted only if nothing else was in it, and the new rule file takes over. `init` prints what it did to each file, and `--dry-run` shows the exact lines it would take out.

**Commit the generated guide file** (`.claude/cyberui.md`, `.gemini/cyberui.md`, `.cursor/rules/cyberui.mdc` or `.github/instructions/cyberui.instructions.md`). If its folder is gitignored, teammates and CI get a dangling import or no guide at all.

[docs/agent-instruction-files.md](https://github.com/patrickkuei/CyberUI/blob/master/docs/agent-instruction-files.md) explains what each tool supports, with links to its documentation.

## Customization

CyberUI is an opinionated design system. Layout, spacing, and motion are intentional and fixed. You own the **color palette**.

### CSS token overrides

Override in your global CSS after importing `cyberui-2045/styles.css`:

```css
:root {
  --color-primary: #ff005d;        /* neon pink  */
  --color-secondary: #00fff9;      /* cyan       */
  --color-accent: #fffb00;         /* yellow     */
  --color-success: #00ff9e;        /* green      */
  --color-error: #ff4f4f;          /* red        */
  --color-warning: #ffaa00;        /* orange     */
  --color-base: #1a1a2e;           /* page background */
  --color-surface: #2d2d44;        /* card / component surface */
  --color-border-default: #3c3c5e; /* borders    */
  --color-default: #e0e0e0;        /* primary text */
  --color-muted: #8888aa;          /* secondary text */
  --color-inverse: #1a1a2e;        /* inverted text */
}
```

These tokens are **guaranteed stable** across minor versions. All other CSS variables (shadows, gradients, animation values, `--tw-*`) are internal and may change.

### className prop

All components accept a `className` prop, merged via [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) — your classes win on conflict:

```tsx
<Button className="mt-8 w-full">Full width with margin</Button>
```

Use `className` for layout and spacing. Overriding color or variant classes is supported but visual coherence becomes your responsibility.

### cn() utility

CyberUI re-exports its `cn()` helper (clsx + tailwind-merge) for use in your own components:

```tsx
import { cn } from 'cyberui-2045';

<div className={cn('base-classes', isActive && 'active', userClassName)} />
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the full history.

## Development

```bash
git clone https://github.com/patrickkuei/CyberUI.git
cd CyberUI
npm install
npm run dev          # demo app
npm run storybook    # Storybook on :6006
npm run test         # unit + Storybook tests
npm run build        # typecheck + bundle → dist/
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE) for details.

---

Made with ⚡ by [Patrick Yang](https://github.com/patrickkuei)
