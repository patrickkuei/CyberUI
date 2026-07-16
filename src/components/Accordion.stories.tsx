import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Accordion from './Accordion';
import type { AccordionItem } from './Accordion';

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: 'neural-link',
    title: 'What is a neural link?',
    content: 'A direct interface between mind and machine, bypassing conventional I/O entirely. Latency: sub-millisecond.',
  },
  {
    id: 'reversible',
    title: 'Is the procedure reversible?',
    content: 'No. Once the handshake completes, the implant is permanently bonded to your neural pathways. Proceed with caution.',
  },
  {
    id: 'compat',
    title: 'Is it compatible with legacy augments?',
    content: 'Most Gen-3 augments and later. Gen-1/Gen-2 hardware requires a bridge adapter, sold separately.',
  },
];

const SYSTEM_ITEMS: AccordionItem[] = [
  { id: 'power', title: 'Power Grid', content: 'Fusion core at 94% capacity. All subsystems nominal.' },
  { id: 'network', title: 'Network Uplink', content: 'Encrypted tunnel active. 3 relay nodes online, 0 dropped packets.' },
  { id: 'security', title: 'Security Protocols', content: 'Intrusion countermeasures armed. Last breach attempt: 14 days ago.' },
];

const DISABLED_ITEMS: AccordionItem[] = [
  { id: 'access', title: 'Access Logs', content: 'Full audit trail of every neural handshake this cycle.' },
  { id: 'blackbox', title: 'Black Box Recorder', content: 'Restricted — requires Level 5 clearance.', disabled: true },
  { id: 'diag', title: 'Diagnostics', content: 'Run a full-spectrum system self-test.' },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A cyberpunk-styled collapsible section list for FAQs, settings panels, and grouped content.

**Usage:**

\`\`\`tsx
import { Accordion } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic single-open list
<Accordion
  items={[
    { title: 'What is a neural link?', content: 'A direct interface between mind and machine.' },
    { title: 'Is it reversible?', content: 'No. Proceed with caution.' },
  ]}
/>

// Multiple panels open at once
<Accordion mode="multiple" items={systemItems} />

// Controlled
const [openIds, setOpenIds] = useState<string[]>(['neural-link']);
<Accordion items={faqItems} openIds={openIds} onOpenIdsChange={setOpenIds} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`items\` | \`AccordionItem[]\` | ✅ | - | Sections to render, in order |
| \`mode\` | \`'single' \\| 'multiple'\` | ❌ | \`'single'\` | Whether one or several panels can be open at once |
| \`defaultOpenIds\` | \`string[]\` | ❌ | \`[]\` | Initial open item id(s), uncontrolled |
| \`openIds\` | \`string[]\` | ❌ | - | Controlled open item id(s) |
| \`onOpenIdsChange\` | \`(openIds: string[]) => void\` | ❌ | - | Fired on header toggle |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Header padding/text size (supports responsive values) |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the outer container |

**Keyboard:** \`ArrowDown\`/\`ArrowUp\` move focus between headers, \`Home\`/\`End\` jump to the first/last header, \`Enter\`/\`Space\` toggles the focused header.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Whether one or several panels can be open at once',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Header padding/text size',
    },
  },
  args: {
    items: FAQ_ITEMS,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'single',
    size: 'md',
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args} />
    </div>
  ),
};

export const SingleMode: Story = {
  args: { mode: 'single', items: FAQ_ITEMS, defaultOpenIds: ['neural-link'] },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args} />
    </div>
  ),
};

export const MultipleMode: Story = {
  args: { mode: 'multiple', items: SYSTEM_ITEMS, defaultOpenIds: ['power', 'network'] },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args} />
    </div>
  ),
};

export const Small: Story = {
  args: { size: 'sm', items: SYSTEM_ITEMS },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args} />
    </div>
  ),
};

export const Medium: Story = {
  args: { size: 'md', items: SYSTEM_ITEMS },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args} />
    </div>
  ),
};

export const Large: Story = {
  args: { size: 'lg', items: SYSTEM_ITEMS },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { items: DISABLED_ITEMS },
  parameters: {
    docs: {
      description: {
        story: '"Black Box Recorder" requires Level 5 clearance — its header is disabled and skipped by arrow-key navigation.',
      },
    },
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args} />
    </div>
  ),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Open state lives in the parent — useful for syncing with a "Collapse All"/"Expand All" control.',
      },
    },
  },
  render: () => {
    const ControlledDemo = () => {
      const [openIds, setOpenIds] = useState<string[]>(['power']);
      return (
        <div className="w-96 flex flex-col gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              className="text-xs px-3 py-1 rounded border border-secondary text-secondary hover:bg-secondary/10 cursor-pointer"
              onClick={() => setOpenIds(SYSTEM_ITEMS.map((item) => item.id as string))}
            >
              Expand All
            </button>
            <button
              type="button"
              className="text-xs px-3 py-1 rounded border border-border-default text-muted hover:text-secondary cursor-pointer"
              onClick={() => setOpenIds([])}
            >
              Collapse All
            </button>
          </div>
          <Accordion mode="multiple" items={SYSTEM_ITEMS} openIds={openIds} onOpenIdsChange={setOpenIds} />
        </div>
      );
    };
    return <ControlledDemo />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-4 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Single mode</h4>
        <div className="w-96">
          <Accordion mode="single" items={FAQ_ITEMS} defaultOpenIds={['neural-link']} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Multiple mode</h4>
        <div className="w-96">
          <Accordion mode="multiple" items={SYSTEM_ITEMS} defaultOpenIds={['power', 'security']} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <div className="w-96">
            <Accordion size="sm" items={SYSTEM_ITEMS.slice(0, 1)} defaultOpenIds={['power']} />
          </div>
          <div className="w-96">
            <Accordion size="md" items={SYSTEM_ITEMS.slice(0, 1)} defaultOpenIds={['power']} />
          </div>
          <div className="w-96">
            <Accordion size="lg" items={SYSTEM_ITEMS.slice(0, 1)} defaultOpenIds={['power']} />
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled item</h4>
        <div className="w-96">
          <Accordion items={DISABLED_ITEMS} />
        </div>
      </div>
    </div>
  ),
};
