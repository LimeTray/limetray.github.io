import{j as t}from"./jsx-runtime-8ae9c9ad.js";import{r as z}from"./index-04c7fd94.js";import{B as N}from"./Button-8d24c33b.js";import{g as u,f as O}from"./styled-components.browser.esm-b57a6336.js";import{M as A}from"./index-61b62994.js";import{L as Y}from"./index-9e8f50bb.js";const h=e=>(e==null?void 0:e.radius)||"24px",K=(e,r)=>{if(!e)return"border: none;";if(r){const{width:n="1px",type:a="solid",color:o="rgb(209, 213, 219)"}=r;return`border: ${n} ${a} ${o};`}return"border: 1px solid rgb(209, 213, 219);"},j={mini:"32px",tiny:"36px",small:"40px",medium:"44px",large:"48px",big:"52px",huge:"56px",massive:"60px"},k={mini:"mini",tiny:"tiny",small:"small",medium:"small",large:"medium",big:"medium",huge:"large",massive:"large"},b=(e="small")=>j[e]||j.small,U=(e="small")=>k[e]||k.small,F=e=>{if(!e)return;const r=e.trim().split(/\s+/);return r.length===1?`${r[0]} 0`:r.length===2?`${r[0]} 0`:r.length===3?`${r[0]} 0 ${r[2]}`:`${r[0]} 0 ${r[2]} 0`},R=()=>O`
  ${e=>e.$backgroundColor&&`background-color: ${e.$backgroundColor};`}
  ${e=>e.$color&&`color: ${e.$color};`}
  ${e=>e.$padding&&`padding: ${e.$padding};`}
  ${e=>e.$width&&`width: ${e.$width};`}

  ${e=>e.$transparent&&`
      background: transparent;
      border: none;
    `}

  ${e=>K(e.$border,e.$borderStyles)}
`,D=u(N)`
  border-radius: 10px;
    
  &&& {
    margin: 0px;
  }

  &&& {
    display: flex;
    flex-direction: row;
    align-items: ${e=>e.$alignItemCenter?"center":"stretch"};
    justify-content: ${e=>e.$justifyItem||"center"};
    gap: ${e=>e.$gap||"10px"};
  }

  &&& {
    ${R()}
  }

  /* Disabled styling */
  ${e=>e.disabled&&`
    &&& {
      cursor: not-allowed;
      opacity: 0.65;
    }
  `}

  /* Border styling */
  ${e=>e.$border?`
        &&& {
          border-radius: ${h(e.$borderStyles)};
        }
      `:""}

  /* Hover effects - only apply when props are provided */
  &:hover:not(:disabled) {
    ${e=>e.$hoverBackgroundColor&&`background-color: ${e.$hoverBackgroundColor};`}
    ${e=>e.$hoverColor&&`color: ${e.$hoverColor};`}
  }
`,J=u.div`
  display: inline-flex;
  align-items: stretch;
  width: ${({$width:e})=>e||"fit-content"};
  overflow: visible;
`,Q=u(D)`
  &&& {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: auto;
    flex: 1;
  }
`,X=u(N)`
  &&& {
    ${R()}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e=>b(e.$buttonSize)};
    max-width: ${e=>b(e.$buttonSize)};
    min-width: ${e=>b(e.$buttonSize)};
    margin: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: ${e=>h(e.$borderStyles)};
    border-bottom-right-radius: ${e=>h(e.$borderStyles)};
    border-left: 1px solid ${e=>e.$color||"rgba(255, 255, 255, 0.35)"};
    padding: ${e=>F(e.$padding)||"0.78571429em 0"};
    box-shadow: none;
  }

  &&&:hover:not(:disabled),
  &&&:focus:not(:disabled) {
    ${e=>e.$hoverBackgroundColor&&`background-color: ${e.$hoverBackgroundColor};`}
    ${e=>e.$hoverColor&&`color: ${e.$hoverColor};`}
  }

  &&& > i.icon {
    margin: 0;
  }
`,M=({label:e,onClick:r,size:n="small",border:a,leftElement:o,rightElement:s,transparent:l=!1,disabled:i=!1,customStyles:_,className:E,id:v,alignItemCenter:c=!1,justifyItem:x,gap:w,backgroundColor:m,color:p,hoverBackgroundColor:g,hoverColor:$,padding:f,width:T,borderStyles:y,menuDropdownOptions:d,onMenuDropdownClick:q,menuDropdownSelectedIndex:H,menuDropdownPointing:L,menuDropdownHoverStyles:V,menuDropdownIcon:G,menuDropdownMaxHeight:P,menuDropdownClassName:W,...B})=>{const S=z.useRef(null),Z=!!(d!=null&&d.length&&q),C=["ltButton",l?"transparent":"",i?"disabled":"",a?"border":"",c?"alignItemCenter":"",E].filter(Boolean).join(" "),I={..._};return Z?t.jsxs(J,{ref:S,$width:T,children:[t.jsxs(Q,{id:v,className:C,size:n,onClick:r,style:I,disabled:i,$alignItemCenter:c,$transparent:l,$border:a,$backgroundColor:m,$color:p,$hoverBackgroundColor:g,$hoverColor:$,$padding:f,$justifyItem:x,$gap:w,$borderStyles:y,...B,children:[o&&t.jsx("span",{className:"leftElement",children:o}),e&&t.jsx("span",{className:"label",children:e}),s&&t.jsx("span",{className:"rightElement",children:s})]}),t.jsx(A,{options:d||[],onClick:q||(()=>{}),selectedIndex:H,pointing:L,hoverStyles:V,maxHeight:P,disabled:i,anchorRef:S,className:W,triggerComponent:t.jsx(X,{type:"button",size:n,disabled:i,$buttonSize:n,$transparent:l,$border:a,$backgroundColor:m,$color:p,$hoverBackgroundColor:g,$hoverColor:$,$padding:f,$borderStyles:y,children:G||t.jsx(Y,{useReactIcon:!0,reactIconName:"MdKeyboardArrowDown",reactIconSet:"md",size:U(n)})})})]}):t.jsxs(D,{id:v,className:C,size:n,onClick:r,style:I,disabled:i,$alignItemCenter:c,$transparent:l,$border:a,$backgroundColor:m,$color:p,$hoverBackgroundColor:g,$hoverColor:$,$padding:f,$width:T,$justifyItem:x,$gap:w,$borderStyles:y,...B,children:[o&&t.jsx("span",{className:"leftElement",children:o}),e&&t.jsx("span",{className:"label",children:e}),s&&t.jsx("span",{className:"rightElement",children:s})]})},ie=M;M.__docgenInfo={description:"",methods:[],displayName:"LtButton",props:{label:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:'"small"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:""},leftElement:{required:!1,tsType:{name:"ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactNode"},description:""},transparent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},alignItemCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},justifyItem:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:""},gap:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},hoverBackgroundColor:{required:!1,tsType:{name:"string"},description:""},hoverColor:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},borderStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string;
  type?: string;
  color?: string;
  radius?: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"radius",value:{name:"string",required:!1}}]}},description:""},menuDropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"MenuDropdownOption"}],raw:"MenuDropdownOption[]"},description:""},onMenuDropdownClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number, option: MenuDropdownOption) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MenuDropdownOption"},name:"option"}],return:{name:"void"}}},description:""},menuDropdownSelectedIndex:{required:!1,tsType:{name:"number"},description:""},menuDropdownPointing:{required:!1,tsType:{name:"union",raw:`| undefined
| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"`,elements:[{name:"undefined"},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'}]},description:""},menuDropdownHoverStyles:{required:!1,tsType:{name:"MenuDropdownHoverStyles"},description:""},menuDropdownIcon:{required:!1,tsType:{name:"ReactNode"},description:""},menuDropdownMaxHeight:{required:!1,tsType:{name:"number"},description:""},menuDropdownClassName:{required:!1,tsType:{name:"string"},description:""}}};export{ie as L};
