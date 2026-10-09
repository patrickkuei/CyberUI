import{j as i}from"./jsx-runtime-D_zvdyIk.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,c={title:"Foundation/Deprecated gradient variables",tags:["!dev","!autodocs"],parameters:{layout:"centered",docs:{description:{component:"Compatibility check for the deprecated `--gradient-*` variables, which\n2.6 code may still read. It checks the Storybook build of the stylesheet;\nthe `@theme static` declaration is guarded by `src/utils/tokens.test.ts`. Hidden from the sidebar (`!dev`); it runs in the\nStorybook test project only."}}}},t={render:()=>i.jsx("div",{className:"h-12 w-64",style:{backgroundImage:"linear-gradient(var(--gradient-accent))"},"data-testid":"legacy-gradient",children:"Neon Drift"}),play:async({canvasElement:n})=>{const a=getComputedStyle(document.documentElement);await e(a.getPropertyValue("--gradient-primary").trim()).not.toBe(""),await e(a.getPropertyValue("--gradient-secondary").trim()).not.toBe(""),await e(a.getPropertyValue("--gradient-accent").trim()).not.toBe("");const o=n.querySelector('[data-testid="legacy-gradient"]');if(!o)throw new Error("legacy gradient element did not render");const r=getComputedStyle(o).backgroundImage;await e(r).toContain("linear-gradient"),await e(r).toContain("255, 251, 0"),await e(r).toContain("0, 255, 249")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () =>
  // Inline style, so nothing in the stylesheet references the variable.
  <div className="h-12 w-64" style={{
    backgroundImage: 'linear-gradient(var(--gradient-accent))'
  }} data-testid="legacy-gradient">
      Neon Drift
    </div>,
  play: async ({
    canvasElement
  }) => {
    const root = getComputedStyle(document.documentElement);
    // The values stay \`var(--color-*)\`, resolved at :root.
    await expect(root.getPropertyValue('--gradient-primary').trim()).not.toBe('');
    await expect(root.getPropertyValue('--gradient-secondary').trim()).not.toBe('');
    await expect(root.getPropertyValue('--gradient-accent').trim()).not.toBe('');

    // Reading the variable as 2.6 code did paints accent to secondary.
    const el = canvasElement.querySelector('[data-testid="legacy-gradient"]');
    if (!el) throw new Error('legacy gradient element did not render');
    const image = getComputedStyle(el).backgroundImage;
    await expect(image).toContain('linear-gradient');
    // accent #fffb00 and secondary #00fff9.
    await expect(image).toContain('255, 251, 0');
    await expect(image).toContain('0, 255, 249');
  }
}`,...t.parameters?.docs?.source}}};const s=["StillDeclaredOnRoot"];export{t as StillDeclaredOnRoot,s as __namedExportsOrder,c as default};
