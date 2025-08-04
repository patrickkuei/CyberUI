# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# CyberUI 🚀

A cyberpunk-themed React UI library with neon-styled components, smooth animations, and futuristic aesthetics.

[![npm version](https://badge.fury.io/js/cyberpunk-ui.svg)](https://badge.fury.io/js/cyberpunk-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Cyberpunk Theme**: Neon colors, glitch effects, and futuristic styling
- ⚡ **Fast & Lightweight**: Optimized components with minimal bundle size
- 📱 **Fully Responsive**: Works perfectly on all screen sizes
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 📚 **Well Documented**: Comprehensive Storybook documentation
- ♿ **Accessible**: Built with accessibility in mind

## 🚀 Quick Start

### Installation

```bash
npm install cyberpunk-ui
# or
yarn add cyberpunk-ui
# or
pnpm add cyberpunk-ui
```

### Basic Usage

```tsx
import React from 'react';
import { CircularProgress, Notification } from 'cyberpunk-ui';
import 'cyberpunk-ui/styles.css';

function App() {
  return (
    <div className="cyberpunk-theme">
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

## 📦 Components

- **CircularProgress**: Animated circular progress indicators
- **SegmentedProgress**: Segmented progress rings with cyberpunk styling
- **Notification**: Toast notifications with multiple variants
- **TabNavigation**: Futuristic tab navigation component
- More components coming soon...

## 📖 Documentation

For detailed documentation, examples, and interactive demos, visit our Storybook:

🔗 **[View Storybook Documentation](https://patrickkuei.github.io/CyberUI/storybook)**

## 🎮 Demo

Experience the cyberpunk theme in action:

🔗 **[Live Demo](https://patrickkuei.github.io/CyberUI)**

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Getting Started

```bash
# Clone the repository
git clone https://github.com/patrickkuei/CyberUI.git
cd CyberUI

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run lint` - Run ESLint

## 🎨 Theming

CyberUI uses CSS custom properties for theming. You can customize the cyberpunk theme by overriding these variables:

```css
:root {
  --color-primary: #00ff41;
  --color-secondary: #ff0080;
  --color-accent: #00d4ff;
  --color-base: #0a0a0a;
  --color-surface: #1a1a1a;
  /* ... more variables */
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by cyberpunk aesthetics and futuristic UI designs
- Built with React, TypeScript, and Tailwind CSS
- Documented with Storybook

## 📞 Support

- 🐛 [Report Issues](https://github.com/patrickkuei/CyberUI/issues)
- 💬 [Discussions](https://github.com/patrickkuei/CyberUI/discussions)
- 📧 Email: [your-email@example.com]

---

Made with ⚡ by [Patrick Yang](https://github.com/patrickkuei)

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
