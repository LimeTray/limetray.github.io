import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as n}from"./index-ad58220e.js";import{I as $}from"./Input-3ccf8d1e.js";import{D as L}from"./Dropdown-afea43b0.js";import{d as j,o as D}from"./styled-components.browser.esm-675ea4f2.js";import{L as M}from"./index-58bb9209.js";const O=j($)`
  border: 1px solid ${e=>e.theme.colors.border} !important;
  border-radius: ${e=>e.theme.borderRadius} !important;
  overflow: ${e=>e.label?"visible":"hidden"};

  & > input {
    border: none !important;
    border-radius: ${e=>e.theme.borderRadius} !important;
    box-shadow: none !important;
  }

  & > input:focus {
    border-color: ${e=>e.theme.colors.focusBorder} !important;
    box-shadow: none !important;
  }

  & > .button-text {
    border: none !important;
    border-radius: ${e=>e.theme.borderRadius} !important;
    background-color: ${e=>e.theme.colors.background} !important;
    color: ${e=>e.theme.colors.primary} !important;
    font-weight: 100;
  }

  & > .ui.dropdown {
    border: none !important;
    border-radius: ${e=>e.theme.borderRadius} !important;
    background-color: ${e=>e.theme.colors.background} !important;
    font-weight: 300;
    & > .menu {
      border: none !important;
      border-radius: 12px !important;
      background-color: ${e=>e.theme.colors.background} !important;
      color: ${e=>e.theme.colors.primary} !important;
      font-weight: 100;
      padding: 0.5em 0;
    }
  }
`,A={colors:{primary:"rgba(0, 205, 124, 1)",border:"#ccc",background:"#fff",focusBorder:"#85b7d9",labelColor:"#6B7280"},borderRadius:"20px"},N=({placeholder:e,type:f,onChange:i,buttonText:u,onButtonClick:m,icon:y,iconPosition:h,defaultValue:a="",className:v="",dropdownOptions:d,labelPlaceholder:w,onLabelClick:l,labelDefaultValue:o,...x})=>{const[p,c]=n.useState(a),[k,g]=n.useState(o),[I,b]=n.useState(!1);n.useEffect(()=>{c(a)},[a]),n.useEffect(()=>{g(o)},[o]);const q=(s,t)=>{c(s.target.value),i&&i(s,t)},T=()=>{m&&m(p)},C=(s,t)=>{g(t.value),l&&l(t.value)},E=()=>{b(!1)},R=()=>{b(!0)};return r.jsx(D,{theme:A,children:r.jsx(O,{className:`lt-input ${v}`,placeholder:e,icon:y,type:f,iconPosition:h,value:p,onChange:q,action:u?{content:u,onClick:T,className:"button-text"}:void 0,label:d&&r.jsx(L,{options:d,onChange:C,placeholder:w,onClose:E,onOpen:R,value:k,icon:r.jsx(M,{useReactIcon:!0,reactIconName:I?"MdExpandLess":"MdExpandMore",reactIconSet:"md",size:"small",style:{marginLeft:"0.5em",color:"#0000008A"},color:"#0000008A"})}),...x})})};N.__docgenInfo={description:"",methods:[],displayName:"LtInput",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},iconPosition:{required:!1,tsType:{name:"literal",value:"'left'"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"},{type:{name:"InputOnChangeData"},name:"data"}],return:{name:"void"}}},description:""},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; text: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; text: string; value: string }[]"},description:""},labelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onLabelClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | boolean | (string | number | boolean)[] | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},labelDefaultValue:{required:!1,tsType:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},description:""}}};export{N as L};
