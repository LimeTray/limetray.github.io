import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as v,r as y}from"./index-76fb7be0.js";import{M as l}from"./Menu-a8069165.js";import{I as m}from"./Icon-f4a5e358.js";import{A as d}from"./Accordion-0b2af29d.js";import{S as N}from"./Search-76e1a116.js";import{S as h}from"./Sidebar-808684d2.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./map-5ec937e9.js";import"./getElementType-800224f7.js";import"./childrenUtils-ad5f8e12.js";import"./factories-aa9c7902.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./_arrayReduce-865b0d3f.js";import"./deburr-046b2e64.js";import"./without-8297d7fd.js";import"./includes-2d2ad27d.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./isEmpty-a3120e76.js";import"./htmlPropsUtils-09ff187c.js";import"./Portal-41e64c31.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./index-901c962e.js";import"./Input-118b97ba.js";import"./Button-1eadaef4.js";import"./Label-f2be6096.js";const p=({accordionData:c,animation:a,sidebarVisible:s,toggleSidebar:r})=>{const[i,u]=v.useState([]),j=t=>()=>{const o=i.indexOf(t);u(o!==-1?i.filter(x=>x!==t):[...i,t])};return e.jsx(h.Pushable,{as:v.Fragment,children:e.jsxs(h,{className:"helpSection-container",as:l,animation:a,icon:"labeled",inverted:!0,vertical:!0,visible:s,children:[e.jsx(l.Header,{className:"helpSection-header",children:e.jsxs("div",{className:"helpSection-header-div",children:[e.jsx("div",{className:"helpSection-header-div-text",children:"Help Section"}),e.jsx("div",{className:"helpSection-header-div-icon",children:e.jsx(m,{size:"small",name:"close",color:"grey",onClick:r})})]})}),e.jsx(l.Item,{className:"helpSection-menu-search",children:e.jsx(N,{className:"custom-search-input",size:"tiny",showNoResults:!1,placeholder:"Search info",input:{icon:{name:"search",color:"green"},iconPosition:"left"},style:{fontSize:"12px",padding:"4px"}})}),e.jsx("div",{className:"helpSection-accordion-div",children:c.map((t,o)=>e.jsxs(d,{className:"helpSection-accordion",children:[e.jsxs(d.Title,{className:"helpSection-accordion-title",active:i.includes(o),index:o,onClick:j(o),children:[e.jsx("span",{children:t.title}),e.jsx(m,{name:i.includes(o)?"angle down":"angle right",color:i.includes(o)?"green":void 0})]}),e.jsx(d.Content,{className:`helpSection-accordion-content ${i.includes(o)?"active":""}`,active:i.includes(o),children:t.content})]},o))})]})})};p.defaultProps={accordionData:[],animation:"overlay"};const b=p;p.__docgenInfo={description:"",methods:[],displayName:"HelpSection",props:{accordionData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  content: React.ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"AccordionItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:`| 'overlay'
| 'push'
| 'scale down'
| 'uncover'
| 'slide out'
| 'slide along'`,elements:[{name:"literal",value:"'overlay'"},{name:"literal",value:"'push'"},{name:"literal",value:"'scale down'"},{name:"literal",value:"'uncover'"},{name:"literal",value:"'slide out'"},{name:"literal",value:"'slide along'"}]},description:"",defaultValue:{value:"'overlay'",computed:!1}},sidebarVisible:{required:!0,tsType:{name:"boolean"},description:""},toggleSidebar:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ie={component:b,title:"HelpSection",tags:["autodocs"],argTypes:{accordionData:{control:"object"},animation:{control:"text"},sidebarVisible:{control:"boolean"}}},A=c=>{const[a,s]=y.useState(!1),r=()=>{s(!a)},i=[{title:"Accordion 1",content:"Content for Accordion 1"},{title:"Accordion 2",content:"Content for Accordion 2"}];return e.jsxs("div",{children:[e.jsx("div",{onClick:r,className:"info-icon-div",children:e.jsx(m,{className:"info-icon",name:"info circle"})}),e.jsx(b,{...c,accordionData:i,sidebarVisible:a,toggleSidebar:r})]})},n=A.bind({});n.args={animation:"overlay"};var f,S,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const accordiondata = [{
    title: "Accordion 1",
    content: "Content for Accordion 1"
  }, {
    title: "Accordion 2",
    content: "Content for Accordion 2"
  }];
  return <div>
      <div onClick={toggleSidebar} className="info-icon-div">
        <Icon className="info-icon" name="info circle" />
      </div>
      <HelpSection {...args} accordionData={accordiondata} sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
    </div>;
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const oe=["Default"];export{n as Default,oe as __namedExportsOrder,ie as default};
