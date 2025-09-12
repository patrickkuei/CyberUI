import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-CpRvEPlU.js";import{M as n}from"./blocks-BSD8ooXq.js";import{r as i}from"./iframe-3mg8uO-U.js";import"./Button-Bcf2d3yA.js";import"./Input-CIhMLt47.js";import"./Card-BZ0PNrM8.js";import"./Carousel-1gMYHojE.js";import"./Modal-TWMbsris.js";import"./Badge-SLD6X9PR.js";import"./Toggle-6rbbhcGh.js";import"./Select-hEgm6b1z.js";import"./Image-DOQ9lWvk.js";import"./CircularProgress-DeeSRG5T.js";import"./SegmentedProgress-Bjtls7l7.js";import"./Notification-DZaaPdkz.js";import"./LinearProgress-CJR6j6Kr.js";import"./Skeleton-CcaEC4h3.js";import"./TabNavigation-gNHf-v-y.js";import"./preload-helper-D9Z9MdNV.js";import"./index-lhxX6Ztu.js";import"./index-QD6klnVb.js";import"./responsive-DCwPLDon.js";import"./index-Dm1LNrgC.js";i.createContext(void 0);function o(s){const r={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Foundation/Responsive Design"}),`
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
`,e.jsxs("div",{className:"responsive-container",children:[e.jsx("h1",{className:"responsive-title",children:"Responsive Design"}),e.jsx("p",{className:"responsive-subtitle",children:"Build adaptive interfaces that work on all screen sizes"}),e.jsxs(r.p,{children:["CyberUI components support ",e.jsx(r.strong,{children:"responsive design"})," out of the box. Instead of writing complex media queries, you can pass an object to define different values for different screen sizes."]}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.h2,{id:"usage",children:"Usage"}),e.jsx(r.p,{children:"All CyberUI components with size props support responsive values:"}),e.jsx("div",{className:"code-example",children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Button size={{ base: 'sm', md: 'md', lg: 'lg' }}>
  Responsive Button
</Button>
`})})}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.h2,{id:"breakpoint-system",children:"Breakpoint System"}),e.jsx(r.p,{children:"CyberUI uses the same breakpoint system as Tailwind CSS:"}),e.jsx("div",{className:"code-example",children:e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const breakpoints = {
  base: "0px",      // Mobile first (default)
  sm: "640px",      // Small tablets
  md: "768px",      // Tablets
  lg: "1024px",     // Laptops & desktops
  xl: "1280px",     // Large desktops
  "2xl": "1536px",  // Extra large screens
}
`})})}),e.jsx("hr",{className:"section-divider"}),e.jsx(r.p,{children:e.jsx(r.em,{children:"Build the future with responsive design! 🚀"})})]})]})}function I(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(o,{...s})}):o(s)}export{I as default};
