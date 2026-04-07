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

If $ARGUMENTS is empty or malformed, ask the user for the type and description before editing the file.
