import{j as t}from"./jsx-runtime-8ae9c9ad.js";import{B as k}from"./Button-8d24c33b.js";import{g as u,f as z}from"./styled-components.browser.esm-f4af7a4c.js";import{M as O}from"./index-bbb1e5b1.js";import{L as W}from"./index-c3b335ed.js";const b=e=>(e==null?void 0:e.radius)||"24px",A=(e,r)=>{if(!e)return"border: none;";if(r){const{width:n="1px",type:a="solid",color:o="rgb(209, 213, 219)"}=r;return`border: ${n} ${a} ${o};`}return"border: 1px solid rgb(209, 213, 219);"},I={mini:"32px",tiny:"36px",small:"40px",medium:"44px",large:"48px",big:"52px",huge:"56px",massive:"60px"},j={mini:"mini",tiny:"tiny",small:"small",medium:"small",large:"medium",big:"medium",huge:"large",massive:"large"},h=(e="small")=>I[e]||I.small,Y=(e="small")=>j[e]||j.small,K=e=>{if(!e)return;const r=e.trim().split(/\s+/);return r.length===1?`${r[0]} 0`:r.length===2?`${r[0]} 0`:r.length===3?`${r[0]} 0 ${r[2]}`:`${r[0]} 0 ${r[2]} 0`},N=()=>z`
  ${e=>e.$backgroundColor&&`background-color: ${e.$backgroundColor};`}
  ${e=>e.$color&&`color: ${e.$color};`}
  ${e=>e.$padding&&`padding: ${e.$padding};`}
  ${e=>e.$width&&`width: ${e.$width};`}

  ${e=>e.$transparent&&`
      background: transparent;
      border: none;
    `}

  ${e=>A(e.$border,e.$borderStyles)}
`,D=u(k)`
  border-radius: 10px;
  margin: 0px;

  &&& {
    display: flex;
    flex-direction: row;
    align-items: ${e=>e.$alignItemCenter?"center":"stretch"};
    justify-content: ${e=>e.$justifyItem||"center"};
    gap: ${e=>e.$gap||"10px"};
  }

  &&& {
    ${N()}
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
          border-radius: ${b(e.$borderStyles)};
        }
      `:""}

  /* Hover effects - only apply when props are provided */
  &:hover:not(:disabled) {
    ${e=>e.$hoverBackgroundColor&&`background-color: ${e.$hoverBackgroundColor};`}
    ${e=>e.$hoverColor&&`color: ${e.$hoverColor};`}
  }
`,U=u.div`
  display: inline-flex;
  align-items: stretch;
  width: ${({$width:e})=>e||"fit-content"};
  overflow: visible;
`,F=u(D)`
  &&& {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: auto;
    flex: 1;
  }
`,J=u(k)`
  &&& {
    ${N()}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e=>h(e.$buttonSize)};
    max-width: ${e=>h(e.$buttonSize)};
    min-width: ${e=>h(e.$buttonSize)};
    margin: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: ${e=>b(e.$borderStyles)};
    border-bottom-right-radius: ${e=>b(e.$borderStyles)};
    border-left: 1px solid ${e=>e.$color||"rgba(255, 255, 255, 0.35)"};
    padding: ${e=>K(e.$padding)||"0.78571429em 0"};
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
`,R=({label:e,onClick:r,size:n="small",border:a,leftElement:o,rightElement:s,transparent:l=!1,disabled:i=!1,customStyles:M,className:_,id:v,alignItemCenter:c=!1,justifyItem:x,gap:w,backgroundColor:m,color:p,hoverBackgroundColor:g,hoverColor:$,padding:f,width:T,borderStyles:y,menuDropdownOptions:d,onMenuDropdownClick:q,menuDropdownSelectedIndex:E,menuDropdownPointing:H="top right",menuDropdownHoverStyles:L,menuDropdownIcon:V,menuDropdownMaxHeight:G,menuDropdownClassName:P,...S})=>{const Z=!!(d!=null&&d.length&&q),B=["ltButton",l?"transparent":"",i?"disabled":"",a?"border":"",c?"alignItemCenter":"",_].filter(Boolean).join(" "),C={...M};return Z?t.jsxs(U,{$width:T,children:[t.jsxs(F,{id:v,className:B,size:n,onClick:r,style:C,disabled:i,$alignItemCenter:c,$transparent:l,$border:a,$backgroundColor:m,$color:p,$hoverBackgroundColor:g,$hoverColor:$,$padding:f,$justifyItem:x,$gap:w,$borderStyles:y,...S,children:[o&&t.jsx("span",{className:"leftElement",children:o}),e&&t.jsx("span",{className:"label",children:e}),s&&t.jsx("span",{className:"rightElement",children:s})]}),t.jsx(O,{options:d||[],onClick:q||(()=>{}),selectedIndex:E,pointing:H,hoverStyles:L,maxHeight:G,disabled:i,className:P,triggerComponent:t.jsx(J,{type:"button",size:n,disabled:i,$buttonSize:n,$transparent:l,$border:a,$backgroundColor:m,$color:p,$hoverBackgroundColor:g,$hoverColor:$,$padding:f,$borderStyles:y,children:V||t.jsx(W,{useReactIcon:!0,reactIconName:"MdKeyboardArrowDown",reactIconSet:"md",size:Y(n)})})})]}):t.jsxs(D,{id:v,className:B,size:n,onClick:r,style:C,disabled:i,$alignItemCenter:c,$transparent:l,$border:a,$backgroundColor:m,$color:p,$hoverBackgroundColor:g,$hoverColor:$,$padding:f,$width:T,$justifyItem:x,$gap:w,$borderStyles:y,...S,children:[o&&t.jsx("span",{className:"leftElement",children:o}),e&&t.jsx("span",{className:"label",children:e}),s&&t.jsx("span",{className:"rightElement",children:s})]})},ne=R;R.__docgenInfo={description:"",methods:[],displayName:"LtButton",props:{label:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:'"small"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:""},leftElement:{required:!1,tsType:{name:"ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactNode"},description:""},transparent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},alignItemCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},justifyItem:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:""},gap:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},hoverBackgroundColor:{required:!1,tsType:{name:"string"},description:""},hoverColor:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},borderStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string;
  type?: string;
  color?: string;
  radius?: string;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"radius",value:{name:"string",required:!1}}]}},description:""},menuDropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"MenuDropdownOption"}],raw:"MenuDropdownOption[]"},description:""},onMenuDropdownClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number, option: MenuDropdownOption) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MenuDropdownOption"},name:"option"}],return:{name:"void"}}},description:""},menuDropdownSelectedIndex:{required:!1,tsType:{name:"number"},description:""},menuDropdownPointing:{required:!1,tsType:{name:"union",raw:`| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"`,elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'}]},description:"",defaultValue:{value:'"top right"',computed:!1}},menuDropdownHoverStyles:{required:!1,tsType:{name:"MenuDropdownHoverStyles"},description:""},menuDropdownIcon:{required:!1,tsType:{name:"ReactNode"},description:""},menuDropdownMaxHeight:{required:!1,tsType:{name:"number"},description:""},menuDropdownClassName:{required:!1,tsType:{name:"string"},description:""}}};export{ne as L};
