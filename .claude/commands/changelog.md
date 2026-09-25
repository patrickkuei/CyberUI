Add a CHANGELOG entry for the current unreleased work.

Argument format: `<type> <description>`

Where `<type>` is one of: `added`, `changed`, `fixed`, `deprecated`, `removed`, `security`

Example: `/changelog added Tooltip component with cyberpunk hover effects`

---

Read `CHANGELOG.md`. Find or create the `## [Unreleased]` section at the top (below the header). Add the entry under the correct subsection (`### Added`, `### Changed`, `### Fixed`, etc.), creating the subsection if it doesn't exist.

Format:
```markdown
- **ComponentName / Feature** — $ARGUMENTS (description part)
```

Use bold for the component or feature name. Keep the description concise and factual.

Always add a new bullet, even for a change related to an existing one. Never append another sentence onto an existing bullet for a distinct change — that's how a single entry grows into one unreadable paragraph covering several unrelated things, which is exactly what happened to the `useDialogBehavior` entry across several follow-up fixes before it got split back apart. A follow-up fix to something already logged gets its own bullet, not a tacked-on clause.

If $ARGUMENTS is empty or malformed, ask the user for the type and description before editing the file.
