import{j as t}from"./jsx-runtime-8ae9c9ad.js";import{r as R}from"./index-04c7fd94.js";import{g as o,r as I}from"./styled-components.browser.esm-b57a6336.js";import{D as s}from"./Dropdown-4796e13c.js";import{T as _}from"./tickIcon-9f7569d5.js";import{t as M}from"./config-d270d9b6.js";const q=o(s)`
  &&&.ui.dropdown {
    position: relative;
    display: inline-flex;
    overflow: visible;

    & > .menu {
      z-index: 1000;
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
      color: ${({$hoverContentColor:e,theme:a})=>e||a.colors.primary};
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
`,N=o(s.Menu)`
  &&& {
    max-height: ${({$maxHeight:e})=>`${e}px`};
    overflow-y: auto;
  }
`,O=o.div`
  display: inline-flex;
  overflow: visible;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,H=o.div.attrs({className:"menu-dropdown__item-content"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  color: ${({$contentColor:e,theme:a})=>e||a.colors.text};
`,P=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,z=o.span.attrs({className:"menu-dropdown__item-icon"})`
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
`,B=o(_).attrs({className:"menu-dropdown__item-tick",fill:"currentColor"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.primary};
`,p=({options:e,triggerComponent:a,pointing:c,className:u,onClick:h,dropdownProps:f,maxHeight:g=300,selectedIndex:b,hoverStyles:i,disabled:d=!1})=>{const[w,l]=R.useState(!1),x=(i==null?void 0:i.backgroundColor)||"transparent",y=i==null?void 0:i.contentColor,$=n=>{d||(n.preventDefault(),n.stopPropagation(),l(r=>!r))},v=(n,r)=>m=>{h(n+1,r),l(!1)},k=()=>{l(!1)},C=n=>n?t.jsx(z,{children:n}):null;return t.jsx(I,{theme:M,children:t.jsx(q,{...f,$hoverBackgroundColor:x,$hoverContentColor:y,trigger:t.jsx(O,{$disabled:d,onClick:$,children:a}),open:w,onClose:k,pointing:c,icon:null,className:u,children:t.jsx(N,{$maxHeight:g,children:e.map((n,r)=>{const{leftIcon:m,contentColor:T,text:j,...D}=n;return t.jsx(s.Item,{...D,onClick:v(r,n),children:t.jsxs(H,{$contentColor:T,children:[t.jsxs(P,{children:[C(m),t.jsx(W,{children:j})]}),b===r+1&&t.jsx(B,{})]})},r)})})})})},J=p;p.__docgenInfo={description:"",methods:[],displayName:"MenuDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MenuDropdownOption"}],raw:"MenuDropdownOption[]"},description:""},triggerComponent:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},pointing:{required:!1,tsType:{name:"union",raw:`| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"
| undefined`,elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'},{name:"undefined"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode | undefined",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, option: MenuDropdownOption) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MenuDropdownOption"},name:"option"}],return:{name:"void"}}},description:""},dropdownProps:{required:!1,tsType:{name:"DropdownProps"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},selectedIndex:{required:!1,tsType:{name:"number"},description:""},hoverStyles:{required:!1,tsType:{name:"MenuDropdownHoverStyles"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{J as M};
