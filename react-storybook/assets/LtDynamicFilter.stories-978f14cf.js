import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as o}from"./index-ad58220e.js";import{M as k}from"./Menu-39332c93.js";import{T as K}from"./Tab-f825fc25.js";import{L as v}from"./ltCheckBox-fb658f45.js";import{S as U}from"./searchComponent-bcb17182.js";import{M as X}from"./ltModal-371a78c3.js";import{L as j}from"./ltButton-612ce8c0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./map-20538cdf.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./factories-df82d7d3.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./_arrayReduce-865b0d3f.js";import"./deburr-94e08562.js";import"./Icon-370c2d23.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Grid-8acc9182.js";import"./Segment-17af24fa.js";import"./Checkbox-cb5dd6fb.js";import"./_baseSet-d58de3a8.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Ref-51c42093.js";import"./index-4fee7e45.js";import"./Input-3f8aa787.js";import"./Button-21321eef.js";import"./Label-d5345000.js";import"./Portal-8d2f321a.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./index-6dcb29cb.js";import"./Modal-220c81f3.js";import"./pick-729eb0ec.js";import"./crossIcon-11d15636.js";import"./checkIcon-e2b8e3fe.js";const D=({style:m,className:b})=>e.jsxs("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:m,className:b,children:[e.jsx("g",{"clip-path":"url(#clip0_14122_83033)",children:e.jsx("path",{d:"M7.91667 14.75H11.0833V13.1667H7.91667V14.75ZM2.375 5.25V6.83333H16.625V5.25H2.375ZM4.75 10.7917H14.25V9.20833H4.75V10.7917Z",fill:"#111827"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_14122_83033",children:e.jsx("rect",{width:"19",height:"19",fill:"white",transform:"translate(0 0.5)"})})})]});D.__docgenInfo={description:"",methods:[],displayName:"FilterIcon",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const d={ALL:"All",SELECTED:"Selected"};const C={ApplyButtonStyles:{color:"white",backgroundColor:"#00CD7C",display:"flex",paddingBottom:"14px",paddingLeft:"40px",paddingRight:"40px",borderRadius:"20px"},TotalButtonStyles:{color:"#9CA3AF",fontWeight:"400",fontSize:"14px",padding:"0px"},ResetButtonStyles:{color:"#00CD7C",fontWeight:"400",fontSize:"14px",padding:"0px"}},B=({isOpen:m,onCloseFilter:b,selectedSuboptions:w,onSelectedSuboptionsChange:E,applyButtonDisabled:I=!1,filterOptions:n})=>{const q="Apply Filter",[g,A]=o.useState(""),[y,S]=o.useState(d.ALL),[_,O]=o.useState(I),[c,R]=o.useState(-1),[l,p]=o.useState([]),[a,f]=o.useState(null);o.useEffect(()=>{p(w.map(Number))},[w]),o.useEffect(()=>{const t=i=>g.trim()===""?i:i.filter(r=>r.title.toLowerCase().includes(g.toLowerCase())),s=t(c===-1?n.flatMap(i=>i.filters):n[c].filters);f(s)},[g,c,n]);const V=()=>{x(-1),S("Selected")},x=t=>{if(R(t),t===-1){const s=n.flatMap(i=>i.filters);f(s)}else if(n[t]){const s=n[t].filters;f(s)}S(d.ALL),A("")},H=(t,s)=>{if(a){const i=a.map(r=>r.id);s.checked?p(r=>[...r,...i.filter(u=>!r.includes(u))]):p(r=>r.filter(u=>!i.includes(u)))}},T=(t,s)=>{const i=s.value;let r=l;s.checked===!0?r=[...l,i]:r=l.filter(u=>u!==i),p(r)},P=()=>{S("Selected")},$=()=>{S("All")},Q=()=>a?!a.map(s=>s.id).some(s=>!l.includes(s)):!1,Z=()=>{E(l),b()},z=()=>{b()},W=()=>{p([])},G=t=>{A(t.target.value||"")},J=()=>{let t;return c===-1?t=n:t=[n[c]],t==null?void 0:t.map(s=>s.filters.map(i=>l.includes(i.id)?e.jsx(v,{className:"custom-label",value:i.id,checked:l.includes(i.id),label:i.title,onChange:T},i.id):null))};return e.jsxs(X,{open:m,onClose:z,headerIcon:e.jsx(D,{}),header:q,className:"dynamic-filter-modal",showCloseIcon:!0,children:[e.jsxs("div",{className:"dynamic-filter-body",children:[e.jsx("div",{className:"Search-filter-div",children:e.jsx(U,{placeholder:"Search",onChange:G,value:g})}),e.jsxs("div",{className:"filter-options-container",children:[e.jsxs("div",{className:"left-filter-options",children:[e.jsx("div",{onClick:x.bind(null,-1),className:`filter-option ${c===-1?"selected":""}`,children:"All"}),n.map((t,s)=>e.jsx("div",{className:`filter-option ${c===s?"selected":""}`,onClick:x.bind(null,s),children:t.title},t.id))]}),e.jsxs("div",{className:"right-filter-options",children:[e.jsx("div",{className:"tab-div",children:e.jsx(K,{menu:{secondary:!0,pointing:!0},className:"tab-menu",panes:[{menuItem:e.jsx(k.Item,{name:"All",className:`AllTab ${y===d.ALL?"activeTab":""}`,onClick:$},"allTab")},{menuItem:e.jsx(k.Item,{name:"Selected",className:`SelectedTab ${y===d.SELECTED?"activeTab":""}`,onClick:P},"selectedTab")}]})}),e.jsxs("div",{className:"checkbox-div",children:[y===d.ALL&&a&&a.length>0&&e.jsxs("div",{className:"selectAllCheckbox-div",children:[e.jsx("div",{className:"filter-option-checkbox",children:e.jsx(v,{className:"custom-label",label:"All",checked:Q(),onChange:H})}),a==null?void 0:a.map(t=>e.jsx("div",{className:"filter-option-checkbox",children:e.jsx(v,{className:"custom-label",value:t.id,checked:l.includes(t.id),label:t.title,onChange:T})},t.id))]}),y===d.SELECTED&&J()]})]})]})]}),e.jsxs("div",{className:"bottom-button-div",children:[e.jsxs("div",{className:"reset-button-div",children:[e.jsx(j,{label:`${l.length} Selected`,customStyles:C.TotalButtonStyles,transparent:!0,onClick:V}),e.jsx(j,{label:"Reset",customStyles:C.ResetButtonStyles,transparent:!0,onClick:W})]}),e.jsx(j,{onClick:Z,label:"Apply",customStyles:C.ApplyButtonStyles,disabled:_})]})]})},M=B;B.__docgenInfo={description:"",methods:[],displayName:"LtDynamicFilter",props:{filterOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  title: string;
  filters: Filter[];
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"filters",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number | string;
  title: string;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}},{key:"title",value:{name:"string",required:!0}}]}}],raw:"Filter[]",required:!0}}]}}],raw:"FilterOption[]"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onCloseFilter:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedSuboptions:{required:!0,tsType:{name:"union",raw:"number[] | string[]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onSelectedSuboptionsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedSuboptions: number[] | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"number[] | string[]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"selectedSuboptions"}],return:{name:"void"}}},description:""},applyButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Pe={component:M,title:"LtDynamicFilter",tags:["autodocs"],argTypes:{categories:{control:"object"},isOpen:{control:"boolean"},onCloseFilter:{action:"closed"},selectedSuboptions:{control:"object"},onSelectedSuboptionsChange:{action:"selected"},applyButtonDisabled:{control:"boolean"}}},Y=m=>e.jsx(M,{...m}),h=Y.bind({});h.args={filterOptions:[{id:1,title:"Products",filters:[{id:"showProducts",title:"Show Products"},{id:"showModifiers",title:"Show Modifiers"}]},{id:2,title:"Status",filters:[{id:"showActive",title:"Show Active"},{id:"showInactive",title:"Show Inactive"}]}],isOpen:!0,onCloseFilter:()=>{},selectedSuboptions:[],onSelectedSuboptionsChange:()=>{},applyButtonDisabled:!1};var F,L,N;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"args => <LtDynamicFilter {...args} />",...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const $e=["DynamicFilterExample"];export{h as DynamicFilterExample,$e as __namedExportsOrder,Pe as default};
