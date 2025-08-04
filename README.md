# CyberUI 🚀

A cyberpunk-themed React UI library with neon-styled components and futuristic aesthetics.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## � Demo & Documentation

- 🔗 **[Live Demo](https://patrickkuei.github.io/CyberUI)** - Experience the cyberpunk theme in action
- 📚 **[Storybook Documentation](https://patrickkuei.github.io/CyberUI/storybook)** - Interactive component documentation

## 🚀 Quick Start

```bash
npm install cyberui-2045
```

```tsx
import React from 'react';
import { CircularProgress, Notification } from 'cyberui-2045';

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
