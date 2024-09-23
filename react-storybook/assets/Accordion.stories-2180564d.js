import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as g,R as L}from"./index-ad58220e.js";import{I as b}from"./Icon-a36dbc07.js";import{A as a}from"./Accordion-3a928451.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-03e2068e.js";import"./getElementType-486fb75c.js";import"./childrenUtils-8c0966fa.js";import"./map-0dadb82a.js";import"./without-0fb42e21.js";import"./includes-6af2fe54.js";import"./ModernAutoControlledComponent-4ca57a24.js";import"./assertThisInitialized-081f9914.js";function Y(){let[o,h]=g.useState(!0);return()=>h(!o)}const M=({data:o,defaultOpenSection:h=-1,exclusive:j=!1})=>{const[s,l]=g.useState({}),[S,B]=g.useState({}),f=Y();g.useEffect(()=>{const e={};o.forEach((i,c)=>{e[c]=e[c]||{isOpened:!1,childIndex:{}},i.children&&i.children.forEach((v,N)=>{e[c].childIndex[N]={isOpened:!1}})}),B(e);const t=JSON.parse(JSON.stringify(e));h!==-1&&(t[h].isOpened=!0),l(t)},[]);const G=e=>{if(j&&!s[e].isOpened){const t=JSON.parse(JSON.stringify(S));return t[e].isOpened=!0,l(t),f()}return s[e].isOpened=!s[e].isOpened,l(s),f()},H=(e,t)=>{if(j&&!s[e].childIndex[t].isOpened){const i=JSON.parse(JSON.stringify(S));return i[e].isOpened=!0,i[e].childIndex[t].isOpened=!0,l(i),f()}return s[e].childIndex[t].isOpened=!s[e].childIndex[t].isOpened,l(s),f()},K=e=>{G(e)},Q=(e,t)=>{H(e,t)};return n.jsx(a,{fluid:!0,styled:!0,className:"lt-accordian",children:o.map((e,t)=>{var i,c,v,N;return n.jsxs(L.Fragment,{children:[n.jsxs(a.Title,{active:(i=s[t])==null?void 0:i.isOpened,index:t,id:e.id,onClick:()=>K(t),className:"round-border",children:[n.jsx("span",{className:"title-span",children:e.title}),n.jsx("span",{className:"icon-span-position",children:n.jsx(b,{className:`chevron-icon ${(c=s[t])!=null&&c.isOpened?"open":"close"}`,size:"small",name:(v=s[t])!=null&&v.isOpened?"chevron up":"chevron down"})})]}),n.jsxs(a.Content,{active:(N=s[t])==null?void 0:N.isOpened,children:[e.content&&n.jsx("p",{className:"parent-content",children:e.content}),e.children&&n.jsx(a,{className:"lt-child-accordian",fluid:!0,styled:!0,children:e.children.map((d,r)=>{var A,R,x,y,C,P,w,E,I,J,k,q;return n.jsxs(L.Fragment,{children:[n.jsxs(a.Title,{id:d.id,className:"icon-position-child",active:(x=(R=(A=s[t])==null?void 0:A.childIndex)==null?void 0:R[r])==null?void 0:x.isOpened,index:r,onClick:()=>Q(t,r),children:[n.jsx("span",{className:"child-title-span",children:d.title}),d.content&&n.jsx("span",{className:"icon-span-position",children:n.jsx(b,{className:`chevron-icon ${(P=(C=(y=s[t])==null?void 0:y.childIndex)==null?void 0:C[r])!=null&&P.isOpened?"open":"close"}`,size:"small",name:(I=(E=(w=s[t])==null?void 0:w.childIndex)==null?void 0:E[r])!=null&&I.isOpened?"chevron up":"chevron down"})})]}),d.content&&n.jsx(a.Content,{active:(q=(k=(J=s[t])==null?void 0:J.childIndex)==null?void 0:k[r])==null?void 0:q.isOpened,children:n.jsx("p",{className:"child-content",children:d.content})})]},r)})})]})]},t)})})},U=M;M.__docgenInfo={description:"",methods:[],displayName:"LtAccordion",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: React.ReactNode;
  content: string | React.JSX.Element | null;
  id?: string;
  children?: NestedItem[];
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!0}},{key:"id",value:{name:"string",required:!1}},{key:"children",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: React.ReactNode;
  content: string | React.JSX.Element | null;
  id?: string;
}`,signature:{properties:[{key:"title",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"union",raw:"string | React.JSX.Element | null",elements:[{name:"string"},{name:"React.JSX.Element"},{name:"null"}],required:!0}},{key:"id",value:{name:"string",required:!1}}]}}],raw:"NestedItem[]",required:!1}}]}}],raw:"AccordionItem[]"},description:""},defaultOpenSection:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-1",computed:!1}},exclusive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ge={title:"LtAccordion",component:U},Z=[{title:"Parent Item 1",content:null,children:[{title:"Nested Item 1.1",content:null},{title:"Nested Item 1.2",content:"Content for Nested Item 1.2"}]}],ee=[{title:"Parent Item 1",content:n.jsx("div",{children:"Content for Parent Item 1"}),children:[{title:"Nested Item 1.1",content:n.jsx("div",{children:"Content for Nested Item 1.1"})},{title:"Nested Item 1.2",content:n.jsx("div",{children:"Content for Nested Item 1.2"})}]},{title:"Parent Item 2",content:n.jsx("div",{children:"Content for Parent Item 2"}),children:[{title:"Nested Item 2.1",content:n.jsx("div",{children:"Content for Nested Item 2.1"})},{title:"Nested Item 2.2",content:"Content for Nested Item 2.2"}]},{title:"Parent Item 3",content:"Content for Parent Item 3",children:[{title:"Nested Item 3.1",content:"Content for Nested Item 3.1"},{title:"Nested Item 3.2",content:"Content for Nested Item 3.2"}]}],te=[{title:"Parent Item 3",content:"Content for Parent Item 3"}],O=o=>n.jsx(U,{...o}),m=O.bind({});m.args={data:ee,defaultOpenSection:0,exclusive:!0};const u=O.bind({});u.args={data:te};const p=O.bind({});p.args={data:Z,exclusive:!0};var T,X,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(_=(X=m.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var D,F,W;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var $,z,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:"(args: LtAccordionProps) => <LtAccordion {...args} />",...(V=(z=p.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};const ve=["Default","WithoutNestedItems","SingleAccordion"];export{m as Default,p as SingleAccordion,u as WithoutNestedItems,ve as __namedExportsOrder,ge as default};
