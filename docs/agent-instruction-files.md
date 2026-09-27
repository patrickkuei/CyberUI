# Agent instruction files: what each tool supports

_Researched 2026-09-27 from each tool's official documentation (linked below). Tools change quickly; re-check the linked page before relying on a detail. This is the reasoning behind how `npx cyberui-2045 init` lays out its guide._

## Summary

| Tool | Instruction file(s) | Can one file pull in another? | Own-file alternative |
|---|---|---|---|
| **Claude Code** | `CLAUDE.md`, `.claude/CLAUDE.md`; also reads `AGENTS.md` (see below) | **Yes**: `@path/to/file` | none needed |
| **Gemini CLI** | `GEMINI.md` (global, workspace, and just-in-time from subdirectories); the file name is configurable via `context.fileName` | **Yes**: `@./file.md` | none needed |
| **Cursor** | `.cursor/rules/*.mdc`, `AGENTS.md`; legacy `.cursorrules` (still read) | **No** rule-to-rule import. A rule can `@filename` a source file to add it to context. | `.cursor/rules/NAME.mdc` |
| **GitHub Copilot** | `.github/copilot-instructions.md`, `.github/instructions/NAME.instructions.md` (`applyTo` frontmatter), `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` | **No** `@` import. VS Code docs say to reference files with Markdown links (a reference, not an include). | `.github/instructions/NAME.instructions.md` |
| **Codex / `AGENTS.md`** | `AGENTS.md`, `AGENTS.override.md`, concatenated from the repo root down to the working directory; 32 KiB combined limit by default | **No** | none |

## Claude Code

- `CLAUDE.md` files can import other files with `@path/to/import`. Imported files are expanded and loaded at launch, so imports help organisation, **not** context size.
- Relative paths resolve relative to the file that contains the import, not the working directory. Imports can nest up to four hops deep.
- Import parsing skips Markdown code spans and fenced code blocks, so the import line must be plain text.
- An import that resolves **outside** the working directory (for example a hoisted `node_modules`) shows an approval dialog the first time. A project-relative path such as `.claude/cyberui.md` needs no approval.
- Size: aim for under 200 lines per `CLAUDE.md` (longer files use more context and reduce adherence). Each `@` import counts as its own file for that warning.
- `AGENTS.md`: since v2.1.277 Claude Code reads `AGENTS.md` directly, **but only when there is no `CLAUDE.md`** in the working directory or above it. A `CLAUDE.md` containing `@AGENTS.md` is the documented way to share one file with other tools. Claude also expands `@path` imports inside an `AGENTS.md` it reads. Other tools do not, so an `@` line in `AGENTS.md` only works for Claude.
- Source: https://code.claude.com/docs/en/memory

## Gemini CLI

- `GEMINI.md` supports `@file.md` imports, with relative and absolute paths. The documented example is `@./components/instructions.md`.
- The import processor ignores `@` inside code blocks and code spans, detects circular imports, has a configurable maximum depth (default 5), and only allows imports from permitted directories. A missing file fails gracefully with an error comment.
- The file name is configurable (`context.fileName` in `settings.json`), for example to `AGENTS.md`.
- Sources: https://raw.githubusercontent.com/google-gemini/gemini-cli/main/docs/cli/gemini-md.md and https://raw.githubusercontent.com/google-gemini/gemini-cli/main/docs/reference/memport.md

## Cursor

- Project rules live in `.cursor/rules` as `.mdc` files with frontmatter (`description`, `globs`, `alwaysApply`). The docs describe four application types: Always Apply, Apply Intelligently, Apply to Specific Files, Apply Manually. Keep rules under 500 lines.
- Cursor also reads `AGENTS.md` (nested files supported).
- The rules page does not describe a way for one rule to import another; `@filename.ts` in a rule adds that file to the context.
- `.cursorrules` in the project root is the legacy format, deprecated since Cursor 0.43 in favour of `.cursor/rules`, but Cursor still reads an existing one. (Deprecation status comes from third-party summaries; the current rules page does not mention `.cursorrules`.)
- Source: https://cursor.com/docs/context/rules

## GitHub Copilot

- Repository-wide: `.github/copilot-instructions.md`. Path-specific: `.github/instructions/NAME.instructions.md` with `applyTo` frontmatter. Copilot also reads `AGENTS.md`, `CLAUDE.md` and `GEMINI.md`.
- No import syntax is documented. VS Code says to "use Markdown links" to reference files or URLs, with relative paths resolved from the instructions file.
- Keep instructions short and self-contained.
- Sources: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions and https://code.visualstudio.com/docs/copilot/customization/custom-instructions

## Codex and the `AGENTS.md` format

- Codex looks for `AGENTS.override.md`, then `AGENTS.md`, then any configured fallback names, in each directory from the project root down to the working directory. Files are concatenated root-first, and it stops adding files once the combined size reaches `project_doc_max_bytes` (32 KiB by default).
- The format defines no import or include syntax. Nested files: the nearest one wins.
- Sources: https://learn.chatgpt.com/docs/agent-configuration/agents-md and https://agents.md

## What `npx cyberui-2045 init` does with this

The guide is about 150 lines. Each tool gets it in the way that tool actually supports:

| Target | Default ("own file") | With `--inline` |
|---|---|---|
| `--claude` | guide in `.claude/cyberui.md`; `CLAUDE.md` gets a marked block containing `@.claude/cyberui.md` | guide pasted into `CLAUDE.md` inside the markers |
| `--gemini` | guide in `.gemini/cyberui.md`; `GEMINI.md` gets a marked block containing `@./.gemini/cyberui.md` | guide pasted into `GEMINI.md` inside the markers |
| `--cursor` | guide in `.cursor/rules/cyberui.mdc`, with `alwaysApply: true` frontmatter | guide pasted into `.cursorrules` inside the markers |
| `--copilot` | guide in `.github/instructions/cyberui.instructions.md`, with `applyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx,**/*.css"` frontmatter | guide pasted into `.github/copilot-instructions.md` inside the markers |
| `--agents` | guide pasted into `AGENTS.md` inside the markers (no alternative exists) | same |

`--all` does all five. `--dry-run` prints every file a run would write, with its content, and writes nothing. `--help` lists the flags. With no flags, `init` asks which tools to set up, then asks once "own file (recommended) or inline?" if any of them has an own-file mode.

The markers are `<!-- cyberui-2045:start -->` and `<!-- cyberui-2045:end -->`. The own files hold nothing but the guide (and, for Cursor and Copilot, the frontmatter above it), so `init` rewrites them whole. Every generated guide starts with a `## CyberUI (cyberui-2045 vX.Y.Z)` heading, right under the frontmatter where there is one.

Why these details:

- **Gemini import path.** Gemini CLI only allows imports from inside the project root, which it finds by looking for `.git` upwards (`validateImportPath` and `findProjectRoot` in the Memory Import Processor). `.gemini/cyberui.md` next to `GEMINI.md` is inside it. The `@./` form is the one the Gemini docs use in every relative example.
- **Cursor frontmatter.** `alwaysApply: true` is the "Always Apply" rule type, so there are no `globs`. The Cursor docs say that with `alwaysApply: true` both `globs` and `description` are ignored; the description is there for people reading the file. A plain `.md` file in `.cursor/rules` is ignored because it has no frontmatter, hence `.mdc`.
- **Copilot `applyTo`.** Comma-separated globs relative to the repository root, as in GitHub's `"**/*.ts,**/*.tsx"` example. The guide is about writing React code and CSS token overrides, so it covers script and stylesheet files. VS Code attaches it when the agent creates or modifies a matching file. A Copilot chat that touches no such file does not get the guide; `--inline` puts it in the repository-wide `.github/copilot-instructions.md`, which every request gets.

Re-running `init` is safe:

- An up-to-date file is reported `Unchanged` and not rewritten, including one checked out with CRLF line endings. Writes keep a file's existing line endings.
- After an upgrade, the own-file mode rewrites only the guide file; the import block in `CLAUDE.md` or `GEMINI.md` is left alone.
- **Migration from the inline guide** (what older versions of `init` wrote): in `CLAUDE.md` and `GEMINI.md` the inline block is replaced by the import block (`Migrated`). In `.cursorrules` and `.github/copilot-instructions.md` the block is taken out once the rule file is written (`Removed`), and the file is deleted (`Deleted`) only if nothing else was in it. Along with the block, `init` takes out its line break and the blank line next to it; if the block was at the end of the file, trailing blank lines and spaces before it go too. Nothing else in the file changes, and `--dry-run` lists the exact lines it would take out and the start of what stays.
- **Where a block goes**: replacing a block changes only what is between the markers. Appending a new one trims trailing blank lines and spaces at the end of the file and puts one blank line before the block.
- **The other way round**, `--inline` while an own file exists, writes the inline block and prints a note about the own file. It does not delete it. For Cursor and Copilot the own file is still read, so the tool would get the guide twice until you delete it.
- **Broken markers**: a start marker without an end marker (or the other way round, or the end marker first) is never guessed at. `init` skips that tool, writes none of its files, says which file to fix, and exits with code 1. An empty block (`start` then `end` with nothing between) is filled.

Commit the generated guide file. If the folder holding it is gitignored, teammates and CI get a dangling import (Claude, Gemini) or miss the rules file (Cursor, Copilot).
