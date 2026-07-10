# Routine: implement one "New component" issue end-to-end

## Goal

Find the **oldest open** GitHub issue titled `New component: <Name>`, implement
it fully per this repo's conventions, and open a PR. One issue, one run, one PR.
Do not start a second issue in the same run.

## Steps

1. **Pick the issue.**
   - List candidates: `gh issue list --repo patrickkuei/CyberUI --state open --label enhancement --search "New component" --json number,title,createdAt`, sorted `createdAt` ascending (oldest first).
   - For each candidate, derive `<slug>` = kebab-case of the component name (strip the `New component: ` prefix; if the title has a `/` separator like "Combobox / Autocomplete", use only the first name — e.g. `DropdownMenu` → `dropdown-menu`, `Combobox / Autocomplete` → `combobox`).
   - Skip the candidate if **either** is true (checked before touching it, not just at PR-creation time — a PR may already be open, merged, or its branch deleted post-merge):
     - a branch `feat/<slug>` already exists, local or remote: `git ls-remote --heads origin feat/<slug>`, or
     - any PR, in any state, already references this issue: `gh pr list --repo patrickkuei/CyberUI --state all --json number,headRefName,body` and check for `headRefName == feat/<slug>` OR a body match for `Closes #<N>` / `Fixes #<N>` / `Resolves #<N>` (word-boundary match on `<N>` — don't let `#1` match inside `#10`).
   - Take the first candidate that passes both checks. If none pass, stop — nothing to do.

2. **Read the issue.**
   `gh issue view <N> --repo patrickkuei/CyberUI` — the body has the required behavior (variants, keyboard nav, ARIA wiring, cyberpunk styling notes). Treat it as the spec.

3. **Create a feature branch off master.**
   `git checkout master && git pull && git checkout -b feat/<slug>` (using the same `<slug>` derived in step 1).

4. **Scaffold.**
   Use `/new-component <ComponentName>` to generate the component, stories, tests, and index export skeleton.

5. **Implement** following `CLAUDE.md` / `AGENT.md` conventions:
   - Tailwind v4 + CSS variable tokens only, no new style systems
   - Full JSDoc on every prop (types, `@default`, gotchas) — this is the library's main AI-friendliness channel, not optional polish
   - Keyboard handlers + ARIA attributes for all interactive elements (roving tabindex / listbox / focus-trap patterns as appropriate to the component)
   - Responsive props via `ResponsiveValue<T>` from `src/utils/responsive.ts` where applicable
   - Match existing variant-naming patterns already used by sibling components (e.g. reuse `Button`/`Badge` variant vocabulary where it makes sense) rather than inventing new ones
   - Strict TypeScript, no `any`, no unjustified `@ts-ignore`
   - If the issue's scope turns out to be genuinely large (e.g. Table, Combobox), it's fine to ship a narrower first slice — note the deferred scope explicitly in the PR body rather than blocking on a "complete" implementation

6. **Stories** (`*.stories.tsx`): Default + all variants + sizes + disabled + an `AllVariants` render story. Cyberpunk-flavored copy, not generic placeholder text (e.g. panel titles like "NEURAL LINK STATUS", not "Section 1").

7. **Tests** (`*.test.tsx`): render, interaction (click/keyboard), a11y attributes present, controlled/uncontrolled state if applicable.

8. **Wire up the manifest generator.**
   In `scripts/generate-manifest.js`, add the component to `CATEGORY_MAP` and write a one-line entry in `DOC_SUMMARIES`. Run `npm run docs:generate` — this regenerates the component tables in `CLAUDE.md`, `AGENT.md`, `README.md`, `public/llms.txt`, `bin/usage-content.js`, and `public/component-manifest.json`. Review the diff.

9. **Validate.**
   `npm run lint && npm run type-check && npm test -- --project=unit`. Fix anything red before continuing.

10. **Add a CHANGELOG entry.**
    Use `/changelog added <ComponentName> component` (or hand-edit the `[Unreleased]` section).

11. **Commit.**
    Stage the new component files, stories, tests, index export, manifest-generated doc changes, and CHANGELOG — one commit (this is a single logical addition, not several concerns to split).
    ```
    git add src/components/<ComponentName>.tsx src/components/<ComponentName>.stories.tsx src/components/<ComponentName>.test.tsx src/components/index.ts scripts/generate-manifest.js CLAUDE.md AGENT.md README.md public/llms.txt public/component-manifest.json bin/usage-content.js CHANGELOG.md
    git commit -m "feat: add <ComponentName> component"
    ```

12. **Push and open a PR.** Do not push to `master` directly — this is net-new feature work, not a solo-dev hotfix, and a PR lets CI (lint, type-check, unit tests, bundle-size guard) run before merge.

    ```
    git push -u origin feat/<slug>
    ```

    Open the PR with this template (fill every placeholder — this PR body is the only record of what happened, since the routine doesn't report back separately):

    ```
    gh pr create --title "feat: add <ComponentName> component" --body "Closes #<N>

    ## Summary
    - <what the component does, 1-2 sentences>
    - <notable design/API decisions, e.g. variant set chosen, why>
    - <deferred scope, if any — e.g. narrowed from the issue's full ask, and why>

    ## Changes
    - Added \`<ComponentName>\` (\`src/components/<ComponentName>.tsx\`)
    - Stories: Default, <variant list>, sizes, disabled, AllVariants
    - Tests: <what's covered>
    - Docs regenerated via \`npm run docs:generate\`

    ## Test plan
    - [x] npm run lint / type-check / test -- --project=unit all pass
    - [ ] Storybook: Default + variants + sizes + disabled + AllVariants render correctly
    - [ ] Keyboard nav + screen reader smoke test"
    ```

    Leave the manual-verification checklist items unchecked — they need a human with a browser, which this routine doesn't have.
