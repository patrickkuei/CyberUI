import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-C45jjArc.js";import{M as i}from"./blocks-CbWvB9KQ.js";import"./iframe-qIXMJ8Q3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CovUby51.js";import"./index-CGGz6Qgb.js";function o(r){const s={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Foundation/Responsive Design"}),`
`,e.jsx("style",{children:`
  .sbdocs,
  .sbdocs-wrapper,
  .css-3rewwu {
    padding: 0;
  }

  .responsive-container {
    max-width: 64rem;
    margin: 0 auto;
    padding: 2rem;
    background-color: #1a1a2e;
    color: #e0e0e0;
  }

  .responsive-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    color: #ff005d;
    text-shadow: 0 0 8px #ff005d, 0 0 16px #ff005d;
  }

  .responsive-subtitle {
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

  .code-example {
    background-color: #2d2d44;
    border: 1px solid #3c3c5e;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1rem 0;
  }

  .demo-section {
    background-color: #2d2d44;
    border: 1px solid #3c3c5e;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
    text-align: center;
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
`,e.jsxs("div",{className:"responsive-container",children:[e.jsx("h1",{className:"responsive-title",children:"Responsive Design"}),e.jsx("p",{className:"responsive-subtitle",children:"Build adaptive interfaces that work on all screen sizes"}),e.jsxs(s.p,{children:["CyberUI components support ",e.jsx(s.strong,{children:"responsive design"})," out of the box. Instead of writing complex media queries, you can pass an object to define different values for different screen sizes."]}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"usage",children:"Usage"}),e.jsx(s.p,{children:"All CyberUI components with size props support responsive values:"}),e.jsx("div",{className:"code-example",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Button
  //      (WHEN: Breakpoint System)    (WHAT: Size Variant)
  size={{ base:                        'sm',      // On Mobile  -> Small
          md:                          'lg' }}    // On Tablet  -> Large
>
  Responsive Button
</Button>
`})})}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"breakpoint-system",children:"Breakpoint System"}),e.jsx(s.p,{children:"CyberUI uses the same breakpoint system as Tailwind CSS:"}),e.jsx("div",{className:"code-example",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const breakpoints = {
  base: "0px",      // Mobile first (default)
  sm: "640px",      // Small tablets
  md: "768px",      // Tablets
  lg: "1024px",     // Laptops & desktops
  xl: "1280px",     // Large desktops
  "2xl": "1536px",  // Extra large screens
}
`})})}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"size-variants",children:"Size Variants"}),e.jsxs(s.p,{children:["These are the ",e.jsx(s.strong,{children:"prop values"})," for component dimensions (distinct from the breakpoint keys above):"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"sm"}),": Compact"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"md"}),": Standard"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"lg"}),": Spacious"]}),`
`]}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"typescript-support",children:"TypeScript Support"}),e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"ResponsiveValue"})," for type safety:"]}),e.jsx("div",{className:"code-example",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import type { ResponsiveValue } from 'cyberui';

interface Props {
  size: ResponsiveValue<'sm' | 'md' | 'lg'>;
}
`})})}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.h2,{id:"best-practices",children:"Best Practices"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mobile-First"}),": Always define a ",e.jsx(s.code,{children:"base"})," size."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Progressive"}),": Add larger sizes for bigger screens."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Consistent"}),": Use logical progression (sm → md → lg)."]}),`
`]}),e.jsx("hr",{className:"section-divider"}),e.jsx(s.p,{children:e.jsx(s.em,{children:"Build the future with responsive design! 🚀"})})]})]})}function h(r={}){const{wrapper:s}={...n(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(o,{...r})}):o(r)}export{h as default};
