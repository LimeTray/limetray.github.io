import{j as c}from"./jsx-runtime-8ae9c9ad.js";import{r as h}from"./index-04c7fd94.js";import{r as oe}from"./index-4348461f.js";import{g,r as S}from"./styled-components.browser.esm-b57a6336.js";import{T as ie}from"./tickIcon-9f7569d5.js";import{t as B}from"./config-24cd80d3.js";const re=g.div`
  position: relative;
  display: inline-flex;
  overflow: visible;
`,ae=g.div`
  &&& {
    position: fixed;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: ${({theme:e})=>`${e.spacing.xxs}`};
    max-height: ${({$maxHeight:e})=>`${e}px`};
    overflow-y: auto;
    background: ${({theme:e})=>e.colors.white||"#ffffff"};
    border-radius: ${({theme:e})=>e.borderRadius.large};
    box-shadow: ${({theme:e})=>e.shadows.large};
    border: 1px solid ${({theme:e})=>e.colors.border};
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>`${e.colors.mediumGray} transparent`};
  }

  &&& .menu-dropdown__item {
    min-width: 185px;
    padding: ${({theme:e})=>`${e.padding.small} ${e.padding.medium}`};
    border-radius: ${({theme:e})=>e.borderRadius.large};
    cursor: pointer;
    background: transparent;
    border: 0;
    text-align: left;
  }

  &&& .menu-dropdown__item:hover:not(:disabled),
  &&& .menu-dropdown__item:focus-visible:not(:disabled) {
    background-color: ${({$hoverBackgroundColor:e})=>e};
    outline: none;
  }

  &&& .menu-dropdown__item:hover:not(:disabled) .menu-dropdown__item-content,
  &&& .menu-dropdown__item:focus-visible:not(:disabled) .menu-dropdown__item-content {
    color: ${({$hoverContentColor:e})=>e||"inherit"};
  }

  &&& .menu-dropdown__item:hover:not(:disabled) .menu-dropdown__item-tick,
  &&& .menu-dropdown__item:focus-visible:not(:disabled) .menu-dropdown__item-tick {
    color: ${({$hoverContentColor:e,theme:D})=>e||D.colors.primary};
  }

  &&&::-webkit-scrollbar {
    width: 6px;
  }

  &&&::-webkit-scrollbar-track {
    background: transparent;
  }

  &&&::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.mediumGray};
    border-radius: ${({theme:e})=>e.borderRadius.small};
  }

  &&&::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:e})=>e.colors.muted};
  }
`,le=g.div`
  display: inline-flex;
  overflow: visible;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,se=g.div`
  display: inline-flex;
  overflow: visible;
`,de=g.div.attrs({className:"menu-dropdown__item-content"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  color: ${({$contentColor:e,theme:D})=>e||D.colors.text};
`,ce=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,me=g.span.attrs({className:"menu-dropdown__item-icon"})`
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;

  &, & * {
    transition: none !important;
  }
`,ue=g.span`
  color: inherit;
  font-family: ${({theme:e})=>e.typography.body.fontFamily};
  font-size: ${({theme:e})=>e.typography.body.fontSize};
  font-weight: ${({theme:e})=>e.typography.body.fontWeight};
  line-height: ${({theme:e})=>e.typography.body.lineHeight};
  overflow-wrap: anywhere;
`,pe=g(ie).attrs({className:"menu-dropdown__item-tick",fill:"currentColor"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.primary};
`,G=({options:e,triggerComponent:D,pointing:I,className:K,onClick:U,dropdownProps:m,maxHeight:O=300,selectedIndex:R,hoverStyles:x,disabled:C=!1,anchorRef:E})=>{const j=h.useRef(null),F=h.useRef(null),M=h.useRef(null),[u,_]=h.useState(!1),[V,H]=h.useState({visibility:"hidden"}),J=(x==null?void 0:x.backgroundColor)||B.colors.grey||"#F3F4F6",P=x==null?void 0:x.contentColor,Q=()=>{switch(I){case"right":return{side:"left",align:"start"};case"left":return{side:"right",align:"start"};case"bottom":case"bottom left":return{side:"top",align:"start"};case"bottom right":return{side:"top",align:"end"};case"top right":return{side:"bottom",align:"end"};case"top":case"top left":case void 0:return{side:"bottom",align:"start"};default:return{side:"bottom",align:"start"}}},N=(t=!1)=>{_(!1),t&&window.requestAnimationFrame(()=>{var n;return(n=F.current)==null?void 0:n.focus()})},X=t=>{C||(t.preventDefault(),t.stopPropagation(),_(n=>!n))},Y=(t,n)=>r=>{r.preventDefault(),r.stopPropagation(),U(t+1,n),N(!0)},W=()=>{var t;return Array.from(((t=M.current)==null?void 0:t.querySelectorAll(".menu-dropdown__item:not(:disabled)"))||[])},L=t=>{var a;const n=W();if(!n.length)return;const r=n.indexOf(document.activeElement),l=r===-1?t===1?0:n.length-1:(r+t+n.length)%n.length;(a=n[l])==null||a.focus()},Z=t=>t?c.jsx(me,{children:t}):null;h.useLayoutEffect(()=>{if(!u){H({visibility:"hidden"});return}const t=()=>{const l=j.current,a=M.current,k=(E==null?void 0:E.current)||l;if(!l||!a||!k)return;const i=8,p=8,o=k.getBoundingClientRect(),s=a.getBoundingClientRect(),w=Q(),T=window.innerWidth,$=window.innerHeight,b={position:"fixed",maxWidth:`${Math.max(T-i*2,0)}px`,margin:0,visibility:"visible",zIndex:1e4};let d=w.side;if(w.side==="bottom"){const y=o.bottom+p+s.height-($-i),v=o.top-i,A=$-o.bottom-i;y>0&&v>A&&(d="top")}else if(w.side==="top"){const y=i-(o.top-p-s.height),v=$-o.bottom-i,A=o.top-i;y>0&&v>A&&(d="bottom")}else if(w.side==="right"){const y=o.right+p+s.width-(T-i),v=o.left-i;y>0&&v>s.width&&(d="left")}else if(w.side==="left"){const y=i-(o.left-p-s.width),v=T-o.right-i;y>0&&v>s.width&&(d="right")}let f=o.left;d==="bottom"||d==="top"?w.align==="end"?f=o.right-s.width:w.align==="center"&&(f=o.left+(o.width-s.width)/2):d==="right"?f=o.right+p:d==="left"&&(f=o.left-s.width-p);const te=Math.min(Math.max(f,i),Math.max(i,T-i-s.width));let q=o.bottom+p;d==="top"?q=o.top-s.height-p:(d==="right"||d==="left")&&(q=o.top);const ne=Math.min(Math.max(q,i),Math.max(i,$-i-s.height));b.left=`${te}px`,b.top=`${ne}px`,b.right="auto",b.bottom="auto",H(b)};t();const n=window.requestAnimationFrame(t);window.addEventListener("resize",t);const r=l=>{var k;const a=l.target;a&&((k=M.current)!=null&&k.contains(a))||_(!1)};return window.addEventListener("scroll",r,!0),()=>{window.cancelAnimationFrame(n),window.removeEventListener("resize",t),window.removeEventListener("scroll",r,!0)}},[E,O,u,e,I]),h.useLayoutEffect(()=>{if(!u)return;const t=n=>{var l,a;const r=n.target;r&&((l=j.current)!=null&&l.contains(r)||(a=M.current)!=null&&a.contains(r)||_(!1))};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[u]),h.useEffect(()=>{if(!u)return;const t=window.requestAnimationFrame(()=>{var l;const n=W();if(!n.length)return;(l=(typeof R=="number"?n.find(a=>a.getAttribute("data-option-index")===String(R-1)):void 0)||n[0])==null||l.focus()});return()=>window.cancelAnimationFrame(t)},[u,R]);const ee=u&&typeof document<"u"?oe.createPortal(c.jsx(S,{theme:B,children:c.jsx(ae,{ref:M,$maxHeight:O,$hoverBackgroundColor:J,$hoverContentColor:P,className:"menu-dropdown__menu",style:V,role:"listbox",onKeyDown:t=>{t.key==="ArrowDown"?(t.preventDefault(),L(1)):t.key==="ArrowUp"?(t.preventDefault(),L(-1)):t.key==="Escape"&&(t.preventDefault(),N(!0))},children:e.map((t,n)=>{const{leftIcon:r,contentColor:l,text:a,content:k,description:i,flag:p,image:o,label:s,icon:w,as:T,active:$,selected:z,value:b,onClick:d,...f}=t;return h.createElement("button",{...f,key:`menu-dropdown-option-${n}`,type:"button",className:["menu-dropdown__item",f.className].filter(Boolean).join(" "),role:"option","data-option-index":n,"data-value":b!=null?String(b):void 0,"aria-selected":R===n+1||!!$||!!z,disabled:!!f.disabled,onClick:Y(n,t)},c.jsxs(de,{$contentColor:l,children:[c.jsxs(ce,{children:[Z(r),c.jsx(ue,{children:a})]}),R===n+1&&c.jsx(pe,{})]}))})})}),document.body):null;return c.jsx(S,{theme:B,children:c.jsxs(se,{ref:j,id:m==null?void 0:m.id,className:[K,m==null?void 0:m.className].filter(Boolean).join(" ")||void 0,style:m==null?void 0:m.style,children:[c.jsx(re,{ref:F,role:"button",tabIndex:C?-1:0,"aria-haspopup":"listbox","aria-expanded":u,onClick:X,onKeyDown:t=>{if(!C){if(t.key==="ArrowDown"||t.key==="ArrowUp"){t.preventDefault(),u?L(t.key==="ArrowDown"?1:-1):_(!0);return}(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),_(n=>!n)),t.key==="Escape"&&N(!0)}},children:c.jsx(le,{$disabled:C,children:D})}),ee]})})},ve=G;G.__docgenInfo={description:"",methods:[],displayName:"MenuDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MenuDropdownOption"}],raw:"MenuDropdownOption[]"},description:""},triggerComponent:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},pointing:{required:!1,tsType:{name:"union",raw:`| "left"
| "right"
| "top"
| "bottom"
| "top right"
| "top left"
| "bottom right"
| "bottom left"
| undefined`,elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top right"'},{name:"literal",value:'"top left"'},{name:"literal",value:'"bottom right"'},{name:"literal",value:'"bottom left"'},{name:"undefined"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode | undefined",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, option: MenuDropdownOption) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MenuDropdownOption"},name:"option"}],return:{name:"void"}}},description:""},dropdownProps:{required:!1,tsType:{name:"Pick",elements:[{name:"DropdownProps"},{name:"union",raw:'"id" | "className" | "style"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"className"'},{name:"literal",value:'"style"'}]}],raw:'Pick<DropdownProps, "id" | "className" | "style">'},description:"Only `id`, `className`, and `style` are applied to the portaled-menu root."},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},selectedIndex:{required:!1,tsType:{name:"number"},description:""},hoverStyles:{required:!1,tsType:{name:"MenuDropdownHoverStyles"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},anchorRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:""}}};export{ve as M};
