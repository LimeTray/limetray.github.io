import{j as t}from"./jsx-runtime-8406ef1e.js";import{R as p,r as y}from"./index-ad58220e.js";import{B}from"./Button-21321eef.js";import{P as q}from"./Popup-7902b892.js";import{d,o as E}from"./styled-components.browser.esm-675ea4f2.js";import{t as s}from"./config-43c6afbd.js";import{L as O}from"./ltRadio-2e07b06f.js";import{L as R}from"./index-eb89699e.js";import{A as V}from"./index-ac572fe2.js";import{u as D}from"./ThemeContext-71b3bf8d.js";const L=d.div`
  font-weight: ${({theme:e})=>e.typography.heading.fontWeight};
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  color: ${({theme:e,$darkMode:a})=>a?e.colors.darkModeText:e.colors.text};
  padding: ${({theme:e})=>`${e.padding.small} ${e.padding.small}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_=d.div`
  background-color: ${({theme:e,$darkMode:a})=>a?e.colors.darkModeBg:e.colors.white};
  width: 280px;
  color: ${({theme:e,$darkMode:a})=>a?e.colors.darkModeText:void 0};
`,b=d.div`
  border-bottom: 1px solid ${({theme:e,$darkMode:a})=>a?e.colors.darkModeBgSecondary:e.colors.border};
`,z=d.div`
  padding: 0 ${({theme:e})=>e.padding.small};
`,k=d.div`
  padding: ${({theme:e})=>e.padding.small} 0;
`,u=d.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  color: ${({theme:e,$darkMode:a})=>a?e.colors.darkModeTextSecondary:e.colors.secondary};
  padding-bottom: ${({theme:e})=>e.padding.xxsmall};
`,I=d.div`
  display: flex;
  padding: ${({theme:e})=>e.padding.small} 0;
  gap: ${({theme:e})=>e.spacing.xs};
`,H=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};
  justify-content: space-between;
  align-items: center;
`,G=d.div`
  width:160px;
`,j=({sections:e,onApply:a,title:S,trigerElement:$,showSelectAll:w,showSelected:v})=>{const[h,M]=p.useState(!1),[i,c]=y.useState({}),n=D().theme==="dark",m=()=>{M(!h)},T=()=>{a(i),m()};y.useEffect(()=>{e.forEach(r=>{"sections"in r?r.sections.forEach(o=>{c(l=>({...l,[o.name]:typeof o.defaultValue=="string"?[o.defaultValue]:o.defaultValue||[]}))}):c(o=>({...o,[r.name]:typeof r.defaultValue=="string"?[r.defaultValue]:r.defaultValue||[]}))})},[e]);const g=r=>t.jsxs(H,{children:[t.jsx(u,{$darkMode:n,children:r.label}),t.jsx(G,{children:t.jsx(V,{placeholder:r==null?void 0:r.placeholder,options:r.options.map(o=>({label:o.label,id:o.value})),defaultSelectedItems:i[r.name],isMultiSelect:r.isMultiSelection||!1,isSearchable:!1,isCollapsible:!1,onSelect:o=>c({...i,[r.name]:o}),showSelectAll:w??!1,showSelected:v??!1})})]}),C=r=>t.jsx(I,{children:r.options.map(o=>{var l;return t.jsx(O,{label:o.label,name:r.name,value:o.value,checked:(l=i[r.name])==null?void 0:l.includes(o.value),onChange:(f,{value:A})=>{c({...i,[r.name]:[A]})}},o.value)})}),x=(r,o,l)=>l?t.jsx(p.Fragment,{children:g(r)}):t.jsxs(p.Fragment,{children:[r.options.length<=2&&t.jsx(u,{$darkMode:n,children:r.label}),r.options.length>2?g(r):C(r)]}),F=(r,o)=>t.jsxs(p.Fragment,{children:[t.jsx(u,{$darkMode:n,children:r.label}),r.sections.map((l,f)=>t.jsx(k,{children:x(l,f,!0)}))]});return t.jsx(E,{theme:s,children:t.jsx(q,{trigger:$,on:"click",position:"bottom right",wide:"very",flowing:!0,basic:!0,style:{border:n?`1px solid ${s.colors.darkModeBgSecondary}`:"1px solid #ccc",borderRadius:"6px",padding:"4px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",marginTop:"2px",background:n?s.colors.darkModeBg:s.colors.white,color:n?s.colors.darkModeText:void 0},open:h,onClose:m,onOpen:m,children:t.jsxs(_,{$darkMode:n,children:[t.jsxs(L,{$darkMode:n,children:[S,t.jsx(R,{icon:"times",style:{float:"right",fontSize:"14px",color:n?s.colors.darkModeText:"#767676",cursor:"pointer"},fitted:!0,color:n?s.colors.darkModeText:"#767676",onClick:m})]}),t.jsx(b,{$darkMode:n}),t.jsx(z,{children:e.map((r,o)=>t.jsxs(p.Fragment,{children:[t.jsx(k,{children:"sections"in r?F(r):x(r,o,!1)}),t.jsx(b,{$darkMode:n})]},o))}),t.jsx(B,{fluid:!0,secondary:!0,style:{marginTop:"10px"},onClick:T,children:"Apply"})]})})})},ee=j;j.__docgenInfo={description:"",methods:[],displayName:"ChartOption",props:{title:{required:!0,tsType:{name:"string"},description:""},sections:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(Section | SectionGroup)[]"},description:""},onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"(SelectedFilter: SelectedFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: (string | number | undefined)[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | undefined)[]",required:!0}}]}},name:"SelectedFilter"}],return:{name:"void"}}},description:""},trigerElement:{required:!0,tsType:{name:"JSX.Element"},description:""},showSelectAll:{required:!1,tsType:{name:"boolean"},description:""},showSelected:{required:!1,tsType:{name:"boolean"},description:""}}};export{ee as C};
