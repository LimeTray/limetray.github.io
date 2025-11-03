import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as j}from"./index-ad58220e.js";import{d as i,o as Ae}from"./styled-components.browser.esm-675ea4f2.js";import{t as l}from"./config-43c6afbd.js";import{L as o}from"./ltButton-612ce8c0.js";import{L as n}from"./index-6dcb29cb.js";import{u as Ne}from"./ThemeContext-71b3bf8d.js";import{L as P}from"./index-7250bef9.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./Card-7a020250.js";const Ve=i.div`
  display: flex;
  position: relative;
  width: 100%;
  height: ${t=>t.height||"100vh"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: ${t=>t.darkMode?t.theme.colors.darkModeBg:t.theme.colors.white};
`,M=i.div`
  transition: all 0.3s ease-in-out;
  overflow: visible;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
  width: ${t=>t.collapsed?`${t.collapsedWidth||60}px`:`${t.width||300}px`};
  background-color: ${t=>t.darkMode?t.bg||t.theme.colors.darkModeBgSecondary:t.bg||t.theme.colors.backgroundSecondary};
`,Ue=i(M)`
  border-right: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,ge=i(M)`
  border-right: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,ye=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  max-width: ${t=>t.maxWidth||"none"};
  background-color: ${t=>t.darkMode?t.bg||t.theme.colors.darkModeBg:t.bg||t.theme.colors.white};
`,be=i(M)`
  border-left: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,Oe=i(M)`
  border-left: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,b=i.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;
`,E=i(o)`
  &&& {
    position: absolute;
    top: 16px;
    z-index: 1001;
    min-width: 32px;
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    
    ${t=>t.position==="left"?"right: -16px;":"left: -16px;"}

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  &&& .lt-icon,
  &&& i {
    margin: 0;
    font-size: 14px;
    line-height: 1;
  }
`,q=i(o)`
  &&& {
    position: absolute;
    top: 16px;
    z-index: 1001;
    min-width: 32px;
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    
    ${t=>{const c=t.sidebarWidth||0,r=t.collapsedWidth||60;return t.position==="left"?`left: ${c+r+-20}px;`:`right: ${c+r+-20}px;`}}

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  &&& .lt-icon,
  &&& i {
    margin: 0;
    font-size: 14px;
    line-height: 1;
  }
`,_e=i(Ve)`
  @media (max-width: 768px) {
    flex-direction: column;
    
    ${ge}, ${be} {
      &&& {
        border: none;
        border-bottom: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
        width: 100%;
        max-width: none;
        flex-shrink: 0;
      }
    }

    ${ye} {
      flex: 1;
      min-height: 300px;
    }

    ${E}, ${q} {
      &&& {
        top: 12px;
        right: 12px;
        position: absolute;
        left: auto;
        z-index: 1001;
      }
    }
  }
`,je=({leftPanel:t,leftPanelCollapsedContent:c,leftSidebar:r,centerPanel:R,rightPanel:f,rightPanelCollapsedContent:s,rightSidebar:z,leftPanelWidth:$=320,leftPanelCollapsedWidth:A=60,leftSidebarWidth:N=60,rightPanelWidth:V=384,rightPanelCollapsedWidth:U=60,rightSidebarWidth:O=60,leftPanelInitialCollapsed:ve=!1,rightPanelInitialCollapsed:Se=!1,onLeftPanelToggle:T,onRightPanelToggle:D,showCollapseButtons:C=!0,className:ke="",style:we,height:Be="100vh",leftPanelBg:Le,centerPanelBg:Ie,rightPanelBg:We,centerPanelMaxWidth:Me,stickyPanels:He=!0,minPanelWidth:Ge=240,maxPanelWidth:Je=600,resizable:Qe=!1,id:Re,...ze})=>{var G;const[u,Te]=j.useState(ve),[g,De]=j.useState(Se);j.useState($),j.useState(V);const a=((G=Ne())==null?void 0:G.theme)==="dark"||!1,Ee=Le||(a?l.colors.darkModeBgSecondary:l.colors.backgroundSecondary),qe=Ie||(a?l.colors.darkModeBg:l.colors.white),$e=We||(a?l.colors.darkModeBgSecondary:l.colors.backgroundSecondary),_=()=>{const y=!u;Te(y),T==null||T(y)},H=()=>{const y=!g;De(y),D==null||D(y)};return e.jsx(Ae,{theme:l,children:e.jsxs(_e,{id:Re,height:Be,className:ke,darkMode:a,style:we,...ze,children:[r&&e.jsx(Ue,{width:N,darkMode:a,children:e.jsx(b,{children:r})}),t&&e.jsxs(ge,{width:$,collapsed:u,collapsedWidth:A,bg:Ee,darkMode:a,children:[e.jsx(b,{children:u?c:t}),C&&!u&&e.jsx(E,{position:"left",onClick:_,size:"tiny",circular:!0,leftElement:e.jsx(n,{icon:"chevron left",fitted:!0}),customStyles:{backgroundColor:a?l.colors.darkModeBgSecondary:l.colors.white,border:`1px solid ${a?l.colors.darkModeBorder:l.colors.border}`,boxShadow:l.shadows.medium,color:a?l.colors.darkModeText:l.colors.text}})]}),t&&u&&C&&e.jsx(q,{position:"left",sidebarWidth:r?N:0,collapsedWidth:A,onClick:_,size:"tiny",circular:!0,leftElement:e.jsx(n,{icon:"chevron right",fitted:!0}),customStyles:{backgroundColor:a?l.colors.darkModeBgSecondary:l.colors.white,border:`1px solid ${a?l.colors.darkModeBorder:l.colors.border}`,boxShadow:l.shadows.large,color:a?l.colors.darkModeText:l.colors.text}}),e.jsx(ye,{bg:qe,maxWidth:Me,darkMode:a,children:e.jsx(b,{children:R})}),f&&e.jsxs(be,{width:V,collapsed:g,collapsedWidth:U,bg:$e,darkMode:a,children:[e.jsx(b,{children:g?s:f}),C&&!g&&e.jsx(E,{position:"right",onClick:H,size:"tiny",circular:!0,leftElement:e.jsx(n,{icon:"chevron right",fitted:!0}),customStyles:{backgroundColor:a?l.colors.darkModeBgSecondary:l.colors.white,border:`1px solid ${a?l.colors.darkModeBorder:l.colors.border}`,boxShadow:l.shadows.medium,color:a?l.colors.darkModeText:l.colors.text}})]}),f&&g&&C&&e.jsx(q,{position:"right",sidebarWidth:z?O:0,collapsedWidth:U,onClick:H,size:"tiny",circular:!0,leftElement:e.jsx(n,{icon:"chevron left",fitted:!0}),customStyles:{backgroundColor:a?l.colors.darkModeBgSecondary:l.colors.white,border:`1px solid ${a?l.colors.darkModeBorder:l.colors.border}`,boxShadow:l.shadows.large,color:a?l.colors.darkModeText:l.colors.text}}),z&&e.jsx(Oe,{width:O,darkMode:a,children:e.jsx(b,{children:z})})]})})},Ce=je;je.__docgenInfo={description:"",methods:[],displayName:"LtLayout",props:{leftPanel:{required:!1,tsType:{name:"ReactNode"},description:"Left panel content"},leftPanelCollapsedContent:{required:!1,tsType:{name:"ReactNode"},description:"Left panel content when collapsed (mini sidebar)"},leftSidebar:{required:!1,tsType:{name:"ReactNode"},description:"Left sidebar navigation"},centerPanel:{required:!1,tsType:{name:"ReactNode"},description:"Center panel content"},rightPanel:{required:!1,tsType:{name:"ReactNode"},description:"Right panel content"},rightPanelCollapsedContent:{required:!1,tsType:{name:"ReactNode"},description:"Right panel content when collapsed (mini sidebar)"},rightSidebar:{required:!1,tsType:{name:"ReactNode"},description:"Right sidebar navigation"},leftPanelWidth:{required:!1,tsType:{name:"number"},description:"Initial width of left panel in pixels",defaultValue:{value:"320",computed:!1}},leftPanelCollapsedWidth:{required:!1,tsType:{name:"number"},description:"Width of left panel when collapsed in pixels",defaultValue:{value:"60",computed:!1}},leftSidebarWidth:{required:!1,tsType:{name:"number"},description:"Width of left sidebar in pixels",defaultValue:{value:"60",computed:!1}},rightPanelWidth:{required:!1,tsType:{name:"number"},description:"Initial width of right panel in pixels",defaultValue:{value:"384",computed:!1}},rightPanelCollapsedWidth:{required:!1,tsType:{name:"number"},description:"Width of right panel when collapsed in pixels",defaultValue:{value:"60",computed:!1}},rightSidebarWidth:{required:!1,tsType:{name:"number"},description:"Width of right sidebar in pixels",defaultValue:{value:"60",computed:!1}},leftPanelInitialCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether left panel is initially collapsed",defaultValue:{value:"false",computed:!1}},rightPanelInitialCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether right panel is initially collapsed",defaultValue:{value:"false",computed:!1}},onLeftPanelToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when left panel collapse state changes"},onRightPanelToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when right panel collapse state changes"},showCollapseButtons:{required:!1,tsType:{name:"boolean"},description:"Whether to show collapse/expand buttons",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for the layout container",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles for the layout container"},height:{required:!1,tsType:{name:"string"},description:"Height of the layout (defaults to 100vh)",defaultValue:{value:'"100vh"',computed:!1}},leftPanelBg:{required:!1,tsType:{name:"string"},description:"Background color of panels"},centerPanelBg:{required:!1,tsType:{name:"string"},description:""},rightPanelBg:{required:!1,tsType:{name:"string"},description:""},centerPanelMaxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width for center panel (prevents it from becoming too wide when side panels collapse)"},stickyPanels:{required:!1,tsType:{name:"boolean"},description:"Whether panels should be sticky (for scrolling)",defaultValue:{value:"true",computed:!1}},minPanelWidth:{required:!1,tsType:{name:"number"},description:"Minimum width for resizable panels",defaultValue:{value:"240",computed:!1}},maxPanelWidth:{required:!1,tsType:{name:"number"},description:"Maximum width for resizable panels",defaultValue:{value:"600",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"Whether panels are resizable",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"ID for the layout container"}}};const Pt={component:Ce,title:"Layout/LtLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
A flexible 3-column layout component with collapsible panels for dashboard and configuration interfaces.

Supports mini sidebar pattern where collapsed panels can show icon navigation instead of disappearing completely. Click the expand buttons to see full panel content.
        `}}},argTypes:{leftPanelWidth:{control:{type:"range",min:200,max:600,step:20}},leftPanelCollapsedWidth:{control:{type:"range",min:40,max:120,step:10}},rightPanelWidth:{control:{type:"range",min:200,max:600,step:20}},rightPanelCollapsedWidth:{control:{type:"range",min:40,max:120,step:10}},leftPanelInitialCollapsed:{control:{type:"boolean"}},rightPanelInitialCollapsed:{control:{type:"boolean"}},height:{control:{type:"text"}},leftPanelBg:{control:{type:"color"}},centerPanelBg:{control:{type:"color"}},centerPanelMaxWidth:{control:{type:"text"}},rightPanelBg:{control:{type:"color"}},showCollapseButtons:{control:{type:"boolean"}},stickyPanels:{control:{type:"boolean"}}}},p=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:"Navigation"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{label:"Dashboard",leftElement:e.jsx(n,{icon:"home",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}}),e.jsx(o,{label:"Users",leftElement:e.jsx(n,{icon:"users",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}}),e.jsx(o,{label:"Settings",leftElement:e.jsx(n,{icon:"settings",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}}),e.jsx(o,{label:"Analytics",leftElement:e.jsx(n,{icon:"chart bar",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}})]}),e.jsx("h4",{style:{marginTop:"20px",marginBottom:"15px"},children:"Quick Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{label:"New Item",leftElement:e.jsx(n,{icon:"plus",fitted:!0}),size:"small"}),e.jsx(o,{label:"Import",leftElement:e.jsx(n,{icon:"upload",fitted:!0}),size:"small"}),e.jsx(o,{label:"Export",leftElement:e.jsx(n,{icon:"download",fitted:!0}),size:"small"})]})]}),x=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(o,{leftElement:e.jsx(n,{icon:"list",fitted:!0}),size:"tiny",circular:!0,title:"Pages",customStyles:{backgroundColor:"#2185d0",color:"white",marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"puzzle piece",fitted:!0}),size:"tiny",circular:!0,title:"Components",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"settings",fitted:!0}),size:"tiny",circular:!0,title:"Settings",transparent:!0,customStyles:{marginBottom:"4px"}})]}),h=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",backgroundColor:"#f8f9fa",height:"100%"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"8px",textAlign:"center",fontWeight:"bold"},children:"MINI"}),e.jsx(o,{leftElement:e.jsx(n,{icon:"home",fitted:!0}),size:"tiny",circular:!0,title:"Dashboard",customStyles:{backgroundColor:"#2185d0",color:"white",marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"users",fitted:!0}),size:"tiny",circular:!0,title:"Users",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"settings",fitted:!0}),size:"tiny",circular:!0,title:"Settings",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"chart bar",fitted:!0}),size:"tiny",circular:!0,title:"Analytics",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100%",margin:"8px 0"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"plus",fitted:!0}),size:"tiny",circular:!0,title:"Add New",customStyles:{backgroundColor:"#00b5ad",color:"white",marginBottom:"4px"}})]}),d=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Main Content Area"}),e.jsx("p",{style:{color:"#666",marginBottom:"30px"},children:"This is the primary content area that adapts its width based on panel visibility"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",marginBottom:"30px"},children:[e.jsx(P,{header:{content:"Revenue",subheader:"This month"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#2185d0"},children:"$24,567"})}),e.jsx(P,{header:{content:"Orders",subheader:"Today"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#00b5ad"},children:"142 orders"})}),e.jsx(P,{header:{content:"Users",subheader:"Active now"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#f2711c"},children:"1,234 users"})}),e.jsx(P,{header:{content:"Growth",subheader:"vs last month"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#21ba45"},children:"+12.5%"})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"20px"},children:"Recent Activity"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx(n,{icon:"user",size:"large"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:"New user registered"}),e.jsx("div",{style:{color:"#666"},children:"John Doe joined 2 minutes ago"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx(n,{icon:"shopping cart",size:"large"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:"Order completed"}),e.jsx("div",{style:{color:"#666"},children:"Order #1234 was delivered successfully"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx(n,{icon:"warning sign",size:"large"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:"System alert"}),e.jsx("div",{style:{color:"#666"},children:"Server maintenance scheduled for tonight"})]})]})]})]})]}),m=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:"Properties"}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{style:{marginBottom:"15px"},children:"Component Settings"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Type:"})," Hero Banner"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," Active"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Last Modified:"})," 2 hours ago"]})]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{style:{marginBottom:"15px"},children:"Style Options"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{label:"Layout A",size:"small",transparent:!0}),e.jsx(o,{label:"Layout B",size:"small",transparent:!0}),e.jsx(o,{label:"Layout C",size:"small",transparent:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"15px"},children:"Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{label:"Save Changes",leftElement:e.jsx(n,{icon:"save",fitted:!0}),customStyles:{backgroundColor:"#2185d0",color:"white"}}),e.jsx(o,{label:"Duplicate",leftElement:e.jsx(n,{icon:"copy",fitted:!0}),transparent:!0}),e.jsx(o,{label:"Delete",leftElement:e.jsx(n,{icon:"trash",fitted:!0}),customStyles:{backgroundColor:"#db2828",color:"white"}})]})]})]}),Pe=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",backgroundColor:"#f8f9fa",height:"100%"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"8px",textAlign:"center",fontWeight:"bold"},children:"TOOLS"}),e.jsx(o,{leftElement:e.jsx(n,{icon:"edit",fitted:!0}),size:"tiny",circular:!0,title:"Edit Properties",customStyles:{backgroundColor:"#2185d0",color:"white",marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"paint brush",fitted:!0}),size:"tiny",circular:!0,title:"Style Options",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"save",fitted:!0}),size:"tiny",circular:!0,title:"Save",customStyles:{backgroundColor:"#21ba45",color:"white",marginBottom:"4px"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"copy",fitted:!0}),size:"tiny",circular:!0,title:"Duplicate",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100%",margin:"8px 0"}}),e.jsx(o,{leftElement:e.jsx(n,{icon:"trash",fitted:!0}),size:"tiny",circular:!0,title:"Delete",customStyles:{backgroundColor:"#db2828",color:"white",marginBottom:"4px"}})]}),v={args:{leftSidebar:e.jsx(x,{}),leftPanel:e.jsx(p,{}),leftPanelCollapsedContent:e.jsx(h,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(m,{}),leftPanelInitialCollapsed:!1,rightPanelInitialCollapsed:!1,height:"600px"}},S={args:{leftSidebar:e.jsx(x,{}),leftPanel:e.jsx(p,{}),leftPanelCollapsedContent:e.jsx(h,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(m,{}),leftPanelInitialCollapsed:!0,rightPanelInitialCollapsed:!0,centerPanelMaxWidth:"800px",height:"600px"}},k={args:{leftSidebar:e.jsx(x,{}),leftPanel:e.jsx(p,{}),leftPanelCollapsedContent:e.jsx(h,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(m,{}),leftSidebarWidth:80,leftPanelWidth:400,leftPanelCollapsedWidth:80,rightPanelWidth:300,rightPanelCollapsedWidth:70,leftPanelInitialCollapsed:!1,rightPanelInitialCollapsed:!1,height:"600px"}},w={args:{leftSidebar:e.jsx(x,{}),leftPanel:e.jsx(p,{}),leftPanelCollapsedContent:e.jsx(h,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(m,{}),rightPanelCollapsedContent:e.jsx(Pe,{}),showCollapseButtons:!1,height:"600px"}},B={args:{leftSidebar:e.jsx(x,{}),leftPanel:e.jsx(p,{}),leftPanelCollapsedContent:e.jsx(h,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(m,{}),leftPanelBg:"#f0f9ff",centerPanelBg:"#fefce8",rightPanelBg:"#f0fdf4",height:"600px"}},L={args:{leftPanel:e.jsx(p,{}),leftPanelCollapsedContent:e.jsx(h,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(m,{}),height:"600px"}},I={args:{leftSidebar:e.jsx(x,{}),leftPanel:e.jsx(p,{}),leftPanelCollapsedContent:e.jsx(h,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(m,{}),rightPanelCollapsedContent:e.jsx(Pe,{}),leftPanelInitialCollapsed:!0,rightPanelInitialCollapsed:!0,centerPanelMaxWidth:"1000px",height:"600px"}},W={render:()=>{const[t,c]=j.useState("dashboard"),r=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:"Navigation"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[{key:"dashboard",icon:"home",label:"Dashboard"},{key:"users",icon:"users",label:"Users"},{key:"settings",icon:"settings",label:"Settings"},{key:"analytics",icon:"chart bar",label:"Analytics"}].map(s=>e.jsx(o,{label:s.label,leftElement:e.jsx(n,{icon:s.icon,fitted:!0}),transparent:t!==s.key,customStyles:{backgroundColor:t===s.key?"#2185d0":"transparent",color:t===s.key?"white":"inherit",justifyContent:"flex-start"},onClick:()=>c(s.key)},s.key))})]}),R=()=>e.jsx("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[{key:"dashboard",icon:"home",label:"Dashboard"},{key:"users",icon:"users",label:"Users"},{key:"settings",icon:"settings",label:"Settings"},{key:"analytics",icon:"chart bar",label:"Analytics"}].map(s=>e.jsx(o,{leftElement:e.jsx(n,{icon:s.icon,fitted:!0}),size:"tiny",circular:!0,title:s.label,customStyles:{backgroundColor:t===s.key?"#2185d0":"transparent",color:t===s.key?"white":"inherit",marginBottom:"4px"},onClick:()=>c(s.key)},s.key))}),f=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:[t.charAt(0).toUpperCase()+t.slice(1)," Settings"]}),e.jsx("p",{children:"Click items in the left panel to see different content here."}),e.jsxs("p",{children:["Currently showing: ",e.jsx("strong",{children:t})]}),t==="dashboard"&&e.jsxs("div",{children:[e.jsx("h4",{children:"Dashboard Options"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{children:"Widget Layout"}),e.jsx("div",{children:"Refresh Rate"}),e.jsx("div",{children:"Data Sources"})]})]}),t==="users"&&e.jsxs("div",{children:[e.jsx("h4",{children:"User Management"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{children:"User Permissions"}),e.jsx("div",{children:"Role Assignment"}),e.jsx("div",{children:"Access Logs"})]})]})]});return e.jsx(Ce,{leftSidebar:e.jsx(x,{}),leftPanel:e.jsx(r,{}),leftPanelCollapsedContent:e.jsx(R,{}),centerPanel:e.jsx(d,{}),rightPanel:e.jsx(f,{}),height:"600px",onLeftPanelToggle:s=>console.log("Left panel:",s?"collapsed":"expanded"),onRightPanelToggle:s=>console.log("Right panel:",s?"collapsed":"expanded")})},parameters:{docs:{description:{story:"Interactive demo showing how content in one panel can control content in another panel."}}}};var J,Q,F;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(F=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};var K,X,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var le,ne,oe;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,se,ie;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,de,ce;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    leftPanel: <LeftPanelContent />,
    leftPanelCollapsedContent: <LeftPanelCollapsed />,
    centerPanel: <CenterPanelContent />,
    rightPanel: <RightPanelContent />,
    height: "600px"
  }
}`,...(ce=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,xe,he;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var me,fe,ue;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const LeftPanel = () => <div style={{
      padding: '20px'
    }}>
        <h3 style={{
        marginBottom: '20px',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '10px'
      }}>Navigation</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          {[{
          key: 'dashboard',
          icon: 'home',
          label: 'Dashboard'
        }, {
          key: 'users',
          icon: 'users',
          label: 'Users'
        }, {
          key: 'settings',
          icon: 'settings',
          label: 'Settings'
        }, {
          key: 'analytics',
          icon: 'chart bar',
          label: 'Analytics'
        }].map(item => <LtButton key={item.key} label={item.label} leftElement={<LtIcon icon={(item.icon as any)} fitted />} transparent={selectedItem !== item.key} customStyles={{
          backgroundColor: selectedItem === item.key ? '#2185d0' : 'transparent',
          color: selectedItem === item.key ? 'white' : 'inherit',
          justifyContent: 'flex-start'
        }} onClick={() => setSelectedItem(item.key)} />)}
        </div>
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
        icon: 'home',
        label: 'Dashboard'
      }, {
        key: 'users',
        icon: 'users',
        label: 'Users'
      }, {
        key: 'settings',
        icon: 'settings',
        label: 'Settings'
      }, {
        key: 'analytics',
        icon: 'chart bar',
        label: 'Analytics'
      }].map(item => <LtButton key={item.key} leftElement={<LtIcon icon={(item.icon as any)} fitted />} size="tiny" circular title={item.label} customStyles={{
        backgroundColor: selectedItem === item.key ? '#2185d0' : 'transparent',
        color: selectedItem === item.key ? 'white' : 'inherit',
        marginBottom: '4px'
      }} onClick={() => setSelectedItem(item.key)} />)}
      </div>;
    const RightPanel = () => <div style={{
      padding: '20px'
    }}>
        <h3 style={{
        marginBottom: '20px',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '10px'
      }}>
          {selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1)} Settings
        </h3>
        <p>Click items in the left panel to see different content here.</p>
        <p>Currently showing: <strong>{selectedItem}</strong></p>
        
        {selectedItem === 'dashboard' && <div>
            <h4>Dashboard Options</h4>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
              <div>Widget Layout</div>
              <div>Refresh Rate</div>
              <div>Data Sources</div>
            </div>
          </div>}
        
        {selectedItem === 'users' && <div>
            <h4>User Management</h4>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
              <div>User Permissions</div>
              <div>Role Assignment</div>
              <div>Access Logs</div>
            </div>
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
}`,...(ue=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:ue.source}}};const vt=["Default","InitiallyCollapsed","CustomWidths","NoCollapseButtons","CustomColors","NoLeftSidebar","MiniSidebarPattern","InteractiveDemo"];export{B as CustomColors,k as CustomWidths,v as Default,S as InitiallyCollapsed,W as InteractiveDemo,I as MiniSidebarPattern,w as NoCollapseButtons,L as NoLeftSidebar,vt as __namedExportsOrder,Pt as default};
