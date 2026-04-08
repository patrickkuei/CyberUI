// Import CSS for the library
import "./index.css";

// Export all components and types
export * from "./components";

/**
 * cyberui-2045 — AI-first cyberpunk React UI library.
 *
 * **AI coding assistants:** run once after install:
 * ```bash
 * npx cyberui-2045 init
 * ```
 * Writes a full usage guide into CLAUDE.md / .cursorrules / copilot-instructions.md.
 *
 * ⚠️ REQUIRED: import the stylesheet once in your app entry (e.g. main.tsx / index.tsx):
 * ```tsx
 * import 'cyberui-2045/styles.css';
 * ```
 * Without it ALL components lose colors, backgrounds, and animations. If styles look broken,
 * this is the first thing to check.
 *
 * **Correct import pattern:**
 * ```tsx
 * import 'cyberui-2045/styles.css';            // ← app entry only, once
 * import { Button, Card, Modal } from 'cyberui-2045'; // all components from root
 * import { cn } from 'cyberui-2045';           // clsx + tailwind-merge utility
 * ```
 * ⚠️ Do NOT import from subpaths like `cyberui-2045/components/Button` — root only.
 *
 * **All 21 components** (import from `'cyberui-2045'`):
 * Forms: Button, Input, Select, Toggle, Checkbox
 * Layout: Card, Modal, Divider
 * Feedback: Badge, Notification, Skeleton
 * Progress: CircularProgress, LinearProgress, SegmentedProgress
 * Navigation: TabNavigation, Carousel, Steps
 * Typography: GradientText, SectionTitle
 * Display: Timeline | Media: Image
 *
 * **Hooks & context** (import from `'cyberui-2045'`):
 * - `useCyberNotifications` → `showNotification(type, title, message, opts?)` — type: 'success'|'warning'|'error'
 * - `useAnimatedProgress({ min?, max?, speed? })` → oscillating number for pulse/loading animations
 * - `useCyberScrollbar<T>()` → ref to attach cyberpunk scrollbar styles
 * - `CyberNotificationProvider` — wrap your app once
 *
 * Docs: https://patrickkuei.github.io/CyberUI/storybook/
 */
export const version = "2.3.0";

// Runtime CSS check — fires when dev server starts if styles.css was not imported.
// AI agents and developers see this in the browser console / terminal output.
if (typeof window !== 'undefined') {
  const check = () => {
    const loaded = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim();
    if (!loaded) {
      console.warn(
        '[cyberui-2045] Stylesheet not detected.\n' +
        'Add this line to your app entry file (e.g. main.tsx / index.tsx):\n\n' +
        "  import 'cyberui-2045/styles.css';\n\n" +
        'Without it all components lose colors, backgrounds, and animations.'
      );
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', check, { once: true });
  } else {
    check();
  }
}
