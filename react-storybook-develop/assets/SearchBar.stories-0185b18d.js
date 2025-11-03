import{j as e}from"./jsx-runtime-8406ef1e.js";import{I as y}from"./Icon-370c2d23.js";import{I as f}from"./Input-3f8aa787.js";import{D as g}from"./Dropdown-e3088384.js";/* empty css              */import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./includes-192f9362.js";import"./map-20538cdf.js";import"./htmlPropsUtils-2b22d933.js";import"./Button-21321eef.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./without-708f3584.js";import"./isEmpty-b690c58c.js";import"./deburr-94e08562.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";const a=m=>{const{searchOptions:i,selectedValue:l,searchInputValue:n,onCrossIconClick:c,onSearchValueChange:p,onDropDownChange:d,showSearchBar:t}=m;return e.jsxs("div",{className:`dropdown-search ${t?"visibility-show":""}`,children:[e.jsx(g,{className:"searchOption",search:!0,selection:!0,options:i,onChange:h=>{d(h)},value:l}),e.jsx(f,{className:"searchBox",placeholder:"Search here.",value:n,onChange:p,icon:e.jsx(y,{name:"delete",link:!0,onClick:c,className:`search-cross ${t&&n?"show":""}`})})]})},b=a;a.defaultProps={searchOptions:[],selectedValue:"",searchInputValue:"",showSearchBar:!1};a.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{searchOptions:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectedValue:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"''",computed:!1}},searchInputValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"''",computed:!1}},onCrossIconClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onSearchValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onDropDownChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},showSearchBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const U={component:b,title:"SearchBar",tags:["autodocs"]},r={args:{searchOptions:[{key:"_referencenumber",text:"Reference Number",value:"referencenumber"},{key:"_billnumber",text:"Bill Number",value:"billnumber"},{key:"_customername",text:"Customer Name",value:"customername"},{key:"_customermobile",text:"Mobile",value:"customermobile"},{key:"_ltorderid",text:"LT Order ID",value:"ltorderid"}],selectedValue:"referencenumber",searchInputValue:"Search",showSearchBar:!0}};var s,o,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
