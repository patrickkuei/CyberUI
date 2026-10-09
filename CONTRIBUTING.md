# Contributing to cyberui-2045

Thank you for your interest in contributing to CyberUI! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/CyberUI.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Start Storybook: `npm run storybook`

## Development Workflow

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Add tests if applicable
4. Update documentation/stories
5. Commit your changes: `git commit -m 'Add some amazing feature'`
6. Push to your branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Component Guidelines

### Creating New Components

1. Create the component in `src/components/`
2. Follow the existing naming conventions
3. Include TypeScript interfaces for props
4. Add Storybook stories in `.stories.tsx`
5. Export the component from `src/components/index.ts`

### Styling Guidelines

- Use CSS custom properties for theming
- Follow the cyberpunk design system
- Ensure components are responsive
- Include focus states for accessibility

### Example Component Structure

```tsx
import React from 'react';

interface ComponentProps {
  // Define your props here
}

const Component: React.FC<ComponentProps> = ({
  // props
}) => {
  return (
    // Component JSX
  );
};

export default Component;
```

## Testing

Run tests with:
```bash
npm test
```

## Code Style

- Use TypeScript
- Follow existing code patterns
- Use ESLint configuration
- Add comments for complex logic

## Compatibility and deprecation policy

CyberUI is used in production apps. **Nothing a current user's code can rely on may stop working, or stop compiling, in a minor or patch release.**

### What counts as public API

- Everything exported from `cyberui-2045`: components, hooks, utilities and types.
- Props and their types, including required versus optional, and the members of exported types and interfaces (`CarouselImageData`, `SelectOption`, ...).
- The CSS custom properties the shipped `cyberui-2045.css` declares (`--color-*`, `--gradient-*`, `--shadow-*`, ...), which consumers read with `var(--x)` and override.
- Documented behaviour: what the docs, JSDoc, stories and README say a component does, such as a default width or a keyboard interaction.

Internal class names are not public API, but see "What the guard does not cover" below.

### Deprecating and removing

1. **Never remove or narrow it in a minor or patch release.** That includes making a required prop optional (code that reads it breaks), making an optional prop required (callers that omit it break), and narrowing or reshaping a type.
2. **Deprecate first.** Keep the old API working and mark it in JSDoc, so editors strike it through:
   ```ts
   /** @deprecated Use `tone` instead. Removed in 3.0. */
   variant?: 'primary' | 'secondary';
   ```
   For a CSS variable or other behaviour with no JSDoc, say so in the stylesheet comment and in the docs/CHANGELOG `Deprecated` section. Add the replacement in the same release.
3. **Remove only in a major release**, and list it under the release's breaking changes in `CHANGELOG.md`.
4. **A behaviour change needs an opt-in prop.** If the new behaviour differs from what users have today (a default width, a default animation, a different DOM structure), keep the old behaviour as the default and add a prop to choose the new one.

### How it is enforced

`npm run check:compat` (run after `npm run build`) compares the build with `compat/baseline.json`, the public surface of the last released version, and fails when:

- an export is gone;
- a component or hook prop, or a member of an exported type, was removed, changed between required and optional, or changed its type text;
- an exported function or hook changed its signature;
- a library CSS custom property is no longer declared by the shipped CSS;
- `compat/consumer.fixture.tsx`, realistic code written the way 2.x users write it, no longer type-checks against the built declarations.

CI runs it in the bundle-size job, and `/release` runs it before tagging; a failure blocks the release. Its message names the exact item and how to fix it (deprecate and keep it).

- **Reviewed exceptions** go in `compat/allowed-changes.json` as `{ id, reason, since }`, where `id` is copied from the failure output. This is friction on purpose: a reviewer must be able to check the reason, and the owner decides. Entries that stop matching anything are reported so they get removed.
- When `package.json` has a higher major version than the baseline, breaking differences are printed as warnings instead, because a major release may break. Update the consumer fixture by hand for the new API.
- **Do not hand-edit `compat/baseline.json`.** The release procedure regenerates it with `npm run compat:baseline` after the check passes, so each released version becomes the baseline for the next cycle. The command refuses to run while the check fails. To add a pattern the guard missed, add a line to `compat/consumer.fixture.tsx`; never change an existing line to make the check pass.

### What the guard does not cover

It reads declarations, the component manifest and the shipped CSS. It cannot see:

- **Runtime behaviour**: default widths and sizes, timing, focus and keyboard handling, rendered DOM, what an event receives.
- **The `init` CLI**: its flags, prompts and the files it writes (`bin/`).
- **Class names** and the exact CSS rules behind them, and CSS custom properties that are not in the baseline (not declared by the shipped CSS or the `@theme` / `:root` source).
- Semantic equivalence: a type rewritten into an equivalent form is reported as a change, and needs a reviewed exception.

**Unit tests must pin that behaviour.** When you fix or change something a user can observe, add a test that fails if it regresses (for example, `LinearProgress` fills its container by default; `init` writes exactly these files). The backward-compatibility guard and the tests are two halves of the same promise.

## Pull Request Process

1. Ensure your code passes all checks, including `npm run build && npm run check:compat` if you touched anything exported, a prop, a type or the stylesheet
2. Update documentation if needed
3. Add/update Storybook stories
4. Fill out the PR template
5. Wait for review and address feedback

## Questions?

Feel free to open an issue for any questions or discussions!
