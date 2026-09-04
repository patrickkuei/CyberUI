import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A cyberpunk-styled page control for list/table views with more results than fit on one page. Always controlled via \`currentPage\`/\`onPageChange\`, with a compact ellipsis-collapsing mode for large page counts, matching Button/Badge's neon variant treatment.

**Usage:**

\`\`\`tsx
import { Pagination } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={12}
  onPageChange={setPage}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`currentPage\` | \`number\` | ✅ | - | Current active page, 1-based |
| \`totalPages\` | \`number\` | ✅ | - | Total number of pages available |
| \`onPageChange\` | \`(page: number) => void\` | ✅ | - | Fired when the user selects a new page |
| \`compact\` | \`boolean\` | ❌ | \`true\` | Collapses distant pages behind an ellipsis for large page counts |
| \`siblingCount\` | \`number\` | ❌ | \`1\` | Pages shown on each side of \`currentPage\` when \`compact\` |
| \`boundaryCount\` | \`number\` | ❌ | \`1\` | Pages always shown at the start/end when \`compact\` |
| \`showPrevNext\` | \`boolean\` | ❌ | \`true\` | Renders Previous/Next controls |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Active page color and hover glow |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Page control size (supports responsive values) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables every control in the group |
| \`ariaLabel\` | \`string\` | ❌ | \`'Pagination'\` | Accessible label for the \`<nav>\` landmark |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the outer \`<nav>\` |

**Keyboard:** page/Previous/Next buttons sit in normal tab order (native \`<button>\` semantics — \`Enter\`/\`Space\` activate). \`Home\`/\`End\` jump to the first/last page from anywhere inside the control.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page, 1-based',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages available',
    },
    compact: {
      control: 'boolean',
      description: 'Collapses distant pages behind an ellipsis for large page counts',
    },
    siblingCount: {
      control: { type: 'number', min: 0 },
      description: 'Pages shown on each side of currentPage when compact',
    },
    boundaryCount: {
      control: { type: 'number', min: 0 },
      description: 'Pages always shown at the start/end when compact',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Renders Previous/Next controls',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
      description: 'Active page color and hover glow',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Page control size (supports responsive values)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables every control in the group',
    },
    onPageChange: { action: 'page changed' },
  },
  args: {
    currentPage: 5,
    totalPages: 20,
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const DefaultDemo = () => {
      const [page, setPage] = useState(args.currentPage ?? 5);
      return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
    };
    return <DefaultDemo />;
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="sm" />
      <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="md" />
      <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CompactCollapsing: Story = {
  parameters: {
    docs: {
      description: {
        story: 'With 200 archive pages, distant pages collapse behind an ellipsis — only the boundary pages and a window around the current page render.',
      },
    },
  },
  args: {
    currentPage: 47,
    totalPages: 200,
  },
};

export const ExpandedMode: Story = {
  parameters: {
    docs: {
      description: {
        story: '`compact={false}` always renders every page number — only sensible for small archives.',
      },
    },
  },
  args: {
    currentPage: 3,
    totalPages: 7,
    compact: false,
  },
};

export const NoPrevNext: Story = {
  args: {
    showPrevNext: false,
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Page state lives in the parent — useful for syncing with data fetching or a router.',
      },
    },
  },
  render: () => {
    const ControlledDemo = () => {
      const [page, setPage] = useState(1);
      return (
        <div className="flex flex-col gap-3">
          <Pagination currentPage={page} totalPages={30} onPageChange={setPage} />
          <p className="text-xs text-muted">Loading archive shard {page} of 30…</p>
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
        <h4 className="text-secondary font-semibold mb-3">Primary (default)</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} variant="primary" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Secondary</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} variant="secondary" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Accent</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} variant="accent" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="sm" />
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="md" />
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="lg" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled</h4>
        <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} disabled />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Compact collapsing (200 pages)</h4>
        <Pagination currentPage={47} totalPages={200} onPageChange={() => {}} />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Expanded (compact off, 7 pages)</h4>
        <Pagination currentPage={3} totalPages={7} onPageChange={() => {}} compact={false} />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">No Previous/Next</h4>
        <Pagination currentPage={3} totalPages={7} onPageChange={() => {}} showPrevNext={false} />
      </div>
    </div>
  ),
};
