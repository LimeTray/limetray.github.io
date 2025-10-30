import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as y}from"./index-ad58220e.js";import{B as t}from"./Button-13ce16b7.js";import{M as p}from"./Menu-b4cb090e.js";import{H as s}from"./Header-5bdfd4ac.js";import{I as b}from"./Icon-33b7fdc8.js";import{L as n}from"./List-a35c6622.js";import{C as l}from"./Card-2abe5cab.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Label-32ef75b5.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-9497f5af.js";import"./includes-646822e3.js";import"./Portal-25fcd847.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./_arrayReduce-865b0d3f.js";import"./deburr-94e08562.js";const fe=({leftPanel:i,leftPanelCollapsedContent:f,leftSidebar:g,centerPanel:v,rightPanel:C,rightPanelCollapsedContent:j,rightSidebar:c,leftPanelWidth:a=320,leftPanelCollapsedWidth:L=60,leftSidebarWidth:D=60,rightPanelWidth:Ce=384,rightPanelCollapsedWidth:I=60,rightSidebarWidth:q=60,leftPanelInitialCollapsed:je=!1,rightPanelInitialCollapsed:Pe=!1,onLeftPanelToggle:A,onRightPanelToggle:M,showCollapseButtons:S=!0,className:be="",style:ve,height:Le="100vh",leftPanelBg:$="#f8f9fa",centerPanelBg:Ie="#ffffff",rightPanelBg:H="#ffffff",centerPanelMaxWidth:V,stickyPanels:Se=!0,minPanelWidth:U=240,maxPanelWidth:O=600,resizable:He=!1,id:ke,...Be})=>{const[o,we]=y.useState(je),[r,Re]=y.useState(Pe),[We,Ve]=y.useState(a),[Ne,Ue]=y.useState(Ce),E=()=>{const P=!o;we(P),A==null||A(P)},G=()=>{const P=!r;Re(P),M==null||M(P)},Te=["ltLayout",o?"leftCollapsed":"",r?"rightCollapsed":"",Se?"stickyPanels":"",be].filter(Boolean).join(" "),ze={height:Le,...ve},De={width:g?`${D}px`:0,backgroundColor:$,minWidth:g?`${D}px`:0},qe={width:o?`${L}px`:`${We}px`,backgroundColor:$,minWidth:o?`${L}px`:`${U}px`,maxWidth:o?`${L}px`:`${O}px`},Ae={width:c?`${q}px`:0,backgroundColor:H,minWidth:c?`${q}px`:0},Me={width:r?`${I}px`:`${Ne}px`,backgroundColor:H,minWidth:r?`${I}px`:`${U}px`,maxWidth:r?`${I}px`:`${O}px`},$e={backgroundColor:Ie,maxWidth:V,margin:V?"0 auto":void 0};return e.jsxs("div",{id:ke,className:Te,style:ze,...Be,children:[g&&e.jsx("div",{className:"ltLayout-leftSidebar",style:De,children:e.jsx("div",{className:"ltLayout-panelContent",children:g})}),(i||f)&&e.jsxs("div",{className:`ltLayout-leftPanel ${o?"collapsed":""}`,style:qe,children:[S&&!o&&e.jsx(t,{icon:"chevron left",className:"ltLayout-collapseButton ltLayout-collapseButton--left",onClick:E,title:"Collapse left panel",size:"mini",style:{position:"absolute",right:"8px",top:"8px",zIndex:10}}),e.jsx("div",{className:"ltLayout-panelContent",children:o?f:i})]}),S&&o&&(i||f)&&e.jsx(t,{icon:"chevron right",className:"ltLayout-expandButton ltLayout-expandButton--left",onClick:E,title:"Expand left panel",size:"mini",style:{position:"absolute",left:`${(g?D:0)+L-12}px`,top:"8px",zIndex:50,transform:"translateX(50%)"}}),e.jsx("div",{className:"ltLayout-centerPanel",style:$e,children:e.jsx("div",{className:"ltLayout-panelContent",children:v})}),(C||j)&&e.jsxs("div",{className:`ltLayout-rightPanel ${r?"collapsed":""}`,style:Me,children:[S&&!r&&e.jsx(t,{icon:"chevron right",className:"ltLayout-collapseButton ltLayout-collapseButton--right",onClick:G,title:"Collapse right panel",size:"mini",style:{position:"absolute",left:"8px",top:"8px",zIndex:10}}),e.jsx("div",{className:"ltLayout-panelContent",children:r?j:C})]}),S&&r&&(C||j)&&e.jsx(t,{icon:"chevron left",className:"ltLayout-expandButton ltLayout-expandButton--right",onClick:G,title:"Expand right panel",size:"mini",style:{position:"absolute",right:`${(c?q:0)+I-12}px`,top:"8px",zIndex:50,transform:"translateX(-50%)"}}),c&&e.jsx("div",{className:"ltLayout-rightSidebar",style:Ae,children:e.jsx("div",{className:"ltLayout-panelContent",children:c})})]})},ge=fe;fe.__docgenInfo={description:"",methods:[],displayName:"LtLayout",props:{leftPanel:{required:!1,tsType:{name:"ReactNode"},description:"Left panel content"},leftPanelCollapsedContent:{required:!1,tsType:{name:"ReactNode"},description:"Left panel content when collapsed (mini sidebar)"},leftSidebar:{required:!1,tsType:{name:"ReactNode"},description:"Left sidebar navigation"},centerPanel:{required:!1,tsType:{name:"ReactNode"},description:"Center panel content"},rightPanel:{required:!1,tsType:{name:"ReactNode"},description:"Right panel content"},rightPanelCollapsedContent:{required:!1,tsType:{name:"ReactNode"},description:"Right panel content when collapsed (mini sidebar)"},rightSidebar:{required:!1,tsType:{name:"ReactNode"},description:"Right sidebar navigation"},leftPanelWidth:{required:!1,tsType:{name:"number"},description:"Initial width of left panel in pixels",defaultValue:{value:"320",computed:!1}},leftPanelCollapsedWidth:{required:!1,tsType:{name:"number"},description:"Width of left panel when collapsed in pixels",defaultValue:{value:"60",computed:!1}},leftSidebarWidth:{required:!1,tsType:{name:"number"},description:"Width of left sidebar in pixels",defaultValue:{value:"60",computed:!1}},rightPanelWidth:{required:!1,tsType:{name:"number"},description:"Initial width of right panel in pixels",defaultValue:{value:"384",computed:!1}},rightPanelCollapsedWidth:{required:!1,tsType:{name:"number"},description:"Width of right panel when collapsed in pixels",defaultValue:{value:"60",computed:!1}},rightSidebarWidth:{required:!1,tsType:{name:"number"},description:"Width of right sidebar in pixels",defaultValue:{value:"60",computed:!1}},leftPanelInitialCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether left panel is initially collapsed",defaultValue:{value:"false",computed:!1}},rightPanelInitialCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether right panel is initially collapsed",defaultValue:{value:"false",computed:!1}},onLeftPanelToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when left panel collapse state changes"},onRightPanelToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when right panel collapse state changes"},showCollapseButtons:{required:!1,tsType:{name:"boolean"},description:"Whether to show collapse/expand buttons",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for the layout container",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles for the layout container"},height:{required:!1,tsType:{name:"string"},description:"Height of the layout (defaults to 100vh)",defaultValue:{value:'"100vh"',computed:!1}},leftPanelBg:{required:!1,tsType:{name:"string"},description:"Background color of panels",defaultValue:{value:'"#f8f9fa"',computed:!1}},centerPanelBg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}},rightPanelBg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}},centerPanelMaxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width for center panel (prevents it from becoming too wide when side panels collapse)"},stickyPanels:{required:!1,tsType:{name:"boolean"},description:"Whether panels should be sticky (for scrolling)",defaultValue:{value:"true",computed:!1}},minPanelWidth:{required:!1,tsType:{name:"number"},description:"Minimum width for resizable panels",defaultValue:{value:"240",computed:!1}},maxPanelWidth:{required:!1,tsType:{name:"number"},description:"Maximum width for resizable panels",defaultValue:{value:"600",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"Whether panels are resizable",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"ID for the layout container"}}};const xt={component:ge,title:"Layout/LtLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
A flexible 3-column layout component with collapsible panels for dashboard and configuration interfaces.

Supports mini sidebar pattern where collapsed panels can show icon navigation instead of disappearing completely. Click the expand buttons to see full panel content.
        `}}},argTypes:{leftPanelWidth:{control:{type:"range",min:200,max:600,step:20}},leftPanelCollapsedWidth:{control:{type:"range",min:40,max:120,step:10}},rightPanelWidth:{control:{type:"range",min:200,max:600,step:20}},rightPanelCollapsedWidth:{control:{type:"range",min:40,max:120,step:10}},leftPanelInitialCollapsed:{control:{type:"boolean"}},rightPanelInitialCollapsed:{control:{type:"boolean"}},height:{control:{type:"text"}},leftPanelBg:{control:{type:"color"}},centerPanelBg:{control:{type:"color"}},centerPanelMaxWidth:{control:{type:"text"}},rightPanelBg:{control:{type:"color"}},showCollapseButtons:{control:{type:"boolean"}},stickyPanels:{control:{type:"boolean"}}}},h=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(s,{as:"h3",dividing:!0,children:"Navigation"}),e.jsxs(p,{vertical:!0,fluid:!0,children:[e.jsxs(p.Item,{children:[e.jsx(b,{name:"home"}),"Dashboard"]}),e.jsxs(p.Item,{children:[e.jsx(b,{name:"users"}),"Users"]}),e.jsxs(p.Item,{children:[e.jsx(b,{name:"settings"}),"Settings"]}),e.jsxs(p.Item,{children:[e.jsx(b,{name:"chart bar"}),"Analytics"]})]}),e.jsx(s,{as:"h4",style:{marginTop:"20px"},children:"Quick Actions"}),e.jsxs(t.Group,{vertical:!0,fluid:!0,children:[e.jsx(t,{icon:"plus",content:"New Item"}),e.jsx(t,{icon:"upload",content:"Import"}),e.jsx(t,{icon:"download",content:"Export"})]})]}),u=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(t,{icon:"list",size:"mini",circular:!0,title:"Pages",color:"blue",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"puzzle piece",size:"mini",circular:!0,title:"Components",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"settings",size:"mini",circular:!0,title:"Settings",style:{marginBottom:"4px"}})]}),m=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",backgroundColor:"#f8f9fa",height:"100%"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"8px",textAlign:"center",fontWeight:"bold"},children:"MINI"}),e.jsx(t,{icon:"home",size:"mini",circular:!0,title:"Dashboard",color:"blue",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"users",size:"mini",circular:!0,title:"Users",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"settings",size:"mini",circular:!0,title:"Settings",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"chart bar",size:"mini",circular:!0,title:"Analytics",style:{marginBottom:"4px"}}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100%",margin:"8px 0"}}),e.jsx(t,{icon:"plus",size:"mini",circular:!0,color:"green",title:"Add New",style:{marginBottom:"4px"}})]}),d=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs(s,{as:"h2",children:["Main Content Area",e.jsx(s.Subheader,{children:"This is the primary content area that adapts its width based on panel visibility"})]}),e.jsxs(l.Group,{itemsPerRow:2,children:[e.jsx(l,{children:e.jsxs(l.Content,{children:[e.jsx(l.Header,{children:"Revenue"}),e.jsx(l.Meta,{children:"This month"}),e.jsx(l.Description,{children:"$24,567"})]})}),e.jsx(l,{children:e.jsxs(l.Content,{children:[e.jsx(l.Header,{children:"Orders"}),e.jsx(l.Meta,{children:"Today"}),e.jsx(l.Description,{children:"142 orders"})]})}),e.jsx(l,{children:e.jsxs(l.Content,{children:[e.jsx(l.Header,{children:"Users"}),e.jsx(l.Meta,{children:"Active now"}),e.jsx(l.Description,{children:"1,234 users"})]})}),e.jsx(l,{children:e.jsxs(l.Content,{children:[e.jsx(l.Header,{children:"Growth"}),e.jsx(l.Meta,{children:"vs last month"}),e.jsx(l.Description,{children:"+12.5%"})]})})]}),e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx(s,{as:"h3",children:"Recent Activity"}),e.jsxs(n,{divided:!0,relaxed:!0,children:[e.jsxs(n.Item,{children:[e.jsx(n.Icon,{name:"user",size:"large",verticalAlign:"middle"}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"New user registered"}),e.jsx(n.Description,{children:"John Doe joined 2 minutes ago"})]})]}),e.jsxs(n.Item,{children:[e.jsx(n.Icon,{name:"shopping cart",size:"large",verticalAlign:"middle"}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"Order completed"}),e.jsx(n.Description,{children:"Order #1234 was delivered successfully"})]})]}),e.jsxs(n.Item,{children:[e.jsx(n.Icon,{name:"warning sign",size:"large",verticalAlign:"middle"}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"System alert"}),e.jsx(n.Description,{children:"Server maintenance scheduled for tonight"})]})]})]})]})]}),x=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(s,{as:"h3",dividing:!0,children:"Properties"}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx(s,{as:"h4",children:"Component Settings"}),e.jsxs(n,{children:[e.jsxs(n.Item,{children:[e.jsx("strong",{children:"Type:"})," Hero Banner"]}),e.jsxs(n.Item,{children:[e.jsx("strong",{children:"Status:"})," Active"]}),e.jsxs(n.Item,{children:[e.jsx("strong",{children:"Last Modified:"})," 2 hours ago"]})]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx(s,{as:"h4",children:"Style Options"}),e.jsxs(t.Group,{vertical:!0,fluid:!0,children:[e.jsx(t,{children:"Layout A"}),e.jsx(t,{children:"Layout B"}),e.jsx(t,{children:"Layout C"})]})]}),e.jsxs("div",{children:[e.jsx(s,{as:"h4",children:"Actions"}),e.jsxs(t.Group,{vertical:!0,fluid:!0,children:[e.jsx(t,{color:"blue",icon:"save",content:"Save Changes"}),e.jsx(t,{icon:"copy",content:"Duplicate"}),e.jsx(t,{color:"red",icon:"trash",content:"Delete"})]})]})]}),ye=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",backgroundColor:"#f8f9fa",height:"100%"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"8px",textAlign:"center",fontWeight:"bold"},children:"TOOLS"}),e.jsx(t,{icon:"edit",size:"mini",circular:!0,title:"Edit Properties",color:"blue",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"paint brush",size:"mini",circular:!0,title:"Style Options",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"save",size:"mini",circular:!0,color:"green",title:"Save",style:{marginBottom:"4px"}}),e.jsx(t,{icon:"copy",size:"mini",circular:!0,title:"Duplicate",style:{marginBottom:"4px"}}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100%",margin:"8px 0"}}),e.jsx(t,{icon:"trash",size:"mini",circular:!0,color:"red",title:"Delete",style:{marginBottom:"4px"}})]}),k={args:{leftSidebar:e.jsx(u,{}),leftPanel:e.jsx(h,{}),leftPanelCollapsedContent:e.jsx(m,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(x,{}),leftPanelInitialCollapsed:!1,rightPanelInitialCollapsed:!1,height:"600px"}},B={args:{leftSidebar:e.jsx(u,{}),leftPanel:e.jsx(h,{}),leftPanelCollapsedContent:e.jsx(m,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(x,{}),leftPanelInitialCollapsed:!0,rightPanelInitialCollapsed:!0,centerPanelMaxWidth:"800px",height:"600px"}},w={args:{leftSidebar:e.jsx(u,{}),leftPanel:e.jsx(h,{}),leftPanelCollapsedContent:e.jsx(m,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(x,{}),leftSidebarWidth:80,leftPanelWidth:400,leftPanelCollapsedWidth:80,rightPanelWidth:300,rightPanelCollapsedWidth:70,leftPanelInitialCollapsed:!1,rightPanelInitialCollapsed:!1,height:"600px"}},R={args:{leftSidebar:e.jsx(u,{}),leftPanel:e.jsx(h,{}),leftPanelCollapsedContent:e.jsx(m,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(x,{}),rightPanelCollapsedContent:e.jsx(ye,{}),showCollapseButtons:!1,height:"600px"}},W={args:{leftSidebar:e.jsx(u,{}),leftPanel:e.jsx(h,{}),leftPanelCollapsedContent:e.jsx(m,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(x,{}),leftPanelBg:"#f0f9ff",centerPanelBg:"#fefce8",rightPanelBg:"#f0fdf4",height:"600px"}},N={args:{leftPanel:e.jsx(h,{}),leftPanelCollapsedContent:e.jsx(m,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(x,{}),height:"600px"}},T={args:{leftSidebar:e.jsx(u,{}),leftPanel:e.jsx(h,{}),leftPanelCollapsedContent:e.jsx(m,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(x,{}),rightPanelCollapsedContent:e.jsx(ye,{}),leftPanelInitialCollapsed:!0,rightPanelInitialCollapsed:!0,centerPanelMaxWidth:"1000px",height:"600px"}},z={render:()=>{const[i,f]=y.useState("dashboard"),[g,v]=y.useState("dashboard"),C=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(s,{as:"h3",dividing:!0,children:"Navigation"}),e.jsx(p,{vertical:!0,fluid:!0,children:[{key:"dashboard",icon:"home",label:"Dashboard"},{key:"users",icon:"users",label:"Users"},{key:"settings",icon:"settings",label:"Settings"},{key:"analytics",icon:"chart bar",label:"Analytics"}].map(a=>e.jsxs(p.Item,{active:i===a.key,onClick:()=>{f(a.key),v(a.key)},children:[e.jsx(b,{name:a.icon}),a.label]},a.key))})]}),j=()=>e.jsx("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[{key:"dashboard",icon:"home",label:"Dashboard"},{key:"users",icon:"users",label:"Users"},{key:"settings",icon:"settings",label:"Settings"},{key:"analytics",icon:"chart bar",label:"Analytics"}].map(a=>e.jsx(t,{icon:a.icon,size:"mini",circular:!0,title:a.label,color:i===a.key?"blue":void 0,style:{marginBottom:"4px"},onClick:()=>{f(a.key),v(a.key)}},a.key))}),c=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs(s,{as:"h3",dividing:!0,children:[i.charAt(0).toUpperCase()+i.slice(1)," Settings"]}),e.jsx("p",{children:"Click items in the left panel to see different content here."}),e.jsxs("p",{children:["Currently showing: ",e.jsx("strong",{children:i})]}),i==="dashboard"&&e.jsxs("div",{children:[e.jsx(s,{as:"h4",children:"Dashboard Options"}),e.jsxs(n,{children:[e.jsx(n.Item,{children:"Widget Layout"}),e.jsx(n.Item,{children:"Refresh Rate"}),e.jsx(n.Item,{children:"Data Sources"})]})]}),i==="users"&&e.jsxs("div",{children:[e.jsx(s,{as:"h4",children:"User Management"}),e.jsxs(n,{children:[e.jsx(n.Item,{children:"User Permissions"}),e.jsx(n.Item,{children:"Role Assignment"}),e.jsx(n.Item,{children:"Access Logs"})]})]})]});return e.jsx(ge,{leftSidebar:e.jsx(u,{}),leftPanel:e.jsx(C,{}),leftPanelCollapsedContent:e.jsx(j,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(c,{}),height:"600px",onLeftPanelToggle:a=>console.log("Left panel:",a?"collapsed":"expanded"),onRightPanelToggle:a=>console.log("Right panel:",a?"collapsed":"expanded")})},parameters:{docs:{description:{story:"Interactive demo showing how content in one panel can control content in another panel."}}}};var _,X,J;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    leftSidebar: <LeftSidebarContent />,
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    leftPanelInitialCollapsed: false,
    rightPanelInitialCollapsed: false,
    height: "600px"
  }
}`,...(J=(X=k.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,F,K;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    leftSidebar: <LeftSidebarContent />,
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    leftPanelInitialCollapsed: true,
    rightPanelInitialCollapsed: true,
    centerPanelMaxWidth: "800px",
    height: "600px"
  }
}`,...(K=(F=B.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    leftSidebar: <LeftSidebarContent />,
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    leftSidebarWidth: 80,
    leftPanelWidth: 400,
    leftPanelCollapsedWidth: 80,
    rightPanelWidth: 300,
    rightPanelCollapsedWidth: 70,
    leftPanelInitialCollapsed: false,
    rightPanelInitialCollapsed: false,
    height: "600px"
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,le;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    leftSidebar: <LeftSidebarContent />,
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    rightPanelCollapsedContent: <RightPanelCollapsed />,
    showCollapseButtons: false,
    height: "600px"
  }
}`,...(le=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ae,se,ie;W.parameters={...W.parameters,docs:{...(ae=W.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    leftSidebar: <LeftSidebarContent />,
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    leftPanelBg: "#f0f9ff",
    centerPanelBg: "#fefce8",
    rightPanelBg: "#f0fdf4",
    height: "600px"
  }
}`,...(ie=(se=W.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,re,de;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    height: "600px"
  }
}`,...(de=(re=N.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ce,pe,he;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    leftSidebar: <LeftSidebarContent />,
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    rightPanelCollapsedContent: <RightPanelCollapsed />,
    leftPanelInitialCollapsed: true,
    rightPanelInitialCollapsed: true,
    centerPanelMaxWidth: "1000px",
    height: "600px"
  }
}`,...(he=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,me,xe;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const [rightPanelContent, setRightPanelContent] = useState('dashboard');
    const LeftPanel = () => <div style={{
      padding: '20px'
    }}>
        <Header as="h3" dividing>Navigation</Header>
        <Menu vertical fluid>
          {[{
          key: 'dashboard',
          icon: ('home' as const),
          label: 'Dashboard'
        }, {
          key: 'users',
          icon: ('users' as const),
          label: 'Users'
        }, {
          key: 'settings',
          icon: ('settings' as const),
          label: 'Settings'
        }, {
          key: 'analytics',
          icon: ('chart bar' as const),
          label: 'Analytics'
        }].map(item => <Menu.Item key={item.key} active={selectedItem === item.key} onClick={() => {
          setSelectedItem(item.key);
          setRightPanelContent(item.key);
        }}>
              <Icon name={item.icon} />
              {item.label}
            </Menu.Item>)}
        </Menu>
      </div>;
    const LeftPanelCollapsedNav = () => <div style={{
      padding: '8px 4px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        {[{
        key: 'dashboard',
        icon: ('home' as const),
        label: 'Dashboard'
      }, {
        key: 'users',
        icon: ('users' as const),
        label: 'Users'
      }, {
        key: 'settings',
        icon: ('settings' as const),
        label: 'Settings'
      }, {
        key: 'analytics',
        icon: ('chart bar' as const),
        label: 'Analytics'
      }].map(item => <Button key={item.key} icon={item.icon} size="mini" circular title={item.label} color={selectedItem === item.key ? 'blue' : undefined} style={{
        marginBottom: '4px'
      }} onClick={() => {
        setSelectedItem(item.key);
        setRightPanelContent(item.key);
      }} />)}
      </div>;
    const RightPanel = () => <div style={{
      padding: '20px'
    }}>
        <Header as="h3" dividing>
          {selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1)} Settings
        </Header>
        <p>Click items in the left panel to see different content here.</p>
        <p>Currently showing: <strong>{selectedItem}</strong></p>
        
        {selectedItem === 'dashboard' && <div>
            <Header as="h4">Dashboard Options</Header>
            <List>
              <List.Item>Widget Layout</List.Item>
              <List.Item>Refresh Rate</List.Item>
              <List.Item>Data Sources</List.Item>
            </List>
          </div>}
        
        {selectedItem === 'users' && <div>
            <Header as="h4">User Management</Header>
            <List>
              <List.Item>User Permissions</List.Item>
              <List.Item>Role Assignment</List.Item>
              <List.Item>Access Logs</List.Item>
            </List>
          </div>}
      </div>;
    return <LtLayout leftSidebar={<LeftSidebarContent />} leftPanel={<LeftPanel />} leftPanelCollapsedContent={<LeftPanelCollapsedNav />} centerPanel={<CenterPanelContent />} rightPanel={<RightPanel />} height="600px" onLeftPanelToggle={collapsed => console.log('Left panel:', collapsed ? 'collapsed' : 'expanded')} onRightPanelToggle={collapsed => console.log('Right panel:', collapsed ? 'collapsed' : 'expanded')} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing how content in one panel can control content in another panel.'
      }
    }
  }
}`,...(xe=(me=z.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};const ft=["Default","InitiallyCollapsed","CustomWidths","NoCollapseButtons","CustomColors","NoLeftSidebar","MiniSidebarPattern","InteractiveDemo"];export{W as CustomColors,w as CustomWidths,k as Default,B as InitiallyCollapsed,z as InteractiveDemo,T as MiniSidebarPattern,R as NoCollapseButtons,N as NoLeftSidebar,ft as __namedExportsOrder,xt as default};
