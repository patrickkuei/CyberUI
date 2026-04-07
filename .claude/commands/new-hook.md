Scaffold a new CyberUI hook named **$ARGUMENTS**.

The hook name should follow the `useCyber*` convention if it's a CyberUI-specific hook (e.g. `useCyberTooltip`), or a plain `use*` name if it's a generic utility hook.

Follow every step in order.

---

## Step 1 — Implement `src/hooks/$ARGUMENTS.ts`

Structure:
```ts
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Options for $ARGUMENTS.
 */
export interface ${ARGUMENTS}Options {
  // Define options
}

/**
 * Return type of $ARGUMENTS.
 */
export interface ${ARGUMENTS}Return {
  // Define return shape
}

/**
 * [Description of what this hook does and when to use it.]
 *
 * @example
 * const result = $ARGUMENTS({ ... });
 */
export const $ARGUMENTS = (options: ${ARGUMENTS}Options): ${ARGUMENTS}Return => {
  // implementation
};
```

Rules:
- Export the hook as a named export (not default).
- Export the Options and Return interfaces for consumers.
- Clean up any event listeners, timers, or subscriptions in `useEffect` cleanup.
- No `any`. Strict TypeScript.
- No new runtime `npm` dependencies.

---

## Step 2 — Export from `src/components/index.ts`

Add to the hooks section:
```ts
export { $ARGUMENTS } from '../hooks/$ARGUMENTS';
export type { ${ARGUMENTS}Options, ${ARGUMENTS}Return } from '../hooks/$ARGUMENTS';
```

---

## Step 3 — Create `src/hooks/$ARGUMENTS.stories.tsx` (if the hook has visual output)

If the hook produces visual/DOM effects, create a Storybook story that demonstrates it. Follow the pattern in `src/hooks/useCyberScrollbar.stories.tsx`. If purely computational with no visual output, skip this step and note why.

---

## Step 4 — Validate

Run: `npm run lint && npm run type-check`

Fix all errors. Report the result.
