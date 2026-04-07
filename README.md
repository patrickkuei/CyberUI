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

## Components

| Component | Category | Docs |
|-----------|----------|------|
| Button | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-button--docs) |
| Input | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-input--docs) |
| Select | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-select--docs) |
| Toggle | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-toggle--docs) |
| Card | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-card--docs) |
| Modal | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-modal--docs) |
| Badge | Feedback | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-badge--docs) |
| Notification | Feedback | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-notification--docs) |
| Skeleton | Feedback | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-skeleton--docs) |
| CircularProgress | Progress | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-circularprogress--docs) |
| LinearProgress | Progress | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-linearprogress--docs) |
| SegmentedProgress | Progress | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-segmentedprogress--docs) |
| TabNavigation | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-tabnavigation--docs) |
| Carousel | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-carousel--docs) |
| Steps | Navigation | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-steps--docs) |
| Image | Media | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-image--docs) |
| Checkbox | Forms | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-checkbox--docs) |
| Divider | Layout | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-divider--docs) |
| GradientText | Typography | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-gradienttext--docs) |
| SectionTitle | Typography | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-sectiontitle--docs) |
| Timeline | Display | [→](https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-timeline--docs) |

Also includes hooks (`useCyberNotifications`, `useAnimatedProgress`, `useCyberScrollbar`) and `CyberNotificationProvider` context.

## AI Coding Setup

If you use an AI coding assistant (Claude Code, Cursor, GitHub Copilot), run this once after installing:

```bash
npx cyberui-2045 init
```

It writes a concise CyberUI usage guide — components, hooks, tokens, and patterns — directly into your AI config file (`CLAUDE.md`, `.cursorrules`, or `.github/copilot-instructions.md`). Idempotent: safe to re-run after upgrades.

```bash
npx cyberui-2045 init --claude    # Claude Code only
npx cyberui-2045 init --cursor    # Cursor only
npx cyberui-2045 init --copilot   # GitHub Copilot only
npx cyberui-2045 init --all       # all three
npx cyberui-2045 init --dry-run   # preview without writing
```

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
