import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as E}from"./index-ad58220e.js";import{d as i,o as ze}from"./styled-components.browser.esm-675ea4f2.js";import{t as c}from"./config-43c6afbd.js";import{L as a}from"./index-f03014ac.js";import{u as Ae}from"./ThemeContext-71b3bf8d.js";import{L as r}from"./ltButton-662e626e.js";import{L as w}from"./index-e5864801.js";import"./_commonjsHelpers-de833af9.js";import"./Button-97fd5a94.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./Icon-5cfe3eb1.js";import"./Label-11060fec.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-25182749.js";import"./includes-c2454020.js";import"./index-4fee7e45.js";import"./Portal-86734c92.js";import"./map-db19bd84.js";import"./Card-def7022a.js";const $e=i.div`
  display: flex;
  position: relative;
  width: 100%;
  height: ${t=>t.height||"100vh"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: ${t=>t.darkMode?t.theme.colors.darkModeBg:t.theme.colors.white};
`,z=i.div`
  transition: all 0.3s ease-in-out;
  overflow: visible;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
  width: ${t=>t.collapsed?`${t.collapsedWidth||60}px`:`${t.width||300}px`};
  background-color: ${t=>t.darkMode?t.bg||t.theme.colors.darkModeBgSecondary:t.bg||t.theme.colors.backgroundSecondary};
`,Ee=i(z)`
  border-right: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,ke=i(z)`
  border-right: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,Se=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  max-width: ${t=>t.maxWidth||"none"};
  background-color: ${t=>t.darkMode?t.bg||t.theme.colors.darkModeBg:t.bg||t.theme.colors.white};
`,Ie=i(z)`
  border-left: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,qe=i(z)`
  border-left: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
`,k=i.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;
`,q=i.button`
  position: absolute;
  top: 16px;
  z-index: 10;
  box-shadow: ${t=>t.theme.shadows.medium};
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(4px);
  background-color: ${t=>t.darkMode?"rgba(62, 58, 58, 0.5)":"rgba(255, 255, 255, 0.5)"};
  border: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
  padding: 6px 8px;
  border-radius: ${t=>t.theme.borderRadius.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${t=>{if(t.position==="left"){const n=t.sidebarWidth||0,o=t.panelWidth||0;return`left: ${n+o-16}px;`}else return`right: ${(t.panelWidth||0)-16}px;`}}

  &:hover {
    transform: scale(1.1);
    box-shadow: ${t=>t.theme.shadows.large};
    background-color: ${t=>t.darkMode?"rgba(62, 58, 58, 0.7)":"rgba(255, 255, 255, 0.7)"};
  }

  &:focus {
    outline: none;
  }

  /* Style the icon inside */
  i.icon {
    margin: 0 !important;
    color: inherit !important;
  }
`,O=i.button`
  position: absolute;
  top: 16px;
  z-index: 10;
  box-shadow: ${t=>t.theme.shadows.medium};
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(4px);
  background-color: ${t=>t.darkMode?"rgba(62, 58, 58, 0.5)":"rgba(255, 255, 255, 0.5)"};
  border: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
  padding: 6px 8px;
  border-radius: ${t=>t.theme.borderRadius.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${t=>{const n=t.sidebarWidth||0,o=t.collapsedWidth||60;return t.position==="left"?`left: ${n+o+-20}px;`:`right: ${n+o+-20}px;`}}

  &:hover {
    transform: scale(1.1);
    box-shadow: ${t=>t.theme.shadows.large};
    background-color: ${t=>t.darkMode?"rgba(62, 58, 58, 0.7)":"rgba(255, 255, 255, 0.7)"};
  }

  &:focus {
    outline: none;
  }

  /* Style the icon inside */
  i.icon {
    margin: 0 !important;
    color: inherit !important;
  }
`,Oe=i($e)`
  @media (max-width: 768px) {
    flex-direction: column;
    
    ${ke}, ${Ie} {
      &&& {
        border: none;
        border-bottom: 1px solid ${t=>t.darkMode?t.theme.colors.darkModeBorder:t.theme.colors.border};
        width: 100%;
        max-width: none;
        flex-shrink: 0;
      }
    }

    ${Se} {
      flex: 1;
      min-height: 300px;
    }

    ${q}, ${O} {
      &&& {
        top: 12px;
        right: 12px;
        position: absolute;
        left: auto;
        z-index: 10;
      }
    }
  }
`,we=({left:t,center:n,right:o,layout:u,buttonStyles:b,className:l="",style:Pe,id:Be,...Re})=>{var F;const H=(t==null?void 0:t.width)??320,_=(t==null?void 0:t.collapsedWidth)??60,A=(t==null?void 0:t.sidebarWidth)??60,V=(o==null?void 0:o.width)??384,G=(o==null?void 0:o.collapsedWidth)??60,$=(o==null?void 0:o.sidebarWidth)??60,We=(u==null?void 0:u.height)??"100vh",S=(u==null?void 0:u.showCollapseButtons)??!0,[f,Le]=E.useState((t==null?void 0:t.initialCollapsed)??!1),[C,Me]=E.useState((o==null?void 0:o.initialCollapsed)??!1),s=((F=Ae())==null?void 0:F.theme)==="dark"||!1,Ne=(t==null?void 0:t.backgroundColor)||(s?c.colors.darkModeBgSecondary:c.colors.backgroundSecondary),Te=(n==null?void 0:n.backgroundColor)||(s?c.colors.darkModeBg:c.colors.white),De=(o==null?void 0:o.backgroundColor)||(s?c.colors.darkModeBgSecondary:c.colors.backgroundSecondary),I=(b==null?void 0:b.iconColor)||(s?c.colors.darkModeText:c.colors.text),J=()=>{var v;const j=!f;Le(j),(v=t==null?void 0:t.onToggle)==null||v.call(t,j)},Q=()=>{var v;const j=!C;Me(j),(v=o==null?void 0:o.onToggle)==null||v.call(o,j)};return e.jsx(ze,{theme:c,children:e.jsxs(Oe,{id:Be,height:We,className:l,darkMode:s,style:Pe,...Re,children:[(t==null?void 0:t.sidebar)&&e.jsx(Ee,{width:A,darkMode:s,children:e.jsx(k,{children:t.sidebar})}),(t==null?void 0:t.content)&&e.jsx(ke,{width:H,collapsed:f,collapsedWidth:_,bg:Ne,darkMode:s,children:e.jsx(k,{children:f?t.collapsedContent:t.content})}),(t==null?void 0:t.content)&&!f&&S&&e.jsx(q,{position:"left",darkMode:s,sidebarWidth:t.sidebar?A:0,panelWidth:H,onClick:J,style:{color:I},children:e.jsx(a,{useReactIcon:!0,reactIconName:"MdChevronLeft",reactIconSet:"md",size:"small"})}),(t==null?void 0:t.content)&&f&&S&&e.jsx(O,{position:"left",darkMode:s,sidebarWidth:t.sidebar?A:0,collapsedWidth:_,onClick:J,style:{color:I},children:e.jsx(a,{useReactIcon:!0,reactIconName:"MdChevronRight",reactIconSet:"md",size:"small"})}),e.jsx(Se,{bg:Te,maxWidth:n==null?void 0:n.maxWidth,darkMode:s,children:e.jsx(k,{children:n==null?void 0:n.content})}),(o==null?void 0:o.content)&&e.jsx(Ie,{width:V,collapsed:C,collapsedWidth:G,bg:De,darkMode:s,children:e.jsx(k,{children:C?o.collapsedContent:o.content})}),(o==null?void 0:o.content)&&!C&&S&&e.jsx(q,{position:"right",darkMode:s,sidebarWidth:o.sidebar?$:0,panelWidth:V,onClick:Q,style:{color:I},children:e.jsx(a,{useReactIcon:!0,reactIconName:"MdChevronRight",reactIconSet:"md",size:"small"})}),(o==null?void 0:o.content)&&C&&S&&e.jsx(O,{position:"right",darkMode:s,sidebarWidth:o.sidebar?$:0,collapsedWidth:G,onClick:Q,style:{color:I},children:e.jsx(a,{useReactIcon:!0,reactIconName:"MdChevronLeft",reactIconSet:"md",size:"small"})}),(o==null?void 0:o.sidebar)&&e.jsx(qe,{width:$,darkMode:s,children:e.jsx(k,{children:o.sidebar})})]})})},d=we;we.__docgenInfo={description:"",methods:[],displayName:"ThreePanelLayout",props:{left:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Panel content */
  content?: ReactNode;
  /** Content when collapsed (mini sidebar) */
  collapsedContent?: ReactNode;
  /** Sidebar navigation */
  sidebar?: ReactNode;
  /** Width in pixels */
  width?: number;
  /** Width when collapsed in pixels */
  collapsedWidth?: number;
  /** Width of sidebar in pixels */
  sidebarWidth?: number;
  /** Whether panel is initially collapsed */
  initialCollapsed?: boolean;
  /** Callback when panel collapse state changes */
  onToggle?: (collapsed: boolean) => void;
  /** Background color */
  backgroundColor?: string;
}`,signature:{properties:[{key:"content",value:{name:"ReactNode",required:!1},description:"Panel content"},{key:"collapsedContent",value:{name:"ReactNode",required:!1},description:"Content when collapsed (mini sidebar)"},{key:"sidebar",value:{name:"ReactNode",required:!1},description:"Sidebar navigation"},{key:"width",value:{name:"number",required:!1},description:"Width in pixels"},{key:"collapsedWidth",value:{name:"number",required:!1},description:"Width when collapsed in pixels"},{key:"sidebarWidth",value:{name:"number",required:!1},description:"Width of sidebar in pixels"},{key:"initialCollapsed",value:{name:"boolean",required:!1},description:"Whether panel is initially collapsed"},{key:"onToggle",value:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}},required:!1},description:"Callback when panel collapse state changes"},{key:"backgroundColor",value:{name:"string",required:!1},description:"Background color"}]}},description:"Left panel configuration"},center:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Center panel content */
  content?: ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Maximum width (prevents it from becoming too wide when side panels collapse) */
  maxWidth?: string;
}`,signature:{properties:[{key:"content",value:{name:"ReactNode",required:!1},description:"Center panel content"},{key:"backgroundColor",value:{name:"string",required:!1},description:"Background color"},{key:"maxWidth",value:{name:"string",required:!1},description:"Maximum width (prevents it from becoming too wide when side panels collapse)"}]}},description:"Center panel configuration"},right:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Panel content */
  content?: ReactNode;
  /** Content when collapsed (mini sidebar) */
  collapsedContent?: ReactNode;
  /** Sidebar navigation */
  sidebar?: ReactNode;
  /** Width in pixels */
  width?: number;
  /** Width when collapsed in pixels */
  collapsedWidth?: number;
  /** Width of sidebar in pixels */
  sidebarWidth?: number;
  /** Whether panel is initially collapsed */
  initialCollapsed?: boolean;
  /** Callback when panel collapse state changes */
  onToggle?: (collapsed: boolean) => void;
  /** Background color */
  backgroundColor?: string;
}`,signature:{properties:[{key:"content",value:{name:"ReactNode",required:!1},description:"Panel content"},{key:"collapsedContent",value:{name:"ReactNode",required:!1},description:"Content when collapsed (mini sidebar)"},{key:"sidebar",value:{name:"ReactNode",required:!1},description:"Sidebar navigation"},{key:"width",value:{name:"number",required:!1},description:"Width in pixels"},{key:"collapsedWidth",value:{name:"number",required:!1},description:"Width when collapsed in pixels"},{key:"sidebarWidth",value:{name:"number",required:!1},description:"Width of sidebar in pixels"},{key:"initialCollapsed",value:{name:"boolean",required:!1},description:"Whether panel is initially collapsed"},{key:"onToggle",value:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}},required:!1},description:"Callback when panel collapse state changes"},{key:"backgroundColor",value:{name:"string",required:!1},description:"Background color"}]}},description:"Right panel configuration"},layout:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Height of the layout (defaults to 100vh) */
  height?: string;
  /** Whether to show collapse/expand buttons */
  showCollapseButtons?: boolean;
}`,signature:{properties:[{key:"height",value:{name:"string",required:!1},description:"Height of the layout (defaults to 100vh)"},{key:"showCollapseButtons",value:{name:"boolean",required:!1},description:"Whether to show collapse/expand buttons"}]}},description:"Layout configuration"},buttonStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Icon color */
  iconColor?: string;
}`,signature:{properties:[{key:"iconColor",value:{name:"string",required:!1},description:"Icon color"}]}},description:"Custom styles for collapse/expand buttons"},className:{required:!1,tsType:{name:"string"},description:"Custom className for the layout container",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles for the layout container"},id:{required:!1,tsType:{name:"string"},description:"ID for the layout container"}}};const m=t=>{const n={...t};return t["left.width"]!==void 0&&(n.left={...n.left,width:t["left.width"]}),t["left.collapsedWidth"]!==void 0&&(n.left={...n.left,collapsedWidth:t["left.collapsedWidth"]}),t["left.initialCollapsed"]!==void 0&&(n.left={...n.left,initialCollapsed:t["left.initialCollapsed"]}),t["left.backgroundColor"]!==void 0&&(n.left={...n.left,backgroundColor:t["left.backgroundColor"]}),t["right.width"]!==void 0&&(n.right={...n.right,width:t["right.width"]}),t["right.collapsedWidth"]!==void 0&&(n.right={...n.right,collapsedWidth:t["right.collapsedWidth"]}),t["right.initialCollapsed"]!==void 0&&(n.right={...n.right,initialCollapsed:t["right.initialCollapsed"]}),t["right.backgroundColor"]!==void 0&&(n.right={...n.right,backgroundColor:t["right.backgroundColor"]}),t["center.backgroundColor"]!==void 0&&(n.center={...n.center,backgroundColor:t["center.backgroundColor"]}),t["center.maxWidth"]!==void 0&&(n.center={...n.center,maxWidth:t["center.maxWidth"]}),t["layout.height"]!==void 0&&(n.layout={...n.layout,height:t["layout.height"]}),t["layout.showCollapseButtons"]!==void 0&&(n.layout={...n.layout,showCollapseButtons:t["layout.showCollapseButtons"]}),t["buttonStyles.iconColor"]!==void 0&&(n.buttonStyles={...n.buttonStyles,iconColor:t["buttonStyles.iconColor"]}),n},mt={component:d,title:"Layout/ThreePanelLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
A flexible 3-panel layout component with collapsible panels for dashboard and configuration interfaces.

Supports mini sidebar pattern where collapsed panels can show icon navigation instead of disappearing completely. Click the expand buttons to see full panel content.
        `}}},argTypes:{"left.width":{control:{type:"range",min:200,max:600,step:20},table:{category:"Left Panel"}},"left.collapsedWidth":{control:{type:"range",min:40,max:120,step:10},table:{category:"Left Panel"}},"left.initialCollapsed":{control:{type:"boolean"},table:{category:"Left Panel"}},"left.backgroundColor":{control:{type:"color"},table:{category:"Left Panel"}},"right.width":{control:{type:"range",min:200,max:600,step:20},table:{category:"Right Panel"}},"right.collapsedWidth":{control:{type:"range",min:40,max:120,step:10},table:{category:"Right Panel"}},"right.initialCollapsed":{control:{type:"boolean"},table:{category:"Right Panel"}},"right.backgroundColor":{control:{type:"color"},table:{category:"Right Panel"}},"center.backgroundColor":{control:{type:"color"},table:{category:"Center Panel"}},"center.maxWidth":{control:{type:"text"},table:{category:"Center Panel"}},"layout.height":{control:{type:"text"},table:{category:"Layout"}},"layout.showCollapseButtons":{control:{type:"boolean"},table:{category:"Layout"}},"buttonStyles.iconColor":{control:{type:"color"},table:{category:"Button Styles"}}}},h=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:"Navigation"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{label:"Dashboard",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdHome",reactIconSet:"md",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}}),e.jsx(r,{label:"Users",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdPeople",reactIconSet:"md",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}}),e.jsx(r,{label:"Settings",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdSettings",reactIconSet:"md",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}}),e.jsx(r,{label:"Analytics",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdBarChart",reactIconSet:"md",fitted:!0}),transparent:!0,style:{justifyContent:"flex-start",textAlign:"left"}})]}),e.jsx("h4",{style:{marginTop:"20px",marginBottom:"15px"},children:"Quick Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{label:"New Item",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdAdd",reactIconSet:"md",fitted:!0}),size:"small"}),e.jsx(r,{label:"Import",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdUpload",reactIconSet:"md",fitted:!0}),size:"small"}),e.jsx(r,{label:"Export",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdDownload",reactIconSet:"md",fitted:!0}),size:"small"})]})]}),x=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdList",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Pages",customStyles:{backgroundColor:"#2185d0",color:"white",marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdExtension",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Components",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdSettings",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Settings",transparent:!0,customStyles:{marginBottom:"4px"}})]}),g=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",backgroundColor:"#f8f9fa",height:"100%"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"8px",textAlign:"center",fontWeight:"bold"},children:"MINI"}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdHome",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Dashboard",customStyles:{backgroundColor:"#2185d0",color:"white",marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdPeople",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Users",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdSettings",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Settings",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdBarChart",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Analytics",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100%",margin:"8px 0"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdAdd",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Add New",customStyles:{backgroundColor:"#00b5ad",color:"white",marginBottom:"4px"}})]}),p=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{style:{marginBottom:"8px"},children:"Main Content Area"}),e.jsx("p",{style:{color:"#666",marginBottom:"30px"},children:"This is the primary content area that adapts its width based on panel visibility"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",marginBottom:"30px"},children:[e.jsx(w,{header:{content:"Revenue",subheader:"This month"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#2185d0"},children:"$24,567"})}),e.jsx(w,{header:{content:"Orders",subheader:"Today"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#00b5ad"},children:"142 orders"})}),e.jsx(w,{header:{content:"Users",subheader:"Active now"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#f2711c"},children:"1,234 users"})}),e.jsx(w,{header:{content:"Growth",subheader:"vs last month"},styled:{padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold",color:"#21ba45"},children:"+12.5%"})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"20px"},children:"Recent Activity"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx(a,{useReactIcon:!0,reactIconName:"MdPerson",reactIconSet:"md",size:"large"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:"New user registered"}),e.jsx("div",{style:{color:"#666"},children:"John Doe joined 2 minutes ago"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx(a,{useReactIcon:!0,reactIconName:"MdShoppingCart",reactIconSet:"md",size:"large"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:"Order completed"}),e.jsx("div",{style:{color:"#666"},children:"Order #1234 was delivered successfully"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx(a,{useReactIcon:!0,reactIconName:"MdWarning",reactIconSet:"md",size:"large"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:"System alert"}),e.jsx("div",{style:{color:"#666"},children:"Server maintenance scheduled for tonight"})]})]})]})]})]}),y=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:"Properties"}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{style:{marginBottom:"15px"},children:"Component Settings"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Type:"})," Hero Banner"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Status:"})," Active"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Last Modified:"})," 2 hours ago"]})]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{style:{marginBottom:"15px"},children:"Style Options"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{label:"Layout A",size:"small",transparent:!0}),e.jsx(r,{label:"Layout B",size:"small",transparent:!0}),e.jsx(r,{label:"Layout C",size:"small",transparent:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"15px"},children:"Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{label:"Save Changes",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdSave",reactIconSet:"md",fitted:!0}),customStyles:{backgroundColor:"#2185d0",color:"white"}}),e.jsx(r,{label:"Duplicate",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdContentCopy",reactIconSet:"md",fitted:!0}),transparent:!0}),e.jsx(r,{label:"Delete",leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdDelete",reactIconSet:"md",fitted:!0}),customStyles:{backgroundColor:"#db2828",color:"white"}})]})]})]}),U=()=>e.jsxs("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",backgroundColor:"#f8f9fa",height:"100%"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"8px",textAlign:"center",fontWeight:"bold"},children:"TOOLS"}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdEdit",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Edit Properties",customStyles:{backgroundColor:"#2185d0",color:"white",marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdBrush",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Style Options",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdSave",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Save",customStyles:{backgroundColor:"#21ba45",color:"white",marginBottom:"4px"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdContentCopy",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Duplicate",transparent:!0,customStyles:{marginBottom:"4px"}}),e.jsx("div",{style:{borderTop:"1px solid #e5e7eb",width:"100%",margin:"8px 0"}}),e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:"MdDelete",reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:"Delete",customStyles:{backgroundColor:"#db2828",color:"white",marginBottom:"4px"}})]}),P={args:{left:{sidebar:e.jsx(x,{}),content:e.jsx(h,{}),collapsedContent:e.jsx(g,{}),initialCollapsed:!1},center:{content:e.jsx(p,{})},right:{content:e.jsx(y,{}),initialCollapsed:!1},layout:{height:"600px"}},render:t=>e.jsx(d,{...m(t)})},B={args:{left:{sidebar:e.jsx(x,{}),content:e.jsx(h,{}),collapsedContent:e.jsx(g,{}),initialCollapsed:!0},center:{content:e.jsx(p,{})},right:{content:e.jsx(y,{}),initialCollapsed:!0},layout:{height:"600px"}},render:t=>e.jsx(d,{...m(t)})},R={args:{left:{sidebar:e.jsx(x,{}),sidebarWidth:80,content:e.jsx(h,{}),collapsedContent:e.jsx(g,{}),width:400,collapsedWidth:80,initialCollapsed:!1},center:{content:e.jsx(p,{})},right:{content:e.jsx(y,{}),width:300,collapsedWidth:70,initialCollapsed:!1},layout:{height:"600px"}},render:t=>e.jsx(d,{...m(t)})},W={args:{left:{sidebar:e.jsx(x,{}),content:e.jsx(h,{}),collapsedContent:e.jsx(g,{})},center:{content:e.jsx(p,{})},right:{content:e.jsx(y,{}),collapsedContent:e.jsx(U,{})},layout:{showCollapseButtons:!1,height:"600px"}},render:t=>e.jsx(d,{...m(t)})},L={args:{left:{sidebar:e.jsx(x,{}),content:e.jsx(h,{}),collapsedContent:e.jsx(g,{}),backgroundColor:"#f0f9ff"},center:{content:e.jsx(p,{}),backgroundColor:"#fefce8"},right:{content:e.jsx(y,{}),backgroundColor:"#f0fdf4"},layout:{height:"600px"}},render:t=>e.jsx(d,{...m(t)})},M={args:{left:{sidebar:e.jsx(x,{}),content:e.jsx(h,{}),collapsedContent:e.jsx(g,{})},center:{content:e.jsx(p,{})},right:{content:e.jsx(y,{}),collapsedContent:e.jsx(U,{})},layout:{height:"600px"},buttonStyles:{iconColor:"#dd1717"}},render:t=>e.jsx(d,{...m(t)}),parameters:{docs:{description:{story:"Demonstrates custom button colors for collapse/expand controls."}}}},N={args:{left:{content:e.jsx(h,{}),collapsedContent:e.jsx(g,{})},center:{content:e.jsx(p,{})},right:{content:e.jsx(y,{})},layout:{height:"600px"}},render:t=>e.jsx(d,{...m(t)})},T={args:{left:{sidebar:e.jsx(x,{}),content:e.jsx(h,{}),collapsedContent:e.jsx(g,{}),initialCollapsed:!0},center:{content:e.jsx(p,{}),maxWidth:"1000px"},right:{content:e.jsx(y,{}),collapsedContent:e.jsx(U,{}),initialCollapsed:!0},layout:{height:"600px"}},render:t=>e.jsx(d,{...m(t)})},D={render:()=>{const[t,n]=E.useState("dashboard"),o=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:"Navigation"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[{key:"dashboard",icon:"MdHome",label:"Dashboard"},{key:"users",icon:"MdPeople",label:"Users"},{key:"settings",icon:"MdSettings",label:"Settings"},{key:"analytics",icon:"MdBarChart",label:"Analytics"}].map(l=>e.jsx(r,{label:l.label,leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:l.icon,reactIconSet:"md",fitted:!0}),transparent:t!==l.key,customStyles:{backgroundColor:t===l.key?"#2185d0":"transparent",color:t===l.key?"white":"inherit",justifyContent:"flex-start"},onClick:()=>n(l.key)},l.key))})]}),u=()=>e.jsx("div",{style:{padding:"8px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[{key:"dashboard",icon:"MdHome",label:"Dashboard"},{key:"users",icon:"MdPeople",label:"Users"},{key:"settings",icon:"MdSettings",label:"Settings"},{key:"analytics",icon:"MdBarChart",label:"Analytics"}].map(l=>e.jsx(r,{leftElement:e.jsx(a,{useReactIcon:!0,reactIconName:l.icon,reactIconSet:"md",fitted:!0}),size:"tiny",circular:!0,title:l.label,customStyles:{backgroundColor:t===l.key?"#2185d0":"transparent",color:t===l.key?"white":"inherit",marginBottom:"4px"},onClick:()=>n(l.key)},l.key))}),b=()=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("h3",{style:{marginBottom:"20px",borderBottom:"1px solid #e5e7eb",paddingBottom:"10px"},children:[t.charAt(0).toUpperCase()+t.slice(1)," Settings"]}),e.jsx("p",{children:"Click items in the left panel to see different content here."}),e.jsxs("p",{children:["Currently showing: ",e.jsx("strong",{children:t})]}),t==="dashboard"&&e.jsxs("div",{children:[e.jsx("h4",{children:"Dashboard Options"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{children:"Widget Layout"}),e.jsx("div",{children:"Refresh Rate"}),e.jsx("div",{children:"Data Sources"})]})]}),t==="users"&&e.jsxs("div",{children:[e.jsx("h4",{children:"User Management"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{children:"User Permissions"}),e.jsx("div",{children:"Role Assignment"}),e.jsx("div",{children:"Access Logs"})]})]})]});return e.jsx(d,{left:{sidebar:e.jsx(x,{}),content:e.jsx(o,{}),collapsedContent:e.jsx(u,{}),onToggle:l=>console.log("Left panel:",l?"collapsed":"expanded")},center:{content:e.jsx(p,{})},right:{content:e.jsx(b,{}),onToggle:l=>console.log("Right panel:",l?"collapsed":"expanded")},layout:{height:"600px"}})},parameters:{docs:{description:{story:"Interactive demo showing how content in one panel can control content in another panel."}}}};var K,X,Y;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    left: {
      sidebar: <LeftSidebarContent />,
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />,
      initialCollapsed: false
    },
    center: {
      content: <CenterPanelContent />
    },
    right: {
      content: <RightPanelContent />,
      initialCollapsed: false
    },
    layout: {
      height: "600px"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />
}`,...(Y=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    left: {
      sidebar: <LeftSidebarContent />,
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />,
      initialCollapsed: true
    },
    center: {
      content: <CenterPanelContent />
    },
    right: {
      content: <RightPanelContent />,
      initialCollapsed: true
    },
    layout: {
      height: "600px"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    left: {
      sidebar: <LeftSidebarContent />,
      sidebarWidth: 80,
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />,
      width: 400,
      collapsedWidth: 80,
      initialCollapsed: false
    },
    center: {
      content: <CenterPanelContent />
    },
    right: {
      content: <RightPanelContent />,
      width: 300,
      collapsedWidth: 70,
      initialCollapsed: false
    },
    layout: {
      height: "600px"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />
}`,...(ae=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,le,se;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    left: {
      sidebar: <LeftSidebarContent />,
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />
    },
    center: {
      content: <CenterPanelContent />
    },
    right: {
      content: <RightPanelContent />,
      collapsedContent: <RightPanelCollapsed />
    },
    layout: {
      showCollapseButtons: false,
      height: "600px"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />
}`,...(se=(le=W.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,de,ce;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    left: {
      sidebar: <LeftSidebarContent />,
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />,
      backgroundColor: "#f0f9ff"
    },
    center: {
      content: <CenterPanelContent />,
      backgroundColor: "#fefce8"
    },
    right: {
      content: <RightPanelContent />,
      backgroundColor: "#f0fdf4"
    },
    layout: {
      height: "600px"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />
}`,...(ce=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,me;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    left: {
      sidebar: <LeftSidebarContent />,
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />
    },
    center: {
      content: <CenterPanelContent />
    },
    right: {
      content: <RightPanelContent />,
      collapsedContent: <RightPanelCollapsed />
    },
    layout: {
      height: "600px"
    },
    buttonStyles: {
      iconColor: "#dd1717"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom button colors for collapse/expand controls.'
      }
    }
  }
}`,...(me=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,xe,ge;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    left: {
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />
    },
    center: {
      content: <CenterPanelContent />
    },
    right: {
      content: <RightPanelContent />
    },
    layout: {
      height: "600px"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />
}`,...(ge=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var ye,be,fe;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    left: {
      sidebar: <LeftSidebarContent />,
      content: <LeftPanelContent />,
      collapsedContent: <LeftPanelCollapsed />,
      initialCollapsed: true
    },
    center: {
      content: <CenterPanelContent />,
      maxWidth: "1000px"
    },
    right: {
      content: <RightPanelContent />,
      collapsedContent: <RightPanelCollapsed />,
      initialCollapsed: true
    },
    layout: {
      height: "600px"
    }
  },
  render: (args: any) => <ThreePanelLayout {...mergeNestedArgs(args)} />
}`,...(fe=(be=T.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,je,ve;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
          icon: 'MdHome',
          label: 'Dashboard'
        }, {
          key: 'users',
          icon: 'MdPeople',
          label: 'Users'
        }, {
          key: 'settings',
          icon: 'MdSettings',
          label: 'Settings'
        }, {
          key: 'analytics',
          icon: 'MdBarChart',
          label: 'Analytics'
        }].map(item => <LtButton key={item.key} label={item.label} leftElement={<LtIcon useReactIcon={true} reactIconName={item.icon} reactIconSet="md" fitted />} transparent={selectedItem !== item.key} customStyles={{
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
        icon: 'MdHome',
        label: 'Dashboard'
      }, {
        key: 'users',
        icon: 'MdPeople',
        label: 'Users'
      }, {
        key: 'settings',
        icon: 'MdSettings',
        label: 'Settings'
      }, {
        key: 'analytics',
        icon: 'MdBarChart',
        label: 'Analytics'
      }].map(item => <LtButton key={item.key} leftElement={<LtIcon useReactIcon={true} reactIconName={item.icon} reactIconSet="md" fitted />} size="tiny" circular title={item.label} customStyles={{
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
    return <ThreePanelLayout left={{
      sidebar: <LeftSidebarContent />,
      content: <LeftPanel />,
      collapsedContent: <LeftPanelCollapsedNav />,
      onToggle: (collapsed: boolean) => console.log('Left panel:', collapsed ? 'collapsed' : 'expanded')
    }} center={{
      content: <CenterPanelContent />
    }} right={{
      content: <RightPanel />,
      onToggle: (collapsed: boolean) => console.log('Right panel:', collapsed ? 'collapsed' : 'expanded')
    }} layout={{
      height: "600px"
    }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing how content in one panel can control content in another panel.'
      }
    }
  }
}`,...(ve=(je=D.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};const ht=["Default","InitiallyCollapsed","CustomWidths","NoCollapseButtons","CustomColors","CustomButtonColors","NoLeftSidebar","MiniSidebarPattern","InteractiveDemo"];export{M as CustomButtonColors,L as CustomColors,R as CustomWidths,P as Default,B as InitiallyCollapsed,D as InteractiveDemo,T as MiniSidebarPattern,W as NoCollapseButtons,N as NoLeftSidebar,ht as __namedExportsOrder,mt as default};
