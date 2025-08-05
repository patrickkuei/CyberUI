import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a}from"./Card-CJixjOY9.js";import"./iframe-iLubtcHH.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-BMEiTPX2.js";const x=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),u=()=>e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"})}),f=()=>e.jsxs("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:[e.jsx("path",{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}),e.jsx("path",{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}),e.jsx("path",{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"})]}),y={title:"Components/Card",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed card component with multiple variants and customizable styling.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Card } from 'cyberui-2045';

// With cyberui-2045 theme (recommended)
import 'cyberui-2045/styles.css';

<Card>
  <p className="text-default">Basic card content</p>
</Card>

<Card title="Neural Interface Status">
  <p className="text-default">System operational and ready for commands.</p>
</Card>

// Different variants with theme
<Card variant="accent">
  <p className="text-default">Enhanced with hover effects</p>
</Card>

<Card variant="small">
  <p className="text-default">Compact card for metrics</p>
</Card>

// Different sizes
<Card size="sm">
  <p className="text-default">Small card with compact spacing</p>
</Card>

<Card size="lg">
  <p className="text-default">Large card with generous spacing</p>
</Card>

// Responsive sizes
<Card size={{ base: 'sm', lg: 'lg' }}>
  <p className="text-default">Responsive card sizing</p>
</Card>

<Card size={{ base: 'md', md: 'sm', xl: 'lg' }}>
  <p className="text-default">Multi-breakpoint card</p>
</Card>

// Advanced usage with cyberpunk theme
<Card
  variant="accent"
  title="Interactive Panel"
  titleBorder={false}
  className="w-96"
>
  <div className="space-y-4">
    <p className="text-default">Custom content with enhanced styling</p>
    <div className="flex justify-between">
      <span className="text-muted">Status:</span>
      <span className="text-primary font-mono">ACTIVE</span>
    </div>
  </div>
</Card>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`variant\` | \`'default' \\| 'accent' \\| 'small'\` | ❌ | \`'default'\` | Card style variant |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>\` | ❌ | \`'md'\` | Card size (supports responsive values) |
| \`title\` | \`string\` | ❌ | - | Card title text |
| \`titleBorder\` | \`boolean\` | ❌ | \`true\` | Whether to show border under title |
| \`children\` | \`React.ReactNode\` | ✅ | - | Card content |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes |

All standard HTML div props are also supported.
`}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","accent","small"],description:"Card style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Card size (supports responsive values)"},title:{control:"text",description:"Card title text"},titleBorder:{control:"boolean",description:"Whether to show border under title"},className:{control:"text",description:"Additional CSS classes"}}},s={render:t=>e.jsx(a,{...t,children:e.jsx("p",{className:"text-default",children:"This is a default card with standard cyberpunk styling. Perfect for main content sections and general information display."})}),args:{variant:"default"}},r={render:t=>e.jsx(a,{...t,children:e.jsx("p",{className:"text-default",children:"This is an accent card with enhanced visual emphasis and hover effects. Use for interactive or important content that needs to stand out."})}),args:{variant:"accent"}},n={render:t=>e.jsx(a,{...t,children:e.jsx("p",{className:"text-default",children:"Compact card variant designed for metrics, status indicators, or secondary information that needs minimal space."})}),args:{variant:"small"}},i={render:t=>e.jsx(a,{...t,children:e.jsx("p",{className:"text-default",children:"System operational and ready for neural link commands. All subsystems are functioning within normal parameters."})}),args:{title:"Neural Interface Status"}},c={render:t=>e.jsx(a,{...t,children:e.jsx("p",{className:"text-default",children:"This card has a title without the bottom border for a cleaner, more minimal appearance."})}),args:{title:"Clean Interface",titleBorder:!1}},d={render:t=>e.jsx(a,{...t,children:e.jsx("p",{className:"text-default",children:"Enhanced accent card with title. Features hover effects and visual emphasis for important interactive content."})}),args:{variant:"accent",title:"Interactive Dashboard"}},l={render:t=>e.jsx(a,{...t,children:e.jsx("p",{className:"text-default",children:"Compact card with title, perfect for displaying key metrics or status information in a minimal space."})}),args:{variant:"small",title:"Metric"}},o={render:()=>e.jsx(a,{title:"System Status",className:"w-80",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"text-primary",children:e.jsx(x,{})}),e.jsx("span",{className:"text-default",children:"Security Level"})]}),e.jsx("span",{className:"text-primary font-mono font-bold",children:"MAXIMUM"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"text-secondary",children:e.jsx(u,{})}),e.jsx("span",{className:"text-default",children:"Neural Processor"})]}),e.jsx("span",{className:"text-secondary font-mono",children:"ONLINE"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"text-accent",children:e.jsx(f,{})}),e.jsx("span",{className:"text-default",children:"Data Integrity"})]}),e.jsx("span",{className:"text-primary font-mono",children:"98.7%"})]})]})})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-6 bg-base min-w-96",children:[e.jsx("h4",{className:"text-secondary font-semibold",children:"Card Variants"}),e.jsx(a,{title:"Default Card",children:e.jsx("p",{className:"text-default",children:"Standard card styling with neutral background and basic border. Perfect for general content and information display."})}),e.jsx(a,{variant:"accent",title:"Accent Card",children:e.jsx("p",{className:"text-default",children:"Enhanced card with accent border, shadow effects, and hover animations. Use for interactive or highlighted content."})}),e.jsx(a,{variant:"small",title:"Small Card",children:e.jsx("p",{className:"text-default",children:"Compact variant with reduced padding and smaller dimensions. Ideal for metrics, status indicators, or secondary info."})})]})},p={render:()=>e.jsxs(a,{title:"Cyberpunk Dashboard",className:"w-96",children:[e.jsx("p",{className:"text-default mb-6",children:"Neural interface control panel with system metrics and nested components:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"accent",title:"Connection Status",titleBorder:!1,children:e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("div",{className:"text-lg font-semibold text-default",children:"Neural Link"}),e.jsx("div",{className:"text-primary font-mono text-xl",children:"CONNECTED"}),e.jsx("div",{className:"text-xs text-muted",children:"Latency: 0.3ms"})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(a,{variant:"small",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-primary font-mono font-bold text-2xl",children:"98%"}),e.jsx("div",{className:"text-muted text-xs",children:"CPU Usage"})]})}),e.jsx(a,{variant:"small",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-secondary font-mono font-bold text-2xl",children:"2.1GB"}),e.jsx("div",{className:"text-muted text-xs",children:"Memory"})]})})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <p className="text-default">
        This is a default card with standard cyberpunk styling. Perfect for main content sections and general information display.
      </p>
    </Card>,
  args: {
    variant: 'default'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <p className="text-default">
        This is an accent card with enhanced visual emphasis and hover effects. Use for interactive or important content that needs to stand out.
      </p>
    </Card>,
  args: {
    variant: 'accent'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <p className="text-default">
        Compact card variant designed for metrics, status indicators, or secondary information that needs minimal space.
      </p>
    </Card>,
  args: {
    variant: 'small'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <p className="text-default">
        System operational and ready for neural link commands. All subsystems are functioning within normal parameters.
      </p>
    </Card>,
  args: {
    title: 'Neural Interface Status'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <p className="text-default">
        This card has a title without the bottom border for a cleaner, more minimal appearance.
      </p>
    </Card>,
  args: {
    title: 'Clean Interface',
    titleBorder: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <p className="text-default">
        Enhanced accent card with title. Features hover effects and visual emphasis for important interactive content.
      </p>
    </Card>,
  args: {
    variant: 'accent',
    title: 'Interactive Dashboard'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <p className="text-default">
        Compact card with title, perfect for displaying key metrics or status information in a minimal space.
      </p>
    </Card>,
  args: {
    variant: 'small',
    title: 'Metric'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card title="System Status" className="w-80">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <ShieldIcon />
            </div>
            <span className="text-default">Security Level</span>
          </div>
          <span className="text-primary font-mono font-bold">MAXIMUM</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-secondary">
              <CPUIcon />
            </div>
            <span className="text-default">Neural Processor</span>
          </div>
          <span className="text-secondary font-mono">ONLINE</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-accent">
              <DatabaseIcon />
            </div>
            <span className="text-default">Data Integrity</span>
          </div>
          <span className="text-primary font-mono">98.7%</span>
        </div>
      </div>
    </Card>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-base min-w-96">
      <h4 className="text-secondary font-semibold">Card Variants</h4>

      <Card title="Default Card">
        <p className="text-default">
          Standard card styling with neutral background and basic border. Perfect for general content and information display.
        </p>
      </Card>

      <Card variant="accent" title="Accent Card">
        <p className="text-default">
          Enhanced card with accent border, shadow effects, and hover animations. Use for interactive or highlighted content.
        </p>
      </Card>

      <Card variant="small" title="Small Card">
        <p className="text-default">
          Compact variant with reduced padding and smaller dimensions. Ideal for metrics, status indicators, or secondary info.
        </p>
      </Card>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card title="Cyberpunk Dashboard" className="w-96">
      <p className="text-default mb-6">Neural interface control panel with system metrics and nested components:</p>

      <div className="space-y-4">
        <Card variant="accent" title="Connection Status" titleBorder={false}>
          <div className="text-center space-y-2">
            <div className="text-lg font-semibold text-default">Neural Link</div>
            <div className="text-primary font-mono text-xl">CONNECTED</div>
            <div className="text-xs text-muted">Latency: 0.3ms</div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card variant="small">
            <div className="text-center">
              <div className="text-primary font-mono font-bold text-2xl">98%</div>
              <div className="text-muted text-xs">CPU Usage</div>
            </div>
          </Card>
          <Card variant="small">
            <div className="text-center">
              <div className="text-secondary font-mono font-bold text-2xl">2.1GB</div>
              <div className="text-muted text-xs">Memory</div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
}`,...p.parameters?.docs?.source}}};const j=["Default","Accent","Small","WithTitle","WithTitleNoBorder","AccentWithTitle","SmallWithTitle","SystemStatus","AllVariants","DashboardExample"];export{r as Accent,d as AccentWithTitle,m as AllVariants,p as DashboardExample,s as Default,n as Small,l as SmallWithTitle,o as SystemStatus,i as WithTitle,c as WithTitleNoBorder,j as __namedExportsOrder,y as default};
