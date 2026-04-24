import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as x,R as ke}from"./index-ad58220e.js";import{d as h,o as ve}from"./styled-components.browser.esm-675ea4f2.js";import{t as y}from"./config-43c6afbd.js";import{L as A}from"./index-033d1919.js";import{L as Se}from"./ltButton-c4dfcfea.js";import{S as je}from"./searchComponent-7f5157bb.js";import{L as I}from"./ltCheckBox-17ae09b3.js";import{T as v}from"./index-5dcf1d10.js";import{S}from"./stringConstants-7a556fc0.js";import{_ as Me}from"./lodash-9978a6f3.js";import{u as Te}from"./ThemeContext-71b3bf8d.js";const qe=h.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`
      color: ${t||s.colors.darkModeText};
    `}
`,Ee=h.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e,borderRadius:t})=>t||e.borderRadius.xxlarge};
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
`,Le=h.div`
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
`,O=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  width: 100%;
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.text};
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,ne=h.div`
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
`,Ce=h.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,le=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,de=h.div`
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

    ${({hoverTextColor:e})=>e&&`
        color: ${e};
        * {
          color: ${e} !important;
        }
      `}
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
`,Ae=h.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,ae=h.span`
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:"inherit"};
`,Ie=h.div`
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
`,ie=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,De=h.div`
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
`,ce=({options:e,defaultSelectedItems:t,isMultiSelect:s,isSearchable:f,isCollapsible:D,onSelect:q,searchPlaceholder:ue,placeholder:_,showCustomLabel:R="",showOnlyEnabledInInput:me=!1,showSelectAll:pe=!0,showCount:fe=!1,showSelected:V=!0,darkBgColor:E,darkTextColor:i,showCheckedIcon:z=!0,borderRadius:he,hoverBgColor:W,hoverTextColor:B,selectedBgColor:H,checkmarkColor:P,itemBorderRadius:F,removeBorderBetweenItems:U=!1,itemsFullWidth:G=!0,bottomButton:$})=>{const c=Te().theme==="dark",[p,j]=x.useState([]),[k,L]=x.useState(!1),[N,ge]=x.useState(""),[be,J]=x.useState(!1),M=x.useRef(null),[C,K]=x.useState(!0),[xe,Q]=x.useState(e),[T,X]=x.useState([]),ye=r=>{var d;return p.includes(r.id)||((d=r.children)==null?void 0:d.some(l=>p.includes(l.id)))||!1},Y=(r,d,l)=>(u,a)=>{Z(r,d,l)()},Z=(r,d,l)=>()=>{var g;const u=e.find(m=>{var b;return d?(b=m.children)==null?void 0:b.some(w=>w.id===r):m.id===r}),a=u==null?void 0:u.id,n=((g=u==null?void 0:u.children)==null?void 0:g.filter(m=>!m.isDisabled).map(m=>m.id))||[];j(m=>m.includes(r)||l?d?n.filter(w=>w!==r&&m.includes(w)).length?m.filter(w=>w!==r):m.filter(w=>w!==a&&w!==r):m.filter(b=>b!==r&&!n.includes(b)):d?[...m,r]:[...m,r,...n])},ee=r=>()=>{j([r]),L(!1),q([r])},$e=()=>{k?(L(!1),q(p)):L(!0)};x.useEffect(()=>{const r=d=>{M.current&&!M.current.contains(d.target)&&k&&(L(!1),q(p))};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[k,p,q]),x.useEffect(()=>{Q(e)},[e]),x.useEffect(()=>{const r=s?t.reduce((l,u)=>{const a=e.find(n=>n.id===u);return a?(l.push(u),a.children&&l.push(...a.children.map(n=>n.id))):e.find(g=>{var m;return(m=g.children)==null?void 0:m.some(b=>b.id===u)})&&l.push(u),l},[]):t,d=Array.from(new Set(r));j(d)},[t,e]);const re=(r,d)=>{const{checked:l}=d;if(l){const u=e.flatMap(a=>{var m;const n=a.isDisabled&&!p.includes(a.id)?[]:[a.id],g=((m=a.children)==null?void 0:m.filter(b=>!b.isDisabled||p.includes(b.id)).map(b=>b.id))||[];return[...n,...g]});j(u)}else{const u=e.flatMap(n=>{var g;return((g=n.children)==null?void 0:g.filter(m=>m.isDisabled).map(m=>m.id))||[]}),a=p.filter(n=>u.includes(n));j(a)}};x.useEffect(()=>{const r=Me.filter(e,d=>{var l;return d.label.toLowerCase().includes(N.toLowerCase())||((l=d.children)==null?void 0:l.some(u=>u.label.toLowerCase().includes(N.toLowerCase())))});Q(r)},[N]),x.useEffect(()=>{const r=()=>{if(M.current){const d=M.current.getBoundingClientRect(),u=window.innerHeight-d.bottom,a=d.top;u<250&&a>u?J(!0):J(!1)}};return k&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[k]);const se=r=>()=>{K(!!r)},we=r=>()=>{T.includes(r)?X(T.filter(d=>d!==r)):X(d=>[...d,r])},te=()=>{if(fe){const r=p.length;return R&&R.trim()?r>0?`${r} ${R}${r>1?"s":""} Selected`:"":r>0?`${r} Selected`:""}else{const r=[];return e.forEach(d=>{var u;const l=(u=d.children)==null?void 0:u.filter(a=>p.includes(a.id));if(p.includes(d.id)||l!=null&&l.length)if(me){const a=l==null?void 0:l.filter(n=>!n.isDisabled);if(a&&a.length>0){const n=a.map(g=>g.label).join(", ");(p.includes(d.id)||a.some(g=>p.includes(g.id)))&&r.push(`${d.label}${n?": "+n:""}`)}}else{const a=l==null?void 0:l.map(n=>n.label).join(", ");r.push(`${d.label}${a?": "+a:""}`)}}),r.join(" ; ")}};return o.jsx(ve,{theme:y,children:o.jsxs(qe,{ref:M,darkMode:c,darkTextColor:i,children:[o.jsxs(Ee,{onClick:$e,darkMode:c,darkBgColor:E,darkTextColor:i,borderRadius:he,children:[o.jsx(v,{text:te()?te():_||S.SELECT,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}}),o.jsx(A,{useReactIcon:!0,reactIconName:k?"MdExpandLess":"MdExpandMore",reactIconSet:"md",size:"small",color:c?i||y.colors.darkModeText:"#0000008A"})]}),k&&o.jsxs(Le,{openUp:be,darkMode:c,darkBgColor:E,darkTextColor:i,children:[f&&o.jsx(Ce,{children:o.jsx(je,{placeholder:ue||S.SEARCH,onChange:r=>ge(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),s&&pe&&V&&o.jsxs(le,{children:[o.jsx(I,{style:c?{color:i||y.colors.darkModeText}:{},label:S.SELECT_ALL,checked:p.length===e.length+e.reduce((r,d)=>{var l;return r+(((l=d.children)==null?void 0:l.length)||0)},0),onChange:re}),o.jsxs(Ae,{children:[o.jsx(ae,{isSelected:C,darkMode:c,onClick:se(!0),darkTextColor:i,children:o.jsx(v,{text:S.ALL,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})})," ","|"," ",o.jsx(ae,{isSelected:!C,darkMode:c,onClick:se(!1),darkTextColor:i,children:o.jsx(v,{text:S.SELECTED,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})})]})]}),!V&&o.jsx(le,{children:o.jsx(I,{label:S.SELECT_ALL,checked:p.length===e.length+e.reduce((r,d)=>{var l;return r+(((l=d.children)==null?void 0:l.length)||0)},0),onChange:re,style:c?{color:i||y.colors.darkModeText}:{}})}),o.jsx(Ie,{isMultiSelect:s,children:xe.map(r=>{var u,a;const d=(u=r.children)==null?void 0:u.some(n=>p.includes(n.id));if(!C&&!p.includes(r.id)&&!d)return null;const l=ye(r);return o.jsxs(ke.Fragment,{children:[o.jsxs(de,{isCollapsed:T.includes(r.id),isCollapsible:D,darkMode:c,darkBgColor:E,darkTextColor:i,isSelected:s?l:p.includes(r.id),hoverBgColor:W,hoverTextColor:B,selectedBgColor:H,itemBorderRadius:F,removeBorderBetweenItems:U,itemsFullWidth:G,children:[s?o.jsxs(ie,{darkMode:c,darkTextColor:i,children:[o.jsx(I,{style:c?{color:i||y.colors.darkModeText}:{},checked:l,onChange:Y(r.id,!1,l),disabled:r.isDisabled,name:r.id}),r==null?void 0:r.icon,o.jsx(O,{onClick:Z(r.id,!1,l),darkMode:c,darkTextColor:i,children:o.jsx(v,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})})]}):o.jsxs(O,{onClick:ee(r.id),darkMode:c,darkTextColor:i,children:[!s&&z&&o.jsx(oe,{checkmarkColor:P,children:o.jsx(A,{icon:"checkmark",size:"small",style:{opacity:p.includes(r.id)?1:0}})}),o.jsxs(ne,{darkMode:c,darkTextColor:i,children:[r==null?void 0:r.icon,o.jsx(v,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})]})]}),D&&o.jsx(A,{icon:`chevron ${T.includes(r.id)?"down":"up"}`,size:"small",onClick:we(r.id),style:c?{color:i||y.colors.darkModeText}:{}})]},r.id),!T.includes(r.id)&&((a=r.children)==null?void 0:a.map(n=>!C&&!p.includes(n.id)?null:o.jsx(de,{ischild:!0,isCollapsible:D,darkMode:c,darkBgColor:E,darkTextColor:i,isSelected:p.includes(n.id),hoverBgColor:W,hoverTextColor:B,selectedBgColor:H,itemBorderRadius:F,removeBorderBetweenItems:U,itemsFullWidth:G,children:s?o.jsxs(ie,{ischild:!0,darkMode:c,darkTextColor:i,children:[o.jsx(I,{style:c?{color:i||y.colors.darkModeText}:{},label:n.label,checked:p.includes(n.id),onChange:Y(n.id,!0),disabled:n.isDisabled}),n==null?void 0:n.icon]}):o.jsxs(O,{onClick:ee(n.id),darkMode:c,darkTextColor:i,children:[!s&&z&&o.jsx(oe,{checkmarkColor:P,children:o.jsx(A,{icon:"checkmark",size:"small",style:{opacity:p.includes(n.id)?1:0}})}),o.jsxs(ne,{darkMode:c,darkTextColor:i,children:[n==null?void 0:n.icon,o.jsx(v,{text:n.label,type:"body",id:"dropdown-value",style:c?{color:i||y.colors.darkModeText}:{}})]})]})},n.id)))]},r.id)})}),($==null?void 0:$.show)&&o.jsx(De,{$darkMode:c,$darkTextColor:i,$buttonColor:$.color,$buttonHoverBg:$.hoverBgColor,$buttonHoverColor:$.hoverColor,children:o.jsx(Se,{label:$.text||"Apply",leftElement:$.icon,onClick:$.onClick,border:!1,transparent:!0,className:`bottom-button-custom ${$.className||""}`})})]})]})})},Ge=ce;ce.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""},showCheckedIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:""},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},checkmarkColor:{required:!1,tsType:{name:"string"},description:""},itemBorderRadius:{required:!1,tsType:{name:"string"},description:""},removeBorderBetweenItems:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},itemsFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bottomButton:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  show?: boolean; // show bottom button
  text?: string; // button text
  icon?: React.ReactNode; // button icon
  onClick?: () => void; // click handler
  color?: string; // button text/icon color
  hoverBgColor?: string; // hover background color
  hoverColor?: string; // hover text/icon color
  className?: string; // custom className for additional styling
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"text",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"hoverBgColor",value:{name:"string",required:!1}},{key:"hoverColor",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},description:""}}};export{Ge as A};
