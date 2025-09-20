import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-D-FaaY-Y.js";import{M as n}from"./blocks-Cal1i1FW.js";import"./iframe-DGTRJ_05.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FR3JvTkf.js";import"./index-DST0rldo.js";function r(o){const s={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Foundation/Design Tokens"}),`
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
`}),`
`,e.jsxs("div",{className:"tokens-container",children:[e.jsx("h1",{className:"tokens-title",children:"Design Tokens"}),e.jsx("p",{className:"tokens-subtitle",children:"The foundation of CyberUI's cyberpunk aesthetic"}),e.jsxs(s.p,{children:["Design tokens are the ",e.jsx(s.strong,{children:"single source of truth"})," for all design decisions in CyberUI. They ensure consistency across components and make theming effortless."]}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"color-tokens",children:"Color Tokens"}),e.jsx(s.p,{children:"CyberUI uses a carefully crafted cyberpunk color palette with neon highlights and dark backgrounds."}),e.jsxs("div",{className:"token-grid",children:[e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🎨 Brand Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#ff005d"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-primary"}),e.jsx("div",{className:"token-value",children:"#ff005d"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#00fff9"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-secondary"}),e.jsx("div",{className:"token-value",children:"#00fff9"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#fffb00"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-accent"}),e.jsx("div",{className:"token-value",children:"#fffb00"})]})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🏗️ Background Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#1a1a2e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-base"}),e.jsx("div",{className:"token-value",children:"#1a1a2e"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#2d2d44"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-surface"}),e.jsx("div",{className:"token-value",children:"#2d2d44"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#3c3c5e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-border-default"}),e.jsx("div",{className:"token-value",children:"#3c3c5e"})]})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"📝 Text Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#e0e0e0"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-default"}),e.jsx("div",{className:"token-value",children:"#e0e0e0"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#8888aa"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-muted"}),e.jsx("div",{className:"token-value",children:"#8888aa"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#1a1a2e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-inverse"}),e.jsx("div",{className:"token-value",children:"#1a1a2e"})]})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"⚡ Status Colors"}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#00ff9e"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-success"}),e.jsx("div",{className:"token-value",children:"#00ff9e"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#ff4f4f"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-error"}),e.jsx("div",{className:"token-value",children:"#ff4f4f"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#ffaa00"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-warning"}),e.jsx("div",{className:"token-value",children:"#ffaa00"})]})]}),e.jsxs("div",{className:"color-token",children:[e.jsx("div",{className:"color-swatch",style:{backgroundColor:"#00aaff"}}),e.jsxs("div",{className:"token-info",children:[e.jsx("div",{className:"token-name",children:"--color-info"}),e.jsx("div",{className:"token-value",children:"#00aaff"})]})]})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"effect-tokens",children:"Effect Tokens"}),e.jsx(s.p,{children:"CyberUI includes special effect tokens for creating the signature cyberpunk aesthetic."}),e.jsxs("div",{className:"token-grid",children:[e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"✨ Neon Glow Effects"}),e.jsxs("div",{className:"effect-demo",style:{boxShadow:"0 0 8px #00ff9e, 0 0 16px #00ff9e"},children:[e.jsx("div",{className:"token-name",children:"--neon-success-glow"}),e.jsx("div",{className:"token-value",children:"0 0 8px var(--color-success), 0 0 16px var(--color-success)"})]}),e.jsxs("div",{className:"effect-demo",style:{boxShadow:"0 0 8px #ff4f4f, 0 0 16px #ff4f4f"},children:[e.jsx("div",{className:"token-name",children:"--neon-error-glow"}),e.jsx("div",{className:"token-value",children:"0 0 8px var(--color-error), 0 0 16px var(--color-error)"})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🌈 Gradients"}),e.jsxs("div",{className:"effect-demo gradient",style:{background:"linear-gradient(90deg, #fffb00, #00fff9)"},children:[e.jsx("div",{className:"token-name",children:"--gradient-accent"}),e.jsx("div",{className:"token-value",children:"90deg, var(--color-accent), var(--color-secondary)"})]})]}),e.jsxs("div",{className:"token-card",children:[e.jsx("h3",{children:"🎭 Component Shadows"}),e.jsx("div",{className:"shadow-demo",style:{boxShadow:"0 0 12px #fffb00"},children:e.jsx("div",{className:"token-name",children:"--shadow-lg-accent"})}),e.jsx("div",{className:"shadow-demo",style:{boxShadow:"0 0 16px #00fff9"},children:e.jsx("div",{className:"token-name",children:"--shadow-secondary"})}),e.jsx("div",{className:"shadow-demo",style:{boxShadow:"0 0 12px #ff005d"},children:e.jsx("div",{className:"token-name",children:"--shadow-primary"})})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"usage-in-components",children:"Usage in Components"}),e.jsx(s.h3,{id:"using-tokens-in-tailwind-classes",children:"Using Tokens in Tailwind Classes"}),e.jsx(s.p,{children:"All color tokens are automatically available as Tailwind CSS classes:"}),e.jsx("div",{className:"usage-example",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-surface">Surface background</div>

// Text colors
<p className="text-default">Primary text</p>
<p className="text-muted">Muted text</p>

// Border colors
<div className="border-2 border-border-default">With border</div>

// Accent gradient
<div class="h-48 w-full bg-linear-(--gradient-accent)">
    Accent Gradient Background
</div>
`})})}),e.jsx(s.h3,{id:"using-tokens-in-custom-css",children:"Using Tokens in Custom CSS"}),e.jsx(s.p,{children:"Access tokens directly in your custom styles:"}),e.jsx("div",{className:"usage-example",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.custom-component {
  background-color: var(--color-surface);
  color: var(--color-default);
  border: 1px solid var(--color-border-default);
  box-shadow: var(--shadow-primary);
}

.neon-button {
  background: var(--color-primary);
  box-shadow: var(--neon-success-glow);
}
`})})}),e.jsx(s.h3,{id:"using-tokens-in-inline-styles",children:"Using Tokens in Inline Styles"}),e.jsx(s.p,{children:"Perfect for dynamic styling in React components:"}),e.jsx("div",{className:"usage-example",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const MyComponent = ({ glowColor }) => (
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
`})})}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.p,{children:e.jsx(s.em,{children:"Design tokens power the cyberpunk future! 🚀"})})]})]})}function x(o={}){const{wrapper:s}={...a(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(r,{...o})}):r(o)}export{x as default};
