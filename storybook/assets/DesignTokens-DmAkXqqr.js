import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-D6QCJ7m9.js";import{M as m}from"./blocks-CMrf3YVH.js";import"./iframe-bwAE_uHO.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DqHzrk_r.js";import"./index-C3RJMI8R.js";const n=["primary","secondary","accent","success","error","warning","info","base","surface","border-default","default","muted","inverse"],o=a=>`src/components/${a}.tsx`,i=[{component:"Accordion",source:o("Accordion"),reads:{surface:["bg-surface"],"border-default":["border-border-default"],accent:["border-accent","shadow-md-accent","text-accent"],secondary:["text-secondary"],default:["text-default"],muted:["text-muted","text-muted/40"]},note:"An open panel gets an accent border and glow and a secondary title; a closed one uses border-default and a default-coloured title."},{component:"Avatar",source:o("Avatar"),reads:{success:["bg-success","var(--color-success)"],warning:["bg-warning","var(--color-warning)"],muted:["bg-muted"],accent:["border-accent/60","text-accent"],primary:["shadow-primary"],secondary:["text-secondary"],surface:["bg-surface"],base:["ring-base"]},note:"The status dot is success (online), muted (offline) or warning (away). The initials are accent with a secondary glitch layer; the frame is an accent border with a primary glow."},{component:"Badge",source:o("Badge"),reads:{primary:["bg-primary","hover:shadow-primary"],secondary:["bg-secondary","hover:shadow-secondary"],accent:["bg-accent","hover:shadow-lg-accent"],success:["bg-success","hover:shadow-success"],error:["bg-error","hover:shadow-error"],warning:["bg-warning","hover:shadow-warning"],inverse:["text-inverse"]},note:"Each variant paints one token (fill, plus a glow on hover when clickable). Every variant takes its text colour from inverse."},{component:"Button",source:o("Button"),reads:{accent:["from-accent","border-accent","text-accent","bg-accent","ring-accent/50","inset-ring-accent/20"],secondary:["to-secondary","border-secondary","text-secondary","shadow-secondary"],primary:["shadow-primary"],error:["border-error","text-error","bg-error"],inverse:["text-inverse"],surface:["bg-surface"],base:["bg-base"],muted:["text-muted/60"]},fixed:["via-white/20"],note:"primary is an accent-to-secondary gradient with a primary glow. secondary is secondary, danger is error, ghost is accent (its resting glow is still shadow-secondary). Disabled states use base."},{component:"Card",source:o("Card"),reads:{base:["bg-base"],"border-default":["border-border-default"],primary:["text-primary"],surface:["bg-surface"],accent:["border-accent","shadow-input-accent/50","shadow-lg-accent"],secondary:["text-secondary"]},note:"Body text is primary, the title is secondary. The accent variant is a surface fill with an accent border and glow; default and small use base and border-default. titleBorder adds an accent underline under the title."},{component:"Carousel",source:o("Carousel"),reads:{primary:["text-primary","border-primary","bg-primary/30","from-primary/10","via-primary","shadow-primary"],secondary:["via-secondary","bg-secondary/60","via-secondary/5"],accent:["border-accent","text-accent","via-accent","bg-accent/80","to-accent/10"],surface:["bg-surface","bg-surface/50"],muted:["text-muted"]},fixed:["rgba(0, 255, 136","rgb(255, 0, 93)","rgb(0, 255, 249)","text-white","bg-white/30","from-black/80"],note:"The frame, arrows and indicators follow tokens. The built-in stand-in effects and the arrow glow/halo colours are literal rgb values, so a token override does not reach them."},{component:"Checkbox",source:o("Checkbox"),reads:{secondary:["stroke-secondary","fill-secondary","text-secondary"],muted:["stroke-muted/20","fill-muted/20","text-muted"],base:["fill-base/50"],error:["text-error"]}},{component:"CircularProgress",source:o("CircularProgress"),reads:{accent:["var(--color-accent)"],primary:["var(--color-primary)"]},note:"Two half-rings: accent (left) and primary (right), each with a drop-shadow glow in the same colour."},{component:"Combobox",source:o("Combobox"),reads:{accent:["border-accent","shadow-input-accent","text-accent","ring-accent"],secondary:["border-secondary","shadow-secondary","text-secondary","ring-secondary"],error:["border-error","shadow-error/30","text-error","ring-error"],"border-default":["border-border-default"],surface:["bg-surface"],default:["text-default"],muted:["text-muted","placeholder-muted"],base:["bg-base/70"]},note:"Same variant colours as Input: the 'primary' variant is accent-coloured, 'secondary' is secondary, 'danger' (or an error) is error, 'ghost' is border-default. The list popover has a border-default frame and a secondary glow."},{component:"DatePicker",source:o("DatePicker"),reads:{accent:["border-accent","shadow-input-accent","text-accent","bg-accent","ring-accent"],secondary:["border-secondary","shadow-secondary","text-secondary","ring-secondary/70"],error:["border-error","shadow-error/30","text-error","ring-error"],primary:["shadow-primary","shadow-primary/50"],"border-default":["border-border-default"],surface:["bg-surface"],default:["text-default"],muted:["text-muted","placeholder-muted","text-muted/30"],base:["bg-base","bg-base/70"],inverse:["text-inverse"]},note:"Input colours for the trigger, plus the calendar: the selected day is an accent fill with a primary glow and inverse text, today is an accent outline, hover and focus are secondary."},{component:"Divider",source:o("Divider"),reads:{secondary:["bg-secondary/30","via-secondary/50","border-secondary/50"]}},{component:"Drawer",source:o("Drawer"),reads:{accent:["border-accent","shadow-lg-accent","border-accent/20","text-accent","bg-accent/10"],error:["border-error","shadow-error","border-error/20","text-error"],surface:["bg-surface"],primary:["text-primary"],muted:["text-muted"]},fixed:["bg-black/30"],note:'The default drawer is accent (border and glow); variant="danger" swaps in error. The title is primary (error when danger). The idle border-colour cycle (animate-rgb-glow) uses fixed colours.'},{component:"DropdownMenu",source:o("DropdownMenu"),reads:{"border-default":["border-border-default"],surface:["bg-surface"],secondary:["shadow-secondary","text-secondary","ring-secondary/70"],default:["text-default"],muted:["text-muted/40"],error:["text-error","bg-error","ring-error/70"],inverse:["text-inverse"],base:["bg-base/70"]}},{component:"FormField",source:o("FormField"),reads:{default:["text-default"],error:["text-error"],success:["text-success"],muted:["text-muted"]},note:"Label and message colour follow the field state: default, error or success."},{component:"GradientText",source:o("GradientText"),reads:{primary:["from-primary","to-primary"],secondary:["from-secondary","to-secondary"],accent:["from-accent","to-accent"]},note:"primary is secondary-to-primary, secondary is primary-to-accent, accent is accent-to-secondary."},{component:"Image",source:o("Image"),reads:{accent:["border-accent","border-accent/30","shadow-md-accent","shadow-lg-accent","ring-accent/50","text-accent","bg-accent/90","via-accent"],primary:["from-primary/25","border-primary/60"],secondary:["to-secondary/25","border-secondary/60"],surface:["bg-surface","via-surface"],error:["border-error/30","text-error"],muted:["text-muted"],inverse:["text-inverse"]},fixed:["text-white","bg-black/50","rgba(0, 255, 136"],note:"The frame is an accent border; hover and keyboard focus add the accent glow and ring. The stand-in is a primary, surface and secondary gradient. The enlarge-preview overlay mixes in black, white and a literal green grid."},{component:"Input",source:o("Input"),reads:{surface:["bg-surface"],default:["text-default"],muted:["text-muted","placeholder-muted"],accent:["border-accent","shadow-input-accent","text-accent","ring-accent"],secondary:["border-secondary","shadow-secondary","text-secondary","ring-secondary"],error:["border-error","shadow-error/30","text-error","ring-error"],"border-default":["border-border-default"],base:["bg-base"]},note:"The 'primary' variant is accent-coloured, 'secondary' is secondary, 'danger' (or an error) is error, 'ghost' is border-default with an accent hover. The icon takes the variant colour."},{component:"LinearProgress",source:o("LinearProgress"),reads:{surface:["bg-surface"],accent:["from-accent","shadow-lg-accent"],primary:["to-primary"]},note:"An accent-to-primary bar with an accent glow, on a surface track."},{component:"Modal",source:o("Modal"),reads:{accent:["border-accent","shadow-lg-accent","shadow-input-accent/50","border-accent/20","text-accent","bg-accent/10"],error:["border-error","shadow-error","shadow-error/50","border-error/20","text-error"],surface:["bg-surface"],primary:["text-primary"],muted:["text-muted"]},fixed:["bg-black/30"],note:'The default modal is accent (border and glow); variant="danger" swaps in error. The title is primary (error when danger). The idle border-colour cycle (animate-rgb-glow) uses fixed colours.'},{component:"Notification",source:o("Notification"),reads:{accent:["from-accent","shadow-lg-accent"],secondary:["to-secondary","border-secondary","text-secondary"],error:["bg-error","shadow-error"],surface:["bg-surface"],default:["text-default","text-default/70"],inverse:["text-inverse","text-inverse/80"],muted:["text-muted"]},note:"success is an accent-to-secondary gradient, error is an error fill. warning is a surface card with a secondary left border; there is no warning-coloured notification. CyberNotificationProvider itself paints nothing."},{component:"Pagination",source:o("Pagination"),reads:{accent:["from-accent","border-accent","text-accent","bg-accent","shadow-lg-accent","ring-accent/50"],secondary:["to-secondary","border-secondary","text-secondary","bg-secondary","shadow-secondary"],primary:["shadow-primary"],inverse:["text-inverse"],surface:["bg-surface"],base:["bg-base"],muted:["border-muted/30","text-muted","text-muted/40"]},note:"The active page is an accent-to-secondary gradient by default, or a solid secondary or accent fill by variant, with inverse text. Previous and Next are secondary."},{component:"RadioGroup",source:o("RadioGroup"),reads:{secondary:["stroke-secondary","fill-secondary","text-secondary","ring-secondary"],muted:["stroke-muted/20","fill-muted/20","text-muted"],base:["fill-base/50"],default:["text-default"],error:["text-error"]}},{component:"SectionTitle",source:o("SectionTitle"),reads:{secondary:["text-secondary","from-secondary/50"]}},{component:"SegmentedProgress",source:o("SegmentedProgress"),reads:{accent:["var(--color-accent)"],"border-default":["var(--color-border-default)"],muted:["var(--color-muted)"]},note:"Active segments are accent with a glow; inactive ones are border-default; the radial tick marks are muted."},{component:"Select",source:o("Select"),reads:{base:["bg-base"],surface:["bg-surface"],"border-default":["border-border-default"],default:["text-default"],muted:["text-muted","text-muted/50"],primary:["border-primary","ring-primary","shadow-primary"],secondary:["border-secondary","ring-secondary","shadow-secondary"],accent:["border-accent/20","ring-accent","text-accent"],error:["border-error","ring-error","shadow-error"]},note:"Unlike Input, the 'primary' variant here is a border-default frame with a primary focus ring and glow. The chevron is accent."},{component:"Skeleton",source:o("Skeleton"),reads:{"border-default":["border-border-default"],surface:["bg-surface"]},fixed:["bg-gray-600"]},{component:"Slider",source:o("Slider"),reads:{primary:["from-primary","to-primary","bg-primary","shadow-primary"],secondary:["from-secondary","to-secondary","bg-secondary","shadow-secondary"],accent:["from-accent","bg-accent","shadow-lg-accent","text-accent"],muted:["text-muted"],surface:["bg-surface"],base:["ring-offset-base"]},fixed:["ring-white/80"],note:"The fill and thumb colour follow the variant (primary, secondary or accent, each with its glow). The value readout is accent."},{component:"Steps",source:o("Steps"),reads:{accent:["bg-accent","from-accent","shadow-lg-accent","text-accent","var(--color-accent)"],secondary:["text-secondary","to-secondary","var(--color-secondary)"],error:["text-error","var(--color-error)"],muted:["text-muted","text-muted/50"],primary:["var(--color-primary)"]},note:"Completed and current step titles are secondary (a completed one gets an accent-to-secondary underline, the current one an accent marker); a failed step is error, pending steps are muted. The chevrons between steps are primary."},{component:"Table",source:o("Table"),reads:{"border-default":["border-border-default"],base:["bg-base"],secondary:["text-secondary","var(--color-secondary)"],accent:["border-accent","var(--color-accent)"],surface:["bg-surface","bg-surface/40"],muted:["text-muted"],default:["text-default"]},note:"Header text is secondary over an accent rule; row hover is a secondary inset outline, keyboard focus an accent one."},{component:"TabNavigation",source:o("TabNavigation"),reads:{surface:["bg-surface"],default:["text-default"],"border-default":["border-border-default"],secondary:["text-secondary","border-secondary","shadow-secondary","to-secondary"],accent:["bg-accent","from-accent","shadow-lg-accent"],base:["bg-base/70"],muted:["text-muted"]},note:"The active tab is secondary text with an accent-to-secondary underline."},{component:"Timeline",source:o("Timeline"),reads:{success:["border-success","bg-success/30","var(--color-success)"],error:["border-error","bg-error/30","var(--color-error)"],warning:["border-warning","bg-warning/30","var(--color-warning)"],info:["border-info","bg-info/30","var(--color-info)"],secondary:["from-secondary/50","text-secondary"],default:["text-default"],muted:["text-muted"]},note:"Each item marker uses the status token for its status. The connector line and title hover are secondary."},{component:"Toggle",source:o("Toggle"),reads:{accent:["from-accent","bg-accent","ring-accent"],secondary:["to-secondary","bg-secondary","ring-secondary"],primary:["ring-primary"],default:["text-default"],muted:["text-muted"]},fixed:["bg-gray-600","bg-gray-500","after:bg-white"],note:"The checked track is an accent-to-secondary gradient ('primary' variant), solid secondary or solid accent. The off track and the knob are fixed gray and white."},{component:"Tooltip",source:o("Tooltip"),reads:{primary:["border-primary","shadow-primary"],secondary:["border-secondary","shadow-secondary"],accent:["border-accent","shadow-lg-accent"],surface:["bg-surface"],default:["text-default"]},note:"The variant picks the border and glow token; the arrow uses the same one."},{component:"useCyberScrollbar",source:"src/hooks/useCyberScrollbar.ts",reads:{primary:["--color-${glowColor}"],secondary:["--color-${glowColor}"],accent:["--color-${glowColor}"]},fixed:["rgba(255, 0, 93","rgba(26, 26, 46"],dynamic:!0,note:"A hook, not a component. glowColor (primary, secondary or accent, default primary) picks the thumb glow. The track variants use literal pink and navy rgba values."}];function u(a=i){const r=Object.fromEntries(n.map(s=>[s,[]]));for(const s of a)for(const c of n)s.reads[c]&&r[c].push(s.component);return r}const l=()=>e.jsx("div",{className:"ref-scroll",children:e.jsxs("table",{className:"ref-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Component"}),e.jsx("th",{scope:"col",children:"Tokens it reads, with the utilities that read them"}),e.jsx("th",{scope:"col",children:"Fixed colours (no token)"})]})}),e.jsx("tbody",{children:i.map(a=>e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",children:[e.jsx("span",{className:"ref-component",children:a.component}),a.note&&e.jsx("span",{className:"ref-note",children:a.note})]}),e.jsx("td",{children:n.filter(r=>a.reads[r]).map(r=>e.jsxs("div",{className:"ref-line",children:[e.jsx("span",{className:"ref-token",children:r}),[...new Set(a.reads[r])].map(s=>e.jsx("code",{children:s},s))]},r))}),e.jsx("td",{children:a.fixed?.map(r=>e.jsx("code",{children:r},r))})]},a.component))})]})}),h=()=>{const a=u();return e.jsx("div",{className:"ref-scroll",children:e.jsxs("table",{className:"ref-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Token"}),e.jsx("th",{scope:"col",children:"Components that read it"})]})}),e.jsx("tbody",{children:n.map(r=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:e.jsxs("code",{children:["--color-",r]})}),e.jsx("td",{children:a[r].join(", ")})]},r))})]})})};l.__docgenInfo={description:"One row per component: the tokens it reads, and the colours no token reaches.",methods:[],displayName:"ComponentTokenTable"};h.__docgenInfo={description:"The same data turned around: override a token, see who else changes.",methods:[],displayName:"TokenUsageIndex"};function t(a){const r={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Foundation/Design Tokens"}),`
`,e.jsx("style",{children:`
  .sbdocs,
  .sbdocs-wrapper,
  .css-3rewwu {
    padding: 0;
  }

  .tokens-container {
    max-width: 64rem;
    margin: 0 auto;
    padding: 2rem;
    background-color: #1a1a2e;
    color: #e0e0e0;
  }

  .tokens-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    color: #ff005d;
    text-shadow: 0 0 8px #ff005d, 0 0 16px #ff005d;
  }

  .tokens-subtitle {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: #00fff9;
  }

  .section-divider {
    margin: 2rem 0;
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, #3c3c5e, transparent);
  }

  .token-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .token-card {
    background-color: #2d2d44;
    border: 1px solid #3c3c5e;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  .token-card h3 {
    color: #00fff9;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .color-token {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    padding: 0.5rem;
    background-color: #1a1a2e;
    border-radius: 0.25rem;
    border: 1px solid #3c3c5e;
  }

  .color-swatch {
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    margin-right: 1rem;
    border: 1px solid #3c3c5e;
    flex-shrink: 0;
  }

  .token-info {
    flex: 1;
  }

  .token-name {
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    color: #fffb00;
    margin-bottom: 0.25rem;
  }

  .gradient .token-name,
  .gradient .token-value {
    color: #1a1a2e;
  }

  .token-value {
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
    color: #8888aa;
  }

  .usage-example {
    background-color: #2d2d44;
    border: 1px solid #3c3c5e;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1rem 0;
  }

  .effect-demo {
    padding: 1rem;
    margin: 0.5rem 0;
    background-color: #2d2d44;
    border-radius: 0.5rem;
    text-align: center;
    color: #e0e0e0;
  }

  .shadow-demo {
    display: inline-block;
    padding: 1rem 2rem;
    margin: 0.5rem;
    background-color: #1a1a2e;
    border-radius: 0.5rem;
    color: #e0e0e0;
  }

  /* Code blocks and inline code styling */
  pre {
    background-color: #2d2d44;
    border: 1px solid #3c3c5e;
    border-radius: 0.5rem;
    padding: 1rem;
    color: #e0e0e0;
  }

  code {
    background-color: #2d2d44;
    color: #00fff9;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
  }

  /* Headings - override Storybook defaults */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .sbdocs h1,
  .sbdocs h2,
  .sbdocs h3,
  .sbdocs h4,
  .sbdocs h5,
  .sbdocs h6,
  .sbdocs-wrapper h1,
  .sbdocs-wrapper h2,
  .sbdocs-wrapper h3,
  .sbdocs-wrapper h4,
  .sbdocs-wrapper h5,
  .sbdocs-wrapper h6 {
    color: #ff005d !important;
  }

  /* Paragraph text - override Storybook defaults */
  p,
  .css-x28zkw p,
  .css-x28zkw :where(p:not(.sb-anchor, .sb-unstyled, .sb-unstyled p)),
  .sbdocs p,
  .sbdocs-wrapper p {
    color: #e0e0e0 !important;
  }

  /* Strong text - override Storybook defaults */
  strong,
  b,
  .sbdocs strong,
  .sbdocs b,
  .sbdocs-wrapper strong,
  .sbdocs-wrapper b {
    color: #00fff9 !important;
    font-weight: 600;
  }

  /* Generic text content override */
  .sbdocs,
  .sbdocs-wrapper {
    color: #e0e0e0 !important;
  }

  /* List styling - override Storybook defaults */
  ul,
  ol,
  li,
  .sbdocs ul,
  .sbdocs ol,
  .sbdocs li,
  .sbdocs-wrapper ul,
  .sbdocs-wrapper ol,
  .sbdocs-wrapper li {
    color: #e0e0e0 !important;
  }

  li {
    margin-bottom: 0.5rem;
  }

  /* Reference tables (TokenReference.tsx) */
  .ref-scroll {
    overflow-x: auto;
    margin: 1rem 0 1.5rem;
  }

  .ref-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
  }

  .ref-table th,
  .ref-table td {
    padding: 0.625rem 0.75rem;
    border: 1px solid #3c3c5e;
    text-align: left;
    vertical-align: top;
    color: #e0e0e0;
  }

  /* Storybook zebra-stripes docs tables with a light row; keep these dark. */
  .ref-table tr,
  .ref-table tbody td,
  .ref-table tbody th {
    background-color: #1a1a2e !important;
  }

  .ref-table td,
  .ref-table tbody th {
    color: #e0e0e0 !important;
  }

  .ref-table thead th {
    background-color: #2d2d44;
    color: #00fff9 !important;
  }

  .ref-table tbody th {
    background-color: #1a1a2e;
    font-weight: 400;
    min-width: 11rem;
  }

  .ref-component {
    display: block;
    font-weight: 600;
    color: #00fff9;
  }

  .ref-note {
    display: block;
    margin-top: 0.375rem;
    font-size: 0.75rem;
    color: #8888aa;
  }

  .ref-line {
    margin-bottom: 0.375rem;
  }

  .ref-token {
    display: inline-block;
    margin-right: 0.5rem;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    color: #fffb00;
  }

  .ref-table code {
    display: inline-block;
    margin: 0 0.25rem 0.25rem 0;
    font-size: 0.75rem;
  }
`}),`
`,e.jsxs("div",{className:"tokens-container",children:[e.jsx("h1",{className:"tokens-title",children:"Design Tokens"}),e.jsx("p",{className:"tokens-subtitle",children:"The foundation of CyberUI's cyberpunk aesthetic"}),e.jsxs(r.p,{children:["Design tokens are the ",e.jsx(r.strong,{children:"single source of truth"})," for all design decisions in CyberUI. They ensure consistency across components and make theming effortless."]}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.h2,{id:"color-tokens",children:"Color Tokens"}),e.jsx(r.p,{children:"CyberUI uses a carefully crafted cyberpunk color palette with neon highlights and dark backgrounds."}),e.jsxs("div",{className:"token-grid",children:[e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🎨 Brand Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#ff005d"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-primary"}),e.jsx("div",{className:"token-value",children:"#ff005d"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#00fff9"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-secondary"}),e.jsx("div",{className:"token-value",children:"#00fff9"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#fffb00"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-accent"}),e.jsx("div",{className:"token-value",children:"#fffb00"})]})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🏗️ Background Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#1a1a2e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-base"}),e.jsx("div",{className:"token-value",children:"#1a1a2e"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#2d2d44"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-surface"}),e.jsx("div",{className:"token-value",children:"#2d2d44"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#3c3c5e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-border-default"}),e.jsx("div",{className:"token-value",children:"#3c3c5e"})]})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"📝 Text Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#e0e0e0"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-default"}),e.jsx("div",{className:"token-value",children:"#e0e0e0"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#8888aa"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-muted"}),e.jsx("div",{className:"token-value",children:"#8888aa"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#1a1a2e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-inverse"}),e.jsx("div",{className:"token-value",children:"#1a1a2e"})]})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"⚡ Status Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#00ff9e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-success"}),e.jsx("div",{className:"token-value",children:"#00ff9e"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#ff4f4f"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-error"}),e.jsx("div",{className:"token-value",children:"#ff4f4f"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#ffaa00"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-warning"}),e.jsx("div",{className:"token-value",children:"#ffaa00"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#00aaff"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-info"}),e.jsx("div",{className:"token-value",children:"#00aaff"})]})]})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.h2,{id:"effect-tokens",children:"Effect Tokens"}),e.jsx(r.p,{children:"CyberUI includes special effect tokens for creating the signature cyberpunk aesthetic."}),e.jsxs("div",{className:"token-grid",children:[e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"✨ Neon Glow Effects"}),e.jsxs("div",{className:"effect-demo",style:{boxShadow:"0 0 8px #00ff9e, 0 0 16px #00ff9e"},children:[e.jsx("div",{className:"token-name",children:"--neon-success-glow"}),e.jsx("div",{className:"token-value",children:"0 0 8px var(--color-success), 0 0 16px var(--color-success)"})]}),e.jsxs("div",{className:"effect-demo",style:{boxShadow:"0 0 8px #ff4f4f, 0 0 16px #ff4f4f"},children:[e.jsx("div",{className:"token-name",children:"--neon-error-glow"}),e.jsx("div",{className:"token-value",children:"0 0 8px var(--color-error), 0 0 16px var(--color-error)"})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🌈 Gradients"}),e.jsxs("div",{className:"effect-demo gradient",style:{background:"linear-gradient(90deg, #fffb00, #00fff9)"},children:[e.jsx("div",{className:"token-name",children:"bg-linear-135/srgb from-accent from-10% to-secondary to-90%"}),e.jsx("div",{className:"token-value",children:"Built from the colour utilities, so a scoped --color-accent / --color-secondary override re-colours it"})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🎭 Component Shadows"}),e.jsx("div",{className:"shadow-demo",style:{boxShadow:"0 0 12px #fffb00"},children:e.jsx("div",{className:"token-name",children:"--shadow-lg-accent"})}),e.jsx("div",{className:"shadow-demo",style:{boxShadow:"0 0 16px #00fff9"},children:e.jsx("div",{className:"token-name",children:"--shadow-secondary"})}),e.jsx("div",{className:"shadow-demo",style:{boxShadow:"0 0 12px #ff005d"},children:e.jsx("div",{className:"token-name",children:"--shadow-primary"})})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.h2,{id:"usage-in-components",children:"Usage in Components"}),e.jsx(r.h3,{id:"using-tokens-in-tailwind-classes",children:"Using Tokens in Tailwind Classes"}),e.jsx(r.p,{children:"All color tokens are automatically available as Tailwind CSS classes:"}),e.jsx("div",{className:"usage-example",children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-surface">Surface background</div>

// Text colors
<p className="text-default">Primary text</p>
<p className="text-muted">Muted text</p>

// Border colors
<div className="border-2 border-border-default">With border</div>

// Accent gradient (accent to secondary)
<div class="h-48 w-full bg-linear-135/srgb from-accent from-10% to-secondary to-90%">
    Accent Gradient Background
</div>
`})})}),e.jsx(r.h3,{id:"using-tokens-in-custom-css",children:"Using Tokens in Custom CSS"}),e.jsx(r.p,{children:"Access tokens directly in your custom styles:"}),e.jsxs("div",{className:"usage-example",children:[e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.custom-component {
  background-color: var(--color-surface);
  color: var(--color-default);
  border: 1px solid var(--color-border-default);
  box-shadow: 0 0 12px var(--color-primary);
}

.neon-button {
  background: var(--color-primary);
  box-shadow: 0 0 8px var(--color-success), 0 0 16px var(--color-success);
}
`})}),e.jsxs(r.p,{children:["Write glows out with ",e.jsx(r.code,{children:"var(--color-*)"})," like this rather than reading ",e.jsx(r.code,{children:"--shadow-*"})," or ",e.jsx(r.code,{children:"--neon-*"}),". Those variables are resolved at ",e.jsx(r.code,{children:":root"}),", so a ",e.jsx(r.code,{children:"--color-*"})," override on a wrapper would not reach them. The library's own ",e.jsx(r.code,{children:"shadow-*"})," classes do follow a scoped override."]})]}),e.jsx(r.h3,{id:"using-tokens-in-inline-styles",children:"Using Tokens in Inline Styles"}),e.jsx(r.p,{children:"Perfect for dynamic styling in React components:"}),e.jsx("div",{className:"usage-example",children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const MyComponent = ({ glowColor }) => (
  <div
    style={{
      backgroundColor: 'var(--color-surface)',
      boxShadow: \`0 0 12px var(--color-\${glowColor})\`,
      border: '1px solid var(--color-border-default)'
    }}
  >
    Dynamic styling with tokens
  </div>
);
`})})}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.h2,{id:"which-components-read-which-tokens",children:"Which components read which tokens"}),e.jsxs(r.p,{children:["Components paint with the tokens above, and some of those reads are not visible from a component's props: a ",e.jsx(r.code,{children:"Card"})," title reads ",e.jsx(r.code,{children:"secondary"}),", an ",e.jsx(r.code,{children:"Image"})," frame reads ",e.jsx(r.code,{children:"accent"}),", a ",e.jsx(r.code,{children:"Badge"})," with ",e.jsx(r.code,{children:'variant="secondary"'})," fills with ",e.jsx(r.code,{children:"secondary"}),". Overriding a token changes every component inside that subtree that reads it."]}),e.jsx(r.p,{children:"The first table is organised by token: override one and these components change. The second is organised by component: the tokens it reads and the utilities that read them. Utility lists show representative classes, not every occurrence. The last column lists colours a component paints without a token. A token override does not change those."}),e.jsx(r.h3,{id:"by-token",children:"By token"}),e.jsx(h,{}),e.jsx(r.h3,{id:"by-component",children:"By component"}),e.jsx(l,{}),e.jsxs(r.p,{children:["Both tables are generated from ",e.jsx(r.code,{children:"src/stories/tokenTable.ts"}),". A unit test (",e.jsx(r.code,{children:"src/utils/token-table.test.ts"}),") checks them against the component sources, so a new colour read in a component fails the test until its row is updated."]}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.h2,{id:"re-theming-a-subtree",children:"Re-theming a subtree"}),e.jsxs(r.p,{children:["Set the ",e.jsx(r.code,{children:"--color-*"})," tokens on a wrapper to re-colour the components inside it:"]}),e.jsx("div",{className:"usage-example",children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`.tile-muted {
  --color-accent: #8888aa;
  --color-secondary: #8888aa;
}
`})})}),e.jsx(r.p,{children:"What follows the override:"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Fills, borders, text, rings and glows."})," The colour utilities and the ",e.jsx(r.code,{children:"shadow-*"})," classes resolve ",e.jsx(r.code,{children:"--color-*"})," on the element itself, so they use the wrapper's value."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Gradients."})," They are built from ",e.jsx(r.code,{children:"from-*"})," and ",e.jsx(r.code,{children:"to-*"})," colour utilities (",e.jsx(r.code,{children:"bg-linear-135/srgb from-accent from-10% to-secondary to-90%"}),"), so a scoped ",e.jsx(r.code,{children:"--color-accent"})," or ",e.jsx(r.code,{children:"--color-secondary"})," reaches the ",e.jsx(r.code,{children:"Button"})," primary gradient, ",e.jsx(r.code,{children:"GradientText"}),", ",e.jsx(r.code,{children:"Notification"})," success, ",e.jsx(r.code,{children:"Pagination"}),", ",e.jsx(r.code,{children:"Steps"}),", ",e.jsx(r.code,{children:"TabNavigation"})," and ",e.jsx(r.code,{children:"Toggle"}),". The ",e.jsx(r.code,{children:"ScopedColorOverride"})," stories of ",e.jsx(r.code,{children:"Button"})," and ",e.jsx(r.code,{children:"GradientText"})," test this."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Glows."})," ",e.jsx(r.code,{children:"Button"}),"'s ",e.jsx(r.code,{children:"ScopedGlowOverride"})," story tests the ",e.jsx(r.code,{children:"shadow-*"})," classes. The static glow that ",e.jsx(r.code,{children:"Modal"})," and ",e.jsx(r.code,{children:"Drawer"})," show under ",e.jsx(r.code,{children:"prefers-reduced-motion"})," follows too (",e.jsx(r.code,{children:"Modal"}),"'s ",e.jsx(r.code,{children:"ReducedMotionGlowFollowsScopedColor"})," story)."]}),`
`]}),e.jsx(r.p,{children:"What does not follow:"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsxs(r.strong,{children:[e.jsx(r.code,{children:"--shadow-*"})," and ",e.jsx(r.code,{children:"--neon-*"})," read directly."]})," These variables hold ",e.jsx(r.code,{children:"var(--color-*)"})," and are resolved at ",e.jsx(r.code,{children:":root"}),", so ",e.jsx(r.code,{children:"var(--shadow-lg-accent)"})," in your own CSS gives the root accent glow whatever a wrapper sets. Use the ",e.jsx(r.code,{children:"shadow-*"})," class, or write the glow out with ",e.jsx(r.code,{children:"var(--color-*)"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Fixed colours."})," The last column of the component table: Tailwind palette colours (",e.jsx(r.code,{children:"bg-gray-600"}),", ",e.jsx(r.code,{children:"text-white"}),", ",e.jsx(r.code,{children:"bg-black/30"}),") and literal ",e.jsx(r.code,{children:"rgb()"})," values, as in the ",e.jsx(r.code,{children:"Carousel"})," stand-in effects and arrows."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"The colour-cycling animations."})," The idle glow on ",e.jsx(r.code,{children:"Modal"})," and ",e.jsx(r.code,{children:"Drawer"})," (",e.jsx(r.code,{children:"animate-rgb-glow"}),") and the cycling effects in ",e.jsx(r.code,{children:"Carousel"})," use the ",e.jsx(r.code,{children:"rgbGlow"}),", ",e.jsx(r.code,{children:"rgbBorder"}),", ",e.jsx(r.code,{children:"rgbStroke"})," and ",e.jsx(r.code,{children:"rgbBackground"})," keyframes, and ",e.jsx(r.code,{children:"rgbCycle"})," is defined the same way. The copies the browser uses are the unlayered ones at the end of ",e.jsx(r.code,{children:"src/index.css"}),", which hold literal rgb values. In Chromium, ",e.jsx(r.code,{children:"animate-rgb-glow"})," inside a wrapper that sets ",e.jsx(r.code,{children:"--color-primary"}),", ",e.jsx(r.code,{children:"--color-secondary"}),", ",e.jsx(r.code,{children:"--color-success"})," and ",e.jsx(r.code,{children:"--color-accent"})," to violet still cycles the default pink, cyan, green and yellow. The glow in the ",e.jsx(r.code,{children:"Steps"})," chevron pulse (",e.jsx(r.code,{children:"chevronFlow"}),") is a fixed pink as well."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Portals."})," ",e.jsx(r.code,{children:"Modal"}),", ",e.jsx(r.code,{children:"Drawer"})," and the enlarged preview of ",e.jsx(r.code,{children:"Image"})," render into ",e.jsx(r.code,{children:"document.body"}),", outside the wrapper in the DOM, so a ",e.jsx(r.code,{children:"--color-*"})," override on a wrapper around them does not reach them. Set the override on ",e.jsx(r.code,{children:":root"})," or ",e.jsx(r.code,{children:"body"})," to re-colour them."]}),`
`]}),e.jsx("hr",{className:"section-divider"}),e.jsxs(r.h2,{id:"global-rules-stylescss-applies",children:["Global rules ",e.jsx(r.code,{children:"styles.css"})," applies"]}),e.jsxs(r.p,{children:["Importing ",e.jsx(r.code,{children:"cyberui-2045/styles.css"})," also styles the page itself, not only the library's components. These are the rules that reach it, from the built ",e.jsx(r.code,{children:"dist/cyberui-2045.css"}),"."]}),e.jsx(r.h3,{id:"page-background-and-scrollbar-gutter",children:"Page background and scrollbar gutter"}),e.jsx("div",{className:"usage-example",children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@layer cyberui {
  html,
  body {
    scrollbar-gutter: stable;
    background-color: var(--color-base);
  }
}
`})})}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"html"})," and ",e.jsx(r.code,{children:"body"})," both get an opaque ",e.jsx(r.code,{children:"--color-base"})," background. A decorative layer with a negative ",e.jsx(r.code,{children:"z-index"})," paints behind the ",e.jsx(r.code,{children:"body"})," background and is hidden. Give the wrapper that holds it ",e.jsx(r.code,{children:"isolation: isolate"})," and it paints inside that wrapper."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"scrollbar-gutter: stable"})," reserves the scrollbar's width at the side of the page whether or not the page scrolls. With classic scrollbars, ",e.jsx(r.code,{children:"100vw"})," is then wider than the width you can use, by the scrollbar's width; in headless Chromium, ",e.jsx(r.code,{children:"window.innerWidth"})," was 400 and ",e.jsx(r.code,{children:"document.documentElement.clientWidth"})," 385 on a page with no overflow. With overlay scrollbars the gutter is empty and nothing changes."]}),`
`,e.jsxs(r.li,{children:["The rule is in the ",e.jsx(r.code,{children:"cyberui"})," layer. An unlayered ",e.jsx(r.code,{children:"body"})," rule of yours overrides the background on ",e.jsx(r.code,{children:"body"})," (",e.jsx(r.code,{children:"html"})," keeps ",e.jsx(r.code,{children:"--color-base"}),"). A rule in a layer declared before it, such as a Tailwind ",e.jsx(r.code,{children:"bg-*"})," utility on ",e.jsx(r.code,{children:"<body>"}),", does not."]}),`
`]}),e.jsx(r.h3,{id:"tailwinds-base-reset",children:"Tailwind's base reset"}),e.jsxs(r.p,{children:["The stylesheet is built with Tailwind, so it carries Tailwind's preflight in ",e.jsx(r.code,{children:"@layer base"}),". It applies to the whole page: ",e.jsx(r.code,{children:"margin: 0"}),", ",e.jsx(r.code,{children:"padding: 0"})," and ",e.jsx(r.code,{children:"box-sizing: border-box"})," on every element, unstyled headings and links, no list markers on ",e.jsx(r.code,{children:"ul"}),", ",e.jsx(r.code,{children:"ol"})," and ",e.jsx(r.code,{children:"menu"}),", ",e.jsx(r.code,{children:"display: block"})," on ",e.jsx(r.code,{children:"img"})," and ",e.jsx(r.code,{children:"svg"}),", and form controls that inherit the page font. It sits in a layer, so your unlayered CSS overrides it. In an app that already uses Tailwind v4 it is the same reset twice."]}),e.jsx(r.h3,{id:"theme-variables",children:"Theme variables"}),e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"--color-*"})," tokens are declared on ",e.jsx(r.code,{children:":root"})," (and ",e.jsx(r.code,{children:":host"}),") in ",e.jsx(r.code,{children:"@layer theme"}),". Your own ",e.jsx(r.code,{children:":root { --color-primary: ... }"})," placed after the import is unlayered and takes precedence."]}),e.jsx(r.h3,{id:"class-names-and-keyframes-in-the-global-namespace",children:"Class names and keyframes in the global namespace"}),e.jsxs(r.p,{children:["A few helper classes (",e.jsx(r.code,{children:".animate-scan"}),", ",e.jsx(r.code,{children:".animate-rgb-glow"}),", ",e.jsx(r.code,{children:".carousel-cover"}),") and their keyframes (",e.jsx(r.code,{children:"scan"}),", ",e.jsx(r.code,{children:"spin-slow"}),", ",e.jsx(r.code,{children:"rgbGlow"}),", and others) are defined without a prefix. A class or ",e.jsx(r.code,{children:"@keyframes"})," of your own with the same name overrides or collides with them."]}),e.jsx(r.h3,{id:"reduced-motion",children:"Reduced motion"}),e.jsxs(r.p,{children:["Under ",e.jsx(r.code,{children:"prefers-reduced-motion: reduce"}),", an unlayered block turns off ",e.jsx(r.code,{children:".animate-scan"}),", ",e.jsx(r.code,{children:".animate-scanline-sweep"})," and ",e.jsx(r.code,{children:".animate-spin-slow"})," for every element on the page that uses them. ",e.jsx(r.code,{children:".animate-rgb-glow"})," and ",e.jsx(r.code,{children:".animate-danger-glow"})," become a static glow, and ",e.jsx(r.code,{children:".animate-crt-power-on"})," and ",e.jsx(r.code,{children:".animate-crt-power-off"})," become a 150ms fade."]}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.p,{children:e.jsx(r.em,{children:"Design tokens power the cyberpunk future! 🚀"})})]})]})}function w(a={}){const{wrapper:r}={...d(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(t,{...a})}):t(a)}export{w as default};
