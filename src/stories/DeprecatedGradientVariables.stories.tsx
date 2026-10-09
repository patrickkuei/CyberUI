import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

/**
 * Compatibility check for the deprecated `--gradient-*` variables, which
 * 2.6 code may still read. It checks the Storybook build of the stylesheet;
 * the `@theme static` declaration is guarded by `src/utils/tokens.test.ts`. Hidden from the sidebar (`!dev`); it runs in the
 * Storybook test project only.
 */
const meta: Meta = {
  title: 'Foundation/Deprecated gradient variables',
  tags: ['!dev', '!autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const StillDeclaredOnRoot: Story = {
  render: () => (
    // Inline style, so nothing in the stylesheet references the variable.
    <div
      className="h-12 w-64"
      style={{ backgroundImage: 'linear-gradient(var(--gradient-accent))' }}
      data-testid="legacy-gradient"
    >
      Neon Drift
    </div>
  ),
  play: async ({ canvasElement }) => {
    const root = getComputedStyle(document.documentElement);
    // The values stay `var(--color-*)`, resolved at :root.
    await expect(root.getPropertyValue('--gradient-primary').trim()).not.toBe('');
    await expect(root.getPropertyValue('--gradient-secondary').trim()).not.toBe('');
    await expect(root.getPropertyValue('--gradient-accent').trim()).not.toBe('');

    // Reading the variable as 2.6 code did paints accent to secondary.
    const el = canvasElement.querySelector('[data-testid="legacy-gradient"]');
    if (!el) throw new Error('legacy gradient element did not render');
    const image = getComputedStyle(el).backgroundImage;
    await expect(image).toContain('linear-gradient');
    // accent #fffb00 and secondary #00fff9.
    await expect(image).toContain('255, 251, 0');
    await expect(image).toContain('0, 255, 249');
  },
};
