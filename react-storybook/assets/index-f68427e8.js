import{j as l}from"./jsx-runtime-8406ef1e.js";import{r as p,R as ie}from"./index-ad58220e.js";import{d as m,o as ae}from"./styled-components.browser.esm-675ea4f2.js";import{t as D}from"./config-d87c20af.js";import{L as F}from"./index-6dcb29cb.js";import{S as ce}from"./searchComponent-bcb17182.js";import{L as k}from"./ltCheckBox-fb658f45.js";import{T as b}from"./index-426f0325.js";import{S as g}from"./stringConstants-f1def6f8.js";import{_ as oe}from"./lodash-9978a6f3.js";const ue=m.div`
  position: relative;
  width: 100%;
`,pe=m.div`
  border: 1px solid ${({theme:s})=>s.colors.border};
  border-radius: ${({theme:s})=>s.borderRadius.xxlarge};
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
`,me=m.div`
  position: absolute;
  ${({openUp:s})=>s?"bottom: 46px;":"top: 46px;"}
  left: 0;
  right: 0;
  background: white;
  border-radius: ${({theme:s})=>s.borderRadius.xlarge};
  box-shadow: ${({theme:s})=>s.shadows.medium};
  max-height: 320px;
  overflow-y: auto;
  border: 1px solid ${({theme:s})=>s.colors.border};
  z-index: 1;
`,A=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sm};
  cursor: pointer;
`,fe=m.div`
  padding: ${({theme:s})=>s.spacing.sm};
`,M=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:s})=>s.spacing.xs};
  padding: 0 ${({theme:s})=>s.spacing.sm};
`,U=m.div`
  padding: ${({theme:s})=>`${parseInt(s.padding.xsmall.replace("px",""))*3}px ${parseInt(s.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:s})=>s&&"padding-left: 28px;"}
  ${({isCollapsible:s})=>!s&&`border-bottom: 1px solid ${D.colors.border}3f;`}
  ${({isCollapsible:s,ischild:h})=>s&&!h&&`background-color: ${D.colors.backgroundSecondary};`}
`,he=m.span`
  color: ${({theme:s})=>s.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:s})=>s.spacing.xxs};
  cursor: pointer;
`,G=m.span`
  color: ${({theme:s,isSelected:h})=>h?s.colors.primary:s.colors.muted};
`,xe=m.div`
  overflow-y: auto;
  max-height: ${({isMultiSelect:s})=>s?"210px":"256px"};
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${({theme:s})=>s.colors.backgroundSecondary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:s})=>s.colors.border};
  }
`,J=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sm};
  ${({ischild:s})=>s&&"justify-content: space-between;"}
  width: 100%;
`,K=({options:s,defaultSelectedItems:h,isMultiSelect:w,isSearchable:Q,isCollapsible:T,onSelect:C,searchPlaceholder:X,placeholder:I,showCustomLabel:L="",showOnlyEnabledInInput:Y=!1,showSelectAll:Z=!0,showCount:ee=!1,showSelected:q=!0})=>{const[c,y]=p.useState([]),[x,$]=p.useState(!1),[E,se]=p.useState(""),[te,O]=p.useState(!1),j=p.useRef(null),[v,R]=p.useState(!0),[re,_]=p.useState(s),[S,z]=p.useState([]),ne=e=>{var t;return c.includes(e.id)||((t=e.children)==null?void 0:t.some(r=>c.includes(r.id)))||!1},N=(e,t,r)=>(n,i)=>{V(e,t,r)()},V=(e,t,r)=>()=>{var o;const n=s.find(d=>{var u;return t?(u=d.children)==null?void 0:u.some(f=>f.id===e):d.id===e}),i=n==null?void 0:n.id,a=((o=n==null?void 0:n.children)==null?void 0:o.filter(d=>!d.isDisabled).map(d=>d.id))||[];y(d=>d.includes(e)||r?t?a.filter(f=>f!==e&&d.includes(f)).length?d.filter(f=>f!==e):d.filter(f=>f!==i&&f!==e):d.filter(u=>u!==e&&!a.includes(u)):t?[...d,e]:[...d,e,...a])},W=e=>()=>{y([e]),$(!1),C([e])},le=()=>{x?($(!1),C(c)):$(!0)};p.useEffect(()=>{const e=t=>{j.current&&!j.current.contains(t.target)&&x&&($(!1),C(c))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[x,c,C]),p.useEffect(()=>{_(s)},[s]),p.useEffect(()=>{const e=w?h.reduce((r,n)=>{const i=s.find(a=>a.id===n);return i?(r.push(n),i.children&&r.push(...i.children.map(a=>a.id))):s.find(o=>{var d;return(d=o.children)==null?void 0:d.some(u=>u.id===n)})&&r.push(n),r},[]):h,t=Array.from(new Set(e));y(t)},[h,s]);const H=(e,t)=>{const{checked:r}=t;if(r){const n=s.flatMap(i=>{var d;const a=i.isDisabled&&!c.includes(i.id)?[]:[i.id],o=((d=i.children)==null?void 0:d.filter(u=>!u.isDisabled||c.includes(u.id)).map(u=>u.id))||[];return[...a,...o]});y(n)}else{const n=s.flatMap(a=>{var o;return((o=a.children)==null?void 0:o.filter(d=>d.isDisabled).map(d=>d.id))||[]}),i=c.filter(a=>n.includes(a));y(i)}};p.useEffect(()=>{const e=oe.filter(s,t=>{var r;return t.label.toLowerCase().includes(E.toLowerCase())||((r=t.children)==null?void 0:r.some(n=>n.label.toLowerCase().includes(E.toLowerCase())))});_(e)},[E]),p.useEffect(()=>{const e=()=>{if(j.current){const t=j.current.getBoundingClientRect();window.innerHeight-t.bottom<300?O(!0):O(!1)}};return x&&e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[x]);const P=e=>()=>{R(!!e)},de=e=>()=>{S.includes(e)?z(S.filter(t=>t!==e)):z(t=>[...t,e])},B=()=>{if(ee){const e=c.length;return L&&L.trim()?e>0?`${e} ${L}${e>1?"s":""} Selected`:"":e>0?`${e} Selected`:""}else{const e=[];return s.forEach(t=>{var n;const r=(n=t.children)==null?void 0:n.filter(i=>c.includes(i.id));if(c.includes(t.id)||r!=null&&r.length)if(Y){const i=r==null?void 0:r.filter(a=>!a.isDisabled);if(i&&i.length>0){const a=i.map(o=>o.label).join(", ");(c.includes(t.id)||i.some(o=>c.includes(o.id)))&&e.push(`${t.label}${a?": "+a:""}`)}}else{const i=r==null?void 0:r.map(a=>a.label).join(", ");e.push(`${t.label}${i?": "+i:""}`)}}),e.join(" ; ")}};return l.jsx(ae,{theme:D,children:l.jsxs(ue,{ref:j,children:[l.jsxs(pe,{onClick:le,children:[l.jsx(b,{text:B()?B():I||g.SELECT,type:"body",id:"dropdown-value"}),l.jsx(F,{icon:`chevron ${x?"up":"down"}`,size:"small",color:"#0000008A"})]}),x&&l.jsxs(me,{openUp:te,children:[Q&&l.jsx(fe,{children:l.jsx(ce,{placeholder:X||g.SEARCH,onChange:e=>se(e.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),w&&Z&&q&&l.jsxs(M,{children:[l.jsx(k,{label:g.SELECT_ALL,checked:c.length===s.length+s.reduce((e,t)=>{var r;return e+(((r=t.children)==null?void 0:r.length)||0)},0),onChange:H}),l.jsxs(he,{children:[l.jsx(G,{isSelected:v,onClick:P(!0),children:l.jsx(b,{text:g.ALL,type:"body",id:"dropdown-value"})})," ","|"," ",l.jsx(G,{isSelected:!v,onClick:P(!1),children:l.jsx(b,{text:g.SELECTED,type:"body",id:"dropdown-value"})})]})]}),!q&&l.jsx(M,{children:l.jsx(k,{label:g.SELECT_ALL,checked:c.length===s.length+s.reduce((e,t)=>{var r;return e+(((r=t.children)==null?void 0:r.length)||0)},0),onChange:H})}),l.jsx(xe,{isMultiSelect:w,children:re.map(e=>{var r;if(!v&&!c.includes(e.id))return null;const t=ne(e);return l.jsxs(ie.Fragment,{children:[l.jsxs(U,{isCollapsed:S.includes(e.id),isCollapsible:T,children:[w?l.jsxs(J,{children:[l.jsx(k,{checked:t,onChange:N(e.id,!1,t),disabled:e.isDisabled,name:e.id}),e==null?void 0:e.icon,l.jsx(A,{onClick:V(e.id,!1,t),children:l.jsx(b,{text:e.label,type:"body",id:"dropdown-value"})})]}):l.jsx(A,{onClick:W(e.id),children:l.jsx(b,{text:e.label,type:"body",id:"dropdown-value"})}),T&&l.jsx(F,{icon:`chevron ${S.includes(e.id)?"down":"up"}`,size:"small",onClick:de(e.id)})]},e.id),!S.includes(e.id)&&((r=e.children)==null?void 0:r.map(n=>!v&&!c.includes(n.id)?null:l.jsx(U,{ischild:!0,isCollapsible:T,children:w?l.jsxs(J,{ischild:!0,children:[l.jsx(k,{label:n.label,checked:c.includes(n.id),onChange:N(n.id,!0),disabled:n.isDisabled}),n==null?void 0:n.icon]}):l.jsx(A,{onClick:W(n.id),children:l.jsx(b,{text:n.label,type:"body",id:"dropdown-value"})})},n.id)))]},e.id)})})]})]})})},Te=K;K.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{Te as A};
