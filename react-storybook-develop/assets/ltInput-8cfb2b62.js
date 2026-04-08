import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as n}from"./index-ad58220e.js";import{I as $}from"./Input-94f4c1a5.js";import{D as L}from"./Dropdown-66d5c8fe.js";import{d as j,o as D}from"./styled-components.browser.esm-675ea4f2.js";import{L as M}from"./index-f03014ac.js";import{t as O}from"./config-d270d9b6.js";const A=j($)`
  border: 1px solid ${e=>e.theme.colors.border} !important;
  border-radius: ${e=>e.theme.borderRadius.large} !important;
  overflow: ${e=>e.label?"visible":"hidden"};

  & > input {
    border: none !important;
    border-radius: ${e=>e.theme.borderRadius.large} !important;
    box-shadow: none !important;
  }

  & > input:focus {
    border-color: ${e=>e.theme.colors.focusBorder} !important;
    box-shadow: none !important;
  }

  & > .button-text {
    border: none !important;
    border-radius: ${e=>e.theme.borderRadius.large} !important;
    background-color: ${e=>e.theme.colors.white} !important;
    color: ${e=>e.theme.colors.primary} !important;
    font-weight: 100;
  }

  & > .ui.dropdown {
    border: none !important;
    border-radius: ${e=>e.theme.borderRadius.large} !important;
    background-color: ${e=>e.theme.colors.white} !important;
    font-weight: 300;
    & > .menu {
      border: none !important;
      border-radius: 12px !important;
      background-color: ${e=>e.theme.colors.white} !important;
      color: ${e=>e.theme.colors.primary} !important;
      font-weight: 100;
      padding: 0.5em 0;
    }
  }
`,N=({placeholder:e,type:b,onChange:s,buttonText:m,onButtonClick:u,icon:h,iconPosition:y,defaultValue:a="",className:v="",dropdownOptions:l,labelPlaceholder:w,onLabelClick:d,labelDefaultValue:o,...x})=>{const[p,c]=n.useState(a),[I,g]=n.useState(o),[q,f]=n.useState(!1);n.useEffect(()=>{c(a)},[a]),n.useEffect(()=>{g(o)},[o]);const T=(i,t)=>{c(i.target.value),s&&s(i,t)},k=()=>{u&&u(p)},E=(i,t)=>{g(t.value),d&&d(t.value)},C=()=>{f(!1)},R=()=>{f(!0)};return r.jsx(D,{theme:O,children:r.jsx(A,{className:`lt-input ${v}`,placeholder:e,icon:h,type:b,iconPosition:y,value:p,onChange:T,action:m?{content:m,onClick:k,className:"button-text"}:void 0,label:l&&r.jsx(L,{options:l,onChange:E,placeholder:w,onClose:C,onOpen:R,value:I,icon:r.jsx(M,{useReactIcon:!0,reactIconName:q?"MdExpandLess":"MdExpandMore",reactIconSet:"md",size:"small",style:{marginLeft:"0.5em",color:"#0000008A"},color:"#0000008A"})}),...x})})};N.__docgenInfo={description:"",methods:[],displayName:"LtInput",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},iconPosition:{required:!1,tsType:{name:"literal",value:"'left'"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"},{type:{name:"InputOnChangeData"},name:"data"}],return:{name:"void"}}},description:""},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; text: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; text: string; value: string }[]"},description:""},labelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onLabelClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | boolean | (string | number | boolean)[] | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},labelDefaultValue:{required:!1,tsType:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},description:""}}};export{N as L};
