import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import type { DropdownMenuItem } from './DropdownMenu';
import Button from './Button';

const ROW_ACTIONS: DropdownMenuItem[] = [
  { label: 'Edit Profile', onClick: () => {} },
  { label: 'Duplicate Node', onClick: () => {} },
  { label: 'Revoke Access', danger: true, onClick: () => {} },
];

const SYSTEM_ACTIONS: DropdownMenuItem[] = [
  { label: 'Restart Subsystem', onClick: () => {} },
  { label: 'View Access Logs', onClick: () => {} },
  { label: 'Firmware Update', disabled: true, onClick: () => {} },
  { label: 'Purge Local Cache', danger: true, onClick: () => {} },
];

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-styled dropdown/context menu anchored to a trigger element — for row actions, context menus, and command panels attached to a button.

**Usage:**

\`\`\`tsx
import { DropdownMenu, Button } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Row action menu
<DropdownMenu
  trigger={<Button variant="ghost" size="sm">⋯</Button>}
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Duplicate', onClick: handleDuplicate },
    { label: 'Delete', danger: true, onClick: handleDelete },
  ]}
/>

// Controlled, right-aligned
const [open, setOpen] = React.useState(false);
<DropdownMenu
  open={open}
  onOpenChange={setOpen}
  align="end"
  trigger={<Button variant="secondary">System</Button>}
  items={systemActions}
/>

// Render-prop trigger for full control over the anchor element
<DropdownMenu
  trigger={(triggerProps) => <button {...triggerProps}>Actions</button>}
  items={items}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`items\` | \`DropdownMenuItem[]\` | ✅ | - | Actions to render, in order |
| \`trigger\` | \`ReactElement \\| (props) => ReactElement\` | ✅ | - | Element or render prop for the anchor that opens the menu |
| \`align\` | \`'start' \\| 'end'\` | ❌ | \`'start'\` | Horizontal alignment of the menu panel (auto-flips if it would overflow) |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Item padding/text size (supports responsive values) |
| \`closeOnSelect\` | \`boolean\` | ❌ | \`true\` | Whether selecting an item closes the menu |
| \`open\` | \`boolean\` | ❌ | - | Controlled visibility |
| \`onOpenChange\` | \`(open: boolean) => void\` | ❌ | - | Fired on trigger click, item selection, Escape, or outside click |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables the trigger and prevents the menu from opening |
| \`ariaLabel\` | \`string\` | ❌ | \`'Menu'\` | Accessible label for the menu panel |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the outer wrapper |
| \`menuClassName\` | \`string\` | ❌ | - | Additional CSS classes for the menu panel |

**Keyboard:** \`ArrowDown\`/\`ArrowUp\` on the trigger opens the menu focused on the first/last item. Inside the menu, \`ArrowDown\`/\`ArrowUp\` move focus (wrapping), \`Home\`/\`End\` jump to the first/last item, \`Enter\`/\`Space\` activates the focused item, \`Escape\` closes and returns focus to the trigger, and clicking outside closes the menu.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['start', 'end'],
      description: 'Horizontal alignment of the menu panel',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Item padding/text size',
    },
    closeOnSelect: {
      control: 'boolean',
      description: 'Whether selecting an item closes the menu',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the trigger and prevents the menu from opening',
    },
  },
  args: {
    items: ROW_ACTIONS,
    open: true,
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    align: 'start',
    size: 'md',
  },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="secondary">Row Actions</Button>} />
    </div>
  ),
};

export const AlignStart: Story = {
  args: { align: 'start' },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="secondary">Left-Aligned</Button>} />
    </div>
  ),
};

export const AlignEnd: Story = {
  args: { align: 'end' },
  render: (args) => (
    <div className="p-20 flex justify-end w-96">
      <DropdownMenu {...args} trigger={<Button variant="secondary">Right-Aligned</Button>} />
    </div>
  ),
};

export const Small: Story = {
  args: { size: 'sm', items: SYSTEM_ACTIONS },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button size="sm" variant="secondary">System</Button>} />
    </div>
  ),
};

export const Medium: Story = {
  args: { size: 'md', items: SYSTEM_ACTIONS },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button size="md" variant="secondary">System</Button>} />
    </div>
  ),
};

export const Large: Story = {
  args: { size: 'lg', items: SYSTEM_ACTIONS },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button size="lg" variant="secondary">System</Button>} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, open: false },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="ghost" disabled>Access Denied</Button>} />
    </div>
  ),
};

export const WithDangerAndDisabledItems: Story = {
  args: { items: SYSTEM_ACTIONS },
  parameters: {
    docs: {
      description: {
        story: '"Firmware Update" is locked and skipped by keyboard navigation; "Purge Local Cache" is a destructive action styled with the `danger` treatment.',
      },
    },
  },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="secondary">System</Button>} />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    // Overrides meta's forced `open: true` so this story runs uncontrolled —
    // click the trigger below, or focus it and press ArrowDown/ArrowUp/Enter/Escape.
    open: undefined,
    items: ROW_ACTIONS,
  },
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled — click to open, arrow keys to navigate, Enter/Space to select, Escape or an outside click to dismiss.',
      },
    },
  },
  render: (args) => (
    <div className="p-20">
      <DropdownMenu {...args} trigger={<Button variant="primary">⋯ Row Actions</Button>} />
    </div>
  ),
};

export const ControlledDemo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Open state lives in the parent — useful for syncing a menu with other UI (e.g. closing it when a modal opens elsewhere).',
      },
    },
  },
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <div className="p-20 flex flex-col gap-3 items-start">
          <span className="text-xs text-muted">Menu is {open ? 'OPEN' : 'CLOSED'}</span>
          <DropdownMenu
            open={open}
            onOpenChange={setOpen}
            items={ROW_ACTIONS}
            trigger={<Button variant="secondary">Neural Link</Button>}
          />
        </div>
      );
    };
    return <Demo />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-16 p-16 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-4">Alignment</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <DropdownMenu open items={ROW_ACTIONS} align="start" trigger={<Button variant="secondary">Start</Button>} />
          <DropdownMenu open items={ROW_ACTIONS} align="end" trigger={<Button variant="secondary">End</Button>} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Sizes</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <DropdownMenu open size="sm" items={ROW_ACTIONS} trigger={<Button size="sm" variant="secondary">SM</Button>} />
          <DropdownMenu open size="md" items={ROW_ACTIONS} trigger={<Button size="md" variant="secondary">MD</Button>} />
          <DropdownMenu open size="lg" items={ROW_ACTIONS} trigger={<Button size="lg" variant="secondary">LG</Button>} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Danger + Disabled Items</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <DropdownMenu open items={SYSTEM_ACTIONS} trigger={<Button variant="secondary">System</Button>} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Disabled Trigger</h4>
        <div className="flex gap-16 flex-wrap items-start">
          <DropdownMenu disabled items={ROW_ACTIONS} trigger={<Button variant="ghost" disabled>Access Denied</Button>} />
        </div>
      </div>
    </div>
  ),
};
