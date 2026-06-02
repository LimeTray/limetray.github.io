import{j as o}from"./jsx-runtime-8ae9c9ad.js";import{r as x,R as ve}from"./index-04c7fd94.js";import{g as h,r as Se}from"./styled-components.browser.esm-f4af7a4c.js";import{t as y}from"./config-d270d9b6.js";import{L as I}from"./index-c3b335ed.js";import{L as je}from"./ltButton-f3395831.js";import{S as Me}from"./searchComponent-7a2ff757.js";import{L as A}from"./ltCheckBox-29163e21.js";import{T as v}from"./index-995f6cf8.js";import{S}from"./stringConstants-3a2e7b32.js";import{_ as Te}from"./lodash-15082d9a.js";import{u as qe}from"./ThemeContext-ab9e94eb.js";const Ee=h.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`
      color: ${t||s.colors.darkModeText};
    `}
`,Le=h.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e,borderRadius:t})=>t||e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: ${({darkMode:e,darkBgColor:t,theme:s,$disabled:i})=>i?e?s.colors.darkModeBgSecondary:"#f3f4f6":e?t||s.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:t,theme:s,$disabled:i})=>i?"#9ca3af":e?t||s.colors.darkModeText:"inherit"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${({darkMode:e,darkTextColor:t,theme:s,$disabled:i})=>i?"color: #9ca3af !important;":e?`color: ${t||s.colors.darkModeText};`:""}
  }
`,Ce=h.div`
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
`,V=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  width: 100%;
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.text};
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,oe=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex: 1;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,le=h.div`
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
`,Ie=h.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,ae=h.div`
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
  ${({isSelected:e,theme:t,darkMode:s,selectedBgColor:i})=>e&&`background-color: ${i||(s?t.colors.darkModeBgSecondary:t.colors.backgroundSecondary)};`}
  
  ${({darkMode:e,darkBgColor:t,darkTextColor:s,theme:i})=>e&&`
      background: ${t||i.colors.darkModeBgSecondary} !important;
      color: ${s||i.colors.darkModeText} !important;
      border-bottom: 1px solid ${i.colors.darkModeBorder} !important;
      * {
        color: ${s||i.colors.darkModeText} !important;
      }
      label, span, div {
        color: ${s||i.colors.darkModeText} !important;
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
`,ie=h.span`
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:"inherit"};
`,Re=h.div`
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
`,ce=h.div`
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
    color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:i})=>s||(e?t||i.colors.darkModeText:i.colors.primary)};
    background: transparent;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${({$darkMode:e,$darkTextColor:t,$buttonHoverBg:s,theme:i})=>s||(e?t||i.colors.darkModeText:i.colors.primary)};
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
      color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:i})=>s||(e?t||i.colors.darkModeText:i.colors.primary)};
    }
    
    /* Icon color */
    .leftElement i.icon,
    .leftElement .icon {
      color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:i})=>s||(e?t||i.colors.darkModeText:i.colors.primary)} !important;
    }
  }
`,ue=({options:e,defaultSelectedItems:t,isMultiSelect:s,isSearchable:i,isCollapsible:R,onSelect:q,searchPlaceholder:me,placeholder:_,showCustomLabel:D="",showOnlyEnabledInInput:pe=!1,showSelectAll:fe=!0,showCount:he=!1,showSelected:z=!0,darkBgColor:E,darkTextColor:c,showCheckedIcon:B=!0,borderRadius:ge,hoverBgColor:W,hoverTextColor:H,selectedBgColor:P,checkmarkColor:F,itemBorderRadius:U,removeBorderBetweenItems:G=!1,itemsFullWidth:J=!0,bottomButton:$,disabled:N=!1})=>{const u=qe().theme==="dark",[f,j]=x.useState([]),[k,L]=x.useState(!1),[O,be]=x.useState(""),[xe,K]=x.useState(!1),M=x.useRef(null),[C,Q]=x.useState(!0),[ye,X]=x.useState(e),[T,Y]=x.useState([]),$e=r=>{var a;return f.includes(r.id)||((a=r.children)==null?void 0:a.some(l=>f.includes(l.id)))||!1},Z=(r,a,l)=>(m,d)=>{ee(r,a,l)()},ee=(r,a,l)=>()=>{var g;const m=e.find(p=>{var b;return a?(b=p.children)==null?void 0:b.some(w=>w.id===r):p.id===r}),d=m==null?void 0:m.id,n=((g=m==null?void 0:m.children)==null?void 0:g.filter(p=>!p.isDisabled).map(p=>p.id))||[];j(p=>p.includes(r)||l?a?n.filter(w=>w!==r&&p.includes(w)).length?p.filter(w=>w!==r):p.filter(w=>w!==d&&w!==r):p.filter(b=>b!==r&&!n.includes(b)):a?[...p,r]:[...p,r,...n])},re=r=>()=>{j([r]),L(!1),q([r])},we=()=>{N||(k?(L(!1),q(f)):L(!0))};x.useEffect(()=>{const r=a=>{M.current&&!M.current.contains(a.target)&&k&&(L(!1),q(f))};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[k,f,q]),x.useEffect(()=>{X(e)},[e]),x.useEffect(()=>{const r=s?t.reduce((l,m)=>{const d=e.find(n=>n.id===m);return d?(l.push(m),d.children&&l.push(...d.children.map(n=>n.id))):e.find(g=>{var p;return(p=g.children)==null?void 0:p.some(b=>b.id===m)})&&l.push(m),l},[]):t,a=Array.from(new Set(r));j(a)},[t,e]);const se=(r,a)=>{const{checked:l}=a;if(l){const m=e.flatMap(d=>{var p;const n=d.isDisabled&&!f.includes(d.id)?[]:[d.id],g=((p=d.children)==null?void 0:p.filter(b=>!b.isDisabled||f.includes(b.id)).map(b=>b.id))||[];return[...n,...g]});j(m)}else{const m=e.flatMap(n=>{var g;return((g=n.children)==null?void 0:g.filter(p=>p.isDisabled).map(p=>p.id))||[]}),d=f.filter(n=>m.includes(n));j(d)}};x.useEffect(()=>{const r=Te.filter(e,a=>{var l;return a.label.toLowerCase().includes(O.toLowerCase())||((l=a.children)==null?void 0:l.some(m=>m.label.toLowerCase().includes(O.toLowerCase())))});X(r)},[O]),x.useEffect(()=>{const r=()=>{if(M.current){const a=M.current.getBoundingClientRect(),m=window.innerHeight-a.bottom,d=a.top;m<250&&d>m?K(!0):K(!1)}};return k&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[k]);const te=r=>()=>{Q(!!r)},ke=r=>()=>{T.includes(r)?Y(T.filter(a=>a!==r)):Y(a=>[...a,r])},ne=()=>{if(he){const r=f.length;return D&&D.trim()?r>0?`${r} ${D}${r>1?"s":""} Selected`:"":r>0?`${r} Selected`:""}else{const r=[];return e.forEach(a=>{var m;const l=(m=a.children)==null?void 0:m.filter(d=>f.includes(d.id));if(f.includes(a.id)||l!=null&&l.length)if(pe){const d=l==null?void 0:l.filter(n=>!n.isDisabled);if(d&&d.length>0){const n=d.map(g=>g.label).join(", ");(f.includes(a.id)||d.some(g=>f.includes(g.id)))&&r.push(`${a.label}${n?": "+n:""}`)}}else{const d=l==null?void 0:l.map(n=>n.label).join(", ");r.push(`${a.label}${d?": "+d:""}`)}}),r.join(" ; ")}};return o.jsx(Se,{theme:y,children:o.jsxs(Ee,{ref:M,darkMode:u,darkTextColor:c,children:[o.jsxs(Le,{onClick:we,darkMode:u,darkBgColor:E,darkTextColor:c,borderRadius:ge,$disabled:N,children:[o.jsx(v,{text:ne()?ne():_||S.SELECT,type:"body",id:"dropdown-value",style:u?{color:c||y.colors.darkModeText}:{}}),o.jsx(I,{useReactIcon:!0,reactIconName:k?"MdExpandLess":"MdExpandMore",reactIconSet:"md",size:"small",color:N?"#9ca3af":u?c||y.colors.darkModeText:"#0000008A"})]}),k&&o.jsxs(Ce,{openUp:xe,darkMode:u,darkBgColor:E,darkTextColor:c,children:[i&&o.jsx(Ie,{children:o.jsx(Me,{placeholder:me||S.SEARCH,onChange:r=>be(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),s&&fe&&z&&o.jsxs(ae,{children:[o.jsx(A,{style:u?{color:c||y.colors.darkModeText}:{},label:S.SELECT_ALL,checked:f.length===e.length+e.reduce((r,a)=>{var l;return r+(((l=a.children)==null?void 0:l.length)||0)},0),onChange:se}),o.jsxs(Ae,{children:[o.jsx(ie,{isSelected:C,darkMode:u,onClick:te(!0),darkTextColor:c,children:o.jsx(v,{text:S.ALL,type:"body",id:"dropdown-value",style:u?{color:c||y.colors.darkModeText}:{}})})," ","|"," ",o.jsx(ie,{isSelected:!C,darkMode:u,onClick:te(!1),darkTextColor:c,children:o.jsx(v,{text:S.SELECTED,type:"body",id:"dropdown-value",style:u?{color:c||y.colors.darkModeText}:{}})})]})]}),!z&&o.jsx(ae,{children:o.jsx(A,{label:S.SELECT_ALL,checked:f.length===e.length+e.reduce((r,a)=>{var l;return r+(((l=a.children)==null?void 0:l.length)||0)},0),onChange:se,style:u?{color:c||y.colors.darkModeText}:{}})}),o.jsx(Re,{isMultiSelect:s,children:ye.map(r=>{var m,d;const a=(m=r.children)==null?void 0:m.some(n=>f.includes(n.id));if(!C&&!f.includes(r.id)&&!a)return null;const l=$e(r);return o.jsxs(ve.Fragment,{children:[o.jsxs(de,{isCollapsed:T.includes(r.id),isCollapsible:R,darkMode:u,darkBgColor:E,darkTextColor:c,isSelected:s?l:f.includes(r.id),hoverBgColor:W,hoverTextColor:H,selectedBgColor:P,itemBorderRadius:U,removeBorderBetweenItems:G,itemsFullWidth:J,children:[s?o.jsxs(ce,{darkMode:u,darkTextColor:c,children:[o.jsx(A,{style:u?{color:c||y.colors.darkModeText}:{},checked:l,onChange:Z(r.id,!1,l),disabled:r.isDisabled,name:r.id}),r==null?void 0:r.icon,o.jsx(V,{onClick:ee(r.id,!1,l),darkMode:u,darkTextColor:c,children:o.jsx(v,{text:r.label,type:"body",id:"dropdown-value",style:u?{color:c||y.colors.darkModeText}:{}})})]}):o.jsxs(V,{onClick:re(r.id),darkMode:u,darkTextColor:c,children:[!s&&B&&o.jsx(le,{checkmarkColor:F,children:o.jsx(I,{useReactIcon:!0,reactIconName:"MdCheck",reactIconSet:"md",size:"small",style:{opacity:f.includes(r.id)?1:0}})}),o.jsxs(oe,{darkMode:u,darkTextColor:c,children:[r==null?void 0:r.icon,o.jsx(v,{text:r.label,type:"body",id:"dropdown-value",style:u?{color:c||y.colors.darkModeText}:{}})]})]}),R&&o.jsx(I,{icon:`chevron ${T.includes(r.id)?"down":"up"}`,size:"small",onClick:ke(r.id),style:u?{color:c||y.colors.darkModeText}:{}})]},r.id),!T.includes(r.id)&&((d=r.children)==null?void 0:d.map(n=>!C&&!f.includes(n.id)?null:o.jsx(de,{ischild:!0,isCollapsible:R,darkMode:u,darkBgColor:E,darkTextColor:c,isSelected:f.includes(n.id),hoverBgColor:W,hoverTextColor:H,selectedBgColor:P,itemBorderRadius:U,removeBorderBetweenItems:G,itemsFullWidth:J,children:s?o.jsxs(ce,{ischild:!0,darkMode:u,darkTextColor:c,children:[o.jsx(A,{style:u?{color:c||y.colors.darkModeText}:{},label:n.label,checked:f.includes(n.id),onChange:Z(n.id,!0),disabled:n.isDisabled}),n==null?void 0:n.icon]}):o.jsxs(V,{onClick:re(n.id),darkMode:u,darkTextColor:c,children:[!s&&B&&o.jsx(le,{checkmarkColor:F,children:o.jsx(I,{useReactIcon:!0,reactIconName:"MdCheck",reactIconSet:"md",size:"small",style:{opacity:f.includes(n.id)?1:0}})}),o.jsxs(oe,{darkMode:u,darkTextColor:c,children:[n==null?void 0:n.icon,o.jsx(v,{text:n.label,type:"body",id:"dropdown-value",style:u?{color:c||y.colors.darkModeText}:{}})]})]})},n.id)))]},r.id)})}),($==null?void 0:$.show)&&o.jsx(De,{$darkMode:u,$darkTextColor:c,$buttonColor:$.color,$buttonHoverBg:$.hoverBgColor,$buttonHoverColor:$.hoverColor,children:o.jsx(je,{label:$.text||"Apply",leftElement:$.icon,onClick:$.onClick,border:!1,transparent:!0,className:`bottom-button-custom ${$.className||""}`})})]})]})})},Je=ue;ue.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""},showCheckedIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:""},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},checkmarkColor:{required:!1,tsType:{name:"string"},description:""},itemBorderRadius:{required:!1,tsType:{name:"string"},description:""},removeBorderBetweenItems:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},itemsFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bottomButton:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  show?: boolean; // show bottom button
  text?: string; // button text
  icon?: React.ReactNode; // button icon
  onClick?: () => void; // click handler
  color?: string; // button text/icon color
  hoverBgColor?: string; // hover background color
  hoverColor?: string; // hover text/icon color
  className?: string; // custom className for additional styling
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"text",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"hoverBgColor",value:{name:"string",required:!1}},{key:"hoverColor",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{Je as A};
