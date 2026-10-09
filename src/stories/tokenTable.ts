/**
 * Which colour tokens each component reads. Rendered by `TokenReference.tsx`
 * on the "Design Tokens" docs page, and checked against the component sources
 * by `src/utils/token-table.test.ts`, so this cannot silently drift.
 *
 * To update after changing a component's colours: edit its row. The test says
 * what is out of date (a listed utility no longer in the source, or a token the
 * source reads that the row does not list).
 */

/** Every `--color-*` token in the `@theme` block of `src/index.css`. */
export const COLOUR_TOKENS = [
  'primary',
  'secondary',
  'accent',
  'success',
  'error',
  'warning',
  'info',
  'base',
  'surface',
  'border-default',
  'default',
  'muted',
  'inverse',
] as const;

export type ColourToken = (typeof COLOUR_TOKENS)[number];

export interface TokenRow {
  /** Name as exported from the library. */
  component: string;
  /** Source file, relative to the repo root. */
  source: string;
  /**
   * Token -> utilities (or `var(--color-*)` reads) in the source that use it.
   * Representative, not exhaustive: each listed entry must appear in the
   * source, and every token the source reads must be a key here.
   */
  reads: Partial<Record<ColourToken, readonly string[]>>;
  /**
   * Colours painted without a token (Tailwind palette colours and literal
   * rgb/rgba values), as they appear in the source. Overriding a token does
   * not change these.
   */
  fixed?: readonly string[];
  /** Which variant or state paints which token, and anything surprising. */
  note?: string;
  /**
   * The colour is built at runtime (`--color-${name}`), so the row cannot be
   * checked for completeness, only for the listed entries.
   */
  dynamic?: boolean;
}

const c = (name: string): string => `src/components/${name}.tsx`;

export const TOKEN_ROWS: readonly TokenRow[] = [
  {
    component: 'Accordion',
    source: c('Accordion'),
    reads: {
      surface: ['bg-surface'],
      'border-default': ['border-border-default'],
      accent: ['border-accent', 'shadow-md-accent', 'text-accent'],
      secondary: ['text-secondary'],
      default: ['text-default'],
      muted: ['text-muted', 'text-muted/40'],
    },
    note: 'An open panel gets an accent border and glow and a secondary title; a closed one uses border-default and a default-coloured title.',
  },
  {
    component: 'Avatar',
    source: c('Avatar'),
    reads: {
      success: ['bg-success', 'var(--color-success)'],
      warning: ['bg-warning', 'var(--color-warning)'],
      muted: ['bg-muted'],
      accent: ['border-accent/60', 'text-accent'],
      primary: ['shadow-primary'],
      secondary: ['text-secondary'],
      surface: ['bg-surface'],
      base: ['ring-base'],
    },
    note: 'The status dot is success (online), muted (offline) or warning (away). The initials are accent with a secondary glitch layer; the frame is an accent border with a primary glow.',
  },
  {
    component: 'Badge',
    source: c('Badge'),
    reads: {
      primary: ['bg-primary', 'hover:shadow-primary'],
      secondary: ['bg-secondary', 'hover:shadow-secondary'],
      accent: ['bg-accent', 'hover:shadow-lg-accent'],
      success: ['bg-success', 'hover:shadow-success'],
      error: ['bg-error', 'hover:shadow-error'],
      warning: ['bg-warning', 'hover:shadow-warning'],
      inverse: ['text-inverse'],
    },
    note: 'Each variant paints one token (fill, plus a glow on hover when clickable). Every variant takes its text colour from inverse.',
  },
  {
    component: 'Button',
    source: c('Button'),
    reads: {
      accent: ['from-accent', 'border-accent', 'text-accent', 'bg-accent', 'ring-accent/50', 'inset-ring-accent/20'],
      secondary: ['to-secondary', 'border-secondary', 'text-secondary', 'shadow-secondary'],
      primary: ['shadow-primary'],
      error: ['border-error', 'text-error', 'bg-error'],
      inverse: ['text-inverse'],
      surface: ['bg-surface'],
      base: ['bg-base'],
      muted: ['text-muted/60'],
    },
    fixed: ['via-white/20'],
    note: 'primary is an accent-to-secondary gradient with a primary glow. secondary is secondary, danger is error, ghost is accent (its resting glow is still shadow-secondary). Disabled states use base.',
  },
  {
    component: 'Card',
    source: c('Card'),
    reads: {
      base: ['bg-base'],
      'border-default': ['border-border-default'],
      primary: ['text-primary'],
      surface: ['bg-surface'],
      accent: ['border-accent', 'shadow-input-accent/50', 'shadow-lg-accent'],
      secondary: ['text-secondary'],
    },
    note: 'Body text is primary, the title is secondary. The accent variant is a surface fill with an accent border and glow; default and small use base and border-default. titleBorder adds an accent underline under the title.',
  },
  {
    component: 'Carousel',
    source: c('Carousel'),
    reads: {
      primary: ['text-primary', 'border-primary', 'bg-primary/30', 'from-primary/10', 'via-primary', 'shadow-primary'],
      secondary: ['via-secondary', 'bg-secondary/60', 'via-secondary/5'],
      accent: ['border-accent', 'text-accent', 'via-accent', 'bg-accent/80', 'to-accent/10'],
      surface: ['bg-surface', 'bg-surface/50'],
      muted: ['text-muted'],
    },
    fixed: ['rgba(0, 255, 136', 'rgb(255, 0, 93)', 'rgb(0, 255, 249)', 'text-white', 'bg-white/30', 'from-black/80'],
    note: 'The frame, arrows and indicators follow tokens. The built-in stand-in effects and the arrow glow/halo colours are literal rgb values, so a token override does not reach them.',
  },
  {
    component: 'Checkbox',
    source: c('Checkbox'),
    reads: {
      secondary: ['stroke-secondary', 'fill-secondary', 'text-secondary'],
      muted: ['stroke-muted/20', 'fill-muted/20', 'text-muted'],
      base: ['fill-base/50'],
      error: ['text-error'],
    },
  },
  {
    component: 'CircularProgress',
    source: c('CircularProgress'),
    reads: {
      accent: ['var(--color-accent)'],
      primary: ['var(--color-primary)'],
    },
    note: 'Two half-rings: accent (left) and primary (right), each with a drop-shadow glow in the same colour.',
  },
  {
    component: 'Combobox',
    source: c('Combobox'),
    reads: {
      accent: ['border-accent', 'shadow-input-accent', 'text-accent', 'ring-accent'],
      secondary: ['border-secondary', 'shadow-secondary', 'text-secondary', 'ring-secondary'],
      error: ['border-error', 'shadow-error/30', 'text-error', 'ring-error'],
      'border-default': ['border-border-default'],
      surface: ['bg-surface'],
      default: ['text-default'],
      muted: ['text-muted', 'placeholder-muted'],
      base: ['bg-base/70'],
    },
    note: "Same variant colours as Input: the 'primary' variant is accent-coloured, 'secondary' is secondary, 'danger' (or an error) is error, 'ghost' is border-default. The list popover has a border-default frame and a secondary glow.",
  },
  {
    component: 'DatePicker',
    source: c('DatePicker'),
    reads: {
      accent: ['border-accent', 'shadow-input-accent', 'text-accent', 'bg-accent', 'ring-accent'],
      secondary: ['border-secondary', 'shadow-secondary', 'text-secondary', 'ring-secondary/70'],
      error: ['border-error', 'shadow-error/30', 'text-error', 'ring-error'],
      primary: ['shadow-primary', 'shadow-primary/50'],
      'border-default': ['border-border-default'],
      surface: ['bg-surface'],
      default: ['text-default'],
      muted: ['text-muted', 'placeholder-muted', 'text-muted/30'],
      base: ['bg-base', 'bg-base/70'],
      inverse: ['text-inverse'],
    },
    note: "Input colours for the trigger, plus the calendar: the selected day is an accent fill with a primary glow and inverse text, today is an accent outline, hover and focus are secondary.",
  },
  {
    component: 'Divider',
    source: c('Divider'),
    reads: {
      secondary: ['bg-secondary/30', 'via-secondary/50', 'border-secondary/50'],
    },
  },
  {
    component: 'Drawer',
    source: c('Drawer'),
    reads: {
      accent: ['border-accent', 'shadow-lg-accent', 'border-accent/20', 'text-accent', 'bg-accent/10'],
      error: ['border-error', 'shadow-error', 'border-error/20', 'text-error'],
      surface: ['bg-surface'],
      primary: ['text-primary'],
      muted: ['text-muted'],
    },
    fixed: ['bg-black/30'],
    note: 'The default drawer is accent (border and glow); variant="danger" swaps in error. The title is primary (error when danger). The idle border-colour cycle (animate-rgb-glow) uses fixed colours.',
  },
  {
    component: 'DropdownMenu',
    source: c('DropdownMenu'),
    reads: {
      'border-default': ['border-border-default'],
      surface: ['bg-surface'],
      secondary: ['shadow-secondary', 'text-secondary', 'ring-secondary/70'],
      default: ['text-default'],
      muted: ['text-muted/40'],
      error: ['text-error', 'bg-error', 'ring-error/70'],
      inverse: ['text-inverse'],
      base: ['bg-base/70'],
    },
  },
  {
    component: 'FormField',
    source: c('FormField'),
    reads: {
      default: ['text-default'],
      error: ['text-error'],
      success: ['text-success'],
      muted: ['text-muted'],
    },
    note: 'Label and message colour follow the field state: default, error or success.',
  },
  {
    component: 'GradientText',
    source: c('GradientText'),
    reads: {
      primary: ['from-primary', 'to-primary'],
      secondary: ['from-secondary', 'to-secondary'],
      accent: ['from-accent', 'to-accent'],
    },
    note: 'primary is secondary-to-primary, secondary is primary-to-accent, accent is accent-to-secondary.',
  },
  {
    component: 'Image',
    source: c('Image'),
    reads: {
      accent: [
        'border-accent',
        'border-accent/30',
        'shadow-md-accent',
        'shadow-lg-accent',
        'ring-accent/50',
        'text-accent',
        'bg-accent/90',
        'via-accent',
      ],
      primary: ['from-primary/25', 'border-primary/60'],
      secondary: ['to-secondary/25', 'border-secondary/60'],
      surface: ['bg-surface', 'via-surface'],
      error: ['border-error/30', 'text-error'],
      muted: ['text-muted'],
      inverse: ['text-inverse'],
    },
    fixed: ['text-white', 'bg-black/50', 'rgba(0, 255, 136'],
    note: 'The frame is an accent border; hover and keyboard focus add the accent glow and ring. The stand-in is a primary, surface and secondary gradient. The enlarge-preview overlay mixes in black, white and a literal green grid.',
  },
  {
    component: 'Input',
    source: c('Input'),
    reads: {
      surface: ['bg-surface'],
      default: ['text-default'],
      muted: ['text-muted', 'placeholder-muted'],
      accent: ['border-accent', 'shadow-input-accent', 'text-accent', 'ring-accent'],
      secondary: ['border-secondary', 'shadow-secondary', 'text-secondary', 'ring-secondary'],
      error: ['border-error', 'shadow-error/30', 'text-error', 'ring-error'],
      'border-default': ['border-border-default'],
      base: ['bg-base'],
    },
    note: "The 'primary' variant is accent-coloured, 'secondary' is secondary, 'danger' (or an error) is error, 'ghost' is border-default with an accent hover. The icon takes the variant colour.",
  },
  {
    component: 'LinearProgress',
    source: c('LinearProgress'),
    reads: {
      surface: ['bg-surface'],
      accent: ['from-accent', 'shadow-lg-accent'],
      primary: ['to-primary'],
    },
    note: 'An accent-to-primary bar with an accent glow, on a surface track.',
  },
  {
    component: 'Modal',
    source: c('Modal'),
    reads: {
      accent: ['border-accent', 'shadow-lg-accent', 'shadow-input-accent/50', 'border-accent/20', 'text-accent', 'bg-accent/10'],
      error: ['border-error', 'shadow-error', 'shadow-error/50', 'border-error/20', 'text-error'],
      surface: ['bg-surface'],
      primary: ['text-primary'],
      muted: ['text-muted'],
    },
    fixed: ['bg-black/30'],
    note: 'The default modal is accent (border and glow); variant="danger" swaps in error. The title is primary (error when danger). The idle border-colour cycle (animate-rgb-glow) uses fixed colours.',
  },
  {
    component: 'Notification',
    source: c('Notification'),
    reads: {
      accent: ['from-accent', 'shadow-lg-accent'],
      secondary: ['to-secondary', 'border-secondary', 'text-secondary'],
      error: ['bg-error', 'shadow-error'],
      surface: ['bg-surface'],
      default: ['text-default', 'text-default/70'],
      inverse: ['text-inverse', 'text-inverse/80'],
      muted: ['text-muted'],
    },
    note: "success is an accent-to-secondary gradient, error is an error fill. warning is a surface card with a secondary left border; there is no warning-coloured notification. CyberNotificationProvider itself paints nothing.",
  },
  {
    component: 'Pagination',
    source: c('Pagination'),
    reads: {
      accent: ['from-accent', 'border-accent', 'text-accent', 'bg-accent', 'shadow-lg-accent', 'ring-accent/50'],
      secondary: ['to-secondary', 'border-secondary', 'text-secondary', 'bg-secondary', 'shadow-secondary'],
      primary: ['shadow-primary'],
      inverse: ['text-inverse'],
      surface: ['bg-surface'],
      base: ['bg-base'],
      muted: ['border-muted/30', 'text-muted', 'text-muted/40'],
    },
    note: 'The active page is an accent-to-secondary gradient by default, or a solid secondary or accent fill by variant, with inverse text. Previous and Next are secondary.',
  },
  {
    component: 'RadioGroup',
    source: c('RadioGroup'),
    reads: {
      secondary: ['stroke-secondary', 'fill-secondary', 'text-secondary', 'ring-secondary'],
      muted: ['stroke-muted/20', 'fill-muted/20', 'text-muted'],
      base: ['fill-base/50'],
      default: ['text-default'],
      error: ['text-error'],
    },
  },
  {
    component: 'SectionTitle',
    source: c('SectionTitle'),
    reads: {
      secondary: ['text-secondary', 'from-secondary/50'],
    },
  },
  {
    component: 'SegmentedProgress',
    source: c('SegmentedProgress'),
    reads: {
      accent: ['var(--color-accent)'],
      'border-default': ['var(--color-border-default)'],
      muted: ['var(--color-muted)'],
    },
    note: 'Active segments are accent with a glow; inactive ones are border-default; the radial tick marks are muted.',
  },
  {
    component: 'Select',
    source: c('Select'),
    reads: {
      base: ['bg-base'],
      surface: ['bg-surface'],
      'border-default': ['border-border-default'],
      default: ['text-default'],
      muted: ['text-muted', 'text-muted/50'],
      primary: ['border-primary', 'ring-primary', 'shadow-primary'],
      secondary: ['border-secondary', 'ring-secondary', 'shadow-secondary'],
      accent: ['border-accent/20', 'ring-accent', 'text-accent'],
      error: ['border-error', 'ring-error', 'shadow-error'],
    },
    note: "Unlike Input, the 'primary' variant here is a border-default frame with a primary focus ring and glow. The chevron is accent.",
  },
  {
    component: 'Skeleton',
    source: c('Skeleton'),
    reads: {
      'border-default': ['border-border-default'],
      surface: ['bg-surface'],
    },
    fixed: ['bg-gray-600'],
  },
  {
    component: 'Slider',
    source: c('Slider'),
    reads: {
      primary: ['from-primary', 'to-primary', 'bg-primary', 'shadow-primary'],
      secondary: ['from-secondary', 'to-secondary', 'bg-secondary', 'shadow-secondary'],
      accent: ['from-accent', 'bg-accent', 'shadow-lg-accent', 'text-accent'],
      muted: ['text-muted'],
      surface: ['bg-surface'],
      base: ['ring-offset-base'],
    },
    fixed: ['ring-white/80'],
    note: 'The fill and thumb colour follow the variant (primary, secondary or accent, each with its glow). The value readout is accent.',
  },
  {
    component: 'Steps',
    source: c('Steps'),
    reads: {
      accent: ['bg-accent', 'from-accent', 'shadow-lg-accent', 'text-accent', 'var(--color-accent)'],
      secondary: ['text-secondary', 'to-secondary', 'var(--color-secondary)'],
      error: ['text-error', 'var(--color-error)'],
      muted: ['text-muted', 'text-muted/50'],
      primary: ['var(--color-primary)'],
    },
    note: 'Completed and current step titles are secondary (a completed one gets an accent-to-secondary underline, the current one an accent marker); a failed step is error, pending steps are muted. The chevrons between steps are primary.',
  },
  {
    component: 'Table',
    source: c('Table'),
    reads: {
      'border-default': ['border-border-default'],
      base: ['bg-base'],
      secondary: ['text-secondary', 'var(--color-secondary)'],
      accent: ['border-accent', 'var(--color-accent)'],
      surface: ['bg-surface', 'bg-surface/40'],
      muted: ['text-muted'],
      default: ['text-default'],
    },
    note: 'Header text is secondary over an accent rule; row hover is a secondary inset outline, keyboard focus an accent one.',
  },
  {
    component: 'TabNavigation',
    source: c('TabNavigation'),
    reads: {
      surface: ['bg-surface'],
      default: ['text-default'],
      'border-default': ['border-border-default'],
      secondary: ['text-secondary', 'border-secondary', 'shadow-secondary', 'to-secondary'],
      accent: ['bg-accent', 'from-accent', 'shadow-lg-accent'],
      base: ['bg-base/70'],
      muted: ['text-muted'],
    },
    note: 'The active tab is secondary text with an accent-to-secondary underline.',
  },
  {
    component: 'Timeline',
    source: c('Timeline'),
    reads: {
      success: ['border-success', 'bg-success/30', 'var(--color-success)'],
      error: ['border-error', 'bg-error/30', 'var(--color-error)'],
      warning: ['border-warning', 'bg-warning/30', 'var(--color-warning)'],
      info: ['border-info', 'bg-info/30', 'var(--color-info)'],
      secondary: ['from-secondary/50', 'text-secondary'],
      default: ['text-default'],
      muted: ['text-muted'],
    },
    note: 'Each item marker uses the status token for its status. The connector line and title hover are secondary.',
  },
  {
    component: 'Toggle',
    source: c('Toggle'),
    reads: {
      accent: ['from-accent', 'bg-accent', 'ring-accent'],
      secondary: ['to-secondary', 'bg-secondary', 'ring-secondary'],
      primary: ['ring-primary'],
      default: ['text-default'],
      muted: ['text-muted'],
    },
    fixed: ['bg-gray-600', 'bg-gray-500', 'after:bg-white'],
    note: "The checked track is an accent-to-secondary gradient ('primary' variant), solid secondary or solid accent. The off track and the knob are fixed gray and white.",
  },
  {
    component: 'Tooltip',
    source: c('Tooltip'),
    reads: {
      primary: ['border-primary', 'shadow-primary'],
      secondary: ['border-secondary', 'shadow-secondary'],
      accent: ['border-accent', 'shadow-lg-accent'],
      surface: ['bg-surface'],
      default: ['text-default'],
    },
    note: 'The variant picks the border and glow token; the arrow uses the same one.',
  },
  {
    component: 'useCyberScrollbar',
    source: 'src/hooks/useCyberScrollbar.ts',
    reads: {
      primary: ['--color-${glowColor}'],
      secondary: ['--color-${glowColor}'],
      accent: ['--color-${glowColor}'],
    },
    fixed: ['rgba(255, 0, 93', 'rgba(26, 26, 46'],
    dynamic: true,
    note: 'A hook, not a component. glowColor (primary, secondary or accent, default primary) picks the thumb glow. The track variants use literal pink and navy rgba values.',
  },
];

/** token -> names of the components whose row lists it, in table order. */
export function componentsByToken(rows: readonly TokenRow[] = TOKEN_ROWS): Record<ColourToken, string[]> {
  const out = Object.fromEntries(COLOUR_TOKENS.map((t) => [t, [] as string[]])) as Record<ColourToken, string[]>;
  for (const row of rows) {
    for (const token of COLOUR_TOKENS) {
      if (row.reads[token]) out[token].push(row.component);
    }
  }
  return out;
}
