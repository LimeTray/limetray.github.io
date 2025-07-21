import{j as r}from"./jsx-runtime-8406ef1e.js";import{R as o,r as g}from"./index-ad58220e.js";import{B as T}from"./Button-21321eef.js";import{P as q}from"./Popup-7902b892.js";import{d as a,o as E}from"./styled-components.browser.esm-675ea4f2.js";import{t as O}from"./config-d87c20af.js";import{L as R}from"./ltRadio-7f0a2b36.js";import{L as V}from"./index-6dcb29cb.js";import{A as D}from"./index-f68427e8.js";const L=a.div`
  font-weight: ${({theme:e})=>e.typography.heading.fontWeight};
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  color: ${({theme:e})=>e.colors.text};
  padding: ${({theme:e})=>`${e.padding.small} ${e.padding.small}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_=a.div`
  background-color: ${({theme:e})=>e.colors.white};
  width: 280px;
`,f=a.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,z=a.div`
  padding: 0 ${({theme:e})=>e.padding.small};
`,x=a.div`
  padding: ${({theme:e})=>e.padding.small} 0;
`,p=a.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  color: ${({theme:e})=>e.colors.secondary};
  padding-bottom: ${({theme:e})=>e.padding.xxsmall};
`,B=a.div`
  display: flex;
  padding: ${({theme:e})=>e.padding.small} 0;
  gap: ${({theme:e})=>e.spacing.xs};
`,I=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};
  justify-content: space-between;
  align-items: center;
`,H=a.div`
  width:160px;
`,y=({sections:e,onApply:b,title:j,trigerElement:S,showSelectAll:w,showSelected:v})=>{const[m,$]=o.useState(!1),[i,s]=g.useState({}),d=()=>{$(!m)},C=()=>{b(i),d()};g.useEffect(()=>{e.forEach(t=>{"sections"in t?t.sections.forEach(n=>{s(l=>({...l,[n.name]:typeof n.defaultValue=="string"?[n.defaultValue]:n.defaultValue||[]}))}):s(n=>({...n,[t.name]:typeof t.defaultValue=="string"?[t.defaultValue]:t.defaultValue||[]}))})},[e]);const c=t=>r.jsxs(I,{children:[r.jsx(p,{children:t.label}),r.jsx(H,{children:r.jsx(D,{placeholder:t==null?void 0:t.placeholder,options:t.options.map(n=>({label:n.label,id:n.value})),defaultSelectedItems:i[t.name],isMultiSelect:t.isMultiSelection||!1,isSearchable:!1,isCollapsible:!1,onSelect:n=>s({...i,[t.name]:n}),showSelectAll:w??!1,showSelected:v??!1})})]}),F=t=>r.jsx(B,{children:t.options.map(n=>{var l;return r.jsx(R,{label:n.label,name:t.name,value:n.value,checked:(l=i[t.name])==null?void 0:l.includes(n.value),onChange:(h,{value:A})=>{s({...i,[t.name]:[A]})}},n.value)})}),u=(t,n,l)=>l?r.jsx(o.Fragment,{children:c(t)}):r.jsxs(o.Fragment,{children:[t.options.length<=2&&r.jsx(p,{children:t.label}),t.options.length>2?c(t):F(t)]}),k=(t,n)=>r.jsxs(o.Fragment,{children:[r.jsx(p,{children:t.label}),t.sections.map((l,h)=>r.jsx(x,{children:u(l,h,!0)}))]});return r.jsx(E,{theme:O,children:r.jsx(q,{trigger:S,on:"click",position:"bottom right",wide:"very",flowing:!0,basic:!0,style:{border:"1px solid #ccc",borderRadius:"6px",padding:"4px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",marginTop:"2px"},open:m,onClose:d,onOpen:d,children:r.jsxs(_,{children:[r.jsxs(L,{children:[j,r.jsx(V,{icon:"times",style:{float:"right",fontSize:"14px",color:"#767676",cursor:"pointer"},fitted:!0,color:"#767676",onClick:d})]}),r.jsx(f,{}),r.jsx(z,{children:e.map((t,n)=>r.jsxs(o.Fragment,{children:[r.jsx(x,{children:"sections"in t?k(t):u(t,n,!1)}),r.jsx(f,{})]}))}),r.jsx(T,{fluid:!0,secondary:!0,style:{marginTop:"10px"},onClick:C,children:"Apply"})]})})})},U=y;y.__docgenInfo={description:"",methods:[],displayName:"ChartOption",props:{title:{required:!0,tsType:{name:"string"},description:""},sections:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(Section | SectionGroup)[]"},description:""},onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"(SelectedFilter: SelectedFilter) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: (string | number | undefined)[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | undefined)[]",required:!0}}]}},name:"SelectedFilter"}],return:{name:"void"}}},description:""},trigerElement:{required:!0,tsType:{name:"JSX.Element"},description:""},showSelectAll:{required:!1,tsType:{name:"boolean"},description:""},showSelected:{required:!1,tsType:{name:"boolean"},description:""}}};export{U as C};
