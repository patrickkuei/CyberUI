import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-uXSLlJ-f.js";import{u as L,g as E,R as M}from"./responsive-Cf6DXinx.js";import{D as i}from"./index-Dm1LNrgC.js";import"./preload-helper-D9Z9MdNV.js";const z=({tabs:a,activeTab:l,onTabChange:g,sizeClasses:N,containerClassName:R="",anchorClassName:u="",menuClassName:j="",menuItemClassName:S="",dropdownLabel:p,anchorIcon:I,showAnchorLabel:f=!0,anchorAriaLabel:A,closeOnSelect:D=!0})=>{const[t,d]=s.useState(!1),[O,b]=s.useState(!1),[c,o]=s.useState(!1),[y,n]=s.useState(!1),q=s.useRef(null),k=s.useRef(null);s.useEffect(()=>{if(!t)return;const r=V=>{q.current&&!q.current.contains(V.target)&&(o(!0),setTimeout(()=>{d(!1),o(!1)},180))};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[t]),s.useEffect(()=>{if(!t)return;const r=k.current;if(!r)return;const V=r.getBoundingClientRect();n(V.right>window.innerWidth)},[t]);const H=()=>{t?(o(!0),setTimeout(()=>{d(!1),o(!1)},180)):(b(!0),d(!0),setTimeout(()=>b(!1),30))};return e.jsx("div",{className:`${R}`,children:e.jsxs("div",{ref:q,className:"relative inline-block",children:[e.jsxs("button",{onClick:H,className:`inline-flex items-center gap-2 ${N} bg-surface text-default border-2 border-border-default rounded-lg transition-all duration-300 hover:text-secondary hover:border-secondary hover:cursor-pointer shadow-secondary/30 ${u}`,"aria-haspopup":"menu","aria-expanded":t,"aria-label":f?void 0:A??(typeof p=="string"?p:"Open tabs"),children:[I??e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"2",rx:"1"}),e.jsx("rect",{x:"3",y:"9",width:"14",height:"2",rx:"1"}),e.jsx("rect",{x:"3",y:"13",width:"14",height:"2",rx:"1"})]}),f&&e.jsx("span",{children:p??l})]}),(t||c)&&e.jsx("div",{ref:k,"aria-hidden":!t,className:`absolute ${y?"right-0":"left-0"} mt-2 min-w-40 z-50 bg-surface border-2 border-border-default rounded-lg shadow-secondary overflow-hidden ${j}
              transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity ${O||c?"opacity-0 scale-y-0 pointer-events-none":"opacity-100 scale-y-100 pointer-events-auto"}`,children:e.jsx("div",{className:"py-1",children:a.map(r=>e.jsx("button",{onClick:()=>{g(r),D&&(o(!0),setTimeout(()=>{d(!1),o(!1)},180))},className:`w-full flex items-center justify-between text-left px-4 py-2 font-bold transition-colors duration-200 outline-none hover:cursor-pointer ${l===r?"text-secondary relative pl-4 before:content-[''] before:h-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[3px] before:rounded before:bg-accent before:shadow-lg-accent":"text-default hover:text-secondary hover:bg-base/70"} ${S}`,children:e.jsx("span",{children:r})},r))})})]})})},m=({tabs:a,activeTab:l,onTabChange:g,size:N="md",mode:R="scroll",containerClassName:u="",tabsClassName:j="",dropdownLabel:S,anchorIcon:p,showAnchorLabel:I=!0,anchorAriaLabel:f,closeOnSelect:A=!0,anchorClassName:D="",menuClassName:t="",menuItemClassName:d=""})=>{const b=(n=>E(n,M.tabNavigation))(N),c=L(R,"scroll"),o=()=>{switch(c){case"scroll":return"w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-border-default scrollbar-track-transparent hover:scrollbar-thumb-secondary/50 py-1";case"wrap":return"flex flex-wrap gap-2";case"dropdown":case"collapsible":return"flex space-x-2";default:return"flex space-x-2"}},y=e.jsx(e.Fragment,{children:a.map(n=>e.jsx("button",{onClick:()=>g(n),className:`
            ${b} font-bold transition-colors duration-200 rounded-t-lg cursor-pointer whitespace-nowrap flex-shrink-0 relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px] after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
            before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[6px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200
            ${l===n?"text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100":"text-muted hover:text-secondary hover:before:opacity-70"}
            ${j}
          `,role:"tab","aria-selected":l===n,tabIndex:l===n?0:-1,children:n},n))});return c==="dropdown"?e.jsx(z,{tabs:a,activeTab:l,onTabChange:g,sizeClasses:b,containerClassName:u,anchorClassName:D,menuClassName:t,menuItemClassName:d,dropdownLabel:S,anchorIcon:p,showAnchorLabel:I,anchorAriaLabel:f,closeOnSelect:A}):c==="scroll"?e.jsx("div",{className:`${o()} ${u}`,role:"tablist","aria-label":"Tabs",children:e.jsx("div",{className:"w-max mx-auto flex space-x-2",children:y})}):e.jsx("div",{className:`${o()} ${u}`,role:"tablist","aria-label":"Tabs",children:y})};m.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{tabs:{required:!0,tsType:{name:"unknown"},description:""},activeTab:{required:!0,tsType:{name:"string"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: string) => void",signature:{arguments:[{type:{name:"string"},name:"tab"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"sm",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"md",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"lg",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"2xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}}]}}]},description:"",defaultValue:{value:'"md"',computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"sm",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"md",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"lg",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"xl",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"2xl",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}}]}}]},description:"",defaultValue:{value:'"scroll"',computed:!1}},containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},tabsClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},dropdownLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},anchorIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showAnchorLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},anchorAriaLabel:{required:!1,tsType:{name:"string"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},anchorClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},menuClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},menuItemClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const W={title:"Components/TabNavigation",component:m,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-themed tab navigation component with neon styling and smooth animations.\n\n**Usage:**\n\n```tsx\nimport React, { useState } from 'react';\nimport { TabNavigation } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\nconst tabs = ['Home', 'Interactive', 'Feedback', 'Elements'];\n\nfunction MyComponent() {\n  const [activeTab, setActiveTab] = useState('Home');\n\n  return (\n    <TabNavigation\n      tabs={tabs}\n      activeTab={activeTab}\n      onTabChange={setActiveTab}\n    />\n  );\n}\n\n// Responsive sizes\n<TabNavigation\n  tabs={tabs}\n  activeTab={activeTab}\n  onTabChange={setActiveTab}\n  size={{ base: 'sm', lg: 'lg' }}\n/>\n\n// Responsive mode (mobile dropdown → desktop scroll)\n<TabNavigation\n  tabs={tabs}\n  activeTab={activeTab}\n  onTabChange={setActiveTab}\n  mode={{ base: 'dropdown', md: 'scroll' }}\n  size={{ base: 'sm', md: 'md' }}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `tabs` | `readonly string[]` | ✅ | - | Array of tab names to display |\n| `activeTab` | `string` | ✅ | - | Currently selected tab name |\n| `onTabChange` | `(tab: string) => void` | ✅ | - | Callback function when a tab is selected |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>` | ❌ | `'md'` | Tab size (supports responsive values) |\n| `mode` | `'scroll' \\| 'wrap' \\| 'dropdown' \\| ResponsiveValue<...>` | ❌ | `'scroll'` | Layout mode (supports responsive values) |\n| `containerClassName` | `string` | ❌ | `''` | Classes for root container (layout/position) |\n| `tabsClassName` | `string` | ❌ | `''` | Classes for each tab button in scroll/wrap |\n| `dropdownLabel` | `React.ReactNode` | ❌ | activeTab | Label/content for dropdown anchor |\n| `anchorIcon` | `React.ReactNode` | ❌ | hamburger | Custom icon element for the dropdown anchor |\n| `showAnchorLabel` | `boolean` | ❌ | true | When false, renders icon-only anchor |\n| `anchorAriaLabel` | `string` | ❌ | - | ARIA label used when label is hidden |\n| `closeOnSelect` | `boolean` | ❌ | true | Close dropdown when selecting a tab |\n| `anchorClassName` | `string` | ❌ | `''` | Classes for dropdown anchor button |\n| `menuClassName` | `string` | ❌ | `''` | Classes for dropdown menu container |\n| `menuItemClassName` | `string` | ❌ | `''` | Classes for dropdown menu items |\n"},argTypes:{}}},tags:["autodocs"],argTypes:{tabs:{control:!1,table:{category:"Core",type:{summary:"readonly string[]"}},description:"Array of tab names to display"},activeTab:{control:{type:"select"},options:i,table:{category:"Core",type:{summary:"string"}},description:"Currently active tab"},onTabChange:{action:"tab changed",table:{category:"Core",type:{summary:"(tab: string) => void"}},description:"Callback when a tab is selected"},size:{control:{type:"select"},options:["sm","md","lg"],table:{category:"Responsive",type:{summary:"'sm' | 'md' | 'lg' | ResponsiveValue<'sm' | 'md' | 'lg'>"}},description:"Tab size (supports ResponsiveValue)"},mode:{control:{type:"select"},options:["scroll","wrap","dropdown"],table:{category:"Responsive",type:{summary:"'scroll' | 'wrap' | 'dropdown' | ResponsiveValue<TabNavigationMode>"}},description:"Layout mode (supports ResponsiveValue)"},containerClassName:{control:{type:"text"},table:{category:"Tab",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for root container"},tabsClassName:{control:{type:"text"},table:{category:"Tab",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for each tab button (scroll/wrap)"},dropdownLabel:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"React.ReactNode"},defaultValue:{summary:"activeTab"}},description:"Anchor label/content in dropdown"},anchorIcon:{control:!1,table:{category:"Dropdown",type:{summary:"React.ReactNode"},defaultValue:{summary:"hamburger icon"}},description:"Custom icon for dropdown anchor"},showAnchorLabel:{control:{type:"boolean"},table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"true"}},description:"Render icon-only anchor when false"},anchorAriaLabel:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"}},description:"ARIA label for icon-only anchor"},closeOnSelect:{control:{type:"boolean"},table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"true"}},description:"Close menu after selecting a tab"},anchorClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown anchor"},menuClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown menu container"},menuItemClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown menu items"}}},v={args:{tabs:i,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a)}},h={args:{tabs:i,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",closeOnSelect:!0},parameters:{layout:"padded"},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(m,{...a})})},w={args:{tabs:i,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:{base:"dropdown",md:"scroll"},size:{base:"sm",md:"md"}}},T={args:{tabs:i,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",dropdownLabel:"Sections"},parameters:{layout:"padded"},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(m,{...a})})},x={args:{tabs:i,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",anchorIcon:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("circle",{cx:"10",cy:"10",r:"8"})})},parameters:{layout:"padded"},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(m,{...a})})},C={args:{tabs:i,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",showAnchorLabel:!1,anchorAriaLabel:"Open tabs",anchorIcon:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("rect",{x:"4",y:"4",width:"12",height:"12",rx:"2"})})},parameters:{layout:"padded"},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(m,{...a})})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab)
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab),
    mode: "dropdown",
    closeOnSelect: true
  },
  parameters: {
    layout: "padded"
  },
  render: args => <div style={{
    minHeight: 280,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 16
  }}>
      <TabNavigation {...args} />
    </div>
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab),
    mode: {
      base: "dropdown",
      md: "scroll"
    },
    size: {
      base: "sm",
      md: "md"
    }
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab),
    mode: "dropdown",
    dropdownLabel: "Sections"
  },
  parameters: {
    layout: "padded"
  },
  render: args => <div style={{
    minHeight: 280,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 16
  }}>
      <TabNavigation {...args} />
    </div>
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab),
    mode: "dropdown",
    anchorIcon: <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <circle cx="10" cy="10" r="8" />
      </svg>
  },
  parameters: {
    layout: "padded"
  },
  render: args => <div style={{
    minHeight: 280,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 16
  }}>
      <TabNavigation {...args} />
    </div>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab),
    mode: "dropdown",
    showAnchorLabel: false,
    anchorAriaLabel: "Open tabs",
    anchorIcon: <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <rect x="4" y="4" width="12" height="12" rx="2" />
      </svg>
  },
  parameters: {
    layout: "padded"
  },
  render: args => <div style={{
    minHeight: 280,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 16
  }}>
      <TabNavigation {...args} />
    </div>
}`,...C.parameters?.docs?.source}}};const U=["Default","DropdownMode","ResponsiveModes","DropdownCustomLabel","DropdownCustomIcon","DropdownIconOnly"];export{v as Default,x as DropdownCustomIcon,T as DropdownCustomLabel,C as DropdownIconOnly,h as DropdownMode,w as ResponsiveModes,U as __namedExportsOrder,W as default};
