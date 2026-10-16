import type { ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Timeline from './Timeline';
import type { TimelineItemsProps } from './Timeline';

// Typed with the wider TimelineItemsProps: `Meta<typeof Timeline>` would read
// the legacy TimelineProps signature (TimelineEvent[]), and the stories below
// use untimed, neutral and React-node entries.
const meta: Meta<ComponentType<TimelineItemsProps>> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A vertical timeline component for displaying events or history with cyberpunk styling.

**Usage:**

\`\`\`tsx
import { Timeline } from 'cyberui-2045';

const events = [
  {
    title: 'System Breach',
    time: '10:42 AM',
    description: 'Unauthorized access detected in sector 7',
    status: 'error'
  },
  {
    title: 'Patch Applied',
    time: '10:45 AM',
    description: 'Security patch v2.4 installed',
    status: 'success'
  }
];

<Timeline events={events} />
\`\`\`

For process steps, leave out \`time\`, pass React content as \`description\`, and use \`status: 'neutral'\` for plain steps:

\`\`\`tsx
<Timeline
  events={[
    { title: 'Recon', status: 'neutral' },
    {
      title: 'Breach',
      status: 'warning',
      description: <>Run <code>ice-breaker --stealth</code></>,
    },
    { title: 'Extract', status: 'neutral' },
  ]}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`events\` | \`TimelineItem[]\` (or \`TimelineEvent[]\`) | ✅ | - | Array of timeline entries to display |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Timeline size (supports responsive values) |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |

**TimelineItem Interface:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| \`title\` | \`string\` | ✅ | Entry title |
| \`time\` | \`string\` | ❌ | Time shown beside the title. When omitted, no time element is rendered |
| \`description\` | \`React.ReactNode\` | ❌ | Optional description. Strings render in a \`<p>\`, other React content in a \`<div>\` |
| \`status\` | \`'success' \\| 'error' \\| 'warning' \\| 'info' \\| 'neutral'\` | ❌ | Status styling (default: 'info'). \`'neutral'\` renders an unlit diamond with no glow |

\`TimelineEvent\` is the original, narrower shape (\`time\` required, string \`description\`, no \`'neutral'\`); every \`TimelineEvent\` is a valid \`TimelineItem\`.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    events: {
      control: 'object',
      description: 'Array of TimelineItem (or TimelineEvent) objects { title, time?, description?, status? }. time is optional; description accepts React content; status adds neutral',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Timeline size (supports responsive values)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<ComponentType<TimelineItemsProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultEvents = [
  {
    title: 'System Initialization',
    time: '08:00 AM',
    description: 'Boot sequence completed successfully',
    status: 'success' as const,
  },
  {
    title: 'Network Warning',
    time: '09:15 AM',
    description: 'High latency detected in node 4',
    status: 'warning' as const,
  },
  {
    title: 'Security Alert',
    time: '10:30 AM',
    description: 'Unauthorized access attempt blocked',
    status: 'error' as const,
  },
  {
    title: 'Routine Maintenance',
    time: '12:00 PM',
    description: 'Scheduled database optimization',
    status: 'info' as const,
  },
];

export const Default: Story = {
  args: {
    events: defaultEvents,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-sm font-bold text-muted mb-4">Small</h3>
        <Timeline events={defaultEvents.slice(0, 2)} size="sm" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-muted mb-4">Medium (Default)</h3>
        <Timeline events={defaultEvents.slice(0, 2)} size="md" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-muted mb-4">Large</h3>
        <Timeline events={defaultEvents.slice(0, 2)} size="lg" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Every status: four glowing neon diamonds plus the unlit `neutral` diamond.',
      },
    },
  },
  args: {
    events: [
      { title: 'Uplink Established', time: '00:01', description: 'Neural link synced', status: 'success' },
      { title: 'Firewall Breach', time: '00:07', description: 'ICE layer 3 compromised', status: 'error' },
      { title: 'Heat Spike', time: '00:12', description: 'Core temperature climbing', status: 'warning' },
      { title: 'Packet Relay', time: '00:15', description: 'Routing through node 9', status: 'info' },
      { title: 'Standby', time: '00:20', description: 'Daemon idle, awaiting orders', status: 'neutral' },
    ],
  },
};

export const RichDescription: Story = {
  parameters: {
    docs: {
      description: {
        story: '`description` accepts React content: code excerpts, links and notes render inside the entry.',
      },
    },
  },
  args: {
    events: [
      {
        title: 'Jack In',
        time: '22:04',
        status: 'success',
        description: (
          <>
            Open the session with <code className="text-secondary">netrun connect --node 7</code>.
          </>
        ),
      },
      {
        title: 'Bypass ICE',
        time: '22:09',
        status: 'warning',
        description: (
          <div className="space-y-2">
            <pre className="bg-base border border-border-default rounded p-2 text-xs overflow-x-auto">
              <code>{'ice-breaker --stealth \\\n  --target arasaka-subnet'}</code>
            </pre>
            <p className="text-xs text-warning">Note: the trace timer starts as soon as the first layer drops.</p>
          </div>
        ),
      },
      {
        title: 'Read the Runbook',
        time: '22:15',
        status: 'info',
        description: (
          <a href="https://patrickkuei.github.io/CyberUI/" className="text-secondary underline">
            Netrunner field manual
          </a>
        ),
      },
    ],
  },
};

export const ProcessSteps: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Entries without `time` render no time element, for ordered process stages.',
      },
    },
  },
  args: {
    events: [
      { title: 'Stage 1: Recon', description: 'Map the target subnet', status: 'success' },
      { title: 'Stage 2: Infiltrate', description: 'Slip past the perimeter daemons', status: 'success' },
      { title: 'Stage 3: Extract', description: 'Pull the data shard', status: 'info' },
      { title: 'Stage 4: Ghost', description: 'Wipe logs and disconnect', status: 'neutral' },
    ],
  },
};

export const NeutralWithHighlight: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Neutral steps with one highlighted stage: only the highlighted diamond glows.',
      },
    },
  },
  args: {
    events: [
      { title: 'Boot Cyberdeck', status: 'neutral' },
      { title: 'Load Daemons', status: 'neutral' },
      { title: 'Breach Mainframe', description: 'Current stage', status: 'warning' },
      { title: 'Download Payload', status: 'neutral' },
      { title: 'Flatline Trace', status: 'neutral' },
    ],
  },
};
