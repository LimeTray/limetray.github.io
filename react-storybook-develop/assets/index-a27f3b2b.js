import{j as n}from"./jsx-runtime-8ae9c9ad.js";import{r as h,R as je}from"./index-04c7fd94.js";import{g,r as Me}from"./styled-components.browser.esm-b57a6336.js";import{t as x}from"./config-d270d9b6.js";import{L as N}from"./index-9e8f50bb.js";import{L as Te}from"./ltButton-35d85bde.js";import{S as Ee}from"./searchComponent-d1398db4.js";import{L as R}from"./ltCheckBox-c13e76e1.js";import{T as j}from"./index-89e0641a.js";import{S as v}from"./stringConstants-798199f9.js";import{_ as qe}from"./lodash-15082d9a.js";import{u as Ie}from"./ThemeContext-ab9e94eb.js";const Le=g.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`
      color: ${t||s.colors.darkModeText};
    `}
`,Ce=g.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e,borderRadius:t})=>t||e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: ${({darkMode:e,darkBgColor:t,theme:s,$disabled:d})=>d?e?s.colors.darkModeBgSecondary:"#f3f4f6":e?t||s.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:t,theme:s,$disabled:d})=>d?"#9ca3af":e?t||s.colors.darkModeText:"inherit"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${({darkMode:e,darkTextColor:t,theme:s,$disabled:d})=>d?"color: #9ca3af !important;":e?`color: ${t||s.colors.darkModeText};`:""}
  }
`,Ae=g.div`
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
`,B=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  width: 100%;
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:s.colors.text};
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,ae=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex: 1;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,de=g.div`
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
`,Ne=g.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,ie=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,ce=g.div`
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
  ${({isSelected:e,theme:t,darkMode:s,selectedBgColor:d})=>e&&`background-color: ${d||(s?t.colors.darkModeBgSecondary:t.colors.backgroundSecondary)};`}
  
  ${({darkMode:e,darkBgColor:t,darkTextColor:s,theme:d})=>e&&`
      background: ${t||d.colors.darkModeBgSecondary} !important;
      color: ${s||d.colors.darkModeText} !important;
      border-bottom: 1px solid ${d.colors.darkModeBorder} !important;
      * {
        color: ${s||d.colors.darkModeText} !important;
      }
      label, span, div {
        color: ${s||d.colors.darkModeText} !important;
      }
    `}
`,Re=g.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,ue=g.span`
  color: ${({darkMode:e,darkTextColor:t,theme:s})=>e?t||s.colors.darkModeText:"inherit"};
`,De=g.div`
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
`,Oe=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>`${e.spacing.md}`};
  padding-top: ${({theme:e})=>`${e.spacing.xs}`};
`,me=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
  ${({darkMode:e,darkTextColor:t,theme:s})=>e&&`color: ${t||s.colors.darkModeText};`}
`,_e=g.div`
  padding: ${({theme:e})=>e.spacing.xs};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  
  &&& .bottom-button-custom.ltButton {
    width: 100%;
    color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:d})=>s||(e?t||d.colors.darkModeText:d.colors.primary)};
    background: transparent;
    transition: all 0.2s ease;
    
    &:hover {
      background: ${({$darkMode:e,$darkTextColor:t,$buttonHoverBg:s,theme:d})=>s||(e?t||d.colors.darkModeText:d.colors.primary)};
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
      color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:d})=>s||(e?t||d.colors.darkModeText:d.colors.primary)};
    }
    
    /* Icon color */
    .leftElement i.icon,
    .leftElement .icon {
      color: ${({$darkMode:e,$darkTextColor:t,$buttonColor:s,theme:d})=>s||(e?t||d.colors.darkModeText:d.colors.primary)} !important;
    }
  }
`,pe=({options:e,defaultSelectedItems:t,isMultiSelect:s,isSearchable:d,isCollapsible:D,onSelect:I,searchPlaceholder:fe,placeholder:W,showCustomLabel:O="",showOnlyEnabledInInput:he=!1,showSelectAll:ge=!0,showCount:xe=!1,showSelected:z=!0,darkBgColor:L,darkTextColor:i,showCheckedIcon:H=!0,borderRadius:ye,hoverBgColor:P,hoverTextColor:F,selectedBgColor:U,checkmarkColor:G,itemBorderRadius:J,removeBorderBetweenItems:K=!1,itemsFullWidth:Q=!0,bottomButton:w,disabled:_=!1})=>{const c=Ie().theme==="dark",[p,M]=h.useState([]),[$,C]=h.useState(!1),[A,X]=h.useState(""),[be,Y]=h.useState(!1),S=h.useRef(null),[T,Z]=h.useState(!0),[E,V]=h.useState(e),[q,ee]=h.useState([]),$e=r=>{var l;return p.includes(r.id)||((l=r.children)==null?void 0:l.some(a=>p.includes(a.id)))||!1},re=(r,l,a)=>(m,u)=>{se(r,l,a)()},se=(r,l,a)=>()=>{var y;const m=e.find(f=>{var b;return l?(b=f.children)==null?void 0:b.some(k=>k.id===r):f.id===r}),u=m==null?void 0:m.id,o=((y=m==null?void 0:m.children)==null?void 0:y.filter(f=>!f.isDisabled).map(f=>f.id))||[];M(f=>f.includes(r)||a?l?o.filter(k=>k!==r&&f.includes(k)).length?f.filter(k=>k!==r):f.filter(k=>k!==u&&k!==r):f.filter(b=>b!==r&&!o.includes(b)):l?[...f,r]:[...f,r,...o])},te=r=>()=>{M([r]),C(!1),I([r])},we=()=>{_||($?(C(!1),I(p)):C(!0))};h.useEffect(()=>{const r=l=>{S.current&&!S.current.contains(l.target)&&$&&(C(!1),I(p))};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[$,p,I]),h.useEffect(()=>{V(e)},[e]),h.useEffect(()=>{const r=s?t.reduce((a,m)=>{const u=e.find(o=>o.id===m);return u?(a.push(m),u.children&&a.push(...u.children.map(o=>o.id))):e.find(y=>{var f;return(f=y.children)==null?void 0:f.some(b=>b.id===m)})&&a.push(m),a},[]):t,l=Array.from(new Set(r));M(l)},[t,e]);const ne=(r,l)=>{const{checked:a}=l;if(a){const m=e.flatMap(u=>{var f;const o=u.isDisabled&&!p.includes(u.id)?[]:[u.id],y=((f=u.children)==null?void 0:f.filter(b=>!b.isDisabled||p.includes(b.id)).map(b=>b.id))||[];return[...o,...y]});M(m)}else{const m=e.flatMap(o=>{var y;return((y=o.children)==null?void 0:y.filter(f=>f.isDisabled).map(f=>f.id))||[]}),u=p.filter(o=>m.includes(o));M(u)}};h.useEffect(()=>{const r=qe.filter(e,l=>{var a;return l.label.toLowerCase().includes(A.toLowerCase())||((a=l.children)==null?void 0:a.some(m=>m.label.toLowerCase().includes(A.toLowerCase())))});V(r)},[A]),h.useEffect(()=>{$||(X(""),V(e))},[$,e]),h.useEffect(()=>{const r=()=>{if(S.current){const l=S.current.getBoundingClientRect(),m=window.innerHeight-l.bottom,u=l.top;m<250&&u>m?Y(!0):Y(!1)}};return $&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[$]),h.useEffect(()=>{if($&&d&&S.current){const r=S.current.querySelector(".search-input input");r&&setTimeout(()=>{r.focus()},50)}},[$,d]);const oe=r=>()=>{Z(!!r)},ke=r=>()=>{q.includes(r)?ee(q.filter(l=>l!==r)):ee(l=>[...l,r])},le=()=>{if(xe){const r=p.length;return O&&O.trim()?r>0?`${r} ${O}${r>1?"s":""} Selected`:"":r>0?`${r} Selected`:""}else{const r=[];return e.forEach(l=>{var m;const a=(m=l.children)==null?void 0:m.filter(u=>p.includes(u.id));if(p.includes(l.id)||a!=null&&a.length)if(he){const u=a==null?void 0:a.filter(o=>!o.isDisabled);if(u&&u.length>0){const o=u.map(y=>y.label).join(", ");(p.includes(l.id)||u.some(y=>p.includes(y.id)))&&r.push(`${l.label}${o?": "+o:""}`)}}else{const u=a==null?void 0:a.map(o=>o.label).join(", ");r.push(`${l.label}${u?": "+u:""}`)}}),r.join(" ; ")}},ve=T?E.length>0:E.some(r=>{var l;return p.includes(r.id)||((l=r.children)==null?void 0:l.some(a=>p.includes(a.id)))}),Se=()=>A?v.NO_MATCHING_RESULTS:v.NO_OPTIONS_AVAILABLE;return n.jsx(Me,{theme:x,children:n.jsxs(Le,{ref:S,darkMode:c,darkTextColor:i,children:[n.jsxs(Ce,{onClick:we,darkMode:c,darkBgColor:L,darkTextColor:i,borderRadius:ye,$disabled:_,children:[n.jsx(j,{text:le()?le():W||v.SELECT,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}}),n.jsx(N,{useReactIcon:!0,reactIconName:$?"MdExpandLess":"MdExpandMore",reactIconSet:"md",size:"small",color:_?"#9ca3af":c?i||x.colors.darkModeText:"#0000008A"})]}),$&&n.jsxs(Ae,{openUp:be,darkMode:c,darkBgColor:L,darkTextColor:i,children:[d&&n.jsx(Ne,{children:n.jsx(Ee,{placeholder:fe||v.SEARCH,onChange:r=>X(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),s&&ge&&z&&E.length>0&&n.jsxs(ie,{children:[n.jsx(R,{style:c?{color:i||x.colors.darkModeText}:{},label:v.SELECT_ALL,checked:p.length===e.length+e.reduce((r,l)=>{var a;return r+(((a=l.children)==null?void 0:a.length)||0)},0),onChange:ne}),n.jsxs(Re,{children:[n.jsx(ue,{isSelected:T,darkMode:c,onClick:oe(!0),darkTextColor:i,children:n.jsx(j,{text:v.ALL,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})})," ","|"," ",n.jsx(ue,{isSelected:!T,darkMode:c,onClick:oe(!1),darkTextColor:i,children:n.jsx(j,{text:v.SELECTED,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})})]})]}),!z&&E.length>0&&n.jsx(ie,{children:n.jsx(R,{label:v.SELECT_ALL,checked:p.length===e.length+e.reduce((r,l)=>{var a;return r+(((a=l.children)==null?void 0:a.length)||0)},0),onChange:ne,style:c?{color:i||x.colors.darkModeText}:{}})}),n.jsx(De,{isMultiSelect:s,children:ve?E.map(r=>{var m,u;const l=(m=r.children)==null?void 0:m.some(o=>p.includes(o.id));if(!T&&!p.includes(r.id)&&!l)return null;const a=$e(r);return n.jsxs(je.Fragment,{children:[n.jsxs(ce,{isCollapsed:q.includes(r.id),isCollapsible:D,darkMode:c,darkBgColor:L,darkTextColor:i,isSelected:s?a:p.includes(r.id),hoverBgColor:P,hoverTextColor:F,selectedBgColor:U,itemBorderRadius:J,removeBorderBetweenItems:K,itemsFullWidth:Q,children:[s?n.jsxs(me,{darkMode:c,darkTextColor:i,children:[n.jsx(R,{style:c?{color:i||x.colors.darkModeText}:{},checked:a,onChange:re(r.id,!1,a),disabled:r.isDisabled,name:r.id}),r==null?void 0:r.icon,n.jsx(B,{onClick:se(r.id,!1,a),darkMode:c,darkTextColor:i,children:n.jsx(j,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})})]}):n.jsxs(B,{onClick:te(r.id),darkMode:c,darkTextColor:i,children:[!s&&H&&n.jsx(de,{checkmarkColor:G,children:n.jsx(N,{useReactIcon:!0,reactIconName:"MdCheck",reactIconSet:"md",size:"small",style:{opacity:p.includes(r.id)?1:0}})}),n.jsxs(ae,{darkMode:c,darkTextColor:i,children:[r==null?void 0:r.icon,n.jsx(j,{text:r.label,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})]})]}),D&&n.jsx(N,{icon:`chevron ${q.includes(r.id)?"down":"up"}`,size:"small",onClick:ke(r.id),style:c?{color:i||x.colors.darkModeText}:{}})]},r.id),!q.includes(r.id)&&((u=r.children)==null?void 0:u.map(o=>!T&&!p.includes(o.id)?null:n.jsx(ce,{ischild:!0,isCollapsible:D,darkMode:c,darkBgColor:L,darkTextColor:i,isSelected:p.includes(o.id),hoverBgColor:P,hoverTextColor:F,selectedBgColor:U,itemBorderRadius:J,removeBorderBetweenItems:K,itemsFullWidth:Q,children:s?n.jsxs(me,{ischild:!0,darkMode:c,darkTextColor:i,children:[n.jsx(R,{style:c?{color:i||x.colors.darkModeText}:{},label:o.label,checked:p.includes(o.id),onChange:re(o.id,!0),disabled:o.isDisabled}),o==null?void 0:o.icon]}):n.jsxs(B,{onClick:te(o.id),darkMode:c,darkTextColor:i,children:[!s&&H&&n.jsx(de,{checkmarkColor:G,children:n.jsx(N,{useReactIcon:!0,reactIconName:"MdCheck",reactIconSet:"md",size:"small",style:{opacity:p.includes(o.id)?1:0}})}),n.jsxs(ae,{darkMode:c,darkTextColor:i,children:[o==null?void 0:o.icon,n.jsx(j,{text:o.label,type:"body",id:"dropdown-value",style:c?{color:i||x.colors.darkModeText}:{}})]})]})},o.id)))]},r.id)}):n.jsx(Oe,{children:n.jsx(j,{text:Se(),type:"body",id:"no-options-found",textAlign:"center",style:c?{color:i||x.colors.darkModeText}:{color:"#9ca3af"}})})}),(w==null?void 0:w.show)&&n.jsx(_e,{$darkMode:c,$darkTextColor:i,$buttonColor:w.color,$buttonHoverBg:w.hoverBgColor,$buttonHoverColor:w.hoverColor,children:n.jsx(Te,{label:w.text||"Apply",leftElement:w.icon,onClick:w.onClick,border:!1,transparent:!0,className:`bottom-button-custom ${w.className||""}`})})]})]})})},Xe=pe;pe.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""},showCheckedIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:""},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},checkmarkColor:{required:!1,tsType:{name:"string"},description:""},itemBorderRadius:{required:!1,tsType:{name:"string"},description:""},removeBorderBetweenItems:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},itemsFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bottomButton:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  show?: boolean; // show bottom button
  text?: string; // button text
  icon?: React.ReactNode; // button icon
  onClick?: () => void; // click handler
  color?: string; // button text/icon color
  hoverBgColor?: string; // hover background color
  hoverColor?: string; // hover text/icon color
  className?: string; // custom className for additional styling
}`,signature:{properties:[{key:"show",value:{name:"boolean",required:!1}},{key:"text",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"hoverBgColor",value:{name:"string",required:!1}},{key:"hoverColor",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{Xe as A};
