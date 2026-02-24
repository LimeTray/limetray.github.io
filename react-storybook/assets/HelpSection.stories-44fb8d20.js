import{j as e}from"./jsx-runtime-8406ef1e.js";import{R as v,r as y}from"./index-ad58220e.js";import{M as l}from"./Menu-57c9a256.js";import{I as m}from"./Icon-5cfe3eb1.js";import{A as d}from"./Accordion-e0594750.js";import{S as N}from"./Search-6f7fbf7f.js";import{S as h}from"./Sidebar-2518e37d.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./map-db19bd84.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./factories-d6e88bd9.js";import"./ModernAutoControlledComponent-ac79fba3.js";import"./assertThisInitialized-081f9914.js";import"./_arrayReduce-865b0d3f.js";import"./deburr-8ac57e57.js";import"./without-bae35c35.js";import"./includes-03b4ffc2.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./isEmpty-f7f0c885.js";import"./htmlPropsUtils-e61b253b.js";import"./Portal-392918f3.js";import"./index-e8ec4132.js";import"./Input-3ccf8d1e.js";import"./Button-a1cbfca3.js";import"./Label-78d4db42.js";const p=({accordionData:c,animation:a,sidebarVisible:s,toggleSidebar:r})=>{const[i,u]=v.useState([]),j=t=>()=>{const o=i.indexOf(t);u(o!==-1?i.filter(x=>x!==t):[...i,t])};return e.jsx(h.Pushable,{as:v.Fragment,children:e.jsxs(h,{className:"helpSection-container",as:l,animation:a,icon:"labeled",inverted:!0,vertical:!0,visible:s,children:[e.jsx(l.Header,{className:"helpSection-header",children:e.jsxs("div",{className:"helpSection-header-div",children:[e.jsx("div",{className:"helpSection-header-div-text",children:"Help Section"}),e.jsx("div",{className:"helpSection-header-div-icon",children:e.jsx(m,{size:"small",name:"close",color:"grey",onClick:r})})]})}),e.jsx(l.Item,{className:"helpSection-menu-search",children:e.jsx(N,{className:"custom-search-input",size:"tiny",showNoResults:!1,placeholder:"Search info",input:{icon:{name:"search",color:"green"},iconPosition:"left"},style:{fontSize:"12px",padding:"4px"}})}),e.jsx("div",{className:"helpSection-accordion-div",children:c.map((t,o)=>e.jsxs(d,{className:"helpSection-accordion",children:[e.jsxs(d.Title,{className:"helpSection-accordion-title",active:i.includes(o),index:o,onClick:j(o),children:[e.jsx("span",{children:t.title}),e.jsx(m,{name:i.includes(o)?"angle down":"angle right",color:i.includes(o)?"green":void 0})]}),e.jsx(d.Content,{className:`helpSection-accordion-content ${i.includes(o)?"active":""}`,active:i.includes(o),children:t.content})]},o))})]})})};p.defaultProps={accordionData:[],animation:"overlay"};const b=p;p.__docgenInfo={description:"",methods:[],displayName:"HelpSection",props:{accordionData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  content: React.ReactNode;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"AccordionItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:`| 'overlay'
| 'push'
| 'scale down'
| 'uncover'
| 'slide out'
| 'slide along'`,elements:[{name:"literal",value:"'overlay'"},{name:"literal",value:"'push'"},{name:"literal",value:"'scale down'"},{name:"literal",value:"'uncover'"},{name:"literal",value:"'slide out'"},{name:"literal",value:"'slide along'"}]},description:"",defaultValue:{value:"'overlay'",computed:!1}},sidebarVisible:{required:!0,tsType:{name:"boolean"},description:""},toggleSidebar:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ee={component:b,title:"HelpSection",tags:["autodocs"],argTypes:{accordionData:{control:"object"},animation:{control:"text"},sidebarVisible:{control:"boolean"}}},A=c=>{const[a,s]=y.useState(!1),r=()=>{s(!a)},i=[{title:"Accordion 1",content:"Content for Accordion 1"},{title:"Accordion 2",content:"Content for Accordion 2"}];return e.jsxs("div",{children:[e.jsx("div",{onClick:r,className:"info-icon-div",children:e.jsx(m,{className:"info-icon",name:"info circle"})}),e.jsx(b,{...c,accordionData:i,sidebarVisible:a,toggleSidebar:r})]})},n=A.bind({});n.args={animation:"overlay"};var f,S,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const ie=["Default"];export{n as Default,ie as __namedExportsOrder,ee as default};
