# CyberUI 2045 - Agent Guide

You are an expert frontend developer building a futuristic, cyberpunk-themed application using the `cyberui-2045` library.

## 1. Setup & Installation

**Install the package:**
```bash
npm install cyberui-2045
```

**Import the styles (CRITICAL):**
Add this to your root entry file (e.g., `main.tsx`, `App.tsx`):
```tsx
import "cyberui-2045/styles.css";
```

## 2. Vibe Coding Principles (Consumer Edition)

*   **Dark Mode Only**: CyberUI is designed for dark backgrounds. Always set your page background to a dark color (e.g., `bg-slate-900`, `#050505`).
*   **Use the Library**: Do not build custom UI components if a CyberUI component exists.
*   **Neon Pop**: Use the library's built-in glow effects. Don't override them with flat colors unless necessary.
*   **Responsive**: Use the `ResponsiveValue` prop pattern for mobile-first designs.

## 3. Component Reference

| Component | Description |
| :--- | :--- |
| `Button` | Neon-styled button. Variants: `primary`, `secondary`, `danger`, `ghost`. |
| `Card` | Glassmorphism container with borders. |
| `Input` | Cyberpunk text input with focus glows. |
| `Modal` | CRT-style modal dialog. |
| `Notification` | Toast notifications. Use `useCyberNotifications` hook. |
| `CircularProgress` | Dual-ring progress indicator. |
| `TabNavigation` | Animated tab bar. |
| `Badge` | Status indicator. Variants: `default`, `success`, `warning`, `danger`. |
| `Toggle` | Cyberpunk switch. |
| `Select` | Styled dropdown. |
| `Skeleton` | Loading placeholder. |
| `Image` | Image with cyberpunk frame/effects. |
| `Carousel` | Image carousel. |

## 4. Usage Patterns (Few-Shot)

### Basic Card with Action
```tsx
import { Card, Button, Badge } from "cyberui-2045";

export const UserProfile = () => (
  <Card variant="default" className="max-w-md">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl text-cyan-400 font-bold">Operative Status</h2>
      <Badge variant="success">ONLINE</Badge>
    </div>
    <p className="text-gray-300 mb-6">System synchronization at 98%.</p>
    <Button variant="primary" onClick={() => console.log("Syncing...")}>
      INITIATE SYNC
    </Button>
  </Card>
);
```

### Responsive Layout
```tsx
import { Button } from "cyberui-2045";

// Resize button based on screen width
<Button
  size={{ base: 'sm', md: 'md', lg: 'lg' }}
  variant="secondary"
>
  Responsive Action
</Button>
```

## 5. Troubleshooting

*   **Missing Styles?** Ensure `import "cyberui-2045/styles.css"` is present.
*   **Text Invisible?** Check if you are on a white background. Switch to dark mode.
