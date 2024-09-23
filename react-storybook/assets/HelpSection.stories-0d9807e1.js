import{j as e}from"./jsx-runtime-8406ef1e.js";import{R as v,r as y}from"./index-ad58220e.js";import{M as l}from"./Menu-5be50139.js";import{I as m}from"./Icon-a36dbc07.js";import{A as d}from"./Accordion-3a928451.js";import{S as N}from"./Search-4b096cff.js";import{S as h}from"./Sidebar-0cbf54fb.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./map-0dadb82a.js";import"./getElementType-486fb75c.js";import"./childrenUtils-8c0966fa.js";import"./factories-03e2068e.js";import"./ModernAutoControlledComponent-4ca57a24.js";import"./assertThisInitialized-081f9914.js";import"./_arrayReduce-865b0d3f.js";import"./deburr-a74268bf.js";import"./without-0fb42e21.js";import"./includes-6af2fe54.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./isEmpty-8d8d3e94.js";import"./htmlPropsUtils-cd6198e4.js";import"./Portal-3e499843.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./index-aa4587fb.js";import"./Input-ffd68a60.js";import"./Button-b40a6544.js";import"./Label-ce9f83fa.js";const p=({accordionData:c,animation:a,sidebarVisible:s,toggleSidebar:r})=>{const[i,u]=v.useState([]),j=t=>()=>{const o=i.indexOf(t);u(o!==-1?i.filter(x=>x!==t):[...i,t])};return e.jsx(h.Pushable,{as:v.Fragment,children:e.jsxs(h,{className:"helpSection-container",as:l,animation:a,icon:"labeled",inverted:!0,vertical:!0,visible:s,children:[e.jsx(l.Header,{className:"helpSection-header",children:e.jsxs("div",{className:"helpSection-header-div",children:[e.jsx("div",{className:"helpSection-header-div-text",children:"Help Section"}),e.jsx("div",{className:"helpSection-header-div-icon",children:e.jsx(m,{size:"small",name:"close",color:"grey",onClick:r})})]})}),e.jsx(l.Item,{className:"helpSection-menu-search",children:e.jsx(N,{className:"custom-search-input",size:"tiny",showNoResults:!1,placeholder:"Search info",input:{icon:{name:"search",color:"green"},iconPosition:"left"},style:{fontSize:"12px",padding:"4px"}})}),e.jsx("div",{className:"helpSection-accordion-div",children:c.map((t,o)=>e.jsxs(d,{className:"helpSection-accordion",children:[e.jsxs(d.Title,{className:"helpSection-accordion-title",active:i.includes(o),index:o,onClick:j(o),children:[e.jsx("span",{children:t.title}),e.jsx(m,{name:i.includes(o)?"angle down":"angle right",color:i.includes(o)?"green":void 0})]}),e.jsx(d.Content,{className:`helpSection-accordion-content ${i.includes(o)?"active":""}`,active:i.includes(o),children:t.content})]},o))})]})})};p.defaultProps={accordionData:[],animation:"overlay"};const b=p;p.__docgenInfo={description:"",methods:[],displayName:"HelpSection",props:{accordionData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
