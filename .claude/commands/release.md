Prepare a CyberUI release for version **$ARGUMENTS**.

The version argument must be a valid semver string (e.g. `1.4.0`, `2.0.0`). If no argument is given, ask the user for the version before proceeding.

Follow every step in order. **Do not commit or tag — only prepare the files and confirm with the user.**

---

## Step 1 — Validate the codebase is clean

Run: `npm run lint && npm run type-check && npm test -- --project=unit`

If anything fails, stop and report. Do not proceed until all checks pass.

---

## Step 2 — Regenerate component docs

Run: `npm run docs:generate`

This regenerates `public/component-manifest.json` and the component table/list block in `CLAUDE.md`, `AGENT.md`, `README.md`, `public/llms.txt`, and `bin/usage-content.js` from the current component types.

Run `git diff CLAUDE.md AGENT.md README.md public/llms.txt bin/usage-content.js public/component-manifest.json` and show the user. If anything changed beyond what's expected from work done since the last release (e.g. a new component that was never regenerated), stop and ask before proceeding.

---

## Step 3 — Bump version

Update the version string to `$ARGUMENTS` in:
1. `package.json` → `"version"` field
2. `src/index.ts` → `export const version = "..."` line

(`bin/usage-content.js` has no version to bump: `init` passes it the installed `package.json` version.)

Then run `npm install` (no package changes expected — this just re-syncs `package-lock.json`'s version fields to match `package.json`). Confirm `git diff package-lock.json` only shows version-string changes, not dependency changes, before proceeding.

---

## Step 4 — Update CHANGELOG.md

Move all items from the `## [Unreleased]` section into a new dated section:

```markdown
## [$ARGUMENTS] - YYYY-MM-DD
```

Use today's date. If there is no `[Unreleased]` section or it is empty, ask the user to describe what changed before continuing.

---

## Step 5 — Build the library

Run: `npm run build`

Confirm the build succeeds and `dist/` is populated. Report the output file sizes for `dist/index.es.js` and `dist/cyberui-2045.css`.

---

## Step 6 — Backward-compatibility check (blocks the release)

Run: `npm run check:compat`

This compares the build from Step 5 with `compat/baseline.json` (the public surface of the last released version) and type-checks `compat/consumer.fixture.tsx` against the built declarations. Nothing a current user relies on may break in a minor or patch release (CONTRIBUTING.md, "Compatibility and deprecation policy").

- **Failure: the release is blocked. Do not tag, do not bump the baseline.** Stop and report every item the check names. The fix is to restore the old API and deprecate it (keep it working, mark it `@deprecated`), then rebuild and re-run. Only the owner may decide on an exception: a reviewed entry in `compat/allowed-changes.json` (id, reason, since), or releasing the change as a major version instead.
- **Pass:** continue. If the check printed warnings because `$ARGUMENTS` is a new major version, the breaks listed are the release's breaking changes: make sure CHANGELOG.md's section calls each one out, and update `compat/consumer.fixture.tsx` by hand so it compiles against the new API (otherwise the next minor release fails on it).
- Do not edit `compat/baseline.json` by hand, and do not use `--force` on the baseline update to get past a failure.

Then, only after the check passes, make this release the baseline for the next cycle:

Run: `npm run compat:baseline`

This regenerates `compat/baseline.json` from this build (version `$ARGUMENTS`) and refuses to run while the check would still fail. If `compat/allowed-changes.json` has entries that the new baseline makes obsolete, remove them. Run `git diff compat/` and show the user: the version line and any additions are expected; removals only in a major.

---

## Step 7 — Pre-publish dry run

Run: `npm pack --dry-run`

Show the list of files that would be included in the npm package. Verify that:
- `dist/index.es.js`, `dist/index.cjs`, `dist/index.d.ts`, `dist/cyberui-2045.css` are included
- No `src/`, `node_modules/`, `.storybook/`, `compat/`, or test files are included

---

## Step 8 — Summary

Print a release summary:
- Version: `$ARGUMENTS`
- Files changed: package.json, package-lock.json, src/index.ts, bin/init.js, bin/usage-content.js, public/component-manifest.json, CLAUDE.md, AGENT.md, README.md, public/llms.txt, CHANGELOG.md, compat/baseline.json (and compat/allowed-changes.json if entries were removed)
- Build: PASS/FAIL
- Compatibility check (`npm run check:compat`): PASS/FAIL (and whether the baseline was regenerated)
- Pack check: PASS/FAIL

Then ask: **"Ready to commit and tag? Reply yes to proceed, or tell me what to fix."**

If the user confirms, run:
```bash
git add package.json package-lock.json src/index.ts bin/init.js bin/usage-content.js public/component-manifest.json CLAUDE.md AGENT.md README.md public/llms.txt CHANGELOG.md compat/baseline.json compat/allowed-changes.json compat/consumer.fixture.tsx
git commit -m "chore: release v$ARGUMENTS"
git tag v$ARGUMENTS
```
Then remind the user to push: `git push && git push --tags && npm publish`
