import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A cyberpunk-styled slider for single-value or two-thumb range selection, with a neon-glow track fill matching LinearProgress's gradient treatment.

**Usage:**

\`\`\`tsx
import { Slider } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Single value (uncontrolled)
<Slider label="Brightness" defaultValue={40} showValue />

// Controlled range (two thumbs)
const [priceRange, setPriceRange] = useState<[number, number]>([50, 250]);
<Slider
  label="Price Range"
  min={0}
  max={500}
  step={5}
  value={priceRange}
  onValueChange={setPriceRange}
  formatValue={(v) => \`$\${v}\`}
  showValue
/>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`min\` | \`number\` | ❌ | \`0\` | Minimum allowed value |
| \`max\` | \`number\` | ❌ | \`100\` | Maximum allowed value |
| \`step\` | \`number\` | ❌ | \`1\` | Increment between values; also the Arrow key step |
| \`value\` | \`number \\| [number, number]\` | ❌ | - | Controlled value — a tuple renders a range slider |
| \`defaultValue\` | \`number \\| [number, number]\` | ❌ | \`min\` | Initial value, uncontrolled; determines single vs. range mode |
| \`onValueChange\` | \`(value: number \\| [number, number]) => void\` | ❌ | - | Fired on every drag move / keyboard adjustment |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'accent'\` | Track fill / thumb color |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<...>\` | ❌ | \`'md'\` | Track thickness and thumb diameter |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disables dragging and keyboard interaction |
| \`label\` | \`string\` | ❌ | - | Label rendered above the track |
| \`showValue\` | \`boolean\` | ❌ | \`false\` | Renders the current value(s) next to the label |
| \`formatValue\` | \`(value: number) => string\` | ❌ | \`String\` | Formats the value(s) shown by \`showValue\` |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes for the outer container |

**Keyboard:** \`ArrowRight\`/\`ArrowUp\` and \`ArrowLeft\`/\`ArrowDown\` step by \`step\`; \`PageUp\`/\`PageDown\` step by \`step * 10\`; \`Home\`/\`End\` jump to \`min\`/\`max\`. Range sliders expose two independently focusable thumbs.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number', description: 'Minimum allowed value' },
    max: { control: 'number', description: 'Maximum allowed value' },
    step: { control: 'number', description: 'Increment between values' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
      description: 'Track fill / thumb color',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Track thickness and thumb diameter',
    },
    disabled: { control: 'boolean', description: 'Disables dragging and keyboard interaction' },
    label: { control: 'text', description: 'Label rendered above the track' },
    showValue: { control: 'boolean', description: 'Renders the current value(s) next to the label' },
    onValueChange: { action: 'changed' },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Neural Interface Gain',
    defaultValue: 40,
    showValue: true,
  },
};

export const Primary: Story = {
  args: {
    label: 'Signal Boost',
    variant: 'primary',
    defaultValue: 65,
    showValue: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Coolant Flow',
    variant: 'secondary',
    defaultValue: 30,
    showValue: true,
  },
};

export const Range: Story = {
  args: {
    label: 'Firewall Threshold Window',
    min: 0,
    max: 500,
    step: 5,
    defaultValue: [50, 250],
    showValue: true,
    formatValue: (v: number) => `${v} MHz`,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-80">
      <Slider label="Small" size="sm" defaultValue={30} showValue />
      <Slider label="Medium (default)" size="md" defaultValue={50} showValue />
      <Slider label="Large" size="lg" defaultValue={70} showValue />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Reactor Output (locked)',
    disabled: true,
    defaultValue: 80,
    showValue: true,
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Value lives in the parent — useful for syncing with other controls or a form store.',
      },
    },
  },
  render: () => {
    const ControlledDemo = () => {
      const [volume, setVolume] = useState(55);
      return (
        <div className="flex flex-col gap-3 w-80">
          <Slider label="Audio Uplink Volume" value={volume} onValueChange={setVolume} showValue />
          <p className="text-xs text-muted">Current: {volume}</p>
        </div>
      );
    };
    return <ControlledDemo />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-4 bg-base w-96">
      <div>
        <h4 className="text-secondary font-semibold mb-3">Variants</h4>
        <div className="flex flex-col gap-6">
          <Slider label="Accent (default)" variant="accent" defaultValue={45} showValue />
          <Slider label="Primary" variant="primary" defaultValue={60} showValue />
          <Slider label="Secondary" variant="secondary" defaultValue={35} showValue />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Sizes</h4>
        <div className="flex flex-col gap-6">
          <Slider size="sm" defaultValue={30} />
          <Slider size="md" defaultValue={50} />
          <Slider size="lg" defaultValue={70} />
        </div>
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Range mode</h4>
        <Slider
          label="Firewall Threshold Window"
          min={0}
          max={500}
          step={5}
          defaultValue={[50, 250]}
          showValue
          formatValue={(v) => `${v} MHz`}
        />
      </div>
      <div>
        <h4 className="text-secondary font-semibold mb-3">Disabled</h4>
        <Slider label="Reactor Output (locked)" disabled defaultValue={80} showValue />
      </div>
    </div>
  ),
};
