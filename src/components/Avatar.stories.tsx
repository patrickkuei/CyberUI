import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A cyberpunk-themed circular avatar for operative profile images, comment threads, and team rosters. Falls back to glitch-style initials (or a custom icon) when there's no image, and can surface a glowing online/offline/away presence dot.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Avatar } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Image avatar
<Avatar src="/operatives/ghost.png" alt="Ghost" />

// With presence indicator
<Avatar src="/operatives/nyx.png" alt="Nyx" status="online" />

// No image — falls back to initials derived from alt
<Avatar alt="Case Pollard" size="lg" />

// Explicit initials (when alt isn't a name)
<Avatar alt="Anonymous fixer" initials="AF" />

// Sizes
<Avatar alt="Wintermute" size="sm" />
<Avatar alt="Wintermute" size="md" />
<Avatar alt="Wintermute" size="lg" />
<Avatar alt="Wintermute" size="xl" />

// Responsive size
<Avatar alt="Molly Millions" size={{ base: 'sm', lg: 'xl' }} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`src\` | \`string\` | ❌ | - | Image source URL |
| \`alt\` | \`string\` | ✅ | - | Accessible name; also the source for auto-derived initials |
| \`initials\` | \`string\` | ❌ | - | Explicit fallback initials, overrides initials derived from \`alt\` |
| \`fallbackIcon\` | \`React.ReactNode\` | ❌ | generic operative icon | Rendered when there's no image and no initials |
| \`status\` | \`'online' \\| 'offline' \\| 'away'\` | ❌ | - | Presence dot on the bottom-right edge |
| \`size\` | \`ResponsiveValue<'sm' \\| 'md' \\| 'lg' \\| 'xl'>\` | ❌ | \`'md'\` | Avatar diameter (supports responsive values) |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes on the outer container |
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: "Accessible name; also the source for auto-derived initials",
    },
    initials: {
      control: 'text',
      description: 'Explicit fallback initials',
    },
    status: {
      control: { type: 'select' },
      options: [undefined, 'online', 'offline', 'away'],
      description: 'Presence indicator dot',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Avatar diameter (supports responsive values)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const NEON_CITYSCAPE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" fill="#1a1a2e"/><rect x="20" y="40" width="24" height="88" fill="#ff005d"/><rect x="52" y="10" width="24" height="118" fill="#00fff9"/><rect x="84" y="60" width="24" height="68" fill="#fffb00"/></svg>`
  );

export const Default: Story = {
  args: {
    src: NEON_CITYSCAPE,
    alt: 'Ghost',
  },
};

export const FallbackInitials: Story = {
  name: 'Fallback: Initials',
  args: {
    alt: 'Case Pollard',
  },
};

export const FallbackIcon: Story = {
  name: 'Fallback: Icon',
  args: {
    alt: 'Unregistered operative',
    initials: '',
  },
};

export const StatusOnline: Story = {
  name: 'Status: Online',
  args: {
    src: NEON_CITYSCAPE,
    alt: 'Nyx',
    status: 'online',
  },
};

export const StatusAway: Story = {
  name: 'Status: Away',
  args: {
    alt: 'Molly Millions',
    status: 'away',
  },
};

export const StatusOffline: Story = {
  name: 'Status: Offline',
  args: {
    alt: 'Wintermute',
    status: 'offline',
  },
};

export const Sizes: Story = {
  name: 'Size Variants',
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="sm" />
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="md" />
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="lg" />
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="xl" />
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Broken Image → Falls Back',
  args: {
    src: 'https://broken.invalid/no-such-uplink.png',
    alt: 'Broken Uplink',
  },
};

export const RosterExample: Story = {
  name: 'Team Roster Example',
  render: () => (
    <div className="space-y-4 p-4 bg-surface rounded-lg">
      <h3 className="text-default font-semibold">Neural Link Roster:</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" status="online" />
          <span className="text-muted text-xs">Ghost</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="Molly Millions" status="away" />
          <span className="text-muted text-xs">Molly Millions</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="Wintermute" status="offline" />
          <span className="text-muted text-xs">Wintermute</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="Unregistered operative" initials="" status="online" />
          <span className="text-muted text-xs">Unknown</span>
        </div>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-default font-semibold mb-2">Sizes:</h3>
        <div className="flex items-end gap-4">
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="sm" />
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="md" />
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="lg" />
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="xl" />
        </div>
      </div>
      <div>
        <h3 className="text-default font-semibold mb-2">Fallbacks:</h3>
        <div className="flex items-end gap-4">
          <Avatar alt="Case Pollard" />
          <Avatar alt="Unregistered operative" initials="" />
        </div>
      </div>
      <div>
        <h3 className="text-default font-semibold mb-2">Status:</h3>
        <div className="flex items-end gap-4">
          <Avatar src={NEON_CITYSCAPE} alt="Nyx" status="online" />
          <Avatar alt="Molly Millions" status="away" />
          <Avatar alt="Wintermute" status="offline" />
        </div>
      </div>
    </div>
  ),
};
