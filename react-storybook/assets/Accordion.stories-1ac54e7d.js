import{j as o}from"./jsx-runtime-8406ef1e.js";import{r as w,R as K}from"./index-ad58220e.js";import{I as ze}from"./Icon-370c2d23.js";import{A as k}from"./Accordion-b8a8a5aa.js";import{d as l,o as Je}from"./styled-components.browser.esm-675ea4f2.js";import{t as Ue}from"./config-43c6afbd.js";import{u as Ve}from"./ThemeContext-71b3bf8d.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./map-20538cdf.js";import"./without-708f3584.js";import"./includes-192f9362.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";const _e=l(k)`
  &.ui.fluid.accordion {
    border-radius: ${({theme:e})=>e.borderRadius.xlarge};
    overflow: hidden;
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
  }

  &.ui.styled.accordion .accordion .content {
    padding: 0px;
  }

  &.ui.fluid.accordion.ui.fluid.accordion .accordion {
    box-shadow: none;
  }

  &.ui.card > .content p {
    margin: 0px;
  }
`,Xe=l(k)`
  &.ui.accordion.ui.accordion {
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: ${({$childrenGap:e})=>e||"0px"};
  }
`,He=l(k.Title)`
  /* Styles applied via StyledAccordion */
  display: flex;
  align-items: center;
  gap: 8px;
`,Ye=l.div`
  flex: 1;
  display: flex;
  align-items: center;
`,Ze=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ke=l.span`
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
`,Qe=l(k.Title)`
  &.icon-position-child.icon-position-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({isSelected:e,darkMode:t,theme:r})=>e?t?r.colors.darkModeBorder:"#E8F5E9":t?r.colors.darkModeBg:r.colors.white};
    border-top: ${({$hideBorders:e,darkMode:t,theme:r})=>e?"none":`1px solid ${t?r.colors.darkModeBorder:r.colors.border}`};
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: ${({isSelected:e,darkMode:t,theme:r})=>e?t?r.colors.darkModeBorder:"#E8F5E9":t?r.colors.darkModeBorder:"#F5F5F5"};
    }
  }
`,et=l.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.sm} 1.5rem;
  border-top: ${({$hideBorders:e,darkMode:t,theme:r})=>e?"none":`1px solid ${t?r.colors.darkModeBorder:r.colors.border}`};
  cursor: pointer;
`,E=l.span`
  font-size: ${({isChild:e})=>e?"14px":"16px"};
  font-weight: 400;
  color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeText:t.colors.text};
`,Q=l.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`,ee=l(ze)`
  &.icon {
    color: ${({isOpen:e,darkMode:t,theme:r})=>e?r.colors.primary:t?r.colors.darkModeText:r.colors.text};
  }
`,tt=l.p`
  && {
    padding: 1.5rem;
    background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBgSecondary:t.colors.grey};
    margin: 0px;
    border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
    color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeText:t.colors.text};
  }
`,ot=l.p`
  padding: 1.5rem;
  background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBgSecondary:t.colors.grey};
  border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
  color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeText:t.colors.text};
`,nt=l.button`
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
  
  &:hover {
    background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:"#F5F5F5"};
  }
  
  &:focus {
    outline: none;
  }
`,it=l.div`
  width: 100%;
  border-top: 1px solid ${({darkMode:e,theme:t})=>e?t.colors.darkModeBorder:t.colors.border};
  background-color: ${({darkMode:e,theme:t})=>e?t.colors.darkModeBg:t.colors.white};
`;function rt(){let[e,t]=w.useState(!0);return()=>t(!e)}const Ee=({data:e,defaultOpenSection:t=-1,defaultOpenAll:r=!1,exclusive:m=!1,showChildrenCount:x=!1,onChildClick:$,childrenGap:W,hideBorders:v=!1})=>{const a=Ve().theme==="dark",[s,j]=w.useState({}),[P,Pe]=w.useState({}),[f,Te]=w.useState(null),O=rt();w.useEffect(()=>{const n={};e.forEach((d,c)=>{n[c]=n[c]||{isOpened:!1,childIndex:{}},d.children&&d.children.forEach((g,M)=>{n[c].childIndex[M]={isOpened:!1}})}),Pe(n);const i=JSON.parse(JSON.stringify(n));r?e.forEach((d,c)=>{i[c].isOpened=!0}):t!==-1&&(i[t].isOpened=!0),j(i)},[]);const qe=n=>{if(m&&!s[n].isOpened){const i=JSON.parse(JSON.stringify(P));return i[n].isOpened=!0,j(i),O()}return s[n].isOpened=!s[n].isOpened,j(s),O()},Ge=(n,i)=>{if(m&&!s[n].childIndex[i].isOpened){const d=JSON.parse(JSON.stringify(P));return d[n].isOpened=!0,d[n].childIndex[i].isOpened=!0,j(d),O()}return s[n].childIndex[i].isOpened=!s[n].childIndex[i].isOpened,j(s),O()},De=n=>{qe(n)},T=(n,i)=>{var d,c;if(Ge(n,i),Te({parentIndex:n,childIndex:i}),$){const g=(c=(d=e[n])==null?void 0:d.children)==null?void 0:c[i];g&&$(n,i,g)}};return o.jsx(Je,{theme:Ue,children:o.jsx(_e,{fluid:!0,styled:!0,className:"lt-accordian",darkMode:a,children:e.map((n,i)=>{var d,c,g,M;return o.jsxs(K.Fragment,{children:[o.jsxs(He,{active:(d=s[i])==null?void 0:d.isOpened,index:i,id:n.id,onClick:()=>De(i),className:"round-border",darkMode:a,children:[o.jsx(Ye,{children:typeof n.title=="string"?o.jsx(E,{darkMode:a,children:n.title}):n.title}),o.jsxs(Ze,{children:[x&&n.children&&n.children.length>0&&o.jsx(Ke,{darkMode:a,children:n.children.length}),o.jsx(Q,{children:o.jsx(ee,{isOpen:(c=s[i])==null?void 0:c.isOpened,darkMode:a,size:"small",name:(g=s[i])!=null&&g.isOpened?"chevron up":"chevron down"})})]})]}),o.jsxs(k.Content,{active:(M=s[i])==null?void 0:M.isOpened,children:[n.content&&o.jsx(tt,{darkMode:a,children:n.content}),n.children&&o.jsx(Xe,{className:"lt-child-accordian",fluid:!0,styled:!0,darkMode:a,$childrenGap:W,children:n.children.map((p,u)=>{var q,G,D,z,J,U,V,_,X,H,Y,Z;return p.expandable!==!1&&p.content?o.jsxs(K.Fragment,{children:[o.jsxs(Qe,{id:p.id,className:"icon-position-child",active:(D=(G=(q=s[i])==null?void 0:q.childIndex)==null?void 0:G[u])==null?void 0:D.isOpened,index:u,onClick:()=>T(i,u),darkMode:a,$hideBorders:v,isSelected:(f==null?void 0:f.parentIndex)===i&&(f==null?void 0:f.childIndex)===u,children:[typeof p.title=="string"?o.jsx(E,{isChild:!0,darkMode:a,children:p.title}):p.title,o.jsx(Q,{children:o.jsx(ee,{isOpen:(U=(J=(z=s[i])==null?void 0:z.childIndex)==null?void 0:J[u])==null?void 0:U.isOpened,darkMode:a,size:"small",name:(X=(_=(V=s[i])==null?void 0:V.childIndex)==null?void 0:_[u])!=null&&X.isOpened?"chevron up":"chevron down"})})]}),o.jsx(k.Content,{active:(Z=(Y=(H=s[i])==null?void 0:H.childIndex)==null?void 0:Y[u])==null?void 0:Z.isOpened,children:o.jsx(ot,{darkMode:a,children:p.content})})]},u):o.jsx(et,{darkMode:a,$hideBorders:v,onClick:()=>T(i,u),children:typeof p.title=="string"?o.jsx(E,{isChild:!0,darkMode:a,children:p.title}):p.title},u)})}),n.bottomComponent?o.jsx(it,{darkMode:a,children:n.bottomComponent}):n.bottomButton?o.jsx(nt,{darkMode:a,onClick:n.bottomButton.onClick,children:n.bottomButton.label}):null]})]},i)})})})},F=Ee;Ee.__docgenInfo={description:"",methods:[],displayName:"LtAccordion",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: React.ReactNode;
  content: string | React.JSX.Element | null;
  id?: string;
  children?: NestedItem[];
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
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"expandable",value:{name:"boolean",required:!1}}]}}],raw:"NestedItem[]",required:!1}},{key:"bottomButton",value:{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}},{key:"bottomComponent",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"AccordionItem[]"},description:""},defaultOpenSection:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-1",computed:!1}},defaultOpenAll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},exclusive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showChildrenCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChildClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(parentIndex: number, childIndex: number, child: NestedItem) => void",signature:{arguments:[{type:{name:"number"},name:"parentIndex"},{type:{name:"number"},name:"childIndex"},{type:{name:"signature",type:"object",raw:`{
  title: React.ReactNode;
  content?: string | React.JSX.Element | null;
  id?: string;
  expandable?: boolean; // If false, content shows inline without expansion
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"expandable",value:{name:"boolean",required:!1}}]}},name:"child"}],return:{name:"void"}}},description:""},childrenGap:{required:!1,tsType:{name:"string"},description:""},hideBorders:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Lt={title:"LtAccordion",component:F,tags:["autodocs"]},st=[{title:"Parent Item 1",content:null,children:[{title:"Nested Item 1.1",content:null},{title:"Nested Item 1.2",content:"Content for Nested Item 1.2"}]}],at=[{title:"Parent Item 1",content:o.jsx("div",{children:"Content for Parent Item 1"}),children:[{title:"Nested Item 1.1",content:o.jsx("div",{children:"Content for Nested Item 1.1"})},{title:"Nested Item 1.2",content:o.jsx("div",{children:"Content for Nested Item 1.2"})}]},{title:"Parent Item 2",content:o.jsx("div",{children:"Content for Parent Item 2"}),children:[{title:"Nested Item 2.1",content:o.jsx("div",{children:"Content for Nested Item 2.1"})},{title:"Nested Item 2.2",content:"Content for Nested Item 2.2"}]},{title:"Parent Item 3",content:"Content for Parent Item 3",children:[{title:"Nested Item 3.1",content:"Content for Nested Item 3.1"},{title:"Nested Item 3.2",content:"Content for Nested Item 3.2"}]}],lt=[{title:"Parent Item 3",content:"Content for Parent Item 3"}],h=e=>o.jsx(F,{...e}),S=h.bind({});S.args={data:at,defaultOpenSection:0,exclusive:!0};const B=h.bind({});B.args={data:lt};const A=h.bind({});A.args={data:st,exclusive:!0};const b=h.bind({});b.args={data:[{title:"Header",content:"Service Selector",children:[{title:"Service 1",expandable:!1}]},{title:"Body",content:null,children:[{title:"Body Item 1",expandable:!1},{title:"Body Item 2",expandable:!1},{title:"Body Item 3",expandable:!1}]},{title:"Footer",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"FAB (Floating Action Bar)",expandable:!1},{title:"Guest Continue CTA",expandable:!1}]}],defaultOpenAll:!0,showChildrenCount:!0};const C=h.bind({});C.args={data:[{title:"Header",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"Logo",expandable:!1},{title:"Search Bar",expandable:!1}]},{title:"Body",content:null,children:[{title:"Hero Section",expandable:!1},{title:"Features Grid",expandable:!1},{title:"Testimonials",expandable:!1},{title:"Call to Action",expandable:!1}]}],defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"8px",hideBorders:!0};const y=()=>{const e=({icon:$,title:W,subtitle:v})=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("div",{style:{fontSize:"20px",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",borderRadius:"8px"},children:$}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:W}),v&&o.jsx("div",{style:{fontSize:"12px",color:"#666"},children:v})]})]}),t=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 17L12 22L22 17",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 12L12 17L22 12",stroke:"#4CAF50",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),r=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"#2196F3",strokeWidth:"2"}),o.jsx("line",{x1:"8",y1:"9",x2:"16",y2:"9",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"8",y1:"13",x2:"16",y2:"13",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("line",{x1:"8",y1:"17",x2:"12",y2:"17",stroke:"#2196F3",strokeWidth:"2",strokeLinecap:"round"})]}),m=()=>o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M3 3V21H21",stroke:"#FF9800",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M7 14L11 10L15 14L20 9",stroke:"#FF9800",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),x=[{title:"Components",content:null,children:[{title:o.jsx(e,{icon:o.jsx(t,{}),title:"Design System",subtitle:"UI components and patterns"}),expandable:!1},{title:o.jsx(e,{icon:o.jsx(r,{}),title:"Forms",subtitle:"Input fields and validation"}),expandable:!1},{title:o.jsx(e,{icon:o.jsx(m,{}),title:"Charts",subtitle:"Data visualization"}),expandable:!1}]},{title:"Features",content:null,children:[{title:o.jsx(e,{icon:"🔐",title:"Authentication",subtitle:"Login & security"}),expandable:!1},{title:o.jsx(e,{icon:"💳",title:"Payments",subtitle:"Billing integration"}),expandable:!1},{title:o.jsx(e,{icon:"📧",title:"Notifications",subtitle:"Email & push alerts"}),expandable:!1}]}];return o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",color:"#666"},children:["Children can be any React component, not just plain text!",o.jsx("br",{}),"Icons can be React components (SVG, LtIcon, etc.) or emoji strings."]}),o.jsx(F,{data:x,defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"8px",hideBorders:!0})]})},L=h.bind({});L.args={data:[{title:"Header",content:"Service Selector",children:[{title:"Service 1",expandable:!1}]},{title:"Body",content:null,children:[{title:"Body Item 1",expandable:!1},{title:"Body Item 2",expandable:!1},{title:"Body Item 3",expandable:!1},{title:"Body Item 4",expandable:!1},{title:"Body Item 5",expandable:!1},{title:"Body Item 6",expandable:!1}]},{title:"Footer",content:null,children:[{title:"Navigation Bar",expandable:!1},{title:"FAB (Floating Action Bar)",expandable:!1},{title:"Guest Continue CTA",expandable:!1}]}],defaultOpenSection:1,showChildrenCount:!0};const R=h.bind({});R.args={data:[{title:"Services",content:"Manage your services",children:[{title:"Service 1",expandable:!1},{title:"Service 2",expandable:!1},{title:"Service 3",expandable:!1}],bottomButton:{label:"+ Add New Service",onClick:()=>alert("Add new service clicked!")}},{title:"Products",content:"Manage your products",children:[{title:"Product 1",expandable:!1},{title:"Product 2",expandable:!1}],bottomButton:{label:"+ Add New Product",onClick:()=>alert("Add new product clicked!")}}],defaultOpenSection:0,showChildrenCount:!0};const N=()=>{const e=(r,m,x)=>{console.log("Child clicked:",{parentIndex:r,childIndex:m,child:x}),alert(`Selected: ${x.title}
Parent Index: ${r}
Child Index: ${m}`)},t=[{title:"Categories",content:"Select a category",children:[{title:"Category 1",id:"cat-1",expandable:!1},{title:"Category 2",id:"cat-2",expandable:!1},{title:"Category 3",id:"cat-3",expandable:!1}]},{title:"Items",content:null,children:[{title:"Item A",id:"item-a",expandable:!1},{title:"Item B",id:"item-b",expandable:!1},{title:"Item C",id:"item-c",expandable:!1},{title:"Item D",id:"item-d",expandable:!1}]}];return o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"16px",color:"#666"},children:"Click on any child item to see it highlighted with a green background!"}),o.jsx(F,{data:t,defaultOpenSection:1,showChildrenCount:!0,onChildClick:e})]})},I=()=>{const e=({sectionName:r})=>o.jsxs("div",{style:{padding:"16px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",backgroundColor:"#f9f9f9"},children:[o.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:o.jsxs("span",{style:{fontSize:"14px",color:"#666"},children:["📊 ",r," Statistics"]})}),o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("button",{onClick:()=>alert(`View ${r} analytics`),style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#fff",border:"1px solid #ddd",borderRadius:"4px",cursor:"pointer"},children:"View Analytics"}),o.jsx("button",{onClick:()=>alert(`Export ${r} data`),style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Export"})]})]}),t=[{title:"User Management",content:"Manage user accounts and permissions",children:[{title:"Admin Users",expandable:!1},{title:"Regular Users",expandable:!1},{title:"Guest Users",expandable:!1}],bottomComponent:o.jsx(e,{sectionName:"User"})},{title:"Content",content:null,children:[{title:"Articles",expandable:!1},{title:"Media Files",expandable:!1},{title:"Comments",expandable:!1},{title:"Categories",expandable:!1}],bottomComponent:o.jsx(e,{sectionName:"Content"})},{title:"Settings",content:null,children:[{title:"General",expandable:!1},{title:"Security",expandable:!1}],bottomButton:{label:"+ Add New Setting",onClick:()=>alert("Add setting")}}];return o.jsxs("div",{children:[o.jsxs("p",{style:{marginBottom:"16px",color:"#666",backgroundColor:"#f0f8ff",padding:"12px",borderRadius:"4px"},children:[o.jsx("strong",{children:"Note:"})," The first two sections use a custom React component at the bottom with multiple buttons, while the third section uses the default bottomButton. You can use either approach!"]}),o.jsx(F,{data:t,defaultOpenAll:!0,showChildrenCount:!0,childrenGap:"4px",hideBorders:!0})]})};y.__docgenInfo={description:`Children as React Components
Demonstrates using custom React components as child titles
Icons can be React components (like LtIcon) or emojis`,methods:[],displayName:"WithReactComponentChildren"};N.__docgenInfo={description:"",methods:[],displayName:"WithChildSelection"};I.__docgenInfo={description:"",methods:[],displayName:"WithCustomBottomComponent"};var te,oe,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(ne=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,re,se;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,le,de;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(de=(le=A.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue,me,he;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(ue=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:`Open All Sections By Default
All accordion sections are expanded on initial load`,...(he=(me=b.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var xe,fe,ge,be,Ce;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(ge=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ge.source},description:{story:`With Gaps Between Children
Shows children with spacing between them instead of borders`,...(Ce=(be=C.parameters)==null?void 0:be.docs)==null?void 0:Ce.description}}};var ye,ke,ve,je,we;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(ve=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:ve.source},description:{story:`Children as React Components
Demonstrates using custom React components as child titles
Icons can be React components (like LtIcon) or emojis`,...(we=(je=y.parameters)==null?void 0:je.docs)==null?void 0:we.description}}};var Se,Be,Ae;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(Ae=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var Le,Re,Ne;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(Ne=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Ie,Fe,$e;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...($e=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:$e.source}}};var Oe,Me,We;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(We=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};const Rt=["Default","WithoutNestedItems","SingleAccordion","DefaultOpenAll","WithChildrenGaps","WithReactComponentChildren","WithChildrenCount","WithBottomButton","WithChildSelection","WithCustomBottomComponent"];export{S as Default,b as DefaultOpenAll,A as SingleAccordion,R as WithBottomButton,N as WithChildSelection,L as WithChildrenCount,C as WithChildrenGaps,I as WithCustomBottomComponent,y as WithReactComponentChildren,B as WithoutNestedItems,Rt as __namedExportsOrder,Lt as default};
