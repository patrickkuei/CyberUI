Scaffold a complete new CyberUI component named **$ARGUMENTS**.

Follow every step below in order. Do not skip any step.

---

## Step 1 — Implement `src/components/$ARGUMENTS.tsx`

Use this exact structure:

```tsx
import React from 'react';
import type { ResponsiveValue } from '../utils/responsive';
import { getResponsiveClasses, RESPONSIVE_SIZE_MAPS } from '../utils/responsive';

/**
 * Props for the $ARGUMENTS component.
 */
export interface ${ARGUMENTS}Props {
  // Define props here — use ResponsiveValue<'sm' | 'md' | 'lg'> for size props
}

/**
 * [One-line description of what this component does in the cyberpunk theme.]
 *
 * @example
 * <$ARGUMENTS variant="primary">...</$ARGUMENTS>
 */
const $ARGUMENTS: React.FC<${ARGUMENTS}Props> = ({
  // destructure with defaults
}) => {
  return (
    // JSX — use Tailwind v4 classes and existing CSS variables (bg-base, text-accent, border-secondary, etc.)
    // Add aria-* and keyboard handlers for interactive elements
  );
};

export default $ARGUMENTS;
```

Rules:
- No `any`. Strict TypeScript throughout.
- Responsive sizes: use `ResponsiveValue` + `getResponsiveClasses`. If this component needs a new size map, add it to `RESPONSIVE_SIZE_MAPS` in `src/utils/responsive.ts`.
- Styling: Tailwind v4 classes only. Use existing CSS variable tokens: `bg-base`, `bg-surface`, `text-accent`, `text-secondary`, `text-muted`, `text-error`, `border-accent`, `border-secondary`, `border-error`, `shadow-primary`, `shadow-secondary`, etc.
- Accessibility: `role`, `aria-label`, `aria-disabled`, keyboard (`onKeyDown`) for any interactive element.
- No new runtime `npm` dependencies.

---

## Step 2 — Export from `src/components/index.ts`

Add to the UI components section:
```ts
export { default as $ARGUMENTS } from './$ARGUMENTS';
export type { ${ARGUMENTS}Props } from './$ARGUMENTS';
```

---

## Step 3 — Create `src/components/$ARGUMENTS.stories.tsx`

Follow Button.stories.tsx as the canonical template. Include:
- `meta` with `title: 'Components/$ARGUMENTS'`, `tags: ['autodocs']`, full `docs.description.component` (markdown with usage code + props table), and `argTypes`
- Stories: `Default`, one per variant/state, `AllVariants` render story showing the full matrix
- Use cyberpunk-flavored copy for labels (e.g. "Execute Protocol", "Neural Link", "System Override")

---

## Step 4 — Create `src/components/$ARGUMENTS.test.tsx`

Use `@testing-library/react` + `vitest`. Cover:
- Renders without crashing
- Prop variants apply correct CSS classes
- Interactions (click, keyboard) fire handlers
- Disabled state prevents interaction
- Responsive size prop renders without error

---

## Step 5 — Validate

Run: `npm run lint && npm run type-check`

Fix any errors before finishing. Report the final lint + type-check result.
