import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as n}from"./index-ad58220e.js";import{I as E}from"./Input-3f8aa787.js";import{D as L}from"./Dropdown-e3088384.js";import{d as j,o as D}from"./styled-components.browser.esm-675ea4f2.js";import{L as O}from"./index-6dcb29cb.js";const A=j(E)`
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
`,B={colors:{primary:"rgba(0, 205, 124, 1)",border:"#ccc",background:"#fff",focusBorder:"#85b7d9",labelColor:"#6B7280"},borderRadius:"20px"},N=({placeholder:e,type:f,onChange:s,buttonText:u,onButtonClick:m,icon:h,iconPosition:y,defaultValue:a="",className:v="",dropdownOptions:d,labelPlaceholder:w,onLabelClick:l,labelDefaultValue:o,...k})=>{const[p,c]=n.useState(a),[x,g]=n.useState(o),[q,b]=n.useState(!1);n.useEffect(()=>{c(a)},[a]),n.useEffect(()=>{g(o)},[o]);const T=(i,t)=>{c(i.target.value),s&&s(i,t)},I=()=>{m&&m(p)},C=(i,t)=>{g(t.value),l&&l(t.value)},$=()=>{b(!1)},R=()=>{b(!0)};return r.jsx(D,{theme:B,children:r.jsx(A,{className:`lt-input ${v}`,placeholder:e,icon:h,type:f,iconPosition:y,value:p,onChange:T,action:u?{content:u,onClick:I,className:"button-text"}:void 0,label:d&&r.jsx(L,{options:d,onChange:C,placeholder:w,onClose:$,onOpen:R,value:x,icon:r.jsx(O,{icon:`chevron ${q?"up":"down"}`,size:"small",style:{marginLeft:"0.5em",color:"#0000008A"},color:"#0000008A"})}),...k})})};N.__docgenInfo={description:"",methods:[],displayName:"LtInput",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},iconPosition:{required:!1,tsType:{name:"literal",value:"'left'"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"},{type:{name:"InputOnChangeData"},name:"data"}],return:{name:"void"}}},description:""},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; text: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; text: string; value: string }[]"},description:""},labelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onLabelClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | boolean | (string | number | boolean)[] | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},labelDefaultValue:{required:!1,tsType:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},description:""}}};export{N as L};
