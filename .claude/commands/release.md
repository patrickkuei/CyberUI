Prepare a CyberUI release for version **$ARGUMENTS**.

The version argument must be a valid semver string (e.g. `1.4.0`, `2.0.0`). If no argument is given, ask the user for the version before proceeding.

Follow every step in order. **Do not commit or tag — only prepare the files and confirm with the user.**

---

## Step 1 — Validate the codebase is clean

Run: `npm run lint && npm run type-check && npm test -- --project=unit`

If anything fails, stop and report. Do not proceed until all checks pass.

---

## Step 2 — Bump version

Update the version string to `$ARGUMENTS` in:
1. `package.json` → `"version"` field
2. `src/index.ts` → `export const version = "..."` line
3. `bin/init.js` → `let version = '...'` fallback (used only if `package.json` can't be read)
4. `bin/usage-content.js` → `getUsageContent(version = '...')` default param

Then run `npm install` (no package changes expected — this just re-syncs `package-lock.json`'s version fields to match `package.json`). Confirm `git diff package-lock.json` only shows version-string changes, not dependency changes, before proceeding.

---

## Step 3 — Update CHANGELOG.md

Move all items from the `## [Unreleased]` section into a new dated section:

```markdown
## [$ARGUMENTS] - YYYY-MM-DD
```

Use today's date. If there is no `[Unreleased]` section or it is empty, ask the user to describe what changed before continuing.

---

## Step 4 — Build the library

Run: `npm run build`

Confirm the build succeeds and `dist/` is populated. Report the output file sizes for `dist/index.es.js` and `dist/cyberui-2045.css`.

---

## Step 5 — Pre-publish dry run

Run: `npm pack --dry-run`

Show the list of files that would be included in the npm package. Verify that:
- `dist/index.es.js`, `dist/index.js`, `dist/index.d.ts`, `dist/cyberui-2045.css` are included
- No `src/`, `node_modules/`, `.storybook/`, or test files are included

---

## Step 6 — Summary

Print a release summary:
- Version: `$ARGUMENTS`
- Files changed: package.json, package-lock.json, src/index.ts, bin/init.js, bin/usage-content.js, CHANGELOG.md
- Build: PASS/FAIL
- Pack check: PASS/FAIL

Then ask: **"Ready to commit and tag? Reply yes to proceed, or tell me what to fix."**

If the user confirms, run:
```bash
git add package.json package-lock.json src/index.ts bin/init.js bin/usage-content.js CHANGELOG.md
git commit -m "chore: release v$ARGUMENTS"
git tag v$ARGUMENTS
```
Then remind the user to push: `git push && git push --tags && npm publish`
