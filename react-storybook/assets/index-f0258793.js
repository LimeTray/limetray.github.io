import{j as l}from"./jsx-runtime-8406ef1e.js";import{d as r,o}from"./styled-components.browser.esm-675ea4f2.js";import{t as c}from"./config-92a52d19.js";const u=r.span`
  margin-right: 0.5em;
`,m=r.span`
  margin-left: 0.5em;
`,p=r.div`
  display: inline-flex;
  width:auto;
  align-items: center;
  padding: ${({theme:e})=>`${e.padding.xsmall} ${e.padding.small}`};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  font-size: ${({theme:e})=>e.sizes.small};
  color: ${({variant:e,type:t,theme:a})=>e==="outline"||e==="filled"&&t==="default"?a.colors.text:a.colors.white}; 
  background-color: ${({variant:e,type:t,theme:a})=>e==="filled"?t==="default"?a.colors.grey:a.colors[t]:"transparent"};
  border: ${({variant:e,type:t,theme:a})=>e==="outline"?`${a.border[t]}`:"none"};
`,i=({text:e,leftElement:t,rightElement:a,variant:s="filled",type:d="default","data-testid":n})=>l.jsx(o,{theme:c,children:l.jsxs(p,{variant:s,type:d,"data-testid":n,children:[t&&l.jsx(u,{children:t}),l.jsx("span",{children:e}),a&&l.jsx(m,{children:a})]})}),h=i;i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!1,tsType:{name:"string"},description:""},leftElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'default'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};export{h as B};
