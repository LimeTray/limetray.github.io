import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{I as y}from"./Icon-6945f610.js";import{I as f}from"./Input-4003f5c3.js";import{D as g}from"./Dropdown-4796e13c.js";/* empty css              */import"./index-04c7fd94.js";import"./_commonjsHelpers-725317a4.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./includes-ceab992c.js";import"./map-d105d6f1.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./Button-8d24c33b.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./without-b20c73c8.js";import"./isEmpty-0f216811.js";import"./deburr-bb2546ff.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";const a=m=>{const{searchOptions:i,selectedValue:l,searchInputValue:n,onCrossIconClick:c,onSearchValueChange:p,onDropDownChange:d,showSearchBar:t}=m;return e.jsxs("div",{className:`dropdown-search ${t?"visibility-show":""}`,children:[e.jsx(g,{className:"searchOption",search:!0,selection:!0,options:i,onChange:h=>{d(h)},value:l}),e.jsx(f,{className:"searchBox",placeholder:"Search here.",value:n,onChange:p,icon:e.jsx(y,{name:"delete",link:!0,onClick:c,className:`search-cross ${t&&n?"show":""}`})})]})},b=a;a.defaultProps={searchOptions:[],selectedValue:"",searchInputValue:"",showSearchBar:!1};a.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{searchOptions:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectedValue:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"''",computed:!1}},searchInputValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"''",computed:!1}},onCrossIconClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onSearchValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onDropDownChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},showSearchBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const U={component:b,title:"SearchBar",tags:["autodocs"]},r={args:{searchOptions:[{key:"_referencenumber",text:"Reference Number",value:"referencenumber"},{key:"_billnumber",text:"Bill Number",value:"billnumber"},{key:"_customername",text:"Customer Name",value:"customername"},{key:"_customermobile",text:"Mobile",value:"customermobile"},{key:"_ltorderid",text:"LT Order ID",value:"ltorderid"}],selectedValue:"referencenumber",searchInputValue:"Search",showSearchBar:!0}};var s,o,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    searchOptions: [{
      key: "_referencenumber",
      text: "Reference Number",
      value: "referencenumber"
    }, {
      key: "_billnumber",
      text: "Bill Number",
      value: "billnumber"
    }, {
      key: "_customername",
      text: "Customer Name",
      value: "customername"
    }, {
      key: "_customermobile",
      text: "Mobile",
      value: "customermobile"
    }, {
      key: "_ltorderid",
      text: "LT Order ID",
      value: "ltorderid"
    }],
    selectedValue: "referencenumber",
    searchInputValue: "Search",
    showSearchBar: true
  }
}`,...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,U as default};
