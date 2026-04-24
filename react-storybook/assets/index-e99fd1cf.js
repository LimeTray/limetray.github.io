import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as R}from"./index-ad58220e.js";import{d as o,o as D}from"./styled-components.browser.esm-675ea4f2.js";import{D as s}from"./Dropdown-50ab2943.js";import{T as I}from"./tickIcon-5d45ebc5.js";import{t as _}from"./config-43c6afbd.js";const M=o(s)`
  &&&.ui.dropdown {
    & > .menu {
      margin-top: ${({theme:e})=>e.spacing.xs};
      border-radius: ${({theme:e})=>e.borderRadius.large};
      box-shadow: ${({theme:e})=>e.shadows.large};
      border: 1px solid ${({theme:e})=>e.colors.border};
      scrollbar-width: thin;
      scrollbar-color: ${({theme:e})=>`${e.colors.mediumGray} transparent`};
    }

    & > .menu::after {
      display: none;
      content: none;
    }

    & > .menu.transition.visible {
      padding: ${({theme:e})=>`${e.spacing.xxs}`};
    }

    & > .menu > .item {
      min-width: 185px;
      padding: ${({theme:e})=>`${e.padding.small} ${e.padding.medium} !important`};
      border-radius: ${({theme:e})=>e.borderRadius.large};
    }

    & > .menu > .item:last-child {
      border-bottom: none;
    }

    & > .menu > .item:hover {
      background-color: ${({$hoverBackgroundColor:e})=>e};
    }

    & > .menu > .item:hover .menu-dropdown__item-content {
      color: ${({$hoverContentColor:e})=>e||"inherit"};
    }

    & > .menu > .item:hover .menu-dropdown__item-tick {
      color: ${({$hoverContentColor:e,theme:i})=>e||i.colors.primary};
    }

    & > .menu::-webkit-scrollbar {
      width: 6px;
    }

    & > .menu::-webkit-scrollbar-track {
      background: transparent;
    }

    & > .menu::-webkit-scrollbar-thumb {
      background-color: ${({theme:e})=>e.colors.mediumGray};
      border-radius: ${({theme:e})=>e.borderRadius.small};
    }

    & > .menu::-webkit-scrollbar-thumb:hover {
      background-color: ${({theme:e})=>e.colors.muted};
    }
  }
`,q=o(s.Menu)`
  &&& {
    max-height: ${({$maxHeight:e})=>`${e}px`};
    overflow-y: auto;
  }
`,N=o.div`
  display: inline-flex;
`,O=o.div.attrs({className:"menu-dropdown__item-content"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  color: ${({$contentColor:e,theme:i})=>e||i.colors.text};
`,H=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,P=o.span.attrs({className:"menu-dropdown__item-icon"})`
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;

  &, & * {
    transition: none !important;
  }
`,W=o.span`
  color: inherit;
  font-family: ${({theme:e})=>e.typography.body.fontFamily};
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  font-weight: ${({theme:e})=>e.typography.body.fontWeight};
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  overflow-wrap: anywhere;
`,z=o(I).attrs({className:"menu-dropdown__item-tick",fill:"currentColor"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.primary};
`,l=({options:e,triggerComponent:i,pointing:p,className:c,onClick:u,dropdownProps:h,maxHeight:g=300,selectedIndex:f,hoverStyles:r})=>{const[b,d]=R.useState(!1),w=()=>d(t=>!t),x=(r==null?void 0:r.backgroundColor)||"transparent",y=r==null?void 0:r.contentColor,$=(t,a)=>m=>{u(t+1,a)},k=()=>{d(!1)},C=t=>t?n.jsx(P,{children:t}):null;return n.jsx(D,{theme:_,children:n.jsx(M,{...h,$hoverBackgroundColor:x,$hoverContentColor:y,trigger:n.jsx(N,{onClick:w,children:i}),open:b,onClose:k,pointing:p,icon:null,className:c,children:n.jsx(q,{$maxHeight:g,children:e.map((t,a)=>{const{leftIcon:m,contentColor:v,text:T,...j}=t;return n.jsx(s.Item,{...j,onClick:$(a,t),children:n.jsxs(O,{$contentColor:v,children:[n.jsxs(H,{children:[C(m),n.jsx(W,{children:T})]}),f===a+1&&n.jsx(z,{})]})},a)})})})})},V=l;l.__docgenInfo={description:"",methods:[],displayName:"MenuDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MenuDropdownOption"}],raw:"MenuDropdownOption[]"},description:""},triggerComponent:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},pointing:{required:!1,tsType:{name:"union",raw:`| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"
| undefined`,elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'},{name:"undefined"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode | undefined",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, option: MenuDropdownOption) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MenuDropdownOption"},name:"option"}],return:{name:"void"}}},description:""},dropdownProps:{required:!1,tsType:{name:"DropdownProps"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},selectedIndex:{required:!1,tsType:{name:"number"},description:""},hoverStyles:{required:!1,tsType:{name:"MenuDropdownHoverStyles"},description:""}}};export{V as M};
