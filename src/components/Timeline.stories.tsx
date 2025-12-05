import type { Meta, StoryObj } from '@storybook/react-vite';
import Timeline from './Timeline';

const meta: Meta<typeof Timeline> = {
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

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`events\` | \`TimelineEvent[]\` | ✅ | - | Array of timeline events to display |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Timeline size (supports responsive values) |
| \`className\` | \`string\` | ❌ | \`''\` | Additional CSS classes |

**TimelineEvent Interface:**

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| \`title\` | \`string\` | ✅ | Event title |
| \`time\` | \`string\` | ✅ | Event timestamp display string |
| \`description\` | \`string\` | ❌ | Optional event description |
| \`status\` | \`'success' \\| 'error' \\| 'warning' \\| 'info'\` | ❌ | Event status/type (default: 'info') |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    events: {
      control: 'object',
      description: 'Array of event objects { title, time, description, status }',
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
} satisfies Meta<typeof Timeline>;

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
