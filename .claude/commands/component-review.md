Review the CyberUI component **$ARGUMENTS** against all quality gates.

Read `src/components/$ARGUMENTS.tsx`, `src/components/$ARGUMENTS.stories.tsx`, and `src/components/$ARGUMENTS.test.tsx` (if they exist) before proceeding.

---

## Checklist

Go through each item. For each one, output **PASS**, **WARN**, or **FAIL** with a brief note.

### TypeScript
- [ ] No `any` types
- [ ] No `@ts-ignore` / `@ts-expect-error` without justification comment
- [ ] All props defined in an exported `interface ${ARGUMENTS}Props`
- [ ] JSDoc on the interface and component function

### Responsiveness
- [ ] Size prop (if applicable) uses `ResponsiveValue<'sm' | 'md' | 'lg'>`
- [ ] `getResponsiveClasses` / `RESPONSIVE_SIZE_MAPS` used (not hardcoded class strings)
- [ ] Size map entry exists in `src/utils/responsive.ts` if needed

### Accessibility
- [ ] Interactive elements have `role` or semantic HTML
- [ ] `aria-label` or `aria-labelledby` where needed
- [ ] `aria-disabled` matches `disabled` prop
- [ ] Keyboard handler (`onKeyDown`) present for click-triggerable elements
- [ ] Focus styles present (Tailwind `focus:ring-*` or equivalent)

### Styling
- [ ] Only Tailwind v4 classes + existing CSS variable tokens (no hardcoded colors, no inline styles)
- [ ] No new external style dependencies

### Stories (`$ARGUMENTS.stories.tsx`)
- [ ] `tags: ['autodocs']` present
- [ ] `docs.description.component` has usage code block + props table
- [ ] Stories cover: Default, all variants, sizes (sm/md/lg), disabled state
- [ ] `AllVariants` render story exists
- [ ] Copy is cyberpunk-flavored

### Tests (`$ARGUMENTS.test.tsx`)
- [ ] Renders without crashing
- [ ] Variant/state classes verified
- [ ] Interaction handlers tested
- [ ] Disabled state prevents handler invocation
- [ ] Responsive size prop tested

### Exports
- [ ] Default component exported from `src/components/$ARGUMENTS.tsx`
- [ ] `${ARGUMENTS}Props` (and any other public types) re-exported from `src/components/index.ts`

---

## Output format

1. List every checklist item with PASS / WARN / FAIL.
2. Under "Issues Found", enumerate only WARN and FAIL items with specific line numbers and what needs to change.
3. Under "Recommended Fixes", provide the exact code changes needed for any FAIL items.
4. Ask the user if they want you to apply the fixes.
