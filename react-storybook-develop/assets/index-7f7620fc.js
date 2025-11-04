import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as x,R as be}from"./index-ad58220e.js";import{d as f,o as ge}from"./styled-components.browser.esm-675ea4f2.js";import{t as h}from"./config-43c6afbd.js";import{L as q}from"./index-6dcb29cb.js";import{S as xe}from"./searchComponent-bcb17182.js";import{L as D}from"./ltCheckBox-fb658f45.js";import{T as j}from"./index-0c2df6d5.js";import{S}from"./stringConstants-f1def6f8.js";import{_ as ye}from"./lodash-9978a6f3.js";import{u as we}from"./ThemeContext-71b3bf8d.js";const $e=f.div`
  position: relative;
  width: 100%;
  ${({darkMode:e,darkTextColor:o,theme:t})=>e&&`
      color: ${o||t.colors.darkModeText};
    `}
`,je=f.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: ${({darkMode:e,darkBgColor:o,theme:t})=>e?o||t.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:o,theme:t})=>e?o||t.colors.darkModeText:"inherit"};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${({darkMode:e,darkTextColor:o,theme:t})=>e&&`color: ${o||t.colors.darkModeText};`}
  }
`,Se=f.div`
  position: absolute;
  ${({openUp:e})=>e?"bottom: 46px;":"top: 46px;"}
  left: 0;
  right: 0;
  background: ${({darkMode:e,darkBgColor:o,theme:t})=>e?o||t.colors.darkModeBgSecondary:"white"};
  color: ${({darkMode:e,darkTextColor:o,theme:t})=>e?o||t.colors.darkModeText:"inherit"};
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
  ${({darkMode:e,darkTextColor:o,theme:t})=>e&&`color: ${o||t.colors.darkModeText};`}
`,K=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  flex: 1;
  ${({darkMode:e,darkTextColor:o,theme:t})=>e&&`color: ${o||t.colors.darkModeText};`}
`,Q=f.div`
  display: flex;
  align-items: center;
  width: 20px;
  justify-content: center;
  flex-shrink: 0;
`,ke=f.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,X=f.div`
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
    background-color: ${({theme:e,darkMode:o})=>o?e.colors.darkModeBgSecondary:e.colors.backgroundSecondary};
  }
  
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e,theme:o})=>!e&&`border-bottom: 1px solid ${o.colors.border}3f;`}
  ${({isCollapsible:e,ischild:o,theme:t})=>e&&!o&&`background-color: ${t.colors.backgroundSecondary};`}
  ${({isSelected:e,theme:o,darkMode:t})=>e&&`background-color: ${t?o.colors.darkModeBgSecondary:o.colors.backgroundSecondary};`}
  ${({darkMode:e,darkBgColor:o,darkTextColor:t,theme:w})=>e&&`
      background: ${o||w.colors.darkModeBgSecondary} !important;
      color: ${t||w.colors.darkModeText} !important;
      border-bottom: 1px solid ${w.colors.darkModeBorder} !important;
      * {
        color: ${t||w.colors.darkModeText} !important;
      }
      label, span, div {
        color: ${t||w.colors.darkModeText} !important;
      }
    `}
`,ve=f.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,ee=f.span`
  color: ${({darkMode:e,darkTextColor:o,theme:t})=>e?o||t.colors.darkModeText:"inherit"};
`,Me=f.div`
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
`,se=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
  ${({darkMode:e,darkTextColor:o,theme:t})=>e&&`color: ${o||t.colors.darkModeText};`}
`,Te=f.div`
  padding: ${({theme:e})=>e.spacing.sm};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Le=f.button`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.sm};
  border: 1px solid ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  background: ${({darkMode:e,darkBgColor:o,theme:t})=>e?o||t.colors.darkModeBgSecondary:t.colors.primary};
  color: ${({darkMode:e,darkTextColor:o,theme:t})=>e?o||t.colors.darkModeText:"white"};
  cursor: pointer;
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,re=({options:e,defaultSelectedItems:o,isMultiSelect:t,isSearchable:w,isCollapsible:I,onSelect:L,searchPlaceholder:te,placeholder:z,showCustomLabel:B="",showOnlyEnabledInInput:ne=!1,showSelectAll:oe=!0,showCount:de=!1,showSelected:C=!0,darkBgColor:k,darkTextColor:a,showBottomButton:le=!1,bottomButtonText:ae="Apply",onBottomButtonClick:ie,showCheckedIcon:_=!0})=>{const i=we().theme==="dark",[m,v]=x.useState([]),[$,A]=x.useState(!1),[O,ce]=x.useState(""),[ue,V]=x.useState(!1),M=x.useRef(null),[E,W]=x.useState(!0),[me,N]=x.useState(e),[T,H]=x.useState([]),pe=s=>{var d;return m.includes(s.id)||((d=s.children)==null?void 0:d.some(l=>m.includes(l.id)))||!1},P=(s,d,l)=>(r,c)=>{F(s,d,l)()},F=(s,d,l)=>()=>{var b;const r=e.find(u=>{var g;return d?(g=u.children)==null?void 0:g.some(y=>y.id===s):u.id===s}),c=r==null?void 0:r.id,p=((b=r==null?void 0:r.children)==null?void 0:b.filter(u=>!u.isDisabled).map(u=>u.id))||[];v(u=>u.includes(s)||l?d?p.filter(y=>y!==s&&u.includes(y)).length?u.filter(y=>y!==s):u.filter(y=>y!==c&&y!==s):u.filter(g=>g!==s&&!p.includes(g)):d?[...u,s]:[...u,s,...p])},U=s=>()=>{v([s]),A(!1),L([s])},he=()=>{$?(A(!1),L(m)):A(!0)};x.useEffect(()=>{const s=d=>{M.current&&!M.current.contains(d.target)&&$&&(A(!1),L(m))};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[$,m,L]),x.useEffect(()=>{N(e)},[e]),x.useEffect(()=>{const s=t?o.reduce((l,r)=>{const c=e.find(p=>p.id===r);return c?(l.push(r),c.children&&l.push(...c.children.map(p=>p.id))):e.find(b=>{var u;return(u=b.children)==null?void 0:u.some(g=>g.id===r)})&&l.push(r),l},[]):o,d=Array.from(new Set(s));v(d)},[o,e]);const Y=(s,d)=>{const{checked:l}=d;if(l){const r=e.flatMap(c=>{var u;const p=c.isDisabled&&!m.includes(c.id)?[]:[c.id],b=((u=c.children)==null?void 0:u.filter(g=>!g.isDisabled||m.includes(g.id)).map(g=>g.id))||[];return[...p,...b]});v(r)}else{const r=e.flatMap(p=>{var b;return((b=p.children)==null?void 0:b.filter(u=>u.isDisabled).map(u=>u.id))||[]}),c=m.filter(p=>r.includes(p));v(c)}};x.useEffect(()=>{const s=ye.filter(e,d=>{var l;return d.label.toLowerCase().includes(O.toLowerCase())||((l=d.children)==null?void 0:l.some(r=>r.label.toLowerCase().includes(O.toLowerCase())))});N(s)},[O]),x.useEffect(()=>{const s=()=>{if(M.current){const d=M.current.getBoundingClientRect(),r=window.innerHeight-d.bottom,c=d.top;r<250&&c>r?V(!0):V(!1)}};return $&&s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[$]);const G=s=>()=>{W(!!s)},fe=s=>()=>{T.includes(s)?H(T.filter(d=>d!==s)):H(d=>[...d,s])},J=()=>{if(de){const s=m.length;return B&&B.trim()?s>0?`${s} ${B}${s>1?"s":""} Selected`:"":s>0?`${s} Selected`:""}else{const s=[];return e.forEach(d=>{var r;const l=(r=d.children)==null?void 0:r.filter(c=>m.includes(c.id));if(m.includes(d.id)||l!=null&&l.length)if(ne){const c=l==null?void 0:l.filter(p=>!p.isDisabled);if(c&&c.length>0){const p=c.map(b=>b.label).join(", ");(m.includes(d.id)||c.some(b=>m.includes(b.id)))&&s.push(`${d.label}${p?": "+p:""}`)}}else{const c=l==null?void 0:l.map(p=>p.label).join(", ");s.push(`${d.label}${c?": "+c:""}`)}}),s.join(" ; ")}};return n.jsx(ge,{theme:h,children:n.jsxs($e,{ref:M,darkMode:i,darkTextColor:a,children:[n.jsxs(je,{onClick:he,darkMode:i,darkBgColor:k,darkTextColor:a,children:[n.jsx(j,{text:J()?J():z||S.SELECT,type:"body",id:"dropdown-value",style:i?{color:a||h.colors.darkModeText}:{}}),n.jsx(q,{icon:`chevron ${$?"up":"down"}`,size:"small",color:i?a||h.colors.darkModeText:"#0000008A"})]}),$&&n.jsxs(Se,{openUp:ue,darkMode:i,darkBgColor:k,darkTextColor:a,children:[w&&n.jsx(ke,{children:n.jsx(xe,{placeholder:te||S.SEARCH,onChange:s=>ce(s.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),t&&oe&&C&&n.jsxs(X,{children:[n.jsx(D,{style:i?{color:a||h.colors.darkModeText}:{},label:S.SELECT_ALL,checked:m.length===e.length+e.reduce((s,d)=>{var l;return s+(((l=d.children)==null?void 0:l.length)||0)},0),onChange:Y}),n.jsxs(ve,{children:[n.jsx(ee,{isSelected:E,darkMode:i,onClick:G(!0),darkTextColor:a,children:n.jsx(j,{text:S.ALL,type:"body",id:"dropdown-value",style:i?{color:a||h.colors.darkModeText}:{}})})," ","|"," ",n.jsx(ee,{isSelected:!E,darkMode:i,onClick:G(!1),darkTextColor:a,children:n.jsx(j,{text:S.SELECTED,type:"body",id:"dropdown-value",style:i?{color:a||h.colors.darkModeText}:{}})})]})]}),!C&&n.jsx(X,{children:n.jsx(D,{label:S.SELECT_ALL,checked:m.length===e.length+e.reduce((s,d)=>{var l;return s+(((l=d.children)==null?void 0:l.length)||0)},0),onChange:Y,style:i?{color:a||h.colors.darkModeText}:{}})}),n.jsx(Me,{isMultiSelect:t,children:me.map(s=>{var l;if(!E&&!m.includes(s.id))return null;const d=pe(s);return n.jsxs(be.Fragment,{children:[n.jsxs(Z,{isCollapsed:T.includes(s.id),isCollapsible:I,darkMode:i,darkBgColor:k,darkTextColor:a,isSelected:m.includes(s.id),children:[t?n.jsxs(se,{darkMode:i,darkTextColor:a,children:[n.jsx(D,{style:i?{color:a||h.colors.darkModeText}:{},checked:d,onChange:P(s.id,!1,d),disabled:s.isDisabled,name:s.id}),s==null?void 0:s.icon,n.jsx(R,{onClick:F(s.id,!1,d),darkMode:i,darkTextColor:a,children:n.jsx(j,{text:s.label,type:"body",id:"dropdown-value",style:i?{color:a||h.colors.darkModeText}:{}})})]}):n.jsxs(R,{onClick:U(s.id),darkMode:i,darkTextColor:a,children:[!t&&_&&n.jsx(Q,{children:n.jsx(q,{icon:"checkmark",size:"small",style:{color:i?a||h.colors.darkModeText:h.colors.primary,opacity:m.includes(s.id)?1:0}})}),n.jsxs(K,{darkMode:i,darkTextColor:a,children:[s==null?void 0:s.icon,n.jsx(j,{text:s.label,type:"body",id:"dropdown-value",style:i?{color:a||h.colors.darkModeText}:{}})]})]}),I&&n.jsx(q,{icon:`chevron ${T.includes(s.id)?"down":"up"}`,size:"small",onClick:fe(s.id),style:i?{color:a||h.colors.darkModeText}:{}})]},s.id),!T.includes(s.id)&&((l=s.children)==null?void 0:l.map(r=>!E&&!m.includes(r.id)?null:n.jsx(Z,{ischild:!0,isCollapsible:I,darkMode:i,darkBgColor:k,darkTextColor:a,isSelected:m.includes(r.id),children:t?n.jsxs(se,{ischild:!0,darkMode:i,darkTextColor:a,children:[n.jsx(D,{style:i?{color:a||h.colors.darkModeText}:{},label:r.label,checked:m.includes(r.id),onChange:P(r.id,!0),disabled:r.isDisabled}),r==null?void 0:r.icon]}):n.jsxs(R,{onClick:U(r.id),darkMode:i,darkTextColor:a,children:[!t&&_&&n.jsx(Q,{children:n.jsx(q,{icon:"checkmark",size:"small",style:{color:i?a||h.colors.darkModeText:h.colors.primary,opacity:m.includes(r.id)?1:0}})}),n.jsxs(K,{darkMode:i,darkTextColor:a,children:[r==null?void 0:r.icon,n.jsx(j,{text:r.label,type:"body",id:"dropdown-value",style:i?{color:a||h.colors.darkModeText}:{}})]})]})},r.id)))]},s.id)})}),le&&n.jsx(Te,{children:n.jsx(Le,{onClick:ie,darkMode:i,darkBgColor:k,darkTextColor:a,children:ae})})]})]})})},Ve=re;re.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCustomLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},showSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},darkBgColor:{required:!1,tsType:{name:"string"},description:""},darkTextColor:{required:!1,tsType:{name:"string"},description:""},showBottomButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bottomButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Apply'",computed:!1}},onBottomButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckedIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{Ve as A};
