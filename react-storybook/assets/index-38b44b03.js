import{j as r}from"./jsx-runtime-8406ef1e.js";import{R as o,r as g}from"./index-ad58220e.js";import{B as k}from"./Button-21321eef.js";import{P as A}from"./Popup-7902b892.js";import{d as a,o as E}from"./styled-components.browser.esm-d2d81691.js";import{t as O}from"./config-d87c20af.js";import{L as R}from"./ltRadio-7f0a2b36.js";import{L as T}from"./index-6dcb29cb.js";import{A as V}from"./index-f046dd91.js";const q=a.div`
  font-weight: ${({theme:e})=>e.typography.heading.fontWeight};
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  color: ${({theme:e})=>e.colors.text};
  padding: ${({theme:e})=>`${e.padding.small} ${e.padding.small}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,D=a.div`
  background-color: ${({theme:e})=>e.colors.white};
  width: 280px;
`,f=a.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,L=a.div`
  padding: 0 ${({theme:e})=>e.padding.small};
`,x=a.div`
  padding: ${({theme:e})=>e.padding.small} 0;
`,p=a.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  color: ${({theme:e})=>e.colors.secondary};
  padding-bottom: ${({theme:e})=>e.padding.xxsmall};
`,_=a.div`
  display: flex;
  padding: ${({theme:e})=>e.padding.small} 0;
  gap: ${({theme:e})=>e.spacing.xs};
`,z=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};
  justify-content: space-between;
  align-items: center;
`,B=a.div`
  width: 160px;
`,y=({sections:e,onApply:b,title:j,trigerElement:S})=>{const[m,w]=o.useState(!1),[l,s]=g.useState({}),d=()=>{w(!m)},v=()=>{b(l),d()};g.useEffect(()=>{e.forEach(t=>{"sections"in t?t.sections.forEach(n=>{s(i=>({...i,[n.name]:typeof n.defaultValue=="string"?[n.defaultValue]:n.defaultValue||[]}))}):s(n=>({...n,[t.name]:typeof t.defaultValue=="string"?[t.defaultValue]:t.defaultValue||[]}))})},[e]);const c=t=>r.jsxs(z,{children:[r.jsx(p,{children:t.label}),r.jsx(B,{children:r.jsx(V,{placeholder:t==null?void 0:t.placeholder,options:t.options.map(n=>({label:n.label,id:n.value})),defaultSelectedItems:l[t.name],isMultiSelect:t.isMultiSelection||!1,isSearchable:!1,isCollapsible:!1,onSelect:n=>s({...l,[t.name]:n}),showSelectAll:!1})})]}),$=t=>r.jsx(_,{children:t.options.map(n=>{var i;return r.jsx(R,{label:n.label,name:t.name,value:n.value,checked:(i=l[t.name])==null?void 0:i.includes(n.value),onChange:(h,{value:F})=>{s({...l,[t.name]:[F]})}},n.value)})}),u=(t,n,i)=>i?r.jsx(o.Fragment,{children:c(t)}):r.jsxs(o.Fragment,{children:[t.options.length<=2&&r.jsx(p,{children:t.label}),t.options.length>2?c(t):$(t)]}),C=(t,n)=>r.jsxs(o.Fragment,{children:[r.jsx(p,{children:t.label}),t.sections.map((i,h)=>r.jsx(x,{children:u(i,h,!0)}))]});return r.jsx(E,{theme:O,children:r.jsx(A,{trigger:S,on:"click",position:"bottom right",wide:"very",flowing:!0,basic:!0,style:{border:"1px solid #ccc",borderRadius:"6px",padding:"4px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",marginTop:"2px"},open:m,onClose:d,onOpen:d,children:r.jsxs(D,{children:[r.jsxs(q,{children:[j,r.jsx(T,{icon:"times",style:{float:"right",fontSize:"14px",color:"#767676",cursor:"pointer"},fitted:!0,color:"#767676",onClick:d})]}),r.jsx(f,{}),r.jsx(L,{children:e.map((t,n)=>r.jsxs(o.Fragment,{children:[r.jsx(x,{children:"sections"in t?C(t):u(t,n,!1)}),r.jsx(f,{})]}))}),r.jsx(k,{fluid:!0,secondary:!0,style:{marginTop:"10px"},onClick:v,children:"Apply"})]})})})},K=y;y.__docgenInfo={description:"",methods:[],displayName:"ChartOption",props:{title:{required:!0,tsType:{name:"string"},description:""},sections:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(Section | SectionGroup)[]"},description:""},onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"(SelectedFilter: SelectedFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: (string | number | undefined)[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | undefined)[]",required:!0}}]}},name:"SelectedFilter"}],return:{name:"void"}}},description:""},trigerElement:{required:!0,tsType:{name:"JSX.Element"},description:""}}};export{K as C};
