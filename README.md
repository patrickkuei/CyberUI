# CyberUI

A cyberpunk-themed React UI library with neon-styled components and futuristic aesthetics.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌐 Demo & Documentation

<details>
  <summary>Check out the Demo Video 🎬</summary>
  <video src="https://github.com/user-attachments/assets/00d3de8d-d243-4ae0-80c4-e6b97b71c0f0">
  </video>
</details>

- 🔗 **[Live Demo](https://patrickkuei.github.io/CyberUI)** - Experience the cyberpunk theme in action
- 📚 **[Storybook Documentation](https://patrickkuei.github.io/CyberUI/storybook)** - Interactive component documentation

## 🚀 Quick Start

```bash
npm install cyberui-2045
```

Import the core stylesheet and components

```tsx
import React from "react";
import "cyberui-2045/styles.css";
import { CircularProgress, Notification } from "cyberui-2045";

function App() {
  return (
    <div>
      <CircularProgress progress={75} radius={20}>
        <span>75%</span>
      </CircularProgress>

      <Notification
        type="success"
        title="System Online"
        message="All systems are operational"
      />
    </div>
  );
}
```

## Customization

CyberUI is an opinionated design system. The layout, spacing, and motion are intentional and fixed. You own the **color palette**.

### Public color tokens

Override these in your own CSS after importing `cyberui-2045/styles.css`:

```css
:root {
  --color-primary: #ff005d;        /* neon accent 1 (pink) */
  --color-secondary: #00fff9;      /* neon accent 2 (cyan) */
  --color-accent: #fffb00;         /* highlight (yellow) */
  --color-base: #1a1a2e;           /* page background */
  --color-surface: #2d2d44;        /* card / component surface */
  --color-border-default: #3c3c5e; /* border */
  --color-default: #e0e0e0;        /* primary text */
  --color-muted: #8888aa;          /* secondary text */
  --color-inverse: #1a1a2e;        /* inverted text */
  --color-success: #00ff9e;
  --color-error: #ff4f4f;
  --color-warning: #ffaa00;
  --color-info: #00aaff;
}
```

These tokens are **guaranteed stable** across minor versions. All other CSS variables (shadows, gradients, animation values, `--tw-*`) are internal implementation details and may change.

### className prop

All components accept a `className` prop, merged via [`tailwind-merge`](https://github.com/dcastil/tailwind-merge). The last class wins on conflict:

```tsx
<Button className="mt-8 w-full">Full width with margin</Button>
```

Use `className` for **layout and spacing** (margins, widths, display). If you use it to override color or variant classes, visual coherence is your responsibility — CyberUI won't stop you, but it won't look right either.

### cn() utility

CyberUI exports its `cn()` helper so you can use the same merge logic in your own code:

```tsx
import { cn } from 'cyberui-2045';

<div className={cn('base-classes', conditional && 'extra', userClassName)} />
```

## Changelog

See the full history in [CHANGELOG.md](./CHANGELOG.md).

## 🛠️ Development

```bash
git clone https://github.com/patrickkuei/CyberUI.git
cd CyberUI
npm install
npm run dev          # Start development server
npm run storybook    # Start Storybook
```

## 🤝 Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md).

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

Made with ⚡ by [Patrick Yang](https://github.com/patrickkuei)
