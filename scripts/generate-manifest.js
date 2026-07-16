#!/usr/bin/env node
// Generates public/component-manifest.json from the library's TypeScript prop
// types + JSDoc (via react-docgen-typescript), then regenerates the marked
// component-table/list block inside each of the 5 doc files that would
// otherwise be hand-synced: CLAUDE.md, AGENT.md, README.md, public/llms.txt,
// bin/usage-content.js. Hand-written prose outside the markers is untouched.
//
// Run: npm run docs:generate

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { withCustomConfig } from 'react-docgen-typescript';
import { MANIFEST_MARKER_START, MANIFEST_MARKER_END, replaceMarkedBlock } from '../bin/markers.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Static metadata not derivable from the TS source ─────────────────────────

const CATEGORY_ORDER = ['Forms', 'Layout', 'Feedback', 'Progress', 'Navigation', 'Typography', 'Display', 'Media'];

const CATEGORY_MAP = {
  Button: 'Forms', Input: 'Forms', Select: 'Forms', Toggle: 'Forms', Checkbox: 'Forms', FormField: 'Forms',
  Card: 'Layout', Modal: 'Layout', Divider: 'Layout', Accordion: 'Layout',
  Notification: 'Feedback', Badge: 'Feedback', Skeleton: 'Feedback', Tooltip: 'Feedback',
  CircularProgress: 'Progress', LinearProgress: 'Progress', SegmentedProgress: 'Progress',
  TabNavigation: 'Navigation', Carousel: 'Navigation', Steps: 'Navigation',
  GradientText: 'Typography', SectionTitle: 'Typography',
  Timeline: 'Display',
  Image: 'Media', Avatar: 'Media',
};

// Hand-curated one-liners, pre-seeded from today's AGENT.md/llms.txt copy.
// Kept separate from react-docgen's raw JSDoc `description` because these are
// often more polished/example-bearing than the source JSDoc. Add an entry here
// (and to CATEGORY_MAP) whenever /new-component scaffolds a new component.
const DOC_SUMMARIES = {
  Button: 'Neon-styled button. Variants: `primary`, `secondary`, `danger`, `ghost`.',
  Card: 'Glassmorphism container with borders.',
  Input: 'Cyberpunk text input with focus glows.',
  Modal: 'CRT-style modal dialog.',
  Notification: 'Toast notifications. Use `useCyberNotifications` hook.',
  CircularProgress: 'Dual-ring circular progress indicator.',
  LinearProgress: 'Smooth horizontal progress bar.',
  SegmentedProgress: 'Segmented progress: `variant="radial"` (circular arc gauge, default) or `variant="block"` (discrete filled blocks ▮▮▮▯▯).',
  TabNavigation: 'Animated tab bar.',
  Badge: 'Status indicator. Variants: `primary`, `secondary`, `accent`, `success`, `error`, `warning`.',
  Toggle: 'Cyberpunk switch.',
  Select: 'Styled dropdown.',
  Skeleton: 'Loading placeholder.',
  Image: 'Image with cyberpunk frame/effects.',
  Carousel: 'Image carousel.',
  Checkbox: 'Neon-styled checkbox with SVG icons.',
  Divider: 'Gradient/solid/dashed content separator.',
  GradientText: 'Text with cyberpunk gradient effects.',
  SectionTitle: 'Title with decorative gradient line.',
  Steps: 'Multi-step progress indicator.',
  Timeline: 'Vertical event history display.',
  Tooltip: 'Neon-bordered popover on hover/focus. Placements: `top`, `bottom`, `left`, `right`.',
  FormField: 'Label/helper/error/success wrapper for any form control.',
  Accordion: 'Collapsible section list. `mode`: `single` (default) or `multiple` open panels.',
  Avatar: 'Circular profile image with glitch-style initials fallback and an `online`/`offline`/`away` status dot.',
};

// SegmentedProgress exports `type SegmentedProgressProps = RadialProps | BlockProps`,
// a discriminated union. react-docgen-typescript flattens both branches into one
// merged prop table and concatenates their JSDoc descriptions into a garbled
// string (confirmed by direct testing) — it loses the fact `segments` only
// applies when `variant="block"`, and `children` is invalid there. Hand-written
// override; do not replace with auto-extraction.
const SEGMENTED_PROGRESS_OVERRIDE = {
  name: 'SegmentedProgress',
  category: 'Progress',
  sourceFile: 'src/components/SegmentedProgress.tsx',
  displayName: 'CyberUI.SegmentedProgress',
  description: 'A segmented progress indicator with two display modes.',
  docSummary: DOC_SUMMARIES.SegmentedProgress,
  storybookPath: 'components-segmentedprogress--docs',
  manifestOverride: true,
  variants: [
    {
      variant: 'radial',
      isDefault: true,
      description: 'Circular gauge — discrete arc segments arranged in a ring. Original behaviour, and the default.',
      props: [
        { name: 'variant', type: '"radial"', required: false, default: 'radial', description: "Discriminant — omit or set to 'radial' for the circular gauge." },
        { name: 'size', type: '"sm" | "md" | "lg" | "xl"', required: false, default: 'md', description: 'sm: 64px, md: 96px, lg: 128px, xl: 160px.' },
        { name: 'children', type: 'ReactNode', required: false, default: null, description: 'Optional content rendered in the center of the gauge.' },
        { name: 'progress', type: 'number', required: true, default: null, description: 'Progress value (0–100).' },
        { name: 'className', type: 'string', required: false, default: null, description: 'Optional custom class name.' },
      ],
    },
    {
      variant: 'block',
      isDefault: false,
      description: 'Linear discrete-block bar (▮▮▮▮▯▯) — health bars, step-based loading.',
      props: [
        { name: 'variant', type: '"block"', required: true, default: null, description: "Discriminant — must be 'block'." },
        { name: 'segments', type: 'number', required: false, default: 10, description: 'Number of discrete blocks.' },
        { name: 'size', type: '"sm" | "md" | "lg" | "xl"', required: false, default: 'md', description: 'Controls block height: sm h-3, md h-5, lg h-7, xl h-9.' },
        { name: 'progress', type: 'number', required: true, default: null, description: 'Progress value (0–100).' },
        { name: 'className', type: 'string', required: false, default: null, description: 'Optional custom class name.' },
        { name: 'children', type: 'never', required: false, default: null, description: 'Not valid in block mode.' },
      ],
    },
  ],
};

// Hooks aren't components with a props interface — react-docgen-typescript gives
// no structured parameter/return shape for them. Small enough (3) to hand-author.
const HOOKS_MANIFEST = [
  {
    name: 'useCyberScrollbar',
    kind: 'hook',
    description: 'Custom hook that creates a cyberpunk-themed scrollbar with animated arrows that respond to scroll velocity and direction.',
    docSummary: 'applies cyberpunk scrollbar styling to a scrollable ref.',
    signature: 'useCyberScrollbar<T extends HTMLElement>(options?: UseCyberScrollbarOptions): React.RefObject<T>',
    requiresProvider: null,
  },
  {
    name: 'useCyberNotifications',
    kind: 'hook',
    description: 'Access the notification context to show toast notifications. Must be used within a CyberNotificationProvider.',
    docSummary: '`showNotification(type, title, message, options?)` toast trigger; requires `CyberNotificationProvider`.',
    signature: "useCyberNotifications(): { showNotification: (type: 'success' | 'warning' | 'error', title: string, message: string, options?: NotificationOptions) => string }",
    requiresProvider: 'CyberNotificationProvider',
  },
  {
    name: 'useAnimatedProgress',
    kind: 'hook',
    description: 'A hook that oscillates a value between a min and max range. Useful for creating "breathing" or "pulse" animations.',
    docSummary: 'oscillating value generator for pulse/loading animations.',
    signature: 'useAnimatedProgress(options?: { min?: number; max?: number; speed?: number }): number',
    requiresProvider: null,
  },
];

const CONTEXT_DOC_SUMMARY = {
  CyberNotificationProvider: 'wraps the app once to enable `useCyberNotifications`.',
};

// ─── Extraction ────────────────────────────────────────────────────────────────

function makeParser() {
  return withCustomConfig(join(ROOT, 'tsconfig.app.json'), {
    propFilter: (prop) => !prop.parent || !prop.parent.fileName.includes('node_modules'),
  });
}

function getComponentNamesFromBarrel() {
  const barrel = readFileSync(join(ROOT, 'src/components/index.ts'), 'utf8');
  const names = [];
  const re = /^export \{ default as (\w+) \} from '\.\/\1';$/gm;
  let match;
  while ((match = re.exec(barrel))) {
    names.push(match[1]);
  }
  return names;
}

function mapProps(docgenProps) {
  return Object.values(docgenProps ?? {}).map((p) => ({
    name: p.name,
    type: p.type?.name ?? '',
    required: !!p.required,
    default: p.defaultValue?.value ?? null,
    description: p.description ?? '',
  }));
}

function extractComponent(parser, name, category) {
  const sourceFile = `src/components/${name}.tsx`;
  const [doc] = parser.parse(join(ROOT, sourceFile));
  if (!doc) {
    throw new Error(`react-docgen-typescript found no exported component in ${sourceFile}`);
  }
  const docSummary = DOC_SUMMARIES[name];
  if (!docSummary) {
    throw new Error(`Missing DOC_SUMMARIES entry for "${name}" — add one before regenerating docs.`);
  }
  return {
    name,
    category,
    sourceFile,
    displayName: doc.displayName,
    description: doc.description ?? '',
    docSummary,
    storybookPath: `components-${name.toLowerCase()}--docs`,
    manifestOverride: false,
    props: mapProps(doc.props),
  };
}

function extractContext(parser) {
  const sourceFile = 'src/contexts/NotificationContext.tsx';
  const [doc] = parser.parse(join(ROOT, sourceFile));
  if (!doc) {
    throw new Error(`react-docgen-typescript found no exported context provider in ${sourceFile}`);
  }
  return {
    name: 'CyberNotificationProvider',
    kind: 'context-provider',
    sourceFile,
    description: doc.description ?? '',
    docSummary: CONTEXT_DOC_SUMMARY.CyberNotificationProvider,
    props: mapProps(doc.props),
  };
}

// ─── Assemble manifest ───────────────────────────────────────────────────────

function buildManifest() {
  const parser = makeParser();
  const names = getComponentNamesFromBarrel();
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));

  const components = names.map((name) => {
    const category = CATEGORY_MAP[name];
    if (!category) {
      throw new Error(`"${name}" is not in CATEGORY_MAP — add it before regenerating docs.`);
    }
    return name === 'SegmentedProgress'
      ? SEGMENTED_PROGRESS_OVERRIDE
      : extractComponent(parser, name, category);
  });

  // Sort by categoryOrder; Array#sort is stable, so barrel export order is
  // preserved within each category.
  components.sort((a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category));

  return {
    schemaVersion: 1,
    packageVersion: pkg.version,
    generatedAt: new Date().toISOString(),
    categoryOrder: CATEGORY_ORDER,
    components,
    hooks: HOOKS_MANIFEST,
    context: [extractContext(parser)],
  };
}

// ─── Render doc blocks ───────────────────────────────────────────────────────

function storybookUrl(storybookPath) {
  return `https://patrickkuei.github.io/CyberUI/storybook/?path=/docs/${storybookPath}`;
}

function renderClaudeTable(manifest) {
  const rows = CATEGORY_ORDER.map((cat) => {
    const names = manifest.components.filter((c) => c.category === cat).map((c) => c.name);
    return `| ${cat} | ${names.join(', ')} |`;
  });
  const hookNames = manifest.hooks.map((h) => h.name).join(', ');
  const contextNames = manifest.context.map((c) => c.name).join(', ');
  return [
    '| Category    | Components |',
    '|-------------|-----------|',
    ...rows,
    `| Hooks | ${hookNames} |`,
    `| Context | ${contextNames} |`,
  ].join('\n');
}

function renderAgentTable(manifest) {
  const rows = manifest.components.map((c) => `| \`${c.name}\` | ${c.docSummary} |`);
  return ['| Component | Description |', '| :--- | :--- |', ...rows].join('\n');
}

function renderReadmeBlock(manifest) {
  const rows = manifest.components.map(
    (c) => `| ${c.name} | ${c.category} | [→](${storybookUrl(c.storybookPath)}) |`
  );
  const hookNames = manifest.hooks.map((h) => `\`${h.name}\``).join(', ');
  const contextNames = manifest.context.map((c) => `\`${c.name}\``).join(', ');
  return [
    '| Component | Category | Docs |',
    '|-----------|----------|------|',
    ...rows,
    '',
    `Also includes hooks (${hookNames}) and ${contextNames} context.`,
  ].join('\n');
}

function renderLlmsTxtBlock(manifest) {
  const categoryLines = CATEGORY_ORDER.map((cat) => {
    const names = manifest.components.filter((c) => c.category === cat).map((c) => `\`${c.name}\``);
    return `- ${cat}: ${names.join(', ')}`;
  });
  const hookLines = manifest.hooks.map((h) => `- \`${h.name}\`: ${h.docSummary}`);
  const contextLines = manifest.context.map((c) => `- \`${c.name}\`: ${c.docSummary}`);
  return [
    `## Components (${manifest.components.length})`,
    ...categoryLines,
    '',
    '## Hooks & Context',
    ...hookLines,
    ...contextLines,
  ].join('\n');
}

function renderUsageContentTable(manifest) {
  const rows = manifest.components.map(
    (c) => `| ${c.name} | ${c.category} | \`dist/components/${c.name}.d.ts\` |`
  );
  return ['| Component | Category | Types |', '|-----------|----------|-------|', ...rows].join('\n');
}

// ─── Write ───────────────────────────────────────────────────────────────────

function updateDocFile(relPath, block) {
  const filePath = join(ROOT, relPath);
  const existing = readFileSync(filePath, 'utf8');
  // bin/usage-content.js's content is a JS template literal — a literal
  // backtick would break out of the outer string, so escape any backticks
  // the block introduces (e.g. `dist/components/Button.d.ts`) before writing.
  const safeBlock = relPath.endsWith('.js') ? block.replace(/`/g, '\\`') : block;
  const updated = replaceMarkedBlock(existing, MANIFEST_MARKER_START, MANIFEST_MARKER_END, safeBlock);
  const changed = updated !== existing;
  if (changed) writeFileSync(filePath, updated, 'utf8');
  return changed;
}

function main() {
  const manifest = buildManifest();

  writeFileSync(
    join(ROOT, 'public/component-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8'
  );

  const targets = [
    ['CLAUDE.md', renderClaudeTable(manifest)],
    ['AGENT.md', renderAgentTable(manifest)],
    ['README.md', renderReadmeBlock(manifest)],
    ['public/llms.txt', renderLlmsTxtBlock(manifest)],
    ['bin/usage-content.js', renderUsageContentTable(manifest)],
  ];

  const changed = targets.filter(([relPath, block]) => updateDocFile(relPath, block)).map(([relPath]) => relPath);

  console.log(
    `Generated manifest: ${manifest.components.length} components, ${manifest.hooks.length} hooks, ${manifest.context.length} context provider(s).`
  );
  console.log(changed.length ? `Updated: ${changed.join(', ')}` : 'All docs already up to date.');
}

main();
