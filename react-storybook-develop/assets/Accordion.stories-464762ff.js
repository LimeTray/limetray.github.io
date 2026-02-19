import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as B,R as ee}from"./index-ad58220e.js";import{A as k}from"./Accordion-e0594750.js";import{d as l,o as Ke}from"./styled-components.browser.esm-675ea4f2.js";import{L as P}from"./index-58bb9209.js";import{t as Qe}from"./config-43c6afbd.js";import{u as et}from"./ThemeContext-71b3bf8d.js";import{M as q}from"./index-7ab335d0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./getElementType-0ca87dce.js";import"./inheritsLoose-5494d9cc.js";import"./map-db19bd84.js";import"./childrenUtils-250e70c5.js";import"./factories-d6e88bd9.js";import"./without-bae35c35.js";import"./includes-03b4ffc2.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./ModernAutoControlledComponent-ac79fba3.js";import"./assertThisInitialized-081f9914.js";import"./Icon-5cfe3eb1.js";import"./Button-a1cbfca3.js";import"./Label-78d4db42.js";import"./htmlPropsUtils-e61b253b.js";import"./Portal-392918f3.js";import"./Dropdown-afea43b0.js";import"./isEmpty-f7f0c885.js";import"./deburr-8ac57e57.js";import"./pick-7736bb65.js";import"./_baseSet-4a5e4309.js";import"./index-e8ec4132.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-5d45ebc5.js";const tt=l(k)`
  &.ui.fluid.accordion {
    border-radius: ${({theme:e})=>e.borderRadius.xlarge};
    overflow: visible;
    box-shadow: none;
    border-left: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
    border-right: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
    border-bottom: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
  }

  &.ui.styled.accordion.ui.styled.accordion .title {
    border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
    padding: ${({theme:e})=>e.spacing.sm} 1.5rem ${({theme:e})=>e.spacing.sm} 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBgSecondary:t.colors.grey};
  }

  &.ui.styled.accordion .content {
    padding: 0px;
    background: transparent;
  }

  &.ui.styled.accordion .accordion .content {
    padding: 0px;
    background: transparent;
  }

  &.ui.fluid.accordion.ui.fluid.accordion .accordion {
    box-shadow: none;
    background: transparent;
  }

  &.ui.card > .content p {
    margin: 0px;
  }
`,ot=l(k)`
  &.ui.accordion.ui.accordion {
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: ${({$childrenGap:e})=>e||"0px"};
  }
`,nt=l(k.Title)`
  /* Styles applied via StyledAccordion */
  display: flex;
  align-items: center;
  gap: 8px;
  ${({$isFirst:e,theme:t})=>e&&`
    border-top-left-radius: ${t.borderRadius.xlarge};
    border-top-right-radius: ${t.borderRadius.xlarge};
  `}
  ${({$isLastClosed:e,theme:t})=>e&&`
    border-bottom-left-radius: ${t.borderRadius.xlarge};
    border-bottom-right-radius: ${t.borderRadius.xlarge};
  `}
`,it=l.div`
  flex: 1;
  display: flex;
  align-items: center;
`,rt=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,st=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
  color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeText:t.colors.text};
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.medium};
  min-width: 24px;
  height: 20px;
`,at=l(k.Title)`
  &.icon-position-child.icon-position-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({isSelected:e,darkMode:t,theme:r})=>e?t?r.colors.darkModeBorder:"#E8F5E9":t?r.colors.darkModeBg:r.colors.white};
    border-top: ${({$hideBorders:e,darkMode:t,theme:r})=>e?"none":`1px solid ${t?r.colors.darkModeBorder:r.colors.border}`};
    cursor: pointer;
    transition: background-color 0.2s ease;
    ${({$roundedBottom:e,theme:t})=>e&&`
      border-bottom-left-radius: ${t.borderRadius.xlarge};
      border-bottom-right-radius: ${t.borderRadius.xlarge};
    `}
    
    &:hover {
      background-color: ${({isSelected:e,darkMode:t,theme:r})=>e?t?r.colors.darkModeBorder:"#E8F5E9":t?r.colors.darkModeBorder:"#F5F5F5"};
    }
  }
`,lt=l.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.sm} 1.5rem;
  background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBg:t.colors.white};
  border-top: ${({$hideBorders:e,darkMode:t,theme:r})=>e?"none":`1px solid ${t?r.colors.darkModeBorder:r.colors.border}`};
  cursor: pointer;
  ${({$roundedBottom:e,theme:t})=>e&&`
    border-bottom-left-radius: ${t.borderRadius.xlarge};
    border-bottom-right-radius: ${t.borderRadius.xlarge};
  `}
`,z=l.span`
  font-size: ${({isChild:e})=>e?"14px":"16px"};
  font-weight: 400;
  color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeText:t.colors.text};
`,te=l.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`,oe=l(P)`
  &&& {
    color: ${({isOpen:e,darkMode:t,theme:r})=>e?r.colors.primary:t?r.colors.darkModeText:r.colors.text};
  }
`,dt=l.p`
  && {
    padding: 1.5rem;
    background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBgSecondary:t.colors.grey};
    margin: 0px;
    border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
    color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeText:t.colors.text};
    ${({$roundedBottom:e,theme:t})=>e&&`
      border-bottom-left-radius: ${t.borderRadius.xlarge};
      border-bottom-right-radius: ${t.borderRadius.xlarge};
    `}
  }
`,ct=l.p`
  padding: 1.5rem;
  background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBgSecondary:t.colors.grey};
  border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
  color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeText:t.colors.text};
  ${({$roundedBottom:e,theme:t})=>e&&`
    border-bottom-left-radius: ${t.borderRadius.xlarge};
    border-bottom-right-radius: ${t.borderRadius.xlarge};
  `}
`,pt=l.button`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.sm} 1.5rem;
  background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBg:t.colors.white};
  border: none;
  border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
  color: ${({theme:e})=>e.colors.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
  ${({$roundedBottom:e,theme:t})=>e&&`
    border-bottom-left-radius: ${t.borderRadius.xlarge};
    border-bottom-right-radius: ${t.borderRadius.xlarge};
  `}
  
  &:hover {
    background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:"#F5F5F5"};
  }
  
  &:focus {
    outline: none;
  }
`,ut=l.div`
  width: 100%;
  border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
  background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBg:t.colors.white};
  ${({$roundedBottom:e,theme:t})=>e&&`
    border-bottom-left-radius: ${t.borderRadius.xlarge};
    border-bottom-right-radius: ${t.borderRadius.xlarge};
    overflow: hidden;
  `}
`;function mt(){let[e,t]=B.useState(!0);return()=>t(!e)}const ze=({data:e,defaultOpenSection:t=-1,defaultOpenAll:r=!1,exclusive:s=!1,showChildrenCount:m=!1,onChildClick:O,childrenGap:D,hideBorders:j=!1})=>{const a=et().theme==="dark",[d,w]=B.useState({}),[G,Ge]=B.useState({}),[g,Ve]=B.useState(null),E=mt();B.useEffect(()=>{const n={};e.forEach((p,c)=>{n[c]=n[c]||{isOpened:!1,childIndex:{}},p.children&&p.children.forEach((S,W)=>{n[c].childIndex[W]={isOpened:!1}})}),Ge(n);const i=JSON.parse(JSON.stringify(n));r?e.forEach((p,c)=>{i[c].isOpened=!0}):t!==-1&&(i[t].isOpened=!0),w(i)},[]);const Je=n=>{if(s&&!d[n].isOpened){const i=JSON.parse(JSON.stringify(G));return i[n].isOpened=!0,w(i),E()}return d[n].isOpened=!d[n].isOpened,w(d),E()},_e=(n,i)=>{if(s&&!d[n].childIndex[i].isOpened){const p=JSON.parse(JSON.stringify(G));return p[n].isOpened=!0,p[n].childIndex[i].isOpened=!0,w(p),E()}return d[n].childIndex[i].isOpened=!d[n].childIndex[i].isOpened,w(d),E()},Ue=n=>{Je(n)},V=(n,i)=>{var p,c;if(_e(n,i),Ve({parentIndex:n,childIndex:i}),O){const S=(c=(p=e[n])==null?void 0:p.children)==null?void 0:c[i];S&&O(n,i,S)}};return o.jsx(Ke,{theme:Qe,children:o.jsx(tt,{fluid:!0,styled:!0,className:"lt-accordian",darkMode:a,children:e.map((n,i)=>{var J,_,U,X,H,Y;const p=i===0,c=i===e.length-1,S=(J=d[i])==null?void 0:J.isOpened,W=!!(n.bottomComponent||n.bottomButton),Xe=!!(n.children&&n.children.length>0),He=c&&!Xe&&!W;return o.jsxs(ee.Fragment,{children:[o.jsxs(nt,{active:(_=d[i])==null?void 0:_.isOpened,index:i,id:n.id,onClick:()=>Ue(i),className:"round-border",darkMode:a,$isFirst:p,$isLastClosed:c&&!S,children:[o.jsx(it,{children:typeof n.title=="string"?o.jsx(z,{darkMode:a,children:n.title}):n.title}),o.jsxs(rt,{children:[m&&(n.childrenCount!==void 0||n.children&&n.children.length>0)&&o.jsx(st,{darkMode:a,children:n.childrenCount!==void 0?n.childrenCount:(U=n.children)==null?void 0:U.length}),o.jsx(te,{children:o.jsx(oe,{useReactIcon:!0,reactIconName:(X=d[i])!=null&&X.isOpened?"MdExpandLess":"MdExpandMore",reactIconSet:"md",fitted:!0,isOpen:(H=d[i])==null?void 0:H.isOpened,darkMode:a,size:"small"})})]})]}),o.jsxs(k.Content,{active:(Y=d[i])==null?void 0:Y.isOpened,children:[n.content&&o.jsx(dt,{darkMode:a,$roundedBottom:He,children:n.content}),n.children&&o.jsx(ot,{className:"lt-child-accordian",fluid:!0,styled:!0,darkMode:a,$childrenGap:D,children:n.children.map((u,h)=>{var Z,K,Q;const Ye=u.expandable!==!1&&u.content,Ze=h===n.children.length-1,T=c&&!W&&Ze;if(!Ye)return o.jsx(lt,{darkMode:a,$hideBorders:j,$roundedBottom:T,onClick:()=>V(i,h),children:typeof u.title=="string"?o.jsx(z,{isChild:!0,darkMode:a,children:u.title}):u.title},h);const f=(Q=(K=(Z=d[i])==null?void 0:Z.childIndex)==null?void 0:K[h])==null?void 0:Q.isOpened;return o.jsxs(ee.Fragment,{children:[o.jsxs(at,{id:u.id,className:"icon-position-child",active:!!f,index:h,onClick:()=>V(i,h),darkMode:a,$hideBorders:j,$roundedBottom:T&&!f,isSelected:(g==null?void 0:g.parentIndex)===i&&(g==null?void 0:g.childIndex)===h,children:[typeof u.title=="string"?o.jsx(z,{isChild:!0,darkMode:a,children:u.title}):u.title,o.jsx(te,{children:o.jsx(oe,{useReactIcon:!0,reactIconName:f?"MdExpandLess":"MdExpandMore",reactIconSet:"md",fitted:!0,isOpen:!!f,darkMode:a,size:"small"})})]}),o.jsx(k.Content,{active:!!f,children:o.jsx(ct,{darkMode:a,$roundedBottom:T&&!!f,children:u.content})})]},h)})}),n.bottomComponent?o.jsx(ut,{darkMode:a,$roundedBottom:c,children:n.bottomComponent}):n.bottomButton?o.jsx(pt,{darkMode:a,$roundedBottom:c,onClick:n.bottomButton.onClick,children:n.bottomButton.label}):null]})]},i)})})})},v=ze;ze.__docgenInfo={description:"",methods:[],displayName:"LtAccordion",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: React.ReactNode;
  content: string | React.JSX.Element | null;
  id?: string;
  children?: NestedItem[];
  childrenCount?: number;
  bottomButton?: {
    label: string;
    onClick: () => void;
  };
  bottomComponent?: React.ReactNode; // Custom component to render at the bottom (overrides bottomButton)
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!0}},{key:"id",value:{name:"string",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: React.ReactNode;
  content?: string | React.JSX.Element | null;
  id?: string;
  expandable?: boolean; // If false, content shows inline without expansion
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"expandable",value:{name:"boolean",required:!1}}]}}],raw:"NestedItem[]",required:!1}},{key:"childrenCount",value:{name:"number",required:!1}},{key:"bottomButton",value:{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}},{key:"bottomComponent",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"AccordionItem[]"},description:""},defaultOpenSection:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-1",computed:!1}},defaultOpenAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},exclusive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showChildrenCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChildClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(parentIndex: number, childIndex: number, child: NestedItem) => void",signature:{arguments:[{type:{name:"number"},name:"parentIndex"},{type:{name:"number"},name:"childIndex"},{type:{name:"signature",type:"object",raw:`{
  title: React.ReactNode;
  content?: string | React.JSX.Element | null;
  id?: string;
  expandable?: boolean; // If false, content shows inline without expansion
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"expandable",value:{name:"boolean",required:!1}}]}},name:"child"}],return:{name:"void"}}},description:""},childrenGap:{required:!1,tsType:{name:"string"},description:""},hideBorders:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Zt={title:"LtAccordion",component:v,tags:["autodocs"]},ht=[{title:"Parent Item 1",content:null,children:[{title:"Nested Item 1.1",content:null},{title:"Nested Item 1.2",content:"Content for Nested Item 1.2"}]}],xt=[{title:"Parent Item 1",content:o.jsx("div",{children:"Content for Parent Item 1"}),children:[{title:"Nested Item 1.1",content:o.jsx("div",{children:"Content for Nested Item 1.1"})},{title:"Nested Item 1.2",content:o.jsx("div",{children:"Content for Nested Item 1.2"})}]},{title:"Parent Item 2",content:o.jsx("div",{children:"Content for Parent Item 2"}),children:[{title:"Nested Item 2.1",content:o.jsx("div",{children:"Content for Nested Item 2.1"})},{title:"Nested Item 2.2",content:"Content for Nested Item 2.2"}]},{title:"Parent Item 3",content:"Content for Parent Item 3",children:[{title:"Nested Item 3.1",content:"Content for Nested Item 3.1"},{title:"Nested Item 3.2",content:"Content for Nested Item 3.2"}]}],gt=[{title:"Parent Item 3",content:"Content for Parent Item 3"}],x=e=>o.jsx(v,{...e}),R=x.bind({});R.args={data:xt,defaultOpenSection:0,exclusive:!0};const I=x.bind({});I.args={data:gt};const A=x.bind({});A.args={data:ht,exclusive:!0};const b=x.bind({});b.args={data:[{title:"Header",content:"Service Selector",children:[{title:"Service 1",expandable:!1}]},{title:"Body",content:null,children:[{title:"Body Item 1",expandable:!1},{title:"Body Item 2",expandable:!1},{title:"Body Item 3",expandable:!1}]},{title:"Footer",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"FAB (Floating Action Bar)",expandable:!1},{title:"Guest Continue CTA",expandable:!1}]}],defaultOpenAll:!0,showChildrenCount:!0};const C=x.bind({});C.args={data:[{title:"Header",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"Logo",expandable:!1},{title:"Search Bar",expandable:!1}]},{title:"Body",content:null,children:[{title:"Hero Section",expandable:!1},{title:"Features Grid",expandable:!1},{title:"Testimonials",expandable:!1},{title:"Call to Action",expandable:!1}]}],defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"8px",hideBorders:!0};const y=()=>{const e=({icon:O,title:D,subtitle:j})=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("div",{style:{fontSize:"20px",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",borderRadius:"8px"},children:O}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:D}),j&&o.jsx("div",{style:{fontSize:"12px",color:"#666"},children:j})]})]}),t=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 17L12 22L22 17",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 12L12 17L22 12",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),r=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"#2196F3",strokeWidth:"2"}),o.jsx("line",{x1:"8",y1:"9",x2:"16",y2:"9",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"8",y1:"13",x2:"16",y2:"13",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"8",y1:"17",x2:"12",y2:"17",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"})]}),s=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M3 3V21H21",stroke:"#FF9800",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M7 14L11 10L15 14L20 9",stroke:"#FF9800",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),m=[{title:"Components",content:null,children:[{title:o.jsx(e,{icon:o.jsx(t,{}),title:"Design System",subtitle:"UI components and patterns"}),expandable:!1},{title:o.jsx(e,{icon:o.jsx(r,{}),title:"Forms",subtitle:"Input fields and validation"}),expandable:!1},{title:o.jsx(e,{icon:o.jsx(s,{}),title:"Charts",subtitle:"Data visualization"}),expandable:!1}]},{title:"Features",content:null,children:[{title:o.jsx(e,{icon:"🔐",title:"Authentication",subtitle:"Login & security"}),expandable:!1},{title:o.jsx(e,{icon:"💳",title:"Payments",subtitle:"Billing integration"}),expandable:!1},{title:o.jsx(e,{icon:"📧",title:"Notifications",subtitle:"Email & push alerts"}),expandable:!1}]}];return o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",color:"#666"},children:["Children can be any React component, not just plain text!",o.jsx("br",{}),"Icons can be React components (SVG, LtIcon, etc.) or emoji strings."]}),o.jsx(v,{data:m,defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"8px",hideBorders:!0})]})},L=x.bind({});L.args={data:[{title:"Header",content:"Service Selector",children:[{title:"Service 1",expandable:!1}]},{title:"Body",content:null,children:[{title:"Body Item 1",expandable:!1},{title:"Body Item 2",expandable:!1},{title:"Body Item 3",expandable:!1},{title:"Body Item 4",expandable:!1},{title:"Body Item 5",expandable:!1},{title:"Body Item 6",expandable:!1}]},{title:"Footer",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"FAB (Floating Action Bar)",expandable:!1},{title:"Guest Continue CTA",expandable:!1}]}],defaultOpenSection:1,showChildrenCount:!0};const $=x.bind({});$.args={data:[{title:"Services",content:"Manage your services",children:[{title:"Service 1",expandable:!1},{title:"Service 2",expandable:!1},{title:"Service 3",expandable:!1}],bottomButton:{label:"+ Add New Service",onClick:()=>alert("Add new service clicked!")}},{title:"Products",content:"Manage your products",children:[{title:"Product 1",expandable:!1},{title:"Product 2",expandable:!1}],bottomButton:{label:"+ Add New Product",onClick:()=>alert("Add new product clicked!")}}],defaultOpenSection:0,showChildrenCount:!0};const N=()=>{const e=(r,s,m)=>{console.log("Child clicked:",{parentIndex:r,childIndex:s,child:m}),alert(`Selected: ${m.title}
Parent Index: ${r}
Child Index: ${s}`)},t=[{title:"Categories",content:"Select a category",children:[{title:"Category 1",id:"cat-1",expandable:!1},{title:"Category 2",id:"cat-2",expandable:!1},{title:"Category 3",id:"cat-3",expandable:!1}]},{title:"Items",content:null,children:[{title:"Item A",id:"item-a",expandable:!1},{title:"Item B",id:"item-b",expandable:!1},{title:"Item C",id:"item-c",expandable:!1},{title:"Item D",id:"item-d",expandable:!1}]}];return o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"16px",color:"#666"},children:"Click on any child item to see it highlighted with a green background!"}),o.jsx(v,{data:t,defaultOpenSection:1,showChildrenCount:!0,onChildClick:e})]})},M=()=>{const e=({sectionName:r})=>o.jsxs("div",{style:{padding:"16px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",backgroundColor:"#f9f9f9"},children:[o.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:o.jsxs("span",{style:{fontSize:"14px",color:"#666"},children:["📊 ",r," Statistics"]})}),o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("button",{onClick:()=>alert(`View ${r} analytics`),style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#fff",border:"1px solid #ddd",borderRadius:"4px",cursor:"pointer"},children:"View Analytics"}),o.jsx("button",{onClick:()=>alert(`Export ${r} data`),style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Export"})]})]}),t=[{title:"User Management",content:"Manage user accounts and permissions",children:[{title:"Admin Users",expandable:!1},{title:"Regular Users",expandable:!1},{title:"Guest Users",expandable:!1}],bottomComponent:o.jsx(e,{sectionName:"User"})},{title:"Content",content:null,children:[{title:"Articles",expandable:!1},{title:"Media Files",expandable:!1},{title:"Comments",expandable:!1},{title:"Categories",expandable:!1}],bottomComponent:o.jsx(e,{sectionName:"Content"})},{title:"Settings",content:null,children:[{title:"General",expandable:!1},{title:"Security",expandable:!1}],bottomButton:{label:"+ Add New Setting",onClick:()=>alert("Add setting")}}];return o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",color:"#666",backgroundColor:"#f0f8ff",padding:"12px",borderRadius:"4px"},children:[o.jsx("strong",{children:"Note:"})," The first two sections use a custom React component at the bottom with multiple buttons, while the third section uses the default bottomButton. You can use either approach!"]}),o.jsx(v,{data:t,defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"4px",hideBorders:!0})]})},F=()=>{const e=[{text:"Edit",icon:"edit",id:"edit"},{text:"Delete",icon:"trash",id:"delete"},{text:"Duplicate",icon:"copy",id:"duplicate"}],t=(s,m)=>{alert(`Selected ${s}: ${m.text}`)},r=[{title:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsx("span",{children:"Header with Actions"}),o.jsx("div",{onClick:s=>s.stopPropagation(),children:o.jsx(q,{options:e,triggerComponent:o.jsx(P,{useReactIcon:!0,reactIconSet:"fa",reactIconName:"FaEllipsisV",size:"small",style:{cursor:"pointer",margin:0,padding:"4px"}}),onClick:t,pointing:"top right"})})]}),content:"This accordion section has a MenuDropdown in its header."},{title:"Content with Actions",content:null,children:[{title:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsx("span",{children:"Child Item 1"}),o.jsx("div",{onClick:s=>s.stopPropagation(),children:o.jsx(q,{options:e,triggerComponent:o.jsx(P,{useReactIcon:!0,reactIconSet:"fa",reactIconName:"FaEllipsisV",size:"small",style:{cursor:"pointer",margin:0,padding:"4px"}}),onClick:t,pointing:"top right"})})]}),expandable:!1},{title:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsx("span",{children:"Child Item 2"}),o.jsx("div",{onClick:s=>s.stopPropagation(),children:o.jsx(q,{options:e,triggerComponent:o.jsx(P,{useReactIcon:!0,reactIconSet:"fa",reactIconName:"FaEllipsisV",size:"small",style:{cursor:"pointer",margin:0,padding:"4px"}}),onClick:t,pointing:"top right"})})]}),expandable:!1}]}];return o.jsx("div",{children:o.jsx(v,{data:r,defaultOpenAll:!0})})};y.__docgenInfo={description:`Children as React Components
Demonstrates using custom React components as child titles
Icons can be React components (like LtIcon) or emojis`,methods:[],displayName:"WithReactComponentChildren"};N.__docgenInfo={description:"",methods:[],displayName:"WithChildSelection"};M.__docgenInfo={description:"",methods:[],displayName:"WithCustomBottomComponent"};F.__docgenInfo={description:"",methods:[],displayName:"WithMenuDropdown"};var ne,ie,re;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(re=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,ae,le;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(le=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var de,ce,pe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(pe=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,he,xe,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(he=(me=b.parameters)==null?void 0:me.docs)==null?void 0:he.source},description:{story:`Open All Sections By Default
All accordion sections are expanded on initial load`,...(ge=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ge.description}}};var fe,be,Ce,ye,ke;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(Ce=(be=C.parameters)==null?void 0:be.docs)==null?void 0:Ce.source},description:{story:`With Gaps Between Children
Shows children with spacing between them instead of borders`,...(ke=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:ke.description}}};var ve,je,we,Se,Be;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const CustomChildComponent = ({
    icon,
    title,
    subtitle
  }: {
    icon: React.ReactNode; // Can be emoji string OR React component
    title: string;
    subtitle?: string;
  }) => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      <div style={{
      fontSize: '20px',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px'
    }}>
        {icon}
      </div>
      <div>
        <div style={{
        fontWeight: 500
      }}>{title}</div>
        {subtitle && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>{subtitle}</div>}
      </div>
    </div>;

  // Example custom icon components
  const DesignIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
  const FormIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2196F3" strokeWidth="2" />
      <line x1="8" y1="9" x2="16" y2="9" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="17" x2="12" y2="17" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
    </svg>;
  const ChartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 3V21H21" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 14L11 10L15 14L20 9" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
  const data: AccordionItem[] = [{
    title: "Components",
    content: null,
    children: [{
      title: <CustomChildComponent icon={<DesignIcon />} // React component as icon
      title="Design System" subtitle="UI components and patterns" />,
      expandable: false
    }, {
      title: <CustomChildComponent icon={<FormIcon />} // React component as icon
      title="Forms" subtitle="Input fields and validation" />,
      expandable: false
    }, {
      title: <CustomChildComponent icon={<ChartIcon />} // React component as icon
      title="Charts" subtitle="Data visualization" />,
      expandable: false
    }]
  }, {
    title: "Features",
    content: null,
    children: [{
      title: <CustomChildComponent icon="🔐" // Emoji string
      title="Authentication" subtitle="Login & security" />,
      expandable: false
    }, {
      title: <CustomChildComponent icon="💳" // Emoji string
      title="Payments" subtitle="Billing integration" />,
      expandable: false
    }, {
      title: <CustomChildComponent icon="📧" // Emoji string
      title="Notifications" subtitle="Email & push alerts" />,
      expandable: false
    }]
  }];
  return <div>
      <p style={{
      marginBottom: '16px',
      color: '#666'
    }}>
        Children can be any React component, not just plain text!<br />
        Icons can be React components (SVG, LtIcon, etc.) or emoji strings.
      </p>
      <LtAccordion data={data} defaultOpenAll={true} showChildrenCount={true} childrenGap="8px" hideBorders={true} />
    </div>;
}`,...(we=(je=y.parameters)==null?void 0:je.docs)==null?void 0:we.source},description:{story:`Children as React Components
Demonstrates using custom React components as child titles
Icons can be React components (like LtIcon) or emojis`,...(Be=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Be.description}}};var Re,Ie,Ae;L.parameters={...L.parameters,docs:{...(Re=L.parameters)==null?void 0:Re.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(Ae=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var Le,$e,Ne;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(Ne=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Ne.source}}};var Me,Fe,Oe;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const handleChildClick = (parentIndex: number, childIndex: number, child: any) => {
    console.log('Child clicked:', {
      parentIndex,
      childIndex,
      child
    });
    alert(\`Selected: \${child.title}\\nParent Index: \${parentIndex}\\nChild Index: \${childIndex}\`);
  };
  const data: AccordionItem[] = [{
    title: "Categories",
    content: "Select a category",
    children: [{
      title: "Category 1",
      id: "cat-1",
      expandable: false
    }, {
      title: "Category 2",
      id: "cat-2",
      expandable: false
    }, {
      title: "Category 3",
      id: "cat-3",
      expandable: false
    }]
  }, {
    title: "Items",
    content: null,
    children: [{
      title: "Item A",
      id: "item-a",
      expandable: false
    }, {
      title: "Item B",
      id: "item-b",
      expandable: false
    }, {
      title: "Item C",
      id: "item-c",
      expandable: false
    }, {
      title: "Item D",
      id: "item-d",
      expandable: false
    }]
  }];
  return <div>
      <p style={{
      marginBottom: '16px',
      color: '#666'
    }}>
        Click on any child item to see it highlighted with a green background!
      </p>
      <LtAccordion data={data} defaultOpenSection={1} showChildrenCount={true} onChildClick={handleChildClick} />
    </div>;
}`,...(Oe=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var Ee,We,Pe;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const CustomFooter = ({
    sectionName
  }: {
    sectionName: string;
  }) => <div style={{
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    backgroundColor: '#f9f9f9'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span style={{
        fontSize: '14px',
        color: '#666'
      }}>
          📊 {sectionName} Statistics
        </span>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <button onClick={() => alert(\`View \${sectionName} analytics\`)} style={{
        padding: '6px 12px',
        fontSize: '13px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          View Analytics
        </button>
        <button onClick={() => alert(\`Export \${sectionName} data\`)} style={{
        padding: '6px 12px',
        fontSize: '13px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Export
        </button>
      </div>
    </div>;
  const data: AccordionItem[] = [{
    title: "User Management",
    content: "Manage user accounts and permissions",
    children: [{
      title: "Admin Users",
      expandable: false
    }, {
      title: "Regular Users",
      expandable: false
    }, {
      title: "Guest Users",
      expandable: false
    }],
    bottomComponent: <CustomFooter sectionName="User" />
  }, {
    title: "Content",
    content: null,
    children: [{
      title: "Articles",
      expandable: false
    }, {
      title: "Media Files",
      expandable: false
    }, {
      title: "Comments",
      expandable: false
    }, {
      title: "Categories",
      expandable: false
    }],
    bottomComponent: <CustomFooter sectionName="Content" />
  }, {
    title: "Settings",
    content: null,
    children: [{
      title: "General",
      expandable: false
    }, {
      title: "Security",
      expandable: false
    }],
    // This section uses the default bottomButton instead
    bottomButton: {
      label: "+ Add New Setting",
      onClick: () => alert("Add setting")
    }
  }];
  return <div>
      <p style={{
      marginBottom: '16px',
      color: '#666',
      backgroundColor: '#f0f8ff',
      padding: '12px',
      borderRadius: '4px'
    }}>
        <strong>Note:</strong> The first two sections use a custom React component at the bottom with multiple buttons,
        while the third section uses the default bottomButton. You can use either approach!
      </p>
      <LtAccordion data={data} defaultOpenAll={true} showChildrenCount={true} childrenGap="4px" hideBorders={true} />
    </div>;
}`,...(Pe=(We=M.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var De,Te,qe;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const options = [{
    text: "Edit",
    icon: "edit",
    id: "edit"
  }, {
    text: "Delete",
    icon: "trash",
    id: "delete"
  }, {
    text: "Duplicate",
    icon: "copy",
    id: "duplicate"
  }];
  const handleMenuClick = (index: number, option: DropdownItemProps) => {
    alert(\`Selected \${index}: \${option.text}\`);
  };
  const data: AccordionItem[] = [{
    title: <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    }}>
          <span>Header with Actions</span>
          <div onClick={e => e.stopPropagation()}>
            <MenuDropdown options={options} triggerComponent={<LtIcon useReactIcon reactIconSet="fa" reactIconName='FaEllipsisV' size='small' style={{
          cursor: 'pointer',
          margin: 0,
          padding: '4px'
        }} />} onClick={handleMenuClick} pointing="top right" />
          </div>
        </div>,
    content: "This accordion section has a MenuDropdown in its header."
  }, {
    title: "Content with Actions",
    content: null,
    children: [{
      title: <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }}>
              <span>Child Item 1</span>
              <div onClick={e => e.stopPropagation()}>
                <MenuDropdown options={options} triggerComponent={<LtIcon useReactIcon reactIconSet="fa" reactIconName='FaEllipsisV' size='small' style={{
            cursor: 'pointer',
            margin: 0,
            padding: '4px'
          }} />} onClick={handleMenuClick} pointing="top right" />
              </div>
            </div>,
      expandable: false
    }, {
      title: <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }}>
              <span>Child Item 2</span>
              <div onClick={e => e.stopPropagation()}>
                <MenuDropdown options={options} triggerComponent={<LtIcon useReactIcon reactIconSet="fa" reactIconName='FaEllipsisV' size='small' style={{
            cursor: 'pointer',
            margin: 0,
            padding: '4px'
          }} />} onClick={handleMenuClick} pointing="top right" />
              </div>
            </div>,
      expandable: false
    }]
  }];
  return <div>
      <LtAccordion data={data} defaultOpenAll={true} />
    </div>;
}`,...(qe=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};const Kt=["Default","WithoutNestedItems","SingleAccordion","DefaultOpenAll","WithChildrenGaps","WithReactComponentChildren","WithChildrenCount","WithBottomButton","WithChildSelection","WithCustomBottomComponent","WithMenuDropdown"];export{R as Default,b as DefaultOpenAll,A as SingleAccordion,$ as WithBottomButton,N as WithChildSelection,L as WithChildrenCount,C as WithChildrenGaps,M as WithCustomBottomComponent,F as WithMenuDropdown,y as WithReactComponentChildren,I as WithoutNestedItems,Kt as __namedExportsOrder,Zt as default};
