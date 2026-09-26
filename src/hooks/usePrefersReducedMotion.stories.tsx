import type { Meta, StoryObj } from "@storybook/react-vite";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const meta: Meta = {
  title: "Hooks/usePrefersReducedMotion",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Returns \`true\` while the user's OS or browser asks for reduced motion (\`prefers-reduced-motion: reduce\`), and re-renders when that preference changes. Returns \`false\` during server rendering and wherever \`window.matchMedia\` is unavailable.

CyberUI components already respect the preference on their own. Use this hook to gate your own JS-driven or inline-style animations.

**Usage:**

\`\`\`tsx
import { usePrefersReducedMotion } from 'cyberui-2045';

function NeonTicker() {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <div style={{ animation: reduceMotion ? 'none' : 'ticker-scroll 8s linear infinite' }}>
      NIGHT CITY MARKET // CREDSTICK INDEX +2.077%
    </div>
  );
}
\`\`\`

**Returns:**

| Type | Description |
|------|-------------|
| \`boolean\` | \`true\` while \`prefers-reduced-motion: reduce\` matches; live-updates on change. \`false\` on the server. |

**Reduced-motion behavior across CyberUI:**
- Continuous loops (scan lines, idle glow pulses, pulsing indicators, Skeleton pulse) stop; idle glows hold a static glow.
- Modal, Drawer, Image preview, DropdownMenu, DatePicker, TabNavigation dropdown, and toasts open and close with a 150ms opacity-only fade.
- Carousel does not auto-advance; its \`matrix\` and \`signal-glitch\` transitions render as \`fade\`.
- Movement on hover/press (Button shimmer and press scale, arrow and thumbnail zoom) and sliding transitions (Carousel slide, Accordion, Toggle knob, tab underlines) are off.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const MotionReadout = () => {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-accent bg-surface p-6 font-mono text-default">
      <div className="text-sm text-muted">prefers-reduced-motion</div>
      <div
        data-testid="motion-state"
        className={reduceMotion ? "text-2xl text-accent" : "text-2xl text-secondary"}
      >
        {reduceMotion ? "REDUCE // STATIC FEED" : "NO-PREFERENCE // LIVE FEED"}
      </div>
      <div
        aria-hidden="true"
        className="h-3 w-48 rounded bg-linear-(--gradient-primary)"
        style={{
          animation: reduceMotion ? "none" : "pulse 2s ease-in-out infinite",
        }}
      />
    </div>
  );
};

/** Live readout of the current preference; the bar pulses only while motion is allowed. */
export const Default: Story = {
  render: () => <MotionReadout />,
  parameters: {
    docs: {
      description: {
        story:
          "Shows the current preference. The bar pulses while motion is allowed and holds still under reduced motion. Toggle the OS setting (or DevTools → Rendering → Emulate CSS prefers-reduced-motion) to see it update live.",
      },
    },
  },
};
