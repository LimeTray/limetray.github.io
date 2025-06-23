import{j as l}from"./jsx-runtime-8406ef1e.js";import{r as p,R as le}from"./index-ad58220e.js";import{d as m,o as de}from"./styled-components.browser.esm-d2d81691.js";import{t as D}from"./config-d87c20af.js";import{L as V}from"./index-6dcb29cb.js";import{S as ie}from"./searchComponent-bcb17182.js";import{L as E}from"./ltCheckBox-fb658f45.js";import{T as b}from"./index-7621d4b8.js";import{S as j}from"./stringConstants-ce0893de.js";import{_ as ae}from"./lodash-9978a6f3.js";const ce=m.div`
  position: relative;
  width: 100%;
`,oe=m.div`
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
`,ue=m.div`
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
`,pe=m.div`
  padding: ${({theme:s})=>s.spacing.sm};
`,me=m.div`
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
  ${({isCollapsible:s})=>!s&&`border-bottom: 1px solid ${D.colors.border}3f;`}
  ${({isCollapsible:s,ischild:h})=>s&&!h&&`background-color: ${D.colors.backgroundSecondary};`}
`,fe=m.span`
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
`,he=m.div`
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
`,U=({options:s,defaultSelectedItems:h,isMultiSelect:g,isSearchable:G,isCollapsible:k,onSelect:$,searchPlaceholder:J,placeholder:I,showCustomLabel:T="",showOnlyEnabledInInput:K=!1,showSelectAll:Q=!0,showCount:X=!1})=>{const[c,w]=p.useState([]),[x,C]=p.useState(!1),[L,Y]=p.useState(""),[Z,O]=p.useState(!1),y=p.useRef(null),[v,q]=p.useState(!0),[ee,R]=p.useState(s),[S,_]=p.useState([]),se=e=>{var t;return c.includes(e.id)||((t=e.children)==null?void 0:t.some(n=>c.includes(n.id)))||!1},z=(e,t,n)=>(r,i)=>{N(e,t,n)()},N=(e,t,n)=>()=>{var o;const r=s.find(d=>{var u;return t?(u=d.children)==null?void 0:u.some(f=>f.id===e):d.id===e}),i=r==null?void 0:r.id,a=((o=r==null?void 0:r.children)==null?void 0:o.filter(d=>!d.isDisabled).map(d=>d.id))||[];w(d=>d.includes(e)||n?t?a.filter(f=>f!==e&&d.includes(f)).length?d.filter(f=>f!==e):d.filter(f=>f!==i&&f!==e):d.filter(u=>u!==e&&!a.includes(u)):t?[...d,e]:[...d,e,...a])},W=e=>()=>{w([e]),C(!1),$([e])},te=()=>{x?(C(!1),$(c)):C(!0)};p.useEffect(()=>{const e=t=>{y.current&&!y.current.contains(t.target)&&x&&(C(!1),$(c))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[x,c,$]),p.useEffect(()=>{R(s)},[s]),p.useEffect(()=>{const e=g?h.reduce((n,r)=>{const i=s.find(a=>a.id===r);return i?(n.push(r),i.children&&n.push(...i.children.map(a=>a.id))):s.find(o=>{var d;return(d=o.children)==null?void 0:d.some(u=>u.id===r)})&&n.push(r),n},[]):h,t=Array.from(new Set(e));w(t)},[h,s]);const re=(e,t)=>{const{checked:n}=t;if(n){const r=s.flatMap(i=>{var d;const a=i.isDisabled&&!c.includes(i.id)?[]:[i.id],o=((d=i.children)==null?void 0:d.filter(u=>!u.isDisabled||c.includes(u.id)).map(u=>u.id))||[];return[...a,...o]});w(r)}else{const r=s.flatMap(a=>{var o;return((o=a.children)==null?void 0:o.filter(d=>d.isDisabled).map(d=>d.id))||[]}),i=c.filter(a=>r.includes(a));w(i)}};p.useEffect(()=>{const e=ae.filter(s,t=>{var n;return t.label.toLowerCase().includes(L.toLowerCase())||((n=t.children)==null?void 0:n.some(r=>r.label.toLowerCase().includes(L.toLowerCase())))});R(e)},[L]),p.useEffect(()=>{const e=()=>{if(y.current){const t=y.current.getBoundingClientRect();window.innerHeight-t.bottom<300?O(!0):O(!1)}};return x&&e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[x]);const H=e=>()=>{q(!!e)},ne=e=>()=>{S.includes(e)?_(S.filter(t=>t!==e)):_(t=>[...t,e])},P=()=>{if(X){const e=c.length;return T&&T.trim()?e>0?`${e} ${T}${e>1?"s":""} Selected`:"":e>0?`${e} Selected`:""}else{const e=[];return s.forEach(t=>{var r;const n=(r=t.children)==null?void 0:r.filter(i=>c.includes(i.id));if(c.includes(t.id)||n!=null&&n.length)if(K){const i=n==null?void 0:n.filter(a=>!a.isDisabled);if(i&&i.length>0){const a=i.map(o=>o.label).join(", ");(c.includes(t.id)||i.some(o=>c.includes(o.id)))&&e.push(`${t.label}${a?": "+a:""}`)}}else{const i=n==null?void 0:n.map(a=>a.label).join(", ");e.push(`${t.label}${i?": "+i:""}`)}}),e.join(" ; ")}};return l.jsx(de,{theme:D,children:l.jsxs(ce,{ref:y,children:[l.jsxs(oe,{onClick:te,children:[l.jsx(b,{text:P()?P():I||j.SELECT,type:"body",id:"dropdown-value"}),l.jsx(V,{icon:`chevron ${x?"up":"down"}`,size:"small",color:"#0000008A"})]}),x&&l.jsxs(ue,{openUp:Z,children:[G&&l.jsx(pe,{children:l.jsx(ie,{placeholder:J||j.SEARCH,onChange:e=>Y(e.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),g&&Q&&l.jsxs(me,{children:[l.jsx(E,{label:j.SELECT_ALL,checked:c.length===s.length+s.reduce((e,t)=>{var n;return e+(((n=t.children)==null?void 0:n.length)||0)},0),onChange:re}),l.jsxs(fe,{children:[l.jsx(F,{isSelected:v,onClick:H(!0),children:l.jsx(b,{text:j.ALL,type:"body",id:"dropdown-value"})})," ","|"," ",l.jsx(F,{isSelected:!v,onClick:H(!1),children:l.jsx(b,{text:j.SELECTED,type:"body",id:"dropdown-value"})})]})]}),l.jsx(he,{isMultiSelect:g,children:ee.map(e=>{var n;if(!v&&!c.includes(e.id))return null;const t=se(e);return l.jsxs(le.Fragment,{children:[l.jsxs(B,{isCollapsed:S.includes(e.id),isCollapsible:k,children:[g?l.jsxs(M,{children:[l.jsx(E,{checked:t,onChange:z(e.id,!1,t),disabled:e.isDisabled,name:e.id}),e==null?void 0:e.icon,l.jsx(A,{onClick:N(e.id,!1,t),children:l.jsx(b,{text:e.label,type:"body",id:"dropdown-value"})})]}):l.jsx(A,{onClick:W(e.id),children:l.jsx(b,{text:e.label,type:"body",id:"dropdown-value"})}),k&&l.jsx(V,{icon:`chevron ${S.includes(e.id)?"down":"up"}`,size:"small",onClick:ne(e.id)})]},e.id),!S.includes(e.id)&&((n=e.children)==null?void 0:n.map(r=>!v&&!c.includes(r.id)?null:l.jsx(B,{ischild:!0,isCollapsible:k,children:g?l.jsxs(M,{ischild:!0,children:[l.jsx(E,{label:r.label,checked:c.includes(r.id),onChange:z(r.id,!0),disabled:r.isDisabled}),r==null?void 0:r.icon]}):l.jsx(A,{onClick:W(r.id),children:l.jsx(b,{text:r.label,type:"body",id:"dropdown-value"})})},r.id)))]},e.id)})})]})]})})},ke=U;U.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{ke as A};
