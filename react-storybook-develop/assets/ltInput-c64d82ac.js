import{j as a}from"./jsx-runtime-8406ef1e.js";import{r as n}from"./index-ad58220e.js";import{I as M}from"./Input-94f4c1a5.js";import{D as V}from"./Dropdown-66d5c8fe.js";import{d as A,l as W,o as B}from"./styled-components.browser.esm-675ea4f2.js";import{L as F}from"./index-f03014ac.js";import{t as H}from"./config-d270d9b6.js";const P=A(M)`
  &&& {
    border: 1px solid ${e=>e.theme.colors.border};
    border-radius: ${e=>e.$borderRadius||e.theme.borderRadius};
    overflow: ${e=>e.label?"visible":"hidden"};
    transition: outline-color 0.2s ease, outline-offset 0.2s ease;

    ${e=>e.$showOutlineOnFocus&&W`
        &:focus-within {
          outline-color: ${e.$outlineColor||e.theme.colors.primary};
          outline-offset: ${e.$outlineOffset||"1.5px"};
          outline-style: ${e.$outlineStyle||"solid"};
          outline-width: ${e.$outlineWidth||"1.5px"};
        }
      `}

    > input {
      border: none;
      border-radius: ${e=>e.$borderRadius||e.theme.borderRadius};
      box-shadow: none;
    }

    > input:focus {
      border-color: ${e=>e.theme.colors.focusBorder};
      box-shadow: none;
    }

    > .button-text {
      border: none;
      border-radius: ${e=>e.$borderRadius||e.theme.borderRadius};
      background-color: ${e=>e.theme.colors.background};
      color: ${e=>e.theme.colors.primary};
      font-weight: 100;
    }

    > .ui.dropdown {
      border: none;
      border-radius: ${e=>e.$borderRadius||e.theme.borderRadius};
      background-color: ${e=>e.theme.colors.background};
      font-weight: 300;
    }

    > .ui.dropdown > .menu {
      border: none;
      border-radius: 12px;
      background-color: ${e=>e.theme.colors.background};
      color: ${e=>e.theme.colors.primary};
      font-weight: 100;
      padding: 0.5em 0;
    }

    > .icon {
      cursor: default;
      position: absolute;
      line-height: 1;
      text-align: center;
      top: 0;
      right: 0;
      margin: 0;
      height: 100%;
      width: 2.67142857em;
      opacity: 0.5;
      transition: opacity 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    > input:focus ~ .icon {
      opacity: 1;
    }

    &[class*='left icon'] > .icon {
      right: auto;
      left: 1px;
    }
  }
`,_=({placeholder:e,type:h,onChange:l,buttonText:u,onButtonClick:d,icon:t,iconPosition:y,borderRadius:v,showOutlineOnFocus:$=!1,outlineColor:w,outlineOffset:x,outlineStyle:q,outlineWidth:T,defaultValue:o="",className:I="",dropdownOptions:m,labelPlaceholder:R,onLabelClick:c,labelDefaultValue:i,...k})=>{const[p,f]=n.useState(o),[C,g]=n.useState(i),[E,b]=n.useState(!1);n.useEffect(()=>{f(o)},[o]),n.useEffect(()=>{g(i)},[i]);const O=(s,r)=>{f(s.target.value),l&&l(s,r)},L=()=>{d&&d(p)},j=(s,r)=>{g(r.value),c&&c(r.value)},N=()=>{b(!1)},S=()=>{b(!0)},D=n.isValidElement(t)?n.cloneElement(t,{className:[t.props.className,"icon"].filter(Boolean).join(" ")}):t;return a.jsx(B,{theme:H,children:a.jsx(P,{className:`lt-input ${I}`,$borderRadius:v,$showOutlineOnFocus:$,$outlineColor:w,$outlineOffset:x,$outlineStyle:q,$outlineWidth:T,placeholder:e,icon:D,type:h,iconPosition:y==="left"?"left":void 0,value:p,onChange:O,action:u?{content:u,onClick:L,className:"button-text"}:void 0,label:m&&a.jsx(V,{options:m,onChange:j,placeholder:R,onClose:N,onOpen:S,value:C,icon:a.jsx(F,{useReactIcon:!0,reactIconName:E?"MdExpandLess":"MdExpandMore",reactIconSet:"md",size:"small",style:{marginLeft:"0.5em",color:"#0000008A"},color:"#0000008A"})}),...k})})};_.__docgenInfo={description:"",methods:[],displayName:"LtInput",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ className?: string }>",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}]},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""},showOutlineOnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},outlineColor:{required:!1,tsType:{name:"string"},description:""},outlineOffset:{required:!1,tsType:{name:"string"},description:""},outlineStyle:{required:!1,tsType:{name:"string"},description:""},outlineWidth:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"},{type:{name:"InputOnChangeData"},name:"data"}],return:{name:"void"}}},description:""},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; text: string; value: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ key: string; text: string; value: string }[]"},description:""},labelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onLabelClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | boolean | (string | number | boolean)[] | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},labelDefaultValue:{required:!1,tsType:{name:"union",raw:"string | number | boolean | (string | number | boolean)[] | undefined",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number | boolean)[]"},{name:"undefined"}]},description:""}}};export{_ as L};
