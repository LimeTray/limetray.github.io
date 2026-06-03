import{j as r}from"./jsx-runtime-8ae9c9ad.js";import{g as l,r as o}from"./styled-components.browser.esm-b57a6336.js";import{t as c}from"./config-d270d9b6.js";const u=l.span`
  margin-right: 0.5em;
`,m=l.span`
  margin-left: 0.5em;
`,p=l.div`
  display: inline-flex;
  width:auto;
  align-items: center;
  padding: ${({theme:e})=>`${e.padding.xsmall} ${e.padding.small}`};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  font-size: ${({theme:e})=>e.sizes.small};
  color: ${({variant:e,type:t,theme:a})=>e==="outline"||e==="filled"&&t==="default"?a.colors.text:a.colors.white}; 
  background-color: ${({variant:e,type:t,theme:a})=>e==="filled"?t==="default"?a.colors.grey:a.colors[t]:"transparent"};
  border: ${({variant:e,type:t,theme:a})=>e==="outline"?`${a.border[t]}`:"none"};
`,i=({text:e,leftElement:t,rightElement:a,variant:s="filled",type:n="default","data-testid":d})=>r.jsx(o,{theme:c,children:r.jsxs(p,{variant:s,type:n,"data-testid":d,children:[t&&r.jsx(u,{children:t}),r.jsx("span",{children:e}),a&&r.jsx(m,{children:a})]})}),h=i;i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!1,tsType:{name:"string"},description:""},leftElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'default'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};export{h as B};
