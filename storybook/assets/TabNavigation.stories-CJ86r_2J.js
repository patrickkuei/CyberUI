import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{T as n}from"./TabNavigation-gNHf-v-y.js";import{D as o}from"./index-Dm1LNrgC.js";import"./iframe-3mg8uO-U.js";import"./preload-helper-D9Z9MdNV.js";import"./responsive-DCwPLDon.js";const y={title:"Components/TabNavigation",component:n,parameters:{layout:"centered",docs:{description:{component:"A cyberpunk-themed tab navigation component with neon styling and smooth animations.\n\n**Usage:**\n\n```tsx\nimport React, { useState } from 'react';\nimport { TabNavigation } from 'cyberui-2045';\nimport 'cyberui-2045/styles.css';\n\nconst tabs = ['Home', 'Interactive', 'Feedback', 'Elements'];\n\nfunction MyComponent() {\n  const [activeTab, setActiveTab] = useState('Home');\n\n  return (\n    <TabNavigation\n      tabs={tabs}\n      activeTab={activeTab}\n      onTabChange={setActiveTab}\n    />\n  );\n}\n\n// Responsive sizes\n<TabNavigation\n  tabs={tabs}\n  activeTab={activeTab}\n  onTabChange={setActiveTab}\n  size={{ base: 'sm', lg: 'lg' }}\n/>\n\n// Responsive mode (mobile dropdown → desktop scroll)\n<TabNavigation\n  tabs={tabs}\n  activeTab={activeTab}\n  onTabChange={setActiveTab}\n  mode={{ base: 'dropdown', md: 'scroll' }}\n  size={{ base: 'sm', md: 'md' }}\n/>\n```\n\n**Props:**\n\n| Prop | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n| `tabs` | `readonly string[]` | ✅ | - | Array of tab names to display |\n| `activeTab` | `string` | ✅ | - | Currently selected tab name |\n| `onTabChange` | `(tab: string) => void` | ✅ | - | Callback function when a tab is selected |\n| `size` | `'sm' \\| 'md' \\| 'lg' \\| ResponsiveValue<'sm' \\| 'md' \\| 'lg'>` | ❌ | `'md'` | Tab size (supports responsive values) |\n| `mode` | `'scroll' \\| 'wrap' \\| 'dropdown' \\| ResponsiveValue<...>` | ❌ | `'scroll'` | Layout mode (supports responsive values) |\n| `containerClassName` | `string` | ❌ | `''` | Classes for root container (layout/position) |\n| `tabsClassName` | `string` | ❌ | `''` | Classes for each tab button in scroll/wrap |\n| `dropdownLabel` | `React.ReactNode` | ❌ | activeTab | Label/content for dropdown anchor |\n| `anchorIcon` | `React.ReactNode` | ❌ | hamburger | Custom icon element for the dropdown anchor |\n| `showAnchorLabel` | `boolean` | ❌ | true | When false, renders icon-only anchor |\n| `anchorAriaLabel` | `string` | ❌ | - | ARIA label used when label is hidden |\n| `closeOnSelect` | `boolean` | ❌ | true | Close dropdown when selecting a tab |\n| `anchorClassName` | `string` | ❌ | `''` | Classes for dropdown anchor button |\n| `menuClassName` | `string` | ❌ | `''` | Classes for dropdown menu container |\n| `menuItemClassName` | `string` | ❌ | `''` | Classes for dropdown menu items |\n"},argTypes:{}}},tags:["autodocs"],argTypes:{tabs:{control:!1,table:{category:"Core",type:{summary:"readonly string[]"}},description:"Array of tab names to display"},activeTab:{control:{type:"select"},options:o,table:{category:"Core",type:{summary:"string"}},description:"Currently active tab"},onTabChange:{action:"tab changed",table:{category:"Core",type:{summary:"(tab: string) => void"}},description:"Callback when a tab is selected"},size:{control:{type:"select"},options:["sm","md","lg"],table:{category:"Responsive",type:{summary:"'sm' | 'md' | 'lg' | ResponsiveValue<'sm' | 'md' | 'lg'>"}},description:"Tab size (supports ResponsiveValue)"},mode:{control:{type:"select"},options:["scroll","wrap","dropdown"],table:{category:"Responsive",type:{summary:"'scroll' | 'wrap' | 'dropdown' | ResponsiveValue<TabNavigationMode>"}},description:"Layout mode (supports ResponsiveValue)"},containerClassName:{control:{type:"text"},table:{category:"Tab",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for root container"},tabsClassName:{control:{type:"text"},table:{category:"Tab",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for each tab button (scroll/wrap)"},dropdownLabel:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"React.ReactNode"},defaultValue:{summary:"activeTab"}},description:"Anchor label/content in dropdown"},anchorIcon:{control:!1,table:{category:"Dropdown",type:{summary:"React.ReactNode"},defaultValue:{summary:"hamburger icon"}},description:"Custom icon for dropdown anchor"},showAnchorLabel:{control:{type:"boolean"},table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"true"}},description:"Render icon-only anchor when false"},anchorAriaLabel:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"}},description:"ARIA label for icon-only anchor"},closeOnSelect:{control:{type:"boolean"},table:{category:"Dropdown",type:{summary:"boolean"},defaultValue:{summary:"true"}},description:"Close menu after selecting a tab"},anchorClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown anchor"},menuClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown menu container"},menuItemClassName:{control:{type:"text"},table:{category:"Dropdown",type:{summary:"string"},defaultValue:{summary:"''"}},description:"Classes for dropdown menu items"}}},t={args:{tabs:o,activeTab:"Home",onTabChange:e=>console.log("Tab changed to:",e)}},s={args:{tabs:o,activeTab:"Home",onTabChange:e=>console.log("Tab changed to:",e),mode:"dropdown",closeOnSelect:!0},parameters:{layout:"padded"},render:e=>a.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:a.jsx(n,{...e})})},r={args:{tabs:o,activeTab:"Home",onTabChange:e=>console.log("Tab changed to:",e),mode:{base:"dropdown",md:"scroll"},size:{base:"sm",md:"md"}}},i={args:{tabs:o,activeTab:"Home",onTabChange:e=>console.log("Tab changed to:",e),mode:"dropdown",dropdownLabel:"Sections"},parameters:{layout:"padded"},render:e=>a.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:a.jsx(n,{...e})})},d={args:{tabs:o,activeTab:"Home",onTabChange:e=>console.log("Tab changed to:",e),mode:"dropdown",anchorIcon:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("circle",{cx:"10",cy:"10",r:"8"})})},parameters:{layout:"padded"},render:e=>a.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:a.jsx(n,{...e})})},l={args:{tabs:o,activeTab:"Home",onTabChange:e=>console.log("Tab changed to:",e),mode:"dropdown",showAnchorLabel:!1,anchorAriaLabel:"Open tabs",anchorIcon:a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("rect",{x:"4",y:"4",width:"12",height:"12",rx:"2"})})},parameters:{layout:"padded"},render:e=>a.jsx("div",{style:{minHeight:280,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:16},children:a.jsx(n,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: DEMO_TABS,
    activeTab: "Home",
    onTabChange: tab => console.log("Tab changed to:", tab)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const h=["Default","DropdownMode","ResponsiveModes","DropdownCustomLabel","DropdownCustomIcon","DropdownIconOnly"];export{t as Default,d as DropdownCustomIcon,i as DropdownCustomLabel,l as DropdownIconOnly,s as DropdownMode,r as ResponsiveModes,h as __namedExportsOrder,y as default};
