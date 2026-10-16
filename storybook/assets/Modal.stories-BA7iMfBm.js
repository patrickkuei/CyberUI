import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-i39TiQeM.js";import{r as Q}from"./index-Bv5gRgLE.js";import{B as S}from"./Button-DlrevXgb.js";import{c as b}from"./cn-CNMN3A1O.js";import{u as ee}from"./useDialogBehavior-Bah12Kp2.js";import{g as oe,i as te}from"./responsive-CWb7r9Tt.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DQh7RuLM.js";import"./usePrefersReducedMotion-cf6IW_g1.js";import"./reducedMotionSubscription-DIxCKqWn.js";const ne={openDuration:600,closeDuration:400,crtEffects:!0},ae={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl","2xl":"max-w-6xl",fullscreen:"max-w-none w-full h-full"},se={sm:"max-w-md w-auto h-auto",md:"max-w-lg w-auto h-auto",lg:"max-w-2xl w-auto h-auto",xl:"max-w-4xl w-auto h-auto","2xl":"max-w-6xl w-auto h-auto",fullscreen:"max-w-none w-full h-full"},re=o=>te(o)?oe({...o,base:o.base??"lg"},se):ae[o],R=r.memo(({isOpen:o,onClose:t,title:l,children:c,footer:s,onCancel:n,onConfirm:a,cancelText:d="Cancel",confirmText:L="Confirm",confirmLoading:$=!1,showCancel:P=!0,showConfirm:F=!0,size:k="lg",variant:m="default",closeOnOverlayClick:G=!0,closeOnEscape:H=!0,animation:T,className:O="",overlayClassName:_="",showCloseButton:U=!0,onOpen:M,onCRTBootComplete:X})=>{const f=r.useMemo(()=>({...ne,...T}),[T]),E=r.useRef(null),A=r.useRef(`modal-title-${Math.random().toString(36).slice(2)}`),D=r.useRef(!1),{overlayRef:W,isOpening:i,isClosing:x,close:h,handleOverlayClick:q}=ee(o,{closeDuration:f.closeDuration,openDuration:f.openDuration,closeOnEscape:H,closeOnOutsideClick:G,lockScroll:!0,onOpenSettle:()=>{X?.(),E.current?.focus()},onClose:t});r.useEffect(()=>{o&&!D.current&&M?.(),D.current=o},[o,M]);const V=r.useCallback(()=>{n?.(),h()},[n,h]),K=r.useCallback(()=>{a?.(),h()},[a,h]),Z=r.useMemo(()=>{const p=m==="danger",y=p?"border-error":"border-accent",B=p?"shadow-error":"shadow-lg-accent",Y=p?"shadow-error/50":"shadow-input-accent/50",J=p?"animate-danger-glow":"animate-rgb-glow";return b("relative bg-surface border-2 rounded-lg max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100",re(k),f.crtEffects&&i?`animate-crt-power-on ${y} ${B}`:f.crtEffects&&x?`animate-crt-power-off ${y} ${B}`:x?`scale-95 opacity-0 ${y}/20`:i?`scale-105 opacity-90 ${y} ${Y}`:`scale-100 opacity-100 ${J}`,O)},[k,f.crtEffects,x,i,O,m]);return o?Q.createPortal(e.jsx("div",{ref:W,className:`fixed z-50 flex items-center justify-center p-4 transition-all ease-out ${_} ${x?"bg-black/0 backdrop-blur-none opacity-0 duration-800":i?"bg-black/30 backdrop-blur-md opacity-100 duration-500":"bg-black/30 backdrop-blur-sm opacity-100 duration-300"} motion-reduce:duration-150`,style:{top:0,left:0,width:"100vw",height:"100vh"},onClick:q,children:e.jsxs("div",{ref:E,className:Z,onClick:p=>p.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":l?A.current:void 0,tabIndex:-1,children:[U&&e.jsx("button",{onClick:h,className:`absolute top-4 right-4 text-muted hover:text-accent transition-all duration-300 motion-reduce:duration-150 motion-reduce:scale-100 motion-reduce:rotate-0 motion-reduce:hover:scale-100 z-20 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transform ${x?"scale-0 rotate-180 opacity-0":i?"scale-0 opacity-0":"scale-100 opacity-100 hover:scale-110 hover:bg-accent/10"}`,"aria-label":"Close modal",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",className:"relative",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),l&&e.jsx("div",{className:b("px-6 py-4 border-b flex-shrink-0 transition-all duration-300 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100",m==="danger"?"border-error/20":"border-accent/20",i?"opacity-0 translate-y-2":"opacity-100 translate-y-0"),children:e.jsx("h2",{id:A.current,className:b("text-lg font-semibold",m==="danger"?"text-error":"text-primary"),children:l})}),e.jsx("div",{className:`flex-1 overflow-auto p-6 transition-all duration-500 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${i?"opacity-0 translate-y-4":"opacity-100 translate-y-0"}`,children:c}),(s||n||a)&&e.jsx("div",{className:b("px-6 py-4 border-t flex-shrink-0 transition-all duration-300 motion-reduce:duration-150 motion-reduce:translate-y-0 motion-reduce:opacity-100",m==="danger"?"border-error/20":"border-accent/20",i?"opacity-0 translate-y-2":"opacity-100 translate-y-0"),children:s||e.jsxs("div",{className:"flex flex-col-reverse sm:flex-row justify-between items-center gap-3",children:[e.jsx("span",{className:"text-muted text-xs font-mono hidden sm:block",children:"> ESC to abort"}),e.jsxs("div",{className:"flex gap-3 w-full sm:w-auto",children:[P&&n&&e.jsx(S,{variant:"ghost",size:"sm",onClick:V,className:"flex-1 sm:flex-none",children:d}),F&&a&&e.jsx(S,{variant:m==="danger"?"danger":"primary",size:"sm",onClick:K,disabled:$,className:"flex-1 sm:flex-none",children:L})]})]})})]})}),document.body):null});R.displayName="CyberUI.Modal";const{expect:u,userEvent:z,within:N}=__STORYBOOK_MODULE_TEST__,we={title:"Components/Modal",component:R,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed modal dialog with CRT Power-on Effect animation, overlay backdrop, and portal rendering.

**Features:**
- **CRT Power-on Effect:** Authentic retro monitor boot sequence with flickering and horizontal line expansion
- **Portal Rendering:** Uses React Portal for proper z-index layering
- **Backdrop Controls:** Configurable overlay click and escape key handling
- **Multiple Sizes:** From small dialogs (\`sm\`) through \`2xl\` (1152px) to \`fullscreen\`, as a static value or per breakpoint
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

// Full screen on phones, 1152px wide from the lg breakpoint (1024px) up
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Grid Telemetry"
  size={{ base: 'fullscreen', lg: '2xl' }}
>
  <TelemetryGrid />
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
| \`size\` | \`ResponsiveValue<'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| '2xl' \\| 'fullscreen'>\` | ❌ | \`'lg'\` | Max width: \`sm\` 448px, \`md\` 512px, \`lg\` 672px, \`xl\` 896px, \`2xl\` 1152px; \`fullscreen\` fills the overlay. Accepts a responsive object such as \`{ base: 'fullscreen', lg: '2xl' }\`; with no \`base\`, sizes below the first breakpoint use \`lg\` |
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
`}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls modal visibility"},title:{control:"text",description:"Optional modal title"},size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","fullscreen"],description:"Modal size"},closeOnOverlayClick:{control:"boolean",description:"Allow closing by clicking overlay"},closeOnEscape:{control:"boolean",description:"Allow closing with Escape key"},showCloseButton:{control:"boolean",description:"Show close button"},children:{control:!1,description:"Modal content"},onClose:{action:"closed",description:"Close callback"},onOpen:{action:"opened",description:"Open callback"},onCRTBootComplete:{action:"boot-complete",description:"CRT boot complete callback"}}},j=({children:o,storyName:t,size:l,title:c="System Alert"})=>{const[s,n]=r.useState(!1),a=()=>n(!1);return e.jsxs("div",{className:"flex items-center justify-center h-screen bg-base p-8",children:[e.jsxs(S,{onClick:()=>n(!0),variant:"ghost",size:"md",children:["Open ",t," Modal"]}),e.jsx(R,{isOpen:s,onClose:a,title:c,size:l,onCancel:()=>console.log("Cancelled"),onConfirm:()=>console.log("Confirmed"),cancelText:"Cancel",confirmText:"Execute",onOpen:()=>console.log("Modal opened"),onCRTBootComplete:()=>console.log("CRT boot complete"),children:o})]})},w={parameters:{docs:{story:{inline:!1,iframeHeight:600}}},render:()=>e.jsx(j,{storyName:"Default",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 bg-error rounded-full animate-pulse"}),e.jsx("p",{className:"text-error font-semibold",children:"Security Protocol Breach Detected"})]}),e.jsx("div",{className:"bg-surface/30 p-4 rounded border border-error/30",children:e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Source:"}),e.jsx("span",{className:"text-accent font-mono",children:"192.168.1.101"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Threat Level:"}),e.jsx("span",{className:"text-error font-mono",children:"CRITICAL"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Time:"}),e.jsx("span",{className:"text-primary font-mono",children:"2045-08-15 14:32:07"})]})]})}),e.jsx("p",{className:"text-muted text-sm",children:"An unauthorized access attempt has been detected on the neural network interface. The system recommends immediate isolation of the compromised node."}),e.jsx("div",{className:"border-l-2 border-accent pl-4",children:e.jsx("p",{className:"text-accent text-sm font-mono",children:"> Awaiting admin authorization..."})})]})})},le=[{id:"NX-01",sector:"Kowloon Stack",load:"97%",status:"OVERLOAD"},{id:"NX-07",sector:"Neon Docks",load:"64%",status:"NOMINAL"},{id:"NX-13",sector:"Chrome Spire",load:"88%",status:"THROTTLED"},{id:"NX-21",sector:"Undercity Relay",load:"41%",status:"NOMINAL"}],I=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-accent text-sm font-mono",children:"> Streaming live load from the grid backbone..."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:le.map(o=>e.jsxs("div",{className:"bg-base/60 p-4 rounded border border-accent/30 space-y-1 font-mono text-sm",children:[e.jsx("div",{className:"text-primary font-semibold",children:o.id}),e.jsx("div",{className:"text-muted",children:o.sector}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted",children:"Load"}),e.jsx("span",{className:"text-accent",children:o.load})]}),e.jsx("div",{className:o.status==="NOMINAL"?"text-success":"text-error",children:o.status})]},o.id))})]}),g={name:"2XL",parameters:{docs:{description:{story:'`size="2xl"` caps the panel at 1152px, the step between `xl` (896px) and `fullscreen`.'},story:{inline:!1,iframeHeight:700}}},render:()=>e.jsx(j,{storyName:"2XL",size:"2xl",title:"Grid Telemetry",children:e.jsx(I,{})}),play:async({canvasElement:o})=>{await z.click(N(o).getByRole("button",{name:/open 2xl modal/i}));const t=await N(document.body).findByRole("dialog");await u(t).toHaveClass("max-w-6xl")}},v={parameters:{docs:{description:{story:"`size={{ base: 'fullscreen', lg: '2xl' }}` fills the screen on phones and tablets and becomes a 1152px panel from the `lg` breakpoint (1024px) up. Resize the viewport to switch between them."},story:{inline:!1,iframeHeight:700}}},render:()=>e.jsx(j,{storyName:"Responsive",size:{base:"fullscreen",lg:"2xl"},title:"Grid Telemetry",children:e.jsx(I,{})}),play:async({canvasElement:o})=>{await z.click(N(o).getByRole("button",{name:/open responsive modal/i}));const t=await N(document.body).findByRole("dialog");await u(t).toHaveClass("max-w-none","w-full","h-full","lg:max-w-6xl","lg:w-auto","lg:h-auto")}},C={parameters:{docs:{description:{story:"Under `prefers-reduced-motion: reduce` the idle glow pulse becomes a static glow in the same colours. That glow follows a `--color-accent` or `--color-error` override on an ancestor. The test reads the reduced-motion rule and applies it inside a violet wrapper."}}},render:()=>e.jsx("div",{className:"p-6 bg-base",style:{"--color-accent":"#c084fc","--color-error":"#c084fc"},children:e.jsx("div",{"data-testid":"glow-probe",className:"border-2 p-4 text-default",children:"Static glow, violet sector"})}),play:async({canvasElement:o})=>{const t=o.querySelector('[data-testid="glow-probe"]');if(!t)throw new Error("probe did not render");const l=[];for(const s of Array.from(document.styleSheets)){let n;try{n=s.cssRules}catch{continue}for(const a of Array.from(n))if(a instanceof CSSMediaRule&&a.conditionText.includes("prefers-reduced-motion: reduce"))for(const d of Array.from(a.cssRules))d instanceof CSSStyleRule&&l.push(d)}const c=s=>{const n=l.find(a=>a.selectorText.split(",").some(d=>d.trim()===s));if(!n)throw new Error(`no reduced-motion rule for ${s}`);return n.style.getPropertyValue("box-shadow")};t.style.boxShadow=c(".animate-rgb-glow"),await u(getComputedStyle(t).boxShadow).toContain("192, 132, 252"),await u(getComputedStyle(t).boxShadow).not.toContain("255, 251, 0"),t.style.boxShadow=c(".animate-danger-glow"),await u(getComputedStyle(t).boxShadow).toContain("192, 132, 252"),await u(getComputedStyle(t).boxShadow).not.toContain("255, 79, 79")}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "2XL",
  parameters: {
    docs: {
      description: {
        story: "\`size=\\"2xl\\"\` caps the panel at 1152px, the step between \`xl\` (896px) and \`fullscreen\`."
      },
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => <ModalWrapper storyName="2XL" size="2xl" title="Grid Telemetry">
      <TelemetryGrid />
    </ModalWrapper>,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: /open 2xl modal/i
    }));
    const panel = await within(document.body).findByRole("dialog");
    await expect(panel).toHaveClass("max-w-6xl");
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`size={{ base: 'fullscreen', lg: '2xl' }}\` fills the screen on phones and tablets and becomes a 1152px panel from the \`lg\` breakpoint (1024px) up. Resize the viewport to switch between them."
      },
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => <ModalWrapper storyName="Responsive" size={{
    base: "fullscreen",
    lg: "2xl"
  }} title="Grid Telemetry">
      <TelemetryGrid />
    </ModalWrapper>,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: /open responsive modal/i
    }));
    const panel = await within(document.body).findByRole("dialog");
    await expect(panel).toHaveClass("max-w-none", "w-full", "h-full", "lg:max-w-6xl", "lg:w-auto", "lg:h-auto");
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const ge=["Default","TwoXL","ResponsiveSize","ReducedMotionGlowFollowsScopedColor"];export{w as Default,C as ReducedMotionGlowFollowsScopedColor,v as ResponsiveSize,g as TwoXL,ge as __namedExportsOrder,we as default};
