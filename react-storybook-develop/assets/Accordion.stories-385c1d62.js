import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as B,R as Q}from"./index-ad58220e.js";import{A as y}from"./Accordion-9e957a93.js";import{d as l,o as Ze}from"./styled-components.browser.esm-675ea4f2.js";import{L as P}from"./index-90e0ca33.js";import{t as Ke}from"./config-d270d9b6.js";import{u as Qe}from"./ThemeContext-71b3bf8d.js";import{M as q}from"./index-cdbe7236.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./clsx.m-64db5d3b.js";import"./getElementType-727593ce.js";import"./inheritsLoose-5494d9cc.js";import"./map-61d3de0c.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./invoke-834bb7a1.js";import"./without-5fd6c2fa.js";import"./factories-499f84ec.js";import"./includes-83c43633.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./Icon-7990d6af.js";import"./Button-4d423377.js";import"./Label-7a818bf9.js";import"./htmlPropsUtils-fd491f3d.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Dropdown-50ab2943.js";import"./isEmpty-38656364.js";import"./deburr-dcf23c3e.js";import"./pick-19a3cad7.js";import"./_baseSet-c85e4edd.js";import"./index-d2fcf037.js";import"./_arrayReduce-865b0d3f.js";import"./tickIcon-5d45ebc5.js";const et=l(y)`
  &.ui.fluid.accordion {
    border-radius: ${({theme:t})=>t.borderRadius.xlarge};
    overflow: visible;
    box-shadow: none;
    border-left: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
    border-right: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
    border-bottom: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
  }

  &.ui.styled.accordion.ui.styled.accordion .title {
    border-top: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
    padding: ${({theme:t})=>t.spacing.sm} 1.5rem ${({theme:t})=>t.spacing.sm} 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBgSecondary:e.colors.grey};
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
`,tt=l(y)`
  &.ui.accordion.ui.accordion {
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: ${({$childrenGap:t})=>t||"0px"};
  }
`,ot=l(y.Title)`
  /* Styles applied via StyledAccordion */
  display: flex;
  align-items: center;
  gap: 8px;
  ${({$isFirst:t,theme:e})=>t&&`
    border-top-left-radius: ${e.borderRadius.xlarge};
    border-top-right-radius: ${e.borderRadius.xlarge};
  `}
  ${({$isLastClosed:t,theme:e})=>t&&`
    border-bottom-left-radius: ${e.borderRadius.xlarge};
    border-bottom-right-radius: ${e.borderRadius.xlarge};
  `}
`,nt=l.div`
  flex: 1;
  display: flex;
  align-items: center;
`,it=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,rt=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
  color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeText:e.colors.text};
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: ${({theme:t})=>t.borderRadius.medium};
  min-width: 24px;
  height: 20px;
`,st=l(y.Title)`
  &.icon-position-child.icon-position-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({isSelected:t,darkMode:e,theme:r})=>t?e?r.colors.darkModeBorder:"#E8F5E9":e?r.colors.darkModeBg:r.colors.white};
    border-top: ${({$hideBorders:t,darkMode:e,theme:r})=>t?"none":`1px solid ${e?r.colors.darkModeBorder:r.colors.border}`};
    cursor: pointer;
    transition: background-color 0.2s ease;
    ${({$roundedBottom:t,theme:e})=>t&&`
      border-bottom-left-radius: ${e.borderRadius.xlarge};
      border-bottom-right-radius: ${e.borderRadius.xlarge};
    `}
    
    &:hover {
      background-color: ${({isSelected:t,darkMode:e,theme:r})=>t?e?r.colors.darkModeBorder:"#E8F5E9":e?r.colors.darkModeBorder:"#F5F5F5"};
    }
  }
`,at=l.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({theme:t})=>t.spacing.sm} 1.5rem;
  background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBg:e.colors.white};
  border-top: ${({$hideBorders:t,darkMode:e,theme:r})=>t?"none":`1px solid ${e?r.colors.darkModeBorder:r.colors.border}`};
  cursor: pointer;
  ${({$roundedBottom:t,theme:e})=>t&&`
    border-bottom-left-radius: ${e.borderRadius.xlarge};
    border-bottom-right-radius: ${e.borderRadius.xlarge};
  `}
`,z=l.span`
  font-size: ${({isChild:t})=>t?"14px":"16px"};
  font-weight: 400;
  color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeText:e.colors.text};
`,ee=l.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`,te=l(P)`
  &&& {
    color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeText:e.colors.text};
  }
`,lt=l.p`
  && {
    padding: 1.5rem;
    background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBgSecondary:e.colors.grey};
    margin: 0px;
    border-top: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
    color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeText:e.colors.text};
    ${({$roundedBottom:t,theme:e})=>t&&`
      border-bottom-left-radius: ${e.borderRadius.xlarge};
      border-bottom-right-radius: ${e.borderRadius.xlarge};
    `}
  }
`,dt=l.p`
  padding: 1.5rem;
  background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBgSecondary:e.colors.grey};
  border-top: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
  color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeText:e.colors.text};
  ${({$roundedBottom:t,theme:e})=>t&&`
    border-bottom-left-radius: ${e.borderRadius.xlarge};
    border-bottom-right-radius: ${e.borderRadius.xlarge};
  `}
`,ct=l.button`
  width: 100%;
  padding: ${({theme:t})=>t.spacing.sm} 1.5rem;
  background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBg:e.colors.white};
  border: none;
  border-top: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
  color: ${({theme:t})=>t.colors.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
  ${({$roundedBottom:t,theme:e})=>t&&`
    border-bottom-left-radius: ${e.borderRadius.xlarge};
    border-bottom-right-radius: ${e.borderRadius.xlarge};
  `}
  
  &:hover {
    background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:"#F5F5F5"};
  }
  
  &:focus {
    outline: none;
  }
`,pt=l.div`
  width: 100%;
  border-top: 1px solid ${({darkMode:t,theme:e})=>t?e.colors.darkModeBorder:e.colors.border};
  background-color: ${({darkMode:t,theme:e})=>t?e.colors.darkModeBg:e.colors.white};
  ${({$roundedBottom:t,theme:e})=>t&&`
    border-bottom-left-radius: ${e.borderRadius.xlarge};
    border-bottom-right-radius: ${e.borderRadius.xlarge};
    overflow: hidden;
  `}
`;function ut(){let[t,e]=B.useState(!0);return()=>e(!t)}const qe=({data:t,defaultOpenSection:e=-1,defaultOpenAll:r=!1,exclusive:s=!1,showChildrenCount:m=!1,onChildClick:O,childrenGap:D,hideBorders:v=!1})=>{const a=Qe().theme==="dark",[c,j]=B.useState({}),[G,ze]=B.useState({}),[g,Ge]=B.useState(null),E=ut();B.useEffect(()=>{const n={};t.forEach((p,d)=>{n[d]=n[d]||{isOpened:!1,childIndex:{}},p.children&&p.children.forEach((w,W)=>{n[d].childIndex[W]={isOpened:!1}})}),ze(n);const i=JSON.parse(JSON.stringify(n));r?t.forEach((p,d)=>{i[d].isOpened=!0}):e!==-1&&(i[e].isOpened=!0),j(i)},[]);const Ve=n=>{if(s&&!c[n].isOpened){const i=JSON.parse(JSON.stringify(G));return i[n].isOpened=!0,j(i),E()}return c[n].isOpened=!c[n].isOpened,j(c),E()},Je=(n,i)=>{if(s&&!c[n].childIndex[i].isOpened){const p=JSON.parse(JSON.stringify(G));return p[n].isOpened=!0,p[n].childIndex[i].isOpened=!0,j(p),E()}return c[n].childIndex[i].isOpened=!c[n].childIndex[i].isOpened,j(c),E()},_e=n=>{Ve(n)},V=(n,i)=>{var p,d;if(Je(n,i),Ge({parentIndex:n,childIndex:i}),O){const w=(d=(p=t[n])==null?void 0:p.children)==null?void 0:d[i];w&&O(n,i,w)}};return o.jsx(Ze,{theme:Ke,children:o.jsx(et,{fluid:!0,styled:!0,className:"lt-accordian",darkMode:a,children:t.map((n,i)=>{var J,_,U,X,H;const p=i===0,d=i===t.length-1,w=(J=c[i])==null?void 0:J.isOpened,W=!!(n.bottomComponent||n.bottomButton),Ue=!!(n.children&&n.children.length>0),Xe=d&&!Ue&&!W;return o.jsxs(Q.Fragment,{children:[o.jsxs(ot,{active:(_=c[i])==null?void 0:_.isOpened,index:i,id:n.id,onClick:()=>_e(i),className:"round-border",darkMode:a,$isFirst:p,$isLastClosed:d&&!w,children:[o.jsx(nt,{children:typeof n.title=="string"?o.jsx(z,{darkMode:a,children:n.title}):n.title}),o.jsxs(it,{children:[m&&(n.childrenCount!==void 0||n.children&&n.children.length>0)&&o.jsx(rt,{darkMode:a,children:n.childrenCount!==void 0?n.childrenCount:(U=n.children)==null?void 0:U.length}),o.jsx(ee,{children:o.jsx(te,{useReactIcon:!0,reactIconName:(X=c[i])!=null&&X.isOpened?"MdExpandLess":"MdExpandMore",reactIconSet:"md",fitted:!0,darkMode:a,size:"small"})})]})]}),o.jsxs(y.Content,{active:(H=c[i])==null?void 0:H.isOpened,children:[n.content&&o.jsx(lt,{darkMode:a,$roundedBottom:Xe,children:n.content}),n.children&&o.jsx(tt,{className:"lt-child-accordian",fluid:!0,styled:!0,darkMode:a,$childrenGap:D,children:n.children.map((u,h)=>{var Y,Z,K;const He=u.expandable!==!1&&u.content,Ye=h===n.children.length-1,T=d&&!W&&Ye;if(!He)return o.jsx(at,{darkMode:a,$hideBorders:v,$roundedBottom:T,onClick:()=>V(i,h),children:typeof u.title=="string"?o.jsx(z,{isChild:!0,darkMode:a,children:u.title}):u.title},h);const S=(K=(Z=(Y=c[i])==null?void 0:Y.childIndex)==null?void 0:Z[h])==null?void 0:K.isOpened;return o.jsxs(Q.Fragment,{children:[o.jsxs(st,{id:u.id,className:"icon-position-child",active:!!S,index:h,onClick:()=>V(i,h),darkMode:a,$hideBorders:v,$roundedBottom:T&&!S,isSelected:(g==null?void 0:g.parentIndex)===i&&(g==null?void 0:g.childIndex)===h,children:[typeof u.title=="string"?o.jsx(z,{isChild:!0,darkMode:a,children:u.title}):u.title,o.jsx(ee,{children:o.jsx(te,{useReactIcon:!0,reactIconName:S?"MdExpandLess":"MdExpandMore",reactIconSet:"md",fitted:!0,darkMode:a,size:"small"})})]}),o.jsx(y.Content,{active:!!S,children:o.jsx(dt,{darkMode:a,$roundedBottom:T&&!!S,children:u.content})})]},h)})}),n.bottomComponent?o.jsx(pt,{darkMode:a,$roundedBottom:d,children:n.bottomComponent}):n.bottomButton?o.jsx(ct,{darkMode:a,$roundedBottom:d,onClick:n.bottomButton.onClick,children:n.bottomButton.label}):null]})]},i)})})})},k=qe;qe.__docgenInfo={description:"",methods:[],displayName:"LtAccordion",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"expandable",value:{name:"boolean",required:!1}}]}},name:"child"}],return:{name:"void"}}},description:""},childrenGap:{required:!1,tsType:{name:"string"},description:""},hideBorders:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const eo={title:"LtAccordion",component:k,tags:["autodocs"]},mt=[{title:"Parent Item 1",content:null,children:[{title:"Nested Item 1.1",content:null},{title:"Nested Item 1.2",content:"Content for Nested Item 1.2"}]}],ht=[{title:"Parent Item 1",content:o.jsx("div",{children:"Content for Parent Item 1"}),children:[{title:"Nested Item 1.1",content:o.jsx("div",{children:"Content for Nested Item 1.1"})},{title:"Nested Item 1.2",content:o.jsx("div",{children:"Content for Nested Item 1.2"})}]},{title:"Parent Item 2",content:o.jsx("div",{children:"Content for Parent Item 2"}),children:[{title:"Nested Item 2.1",content:o.jsx("div",{children:"Content for Nested Item 2.1"})},{title:"Nested Item 2.2",content:"Content for Nested Item 2.2"}]},{title:"Parent Item 3",content:"Content for Parent Item 3",children:[{title:"Nested Item 3.1",content:"Content for Nested Item 3.1"},{title:"Nested Item 3.2",content:"Content for Nested Item 3.2"}]}],xt=[{title:"Parent Item 3",content:"Content for Parent Item 3"}],x=t=>o.jsx(k,{...t}),R=x.bind({});R.args={data:ht,defaultOpenSection:0,exclusive:!0};const I=x.bind({});I.args={data:xt};const A=x.bind({});A.args={data:mt,exclusive:!0};const f=x.bind({});f.args={data:[{title:"Header",content:"Service Selector",children:[{title:"Service 1",expandable:!1}]},{title:"Body",content:null,children:[{title:"Body Item 1",expandable:!1},{title:"Body Item 2",expandable:!1},{title:"Body Item 3",expandable:!1}]},{title:"Footer",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"FAB (Floating Action Bar)",expandable:!1},{title:"Guest Continue CTA",expandable:!1}]}],defaultOpenAll:!0,showChildrenCount:!0};const b=x.bind({});b.args={data:[{title:"Header",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"Logo",expandable:!1},{title:"Search Bar",expandable:!1}]},{title:"Body",content:null,children:[{title:"Hero Section",expandable:!1},{title:"Features Grid",expandable:!1},{title:"Testimonials",expandable:!1},{title:"Call to Action",expandable:!1}]}],defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"8px",hideBorders:!0};const C=()=>{const t=({icon:O,title:D,subtitle:v})=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("div",{style:{fontSize:"20px",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",borderRadius:"8px"},children:O}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:D}),v&&o.jsx("div",{style:{fontSize:"12px",color:"#666"},children:v})]})]}),e=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 17L12 22L22 17",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 12L12 17L22 12",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),r=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"#2196F3",strokeWidth:"2"}),o.jsx("line",{x1:"8",y1:"9",x2:"16",y2:"9",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"8",y1:"13",x2:"16",y2:"13",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"8",y1:"17",x2:"12",y2:"17",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"})]}),s=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M3 3V21H21",stroke:"#FF9800",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M7 14L11 10L15 14L20 9",stroke:"#FF9800",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),m=[{title:"Components",content:null,children:[{title:o.jsx(t,{icon:o.jsx(e,{}),title:"Design System",subtitle:"UI components and patterns"}),expandable:!1},{title:o.jsx(t,{icon:o.jsx(r,{}),title:"Forms",subtitle:"Input fields and validation"}),expandable:!1},{title:o.jsx(t,{icon:o.jsx(s,{}),title:"Charts",subtitle:"Data visualization"}),expandable:!1}]},{title:"Features",content:null,children:[{title:o.jsx(t,{icon:"🔐",title:"Authentication",subtitle:"Login & security"}),expandable:!1},{title:o.jsx(t,{icon:"💳",title:"Payments",subtitle:"Billing integration"}),expandable:!1},{title:o.jsx(t,{icon:"📧",title:"Notifications",subtitle:"Email & push alerts"}),expandable:!1}]}];return o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",color:"#666"},children:["Children can be any React component, not just plain text!",o.jsx("br",{}),"Icons can be React components (SVG, LtIcon, etc.) or emoji strings."]}),o.jsx(k,{data:m,defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"8px",hideBorders:!0})]})},L=x.bind({});L.args={data:[{title:"Header",content:"Service Selector",children:[{title:"Service 1",expandable:!1}]},{title:"Body",content:null,children:[{title:"Body Item 1",expandable:!1},{title:"Body Item 2",expandable:!1},{title:"Body Item 3",expandable:!1},{title:"Body Item 4",expandable:!1},{title:"Body Item 5",expandable:!1},{title:"Body Item 6",expandable:!1}]},{title:"Footer",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"FAB (Floating Action Bar)",expandable:!1},{title:"Guest Continue CTA",expandable:!1}]}],defaultOpenSection:1,showChildrenCount:!0};const $=x.bind({});$.args={data:[{title:"Services",content:"Manage your services",children:[{title:"Service 1",expandable:!1},{title:"Service 2",expandable:!1},{title:"Service 3",expandable:!1}],bottomButton:{label:"+ Add New Service",onClick:()=>alert("Add new service clicked!")}},{title:"Products",content:"Manage your products",children:[{title:"Product 1",expandable:!1},{title:"Product 2",expandable:!1}],bottomButton:{label:"+ Add New Product",onClick:()=>alert("Add new product clicked!")}}],defaultOpenSection:0,showChildrenCount:!0};const N=()=>{const t=(r,s,m)=>{console.log("Child clicked:",{parentIndex:r,childIndex:s,child:m}),alert(`Selected: ${m.title}
Parent Index: ${r}
Child Index: ${s}`)},e=[{title:"Categories",content:"Select a category",children:[{title:"Category 1",id:"cat-1",expandable:!1},{title:"Category 2",id:"cat-2",expandable:!1},{title:"Category 3",id:"cat-3",expandable:!1}]},{title:"Items",content:null,children:[{title:"Item A",id:"item-a",expandable:!1},{title:"Item B",id:"item-b",expandable:!1},{title:"Item C",id:"item-c",expandable:!1},{title:"Item D",id:"item-d",expandable:!1}]}];return o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"16px",color:"#666"},children:"Click on any child item to see it highlighted with a green background!"}),o.jsx(k,{data:e,defaultOpenSection:1,showChildrenCount:!0,onChildClick:t})]})},M=()=>{const t=({sectionName:r})=>o.jsxs("div",{style:{padding:"16px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",backgroundColor:"#f9f9f9"},children:[o.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:o.jsxs("span",{style:{fontSize:"14px",color:"#666"},children:["📊 ",r," Statistics"]})}),o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("button",{onClick:()=>alert(`View ${r} analytics`),style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#fff",border:"1px solid #ddd",borderRadius:"4px",cursor:"pointer"},children:"View Analytics"}),o.jsx("button",{onClick:()=>alert(`Export ${r} data`),style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Export"})]})]}),e=[{title:"User Management",content:"Manage user accounts and permissions",children:[{title:"Admin Users",expandable:!1},{title:"Regular Users",expandable:!1},{title:"Guest Users",expandable:!1}],bottomComponent:o.jsx(t,{sectionName:"User"})},{title:"Content",content:null,children:[{title:"Articles",expandable:!1},{title:"Media Files",expandable:!1},{title:"Comments",expandable:!1},{title:"Categories",expandable:!1}],bottomComponent:o.jsx(t,{sectionName:"Content"})},{title:"Settings",content:null,children:[{title:"General",expandable:!1},{title:"Security",expandable:!1}],bottomButton:{label:"+ Add New Setting",onClick:()=>alert("Add setting")}}];return o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",color:"#666",backgroundColor:"#f0f8ff",padding:"12px",borderRadius:"4px"},children:[o.jsx("strong",{children:"Note:"})," The first two sections use a custom React component at the bottom with multiple buttons, while the third section uses the default bottomButton. You can use either approach!"]}),o.jsx(k,{data:e,defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"4px",hideBorders:!0})]})},F=()=>{const t=[{text:"Edit",icon:"edit",id:"edit"},{text:"Delete",icon:"trash",id:"delete"},{text:"Duplicate",icon:"copy",id:"duplicate"}],e=(s,m)=>{alert(`Selected ${s}: ${m.text}`)},r=[{title:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsx("span",{children:"Header with Actions"}),o.jsx("div",{onClick:s=>s.stopPropagation(),children:o.jsx(q,{options:t,triggerComponent:o.jsx(P,{useReactIcon:!0,reactIconSet:"fa",reactIconName:"FaEllipsisV",size:"small",style:{cursor:"pointer",margin:0,padding:"4px"}}),onClick:e,pointing:"top right"})})]}),content:"This accordion section has a MenuDropdown in its header."},{title:"Content with Actions",content:null,children:[{title:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsx("span",{children:"Child Item 1"}),o.jsx("div",{onClick:s=>s.stopPropagation(),children:o.jsx(q,{options:t,triggerComponent:o.jsx(P,{useReactIcon:!0,reactIconSet:"fa",reactIconName:"FaEllipsisV",size:"small",style:{cursor:"pointer",margin:0,padding:"4px"}}),onClick:e,pointing:"top right"})})]}),expandable:!1},{title:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[o.jsx("span",{children:"Child Item 2"}),o.jsx("div",{onClick:s=>s.stopPropagation(),children:o.jsx(q,{options:t,triggerComponent:o.jsx(P,{useReactIcon:!0,reactIconSet:"fa",reactIconName:"FaEllipsisV",size:"small",style:{cursor:"pointer",margin:0,padding:"4px"}}),onClick:e,pointing:"top right"})})]}),expandable:!1}]}];return o.jsx("div",{children:o.jsx(k,{data:r,defaultOpenAll:!0})})};C.__docgenInfo={description:`Children as React Components
Demonstrates using custom React components as child titles
Icons can be React components (like LtIcon) or emojis`,methods:[],displayName:"WithReactComponentChildren"};N.__docgenInfo={description:"",methods:[],displayName:"WithChildSelection"};M.__docgenInfo={description:"",methods:[],displayName:"WithCustomBottomComponent"};F.__docgenInfo={description:"",methods:[],displayName:"WithMenuDropdown"};var oe,ne,ie;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(ie=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,se,ae;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(ae=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,de,ce;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(ce=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,me,he,xe;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(me=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:`Open All Sections By Default
All accordion sections are expanded on initial load`,...(xe=(he=f.parameters)==null?void 0:he.docs)==null?void 0:xe.description}}};var ge,fe,be,Ce,ye;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(be=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:be.source},description:{story:`With Gaps Between Children
Shows children with spacing between them instead of borders`,...(ye=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:ye.description}}};var ke,ve,je,we,Se;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(je=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:je.source},description:{story:`Children as React Components
Demonstrates using custom React components as child titles
Icons can be React components (like LtIcon) or emojis`,...(Se=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Se.description}}};var Be,Re,Ie;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(Ie=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Ae,Le,$e;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...($e=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Ne,Me,Fe;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Fe=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Oe,Ee,We;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(We=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};var Pe,De,Te;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(Te=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};const to=["Default","WithoutNestedItems","SingleAccordion","DefaultOpenAll","WithChildrenGaps","WithReactComponentChildren","WithChildrenCount","WithBottomButton","WithChildSelection","WithCustomBottomComponent","WithMenuDropdown"];export{R as Default,f as DefaultOpenAll,A as SingleAccordion,$ as WithBottomButton,N as WithChildSelection,L as WithChildrenCount,b as WithChildrenGaps,M as WithCustomBottomComponent,F as WithMenuDropdown,C as WithReactComponentChildren,I as WithoutNestedItems,to as __namedExportsOrder,eo as default};
