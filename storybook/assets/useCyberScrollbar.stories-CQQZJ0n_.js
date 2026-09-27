import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-DZlvVrRC.js";import{g as Le,s as Ae}from"./reducedMotionSubscription-DIxCKqWn.js";import"./preload-helper-D9Z9MdNV.js";const y={MOBILE_BREAKPOINT:768,STABLE_TIMEOUT:1e3,MOBILE_HIDE_DELAY:1e3,VELOCITY_MULTIPLIER:2,DISTANCE_THRESHOLD:100,MAX_ANIMATION_SPEED:5,MIN_GLOW_DURATION:150,PAGE_CHAIN_DEPTH:8},ie=(n,l)=>n.length===l.length&&n.every((u,h)=>u===l[h]),De=n=>{switch(n){case"transparent":return{background:"transparent",backdropFilter:"none",border:"none",boxShadow:"none"};case"minimal":return{background:"rgba(26, 26, 46, 0.6)",backdropFilter:"blur(3px)",border:"1px solid rgba(255, 0, 93, 0.2)",boxShadow:"0 0 5px rgba(255, 0, 93, 0.2)"};case"default":default:return{background:"linear-gradient(180deg, rgba(26, 26, 46, 0.95), rgba(45, 45, 68, 0.95))",backdropFilter:"blur(6px)",border:"1px solid rgba(255, 0, 93, 0.3)",boxShadow:"0 0 10px rgba(255, 0, 93, 0.3), inset 0 0 10px rgba(255, 0, 93, 0.1)"}}},Ie=()=>{const n=window.innerWidth<y.MOBILE_BREAKPOINT;return{isMobile:n,scrollbarWidth:n?12:16,arrowSize:n?10:14,lineSize:n?8:12,arrowGap:n?2:4}},Oe=(n,l)=>{const{arrowSize:u,arrowGap:h,lineSize:b}=l,T=(b+h)*2,k=h*4,P=(n-T-k)/2;return Math.max(0,Math.floor(P/(u+h)))},ke=(n,l)=>{const u=Math.max(1,Math.min(3,Math.ceil(n*.8))),h=Math.floor(l/y.DISTANCE_THRESHOLD);return u+h},_e=(n,l)=>l?"none":[6,12,18].map(u=>`drop-shadow(0 0 ${u}px var(--color-${n}))`).join(" "),Pe=n=>{if(!n){if(!document.querySelector("#cyber-page-scrollbar-styles")){const l=document.createElement("style");l.id="cyber-page-scrollbar-styles",l.textContent=`
        html::-webkit-scrollbar { display: none; }
        html { scrollbar-width: none; -ms-overflow-style: none; }
      `,document.head.appendChild(l)}return}if(n.style.scrollbarWidth="none",n.style.msOverflowStyle="none",!document.querySelector("#cyber-scrollbar-styles")){const l=document.createElement("style");l.id="cyber-scrollbar-styles",l.textContent=`
      .cyber-scrollbar-container::-webkit-scrollbar { display: none; }
    `,document.head.appendChild(l)}n.classList.add("cyber-scrollbar-container")},ue=(n={})=>{const{glowColor:l="primary",sensitivity:u=2,disabled:h=!1,pageLevel:b,variant:T="default",className:k=""}=n,_=m.useRef(null),P=m.useRef(Date.now()),Y=m.useRef(0),w=m.useRef(void 0),H=m.useRef([]),x=m.useRef(void 0),j=m.useRef(null),R=m.useRef(null),S=m.useRef({isScrolling:!1,direction:null,velocity:0,scrollDistance:0}),se=m.useRef(!1),I=m.useRef(typeof window>"u"?!1:window.innerWidth>=y.MOBILE_BREAKPOINT),M=m.useRef(0),B=m.useRef(null),U=m.useRef(null);return m.useEffect(()=>{if(b!==void 0?B.current=null:B.current===null&&(B.current=_.current===null),h)return;const g=b??B.current===!0;let L=Le(),d=null,i=null,z=[],V=[],A=[],N=[],K=null,p,f,X=null,ne=[];const J=new WeakSet,E=()=>{H.current.forEach(e=>clearTimeout(e)),H.current=[]},Q=(e,t,o)=>{e.style.fontSize=`${t?o.arrowSize:o.lineSize}px`,e.style.filter=_e(l,o.isMobile)},Z=(e,t,o,s)=>{const a=document.createElement("div"),c=e==="arrow";return c&&t?(a.className=`cyber-arrow cyber-arrow-${t} cyber-arrow-${o}`,a.innerHTML=t==="up"?"▲":"▼"):(a.className=`cyber-line cyber-line-${o}`,a.innerHTML="="),Object.assign(a.style,{color:`var(--color-${l})`,opacity:"0",transition:L?"none":"all 0.2s ease",lineHeight:"1",fontWeight:"bold"}),Q(a,c,s),a},me=(e,t)=>{if(!i)return;const o=Array.from({length:t},(c,v)=>Z("arrow","up",v,e)),s=Array.from({length:2},(c,v)=>Z("line",void 0,v,e)),a=Array.from({length:t},(c,v)=>Z("arrow","down",v,e));i.replaceChildren(...o,...s,...a),z=o,V=a,A=[...o,...a],N=s,E(),M.current=0,$()},he=(e,t,o)=>{const s=Math.min(t*u,y.MAX_ANIMATION_SPEED),a=window.innerWidth<y.MOBILE_BREAKPOINT,c=Math.max(300/s,y.MIN_GLOW_DURATION)*(a?1.5:1),v=Math.max(40,80/s)*(a?1.25:1),O=o==="up"?[...e].reverse():e;O.forEach(C=>{C.style.opacity="0.3"}),O.forEach((C,Te)=>{const je=Te*v,Re=setTimeout(()=>{C.style.opacity="1";const Me=setTimeout(()=>{C.style.opacity="0.3"},c);H.current.push(Me)},je);H.current.push(Re)})},be=(e,t)=>{const o=e==="up"?z:V,s=Math.min(t,o.length);return s===0?[]:e==="up"?o.slice(-s):o.slice(0,s)},$=()=>{if(!i)return;const{isScrolling:e,direction:t,velocity:o,scrollDistance:s}=S.current;if(e&&t&&!L){N.forEach(c=>{c.style.opacity="0"});const a=ke(o,s);a!==M.current&&(E(),A.forEach(c=>{c.style.opacity="0"}),he(be(t,a),o,t),M.current=a)}else E(),M.current=0,A.forEach(a=>{a.style.opacity="0"}),se.current&&N.forEach(a=>{a.style.opacity="0.6"})},pe=()=>{if(g||!d)return{height:window.innerHeight,top:0,right:0};const e=d.getBoundingClientRect();return{height:e.height,top:e.top,right:window.innerWidth-e.right}},fe=()=>g?document.body.scrollHeight>window.innerHeight:d!==null&&d.scrollHeight>d.clientHeight,ye=()=>{if(!i)return;const e=Ie(),t=pe(),o=K!==e.isMobile;o&&(x.current&&clearTimeout(x.current),I.current=!e.isMobile||S.current.isScrolling);const s=De(e.isMobile?"transparent":T);Object.assign(i.style,{position:"fixed",top:`${t.top}px`,right:`${t.right}px`,width:`${e.scrollbarWidth}px`,height:`${t.height}px`,pointerEvents:"none",zIndex:"9999",transition:L?"none":"",display:I.current?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:`${e.arrowGap}px`,background:s.background,backdropFilter:s.backdropFilter,borderRadius:g?"4px 0 0 4px":"4px",border:s.border,boxShadow:s.boxShadow});const a=Oe(t.height,e);N.length===0||z.length!==a?me(e,a):o&&(A.forEach(c=>Q(c,!0,e)),N.forEach(c=>Q(c,!1,e))),K=e.isMobile},ee=()=>{i?.remove(),i=null,z=[],V=[],A=[],N=[],K=null,E(),M.current=0},re=()=>{if(!fe()){ee();return}i||(Pe(g?null:d),i=document.createElement("div"),i.className=`cyber-scrollbar ${k}`.trim(),J.add(i),document.body.appendChild(i)),ye()},D=()=>{R.current===null&&(R.current=requestAnimationFrame(()=>{R.current=null,re()}))},ge=()=>{const e=[],t=[];return Array.from(document.body.children).forEach(o=>{if(J.has(o)||o.classList.contains("cyber-scrollbar"))return;let s=o;e.push(s);for(let a=0;a<y.PAGE_CHAIN_DEPTH;a++){t.push(s);const c=s.firstElementChild;if(s.childElementCount!==1||c===null)break;s=c,e.push(s)}}),{resizeTargets:e,childListTargets:t}},ve=()=>{const{resizeTargets:e,childListTargets:t}=ge();X!==null&&ie(e,X)&&ie(t,ne)||(X=e,ne=t,typeof ResizeObserver<"u"&&(p??=new ResizeObserver(D),p.disconnect(),p.observe(document.documentElement),p.observe(document.body),e.forEach(o=>p?.observe(o))),f&&(f.disconnect(),f.observe(document.body,{childList:!0}),t.forEach(o=>f?.observe(o,{childList:!0}))))},F=()=>{if(g){ve();return}typeof ResizeObserver>"u"||(p??=new ResizeObserver(D),p.disconnect(),d&&(p.observe(d),Array.from(d.children).forEach(e=>p?.observe(e))))},xe=()=>{if(!g&&!d)return;const e=Date.now(),t=g?window.scrollY:d.scrollTop,o=e-P.current,s=t-Y.current,c=Math.abs(s)/Math.max(o,1)*y.VELOCITY_MULTIPLIER,v=s>0?"down":s<0?"up":null;se.current=!0;const O=window.innerWidth<y.MOBILE_BREAKPOINT;O&&!I.current&&(I.current=!0,i&&(i.style.display="flex"));const C=S.current;S.current={isScrolling:!0,direction:v,velocity:c,scrollDistance:C.direction!==v?Math.abs(s):C.scrollDistance+Math.abs(s)},$(),w.current&&clearTimeout(w.current),x.current&&clearTimeout(x.current),w.current=setTimeout(()=>{E(),S.current={...S.current,isScrolling:!1,velocity:0,scrollDistance:0},$(),O&&(x.current=setTimeout(()=>{I.current=!1,i&&(i.style.display="none")},y.MOBILE_HIDE_DELAY))},y.STABLE_TIMEOUT),P.current=e,Y.current=t},W=()=>{j.current===null&&(j.current=requestAnimationFrame(()=>{j.current=null,xe()}))},oe=()=>{if(!i||!d)return;const e=d.getBoundingClientRect();i.style.top=`${e.top}px`,i.style.right=`${window.innerWidth-e.right}px`,i.style.height=`${e.height}px`},we=()=>{const e=L?"none":"all 0.2s ease";A.forEach(t=>{t.style.transition=e}),N.forEach(t=>{t.style.transition=e}),i&&(i.style.transition=L?"none":""),E(),M.current=0,$()},Se=e=>{L=e,we()},Ne=e=>{const t=s=>J.has(s);e.some(s=>Array.from(s.addedNodes).some(a=>!t(a))||Array.from(s.removedNodes).some(a=>!t(a)))&&(F(),D())},Ee=e=>{d=e,Y.current=e.scrollTop,e.addEventListener("scroll",W,{passive:!0}),window.addEventListener("scroll",oe,{passive:!0}),typeof MutationObserver<"u"&&(f=new MutationObserver(()=>{F(),D()}),f.observe(e,{childList:!0})),F(),re()},ae=()=>{d&&(d.removeEventListener("scroll",W),window.removeEventListener("scroll",oe),d.classList.remove("cyber-scrollbar-container"),f?.disconnect(),f=void 0,p?.disconnect(),d=null,w.current&&clearTimeout(w.current),x.current&&clearTimeout(x.current),S.current={isScrolling:!1,direction:null,velocity:0,scrollDistance:0},ee())},le=()=>{if(g)return;const e=_.current;e!==d&&(ae(),e&&Ee(e))};window.addEventListener("resize",D);const Ce=Ae(Se);return g?(window.addEventListener("scroll",W,{passive:!0}),typeof MutationObserver<"u"&&(f=new MutationObserver(Ne)),F(),re()):le(),U.current=le,()=>{U.current=null,window.removeEventListener("resize",D),Ce(),g?(window.removeEventListener("scroll",W),f?.disconnect(),f=void 0):ae(),p?.disconnect(),w.current&&clearTimeout(w.current),x.current&&clearTimeout(x.current),E(),j.current!==null&&(cancelAnimationFrame(j.current),j.current=null),R.current!==null&&(cancelAnimationFrame(R.current),R.current=null),ee()}},[h,b,l,u,T,k]),m.useEffect(()=>{U.current?.()}),_},{expect:te,userEvent:ce,waitFor:de,within:He}=__STORYBOOK_MODULE_TEST__,Ye={title:"Hooks/useCyberScrollbar",parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed scrollbar hook that replaces native browser scrollbars with animated arrows and visual effects.

**Usage:**

\`\`\`tsx
import React from 'react';
import { useCyberScrollbar } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Container scrolling
const MyComponent = () => {
  const scrollbarRef = useCyberScrollbar({
    glowColor: 'primary',
    sensitivity: 2
  });

  return (
    <div ref={scrollbarRef} className="h-96 overflow-y-auto">
      {/* Your scrollable content */}
    </div>
  );
};

// Page-level scrolling
const App = () => {
  useCyberScrollbar({
    glowColor: 'secondary',
    pageLevel: true
  });

  return <div>{/* Your app content */}</div>;
};

// Different sensitivity levels
<useCyberScrollbar sensitivity={0.5} /> // Subtle
<useCyberScrollbar sensitivity={2.5} />  // Dramatic

// Different glow colors
<useCyberScrollbar glowColor="primary" />   // Pink/Red
<useCyberScrollbar glowColor="secondary" /> // Cyan
<useCyberScrollbar glowColor="accent" />    // Yellow

// Disable on specific conditions
<useCyberScrollbar disabled={isMobile} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`glowColor\` | \`'primary' \\| 'secondary' \\| 'accent'\` | ❌ | \`'primary'\` | Color theme for the scrollbar glow effects |
| \`sensitivity\` | \`number\` | ❌ | \`2\` | Scroll velocity sensitivity multiplier (higher = more responsive) |
| \`disabled\` | \`boolean\` | ❌ | \`false\` | Disable the scrollbar completely |
| \`pageLevel\` | \`boolean\` | ❌ | \`undefined\` (auto-detect) | Apply to page-level scrolling instead of container scrolling |
| \`variant\` | \`'default' \\| 'minimal' \\| 'transparent'\` | ❌ | \`'default'\` | Style variant for the scrollbar background (transparent on mobile) |
| \`className\` | \`string\` | ❌ | \`''\` | Custom CSS classes for the scrollbar container |

**Page-level or container:**

1. \`pageLevel: true\` scrolls the page and leaves the returned ref unused.
2. \`pageLevel: false\` is container mode. The container can attach later: the scrollbar appears as soon as the ref points at an element and is removed when it detaches.
3. \`pageLevel\` omitted is decided once, in the first post-commit effect: container mode if the ref is attached, page-level otherwise.

**Behavior:**

- The scrollbar appears and disappears as the scroll target's content grows and shrinks, and restyles when the viewport crosses the 768px mobile breakpoint.
- Scrolling does not re-render the component that calls the hook.
- With \`prefers-reduced-motion: reduce\`, the velocity glow and arrow sequences are skipped and transitions are disabled.
`}}},tags:["autodocs"],argTypes:{glowColor:{control:"select",options:["primary","secondary","accent"],description:"Color theme for the scrollbar glow effects"},sensitivity:{control:{type:"range",min:.5,max:5,step:.5},description:"Scroll velocity sensitivity multiplier (higher = more responsive)"},disabled:{control:"boolean",description:"Disable the cyber scrollbar"},pageLevel:{control:"boolean",description:"Apply to page-level scrolling instead of container scrolling. Omitted = auto-detect: container mode if the ref is attached on mount, page-level otherwise."},variant:{control:"select",options:["default","minimal","transparent"],description:"Predefined style variant for the scrollbar background (auto-switches to transparent on mobile)"},className:{control:"text",description:"Custom CSS classes to apply to the scrollbar container"}},args:{glowColor:"primary",sensitivity:2,disabled:!1,variant:"default",className:""}},Be=()=>r.jsxs("div",{className:"space-y-6",children:[r.jsxs("section",{children:[r.jsx("h3",{className:"text-xl font-bold text-primary mb-3",children:"🎮 Neural Network Interface"}),r.jsx("p",{className:"text-default leading-relaxed mb-4",children:"The cyberpunk scrollbar responds dynamically to your scrolling behavior. Scroll slowly to see individual arrows animate in sequence. Scroll faster to see more arrows appear and animate more quickly."})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-secondary mb-3",children:"Data Stream Analysis"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[r.jsxs("div",{className:"p-4 bg-base rounded border border-border-default",children:[r.jsx("h4",{className:"font-semibold text-accent mb-2",children:"Velocity Detection"}),r.jsx("p",{className:"text-muted text-sm",children:"The scrollbar detects your scroll velocity and adjusts arrow animation speed accordingly. Fast scrolling = fast animations."})]}),r.jsxs("div",{className:"p-4 bg-base rounded border border-border-default",children:[r.jsx("h4",{className:"font-semibold text-accent mb-2",children:"Direction Awareness"}),r.jsx("p",{className:"text-muted text-sm",children:"Arrows appear in the correct direction - up arrows above the pause lines when scrolling up, down arrows below when scrolling down."})]})]})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-accent mb-3",children:"Distance Accumulation"}),r.jsx("p",{className:"text-default leading-relaxed mb-4",children:"Keep scrolling without stopping to see more arrows appear! The scrollbar tracks your cumulative scroll distance during a session, showing more arrows as you scroll more. Stop scrolling to see the arrows transition to pause lines."})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-primary mb-3",children:"Terminal Output Log"}),r.jsxs("div",{className:"bg-base border border-border-default rounded p-4 font-mono text-sm mb-4",children:[r.jsx("div",{className:"text-primary",children:"$ cyber-scroll --initialize"}),r.jsx("div",{className:"text-muted",children:"Initializing quantum scroll interface..."}),r.jsx("div",{className:"text-secondary",children:"✓ Neural pathways connected"}),r.jsx("div",{className:"text-accent",children:"✓ Velocity sensors calibrated"}),r.jsx("div",{className:"text-primary",children:"✓ Direction matrix synchronized"}),r.jsx("div",{className:"text-muted",children:"System ready. Begin navigation."})]})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-accent mb-3",children:"Neural Node Data Streams"}),r.jsx("div",{className:"space-y-3",children:Array.from({length:25},(n,l)=>r.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-4",children:[r.jsxs("div",{className:"text-sm text-default",children:["Neural Node ",l+1,": ",Math.random().toString(36).substring(2,15)]}),r.jsxs("div",{className:"text-xs text-muted mt-1",children:["Status: ",Math.random()>.5?"ACTIVE":"STANDBY"," | Sync:"," ",Math.floor(Math.random()*100),"% | Latency:"," ",Math.floor(Math.random()*100),"ms"]})]},l))})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-primary mb-3",children:"End of Demo Content"}),r.jsx("p",{className:"text-muted text-center py-8",children:"Scroll back up to see the scrollbar arrows reverse direction! ⬆️"})]})]}),ze=({glowColor:n="primary",sensitivity:l=2,disabled:u=!1,variant:h="default",className:b=""})=>{const T=ue({glowColor:n,sensitivity:l,disabled:u,variant:h,className:b});return r.jsxs("div",{className:"w-full max-w-4xl mx-auto",children:[r.jsxs("div",{className:"mb-4 p-4 bg-surface rounded-lg border border-border-default",children:[r.jsx("h3",{className:"text-lg font-semibold text-primary mb-2",children:"🎮 Cyberpunk Scrollbar Demo"}),r.jsx("p",{className:"text-muted text-sm",children:"Scroll in the container below to see the animated cyberpunk scrollbar with velocity-responsive arrows and dynamic distance-based scaling."})]}),r.jsx("div",{ref:T,className:"border-2 border-border-default rounded-lg bg-base overflow-y-auto relative",style:{height:"500px"},children:r.jsx("div",{className:"p-6",children:r.jsx(Be,{})})}),r.jsxs("div",{className:"mt-4 p-3 bg-base rounded text-xs text-muted",children:[r.jsx("strong",{children:"Tips:"})," Try different scroll speeds and directions to see all the scrollbar animations in action! Keep scrolling to see more arrows appear."]})]})},G={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},args:{glowColor:"primary",sensitivity:2,disabled:!1},render:n=>r.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:r.jsx(ze,{...n})})},$e=()=>{const[n,l]=m.useState(3),u=ue({glowColor:"secondary",variant:"minimal",pageLevel:!1});return r.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[r.jsxs("div",{className:"mb-4 p-4 bg-surface rounded-lg border border-border-default",children:[r.jsx("h3",{className:"text-lg font-semibold text-secondary mb-2",children:"Data Shard Buffer"}),r.jsx("p",{className:"text-muted text-sm mb-3",children:"Inject shards until the buffer overflows and the cyber scrollbar appears. Purge the cache and it disappears again."}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{type:"button",className:"px-3 py-1 text-sm border border-secondary text-secondary rounded",onClick:()=>l(h=>h+6),children:"Inject shards"}),r.jsx("button",{type:"button",className:"px-3 py-1 text-sm border border-primary text-primary rounded",onClick:()=>l(3),children:"Purge cache"}),r.jsxs("span",{className:"ml-auto self-center text-xs text-muted",children:[n," shards loaded"]})]})]}),r.jsx("div",{ref:u,className:"border-2 border-border-default rounded-lg bg-base overflow-y-auto",style:{height:"260px"},"data-testid":"shard-buffer",children:r.jsx("div",{className:"p-4 space-y-2",children:Array.from({length:n},(h,b)=>r.jsxs("div",{className:"bg-surface border border-border-default rounded p-3 text-sm text-default",children:["Shard ",String(b+1).padStart(2,"0")," | checksum"," ",((b+1)*2654435761%4294967296).toString(16)," | ICE: STANDBY"]},b))})})]})},q={parameters:{docs:{description:{story:"The scrollbar follows the container's content: it appears when the buffer overflows and is removed when the content fits again."},story:{inline:!1,iframeHeight:560}}},render:()=>r.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:r.jsx($e,{})}),play:async({canvasElement:n})=>{const l=He(n),u=()=>document.querySelectorAll(".cyber-scrollbar");await te(u()).toHaveLength(0),await ce.click(l.getByRole("button",{name:"Inject shards"})),await de(()=>te(u()).toHaveLength(1)),await ce.click(l.getByRole("button",{name:"Purge cache"})),await de(()=>te(u()).toHaveLength(0))}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  args: {
    glowColor: "primary",
    sensitivity: 2,
    disabled: false
  },
  render: args => <div className="flex items-center justify-center min-h-screen bg-base p-8">
      <CyberScrollDemo {...args} />
    </div>
}`,...G.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The scrollbar follows the container's content: it appears when the buffer overflows and is removed when the content fits again."
      },
      story: {
        inline: false,
        iframeHeight: 560
      }
    }
  },
  render: () => <div className="flex items-center justify-center min-h-screen bg-base p-8">
      <ContentGrowShrinkDemo />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scrollbars = () => document.querySelectorAll(".cyber-scrollbar");

    // Starts with content that fits: no scrollbar.
    await expect(scrollbars()).toHaveLength(0);
    await userEvent.click(canvas.getByRole("button", {
      name: "Inject shards"
    }));
    await waitFor(() => expect(scrollbars()).toHaveLength(1));
    await userEvent.click(canvas.getByRole("button", {
      name: "Purge cache"
    }));
    await waitFor(() => expect(scrollbars()).toHaveLength(0));
  }
}`,...q.parameters?.docs?.source}}};const Ue=["Default","ContentGrowShrink"];export{q as ContentGrowShrink,G as Default,Ue as __namedExportsOrder,Ye as default};
