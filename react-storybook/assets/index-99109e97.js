import{j as d}from"./jsx-runtime-8406ef1e.js";import{r as p,R as te}from"./index-ad58220e.js";import{d as m,o as ne}from"./styled-components.browser.esm-d2d81691.js";import{t as A}from"./config-d87c20af.js";import{L as P}from"./index-6dcb29cb.js";import{S as de}from"./searchComponent-bcb17182.js";import{L as T}from"./ltCheckBox-fb658f45.js";import{T as b}from"./index-7621d4b8.js";import{S}from"./stringConstants-ce0893de.js";import{_ as le}from"./lodash-9978a6f3.js";const ie=m.div`
  position: relative;
  width: 100%;
`,ae=m.div`
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
`,ce=m.div`
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
`,E=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sm};
  cursor: pointer;
`,oe=m.div`
  padding: ${({theme:s})=>s.spacing.sm};
`,ue=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:s})=>s.spacing.xs};
  padding: 0 ${({theme:s})=>s.spacing.sm};
`,B=m.div`
  padding: ${({theme:s})=>`${parseInt(s.padding.xsmall.replace("px",""))*3}px ${parseInt(s.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:s})=>s&&"padding-left: 28px;"}
  ${({isCollapsible:s})=>!s&&`border-bottom: 1px solid ${A.colors.border}3f;`}
  ${({isCollapsible:s,ischild:h})=>s&&!h&&`background-color: ${A.colors.backgroundSecondary};`}
`,pe=m.span`
  color: ${({theme:s})=>s.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:s})=>s.spacing.xxs};
  cursor: pointer;
`,F=m.span`
  color: ${({theme:s,isSelected:h})=>h?s.colors.primary:s.colors.muted};
`,me=m.div`
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
`,M=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing.sm};
  ${({ischild:s})=>s&&"justify-content: space-between;"}
  width: 100%;
`,U=({options:s,defaultSelectedItems:h,isMultiSelect:g,isSearchable:V,isCollapsible:k,onSelect:C,searchPlaceholder:G,placeholder:D,showOnlyEnabledInInput:J=!1,showSelectAll:K=!0})=>{const[c,w]=p.useState([]),[x,$]=p.useState(!1),[L,Q]=p.useState(""),[X,I]=p.useState(!1),y=p.useRef(null),[v,O]=p.useState(!0),[Y,q]=p.useState(s),[j,R]=p.useState([]),Z=e=>{var r;return c.includes(e.id)||((r=e.children)==null?void 0:r.some(n=>c.includes(n.id)))||!1},_=(e,r,n)=>(t,i)=>{z(e,r,n)()},z=(e,r,n)=>()=>{var o;const t=s.find(l=>{var u;return r?(u=l.children)==null?void 0:u.some(f=>f.id===e):l.id===e}),i=t==null?void 0:t.id,a=((o=t==null?void 0:t.children)==null?void 0:o.filter(l=>!l.isDisabled).map(l=>l.id))||[];w(l=>l.includes(e)||n?r?a.filter(f=>f!==e&&l.includes(f)).length?l.filter(f=>f!==e):l.filter(f=>f!==i&&f!==e):l.filter(u=>u!==e&&!a.includes(u)):r?[...l,e]:[...l,e,...a])},N=e=>()=>{console.log(e),w([e]),$(!1),C([e])},ee=()=>{x?($(!1),C(c)):$(!0)};p.useEffect(()=>{const e=r=>{y.current&&!y.current.contains(r.target)&&x&&($(!1),C(c))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[x,c,C]),p.useEffect(()=>{q(s)},[s]),p.useEffect(()=>{const e=g?h.reduce((n,t)=>{const i=s.find(a=>a.id===t);return i?(n.push(t),i.children&&n.push(...i.children.map(a=>a.id))):s.find(o=>{var l;return(l=o.children)==null?void 0:l.some(u=>u.id===t)})&&n.push(t),n},[]):h,r=Array.from(new Set(e));w(r)},[h,s]);const se=(e,r)=>{const{checked:n}=r;if(n){const t=s.flatMap(i=>{var l;const a=i.isDisabled&&!c.includes(i.id)?[]:[i.id],o=((l=i.children)==null?void 0:l.filter(u=>!u.isDisabled||c.includes(u.id)).map(u=>u.id))||[];return[...a,...o]});w(t)}else{const t=s.flatMap(a=>{var o;return((o=a.children)==null?void 0:o.filter(l=>l.isDisabled).map(l=>l.id))||[]}),i=c.filter(a=>t.includes(a));w(i)}};p.useEffect(()=>{const e=le.filter(s,r=>{var n;return r.label.toLowerCase().includes(L.toLowerCase())||((n=r.children)==null?void 0:n.some(t=>t.label.toLowerCase().includes(L.toLowerCase())))});q(e)},[L]),p.useEffect(()=>{const e=()=>{if(y.current){const r=y.current.getBoundingClientRect();window.innerHeight-r.bottom<300?I(!0):I(!1)}};return x&&e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[x]);const W=e=>()=>{O(!!e)},re=e=>()=>{j.includes(e)?R(j.filter(r=>r!==e)):R(r=>[...r,e])},H=()=>{const e=[];return s.forEach(r=>{var t;const n=(t=r.children)==null?void 0:t.filter(i=>c.includes(i.id));if(c.includes(r.id)||n!=null&&n.length)if(J){const i=n==null?void 0:n.filter(a=>!a.isDisabled);if(i&&i.length>0){const a=i.map(o=>o.label).join(", ");(c.includes(r.id)||i.some(o=>c.includes(o.id)))&&e.push(`${r.label}${a?": "+a:""}`)}}else{const i=n==null?void 0:n.map(a=>a.label).join(", ");e.push(`${r.label}${i?": "+i:""}`)}}),e.join(" ; ")};return d.jsx(ne,{theme:A,children:d.jsxs(ie,{ref:y,children:[d.jsxs(ae,{onClick:ee,children:[d.jsx(b,{text:H()?H():D||S.SELECT,type:"body",id:"dropdown-value"}),d.jsx(P,{icon:`chevron ${x?"up":"down"}`,size:"small",color:"#0000008A"})]}),x&&d.jsxs(ce,{openUp:X,children:[V&&d.jsx(oe,{children:d.jsx(de,{placeholder:G||S.SEARCH,onChange:e=>Q(e.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),g&&K&&d.jsxs(ue,{children:[d.jsx(T,{label:S.SELECT_ALL,checked:c.length===s.length+s.reduce((e,r)=>{var n;return e+(((n=r.children)==null?void 0:n.length)||0)},0),onChange:se}),d.jsxs(pe,{children:[d.jsx(F,{isSelected:v,onClick:W(!0),children:d.jsx(b,{text:S.ALL,type:"body",id:"dropdown-value"})})," ","|"," ",d.jsx(F,{isSelected:!v,onClick:W(!1),children:d.jsx(b,{text:S.SELECTED,type:"body",id:"dropdown-value"})})]})]}),d.jsx(me,{isMultiSelect:g,children:Y.map(e=>{var n;if(!v&&!c.includes(e.id))return null;const r=Z(e);return d.jsxs(te.Fragment,{children:[d.jsxs(B,{isCollapsed:j.includes(e.id),isCollapsible:k,children:[g?d.jsxs(M,{children:[d.jsx(T,{checked:r,onChange:_(e.id,!1,r),disabled:e.isDisabled,name:e.id}),e==null?void 0:e.icon,d.jsx(E,{onClick:z(e.id,!1,r),children:d.jsx(b,{text:e.label,type:"body",id:"dropdown-value"})})]}):d.jsx(E,{onClick:N(e.id),children:d.jsx(b,{text:e.label,type:"body",id:"dropdown-value"})}),k&&d.jsx(P,{icon:`chevron ${j.includes(e.id)?"down":"up"}`,size:"small",onClick:re(e.id)})]},e.id),!j.includes(e.id)&&((n=e.children)==null?void 0:n.map(t=>!v&&!c.includes(t.id)?null:d.jsx(B,{ischild:!0,isCollapsible:k,children:g?d.jsxs(M,{ischild:!0,children:[d.jsx(T,{label:t.label,checked:c.includes(t.id),onChange:_(t.id,!0),disabled:t.isDisabled}),t==null?void 0:t.icon]}):d.jsx(E,{onClick:N(t.id),children:d.jsx(b,{text:t.label,type:"body",id:"dropdown-value"})})},t.id)))]},e.id)})})]})]})})},$e=U;U.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{$e as A};
