import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-DrYUIB3m.js";import"./preload-helper-D9Z9MdNV.js";const y={MOBILE_BREAKPOINT:768,STABLE_TIMEOUT:1e3,MOBILE_HIDE_DELAY:1e3,VELOCITY_MULTIPLIER:2,DISTANCE_THRESHOLD:100,MAX_ANIMATION_SPEED:5,MIN_GLOW_DURATION:150},Ne=t=>{switch(t){case"transparent":return{background:"transparent",backdropFilter:"none",border:"none",boxShadow:"none"};case"minimal":return{background:"rgba(26, 26, 46, 0.6)",backdropFilter:"blur(3px)",border:"1px solid rgba(255, 0, 93, 0.2)",boxShadow:"0 0 5px rgba(255, 0, 93, 0.2)"};case"default":default:return{background:"linear-gradient(180deg, rgba(26, 26, 46, 0.95), rgba(45, 45, 68, 0.95))",backdropFilter:"blur(6px)",border:"1px solid rgba(255, 0, 93, 0.3)",boxShadow:"0 0 10px rgba(255, 0, 93, 0.3), inset 0 0 10px rgba(255, 0, 93, 0.1)"}}},Ee=()=>{const t=window.innerWidth<y.MOBILE_BREAKPOINT;return{isMobile:t,scrollbarWidth:t?12:16,arrowSize:t?10:14,lineSize:t?8:12,arrowGap:t?2:4}},je=(t,s)=>{const{arrowSize:m,arrowGap:h,lineSize:b}=s,j=(b+h)*2,I=h*4,O=(t-j-I)/2;return Math.max(0,Math.floor(O/(m+h)))},Ce=(t,s)=>{const m=Math.max(1,Math.min(3,Math.ceil(t*.8))),h=Math.floor(s/y.DISTANCE_THRESHOLD);return m+h},Te=(t,s)=>s?"none":[6,12,18].map(m=>`drop-shadow(0 0 ${m}px var(--color-${t}))`).join(" "),Me=t=>{if(!t){if(!document.querySelector("#cyber-page-scrollbar-styles")){const s=document.createElement("style");s.id="cyber-page-scrollbar-styles",s.textContent=`
        html::-webkit-scrollbar { display: none; }
        html { scrollbar-width: none; -ms-overflow-style: none; }
      `,document.head.appendChild(s)}return}if(t.style.scrollbarWidth="none",t.style.msOverflowStyle="none",!document.querySelector("#cyber-scrollbar-styles")){const s=document.createElement("style");s.id="cyber-scrollbar-styles",s.textContent=`
      .cyber-scrollbar-container::-webkit-scrollbar { display: none; }
    `,document.head.appendChild(s)}t.classList.add("cyber-scrollbar-container")},ce=(t={})=>{const{glowColor:s="primary",sensitivity:m=2,disabled:h=!1,pageLevel:b,variant:j="default",className:I=""}=t,k=u.useRef(null),O=u.useRef(Date.now()),G=u.useRef(0),w=u.useRef(void 0),_=u.useRef([]),g=u.useRef(void 0),C=u.useRef(null),T=u.useRef(null),v=u.useRef({isScrolling:!1,direction:null,velocity:0,scrollDistance:0}),te=u.useRef(!1),L=u.useRef(typeof window>"u"?!1:window.innerWidth>=y.MOBILE_BREAKPOINT),M=u.useRef(0),B=u.useRef(null),Y=u.useRef(null);return u.useEffect(()=>{if(b!==void 0?B.current=null:B.current===null&&(B.current=k.current===null),h)return;const p=b??B.current===!0,U=typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null;let R=U?.matches??!1,c=null,i=null,H=[],V=[],D=[],S=[],K=null,x,P;const N=()=>{_.current.forEach(r=>clearTimeout(r)),_.current=[]},X=(r,n,a)=>{r.style.fontSize=`${n?a.arrowSize:a.lineSize}px`,r.style.filter=Te(s,a.isMobile)},Q=(r,n,a,l)=>{const o=document.createElement("div"),d=r==="arrow";return d&&n?(o.className=`cyber-arrow cyber-arrow-${n} cyber-arrow-${a}`,o.innerHTML=n==="up"?"▲":"▼"):(o.className=`cyber-line cyber-line-${a}`,o.innerHTML="="),Object.assign(o.style,{color:`var(--color-${s})`,opacity:"0",transition:R?"none":"all 0.2s ease",lineHeight:"1",fontWeight:"bold"}),X(o,d,l),o},de=(r,n)=>{if(!i)return;const a=Array.from({length:n},(d,f)=>Q("arrow","up",f,r)),l=Array.from({length:2},(d,f)=>Q("line",void 0,f,r)),o=Array.from({length:n},(d,f)=>Q("arrow","down",f,r));i.replaceChildren(...a,...l,...o),H=a,V=o,D=[...a,...o],S=l,N(),M.current=0,$()},ue=(r,n,a)=>{const l=Math.min(n*m,y.MAX_ANIMATION_SPEED),o=window.innerWidth<y.MOBILE_BREAKPOINT,d=Math.max(300/l,y.MIN_GLOW_DURATION)*(o?1.5:1),f=Math.max(40,80/l)*(o?1.25:1),A=a==="up"?[...r].reverse():r;A.forEach(E=>{E.style.opacity="0.3"}),A.forEach((E,xe)=>{const we=xe*f,ve=setTimeout(()=>{E.style.opacity="1";const Se=setTimeout(()=>{E.style.opacity="0.3"},d);_.current.push(Se)},we);_.current.push(ve)})},me=(r,n)=>{const a=r==="up"?H:V,l=Math.min(n,a.length);return l===0?[]:r==="up"?a.slice(-l):a.slice(0,l)},$=()=>{if(!i)return;const{isScrolling:r,direction:n,velocity:a,scrollDistance:l}=v.current;if(r&&n&&!R){S.forEach(d=>{d.style.opacity="0"});const o=Ce(a,l);o!==M.current&&(N(),D.forEach(d=>{d.style.opacity="0"}),ue(me(n,o),a,n),M.current=o)}else N(),M.current=0,D.forEach(o=>{o.style.opacity="0"}),te.current&&S.forEach(o=>{o.style.opacity="0.6"})},he=()=>{if(p||!c)return{height:window.innerHeight,top:0,right:0};const r=c.getBoundingClientRect();return{height:r.height,top:r.top,right:window.innerWidth-r.right}},be=()=>p?document.body.scrollHeight>window.innerHeight:c!==null&&c.scrollHeight>c.clientHeight,pe=()=>{if(!i)return;const r=Ee(),n=he(),a=K!==r.isMobile;a&&(g.current&&clearTimeout(g.current),L.current=!r.isMobile||v.current.isScrolling);const l=Ne(r.isMobile?"transparent":j);Object.assign(i.style,{position:"fixed",top:`${n.top}px`,right:`${n.right}px`,width:`${r.scrollbarWidth}px`,height:`${n.height}px`,pointerEvents:"none",zIndex:"9999",transition:R?"none":"",display:L.current?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:`${r.arrowGap}px`,background:l.background,backdropFilter:l.backdropFilter,borderRadius:p?"4px 0 0 4px":"4px",border:l.border,boxShadow:l.boxShadow});const o=je(n.height,r);S.length===0||H.length!==o?de(r,o):a&&(D.forEach(d=>X(d,!0,r)),S.forEach(d=>X(d,!1,r))),K=r.isMobile},J=()=>{i?.remove(),i=null,H=[],V=[],D=[],S=[],K=null,N(),M.current=0},Z=()=>{if(!be()){J();return}i||(Me(p?null:c),i=document.createElement("div"),i.className=`cyber-scrollbar ${I}`.trim(),document.body.appendChild(i)),pe()},F=()=>{T.current===null&&(T.current=requestAnimationFrame(()=>{T.current=null,Z()}))},ee=()=>{typeof ResizeObserver>"u"||(x??=new ResizeObserver(F),x.disconnect(),p?(x.observe(document.documentElement),x.observe(document.body)):c&&(x.observe(c),Array.from(c.children).forEach(r=>x?.observe(r))))},fe=()=>{if(!p&&!c)return;const r=Date.now(),n=p?window.scrollY:c.scrollTop,a=r-O.current,l=n-G.current,d=Math.abs(l)/Math.max(a,1)*y.VELOCITY_MULTIPLIER,f=l>0?"down":l<0?"up":null;te.current=!0;const A=window.innerWidth<y.MOBILE_BREAKPOINT;A&&!L.current&&(L.current=!0,i&&(i.style.display="flex"));const E=v.current;v.current={isScrolling:!0,direction:f,velocity:d,scrollDistance:E.direction!==f?Math.abs(l):E.scrollDistance+Math.abs(l)},$(),w.current&&clearTimeout(w.current),g.current&&clearTimeout(g.current),w.current=setTimeout(()=>{N(),v.current={...v.current,isScrolling:!1,velocity:0,scrollDistance:0},$(),A&&(g.current=setTimeout(()=>{L.current=!1,i&&(i.style.display="none")},y.MOBILE_HIDE_DELAY))},y.STABLE_TIMEOUT),O.current=r,G.current=n},z=()=>{C.current===null&&(C.current=requestAnimationFrame(()=>{C.current=null,fe()}))},se=()=>{if(!i||!c)return;const r=c.getBoundingClientRect();i.style.top=`${r.top}px`,i.style.right=`${window.innerWidth-r.right}px`,i.style.height=`${r.height}px`},ye=()=>{const r=R?"none":"all 0.2s ease";D.forEach(n=>{n.style.transition=r}),S.forEach(n=>{n.style.transition=r}),i&&(i.style.transition=R?"none":""),N(),M.current=0,$()},ne=r=>{R=r.matches,ye()},ge=r=>{c=r,G.current=r.scrollTop,r.addEventListener("scroll",z,{passive:!0}),window.addEventListener("scroll",se,{passive:!0}),typeof MutationObserver<"u"&&(P=new MutationObserver(()=>{ee(),F()}),P.observe(r,{childList:!0})),ee(),Z()},oe=()=>{c&&(c.removeEventListener("scroll",z),window.removeEventListener("scroll",se),c.classList.remove("cyber-scrollbar-container"),P?.disconnect(),P=void 0,x?.disconnect(),c=null,w.current&&clearTimeout(w.current),g.current&&clearTimeout(g.current),v.current={isScrolling:!1,direction:null,velocity:0,scrollDistance:0},J())},ae=()=>{if(p)return;const r=k.current;r!==c&&(oe(),r&&ge(r))};return window.addEventListener("resize",F),U?.addEventListener?.("change",ne),p?(window.addEventListener("scroll",z,{passive:!0}),ee(),Z()):ae(),Y.current=ae,()=>{Y.current=null,window.removeEventListener("resize",F),U?.removeEventListener?.("change",ne),p?window.removeEventListener("scroll",z):oe(),x?.disconnect(),w.current&&clearTimeout(w.current),g.current&&clearTimeout(g.current),N(),C.current!==null&&(cancelAnimationFrame(C.current),C.current=null),T.current!==null&&(cancelAnimationFrame(T.current),T.current=null),J()}},[h,b,s,m,j,I]),u.useEffect(()=>{Y.current?.()}),k},{expect:re,userEvent:le,waitFor:ie,within:Re}=__STORYBOOK_MODULE_TEST__,_e={title:"Hooks/useCyberScrollbar",parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed scrollbar hook that replaces native browser scrollbars with animated arrows and visual effects.

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
`}}},tags:["autodocs"],argTypes:{glowColor:{control:"select",options:["primary","secondary","accent"],description:"Color theme for the scrollbar glow effects"},sensitivity:{control:{type:"range",min:.5,max:5,step:.5},description:"Scroll velocity sensitivity multiplier (higher = more responsive)"},disabled:{control:"boolean",description:"Disable the cyber scrollbar"},pageLevel:{control:"boolean",description:"Apply to page-level scrolling instead of container scrolling. Omitted = auto-detect: container mode if the ref is attached on mount, page-level otherwise."},variant:{control:"select",options:["default","minimal","transparent"],description:"Predefined style variant for the scrollbar background (auto-switches to transparent on mobile)"},className:{control:"text",description:"Custom CSS classes to apply to the scrollbar container"}},args:{glowColor:"primary",sensitivity:2,disabled:!1,variant:"default",className:""}},De=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-xl font-bold text-primary mb-3",children:"🎮 Neural Network Interface"}),e.jsx("p",{className:"text-default leading-relaxed mb-4",children:"The cyberpunk scrollbar responds dynamically to your scrolling behavior. Scroll slowly to see individual arrows animate in sequence. Scroll faster to see more arrows appear and animate more quickly."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-3",children:"Data Stream Analysis"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{className:"p-4 bg-base rounded border border-border-default",children:[e.jsx("h4",{className:"font-semibold text-accent mb-2",children:"Velocity Detection"}),e.jsx("p",{className:"text-muted text-sm",children:"The scrollbar detects your scroll velocity and adjusts arrow animation speed accordingly. Fast scrolling = fast animations."})]}),e.jsxs("div",{className:"p-4 bg-base rounded border border-border-default",children:[e.jsx("h4",{className:"font-semibold text-accent mb-2",children:"Direction Awareness"}),e.jsx("p",{className:"text-muted text-sm",children:"Arrows appear in the correct direction - up arrows above the pause lines when scrolling up, down arrows below when scrolling down."})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-accent mb-3",children:"Distance Accumulation"}),e.jsx("p",{className:"text-default leading-relaxed mb-4",children:"Keep scrolling without stopping to see more arrows appear! The scrollbar tracks your cumulative scroll distance during a session, showing more arrows as you scroll more. Stop scrolling to see the arrows transition to pause lines."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-primary mb-3",children:"Terminal Output Log"}),e.jsxs("div",{className:"bg-base border border-border-default rounded p-4 font-mono text-sm mb-4",children:[e.jsx("div",{className:"text-primary",children:"$ cyber-scroll --initialize"}),e.jsx("div",{className:"text-muted",children:"Initializing quantum scroll interface..."}),e.jsx("div",{className:"text-secondary",children:"✓ Neural pathways connected"}),e.jsx("div",{className:"text-accent",children:"✓ Velocity sensors calibrated"}),e.jsx("div",{className:"text-primary",children:"✓ Direction matrix synchronized"}),e.jsx("div",{className:"text-muted",children:"System ready. Begin navigation."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-accent mb-3",children:"Neural Node Data Streams"}),e.jsx("div",{className:"space-y-3",children:Array.from({length:25},(t,s)=>e.jsxs("div",{className:"bg-surface border border-border-default rounded-lg p-4",children:[e.jsxs("div",{className:"text-sm text-default",children:["Neural Node ",s+1,": ",Math.random().toString(36).substring(2,15)]}),e.jsxs("div",{className:"text-xs text-muted mt-1",children:["Status: ",Math.random()>.5?"ACTIVE":"STANDBY"," | Sync:"," ",Math.floor(Math.random()*100),"% | Latency:"," ",Math.floor(Math.random()*100),"ms"]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg font-semibold text-primary mb-3",children:"End of Demo Content"}),e.jsx("p",{className:"text-muted text-center py-8",children:"Scroll back up to see the scrollbar arrows reverse direction! ⬆️"})]})]}),Le=({glowColor:t="primary",sensitivity:s=2,disabled:m=!1,variant:h="default",className:b=""})=>{const j=ce({glowColor:t,sensitivity:s,disabled:m,variant:h,className:b});return e.jsxs("div",{className:"w-full max-w-4xl mx-auto",children:[e.jsxs("div",{className:"mb-4 p-4 bg-surface rounded-lg border border-border-default",children:[e.jsx("h3",{className:"text-lg font-semibold text-primary mb-2",children:"🎮 Cyberpunk Scrollbar Demo"}),e.jsx("p",{className:"text-muted text-sm",children:"Scroll in the container below to see the animated cyberpunk scrollbar with velocity-responsive arrows and dynamic distance-based scaling."})]}),e.jsx("div",{ref:j,className:"border-2 border-border-default rounded-lg bg-base overflow-y-auto relative",style:{height:"500px"},children:e.jsx("div",{className:"p-6",children:e.jsx(De,{})})}),e.jsxs("div",{className:"mt-4 p-3 bg-base rounded text-xs text-muted",children:[e.jsx("strong",{children:"Tips:"})," Try different scroll speeds and directions to see all the scrollbar animations in action! Keep scrolling to see more arrows appear."]})]})},W={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},args:{glowColor:"primary",sensitivity:2,disabled:!1},render:t=>e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:e.jsx(Le,{...t})})},Ae=()=>{const[t,s]=u.useState(3),m=ce({glowColor:"secondary",variant:"minimal",pageLevel:!1});return e.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[e.jsxs("div",{className:"mb-4 p-4 bg-surface rounded-lg border border-border-default",children:[e.jsx("h3",{className:"text-lg font-semibold text-secondary mb-2",children:"Data Shard Buffer"}),e.jsx("p",{className:"text-muted text-sm mb-3",children:"Inject shards until the buffer overflows and the cyber scrollbar appears. Purge the cache and it disappears again."}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{type:"button",className:"px-3 py-1 text-sm border border-secondary text-secondary rounded",onClick:()=>s(h=>h+6),children:"Inject shards"}),e.jsx("button",{type:"button",className:"px-3 py-1 text-sm border border-primary text-primary rounded",onClick:()=>s(3),children:"Purge cache"}),e.jsxs("span",{className:"ml-auto self-center text-xs text-muted",children:[t," shards loaded"]})]})]}),e.jsx("div",{ref:m,className:"border-2 border-border-default rounded-lg bg-base overflow-y-auto",style:{height:"260px"},"data-testid":"shard-buffer",children:e.jsx("div",{className:"p-4 space-y-2",children:Array.from({length:t},(h,b)=>e.jsxs("div",{className:"bg-surface border border-border-default rounded p-3 text-sm text-default",children:["Shard ",String(b+1).padStart(2,"0")," | checksum"," ",((b+1)*2654435761%4294967296).toString(16)," | ICE: STANDBY"]},b))})})]})},q={parameters:{docs:{description:{story:"The scrollbar follows the container's content: it appears when the buffer overflows and is removed when the content fits again."},story:{inline:!1,iframeHeight:560}}},render:()=>e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-base p-8",children:e.jsx(Ae,{})}),play:async({canvasElement:t})=>{const s=Re(t),m=()=>document.querySelectorAll(".cyber-scrollbar");await re(m()).toHaveLength(0),await le.click(s.getByRole("button",{name:"Inject shards"})),await ie(()=>re(m()).toHaveLength(1)),await le.click(s.getByRole("button",{name:"Purge cache"})),await ie(()=>re(m()).toHaveLength(0))}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};const Be=["Default","ContentGrowShrink"];export{q as ContentGrowShrink,W as Default,Be as __namedExportsOrder,_e as default};
