import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as x,R as xe}from"./index-ad58220e.js";import{d as f,o as be}from"./styled-components.browser.esm-675ea4f2.js";import{t as b}from"./config-43c6afbd.js";import{L as q}from"./index-6dcb29cb.js";import{L as ye}from"./ltButton-612ce8c0.js";import{S as we}from"./searchComponent-bcb17182.js";import{L as B}from"./ltCheckBox-fb658f45.js";import{T as k}from"./index-0c2df6d5.js";import{S as j}from"./stringConstants-f1def6f8.js";import{_ as $e}from"./lodash-9978a6f3.js";import{u as ke}from"./ThemeContext-71b3bf8d.js";const je=f.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`
      color: ${t||s.colors.darkModeText};
    `}
`,Se=f.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: ${({darkMode:e,darkBgColor:t,theme:s})=>e?t||s.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:"inherit"};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
  }
`,ve=f.div`
  position: absolute;
  ${({openUp:e})=>e?"bottom: 46px;":"top: 46px;"}
  left: 0;
  right: 0;
  background: ${({darkMode:e,darkBgColor:t,theme:s})=>e?t||s.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:"inherit"};
  border-radius: ${({theme:e})=>e.borderRadius.xlarge};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-height: 320px;
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.colors.border};
  z-index: 1;
`,R=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  width: 100%;
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.text};
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,Q=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex: 1;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,X=f.div`
  display: flex;
  align-items: center;
  width: 20px;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  
  &&& i.icon,
  &&& i.icon.green,
  &&& .icon,
  &&& .icon.green {
    color: inherit !important;
  }
`,Me=f.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,Y=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,Z=f.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${({theme:e,darkMode:t})=>t?e.colors.darkModeBgSecondary:e.colors.backgroundSecondary};
  }
  
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e,theme:t})=>!e&&`border-bottom: 1px solid ${t.colors.border}3f;`}
  ${({isCollapsible:e,ischild:t,theme:s})=>e&&!t&&`background-color: ${s.colors.backgroundSecondary};`}
  ${({isSelected:e,theme:t,darkMode:s})=>e&&`background-color: ${s?t.colors.darkModeBgSecondary:t.colors.backgroundSecondary};`}
  ${({darkMode:e,darkBgColor:t,darkTextColor:s,theme:w})=>e&&`
      background: ${t||w.colors.darkModeBgSecondary} !important;
      color: ${s||w.colors.darkModeText} !important;
      border-bottom: 1px solid ${w.colors.darkModeBorder} !important;
      * {
        color: ${s||w.colors.darkModeText} !important;
      }
      label, span, div {
        color: ${s||w.colors.darkModeText} !important;
      }
    `}
`,Te=f.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,ee=f.span`
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:"inherit"};
`,Le=f.div`
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
`,re=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,Ee=f.div`
  padding: ${({theme:e})=>e.spacing.xs};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Ae=f.div`
  &&& .ltButton {
    width: 100%;
    color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.primary};
    background: transparent;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.primary};
      color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBgSecondary:"white"};
      
      .leftElement, .label {
        color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBgSecondary:"white"};
      }
    }
    
    .leftElement, .label {
      color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.primary};
    }
  }
`,se=({options:e,defaultSelectedItems:t,isMultiSelect:s,isSearchable:w,isCollapsible:D,onSelect:T,searchPlaceholder:te,placeholder:C,showCustomLabel:I="",showOnlyEnabledInInput:ne=!1,showSelectAll:oe=!0,showCount:le=!1,showSelected:_=!0,darkBgColor:L,darkTextColor:a,showBottomButton:de=!1,bottomButtonText:ae="Apply",bottomButtonIcon:ce,onBottomButtonClick:ie,showCheckedIcon:V=!0})=>{const c=ke().theme==="dark",[m,S]=x.useState([]),[$,E]=x.useState(!1),[O,ue]=x.useState(""),[me,z]=x.useState(!1),v=x.useRef(null),[A,N]=x.useState(!0),[pe,W]=x.useState(e),[M,H]=x.useState([]),fe=r=>{var l;return m.includes(r.id)||((l=r.children)==null?void 0:l.some(d=>m.includes(d.id)))||!1},P=(r,l,d)=>(n,i)=>{F(r,l,d)()},F=(r,l,d)=>()=>{var h;const n=e.find(u=>{var g;return l?(g=u.children)==null?void 0:g.some(y=>y.id===r):u.id===r}),i=n==null?void 0:n.id,p=((h=n==null?void 0:n.children)==null?void 0:h.filter(u=>!u.isDisabled).map(u=>u.id))||[];S(u=>u.includes(r)||d?l?p.filter(y=>y!==r&&u.includes(y)).length?u.filter(y=>y!==r):u.filter(y=>y!==i&&y!==r):u.filter(g=>g!==r&&!p.includes(g)):l?[...u,r]:[...u,r,...p])},U=r=>()=>{S([r]),E(!1),T([r])},he=()=>{$?(E(!1),T(m)):E(!0)};x.useEffect(()=>{const r=l=>{v.current&&!v.current.contains(l.target)&&$&&(E(!1),T(m))};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[$,m,T]),x.useEffect(()=>{W(e)},[e]),x.useEffect(()=>{const r=s?t.reduce((d,n)=>{const i=e.find(p=>p.id===n);return i?(d.push(n),i.children&&d.push(...i.children.map(p=>p.id))):e.find(h=>{var u;return(u=h.children)==null?void 0:u.some(g=>g.id===n)})&&d.push(n),d},[]):t,l=Array.from(new Set(r));S(l)},[t,e]);const G=(r,l)=>{const{checked:d}=l;if(d){const n=e.flatMap(i=>{var u;const p=i.isDisabled&&!m.includes(i.id)?[]:[i.id],h=((u=i.children)==null?void 0:u.filter(g=>!g.isDisabled||m.includes(g.id)).map(g=>g.id))||[];return[...p,...h]});S(n)}else{const n=e.flatMap(p=>{var h;return((h=p.children)==null?void 0:h.filter(u=>u.isDisabled).map(u=>u.id))||[]}),i=m.filter(p=>n.includes(p));S(i)}};x.useEffect(()=>{const r=$e.filter(e,l=>{var d;return l.label.toLowerCase().includes(O.toLowerCase())||((d=l.children)==null?void 0:d.some(n=>n.label.toLowerCase().includes(O.toLowerCase())))});W(r)},[O]),x.useEffect(()=>{const r=()=>{if(v.current){const l=v.current.getBoundingClientRect(),n=window.innerHeight-l.bottom,i=l.top;n<250&&i>n?z(!0):z(!1)}};return $&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[$]);const J=r=>()=>{N(!!r)},ge=r=>()=>{M.includes(r)?H(M.filter(l=>l!==r)):H(l=>[...l,r])},K=()=>{if(le){const r=m.length;return I&&I.trim()?r>0?`${r} ${I}${r>1?"s":""} Selected`:"":r>0?`${r} Selected`:""}else{const r=[];return e.forEach(l=>{var n;const d=(n=l.children)==null?void 0:n.filter(i=>m.includes(i.id));if(m.includes(l.id)||d!=null&&d.length)if(ne){const i=d==null?void 0:d.filter(p=>!p.isDisabled);if(i&&i.length>0){const p=i.map(h=>h.label).join(", ");(m.includes(l.id)||i.some(h=>m.includes(h.id)))&&r.push(`${l.label}${p?": "+p:""}`)}}else{const i=d==null?void 0:d.map(p=>p.label).join(", ");r.push(`${l.label}${i?": "+i:""}`)}}),r.join(" ; ")}};return o.jsx(be,{theme:b,children:o.jsxs(je,{ref:v,darkMode:c,darkTextColor:a,children:[o.jsxs(Se,{onClick:he,darkMode:c,darkBgColor:L,darkTextColor:a,children:[o.jsx(k,{text:K()?K():C||j.SELECT,type:"body",id:"dropdown-value",style:c?{color:a||b.colors.darkModeText}:{}}),o.jsx(q,{icon:`chevron ${$?"up":"down"}`,size:"small",color:c?a||b.colors.darkModeText:"#0000008A"})]}),$&&o.jsxs(ve,{openUp:me,darkMode:c,darkBgColor:L,darkTextColor:a,children:[w&&o.jsx(Me,{children:o.jsx(we,{placeholder:te||j.SEARCH,onChange:r=>ue(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),s&&oe&&_&&o.jsxs(Y,{children:[o.jsx(B,{style:c?{color:a||b.colors.darkModeText}:{},label:j.SELECT_ALL,checked:m.length===e.length+e.reduce((r,l)=>{var d;return r+(((d=l.children)==null?void 0:d.length)||0)},0),onChange:G}),o.jsxs(Te,{children:[o.jsx(ee,{isSelected:A,darkMode:c,onClick:J(!0),darkTextColor:a,children:o.jsx(k,{text:j.ALL,type:"body",id:"dropdown-value",style:c?{color:a||b.colors.darkModeText}:{}})})," ","|"," ",o.jsx(ee,{isSelected:!A,darkMode:c,onClick:J(!1),darkTextColor:a,children:o.jsx(k,{text:j.SELECTED,type:"body",id:"dropdown-value",style:c?{color:a||b.colors.darkModeText}:{}})})]})]}),!_&&o.jsx(Y,{children:o.jsx(B,{label:j.SELECT_ALL,checked:m.length===e.length+e.reduce((r,l)=>{var d;return r+(((d=l.children)==null?void 0:d.length)||0)},0),onChange:G,style:c?{color:a||b.colors.darkModeText}:{}})}),o.jsx(Le,{isMultiSelect:s,children:pe.map(r=>{var d;if(!A&&!m.includes(r.id))return null;const l=fe(r);return o.jsxs(xe.Fragment,{children:[o.jsxs(Z,{isCollapsed:M.includes(r.id),isCollapsible:D,darkMode:c,darkBgColor:L,darkTextColor:a,isSelected:m.includes(r.id),children:[s?o.jsxs(re,{darkMode:c,darkTextColor:a,children:[o.jsx(B,{style:c?{color:a||b.colors.darkModeText}:{},checked:l,onChange:P(r.id,!1,l),disabled:r.isDisabled,name:r.id}),r==null?void 0:r.icon,o.jsx(R,{onClick:F(r.id,!1,l),darkMode:c,darkTextColor:a,children:o.jsx(k,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:a||b.colors.darkModeText}:{}})})]}):o.jsxs(R,{onClick:U(r.id),darkMode:c,darkTextColor:a,children:[!s&&V&&o.jsx(X,{children:o.jsx(q,{icon:"checkmark",size:"small",style:{opacity:m.includes(r.id)?1:0}})}),o.jsxs(Q,{darkMode:c,darkTextColor:a,children:[r==null?void 0:r.icon,o.jsx(k,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:a||b.colors.darkModeText}:{}})]})]}),D&&o.jsx(q,{icon:`chevron ${M.includes(r.id)?"down":"up"}`,size:"small",onClick:ge(r.id),style:c?{color:a||b.colors.darkModeText}:{}})]},r.id),!M.includes(r.id)&&((d=r.children)==null?void 0:d.map(n=>!A&&!m.includes(n.id)?null:o.jsx(Z,{ischild:!0,isCollapsible:D,darkMode:c,darkBgColor:L,darkTextColor:a,isSelected:m.includes(n.id),children:s?o.jsxs(re,{ischild:!0,darkMode:c,darkTextColor:a,children:[o.jsx(B,{style:c?{color:a||b.colors.darkModeText}:{},label:n.label,checked:m.includes(n.id),onChange:P(n.id,!0),disabled:n.isDisabled}),n==null?void 0:n.icon]}):o.jsxs(R,{onClick:U(n.id),darkMode:c,darkTextColor:a,children:[!s&&V&&o.jsx(X,{children:o.jsx(q,{icon:"checkmark",size:"small",style:{opacity:m.includes(n.id)?1:0}})}),o.jsxs(Q,{darkMode:c,darkTextColor:a,children:[n==null?void 0:n.icon,o.jsx(k,{text:n.label,type:"body",id:"dropdown-value",style:c?{color:a||b.colors.darkModeText}:{}})]})]})},n.id)))]},r.id)})}),de&&o.jsx(Ee,{children:o.jsx(Ae,{darkMode:c,darkTextColor:a,children:o.jsx(ye,{label:ae,leftElement:ce,onClick:ie,border:!1,transparent:!0})})})]})]})})},He=se;se.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""},showBottomButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bottomButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Apply'",computed:!1}},bottomButtonIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onBottomButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckedIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{He as A};
