import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./iframe-ChJ3X3oe.js";import{g as E,R as C}from"./responsive-CVpry9ax.js";import{c as g}from"./cn-CNMN3A1O.js";import"./preload-helper-D9Z9MdNV.js";const I={online:"bg-success",offline:"bg-muted",away:"bg-warning"},T={online:{boxShadow:"0 0 6px var(--color-success), 0 0 10px var(--color-success)"},offline:{},away:{boxShadow:"0 0 6px var(--color-warning), 0 0 10px var(--color-warning)"}},z={online:"Online",offline:"Offline",away:"Away"},O=l=>{const t=l.trim().split(/\s+/).filter(Boolean);return t.length===0?"":t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase()},a=({src:l,alt:t,initials:y,fallbackIcon:b,status:r,size:w="md",className:A=""})=>{const[S,h]=N.useState(!1);N.useEffect(()=>{h(!1)},[l]);const j=!!l&&!S,v=y??O(t),k=E(w,C.avatar);return e.jsxs("div",{className:g("relative inline-flex flex-shrink-0 items-center justify-center rounded-full",k,A),children:[e.jsx("div",{className:g("relative flex h-full w-full items-center justify-center overflow-hidden rounded-full","border-2 border-accent/60 shadow-primary","bg-surface"),role:"img","aria-label":t,children:j?e.jsx("img",{src:l,alt:"","aria-hidden":"true",className:"h-full w-full object-cover",onError:()=>h(!0)}):v?e.jsxs("span",{className:"relative select-none font-mono font-bold uppercase text-accent","aria-hidden":"true",children:[v.slice(0,2),e.jsx("span",{className:"absolute inset-0 text-secondary opacity-60 mix-blend-screen",style:{transform:"translate(1px, -1px)"},children:v.slice(0,2)})]}):e.jsx("span",{className:"flex h-full w-full items-center justify-center text-accent","aria-hidden":"true",children:b??e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:"h-1/2 w-1/2",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 20c0-4 3.6-7 8-7s8 3 8 7"})]})})}),r&&e.jsx("span",{className:g("absolute bottom-0 right-0 block rounded-full ring-2 ring-base",I[r]),style:{width:"28%",height:"28%",...T[r]},role:"status","aria-label":z[r]})]})};a.displayName="CyberUI.Avatar";a.__docgenInfo={description:`A cyberpunk-styled circular avatar for user profile images, comment threads,
and team lists. Falls back to glitch-style initials (or a custom icon) when
no image is available, and can surface a glowing online/offline/away status dot.

@example
<Avatar src="/operatives/ghost.png" alt="Ghost" status="online" size="lg" />`,methods:[],displayName:"CyberUI.Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image source URL. When omitted, or when the image fails to load,\nthe avatar falls back to `initials` (or initials derived from `alt`)\n— or to `fallbackIcon` if no initials can be derived."},alt:{required:!0,tsType:{name:"string"},description:'Accessible name for the avatar, and the source for auto-derived initials\n(e.g. "Case Pollard" → "CP"). Required for screen reader users even\nwhen `src` is set.'},initials:{required:!1,tsType:{name:"string"},description:"Explicit fallback initials (max 2 characters shown). Overrides initials\nderived from `alt`. Useful when `alt` is a full sentence rather than a name."},fallbackIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom fallback content rendered when there's no `src` (or it fails to\nload) and no initials can be derived. Defaults to a generic operative icon."},status:{required:!1,tsType:{name:"union",raw:"'online' | 'offline' | 'away'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'away'"}]},description:`Presence indicator dot rendered on the bottom-right edge. Omit to render
no indicator at all.`},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}],required:!1}}]}}]},description:`Size of the avatar circle.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional custom class name applied to the outer container.",defaultValue:{value:"''",computed:!1}}}};const M={title:"Components/Avatar",component:a,parameters:{layout:"centered",docs:{description:{component:`A cyberpunk-themed circular avatar for operative profile images, comment threads, and team rosters. Falls back to glitch-style initials (or a custom icon) when there's no image, and can surface a glowing online/offline/away presence dot.

**Usage:**

\`\`\`tsx
import React from 'react';
import { Avatar } from 'cyberui-2045';
import 'cyberui-2045/styles.css';

// Image avatar
<Avatar src="/operatives/ghost.png" alt="Ghost" />

// With presence indicator
<Avatar src="/operatives/nyx.png" alt="Nyx" status="online" />

// No image — falls back to initials derived from alt
<Avatar alt="Case Pollard" size="lg" />

// Explicit initials (when alt isn't a name)
<Avatar alt="Anonymous fixer" initials="AF" />

// Sizes
<Avatar alt="Wintermute" size="sm" />
<Avatar alt="Wintermute" size="md" />
<Avatar alt="Wintermute" size="lg" />
<Avatar alt="Wintermute" size="xl" />

// Responsive size
<Avatar alt="Molly Millions" size={{ base: 'sm', lg: 'xl' }} />
\`\`\`

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`src\` | \`string\` | ❌ | - | Image source URL |
| \`alt\` | \`string\` | ✅ | - | Accessible name; also the source for auto-derived initials |
| \`initials\` | \`string\` | ❌ | - | Explicit fallback initials, overrides initials derived from \`alt\` |
| \`fallbackIcon\` | \`React.ReactNode\` | ❌ | generic operative icon | Rendered when there's no image and no initials |
| \`status\` | \`'online' \\| 'offline' \\| 'away'\` | ❌ | - | Presence dot on the bottom-right edge |
| \`size\` | \`ResponsiveValue<'sm' \\| 'md' \\| 'lg' \\| 'xl'>\` | ❌ | \`'md'\` | Avatar diameter (supports responsive values) |
| \`className\` | \`string\` | ❌ | - | Additional CSS classes on the outer container |
`}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Accessible name; also the source for auto-derived initials"},initials:{control:"text",description:"Explicit fallback initials"},status:{control:{type:"select"},options:[void 0,"online","offline","away"],description:"Presence indicator dot"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Avatar diameter (supports responsive values)"},className:{control:"text",description:"Additional CSS classes"}}},s="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" fill="#1a1a2e"/><rect x="20" y="40" width="24" height="88" fill="#ff005d"/><rect x="52" y="10" width="24" height="118" fill="#00fff9"/><rect x="84" y="60" width="24" height="68" fill="#fffb00"/></svg>'),n={args:{src:s,alt:"Ghost"}},i={name:"Fallback: Initials",args:{alt:"Case Pollard"}},o={name:"Fallback: Icon",args:{alt:"Unregistered operative",initials:""}},c={name:"Status: Online",args:{src:s,alt:"Nyx",status:"online"}},m={name:"Status: Away",args:{alt:"Molly Millions",status:"away"}},d={name:"Status: Offline",args:{alt:"Wintermute",status:"offline"}},u={name:"Size Variants",render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{src:s,alt:"Ghost",size:"sm"}),e.jsx(a,{src:s,alt:"Ghost",size:"md"}),e.jsx(a,{src:s,alt:"Ghost",size:"lg"}),e.jsx(a,{src:s,alt:"Ghost",size:"xl"})]})},p={name:"Broken Image → Falls Back",args:{src:"https://broken.invalid/no-such-uplink.png",alt:"Broken Uplink"}},f={name:"Team Roster Example",render:()=>e.jsxs("div",{className:"space-y-4 p-4 bg-surface rounded-lg",children:[e.jsx("h3",{className:"text-default font-semibold",children:"Neural Link Roster:"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{src:s,alt:"Ghost",status:"online"}),e.jsx("span",{className:"text-muted text-xs",children:"Ghost"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{alt:"Molly Millions",status:"away"}),e.jsx("span",{className:"text-muted text-xs",children:"Molly Millions"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{alt:"Wintermute",status:"offline"}),e.jsx("span",{className:"text-muted text-xs",children:"Wintermute"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{alt:"Unregistered operative",initials:"",status:"online"}),e.jsx("span",{className:"text-muted text-xs",children:"Unknown"})]})]})]})},x={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"Sizes:"}),e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{src:s,alt:"Ghost",size:"sm"}),e.jsx(a,{src:s,alt:"Ghost",size:"md"}),e.jsx(a,{src:s,alt:"Ghost",size:"lg"}),e.jsx(a,{src:s,alt:"Ghost",size:"xl"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"Fallbacks:"}),e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{alt:"Case Pollard"}),e.jsx(a,{alt:"Unregistered operative",initials:""})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-default font-semibold mb-2",children:"Status:"}),e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{src:s,alt:"Nyx",status:"online"}),e.jsx(a,{alt:"Molly Millions",status:"away"}),e.jsx(a,{alt:"Wintermute",status:"offline"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: NEON_CITYSCAPE,
    alt: 'Ghost'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Fallback: Initials',
  args: {
    alt: 'Case Pollard'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Fallback: Icon',
  args: {
    alt: 'Unregistered operative',
    initials: ''
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Status: Online',
  args: {
    src: NEON_CITYSCAPE,
    alt: 'Nyx',
    status: 'online'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Status: Away',
  args: {
    alt: 'Molly Millions',
    status: 'away'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Status: Offline',
  args: {
    alt: 'Wintermute',
    status: 'offline'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => <div className="flex items-end gap-4">
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="sm" />
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="md" />
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="lg" />
      <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="xl" />
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Broken Image → Falls Back',
  args: {
    src: 'https://broken.invalid/no-such-uplink.png',
    alt: 'Broken Uplink'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Team Roster Example',
  render: () => <div className="space-y-4 p-4 bg-surface rounded-lg">
      <h3 className="text-default font-semibold">Neural Link Roster:</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" status="online" />
          <span className="text-muted text-xs">Ghost</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="Molly Millions" status="away" />
          <span className="text-muted text-xs">Molly Millions</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="Wintermute" status="offline" />
          <span className="text-muted text-xs">Wintermute</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="Unregistered operative" initials="" status="online" />
          <span className="text-muted text-xs">Unknown</span>
        </div>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-default font-semibold mb-2">Sizes:</h3>
        <div className="flex items-end gap-4">
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="sm" />
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="md" />
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="lg" />
          <Avatar src={NEON_CITYSCAPE} alt="Ghost" size="xl" />
        </div>
      </div>
      <div>
        <h3 className="text-default font-semibold mb-2">Fallbacks:</h3>
        <div className="flex items-end gap-4">
          <Avatar alt="Case Pollard" />
          <Avatar alt="Unregistered operative" initials="" />
        </div>
      </div>
      <div>
        <h3 className="text-default font-semibold mb-2">Status:</h3>
        <div className="flex items-end gap-4">
          <Avatar src={NEON_CITYSCAPE} alt="Nyx" status="online" />
          <Avatar alt="Molly Millions" status="away" />
          <Avatar alt="Wintermute" status="offline" />
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};const W=["Default","FallbackInitials","FallbackIcon","StatusOnline","StatusAway","StatusOffline","Sizes","Disabled","RosterExample","AllVariants"];export{x as AllVariants,n as Default,p as Disabled,o as FallbackIcon,i as FallbackInitials,f as RosterExample,u as Sizes,m as StatusAway,d as StatusOffline,c as StatusOnline,W as __namedExportsOrder,M as default};
