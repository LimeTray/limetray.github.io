import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as m,R as W}from"./index-ad58220e.js";import{d as h,o as re}from"./styled-components.browser.esm-d2d81691.js";import{t as D}from"./config-58506fea.js";import{L as H}from"./index-6dcb29cb.js";import{S as te}from"./searchComponent-bcb17182.js";import{L as T}from"./ltCheckBox-fb658f45.js";import{T as g}from"./index-02183425.js";import{S}from"./stringConstants-4e8cb88a.js";import{_ as ne}from"./lodash-9978a6f3.js";const le=h.div`
  position: relative;
  width: 100%;
`,ie=h.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: white;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`,de=h.div`
  position: absolute;
  ${({openUp:e})=>e?"bottom: 46px;":"top: 46px;"}
  left: 0;
  right: 0;
  background: white;
  border-radius: ${({theme:e})=>e.borderRadius.xlarge};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-height: 320px;
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.colors.border};
  z-index: 1;
`,L=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
`,ae=h.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,ce=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,B=h.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e})=>!e&&`border-bottom: 1px solid ${D.colors.border}3f;`}
  ${({isCollapsible:e,ischild:x})=>e&&!x&&`background-color: ${D.colors.backgroundSecondary};`}
`,oe=h.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,M=h.span`
  color: ${({theme:e,isSelected:x})=>x?e.colors.primary:e.colors.muted};
`,ue=h.div`
  overflow-y: auto;
  max-height: ${({isMultiSelect:e})=>e?"210px":"256px"};
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.backgroundSecondary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border};
  }
`,P=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
`,U=({options:e,defaultSelectedItems:x,isMultiSelect:w,isSearchable:V,isCollapsible:C,onSelect:E,searchPlaceholder:G,placeholder:O,showOnlyEnabledInInput:J=!1,showSelectAll:K=!0})=>{const[c,y]=m.useState([]),[j,$]=m.useState(!1),[v,Q]=m.useState(""),[X,q]=m.useState(!1),k=m.useRef(null),[b,I]=m.useState(!0),[Y,R]=m.useState(e),[p,F]=m.useState([]),A=(s,l,n)=>()=>{var o;const d=e.find(a=>{var u;return l?(u=a.children)==null?void 0:u.some(f=>f.id===s):a.id===s}),i=d==null?void 0:d.id,r=((o=d==null?void 0:d.children)==null?void 0:o.filter(a=>!a.isDisabled).map(a=>a.id))||[];y(a=>a.includes(s)||n?l?r.filter(f=>f!==s&&a.includes(f)).length?a.filter(f=>f!==s):a.filter(f=>f!==i&&f!==s):a.filter(u=>u!==s&&!r.includes(u)):l?[...a,s]:[...a,s,...r])},_=s=>()=>{console.log(s),y([s]),$(!1),E([s])},Z=()=>{j?($(!1),E(c)):$(!0)};m.useEffect(()=>{R(e)},[e]),m.useEffect(()=>{const s=w?x.reduce((n,d)=>{const i=e.find(r=>r.id===d);return i?(n.push(d),i.children&&n.push(...i.children.map(r=>r.id))):e.find(o=>{var a;return(a=o.children)==null?void 0:a.some(u=>u.id===d)})&&n.push(d),n},[]):x,l=Array.from(new Set(s));y(l)},[x,e]);const ee=(s,l)=>{const{checked:n}=l;if(n){const d=e.flatMap(i=>{var a;const r=i.isDisabled&&!c.includes(i.id)?[]:[i.id],o=((a=i.children)==null?void 0:a.filter(u=>!u.isDisabled||c.includes(u.id)).map(u=>u.id))||[];return[...r,...o]});y(d)}else{const d=e.flatMap(r=>{var o;return((o=r.children)==null?void 0:o.filter(a=>a.isDisabled).map(a=>a.id))||[]}),i=c.filter(r=>d.includes(r));y(i)}};m.useEffect(()=>{const s=ne.filter(e,l=>{var n;return l.label.toLowerCase().includes(v.toLowerCase())||((n=l.children)==null?void 0:n.some(d=>d.label.toLowerCase().includes(v.toLowerCase())))});R(s)},[v]),m.useEffect(()=>{const s=()=>{if(k.current){const l=k.current.getBoundingClientRect();window.innerHeight-l.bottom<300?q(!0):q(!1)}};return j&&s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[j]);const z=s=>()=>{I(!!s)},se=s=>()=>{p.includes(s)?F(p.filter(l=>l!==s)):F(l=>[...l,s])},N=()=>{const s=[];return e.forEach(l=>{var d;const n=(d=l.children)==null?void 0:d.filter(i=>c.includes(i.id));if(c.includes(l.id)||n!=null&&n.length)if(J){const i=n==null?void 0:n.filter(r=>!r.isDisabled);if(i&&i.length>0){const r=i.map(o=>o.label).join(", ");(c.includes(l.id)||i.some(o=>c.includes(o.id)))&&s.push(`${l.label}${r?": "+r:""}`)}}else{const i=n==null?void 0:n.map(r=>r.label).join(", ");s.push(`${l.label}${i?": "+i:""}`)}}),s.join(" ; ")};return t.jsx(re,{theme:D,children:t.jsxs(le,{ref:k,children:[t.jsxs(ie,{onClick:Z,children:[t.jsx(g,{text:N()?N():O||S.SELECT,type:"body",id:"dropdown-value"}),t.jsx(H,{icon:`chevron ${j?"up":"down"}`,size:"small",color:"#0000008A"})]}),j&&t.jsxs(de,{openUp:X,children:[V&&t.jsx(ae,{children:t.jsx(te,{placeholder:G||S.SEARCH,onChange:s=>Q(s.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),w&&K&&t.jsxs(ce,{children:[t.jsx(T,{label:S.SELECT_ALL,checked:c.length===e.length+e.reduce((s,l)=>{var n;return s+(((n=l.children)==null?void 0:n.length)||0)},0),onChange:ee}),t.jsxs(oe,{children:[t.jsx(M,{isSelected:b,onClick:z(!0),children:t.jsx(g,{text:S.ALL,type:"body",id:"dropdown-value",color:b?"#00CD7C":"#767676"})})," ","|"," ",t.jsx(M,{isSelected:!b,onClick:z(!1),children:t.jsx(g,{text:S.SELECTED,type:"body",id:"dropdown-value",color:b?"#767676":"#00CD7C"})})]})]}),t.jsx(ue,{isMultiSelect:w,children:Y.map(s=>{var l,n,d,i;return!b&&!c.includes(s.id)?null:t.jsxs(W.Fragment,{children:[t.jsxs(B,{isCollapsed:p==null?void 0:p.includes(s.id),isCollapsible:C,children:[w?t.jsxs(P,{children:[t.jsx(T,{checked:c.includes(s.id)||((l=s.children)==null?void 0:l.some(r=>c.includes(r.id))),onChange:A(s.id,!1,(n=s.children)==null?void 0:n.some(r=>c.includes(r.id))),disabled:s.isDisabled,name:s.id}),s==null?void 0:s.icon,t.jsx(L,{onClick:A(s.id,!1,(d=s.children)==null?void 0:d.some(r=>c.includes(r.id))),children:t.jsx(g,{text:s.label,type:"body",id:"dropdown-value"})})]}):t.jsx(L,{onClick:_(s.id),children:t.jsx(g,{text:s.label,type:"body",id:"dropdown-value"})}),C&&t.jsx(H,{icon:`chevron ${p!=null&&p.includes(s.id)?"down":"up"}`,size:"small",color:"#9CA3AF",style:{color:"#9CA3AF"},onClick:se(s.id)})]},s.id),!(p!=null&&p.includes(s.id))&&t.jsx(W.Fragment,{children:(i=s.children)==null?void 0:i.map(r=>!b&&!c.includes(r.id)?null:t.jsx(B,{ischild:!0,isCollapsible:C,children:w?t.jsxs(P,{ischild:!0,children:[t.jsx(T,{label:r.label,checked:c.includes(r.id),onChange:A(r.id,!0),disabled:r.isDisabled}),r==null?void 0:r.icon]}):t.jsx(L,{onClick:_(r.id),children:t.jsx(g,{text:r.label,type:"body",id:"dropdown-value"})})},r.id))})]},s.id)})})]})]})})},Se=U;U.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{Se as A};
