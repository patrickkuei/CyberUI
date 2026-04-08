import type { Meta, StoryObj } from '@storybook/react-vite';
import SegmentedProgress from './SegmentedProgress';

const meta: Meta<typeof SegmentedProgress> = {
  title: 'Components/SegmentedProgress',
  component: SegmentedProgress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed segmented progress indicator with two display modes.

**Radial** (default) — circular arc-segment gauge, great for power levels, stats, or radial meters.

**Block** — linear discrete-block bar (▮▮▮▮▯▯), ideal for health bars, step-based loading, or ammo counts.

\`\`\`tsx
import { SegmentedProgress } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Radial gauge (default)
<SegmentedProgress progress={60} size="md">
  <span className="text-accent font-bold">60%</span>
</SegmentedProgress>

// Linear block bar
<SegmentedProgress variant="block" progress={60} segments={10} size="md" />
\`\`\`

| Prop | Variants | Default | Description |
|------|----------|---------|-------------|
| \`progress\` | \`0–100\` | — | Fill level |
| \`variant\` | \`"radial" \\| "block"\` | \`"radial"\` | Display mode |
| \`size\` | \`"sm" \\| "md" \\| "lg" \\| "xl"\` | \`"md"\` | Diameter (radial) or height (block) |
| \`segments\` | \`number\` | \`10\` | Number of blocks — **block only** |
| \`children\` | \`ReactNode\` | — | Center content — **radial only** |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: 'radio',
      options: ['radial', 'block'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Radial stories ────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    progress: 50,
    size: 'md',
  },
};

export const RadialWithText: Story = {
  name: 'Radial — with center text',
  args: {
    progress: 75,
    size: 'lg',
    children: (
      <div className="text-center">
        <div className="text-2xl font-bold text-accent">75%</div>
        <div className="text-xs text-muted">LOADED</div>
      </div>
    ),
  },
};

export const RadialEmpty: Story = {
  name: 'Radial — empty',
  args: { progress: 0, size: 'md' },
};

export const RadialFull: Story = {
  name: 'Radial — full',
  args: { progress: 100, size: 'md' },
};

export const RadialSizes: Story = {
  name: 'Radial — all sizes',
  render: () => (
    <div className="flex items-end gap-6">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <SegmentedProgress progress={60} size={size} />
          <span className="text-muted text-xs font-mono">{size}</span>
        </div>
      ))}
    </div>
  ),
};

// ── Block stories ─────────────────────────────────────────────────────────────

export const Block: Story = {
  name: 'Block — default',
  args: {
    variant: 'block',
    progress: 60,
    segments: 10,
    size: 'md',
  },
  decorators: [(Story) => <div className="w-64"><Story /></div>],
};

export const BlockEmpty: Story = {
  name: 'Block — empty',
  args: { variant: 'block', progress: 0, segments: 10, size: 'md' },
  decorators: [(Story) => <div className="w-64"><Story /></div>],
};

export const BlockFull: Story = {
  name: 'Block — full',
  args: { variant: 'block', progress: 100, segments: 10, size: 'md' },
  decorators: [(Story) => <div className="w-64"><Story /></div>],
};

export const BlockSegments: Story = {
  name: 'Block — segment counts',
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      {[5, 10, 20].map((segments) => (
        <div key={segments} className="flex flex-col gap-1">
          <SegmentedProgress variant="block" progress={60} segments={segments} size="md" />
          <span className="text-muted text-xs font-mono">{segments} segments</span>
        </div>
      ))}
    </div>
  ),
};

export const BlockSizes: Story = {
  name: 'Block — all sizes',
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <SegmentedProgress variant="block" progress={60} segments={10} size={size} />
          <span className="text-muted text-xs font-mono">{size}</span>
        </div>
      ))}
    </div>
  ),
};

// ── AllVariants ───────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted text-xs font-mono uppercase tracking-widest">Radial</span>
        <div className="flex items-end gap-6">
          {([25, 50, 75, 100] as const).map((p) => (
            <div key={p} className="flex flex-col items-center gap-2">
              <SegmentedProgress progress={p} size="md">
                <span className="text-accent text-xs font-bold">{p}%</span>
              </SegmentedProgress>
              <span className="text-muted text-xs font-mono">{p}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-72">
        <span className="text-muted text-xs font-mono uppercase tracking-widest">Block</span>
        {[25, 50, 75, 100].map((p) => (
          <div key={p} className="w-full flex flex-col gap-1">
            <SegmentedProgress variant="block" progress={p} segments={10} size="md" />
            <span className="text-muted text-xs font-mono">{p}%</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
