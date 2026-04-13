import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as j}from"./index-ad58220e.js";import{d as t,o as R}from"./styled-components.browser.esm-675ea4f2.js";import{D as a}from"./Dropdown-66d5c8fe.js";import{T as I}from"./tickIcon-5d45ebc5.js";import{t as C}from"./config-43c6afbd.js";const D=t(a)`
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
`,M=t(a.Menu)`
  &&& {
    max-height: ${({$maxHeight:e})=>`${e}px`};
    overflow-y: auto;
  }
`,q=t.div`
  display: inline-flex;
`,N=t.div.attrs({className:"menu-dropdown__item-content"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  color: ${({$contentColor:e,theme:i})=>e||i.colors.text};
`,O=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,_=t.span`
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;
`,S=t.span`
  color: inherit;
  font-family: ${({theme:e})=>e.typography.body.fontFamily};
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  font-weight: ${({theme:e})=>e.typography.body.fontWeight};
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  overflow-wrap: anywhere;
`,H=t(I).attrs(({theme:e})=>({fill:e.colors.primary}))`
  flex-shrink: 0;
`,m=({options:e,triggerComponent:i,pointing:p,className:c,onClick:u,dropdownProps:h,maxHeight:g=300,selectedIndex:f,hoverBackgroundColor:b="transparent"})=>{const[s,l]=j.useState(!1),y=()=>l(!s),w=(r,o)=>d=>{u(r+1,o)},x=()=>{l(!1)},$=r=>r?n.jsx(_,{children:r}):null;return n.jsx(R,{theme:C,children:n.jsx(D,{...h,$hoverBackgroundColor:b,trigger:n.jsx(q,{onClick:y,children:i}),open:s,onClose:x,pointing:p,icon:null,className:c,children:n.jsx(M,{$maxHeight:g,children:e.map((r,o)=>{const{leftIcon:d,contentColor:v,text:k,...T}=r;return n.jsx(a.Item,{...T,onClick:w(o,r),children:n.jsxs(N,{$contentColor:v,children:[n.jsxs(O,{children:[$(d),n.jsx(S,{children:k})]}),f===o+1&&n.jsx(H,{})]})},o)})})})})},V=m;m.__docgenInfo={description:"",methods:[],displayName:"MenuDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MenuDropdownOption"}],raw:"MenuDropdownOption[]"},description:""},triggerComponent:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},pointing:{required:!1,tsType:{name:"union",raw:`| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"
| undefined`,elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'},{name:"undefined"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode | undefined",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, option: MenuDropdownOption) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MenuDropdownOption"},name:"option"}],return:{name:"void"}}},description:""},dropdownProps:{required:!1,tsType:{name:"DropdownProps"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},selectedIndex:{required:!1,tsType:{name:"number"},description:""},hoverBackgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"transparent"',computed:!1}}}};export{V as M};
