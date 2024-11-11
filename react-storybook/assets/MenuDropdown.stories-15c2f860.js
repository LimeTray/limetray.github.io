import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as S}from"./index-ad58220e.js";import{D as p}from"./Dropdown-e3088384.js";import{B as m}from"./Button-21321eef.js";import{I as $}from"./Icon-370c2d23.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-192f9362.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./without-708f3584.js";import"./isEmpty-b690c58c.js";import"./deburr-94e08562.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Label-d5345000.js";import"./htmlPropsUtils-2b22d933.js";const v=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:10,fill:"none",...t,children:e.jsx("path",{fill:"#00CD7C",d:"M4.75 8.152 2.125 5.527a.738.738 0 0 0-1.05 0 .738.738 0 0 0 0 1.05L4.218 9.72a.747.747 0 0 0 1.057 0l7.95-7.943a.738.738 0 0 0 0-1.05.738.738 0 0 0-1.05 0L4.75 8.152Z"})});v.__docgenInfo={description:"",methods:[],displayName:"TickIcon"};const j=({options:t,triggerComponent:s,pointing:O,className:T,onClick:I,dropdownProps:k,maxHeight:M=300,selectedIndex:R})=>{const[c,d]=S.useState(!1),q=()=>d(!c),_=i=>()=>{I(i+1)},P=()=>{d(!1)};return e.jsx(p,{...k,trigger:e.jsx("div",{onClick:q,children:s}),open:c,onClose:P,pointing:O,icon:null,className:`menu-dropdown ${T}`,children:e.jsx(p.Menu,{style:{maxHeight:`${M}px`,overflowY:"auto"},children:t.map((i,a)=>e.jsxs(p.Item,{...i,onClick:_(a),children:[i.text,R===a+1&&e.jsx(v,{style:{float:"right",marginLeft:"10px"}})]},a))})})},N=j;j.__docgenInfo={description:"",methods:[],displayName:"MenuDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItemProps"}],raw:"DropdownItemProps[]"},description:""},triggerComponent:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},pointing:{required:!1,tsType:{name:"union",raw:`| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"
| undefined`,elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'},{name:"undefined"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode | undefined",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: Number) => void",signature:{arguments:[{type:{name:"Number"},name:"index"}],return:{name:"void"}}},description:""},dropdownProps:{required:!1,tsType:{name:"DropdownProps"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},selectedIndex:{required:!1,tsType:{name:"number"},description:""}}};const ue={title:"MenuDropdown",component:N,argTypes:{selectedIndex:{control:"number"}}},L="More Options",D=[{text:"Publish Logs"},{text:"Publish 1 Change"}],W=()=>e.jsxs(m,{color:"orange",icon:!0,labelPosition:"right",children:[e.jsx($,{name:"ellipsis horizontal"}),L]}),l=t=>e.jsx(N,{...t}),o=l.bind({});o.args={options:D,triggerComponent:e.jsx(W,{}),pointing:"top left",onClick:t=>console.log(`Option ${t} clicked`),selectedIndex:1};const n=l.bind({});n.args={options:Array.from({length:20},(t,s)=>({text:`Option ${s+1}`})),triggerComponent:e.jsx(m,{icon:"ellipsis vertical"}),pointing:"top left",onClick:t=>console.log(`Option ${t} clicked`),selectedIndex:5};const r=l.bind({});r.args={options:D,triggerComponent:e.jsx(m,{content:"Select an option"}),pointing:"top right",onClick:t=>console.log(`Option ${t} clicked`)};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"args => <MenuDropdown {...args} />",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"args => <MenuDropdown {...args} />",...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,C,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <MenuDropdown {...args} />",...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const ge=["WithCustomButton","WithLargeNumberOfOptions","WithNoSelection"];export{o as WithCustomButton,n as WithLargeNumberOfOptions,r as WithNoSelection,ge as __namedExportsOrder,ue as default};
