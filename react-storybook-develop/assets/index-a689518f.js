import{j as d}from"./jsx-runtime-8406ef1e.js";import{r as b,R as ae}from"./index-ad58220e.js";import{d as g,o as ue}from"./styled-components.browser.esm-675ea4f2.js";import{t as x}from"./config-43c6afbd.js";import{L as J}from"./index-6dcb29cb.js";import{S as me}from"./searchComponent-bcb17182.js";import{L as D}from"./ltCheckBox-fb658f45.js";import{T as S}from"./index-0c2df6d5.js";import{S as j}from"./stringConstants-f1def6f8.js";import{_ as pe}from"./lodash-9978a6f3.js";import{u as he}from"./ThemeContext-71b3bf8d.js";const fe=g.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:o,theme:l})=>e&&`
      color: ${o||l.colors.darkModeText};
    `}
`,be=g.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: ${({darkMode:e,darkBgColor:o,theme:l})=>e?o||l.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:o,theme:l})=>e?o||l.colors.darkModeText:"inherit"};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${({darkMode:e,darkTextColor:o,theme:l})=>e&&`color: ${o||l.colors.darkModeText};`}
  }
`,xe=g.div`
  position: absolute;
  ${({openUp:e})=>e?"bottom: 46px;":"top: 46px;"}
  left: 0;
  right: 0;
  background: ${({darkMode:e,darkBgColor:o,theme:l})=>e?o||l.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:o,theme:l})=>e?o||l.colors.darkModeText:"inherit"};
  border-radius: ${({theme:e})=>e.borderRadius.xlarge};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-height: 320px;
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.colors.border};
  z-index: 1;
`,C=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  ${({darkMode:e,darkTextColor:o,theme:l})=>e&&`color: ${o||l.colors.darkModeText};`}
`,ge=g.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,K=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,Q=g.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e,theme:o})=>!e&&`border-bottom: 1px solid ${o.colors.border}3f;`}
  ${({isCollapsible:e,ischild:o,theme:l})=>e&&!o&&`background-color: ${l.colors.backgroundSecondary};`}
  ${({darkMode:e,darkBgColor:o,darkTextColor:l,theme:w})=>e&&`
      background: ${o||w.colors.darkModeBgSecondary} !important;
      color: ${l||w.colors.darkModeText} !important;
      border-bottom: 1px solid ${w.colors.darkModeBorder} !important;
      * {
        color: ${l||w.colors.darkModeText} !important;
      }
      label, span, div {
        color: ${l||w.colors.darkModeText} !important;
      }
    `}
`,ye=g.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,X=g.span`
  color: ${({darkMode:e,darkTextColor:o,theme:l})=>e?o||l.colors.darkModeText:"inherit"};
`,we=g.div`
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
`,Y=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
  ${({darkMode:e,darkTextColor:o,theme:l})=>e&&`color: ${o||l.colors.darkModeText};`}
`,Z=({options:e,defaultSelectedItems:o,isMultiSelect:l,isSearchable:w,isCollapsible:q,onSelect:T,searchPlaceholder:ee,placeholder:R,showCustomLabel:I="",showOnlyEnabledInInput:se=!1,showSelectAll:te=!0,showCount:re=!1,showSelected:_=!0,darkBgColor:L,darkTextColor:i})=>{const c=he().theme==="dark",[p,v]=b.useState([]),[$,E]=b.useState(!1),[O,ne]=b.useState(""),[de,z]=b.useState(!1),k=b.useRef(null),[A,B]=b.useState(!0),[le,N]=b.useState(e),[M,V]=b.useState([]),oe=s=>{var t;return p.includes(s.id)||((t=s.children)==null?void 0:t.some(r=>p.includes(r.id)))||!1},W=(s,t,r)=>(n,u)=>{H(s,t,r)()},H=(s,t,r)=>()=>{var h;const n=e.find(a=>{var f;return t?(f=a.children)==null?void 0:f.some(y=>y.id===s):a.id===s}),u=n==null?void 0:n.id,m=((h=n==null?void 0:n.children)==null?void 0:h.filter(a=>!a.isDisabled).map(a=>a.id))||[];v(a=>a.includes(s)||r?t?m.filter(y=>y!==s&&a.includes(y)).length?a.filter(y=>y!==s):a.filter(y=>y!==u&&y!==s):a.filter(f=>f!==s&&!m.includes(f)):t?[...a,s]:[...a,s,...m])},P=s=>()=>{v([s]),E(!1),T([s])},ie=()=>{$?(E(!1),T(p)):E(!0)};b.useEffect(()=>{const s=t=>{k.current&&!k.current.contains(t.target)&&$&&(E(!1),T(p))};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[$,p,T]),b.useEffect(()=>{N(e)},[e]),b.useEffect(()=>{const s=l?o.reduce((r,n)=>{const u=e.find(m=>m.id===n);return u?(r.push(n),u.children&&r.push(...u.children.map(m=>m.id))):e.find(h=>{var a;return(a=h.children)==null?void 0:a.some(f=>f.id===n)})&&r.push(n),r},[]):o,t=Array.from(new Set(s));v(t)},[o,e]);const F=(s,t)=>{const{checked:r}=t;if(r){const n=e.flatMap(u=>{var a;const m=u.isDisabled&&!p.includes(u.id)?[]:[u.id],h=((a=u.children)==null?void 0:a.filter(f=>!f.isDisabled||p.includes(f.id)).map(f=>f.id))||[];return[...m,...h]});v(n)}else{const n=e.flatMap(m=>{var h;return((h=m.children)==null?void 0:h.filter(a=>a.isDisabled).map(a=>a.id))||[]}),u=p.filter(m=>n.includes(m));v(u)}};b.useEffect(()=>{const s=pe.filter(e,t=>{var r;return t.label.toLowerCase().includes(O.toLowerCase())||((r=t.children)==null?void 0:r.some(n=>n.label.toLowerCase().includes(O.toLowerCase())))});N(s)},[O]),b.useEffect(()=>{const s=()=>{if(k.current){const t=k.current.getBoundingClientRect();window.innerHeight-t.bottom<300?z(!0):z(!1)}};return $&&s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[$]);const U=s=>()=>{B(!!s)},ce=s=>()=>{M.includes(s)?V(M.filter(t=>t!==s)):V(t=>[...t,s])},G=()=>{if(re){const s=p.length;return I&&I.trim()?s>0?`${s} ${I}${s>1?"s":""} Selected`:"":s>0?`${s} Selected`:""}else{const s=[];return e.forEach(t=>{var n;const r=(n=t.children)==null?void 0:n.filter(u=>p.includes(u.id));if(p.includes(t.id)||r!=null&&r.length)if(se){const u=r==null?void 0:r.filter(m=>!m.isDisabled);if(u&&u.length>0){const m=u.map(h=>h.label).join(", ");(p.includes(t.id)||u.some(h=>p.includes(h.id)))&&s.push(`${t.label}${m?": "+m:""}`)}}else{const u=r==null?void 0:r.map(m=>m.label).join(", ");s.push(`${t.label}${u?": "+u:""}`)}}),s.join(" ; ")}};return d.jsx(ue,{theme:x,children:d.jsxs(fe,{ref:k,darkMode:c,darkTextColor:i,children:[d.jsxs(be,{onClick:ie,darkMode:c,darkBgColor:L,darkTextColor:i,children:[d.jsx(S,{text:G()?G():R||j.SELECT,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}}),d.jsx(J,{icon:`chevron ${$?"up":"down"}`,size:"small",color:c?i||x.colors.darkModeText:"#0000008A"})]}),$&&d.jsxs(xe,{openUp:de,darkMode:c,darkBgColor:L,darkTextColor:i,children:[w&&d.jsx(ge,{children:d.jsx(me,{placeholder:ee||j.SEARCH,onChange:s=>ne(s.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),l&&te&&_&&d.jsxs(K,{children:[d.jsx(D,{style:c?{color:i||x.colors.darkModeText}:{},label:j.SELECT_ALL,checked:p.length===e.length+e.reduce((s,t)=>{var r;return s+(((r=t.children)==null?void 0:r.length)||0)},0),onChange:F}),d.jsxs(ye,{children:[d.jsx(X,{isSelected:A,darkMode:c,onClick:U(!0),darkTextColor:i,children:d.jsx(S,{text:j.ALL,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})})," ","|"," ",d.jsx(X,{isSelected:!A,darkMode:c,onClick:U(!1),darkTextColor:i,children:d.jsx(S,{text:j.SELECTED,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})})]})]}),!_&&d.jsx(K,{children:d.jsx(D,{label:j.SELECT_ALL,checked:p.length===e.length+e.reduce((s,t)=>{var r;return s+(((r=t.children)==null?void 0:r.length)||0)},0),onChange:F,style:c?{color:i||x.colors.darkModeText}:{}})}),d.jsx(we,{isMultiSelect:l,children:le.map(s=>{var r;if(!A&&!p.includes(s.id))return null;const t=oe(s);return d.jsxs(ae.Fragment,{children:[d.jsxs(Q,{isCollapsed:M.includes(s.id),isCollapsible:q,darkMode:c,darkBgColor:L,darkTextColor:i,children:[l?d.jsxs(Y,{darkMode:c,darkTextColor:i,children:[d.jsx(D,{style:c?{color:i||x.colors.darkModeText}:{},checked:t,onChange:W(s.id,!1,t),disabled:s.isDisabled,name:s.id}),s==null?void 0:s.icon,d.jsx(C,{onClick:H(s.id,!1,t),darkMode:c,darkTextColor:i,children:d.jsx(S,{text:s.label,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})})]}):d.jsx(C,{onClick:P(s.id),darkMode:c,darkTextColor:i,children:d.jsx(S,{text:s.label,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})}),q&&d.jsx(J,{icon:`chevron ${M.includes(s.id)?"down":"up"}`,size:"small",onClick:ce(s.id),style:c?{color:i||x.colors.darkModeText}:{}})]},s.id),!M.includes(s.id)&&((r=s.children)==null?void 0:r.map(n=>!A&&!p.includes(n.id)?null:d.jsx(Q,{ischild:!0,isCollapsible:q,darkMode:c,darkBgColor:L,darkTextColor:i,children:l?d.jsxs(Y,{ischild:!0,darkMode:c,darkTextColor:i,children:[d.jsx(D,{style:c?{color:i||x.colors.darkModeText}:{},label:n.label,checked:p.includes(n.id),onChange:W(n.id,!0),disabled:n.isDisabled}),n==null?void 0:n.icon]}):d.jsx(C,{onClick:P(n.id),darkMode:c,darkTextColor:i,children:d.jsx(S,{text:n.label,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})})},n.id)))]},s.id)})})]})]})})},qe=Z;Z.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""}}};export{qe as A};
