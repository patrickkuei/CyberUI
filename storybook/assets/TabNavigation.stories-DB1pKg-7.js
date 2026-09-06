import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CJzUki5p.js";import{u as L,g as z,R as B}from"./responsive-v9ihdETy.js";import{u as M}from"./useDialogBehavior-CREKUwcM.js";import{D as s}from"./index-CHO2xkCo.js";import"./preload-helper-D9Z9MdNV.js";const $=({tabs:a,activeTab:n,onTabChange:p,sizeClasses:R,containerClassName:N="",anchorClassName:d="",menuClassName:j="",menuItemClassName:D="",dropdownLabel:c,anchorIcon:A,showAnchorLabel:b=!0,anchorAriaLabel:O,closeOnSelect:S=!0})=>{const[t,g]=u.useState(!1),[I,f]=u.useState(!1),i=u.useRef(null),m=u.useRef(null),{isOpening:h,isClosing:o,open:q,close:k,containerRef:V}=M(t,{closeDuration:180,openDuration:30,onClose:()=>g(!1),getRestoreFocusTarget:()=>m.current});u.useEffect(()=>{if(!t)return;const r=i.current;if(!r)return;const E=r.getBoundingClientRect();f(E.right>window.innerWidth)},[t]);const H=()=>{t&&!o?k():(g(!0),q())};return e.jsx("div",{className:`${N}`,children:e.jsxs("div",{ref:V,className:"relative inline-block",children:[e.jsxs("button",{ref:m,onClick:H,className:`inline-flex items-center gap-2 ${R} bg-surface text-default border-2 border-border-default rounded-lg transition-all duration-300 hover:text-secondary hover:border-secondary hover:cursor-pointer shadow-secondary/30 ${d}`,"aria-haspopup":"menu","aria-expanded":t,"aria-label":b?void 0:O??(typeof c=="string"?c:"Open tabs"),children:[A??e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"2",rx:"1"}),e.jsx("rect",{x:"3",y:"9",width:"14",height:"2",rx:"1"}),e.jsx("rect",{x:"3",y:"13",width:"14",height:"2",rx:"1"})]}),b&&e.jsx("span",{children:c??n})]}),(t||o)&&e.jsx("div",{ref:i,"aria-hidden":!t,className:`absolute ${I?"right-0":"left-0"} mt-2 min-w-40 z-50 bg-surface border-2 border-border-default rounded-lg shadow-secondary overflow-hidden ${j}
              transition-transform transition-opacity duration-200 ease-[cubic-bezier(.2,0,0,1)] transform-gpu origin-top will-change-transform will-change-opacity ${h||o?"opacity-0 scale-y-0 pointer-events-none":"opacity-100 scale-y-100 pointer-events-auto"}`,children:e.jsx("div",{className:"py-1",children:a.map(r=>e.jsx("button",{onClick:()=>{p(r),S&&k()},className:`w-full flex items-center justify-between text-left px-4 py-2 font-bold transition-colors duration-200 outline-none hover:cursor-pointer ${n===r?"text-secondary relative pl-4 before:content-[''] before:h-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-[3px] before:rounded before:bg-accent before:shadow-lg-accent":"text-default hover:text-secondary hover:bg-base/70"} ${D}`,children:e.jsx("span",{children:r})},r))})})]})})},l=({tabs:a,activeTab:n,onTabChange:p,size:R="md",mode:N="scroll",containerClassName:d="",tabsClassName:j="",dropdownLabel:D,anchorIcon:c,showAnchorLabel:A=!0,anchorAriaLabel:b,closeOnSelect:O=!0,anchorClassName:S="",menuClassName:t="",menuItemClassName:g=""})=>{const f=(o=>z(o,B.tabNavigation))(R),i=L(N,"scroll"),m=()=>{switch(i){case"scroll":return"w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-border-default scrollbar-track-transparent hover:scrollbar-thumb-secondary/50 py-1";case"wrap":return"flex flex-wrap gap-2";case"dropdown":case"collapsible":return"flex space-x-2";default:return"flex space-x-2"}},h=e.jsx(e.Fragment,{children:a.map(o=>e.jsx("button",{onClick:()=>p(o),className:`
            ${f} font-bold transition-colors duration-200 rounded-t-lg cursor-pointer whitespace-nowrap flex-shrink-0 relative
            after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px] after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
            before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[6px] before:w-1.5 before:h-1.5 before:bg-accent before:rotate-45 before:rounded-[2px] before:opacity-0 before:transition-opacity before:duration-200
            ${n===o?"text-secondary after:bg-linear-(--gradient-accent) after:shadow-lg-accent after:scale-x-100":"text-muted hover:text-secondary hover:before:opacity-70"}
            ${j}
          `,role:"tab","aria-selected":n===o,tabIndex:n===o?0:-1,children:o},o))});return i==="dropdown"?e.jsx($,{tabs:a,activeTab:n,onTabChange:p,sizeClasses:f,containerClassName:d,anchorClassName:S,menuClassName:t,menuItemClassName:g,dropdownLabel:D,anchorIcon:c,showAnchorLabel:A,anchorAriaLabel:b,closeOnSelect:O}):i==="scroll"?e.jsx("div",{className:`${m()} ${d}`,role:"tablist","aria-label":"Tabs",children:e.jsx("div",{className:"w-max mx-auto flex space-x-2",children:h})}):e.jsx("div",{className:`${m()} ${d}`,role:"tablist","aria-label":"Tabs",children:h})};l.displayName="CyberUI.TabNavigation";l.__docgenInfo={description:`A highly adaptive tabbed navigation system with cyberpunk animations and multiple layout modes.

@example
<TabNavigation 
  tabs={['DASHBOARD', 'NETWORK', 'SECURITY']} 
  activeTab="DASHBOARD" 
  onTabChange={setTab} 
  mode={{ base: 'dropdown', md: 'scroll' }} 
/>`,methods:[],displayName:"CyberUI.TabNavigation",props:{tabs:{required:!0,tsType:{name:"unknown"},description:"List of tab labels."},activeTab:{required:!0,tsType:{name:"string"},description:"Currently active tab label."},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: string) => void",signature:{arguments:[{type:{name:"string"},name:"tab"}],return:{name:"void"}}},description:"Callback when a tab is selected."},size:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"sm",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"md",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"lg",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}},{key:"2xl",value:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}],required:!1}}]}}]},description:`Size of the tabs.
@default 'md'`,defaultValue:{value:'"md"',computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"T | ResponsiveObject<T>",elements:[{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"sm",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"md",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"lg",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"xl",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}},{key:"2xl",value:{name:"union",raw:'"scroll" | "wrap" | "dropdown" | "collapsible"',elements:[{name:"literal",value:'"scroll"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"dropdown"'},{name:"literal",value:'"collapsible"'}],required:!1}}]}}]},description:"Responsive display mode.\n- `scroll`: Horizontal scrolling container.\n- `wrap`: Wraps to new lines.\n- `dropdown`: Collapses into a dropdown menu.\n@default 'scroll'",defaultValue:{value:'"scroll"',computed:!1}},containerClassName:{required:!1,tsType:{name:"string"},description:"Optional custom class for the outer container",defaultValue:{value:'""',computed:!1}},tabsClassName:{required:!1,tsType:{name:"string"},description:"Optional custom class for the tab buttons",defaultValue:{value:'""',computed:!1}},dropdownLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Label for the dropdown anchor (mode="dropdown" only)'},anchorIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Custom icon for the dropdown anchor (mode="dropdown" only)'},showAnchorLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to show the label text next to the anchor icon",defaultValue:{value:"true",computed:!1}},anchorAriaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for the dropdown anchor"},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"Whether to close the dropdown after choosing a tab",defaultValue:{value:"true",computed:!1}},anchorClassName:{required:!1,tsType:{name:"string"},description:"Optional class for the dropdown anchor button",defaultValue:{value:'""',computed:!1}},menuClassName:{required:!1,tsType:{name:"string"},description:"Optional class for the dropdown menu container",defaultValue:{value:'""',computed:!1}},menuItemClassName:{required:!1,tsType:{name:"string"},description:"Optional class for items in the dropdown menu",defaultValue:{value:'""',computed:!1}}}};const Y={title:"Components/TabNavigation",component:l,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-themed tab navigation component with neon styling and smooth animations.\n\n**Usage:**\n\n```tsx\nimport React, { useState } from 'react';\nimport { TabNavigation } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\nconst tabs = ['Home', 'Interactive', 'Feedback', 'Elements'];\n\nfunction MyComponent() {\n  const [activeTab, setActiveTab] = useState('Home');\n\n  return (\n    <TabNavigation\n      tabs={tabs}\n      activeTab={activeTab}\n      onTabChange={setActiveTab}\n    />\n  );\n}\n\n// Responsive sizes\n<TabNavigation\n  tabs={tabs}\n  activeTab={activeTab}\n  onTabChange={setActiveTab}\n  size={{ base: 'sm', lg: 'lg' }}\n/>\n\n// Responsive mode (mobile dropdown → desktop scroll)\n<TabNavigation\n  tabs={tabs}\n  activeTab={activeTab}\n  onTabChange={setActiveTab}\n  mode={{ base: 'dropdown', md: 'scroll' }}\n  size={{ base: 'sm', md: 'md' }}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `tabs` | `readonly string[]` | ✅ | - | Array of tab names to display |\n| `activeTab` | `string` | ✅ | - | Currently selected tab name |\n| `onTabChange` | `(tab: string) => void` | ✅ | - | Callback function when a tab is selected |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>` | ❌ | `'md'` | Tab size (supports responsive values) |\n| `mode` | `'scroll' \\| 'wrap' \\| 'dropdown' \\| ResponsiveValue<...>` | ❌ | `'scroll'` | Layout mode (supports responsive values) |\n| `containerClassName` | `string` | ❌ | `''` | Classes for root container (layout/position) |\n| `tabsClassName` | `string` | ❌ | `''` | Classes for each tab button in scroll/wrap |\n| `dropdownLabel` | `React.ReactNode` | ❌ | activeTab | Label/content for dropdown anchor |\n| `anchorIcon` | `React.ReactNode` | ❌ | hamburger | Custom icon element for the dropdown anchor |\n| `showAnchorLabel` | `boolean` | ❌ | true | When false, renders icon-only anchor |\n| `anchorAriaLabel` | `string` | ❌ | - | ARIA label used when label is hidden |\n| `closeOnSelect` | `boolean` | ❌ | true | Close dropdown when selecting a tab |\n| `anchorClassName` | `string` | ❌ | `''` | Classes for dropdown anchor button |\n| `menuClassName` | `string` | ❌ | `''` | Classes for dropdown menu container |\n| `menuItemClassName` | `string` | ❌ | `''` | Classes for dropdown menu items |\n"},argTypes:{}}},tags:["autodocs"],argTypes:{tabs:{control:!1,table:{category:"Core",type:{summary:"readonly string[]"}},description:"Array of tab names to display"},activeTab:{control:{type:"select"},options:s,table:{category:"Core",type:{summary:"string"}},description:"Currently active tab"},onTabChange:{action:"tab changed",table:{category:"Core",type:{summary:"(tab: string) => void"}},description:"Callback when a tab is selected"},size:{control:{type:"select"},options:["sm","md","lg"],table:{category:"Responsive",type:{summary:"'sm' | 'md' | 'lg' | ResponsiveValue<'sm' | 'md' | 'lg'>"}},description:"Tab size (supports ResponsiveValue)"},mode:{control:{type:"select"},options:["scroll","wrap","dropdown"],table:{category:"Responsive",type:{summary:"'scroll' | 'wrap' | 'dropdown' | ResponsiveValue<TabNavigationMode>"}},description:"Layout mode (supports ResponsiveValue)"},containerClassName:{control:{type:"text"},table:{category:"Tab",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for root container"},tabsClassName:{control:{type:"text"},table:{category:"Tab",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for each tab button (scroll/wrap)"},dropdownLabel:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"React.ReactNode"},defaultValue:{summary:"activeTab"}},description:"Anchor label/content in dropdown"},anchorIcon:{control:!1,table:{category:"Dropdown",type:{summary:"React.ReactNode"},defaultValue:{summary:"hamburger icon"}},description:"Custom icon for dropdown anchor"},showAnchorLabel:{control:{type:"boolean"},table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"true"}},description:"Render icon-only anchor when false"},anchorAriaLabel:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"}},description:"ARIA label for icon-only anchor"},closeOnSelect:{control:{type:"boolean"},table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"true"}},description:"Close menu after selecting a tab"},anchorClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown anchor"},menuClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown menu container"},menuItemClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown menu items"}}},y={args:{tabs:s,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a)}},v={args:{tabs:s,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",closeOnSelect:!0},parameters:{layout:"padded",docs:{description:{story:"Click the anchor to open the tab list. Escape closes it and restores focus to the anchor. Outside click and click-to-select close it without restoring focus."}}},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(l,{...a})})},w={args:{tabs:s,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:{base:"dropdown",md:"scroll"},size:{base:"sm",md:"md"}}},T={args:{tabs:s,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",dropdownLabel:"Sections"},parameters:{layout:"padded"},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(l,{...a})})},x={args:{tabs:s,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",anchorIcon:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("circle",{cx:"10",cy:"10",r:"8"})})},parameters:{layout:"padded"},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(l,{...a})})},C={args:{tabs:s,activeTab:"Home",onTabChange:a=>console.log("Tab changed to:",a),mode:"dropdown",showAnchorLabel:!1,anchorAriaLabel:"Open tabs",anchorIcon:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("rect",{x:"4",y:"4",width:"12",height:"12",rx:"2"})})},parameters:{layout:"padded"},render:a=>e.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:e.jsx(l,{...a})})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab)
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab),
    mode: "dropdown",
    closeOnSelect: true
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: 'Click the anchor to open the tab list. Escape closes it and restores focus to the anchor. Outside click and click-to-select close it without restoring focus.'
      }
    }
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const Z=["Default","DropdownMode","ResponsiveModes","DropdownCustomLabel","DropdownCustomIcon","DropdownIconOnly"];export{y as Default,x as DropdownCustomIcon,T as DropdownCustomLabel,C as DropdownIconOnly,v as DropdownMode,w as ResponsiveModes,Z as __namedExportsOrder,Y as default};
