// Consumer-facing AI usage guide for cyberui-2045.
// Injected into CLAUDE.md / .cursorrules / copilot-instructions.md by `init`.

export function getUsageContent(version = '2.3.1') {
  return `## CyberUI (cyberui-2045 v${version})

Cyberpunk-themed React UI library. Docs & live examples: https://patrickkuei.github.io/CyberUI/storybook/

### Setup

\`\`\`bash
npm install cyberui-2045
\`\`\`

\`\`\`tsx
// ⚠️ REQUIRED: import styles once in your app entry (e.g. main.tsx / index.tsx)
// Without this ALL components lose colors, backgrounds, and animations.
import 'cyberui-2045/styles.css';

// Import components — always from the root, never from subpaths
import { Button, Card, Modal } from 'cyberui-2045';
\`\`\`

⚠️ Do NOT import from \`cyberui-2045/components/Button\` or similar subpaths — root only.
⚠️ If styles look broken or text is invisible, \`cyberui-2045/styles.css\` is missing from the app entry.

### Component Reference

<!-- cyberui-2045:manifest:start -->
| Component | Category | Storybook |
|-----------|----------|-----------|
| Button | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-button--docs |
| Input | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-input--docs |
| Toggle | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-toggle--docs |
| Select | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-select--docs |
| Checkbox | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-checkbox--docs |
| Card | Layout | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-card--docs |
| Modal | Layout | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-modal--docs |
| Divider | Layout | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-divider--docs |
| Notification | Feedback | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-notification--docs |
| Badge | Feedback | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-badge--docs |
| Skeleton | Feedback | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-skeleton--docs |
| CircularProgress | Progress | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-circularprogress--docs |
| SegmentedProgress | Progress | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-segmentedprogress--docs |
| LinearProgress | Progress | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-linearprogress--docs |
| TabNavigation | Navigation | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-tabnavigation--docs |
| Carousel | Navigation | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-carousel--docs |
| Steps | Navigation | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-steps--docs |
| GradientText | Typography | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-gradienttext--docs |
| SectionTitle | Typography | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-sectiontitle--docs |
| Timeline | Display | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-timeline--docs |
| Image | Media | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-image--docs |
<!-- cyberui-2045:manifest:end -->

### Critical API notes

Every prop carries full JSDoc (types, \`@default\`, gotchas) — hover it in your editor or read
\`node_modules/cyberui-2045/dist/index.d.ts\` before using an unfamiliar component. Don't guess.

Only cross-cutting facts that don't belong to any single component's own types are listed here:

- \`Button\` variants: \`primary | secondary | danger | ghost\`. \`Badge\` variants: \`primary | secondary | accent | success | error | warning\`. Different sets — \`Button\` has no \`accent\`, \`Badge\` has no \`danger\`. Easy to mix up since both are status/action-ish components.
- Full machine-readable prop reference for all 21 components + hooks: \`node_modules/cyberui-2045/dist/component-manifest.json\`. Grep it for a component name before writing code against it if you're not confident of its exact props.

### Hooks

\`\`\`tsx
import { useCyberNotifications, useAnimatedProgress, useCyberScrollbar } from 'cyberui-2045';

// Toast notifications — showNotification(type, title, message, options?)
// type: 'success' | 'warning' | 'error'
const { showNotification } = useCyberNotifications();
showNotification('success', 'Access Granted', 'Welcome back, runner.');
showNotification('error', 'Breach Detected', 'Sector 7 compromised.', { duration: 5000 });

// Oscillating value for loading/pulse animations (min → max → min loop)
const value = useAnimatedProgress({ min: 5, max: 95, speed: 30 });

// Apply cyberpunk scrollbar styles to a scrollable element
const ref = useCyberScrollbar<HTMLDivElement>();
\`\`\`

### Notifications (requires provider)

\`\`\`tsx
import { CyberNotificationProvider, useCyberNotifications } from 'cyberui-2045';

// Wrap your app once
<CyberNotificationProvider>
  <App />
</CyberNotificationProvider>

// Then anywhere inside:
const { showNotification } = useCyberNotifications();
showNotification('success', 'Upload Complete', 'Neural data synced.');
\`\`\`

### Theming — CSS token overrides

Override in your global CSS (after importing cyberui-2045/styles.css):

\`\`\`css
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
\`\`\`

### className overrides

All components accept a \`className\` prop merged via \`tailwind-merge\` — your classes win on conflict.

\`\`\`tsx
<Button className="w-full mt-4">Full width</Button>
\`\`\`

### cn() utility (re-exported)

\`\`\`tsx
import { cn } from 'cyberui-2045';
// clsx + tailwind-merge — compose className strings in your own components
const cls = cn('base-class', isActive && 'active', className);
\`\`\``;
}
