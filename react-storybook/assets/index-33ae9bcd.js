import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as m,R as W}from"./index-ad58220e.js";import{d as f,o as re}from"./styled-components.browser.esm-d2d81691.js";import{t as D}from"./config-58506fea.js";import{L as H}from"./index-6dcb29cb.js";import{S as te}from"./searchComponent-bcb17182.js";import{L as T}from"./ltCheckBox-fb658f45.js";import{T as w}from"./index-02183425.js";import{S as C}from"./stringConstants-4e8cb88a.js";import{_ as ne}from"./lodash-9978a6f3.js";const ie=f.div`
  position: relative;
  width: 100%;
`,de=f.div`
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
`,le=f.div`
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
`,E=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sm};
  cursor: pointer;
`,ae=f.div`
  padding: ${({theme:s})=>s.spacing.sm};
`,ce=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:s})=>s.spacing.xs};
  padding: 0 ${({theme:s})=>s.spacing.sm};
`,B=f.div`
  padding: ${({theme:s})=>`${parseInt(s.padding.xsmall.replace("px",""))*3}px ${parseInt(s.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:s})=>s&&"padding-left: 28px;"}
  ${({isCollapsible:s})=>!s&&`border-bottom: 1px solid ${D.colors.border}3f;`}
  ${({isCollapsible:s,ischild:x})=>s&&!x&&`background-color: ${D.colors.backgroundSecondary};`}
`,oe=f.span`
  color: ${({theme:s})=>s.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:s})=>s.spacing.xxs};
  cursor: pointer;
`,M=f.span`
  color: ${({theme:s,isSelected:x})=>x?s.colors.primary:s.colors.muted};
`,ue=f.div`
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
`,P=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sm};
  ${({ischild:s})=>s&&"justify-content: space-between;"}
  width: 100%;
`,U=({options:s,defaultSelectedItems:x,isMultiSelect:y,isSearchable:V,isCollapsible:k,onSelect:$,searchPlaceholder:G,placeholder:O,showOnlyEnabledInInput:J=!1,showSelectAll:K=!0})=>{const[c,j]=m.useState([]),[b,v]=m.useState(!1),[A,Q]=m.useState(""),[X,q]=m.useState(!1),S=m.useRef(null),[g,I]=m.useState(!0),[Y,R]=m.useState(s),[p,F]=m.useState([]),L=(e,n,i)=>()=>{var o;const l=s.find(a=>{var u;return n?(u=a.children)==null?void 0:u.some(h=>h.id===e):a.id===e}),d=l==null?void 0:l.id,r=((o=l==null?void 0:l.children)==null?void 0:o.filter(a=>!a.isDisabled).map(a=>a.id))||[];j(a=>a.includes(e)||i?n?r.filter(h=>h!==e&&a.includes(h)).length?a.filter(h=>h!==e):a.filter(h=>h!==d&&h!==e):a.filter(u=>u!==e&&!r.includes(u)):n?[...a,e]:[...a,e,...r])},_=e=>()=>{console.log(e),j([e]),v(!1),$([e])},Z=()=>{b?(v(!1),$(c)):v(!0)};m.useEffect(()=>{const e=n=>{S.current&&!S.current.contains(n.target)&&b&&(v(!1),$(c))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[b,c,$]),m.useEffect(()=>{R(s)},[s]),m.useEffect(()=>{const e=y?x.reduce((i,l)=>{const d=s.find(r=>r.id===l);return d?(i.push(l),d.children&&i.push(...d.children.map(r=>r.id))):s.find(o=>{var a;return(a=o.children)==null?void 0:a.some(u=>u.id===l)})&&i.push(l),i},[]):x,n=Array.from(new Set(e));j(n)},[x,s]);const ee=(e,n)=>{const{checked:i}=n;if(i){const l=s.flatMap(d=>{var a;const r=d.isDisabled&&!c.includes(d.id)?[]:[d.id],o=((a=d.children)==null?void 0:a.filter(u=>!u.isDisabled||c.includes(u.id)).map(u=>u.id))||[];return[...r,...o]});j(l)}else{const l=s.flatMap(r=>{var o;return((o=r.children)==null?void 0:o.filter(a=>a.isDisabled).map(a=>a.id))||[]}),d=c.filter(r=>l.includes(r));j(d)}};m.useEffect(()=>{const e=ne.filter(s,n=>{var i;return n.label.toLowerCase().includes(A.toLowerCase())||((i=n.children)==null?void 0:i.some(l=>l.label.toLowerCase().includes(A.toLowerCase())))});R(e)},[A]),m.useEffect(()=>{const e=()=>{if(S.current){const n=S.current.getBoundingClientRect();window.innerHeight-n.bottom<300?q(!0):q(!1)}};return b&&e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[b]);const z=e=>()=>{I(!!e)},se=e=>()=>{p.includes(e)?F(p.filter(n=>n!==e)):F(n=>[...n,e])},N=()=>{const e=[];return s.forEach(n=>{var l;const i=(l=n.children)==null?void 0:l.filter(d=>c.includes(d.id));if(c.includes(n.id)||i!=null&&i.length)if(J){const d=i==null?void 0:i.filter(r=>!r.isDisabled);if(d&&d.length>0){const r=d.map(o=>o.label).join(", ");(c.includes(n.id)||d.some(o=>c.includes(o.id)))&&e.push(`${n.label}${r?": "+r:""}`)}}else{const d=i==null?void 0:i.map(r=>r.label).join(", ");e.push(`${n.label}${d?": "+d:""}`)}}),e.join(" ; ")};return t.jsx(re,{theme:D,children:t.jsxs(ie,{ref:S,children:[t.jsxs(de,{onClick:Z,children:[t.jsx(w,{text:N()?N():O||C.SELECT,type:"body",id:"dropdown-value"}),t.jsx(H,{icon:`chevron ${b?"up":"down"}`,size:"small",color:"#0000008A"})]}),b&&t.jsxs(le,{openUp:X,children:[V&&t.jsx(ae,{children:t.jsx(te,{placeholder:G||C.SEARCH,onChange:e=>Q(e.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),y&&K&&t.jsxs(ce,{children:[t.jsx(T,{label:C.SELECT_ALL,checked:c.length===s.length+s.reduce((e,n)=>{var i;return e+(((i=n.children)==null?void 0:i.length)||0)},0),onChange:ee}),t.jsxs(oe,{children:[t.jsx(M,{isSelected:g,onClick:z(!0),children:t.jsx(w,{text:C.ALL,type:"body",id:"dropdown-value",color:g?"#00CD7C":"#767676"})})," ","|"," ",t.jsx(M,{isSelected:!g,onClick:z(!1),children:t.jsx(w,{text:C.SELECTED,type:"body",id:"dropdown-value",color:g?"#767676":"#00CD7C"})})]})]}),t.jsx(ue,{isMultiSelect:y,children:Y.map(e=>{var n,i,l,d;return!g&&!c.includes(e.id)?null:t.jsxs(W.Fragment,{children:[t.jsxs(B,{isCollapsed:p==null?void 0:p.includes(e.id),isCollapsible:k,children:[y?t.jsxs(P,{children:[t.jsx(T,{checked:c.includes(e.id)||((n=e.children)==null?void 0:n.some(r=>c.includes(r.id))),onChange:L(e.id,!1,(i=e.children)==null?void 0:i.some(r=>c.includes(r.id))),disabled:e.isDisabled,name:e.id}),e==null?void 0:e.icon,t.jsx(E,{onClick:L(e.id,!1,(l=e.children)==null?void 0:l.some(r=>c.includes(r.id))),children:t.jsx(w,{text:e.label,type:"body",id:"dropdown-value"})})]}):t.jsx(E,{onClick:_(e.id),children:t.jsx(w,{text:e.label,type:"body",id:"dropdown-value"})}),k&&t.jsx(H,{icon:`chevron ${p!=null&&p.includes(e.id)?"down":"up"}`,size:"small",color:"#9CA3AF",style:{color:"#9CA3AF"},onClick:se(e.id)})]},e.id),!(p!=null&&p.includes(e.id))&&t.jsx(W.Fragment,{children:(d=e.children)==null?void 0:d.map(r=>!g&&!c.includes(r.id)?null:t.jsx(B,{ischild:!0,isCollapsible:k,children:y?t.jsxs(P,{ischild:!0,children:[t.jsx(T,{label:r.label,checked:c.includes(r.id),onChange:L(r.id,!0),disabled:r.isDisabled}),r==null?void 0:r.icon]}):t.jsx(E,{onClick:_(r.id),children:t.jsx(w,{text:r.label,type:"body",id:"dropdown-value"})})},r.id))})]},e.id)})})]})]})})},Se=U;U.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{Se as A};
