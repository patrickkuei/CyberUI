import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-Qe2Zs-O2.js";import{r as V}from"./index-SuxCqC7U.js";import{B as C}from"./Button-8tZQVhCy.js";import{c as b}from"./cn-CNMN3A1O.js";import{u as K}from"./useDialogBehavior-BV_Dn1Rx.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Dyfz9D4p.js";import"./responsive-Bfe9yerJ.js";import"./usePrefersReducedMotion-B8o4Hpfn.js";import"./reducedMotionSubscription-DIxCKqWn.js";const Y={openDuration:600,closeDuration:400,crtEffects:!0},Z={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",fullscreen:"max-w-none w-full h-full"},v=a.memo(({isOpen:s,onClose:o,title:l,children:c,footer:t,onCancel:n,onConfirm:r,cancelText:d="Cancel",confirmText:A="Confirm",confirmLoading:E=!1,showCancel:D=!0,showConfirm:I=!0,size:S="lg",variant:m="default",closeOnOverlayClick:B=!0,closeOnEscape:z=!0,animation:N,className:j="",overlayClassName:$="",showCloseButton:L=!0,onOpen:k,onCRTBootComplete:P})=>{const p=a.useMemo(()=>({...Y,...N}),[N]),R=a.useRef(null),M=a.useRef(`modal-title-${Math.random().toString(36).slice(2)}`),O=a.useRef(!1),{overlayRef:F,isOpening:i,isClosing:f,close:h,handleOverlayClick:_}=K(s,{closeDuration:p.closeDuration,openDuration:p.openDuration,closeOnEscape:z,closeOnOutsideClick:B,lockScroll:!0,onOpenSettle:()=>{P?.(),R.current?.focus()},onClose:o});a.useEffect(()=>{s&&!O.current&&k?.(),O.current=s},[s,k]);const U=a.useCallback(()=>{n?.(),h()},[n,h]),q=a.useCallback(()=>{r?.(),h()},[r,h]),G=a.useMemo(()=>{const u=m==="danger",x=u?"border-error":"border-accent",T=u?"shadow-error":"shadow-lg-accent",W=u?"shadow-error/50":"shadow-input-accent/50",H=u?"animate-danger-glow":"animate-rgb-glow";return b("relative bg-surface border-2 rounded-lg max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100",Z[S],p.crtEffects&&i?`animate-crt-power-on ${x} ${T}`:p.crtEffects&&f?`animate-crt-power-off ${x} ${T}`:f?`scale-95 opacity-0 ${x}/20`:i?`scale-105 opacity-90 ${x} ${W}`:`scale-100 opacity-100 ${H}`,j)},[S,p.crtEffects,f,i,j,m]);return s?V.createPortal(e.jsx("div",{ref:F,className:`fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${$} ${f?"bg-black/0 backdrop-blur-none opacity-0 duration-800":i?"bg-black/30 backdrop-blur-md opacity-100 duration-500":"bg-black/30 backdrop-blur-sm opacity-100 duration-300"} motion-reduce:duration-150`,style:{top:0,left:0,width:"100vw",height:"100vh"},onClick:_,children:e.jsxs("div",{ref:R,className:G,onClick:u=>u.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":l?M.current:void 0,tabIndex:-1,children:[L&&e.jsx("button",{onClick:h,className:`absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 motion-reduce:rotate-0 motion-reduce:hover:scale-100 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${f?"scale-0 rotate-180 opacity-0":i?"scale-0 opacity-0":"scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"}`,"aria-label":"Close modal",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",className:"relative",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),l&&e.jsx("div",{className:b("px-6 py-4 border-b flex-shrink-0 transition-all duration-300 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100",m==="danger"?"border-error/20":"border-accent/20",i?"opacity-0 translate-y-2":"opacity-100 translate-y-0"),children:e.jsx("h2",{id:M.current,className:b("text-lg font-semibold",m==="danger"?"text-error":"text-primary"),children:l})}),e.jsx("div",{className:`flex-1 overflow-auto p-6 transition-all duration-500 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${i?"opacity-0 translate-y-4":"opacity-100 translate-y-0"}`,children:c}),(t||n||r)&&e.jsx("div",{className:b("px-6 py-4 border-t flex-shrink-0 transition-all duration-300 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100",m==="danger"?"border-error/20":"border-accent/20",i?"opacity-0 translate-y-2":"opacity-100 translate-y-0"),children:t||e.jsxs("div",{className:"flex flex-col-reverse sm:flex-row justify-between items-center gap-3",children:[e.jsx("span",{className:"text-muted text-xs font-mono hidden sm:block",children:"> ESC to abort"}),e.jsxs("div",{className:"flex gap-3 w-full sm:w-auto",children:[D&&n&&e.jsx(C,{variant:"ghost",size:"sm",onClick:U,className:"flex-1 sm:flex-none",children:d}),I&&r&&e.jsx(C,{variant:m==="danger"?"danger":"primary",size:"sm",onClick:q,disabled:E,className:"flex-1 sm:flex-none",children:A})]})]})})]})}),document.body):null});v.displayName="CyberUI.Modal";const{expect:y}=__STORYBOOK_MODULE_TEST__,ce={title:"Components/Modal",component:v,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed modal dialog with CRT Power-on Effect animation, overlay backdrop, and portal rendering.

**Features:**
- **CRT Power-on Effect:** Authentic retro monitor boot sequence with flickering and horizontal line expansion
- **Portal Rendering:** Uses React Portal for proper z-index layering
- **Backdrop Controls:** Configurable overlay click and escape key handling
- **Multiple Sizes:** From small dialogs to fullscreen modals
- **Accessibility:** Full ARIA support with focus management and screen reader compatibility. Escape restores focus to the trigger; overlay click does not.
- **Cyberpunk Aesthetics:** Grid background, scanline effects, corner accents, and neon styling
- **Reduced Motion:** Under \`prefers-reduced-motion: reduce\`, open and close are a 150ms opacity-only fade (no CRT scaling), \`animation.openDuration\`/\`closeDuration\` are capped at 150ms, and the idle glow holds still

**Usage:**

\`\`\`tsx
import React, { useState } from 'react';
import { Modal, Button } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="System Configuration"
      >
        <p>Modal content goes here...</p>
      </Modal>
    </>
  );
}
\`\`\`

**Advanced Usage:**

\`\`\`tsx
// Custom CRT animations
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Terminal Access"
  animation={{
    crtEffects: true,
    openDuration: 2000,
    closeDuration: 1000,
    flickerIntensity: 1.2
  }}
  onCRTBootComplete={() => console.log('Boot sequence complete')}
>
  <div className="font-mono text-accent">
    > System ready...
  </div>
</Modal>

// Fullscreen modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="fullscreen"
  closeOnOverlayClick={false}
>
  <div className="h-full flex items-center justify-center">
    <h1 className="text-4xl text-accent">Immersive Experience</h1>
  </div>
</Modal>

// Minimal styling
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  animation={{ crtEffects: false }}
  showCloseButton={false}
>
  <p>Clean, simple modal without CRT effects</p>
</Modal>
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`isOpen\` | \`boolean\` | ✅ | - | Controls modal visibility |
| \`onClose\` | \`() => void\` | ✅ | - | Called when modal should close |
| \`children\` | \`React.ReactNode\` | ✅ | - | Modal content |
| \`title\` | \`string\` | ❌ | - | Optional modal title in header |
| \`size\` | \`'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| 'fullscreen'\` | ❌ | \`'md'\` | Modal size |
| \`closeOnOverlayClick\` | \`boolean\` | ❌ | \`true\` | Allow closing by clicking overlay |
| \`closeOnEscape\` | \`boolean\` | ❌ | \`true\` | Allow closing with Escape key |
| \`showCloseButton\` | \`boolean\` | ❌ | \`true\` | Show close button in header |
| \`animation\` | \`ModalAnimationConfig\` | ❌ | CRT enabled | Animation configuration. Durations are capped at 150ms under reduced motion |
| \`className\` | \`string\` | ❌ | \`''\` | Additional modal CSS classes |
| \`overlayClassName\` | \`string\` | ❌ | \`''\` | Additional overlay CSS classes |
| \`onOpen\` | \`() => void\` | ❌ | - | Called when modal opens |
| \`onCRTBootComplete\` | \`() => void\` | ❌ | - | Called when CRT boot animation completes |

**Animation Configuration:**

\`\`\`tsx
interface ModalAnimationConfig {
  openDuration?: number;      // Boot sequence duration (ms); max 150 under reduced motion
  closeDuration?: number;     // Shutdown animation duration (ms); max 150 under reduced motion
  crtEffects?: boolean;       // Enable CRT power-on effects
  flickerIntensity?: number;  // Flicker effect intensity (0-2)
}
\`\`\`
`}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls modal visibility"},title:{control:"text",description:"Optional modal title"},size:{control:{type:"select"},options:["sm","md","lg","xl","fullscreen"],description:"Modal size"},closeOnOverlayClick:{control:"boolean",description:"Allow closing by clicking overlay"},closeOnEscape:{control:"boolean",description:"Allow closing with Escape key"},showCloseButton:{control:"boolean",description:"Show close button"},children:{control:!1,description:"Modal content"},onClose:{action:"closed",description:"Close callback"},onOpen:{action:"opened",description:"Open callback"},onCRTBootComplete:{action:"boot-complete",description:"CRT boot complete callback"}}},J=({children:s,storyName:o})=>{const[l,c]=a.useState(!1),t=()=>c(!1);return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsxs(C,{onClick:()=>c(!0),variant:"ghost",size:"md",children:["Open ",o," Modal"]}),e.jsx(v,{isOpen:l,onClose:t,title:"System Alert",onCancel:()=>console.log("Cancelled"),onConfirm:()=>console.log("Confirmed"),cancelText:"Cancel",confirmText:"Execute",onOpen:()=>console.log("Modal opened"),onCRTBootComplete:()=>console.log("CRT boot complete"),children:s})]})},g={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(J,{storyName:"Default",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 bg-error rounded-full animate-pulse"}),e.jsx("p",{className:"text-error font-semibold",children:"Security Protocol Breach Detected"})]}),e.jsx("div",{className:"bg-surface/30 p-4 rounded border border-error/30",children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Source:"}),e.jsx("span",{className:"text-accent font-mono",children:"192.168.1.101"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Threat Level:"}),e.jsx("span",{className:"text-error font-mono",children:"CRITICAL"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Time:"}),e.jsx("span",{className:"text-primary font-mono",children:"2045-08-15 14:32:07"})]})]})}),e.jsx("p",{className:"text-muted text-sm",children:"An unauthorized access attempt has been detected on the neural network interface. The system recommends immediate isolation of the compromised node."}),e.jsx("div",{className:"border-l-2 border-accent pl-4",children:e.jsx("p",{className:"text-accent text-sm font-mono",children:"> Awaiting admin authorization..."})})]})})},w={parameters:{docs:{description:{story:"Under `prefers-reduced-motion: reduce` the idle glow pulse becomes a static glow in the same colours. That glow follows a `--color-accent` or `--color-error` override on an ancestor. The test reads the reduced-motion rule and applies it inside a violet wrapper."}}},render:()=>e.jsx("div",{className:"p-6 bg-base",style:{"--color-accent":"#c084fc","--color-error":"#c084fc"},children:e.jsx("div",{"data-testid":"glow-probe",className:"border-2 p-4 text-default",children:"Static glow, violet sector"})}),play:async({canvasElement:s})=>{const o=s.querySelector('[data-testid="glow-probe"]');if(!o)throw new Error("probe did not render");const l=[];for(const t of Array.from(document.styleSheets)){let n;try{n=t.cssRules}catch{continue}for(const r of Array.from(n))if(r instanceof CSSMediaRule&&r.conditionText.includes("prefers-reduced-motion: reduce"))for(const d of Array.from(r.cssRules))d instanceof CSSStyleRule&&l.push(d)}const c=t=>{const n=l.find(r=>r.selectorText.split(",").some(d=>d.trim()===t));if(!n)throw new Error(`no reduced-motion rule for ${t}`);return n.style.getPropertyValue("box-shadow")};o.style.boxShadow=c(".animate-rgb-glow"),await y(getComputedStyle(o).boxShadow).toContain("192, 132, 252"),await y(getComputedStyle(o).boxShadow).not.toContain("255, 251, 0"),o.style.boxShadow=c(".animate-danger-glow"),await y(getComputedStyle(o).boxShadow).toContain("192, 132, 252"),await y(getComputedStyle(o).boxShadow).not.toContain("255, 79, 79")}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  },
  render: () => <ModalWrapper storyName="Default">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
          <p className="text-error font-semibold">
            Security Protocol Breach Detected
          </p>
        </div>
        
        <div className="bg-surface/30 p-4 rounded border border-error/30">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Source:</span>
              <span className="text-accent font-mono">192.168.1.101</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Threat Level:</span>
              <span className="text-error font-mono">CRITICAL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Time:</span>
              <span className="text-primary font-mono">2045-08-15 14:32:07</span>
            </div>
          </div>
        </div>

        <p className="text-muted text-sm">
          An unauthorized access attempt has been detected on the neural network interface. 
          The system recommends immediate isolation of the compromised node.
        </p>

        <div className="border-l-2 border-accent pl-4">
          <p className="text-accent text-sm font-mono">
            &gt; Awaiting admin authorization...
          </p>
        </div>
      </div>
    </ModalWrapper>
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Under \`prefers-reduced-motion: reduce\` the idle glow pulse becomes a static glow in the same colours. That glow follows a \`--color-accent\` or \`--color-error\` override on an ancestor. The test reads the reduced-motion rule and applies it inside a violet wrapper.'
      }
    }
  },
  render: () => <div className="p-6 bg-base" style={{
    '--color-accent': '#c084fc',
    '--color-error': '#c084fc'
  } as React.CSSProperties}>
      <div data-testid="glow-probe" className="border-2 p-4 text-default">
        Static glow, violet sector
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const probe = canvasElement.querySelector<HTMLElement>('[data-testid="glow-probe"]');
    if (!probe) throw new Error('probe did not render');

    // A play function can't flip the media query, so find the rules inside the
    // reduced-motion block and apply their box-shadow to the probe instead.
    const reducedRules: CSSStyleRule[] = [];
    for (const sheet of Array.from(document.styleSheets)) {
      let rules: CSSRuleList;
      try {
        rules = sheet.cssRules;
      } catch {
        continue;
      }
      for (const rule of Array.from(rules)) {
        if (rule instanceof CSSMediaRule && rule.conditionText.includes('prefers-reduced-motion: reduce')) {
          for (const inner of Array.from(rule.cssRules)) {
            if (inner instanceof CSSStyleRule) reducedRules.push(inner);
          }
        }
      }
    }
    const shadowFor = (selector: string): string => {
      const rule = reducedRules.find(r => r.selectorText.split(',').some(s => s.trim() === selector));
      if (!rule) throw new Error(\`no reduced-motion rule for \${selector}\`);
      return rule.style.getPropertyValue('box-shadow');
    };

    // #c084fc = rgb(192, 132, 252); the defaults are accent #fffb00 and error #ff4f4f.
    probe.style.boxShadow = shadowFor('.animate-rgb-glow');
    await expect(getComputedStyle(probe).boxShadow).toContain('192, 132, 252');
    await expect(getComputedStyle(probe).boxShadow).not.toContain('255, 251, 0');
    probe.style.boxShadow = shadowFor('.animate-danger-glow');
    await expect(getComputedStyle(probe).boxShadow).toContain('192, 132, 252');
    await expect(getComputedStyle(probe).boxShadow).not.toContain('255, 79, 79');
  }
}`,...w.parameters?.docs?.source}}};const de=["Default","ReducedMotionGlowFollowsScopedColor"];export{g as Default,w as ReducedMotionGlowFollowsScopedColor,de as __namedExportsOrder,ce as default};
