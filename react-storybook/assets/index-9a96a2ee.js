import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as h,R as oe}from"./index-ad58220e.js";import{d as b,o as fe}from"./styled-components.browser.esm-675ea4f2.js";import{t as T}from"./config-92a52d19.js";import{L as K}from"./index-6dcb29cb.js";import{S as ue}from"./searchComponent-bcb17182.js";import{L as q}from"./ltCheckBox-fb658f45.js";import{T as y}from"./index-1a186ea7.js";import{S as $}from"./stringConstants-f1def6f8.js";import{_ as pe}from"./lodash-9978a6f3.js";const me=b.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:i})=>e&&`
      color: ${i||"#fff"};
    `}
`,he=b.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: ${({darkMode:e,darkBgColor:i})=>e?i||"#373535":"white"};
  color: ${({darkMode:e,darkTextColor:i})=>e?i||"#fff":"inherit"};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${({darkMode:e,darkTextColor:i})=>e&&`color: ${i||"#fff"};`}
  }
`,be=b.div`
  position: absolute;
  ${({openUp:e})=>e?"bottom: 46px;":"top: 46px;"}
  left: 0;
  right: 0;
  background: ${({darkMode:e,darkBgColor:i})=>e?i||"#373535":"white"};
  color: ${({darkMode:e,darkTextColor:i})=>e?i||"#fff":"inherit"};
  border-radius: ${({theme:e})=>e.borderRadius.xlarge};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-height: 320px;
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.colors.border};
  z-index: 1;
`,R=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  ${({darkMode:e,darkTextColor:i})=>e&&`color: ${i||"#fff"};`}
`,ge=b.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,Q=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,X=b.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e})=>!e&&`border-bottom: 1px solid ${T.colors.border}3f;`}
  ${({isCollapsible:e,ischild:i})=>e&&!i&&`background-color: ${T.colors.backgroundSecondary};`}
  ${({darkMode:e,darkBgColor:i,darkTextColor:g})=>e&&`
      background: ${i||"#373535"} !important;
      color: ${g||"#fff"} !important;
      border-bottom: 1px solid #444 !important;
      
    
      * {
        color: ${g||"#fff"} !important;
      }
      
      /* Specifically target labels and spans */
      label, span, div {
        color: ${g||"#fff"} !important;
      }
    `}
`,xe=b.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,Y=b.span`
  color: ${({darkMode:e,darkTextColor:i})=>e?i||"#fff":"inherit"};
`,we=b.div`
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
`,Z=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
  ${({darkMode:e,darkTextColor:i})=>e&&`color: ${i||"#fff"};`}
`,k=({options:e,defaultSelectedItems:i,isMultiSelect:g,isSearchable:M,isCollapsible:C,onSelect:L,searchPlaceholder:ee,placeholder:_,showCustomLabel:I="",showOnlyEnabledInInput:se=!1,showSelectAll:te=!0,showCount:ne=!1,showSelected:V=!0,darkMode:a=!1,darkBgColor:E,darkTextColor:f})=>{const[u,S]=h.useState([]),[w,A]=h.useState(!1),[O,le]=h.useState(""),[re,z]=h.useState(!1),j=h.useRef(null),[D,N]=h.useState(!0),[ie,W]=h.useState(e),[v,H]=h.useState([]),ce=s=>{var t;return u.includes(s.id)||((t=s.children)==null?void 0:t.some(n=>u.includes(n.id)))||!1},P=(s,t,n)=>(l,d)=>{F(s,t,n)()},F=(s,t,n)=>()=>{var p;const l=e.find(c=>{var m;return t?(m=c.children)==null?void 0:m.some(x=>x.id===s):c.id===s}),d=l==null?void 0:l.id,o=((p=l==null?void 0:l.children)==null?void 0:p.filter(c=>!c.isDisabled).map(c=>c.id))||[];S(c=>c.includes(s)||n?t?o.filter(x=>x!==s&&c.includes(x)).length?c.filter(x=>x!==s):c.filter(x=>x!==d&&x!==s):c.filter(m=>m!==s&&!o.includes(m)):t?[...c,s]:[...c,s,...o])},U=s=>()=>{S([s]),A(!1),L([s])},ae=()=>{w?(A(!1),L(u)):A(!0)};h.useEffect(()=>{const s=t=>{j.current&&!j.current.contains(t.target)&&w&&(A(!1),L(u))};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[w,u,L]),h.useEffect(()=>{W(e)},[e]),h.useEffect(()=>{const s=g?i.reduce((n,l)=>{const d=e.find(o=>o.id===l);return d?(n.push(l),d.children&&n.push(...d.children.map(o=>o.id))):e.find(p=>{var c;return(c=p.children)==null?void 0:c.some(m=>m.id===l)})&&n.push(l),n},[]):i,t=Array.from(new Set(s));S(t)},[i,e]);const B=(s,t)=>{const{checked:n}=t;if(n){const l=e.flatMap(d=>{var c;const o=d.isDisabled&&!u.includes(d.id)?[]:[d.id],p=((c=d.children)==null?void 0:c.filter(m=>!m.isDisabled||u.includes(m.id)).map(m=>m.id))||[];return[...o,...p]});S(l)}else{const l=e.flatMap(o=>{var p;return((p=o.children)==null?void 0:p.filter(c=>c.isDisabled).map(c=>c.id))||[]}),d=u.filter(o=>l.includes(o));S(d)}};h.useEffect(()=>{const s=pe.filter(e,t=>{var n;return t.label.toLowerCase().includes(O.toLowerCase())||((n=t.children)==null?void 0:n.some(l=>l.label.toLowerCase().includes(O.toLowerCase())))});W(s)},[O]),h.useEffect(()=>{const s=()=>{if(j.current){const t=j.current.getBoundingClientRect();window.innerHeight-t.bottom<300?z(!0):z(!1)}};return w&&s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[w]);const G=s=>()=>{N(!!s)},de=s=>()=>{v.includes(s)?H(v.filter(t=>t!==s)):H(t=>[...t,s])},J=()=>{if(ne){const s=u.length;return I&&I.trim()?s>0?`${s} ${I}${s>1?"s":""} Selected`:"":s>0?`${s} Selected`:""}else{const s=[];return e.forEach(t=>{var l;const n=(l=t.children)==null?void 0:l.filter(d=>u.includes(d.id));if(u.includes(t.id)||n!=null&&n.length)if(se){const d=n==null?void 0:n.filter(o=>!o.isDisabled);if(d&&d.length>0){const o=d.map(p=>p.label).join(", ");(u.includes(t.id)||d.some(p=>u.includes(p.id)))&&s.push(`${t.label}${o?": "+o:""}`)}}else{const d=n==null?void 0:n.map(o=>o.label).join(", ");s.push(`${t.label}${d?": "+d:""}`)}}),s.join(" ; ")}};return r.jsx(fe,{theme:T,children:r.jsxs(me,{ref:j,darkMode:a,darkTextColor:f,children:[r.jsxs(he,{onClick:ae,darkMode:a,darkBgColor:E,darkTextColor:f,children:[r.jsx(y,{text:J()?J():_||$.SELECT,type:"body",id:"dropdown-value",style:a?{color:f||"#fff"}:{}}),r.jsx(K,{icon:`chevron ${w?"up":"down"}`,size:"small",color:a?f||"#fff":"#0000008A"})]}),w&&r.jsxs(be,{openUp:re,darkMode:a,darkBgColor:E,darkTextColor:f,children:[M&&r.jsx(ge,{children:r.jsx(ue,{placeholder:ee||$.SEARCH,onChange:s=>le(s.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),g&&te&&V&&r.jsxs(Q,{children:[r.jsx(q,{style:a?{color:f||"#fff"}:{},label:$.SELECT_ALL,checked:u.length===e.length+e.reduce((s,t)=>{var n;return s+(((n=t.children)==null?void 0:n.length)||0)},0),onChange:B}),r.jsxs(xe,{children:[r.jsx(Y,{isSelected:D,darkMode:a,onClick:G(!0),children:r.jsx(y,{text:$.ALL,type:"body",id:"dropdown-value",style:a?{color:"#fff"}:{}})})," ","|"," ",r.jsx(Y,{isSelected:!D,darkMode:a,onClick:G(!1),children:r.jsx(y,{text:$.SELECTED,type:"body",id:"dropdown-value",style:a?{color:"#fff"}:{}})})]})]}),!V&&r.jsx(Q,{children:r.jsx(q,{label:$.SELECT_ALL,checked:u.length===e.length+e.reduce((s,t)=>{var n;return s+(((n=t.children)==null?void 0:n.length)||0)},0),onChange:B})}),r.jsx(we,{isMultiSelect:g,children:ie.map(s=>{var n;if(!D&&!u.includes(s.id))return null;const t=ce(s);return r.jsxs(oe.Fragment,{children:[r.jsxs(X,{isCollapsed:v.includes(s.id),isCollapsible:C,darkMode:a,darkBgColor:E,darkTextColor:f,children:[g?r.jsxs(Z,{darkMode:a,darkTextColor:f,children:[r.jsx(q,{style:a?{color:f||"#fff"}:{},checked:t,onChange:P(s.id,!1,t),disabled:s.isDisabled,name:s.id}),s==null?void 0:s.icon,r.jsx(R,{onClick:F(s.id,!1,t),darkMode:a,darkTextColor:f,children:r.jsx(y,{text:s.label,type:"body",id:"dropdown-value",style:a?{color:f||"#fff"}:{}})})]}):r.jsx(R,{onClick:U(s.id),darkMode:a,darkTextColor:f,children:r.jsx(y,{text:s.label,type:"body",id:"dropdown-value",style:a?{color:f||"#fff"}:{}})}),C&&r.jsx(K,{icon:`chevron ${v.includes(s.id)?"down":"up"}`,size:"small",onClick:de(s.id),style:a?{color:f||"#fff"}:{}})]},s.id),!v.includes(s.id)&&((n=s.children)==null?void 0:n.map(l=>!D&&!u.includes(l.id)?null:r.jsx(X,{ischild:!0,isCollapsible:C,darkMode:a,darkBgColor:E,darkTextColor:f,children:g?r.jsxs(Z,{ischild:!0,darkMode:a,darkTextColor:f,children:[r.jsx(q,{style:a?{color:f||"#fff"}:{},label:l.label,checked:u.includes(l.id),onChange:P(l.id,!0),disabled:l.isDisabled}),l==null?void 0:l.icon]}):r.jsx(R,{onClick:U(l.id),darkMode:a,darkTextColor:f,children:r.jsx(y,{text:l.label,type:"body",id:"dropdown-value",style:a?{color:f||"#fff"}:{}})})},l.id)))]},s.id)})})]})]})})},Ce=k;k.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""}}};export{Ce as A};
