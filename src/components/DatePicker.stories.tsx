import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A cyberpunk-styled single-date picker — a text-input trigger (matching Input's styling) that opens a keyboard-navigable calendar grid popover (matching Modal/Select's overlay treatment). Range selection is a natural follow-up once single-date selection is proven out.

**Usage:**

\`\`\`tsx
import { DatePicker } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Basic uncontrolled usage
<DatePicker label="Deployment Date" placeholder="Select a date..." />

// Controlled, bounded to the next 30 days
const [date, setDate] = React.useState<Date | null>(null);
<DatePicker
  label="Extraction Window"
  value={date}
  onValueChange={setDate}
  minDate={new Date()}
  maxDate={addDays(new Date(), 30)}
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`value\` | \`Date \\| null\` | ❌ | - | Controlled selected date |
| \`defaultValue\` | \`Date \\| null\` | ❌ | \`null\` | Initial selected date for uncontrolled usage |
| \`onValueChange\` | \`(date: Date \\| null) => void\` | ❌ | - | Fired when a day is selected |
| \`minDate\` | \`Date\` | ❌ | - | Earliest selectable date (inclusive) |
| \`maxDate\` | \`Date\` | ❌ | - | Latest selectable date (inclusive) |
| \`label\` | \`string\` | ❌ | - | Label rendered above the trigger |
| \`placeholder\` | \`string\` | ❌ | \`'Select a date...'\` | Placeholder shown when no date is selected |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost'\` | ❌ | \`'primary'\` | Trigger visual style |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Trigger height/padding (supports responsive values) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables the trigger and prevents the calendar from opening |
| \`helperText\` | \`string\` | ❌ | - | Helper text shown below the trigger |
| \`error\` | \`string\` | ❌ | - | Error message that overrides helper text |
| \`formatDate\` | \`(date: Date) => string\` | ❌ | ISO \`YYYY-MM-DD\` | Formats the selected date for display |
| \`ariaLabel\` | \`string\` | ❌ | \`'Choose date'\` | Accessible label for the calendar dialog |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the outer wrapper |

**Keyboard:** \`ArrowDown\`/\`Enter\`/\`Space\` on the trigger opens the calendar. Inside the grid, \`ArrowLeft\`/\`ArrowRight\` move focus by a day, \`ArrowUp\`/\`ArrowDown\` by a week, \`Home\`/\`End\` jump to the start/end of the focused week, \`PageUp\`/\`PageDown\` step a month, \`Enter\`/\`Space\` selects the focused day, and \`Escape\` closes the calendar and returns focus to the trigger.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Visual style of the trigger input',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the trigger input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the trigger and prevents the calendar from opening',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Deployment Date',
    placeholder: 'Select a date...',
  },
};

export const Primary: Story = {
  args: {
    label: 'Neural Sync Window',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Uplink Schedule',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Cold Storage Timestamp',
    variant: 'ghost',
  },
};

export const WithBoundedRange: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Days outside `minDate`/`maxDate` render dimmed and cannot be selected — here bounded to a 14-day extraction window starting today.',
      },
    },
  },
  render: () => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 14);
    return (
      <DatePicker
        label="Extraction Window"
        placeholder="Select an extraction date..."
        minDate={today}
        maxDate={maxDate}
      />
    );
  },
};

export const Small: Story = {
  args: { label: 'Recon Date', size: 'sm' },
};

export const Medium: Story = {
  args: { label: 'Recon Date', size: 'md' },
};

export const Large: Story = {
  args: { label: 'Recon Date', size: 'lg' },
};

export const WithError: Story = {
  args: {
    label: 'Handshake Expiry',
    error: 'Selected date has already lapsed',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Archive Purge Date',
    disabled: true,
    defaultValue: new Date(2045, 2, 14),
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Selected date lives in the parent — useful for syncing the picker with other UI state.',
      },
    },
  },
  render: () => {
    const Demo = () => {
      const [date, setDate] = useState<Date | null>(null);
      return (
        <div className="flex flex-col gap-3">
          <span className="text-xs text-muted">
            Selected: {date ? date.toDateString() : 'none'}
          </span>
          <DatePicker label="Neural Link Activation" value={date} onValueChange={setDate} />
        </div>
      );
    };
    return <Demo />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-8 bg-base max-w-2xl">
      <div>
        <h4 className="text-secondary font-semibold mb-4">Variants</h4>
        <div className="flex gap-6 flex-wrap items-start">
          <DatePicker label="Primary" variant="primary" />
          <DatePicker label="Secondary" variant="secondary" />
          <DatePicker label="Ghost" variant="ghost" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">Sizes</h4>
        <div className="flex gap-6 flex-wrap items-start">
          <DatePicker label="Small" size="sm" />
          <DatePicker label="Medium" size="md" />
          <DatePicker label="Large" size="lg" />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-4">States</h4>
        <div className="flex gap-6 flex-wrap items-start">
          <DatePicker label="With Error" error="Selected date has already lapsed" />
          <DatePicker label="Disabled" disabled defaultValue={new Date(2045, 2, 14)} />
        </div>
      </div>
    </div>
  ),
};
