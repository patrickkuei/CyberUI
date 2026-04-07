// Consumer-facing AI usage guide for cyberui-2045.
// Injected into CLAUDE.md / .cursorrules / copilot-instructions.md by `init`.

export function getUsageContent(version = '1.4.0') {
  return `## CyberUI (cyberui-2045 v${version})

Cyberpunk-themed React UI library. Docs & live examples: https://patrickkuei.github.io/CyberUI

### Setup

\`\`\`bash
npm install cyberui-2045
\`\`\`

\`\`\`tsx
// Import styles once in your app entry (e.g. main.tsx)
import 'cyberui-2045/styles.css';

// Import components
import { Button, Card, Modal } from 'cyberui-2045';
\`\`\`

### Component Reference

| Component | Category | Storybook |
|-----------|----------|-----------|
| Button | Forms | https://patrickkuei.github.io/CyberUI/?path=/docs/button--docs |
| Input | Forms | https://patrickkuei.github.io/CyberUI/?path=/docs/input--docs |
| Select | Forms | https://patrickkuei.github.io/CyberUI/?path=/docs/select--docs |
| Toggle | Forms | https://patrickkuei.github.io/CyberUI/?path=/docs/toggle--docs |
| Card | Layout | https://patrickkuei.github.io/CyberUI/?path=/docs/card--docs |
| Modal | Layout | https://patrickkuei.github.io/CyberUI/?path=/docs/modal--docs |
| Badge | Feedback | https://patrickkuei.github.io/CyberUI/?path=/docs/badge--docs |
| Notification | Feedback | https://patrickkuei.github.io/CyberUI/?path=/docs/notification--docs |
| Skeleton | Feedback | https://patrickkuei.github.io/CyberUI/?path=/docs/skeleton--docs |
| CircularProgress | Progress | https://patrickkuei.github.io/CyberUI/?path=/docs/circularprogress--docs |
| LinearProgress | Progress | https://patrickkuei.github.io/CyberUI/?path=/docs/linearprogress--docs |
| SegmentedProgress | Progress | https://patrickkuei.github.io/CyberUI/?path=/docs/segmentedprogress--docs |
| TabNavigation | Navigation | https://patrickkuei.github.io/CyberUI/?path=/docs/tabnavigation--docs |
| Carousel | Navigation | https://patrickkuei.github.io/CyberUI/?path=/docs/carousel--docs |
| Image | Media | https://patrickkuei.github.io/CyberUI/?path=/docs/image--docs |
| Checkbox | Forms | https://patrickkuei.github.io/CyberUI/?path=/docs/checkbox--docs |
| Divider | Layout | https://patrickkuei.github.io/CyberUI/?path=/docs/divider--docs |
| GradientText | Typography | https://patrickkuei.github.io/CyberUI/?path=/docs/gradienttext--docs |
| SectionTitle | Typography | https://patrickkuei.github.io/CyberUI/?path=/docs/sectiontitle--docs |
| Steps | Navigation | https://patrickkuei.github.io/CyberUI/?path=/docs/steps--docs |
| Timeline | Display | https://patrickkuei.github.io/CyberUI/?path=/docs/timeline--docs |

### Hooks

\`\`\`tsx
import { useCyberNotifications, useAnimatedProgress, useCyberScrollbar } from 'cyberui-2045';

// Trigger toast notifications
const { notify } = useCyberNotifications();
notify({ message: 'Hack complete', variant: 'success' });

// Animated numeric counter for progress displays
const value = useAnimatedProgress(targetValue, { duration: 800 });

// Apply cyberpunk scrollbar styles to an element
const ref = useCyberScrollbar<HTMLDivElement>();
\`\`\`

### Notifications (requires provider)

\`\`\`tsx
import { CyberNotificationProvider, useCyberNotifications } from 'cyberui-2045';

// Wrap your app
<CyberNotificationProvider>
  <App />
</CyberNotificationProvider>

// Then anywhere inside:
const { notify } = useCyberNotifications();
notify({ message: 'Access granted', variant: 'success', duration: 3000 });
// variants: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning'
\`\`\`

### Theming — CSS token overrides

Override in your global CSS (after importing cyberui-2045/styles.css):

\`\`\`css
:root {
  --color-primary: #ff0055;      /* neon pink  */
  --color-secondary: #00fff9;    /* cyan       */
  --color-accent: #fbff00;       /* yellow     */
  --color-success: #00ff88;      /* green      */
  --color-error: #ff4444;        /* red        */
  --color-warning: #ff8800;      /* orange     */
  --color-background: #0a0a0f;   /* dark bg    */
  --color-surface: #12121a;      /* card bg    */
  --color-border: #2a2a3a;       /* borders    */
  --color-text: #e0e0ff;         /* body text  */
  --color-text-muted: #6b6b8a;   /* muted text */
}
\`\`\`

### className overrides

All components accept a \`className\` prop. Classes are merged via \`twMerge\` — your classes win on conflict.

\`\`\`tsx
// Layout overrides (safe — doesn't break variant identity)
<Button className="w-full mt-4">Submit</Button>

// Color/variant overrides (you own visual coherence)
<Button variant="primary" className="bg-purple-600">Custom</Button>
\`\`\`

### cn() utility (re-exported)

\`\`\`tsx
import { cn } from 'cyberui-2045';
// clsx + tailwind-merge — use for composing className strings in your own components
const cls = cn('base-class', isActive && 'active', className);
\`\`\``;
}
