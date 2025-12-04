import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-qIXMJ8Q3.js";import"./preload-helper-PPVm8Dsz.js";const h={MOBILE_BREAKPOINT:768,STABLE_TIMEOUT:1e3,MOBILE_HIDE_DELAY:1e3,VELOCITY_MULTIPLIER:2,DISTANCE_THRESHOLD:100,MAX_ANIMATION_SPEED:5,MIN_GLOW_DURATION:150},ee=(g={})=>{const{glowColor:p="primary",sensitivity:E=2,disabled:y=!1,pageLevel:x,variant:T="default",className:R=""}=g,u=s.useRef(null),w=s.useRef(null),k=s.useRef(Date.now()),H=s.useRef(0),S=s.useRef(void 0),f=s.useRef([]),C=s.useRef(void 0),[O,_]=s.useState({isScrolling:!1,direction:null,velocity:0,position:0,scrollDistance:0}),[j,J]=s.useState(!1),[A,$]=s.useState(()=>typeof window>"u"?!1:window.innerWidth>=h.MOBILE_BREAKPOINT),L=s.useRef(0),[d,P]=s.useState(x??!1);s.useEffect(()=>{if(x!==void 0)P(x);else{const t=setTimeout(()=>{const e=u.current!==null;P(!e)},0);return()=>clearTimeout(t)}},[x]);const B=s.useCallback(t=>{switch(t){case"transparent":return{background:"transparent",backdropFilter:"none",border:"none",boxShadow:"none"};case"minimal":return{background:"rgba(26, 26, 46, 0.6)",backdropFilter:"blur(3px)",border:"1px solid rgba(255, 0, 93, 0.2)",boxShadow:"0 0 5px rgba(255, 0, 93, 0.2)"};case"default":default:return{background:"linear-gradient(180deg, rgba(26, 26, 46, 0.95), rgba(45, 45, 68, 0.95))",backdropFilter:"blur(6px)",border:"1px solid rgba(255, 0, 93, 0.3)",boxShadow:"0 0 10px rgba(255, 0, 93, 0.3), inset 0 0 10px rgba(255, 0, 93, 0.1)"}}},[]),z=s.useCallback(()=>{const t=window.innerWidth<h.MOBILE_BREAKPOINT;return{isMobile:t,scrollbarWidth:t?12:16,arrowSize:t?10:14,lineSize:t?8:12,arrowGap:t?2:4}},[]),W=s.useCallback((t,e,n,l)=>{const o=(l+n)*2,b=n*4,m=(t-o-b)/2;return Math.floor(m/(e+n))},[]),q=s.useCallback(t=>{if(d){if(!document.querySelector("#cyber-page-scrollbar-styles")){const e=document.createElement("style");e.id="cyber-page-scrollbar-styles",e.textContent=`
          html::-webkit-scrollbar { display: none; }
          html { scrollbar-width: none; -ms-overflow-style: none; }
        `,document.head.appendChild(e)}}else if(t){if(t.style.scrollbarWidth="none",t.style.msOverflowStyle="none",!document.querySelector("#cyber-scrollbar-styles")){const e=document.createElement("style");e.id="cyber-scrollbar-styles",e.textContent=`
          .cyber-scrollbar-container::-webkit-scrollbar { display: none; }
        `,document.head.appendChild(e)}t.classList.add("cyber-scrollbar-container")}},[d]),D=s.useCallback((t,e,n,l)=>{const o=document.createElement("div"),b=t==="arrow";b&&e?(o.className=`cyber-arrow cyber-arrow-${e} cyber-arrow-${n}`,o.innerHTML=e==="up"?"▲":"▼"):(o.className=`cyber-line cyber-line-${n}`,o.innerHTML="=");const c=l.isMobile?"none":`drop-shadow(0 0 6px var(--color-${p}))
         drop-shadow(0 0 12px var(--color-${p}))
         drop-shadow(0 0 18px var(--color-${p}))`;return o.style.cssText=`
      font-size: ${b?l.arrowSize:l.lineSize}px;
      color: var(--color-${p});
      opacity: 0;
      transition: all 0.2s ease;
      filter: ${c};
      line-height: 1;
      font-weight: bold;
    `,o},[p]),V=s.useCallback(()=>{if(d)return{height:window.innerHeight,top:0,right:0};{const e=u.current.getBoundingClientRect();return{height:e.height,top:e.top,right:window.innerWidth-e.right}}},[d]),F=s.useCallback(()=>{if(y||!d&&!u.current||(w.current&&w.current.remove(),!(d?document.body.scrollHeight>window.innerHeight:u.current.scrollHeight>u.current.clientHeight)))return;const e=z(),n=V(),l=W(n.height,e.arrowSize,e.arrowGap,e.lineSize);q(d?void 0:u.current||void 0);const o=document.createElement("div");o.className=`cyber-scrollbar ${R}`.trim();const c=e.isMobile?"transparent":T,m=B(c);o.style.cssText=`
      position: fixed;
      top: ${n.top}px;
      right: ${n.right}px;
      width: ${e.scrollbarWidth}px;
      height: ${n.height}px;
      pointer-events: none;
      z-index: 9999;
      display: ${A?"flex":"none"};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${e.arrowGap}px;
      background: ${m.background};
      backdrop-filter: ${m.backdropFilter};
      border-radius: ${d?"4px 0 0 4px":"4px"};
      border: ${m.border};
      box-shadow: ${m.boxShadow};
    `;for(let a=0;a<l;a++)o.appendChild(D("arrow","up",a,e));for(let a=0;a<2;a++)o.appendChild(D("line",void 0,a,e));for(let a=0;a<l;a++)o.appendChild(D("arrow","down",a,e));document.body.appendChild(o),w.current=o;const i=d?void 0:()=>{const a=u.current;if(a){const N=a.getBoundingClientRect();o.style.top=`${N.top}px`,o.style.right=`${window.innerWidth-N.right}px`,o.style.height=`${N.height}px`}};return i&&(window.addEventListener("resize",i),window.addEventListener("scroll",i)),()=>{o.remove(),!d&&u.current&&u.current.classList.remove("cyber-scrollbar-container"),i&&(window.removeEventListener("resize",i),window.removeEventListener("scroll",i))}},[y,d,A,q,V,D,z,W,B,T,R]),Y=s.useCallback((t,e)=>{const n=Math.max(1,Math.min(3,Math.ceil(t*.8))),l=Math.floor(e/h.DISTANCE_THRESHOLD);return n+l},[]),U=s.useCallback((t,e,n)=>{const l=Array.from(t).filter(b=>b.classList.contains(`cyber-arrow-${e}`)),o=Math.min(n,l.length);return e==="up"?l.slice(-o):l.slice(0,o)},[]),K=s.useCallback((t,e,n)=>{const l=Math.min(e*E,h.MAX_ANIMATION_SPEED),o=window.innerWidth<h.MOBILE_BREAKPOINT,b=Math.max(300/l,h.MIN_GLOW_DURATION)*(o?1.5:1),c=Math.max(40,80/l)*(o?1.25:1),m=n==="up"?[...t].reverse():t;m.forEach(i=>{i.style.opacity="0.3"}),m.forEach((i,a)=>{const N=a*c,Q=setTimeout(()=>{i.style.opacity="1";const Z=setTimeout(()=>{i.style.opacity="0.3"},b);f.current.push(Z)},N);f.current.push(Q)})},[E]),G=s.useCallback(()=>{if(!w.current)return;const{isScrolling:t,direction:e,velocity:n,scrollDistance:l}=O,o=w.current.querySelectorAll(".cyber-arrow"),b=w.current.querySelectorAll(".cyber-line");if(t&&e){b.forEach(m=>{m.style.opacity="0"});const c=Y(n,l);if(c!==L.current){f.current.forEach(i=>clearTimeout(i)),f.current=[],o.forEach(i=>{i.style.opacity="0"});const m=U(Array.from(o),e,c);K(m,n,e),L.current=c}}else f.current.forEach(c=>clearTimeout(c)),f.current=[],L.current=0,o.forEach(c=>{c.style.opacity="0"}),j&&b.forEach(c=>{c.style.opacity="0.6"})},[O,j,K,Y,U]),v=s.useRef(null),X=s.useCallback(()=>{if(y||!d&&!u.current)return;const t=Date.now(),e=d?{currentScrollTop:window.scrollY,scrollHeight:document.body.scrollHeight,clientHeight:window.innerHeight}:{currentScrollTop:u.current.scrollTop,scrollHeight:u.current.scrollHeight,clientHeight:u.current.clientHeight},n=t-k.current,l=e.currentScrollTop-H.current,b=Math.abs(l)/Math.max(n,1)*h.VELOCITY_MULTIPLIER,c=l>0?"down":l<0?"up":null,m=e.currentScrollTop/(e.scrollHeight-e.clientHeight);j||J(!0);const i=window.innerWidth<h.MOBILE_BREAKPOINT;i&&!A&&$(!0),_(a=>({isScrolling:!0,direction:c,velocity:b,position:m,scrollDistance:a.direction!==c?Math.abs(l):a.scrollDistance+Math.abs(l)})),S.current&&clearTimeout(S.current),C.current&&clearTimeout(C.current),S.current=setTimeout(()=>{f.current.forEach(a=>clearTimeout(a)),f.current=[],_(a=>({...a,isScrolling:!1,velocity:0,scrollDistance:0})),i&&(C.current=setTimeout(()=>{$(!1)},h.MOBILE_HIDE_DELAY))},h.STABLE_TIMEOUT),k.current=t,H.current=e.currentScrollTop},[y,d,j,A]),I=s.useCallback(()=>{v.current===null&&(v.current=requestAnimationFrame(()=>{v.current=null,X()}))},[X]);return s.useEffect(()=>{if(y||!d&&!u.current)return;const t=F(),e=d?window:u.current;return e.addEventListener("scroll",I,{passive:!0}),()=>{e.removeEventListener("scroll",I),S.current&&clearTimeout(S.current),C.current&&clearTimeout(C.current),f.current.forEach(n=>clearTimeout(n)),v.current!==null&&(cancelAnimationFrame(v.current),v.current=null),t?.()}},[F,I,y,d]),s.useEffect(()=>{G()},[G]),u},ne={title:"Hooks/useCyberScrollbar",parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed scrollbar hook that replaces native browser scrollbars with animated arrows and visual effects.

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
| \`pageLevel\` | \`boolean\` | ❌ | \`false\` | Apply to page-level scrolling instead of container scrolling |
`}}},tags:["autodocs"],argTypes:{glowColor:{control:"select",options:["primary","secondary","accent"],description:"Color theme for the scrollbar glow effects"},sensitivity:{control:{type:"range",min:.5,max:5,step:.5},description:"Scroll velocity sensitivity multiplier (higher = more responsive)"},disabled:{control:"boolean",description:"Disable the cyber scrollbar"},pageLevel:{control:"boolean",description:"Apply to page-level scrolling instead of container scrolling"},variant:{control:"select",options:["default","minimal","transparent"],description:"Predefined style variant for the scrollbar background (auto-switches to transparent on mobile)"},className:{control:"text",description:"Custom CSS classes to apply to the scrollbar container"}},args:{glowColor:"primary",sensitivity:2,disabled:!1,pageLevel:!1,variant:"default",className:""}},re=()=>r.jsxs("div",{className:"space-y-6",children:[r.jsxs("section",{children:[r.jsx("h3",{className:"text-xl font-bold text-primary mb-3",children:"🎮 Neural Network Interface"}),r.jsx("p",{className:"text-default leading-relaxed mb-4",children:"The cyberpunk scrollbar responds dynamically to your scrolling behavior. Scroll slowly to see individual arrows animate in sequence. Scroll faster to see more arrows appear and animate more quickly."})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-secondary mb-3",children:"Data Stream Analysis"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[r.jsxs("div",{className:"p-4 bg-base rounded border border-border-default",children:[r.jsx("h4",{className:"font-semibold text-accent mb-2",children:"Velocity Detection"}),r.jsx("p",{className:"text-muted text-sm",children:"The scrollbar detects your scroll velocity and adjusts arrow animation speed accordingly. Fast scrolling = fast animations."})]}),r.jsxs("div",{className:"p-4 bg-base rounded border border-border-default",children:[r.jsx("h4",{className:"font-semibold text-accent mb-2",children:"Direction Awareness"}),r.jsx("p",{className:"text-muted text-sm",children:"Arrows appear in the correct direction - up arrows above the pause lines when scrolling up, down arrows below when scrolling down."})]})]})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-accent mb-3",children:"Distance Accumulation"}),r.jsx("p",{className:"text-default leading-relaxed mb-4",children:"Keep scrolling without stopping to see more arrows appear! The scrollbar tracks your cumulative scroll distance during a session, showing more arrows as you scroll more. Stop scrolling to see the arrows transition to pause lines."})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-primary mb-3",children:"Terminal Output Log"}),r.jsxs("div",{className:"bg-base border border-border-default rounded p-4 font-mono text-sm mb-4",children:[r.jsx("div",{className:"text-primary",children:"$ cyber-scroll --initialize"}),r.jsx("div",{className:"text-muted",children:"Initializing quantum scroll interface..."}),r.jsx("div",{className:"text-secondary",children:"✓ Neural pathways connected"}),r.jsx("div",{className:"text-accent",children:"✓ Velocity sensors calibrated"}),r.jsx("div",{className:"text-primary",children:"✓ Direction matrix synchronized"}),r.jsx("div",{className:"text-muted",children:"System ready. Begin navigation."})]})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-accent mb-3",children:"Neural Node Data Streams"}),r.jsx("div",{className:"space-y-3",children:Array.from({length:25},(g,p)=>r.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-4",children:[r.jsxs("div",{className:"text-sm text-default",children:["Neural Node ",p+1,": ",Math.random().toString(36).substring(2,15)]}),r.jsxs("div",{className:"text-xs text-muted mt-1",children:["Status: ",Math.random()>.5?"ACTIVE":"STANDBY"," | Sync:"," ",Math.floor(Math.random()*100),"% | Latency:"," ",Math.floor(Math.random()*100),"ms"]})]},p))})]}),r.jsxs("section",{children:[r.jsx("h3",{className:"text-lg font-semibold text-primary mb-3",children:"End of Demo Content"}),r.jsx("p",{className:"text-muted text-center py-8",children:"Scroll back up to see the scrollbar arrows reverse direction! ⬆️"})]})]}),te=({glowColor:g="primary",sensitivity:p=2,disabled:E=!1,variant:y="default",className:x=""})=>{const T=ee({glowColor:g,sensitivity:p,disabled:E,variant:y,className:x});return r.jsxs("div",{className:"w-full max-w-4xl mx-auto",children:[r.jsxs("div",{className:"mb-4 p-4 bg-surface rounded-lg border border-border-default",children:[r.jsx("h3",{className:"text-lg font-semibold text-primary mb-2",children:"🎮 Cyberpunk Scrollbar Demo"}),r.jsx("p",{className:"text-muted text-sm",children:"Scroll in the container below to see the animated cyberpunk scrollbar with velocity-responsive arrows and dynamic distance-based scaling."})]}),r.jsx("div",{ref:T,className:"border-2 border-border-default rounded-lg bg-base overflow-y-auto relative",style:{height:"500px"},children:r.jsx("div",{className:"p-6",children:r.jsx(re,{})})}),r.jsxs("div",{className:"mt-4 p-3 bg-base rounded text-xs text-muted",children:[r.jsx("strong",{children:"Tips:"})," Try different scroll speeds and directions to see all the scrollbar animations in action! Keep scrolling to see more arrows appear."]})]})},M={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},args:{glowColor:"primary",sensitivity:2,disabled:!1},render:g=>r.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:r.jsx(te,{...g})})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const ae=["Default"];export{M as Default,ae as __namedExportsOrder,ne as default};
