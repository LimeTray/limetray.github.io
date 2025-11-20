import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as x,R as $e}from"./index-ad58220e.js";import{d as h,o as we}from"./styled-components.browser.esm-675ea4f2.js";import{t as y}from"./config-43c6afbd.js";import{L as A}from"./index-6dcb29cb.js";import{L as ke}from"./ltButton-5601b3c5.js";import{S as ve}from"./searchComponent-bcb17182.js";import{L as I}from"./ltCheckBox-fb658f45.js";import{T as v}from"./index-0c2df6d5.js";import{S as j}from"./stringConstants-f1def6f8.js";import{_ as je}from"./lodash-9978a6f3.js";import{u as Se}from"./ThemeContext-71b3bf8d.js";const Me=h.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`
      color: ${t||s.colors.darkModeText};
    `}
`,Te=h.div`
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
`,qe=h.div`
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
`,N=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  width: 100%;
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.text};
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,te=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex: 1;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,oe=h.div`
  display: flex;
  align-items: center;
  width: 20px;
  justify-content: center;
  flex-shrink: 0;
  color: ${({checkmarkColor:e})=>e||"inherit"};
  
  &&& i.icon,
  &&& i.icon.green,
  &&& .icon,
  &&& .icon.green {
    color: ${({checkmarkColor:e})=>e||"inherit"} !important;
  }
`,Ee=h.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,ne=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,le=h.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  cursor: pointer;
  
  /* Conditional border-radius for rounded items */
  ${({itemBorderRadius:e})=>e&&`border-radius: ${e};`}
  
  /* Conditional margin for non-full-width items */
  ${({itemsFullWidth:e,theme:t})=>!e&&`margin: ${t.spacing.xxs} ${t.spacing.xs};`}
  
  &:hover {
    background-color: ${({theme:e,darkMode:t,hoverBgColor:s})=>s||(t?e.colors.darkModeBgSecondary:e.colors.backgroundSecondary)};
  }
  
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  
  /* Conditional border between items */
  ${({isCollapsible:e,theme:t,removeBorderBetweenItems:s})=>!e&&!s&&`border-bottom: 1px solid ${t.colors.border}3f;`}
  
  ${({isCollapsible:e,ischild:t,theme:s})=>e&&!t&&`background-color: ${s.colors.backgroundSecondary};`}
  
  /* Custom selected background color */
  ${({isSelected:e,theme:t,darkMode:s,selectedBgColor:f})=>e&&`background-color: ${f||(s?t.colors.darkModeBgSecondary:t.colors.backgroundSecondary)};`}
  
  ${({darkMode:e,darkBgColor:t,darkTextColor:s,theme:f})=>e&&`
      background: ${t||f.colors.darkModeBgSecondary} !important;
      color: ${s||f.colors.darkModeText} !important;
      border-bottom: 1px solid ${f.colors.darkModeBorder} !important;
      * {
        color: ${s||f.colors.darkModeText} !important;
      }
      label, span, div {
        color: ${s||f.colors.darkModeText} !important;
      }
    `}
`,Ce=h.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,de=h.span`
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:"inherit"};
`,Le=h.div`
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
`,ae=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,Ae=h.div`
  padding: ${({theme:e})=>e.spacing.xs};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  
  &&& .bottom-button-custom.ltButton {
    width: 100%;
    color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:f})=>s||(e?t||f.colors.darkModeText:f.colors.primary)};
    background: transparent;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${({$darkMode:e,$darkTextColor:t,$buttonHoverBg:s,theme:f})=>s||(e?t||f.colors.darkModeText:f.colors.primary)};
      color: ${({$darkMode:e,$buttonHoverColor:t,theme:s})=>t||(e?s.colors.darkModeBgSecondary:"white")};
      
      .leftElement, .label {
        color: ${({$darkMode:e,$buttonHoverColor:t,theme:s})=>t||(e?s.colors.darkModeBgSecondary:"white")};
      }
      
      /* Icon color on hover */
      .leftElement i.icon,
      .leftElement .icon {
        color: ${({$darkMode:e,$buttonHoverColor:t,theme:s})=>t||(e?s.colors.darkModeBgSecondary:"white")} !important;
      }
    }
    
    .leftElement, .label {
      color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:f})=>s||(e?t||f.colors.darkModeText:f.colors.primary)};
    }
    
    /* Icon color */
    .leftElement i.icon,
    .leftElement .icon {
      color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:f})=>s||(e?t||f.colors.darkModeText:f.colors.primary)} !important;
    }
  }
`,ie=({options:e,defaultSelectedItems:t,isMultiSelect:s,isSearchable:f,isCollapsible:D,onSelect:q,searchPlaceholder:ce,placeholder:_,showCustomLabel:R="",showOnlyEnabledInInput:ue=!1,showSelectAll:me=!0,showCount:pe=!1,showSelected:V=!0,darkBgColor:E,darkTextColor:i,showCheckedIcon:z=!0,hoverBgColor:W,selectedBgColor:B,checkmarkColor:H,itemBorderRadius:P,removeBorderBetweenItems:F=!1,itemsFullWidth:U=!0,bottomButton:$})=>{const c=Se().theme==="dark",[p,S]=x.useState([]),[k,C]=x.useState(!1),[O,fe]=x.useState(""),[he,G]=x.useState(!1),M=x.useRef(null),[L,J]=x.useState(!0),[ge,K]=x.useState(e),[T,Q]=x.useState([]),be=r=>{var d;return p.includes(r.id)||((d=r.children)==null?void 0:d.some(l=>p.includes(l.id)))||!1},X=(r,d,l)=>(u,a)=>{Y(r,d,l)()},Y=(r,d,l)=>()=>{var g;const u=e.find(m=>{var b;return d?(b=m.children)==null?void 0:b.some(w=>w.id===r):m.id===r}),a=u==null?void 0:u.id,o=((g=u==null?void 0:u.children)==null?void 0:g.filter(m=>!m.isDisabled).map(m=>m.id))||[];S(m=>m.includes(r)||l?d?o.filter(w=>w!==r&&m.includes(w)).length?m.filter(w=>w!==r):m.filter(w=>w!==a&&w!==r):m.filter(b=>b!==r&&!o.includes(b)):d?[...m,r]:[...m,r,...o])},Z=r=>()=>{S([r]),C(!1),q([r])},xe=()=>{k?(C(!1),q(p)):C(!0)};x.useEffect(()=>{const r=d=>{M.current&&!M.current.contains(d.target)&&k&&(C(!1),q(p))};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[k,p,q]),x.useEffect(()=>{K(e)},[e]),x.useEffect(()=>{const r=s?t.reduce((l,u)=>{const a=e.find(o=>o.id===u);return a?(l.push(u),a.children&&l.push(...a.children.map(o=>o.id))):e.find(g=>{var m;return(m=g.children)==null?void 0:m.some(b=>b.id===u)})&&l.push(u),l},[]):t,d=Array.from(new Set(r));S(d)},[t,e]);const ee=(r,d)=>{const{checked:l}=d;if(l){const u=e.flatMap(a=>{var m;const o=a.isDisabled&&!p.includes(a.id)?[]:[a.id],g=((m=a.children)==null?void 0:m.filter(b=>!b.isDisabled||p.includes(b.id)).map(b=>b.id))||[];return[...o,...g]});S(u)}else{const u=e.flatMap(o=>{var g;return((g=o.children)==null?void 0:g.filter(m=>m.isDisabled).map(m=>m.id))||[]}),a=p.filter(o=>u.includes(o));S(a)}};x.useEffect(()=>{const r=je.filter(e,d=>{var l;return d.label.toLowerCase().includes(O.toLowerCase())||((l=d.children)==null?void 0:l.some(u=>u.label.toLowerCase().includes(O.toLowerCase())))});K(r)},[O]),x.useEffect(()=>{const r=()=>{if(M.current){const d=M.current.getBoundingClientRect(),u=window.innerHeight-d.bottom,a=d.top;u<250&&a>u?G(!0):G(!1)}};return k&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[k]);const re=r=>()=>{J(!!r)},ye=r=>()=>{T.includes(r)?Q(T.filter(d=>d!==r)):Q(d=>[...d,r])},se=()=>{if(pe){const r=p.length;return R&&R.trim()?r>0?`${r} ${R}${r>1?"s":""} Selected`:"":r>0?`${r} Selected`:""}else{const r=[];return e.forEach(d=>{var u;const l=(u=d.children)==null?void 0:u.filter(a=>p.includes(a.id));if(p.includes(d.id)||l!=null&&l.length)if(ue){const a=l==null?void 0:l.filter(o=>!o.isDisabled);if(a&&a.length>0){const o=a.map(g=>g.label).join(", ");(p.includes(d.id)||a.some(g=>p.includes(g.id)))&&r.push(`${d.label}${o?": "+o:""}`)}}else{const a=l==null?void 0:l.map(o=>o.label).join(", ");r.push(`${d.label}${a?": "+a:""}`)}}),r.join(" ; ")}};return n.jsx(we,{theme:y,children:n.jsxs(Me,{ref:M,darkMode:c,darkTextColor:i,children:[n.jsxs(Te,{onClick:xe,darkMode:c,darkBgColor:E,darkTextColor:i,children:[n.jsx(v,{text:se()?se():_||j.SELECT,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}}),n.jsx(A,{icon:`chevron ${k?"up":"down"}`,size:"small",color:c?i||y.colors.darkModeText:"#0000008A"})]}),k&&n.jsxs(qe,{openUp:he,darkMode:c,darkBgColor:E,darkTextColor:i,children:[f&&n.jsx(Ee,{children:n.jsx(ve,{placeholder:ce||j.SEARCH,onChange:r=>fe(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),s&&me&&V&&n.jsxs(ne,{children:[n.jsx(I,{style:c?{color:i||y.colors.darkModeText}:{},label:j.SELECT_ALL,checked:p.length===e.length+e.reduce((r,d)=>{var l;return r+(((l=d.children)==null?void 0:l.length)||0)},0),onChange:ee}),n.jsxs(Ce,{children:[n.jsx(de,{isSelected:L,darkMode:c,onClick:re(!0),darkTextColor:i,children:n.jsx(v,{text:j.ALL,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})})," ","|"," ",n.jsx(de,{isSelected:!L,darkMode:c,onClick:re(!1),darkTextColor:i,children:n.jsx(v,{text:j.SELECTED,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})})]})]}),!V&&n.jsx(ne,{children:n.jsx(I,{label:j.SELECT_ALL,checked:p.length===e.length+e.reduce((r,d)=>{var l;return r+(((l=d.children)==null?void 0:l.length)||0)},0),onChange:ee,style:c?{color:i||y.colors.darkModeText}:{}})}),n.jsx(Le,{isMultiSelect:s,children:ge.map(r=>{var u,a;const d=(u=r.children)==null?void 0:u.some(o=>p.includes(o.id));if(!L&&!p.includes(r.id)&&!d)return null;const l=be(r);return n.jsxs($e.Fragment,{children:[n.jsxs(le,{isCollapsed:T.includes(r.id),isCollapsible:D,darkMode:c,darkBgColor:E,darkTextColor:i,isSelected:s?l:p.includes(r.id),hoverBgColor:W,selectedBgColor:B,itemBorderRadius:P,removeBorderBetweenItems:F,itemsFullWidth:U,children:[s?n.jsxs(ae,{darkMode:c,darkTextColor:i,children:[n.jsx(I,{style:c?{color:i||y.colors.darkModeText}:{},checked:l,onChange:X(r.id,!1,l),disabled:r.isDisabled,name:r.id}),r==null?void 0:r.icon,n.jsx(N,{onClick:Y(r.id,!1,l),darkMode:c,darkTextColor:i,children:n.jsx(v,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})})]}):n.jsxs(N,{onClick:Z(r.id),darkMode:c,darkTextColor:i,children:[!s&&z&&n.jsx(oe,{checkmarkColor:H,children:n.jsx(A,{icon:"checkmark",size:"small",style:{opacity:p.includes(r.id)?1:0}})}),n.jsxs(te,{darkMode:c,darkTextColor:i,children:[r==null?void 0:r.icon,n.jsx(v,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})]})]}),D&&n.jsx(A,{icon:`chevron ${T.includes(r.id)?"down":"up"}`,size:"small",onClick:ye(r.id),style:c?{color:i||y.colors.darkModeText}:{}})]},r.id),!T.includes(r.id)&&((a=r.children)==null?void 0:a.map(o=>!L&&!p.includes(o.id)?null:n.jsx(le,{ischild:!0,isCollapsible:D,darkMode:c,darkBgColor:E,darkTextColor:i,isSelected:p.includes(o.id),hoverBgColor:W,selectedBgColor:B,itemBorderRadius:P,removeBorderBetweenItems:F,itemsFullWidth:U,children:s?n.jsxs(ae,{ischild:!0,darkMode:c,darkTextColor:i,children:[n.jsx(I,{style:c?{color:i||y.colors.darkModeText}:{},label:o.label,checked:p.includes(o.id),onChange:X(o.id,!0),disabled:o.isDisabled}),o==null?void 0:o.icon]}):n.jsxs(N,{onClick:Z(o.id),darkMode:c,darkTextColor:i,children:[!s&&z&&n.jsx(oe,{checkmarkColor:H,children:n.jsx(A,{icon:"checkmark",size:"small",style:{opacity:p.includes(o.id)?1:0}})}),n.jsxs(te,{darkMode:c,darkTextColor:i,children:[o==null?void 0:o.icon,n.jsx(v,{text:o.label,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})]})]})},o.id)))]},r.id)})}),($==null?void 0:$.show)&&n.jsx(Ae,{$darkMode:c,$darkTextColor:i,$buttonColor:$.color,$buttonHoverBg:$.hoverBgColor,$buttonHoverColor:$.hoverColor,children:n.jsx(ke,{label:$.text||"Apply",leftElement:$.icon,onClick:$.onClick,border:!1,transparent:!0,className:`bottom-button-custom ${$.className||""}`})})]})]})})},Fe=ie;ie.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""},showCheckedIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},checkmarkColor:{required:!1,tsType:{name:"string"},description:""},itemBorderRadius:{required:!1,tsType:{name:"string"},description:""},removeBorderBetweenItems:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},itemsFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bottomButton:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  show?: boolean; // show bottom button
  text?: string; // button text
  icon?: React.ReactNode; // button icon
  onClick?: () => void; // click handler
  color?: string; // button text/icon color
  hoverBgColor?: string; // hover background color
  hoverColor?: string; // hover text/icon color
  className?: string; // custom className for additional styling
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"text",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"hoverBgColor",value:{name:"string",required:!1}},{key:"hoverColor",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},description:""}}};export{Fe as A};
