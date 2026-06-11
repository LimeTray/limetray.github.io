import{j as s}from"./jsx-runtime-8ae9c9ad.js";import{r as b}from"./index-04c7fd94.js";import{g as d,r as Y}from"./styled-components.browser.esm-b57a6336.js";import{D as k}from"./Dropdown-4796e13c.js";import{T as Z}from"./tickIcon-9f7569d5.js";import{t as ee}from"./config-d270d9b6.js";const te=d(k)`
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
      color: ${({$hoverContentColor:e,theme:f})=>e||f.colors.primary};
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
`,ne=d(k.Menu)`
  &&& {
    max-height: ${({$maxHeight:e})=>`${e}px`};
    overflow-y: auto;
  }
`,oe=d.div`
  display: inline-flex;
  overflow: visible;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,re=d.div`
  display: inline-flex;
  overflow: visible;
`,ie=d.div.attrs({className:"menu-dropdown__item-content"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  color: ${({$contentColor:e,theme:f})=>e||f.colors.text};
`,ae=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,se=d.span.attrs({className:"menu-dropdown__item-icon"})`
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;

  &, & * {
    transition: none !important;
  }
`,le=d.span`
  color: inherit;
  font-family: ${({theme:e})=>e.typography.body.fontFamily};
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  font-weight: ${({theme:e})=>e.typography.body.fontWeight};
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  overflow-wrap: anywhere;
`,de=d(Z).attrs({className:"menu-dropdown__item-tick",fill:"currentColor"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.primary};
`,N=({options:e,triggerComponent:f,pointing:$,className:O,onClick:H,dropdownProps:P,maxHeight:j=300,selectedIndex:W,hoverStyles:u,disabled:D=!1,anchorRef:x})=>{const q=b.useRef(null),[M,C]=b.useState(!1),[B,I]=b.useState({}),[S,L]=b.useState(!1),z=(u==null?void 0:u.backgroundColor)||"transparent",G=u==null?void 0:u.contentColor,A=()=>{switch($){case"right":return{side:"left",align:"start"};case"left":return{side:"right",align:"start"};case"bottom":case"bottom left":return{side:"top",align:"start"};case"bottom right":return{side:"top",align:"end"};case"top right":return{side:"bottom",align:"end"};case"top":case"top left":case void 0:return{side:"bottom",align:"start"};default:return{side:"bottom",align:"start"}}},U=()=>$,V=o=>{D||(o.preventDefault(),o.stopPropagation(),C(r=>!r))},F=(o,r)=>h=>{H(o+1,r),C(!1)},J=()=>{C(!1)},K=o=>o?s.jsx(se,{children:o}):null;return b.useLayoutEffect(()=>{if(!M){I({}),L(!1);return}const o=()=>{var E;const r=(E=q.current)==null?void 0:E.querySelector(".ui.dropdown"),h=r==null?void 0:r.querySelector(".menu.visible"),y=(x==null?void 0:x.current)||r;if(!r||!h||!y)return;const t=8,l=8,_=r.getBoundingClientRect(),n=y.getBoundingClientRect(),i=h.getBoundingClientRect(),m=A(),v=window.innerWidth,T=window.innerHeight,g={maxWidth:`${Math.max(v-t*2,0)}px`,margin:0};let a=m.side;if(m.side==="bottom"){const c=n.bottom+l+i.height-(T-t),p=n.top-t;c>0&&p>i.height&&(a="top")}else if(m.side==="top"){const c=t-(n.top-l-i.height),p=T-n.bottom-t;c>0&&p>i.height&&(a="bottom")}else if(m.side==="right"){const c=n.right+l+i.width-(v-t),p=n.left-t;c>0&&p>i.width&&(a="left")}else if(m.side==="left"){const c=t-(n.left-l-i.width),p=v-n.right-t;c>0&&p>i.width&&(a="right")}let w=n.left;a==="bottom"||a==="top"?m.align==="end"?w=n.right-i.width:m.align==="center"&&(w=n.left+(n.width-i.width)/2):a==="right"?w=n.right+l:a==="left"&&(w=n.left-i.width-l);const Q=Math.min(Math.max(w,t),Math.max(t,v-t-i.width));let R=n.bottom+l;a==="top"?R=n.top-i.height-l:(a==="right"||a==="left")&&(R=n.top);const X=Math.min(Math.max(R,t),Math.max(t,T-t-i.height));g.left=`${Q-_.left}px`,g.top=`${X-_.top}px`,g.right="auto",g.bottom="auto",L(a==="top"),I(g)};return o(),window.addEventListener("resize",o),window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("resize",o),window.removeEventListener("scroll",o,!0)}},[x,j,M,e,$]),s.jsx(Y,{theme:ee,children:s.jsx(re,{ref:q,children:s.jsx(te,{...P,$hoverBackgroundColor:z,$hoverContentColor:G,trigger:s.jsx(oe,{$disabled:D,onClick:V,children:f}),open:M,onClose:J,pointing:U(),upward:S,icon:null,className:O,children:s.jsx(ne,{$maxHeight:j,style:B,children:e.map((o,r)=>{const{leftIcon:h,contentColor:y,text:t,...l}=o;return s.jsx(k.Item,{...l,onClick:F(r,o),children:s.jsxs(ie,{$contentColor:y,children:[s.jsxs(ae,{children:[K(h),s.jsx(le,{children:t})]}),W===r+1&&s.jsx(de,{})]})},r)})})})})})},we=N;N.__docgenInfo={description:"",methods:[],displayName:"MenuDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MenuDropdownOption"}],raw:"MenuDropdownOption[]"},description:""},triggerComponent:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},pointing:{required:!1,tsType:{name:"union",raw:`| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"
| undefined`,elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'},{name:"undefined"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode | undefined",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, option: MenuDropdownOption) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MenuDropdownOption"},name:"option"}],return:{name:"void"}}},description:""},dropdownProps:{required:!1,tsType:{name:"DropdownProps"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},selectedIndex:{required:!1,tsType:{name:"number"},description:""},hoverStyles:{required:!1,tsType:{name:"MenuDropdownHoverStyles"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},anchorRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:""}}};export{we as M};
