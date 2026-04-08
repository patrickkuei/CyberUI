// Consumer-facing AI usage guide for cyberui-2045.
// Injected into CLAUDE.md / .cursorrules / copilot-instructions.md by `init`.

export function getUsageContent(version = '2.2.0') {
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

| Component | Category | Storybook |
|-----------|----------|-----------|
| Button | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-button--docs |
| Input | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-input--docs |
| Select | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-select--docs |
| Toggle | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-toggle--docs |
| Checkbox | Forms | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-checkbox--docs |
| Card | Layout | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-card--docs |
| Modal | Layout | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-modal--docs |
| Divider | Layout | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-divider--docs |
| Badge | Feedback | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-badge--docs |
| Notification | Feedback | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-notification--docs |
| Skeleton | Feedback | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-skeleton--docs |
| CircularProgress | Progress | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-circularprogress--docs |
| LinearProgress | Progress | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-linearprogress--docs |
| SegmentedProgress | Progress | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-segmentedprogress--docs |
| TabNavigation | Navigation | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-tabnavigation--docs |
| Carousel | Navigation | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-carousel--docs |
| Steps | Navigation | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-steps--docs |
| GradientText | Typography | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-gradienttext--docs |
| SectionTitle | Typography | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-sectiontitle--docs |
| Timeline | Display | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-timeline--docs |
| Image | Media | https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/components-image--docs |

### Critical API notes (read before coding)

\`\`\`tsx
// Button — variants: 'primary' | 'secondary' | 'danger' | 'ghost'  (NO 'accent')
<Button variant="primary">Jack In</Button>
<Button variant="danger">Purge</Button>

// Badge — uses children, NOT a label prop
<Badge variant="success">Online</Badge>
<Badge variant="error">Offline</Badge>
// variants: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning'

// CircularProgress — use size prop (sm/md/lg/xl); prop is 'progress' not 'value'
// center content goes as children; do NOT pass a large radius — default 20 is correct
<CircularProgress progress={75} size="md">
  <span className="text-xs font-mono text-accent">75%</span>
</CircularProgress>

// LinearProgress — prop is 'progress' (not 'value'); fills container width (w-full) by default
// wrap in a constrained div to control width
<LinearProgress progress={60} />
<div className="w-64"><LinearProgress progress={60} /></div>

// SegmentedProgress — two variants:
//   variant="radial" (default): circular arc-segment gauge; children render in the center
//   variant="block": linear discrete-block bar (▮▮▮▯▯); use segments prop (default 10)
// Both support size prop (sm/md/lg/xl)
<SegmentedProgress progress={80} size="md">
  <span className="text-accent font-bold text-xs">80%</span>
</SegmentedProgress>
<SegmentedProgress variant="block" progress={60} segments={10} size="md" />

// TabNavigation — tabs is a plain string array (NOT {id, label}[])
<TabNavigation
  tabs={['Overview', 'Stats', 'History']}
  activeTab="Overview"
  onTabChange={setTab}
/>

// SectionTitle — NO subtitle prop; use children for the heading text
<SectionTitle>System Status</SectionTitle>

// Select — use onValueChange for a simple string callback (like Toggle/Checkbox pattern)
// or use standard HTML onChange for the raw event
<Select
  options={[{ value: 'a', label: 'Option A' }]}
  onValueChange={(val) => setSelected(val)}
/>

// Toggle — onChange receives boolean directly
<Toggle checked={on} onChange={setOn} />

// Checkbox — use onCheckedChange for a simple boolean callback
<Checkbox checked={val} onCheckedChange={setVal} />

// Modal — default size is 'lg' (672px); use 'xl' for forms/tables, 'sm' only for simple alerts
// variant="danger" for destructive confirmations
<Modal title="Settings" size="lg" isOpen={open} onClose={close}>
  content here
</Modal>
<Modal variant="danger" title="Delete?" size="md" onConfirm={handleDelete} onCancel={close}>
  This cannot be undone.
</Modal>

// Card — supports onClick and all standard div HTML attributes
<Card onClick={() => select(item)}>content</Card>

// Image — preview={true} must be explicit to enable click-to-expand fullscreen (disabled by default)
<Image src="/photo.jpg" alt="Description" size="md" preview={true} />

// Carousel — images takes CarouselImageData[]: { src, alt, fallbackSrc?, caption? }
<Carousel
  images={[
    { src: 'img1.jpg', alt: 'Cyber City', caption: 'Night District' },
    { src: 'img2.jpg', alt: 'Neon Lights', fallbackSrc: 'fallback.jpg' }
  ]}
  currentIndex={idx}
  onIndexChange={setIdx}
/>

// Steps — current is 0-BASED. First step = current={0}, second = current={1}.
// Passing 1-based values is a common mistake that skips the first step.
<Steps
  current={0}
  items={[{ title: 'Login' }, { title: 'Verify' }, { title: 'Complete' }]}
/>
\`\`\`

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
