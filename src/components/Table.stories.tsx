import type { Meta, StoryObj } from '@storybook/react-vite';
import Table from './Table';
import type { TableColumn, TableRowData } from './Table';
import Badge from './Badge';

const OPERATIVE_COLUMNS: TableColumn[] = [
  { key: 'callsign', header: 'Callsign' },
  { key: 'sector', header: 'Sector' },
  {
    key: 'status',
    header: 'Status',
    align: 'center',
    render: (row) => (
      <Badge
        variant={row.status === 'Online' ? 'success' : row.status === 'Compromised' ? 'error' : 'secondary'}
        size="sm"
      >
        {row.status}
      </Badge>
    ),
  },
  { key: 'clearance', header: 'Clearance', align: 'right' },
];

const OPERATIVE_DATA: TableRowData[] = [
  { callsign: 'Ghost', sector: 'Chiba', status: 'Online', clearance: 'Level 5' },
  { callsign: 'Wraith', sector: 'Night City', status: 'Offline', clearance: 'Level 3' },
  { callsign: 'Case', sector: 'Freeside', status: 'Online', clearance: 'Level 4' },
  { callsign: 'Molly', sector: 'Sprawl', status: 'Compromised', clearance: 'Level 2' },
  { callsign: 'Armitage', sector: 'Villa Straylight', status: 'Online', clearance: 'Level 5' },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A cyberpunk-styled, semantic data table for lists of records — neon header row, hover-glow rows, and an optional alternating row tint.

Sorting, filtering, pagination, and virtualization are intentionally out of scope — pair with \`Pagination\` for paged data.

**Usage:**

\`\`\`tsx
import { Table } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

<Table
  columns={[
    { key: 'callsign', header: 'Callsign' },
    { key: 'status', header: 'Status', align: 'center' },
  ]}
  data={[
    { callsign: 'Ghost', status: 'Online' },
    { callsign: 'Wraith', status: 'Offline' },
  ]}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`columns\` | \`TableColumn[]\` | ✅ | - | Column definitions, in display order |
| \`data\` | \`TableRowData[]\` | ✅ | - | Row data, one entry per rendered row |
| \`getRowId\` | \`(row, index) => string \\| number\` | ❌ | index | Stable row key accessor |
| \`variant\` | \`'default' \\| 'striped'\` | ❌ | \`'default'\` | Flat rows vs. alternating tint |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Cell padding/text size (supports responsive values) |
| \`caption\` | \`string\` | ❌ | - | Visible caption above the table |
| \`ariaLabel\` | \`string\` | ❌ | - | Accessible name when no \`caption\` is set |
| \`emptyMessage\` | \`ReactNode\` | ❌ | \`'No data available.'\` | Shown in place of rows when \`data\` is empty |
| \`onRowClick\` | \`(row, index) => void\` | ❌ | - | Makes rows keyboard-focusable and clickable |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the outer scroll container |

**Keyboard:** when \`onRowClick\` is set, rows are focusable (\`Tab\`) and activate on \`Enter\`/\`Space\`.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'striped'],
      description: 'Flat rows vs. alternating row tint',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Cell padding/text size',
    },
  },
  args: {
    columns: OPERATIVE_COLUMNS,
    data: OPERATIVE_DATA,
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    caption: 'Active Field Operatives',
  },
};

export const Striped: Story = {
  args: {
    variant: 'striped',
    caption: 'Active Field Operatives',
  },
};

export const Small: Story = {
  args: { size: 'sm', caption: 'Active Field Operatives' },
};

export const Medium: Story = {
  args: { size: 'md', caption: 'Active Field Operatives' },
};

export const Large: Story = {
  args: { size: 'lg', caption: 'Active Field Operatives' },
};

export const Clickable: Story = {
  args: {
    caption: 'Active Field Operatives — select a row to pull the dossier',
    onRowClick: (row) => alert(`Pulling dossier for ${row.callsign}...`),
  },
  parameters: {
    docs: {
      description: {
        story: 'Passing `onRowClick` makes every row keyboard-focusable (Tab) and activatable via Enter/Space, with a hover-glow affordance.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    data: [],
    caption: 'Active Field Operatives',
    emptyMessage: 'No operatives currently deployed.',
  },
};

export const Disabled: Story = {
  args: {
    caption: 'Active Field Operatives (read-only)',
    variant: 'striped',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table has no interactive-by-default state — it only becomes interactive when `onRowClick` is passed. This is the base read-only rendering.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-4 bg-base">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Default</h4>
        <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA} caption="Active Field Operatives" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Striped</h4>
        <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA} variant="striped" caption="Active Field Operatives" />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-4">
          <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA.slice(0, 2)} size="sm" />
          <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA.slice(0, 2)} size="md" />
          <Table columns={OPERATIVE_COLUMNS} data={OPERATIVE_DATA.slice(0, 2)} size="lg" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Empty</h4>
        <Table columns={OPERATIVE_COLUMNS} data={[]} emptyMessage="No operatives currently deployed." />
      </div>
    </div>
  ),
};
