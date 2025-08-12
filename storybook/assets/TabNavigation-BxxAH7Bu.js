import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Duw4cJgX.js";import{g as t,R as i}from"./responsive-CMR7KYFx.js";const u=({tabs:l,activeTab:n,onTabChange:r,size:m="md"})=>{const s=(e=>t(e,i.tabNavigation))(m);return a.jsx("div",{className:"flex space-x-2",children:l.map(e=>a.jsx("button",{onClick:()=>r(e),className:`
            ${s} font-bold transition-all duration-300 rounded-t-lg cursor-pointer
            ${n===e?"bg-surface text-secondary border-2 border-border-default border-b-0 shadow-secondary -mb-[2px] hover:shadow-lg-accent":"text-muted border-b-2 border-border-default hover:text-secondary hover:border-secondary"}
          `,children:e},e))})};u.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{tabs:{required:!0,tsType:{name:"unknown"},description:""},activeTab:{required:!0,tsType:{name:"TABS[number]",raw:"typeof TABS[number]"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: Tab) => void",signature:{arguments:[{type:{name:"TABS[number]",raw:"typeof TABS[number]"},name:"tab"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"md",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}}]}}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};export{u as T};
