import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as ue}from"./index-ad58220e.js";import{d as X,o as me}from"./styled-components.browser.esm-675ea4f2.js";import{t}from"./config-43c6afbd.js";import{g as be}from"./requestIdGenerator-f6efc017.js";import{L as s}from"./index-6dcb29cb.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const ge=X.div`
  width: ${({$containerWidth:r})=>r||"100%"};
  justify-content: ${({$justifyContent:r})=>r||"flex-start"};
  display: flex;
  flex-wrap: wrap;
  gap: ${({$gap:r,$tabType:e})=>r!==void 0?r:e==="underline"?"0px":"12px"};
`,ve=X.div`
  outline: none;
  cursor: pointer;
  font-weight: 500;
  min-width: 200px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({$isActive:r,$activeBackgroundColor:e,$inactiveBackgroundColor:a})=>r?e||t.colors.primary:a||"transparent"};
  color: ${({$isActive:r,$activeTextColor:e,$inactiveTextColor:a})=>r?e||"white":a||t.colors.text};

  ${({$tabType:r,$borderRadius:e,$inactiveBorderColor:a,$border:o})=>r==="cylinder"?`
        border-radius: ${e||"25px"};
        padding: 8px 16px;
        ${o!==!1?`border: 1px solid ${a||t.colors.border};`:"border: none;"}

        @media only screen and (min-width: 320px) and (max-width: 992px) {
          padding: 4px 8px;
        }
      `:r==="rectangle"?`
        border-radius: ${e||"4px"};
        padding: 8px 16px;
        ${o!==!1?`border: 1px solid ${a||t.colors.border};`:"border: none;"}

        @media only screen and (min-width: 320px) and (max-width: 992px) {
          padding: 4px 8px;
        }
      `:r==="underline"?`
        padding: 16px 24px;
        ${o!==!1?`border-bottom: 1px solid ${a||t.colors.border};`:"border-bottom: none;"}

        @media only screen and (min-width: 320px) and (max-width: 992px) {
          padding: 8px 16px;
        }
      `:""}

  ${({$isActive:r,$tabType:e,$activeBorderColor:a,$border:o})=>o===!1?"":e==="cylinder"||e==="rectangle"?r?`
        border: 1px solid ${a||t.colors.primary};
      `:"":e==="underline"&&r?`
        border-bottom: 4px solid ${a||t.colors.primary};
      `:""}

  &:hover {
    background-color: ${({$isActive:r,$hoverBackgroundColor:e,$activeBackgroundColor:a})=>r?a||t.colors.primary:e||"rgba(0, 0, 0, 0.05)"};
    ${({$border:r,$hoverBorderColor:e})=>r!==!1?`border-color: ${e||t.colors.border};`:""}
    color: ${({$isActive:r,$hoverTextColor:e,$activeTextColor:a})=>r?a||"white":e||t.colors.text};
  }

  @media only screen and (min-width: 320px) and (max-width: 992px) {
    min-width: auto;
    font-size: 12px;
  }
`;class f extends ue.Component{constructor(e){super(e),this.mapTabItems=(a,o)=>{const{showNumbers:x,tabType:y,selectedTabFunc:T,activeBackgroundColor:Y,activeBorderColor:Z,activeTextColor:ee,borderRadius:re,hoverBackgroundColor:ae,hoverBorderColor:oe,hoverTextColor:ne,inactiveBackgroundColor:te,inactiveBorderColor:se,inactiveTextColor:ie,border:ce}=this.props,{selectedTabIndex:le}=this.state,de=o===le,pe=()=>{this.setState({selectedTabIndex:o},()=>{T&&T(a,o)})};return n.jsxs(ve,{onClick:pe,onKeyDown:()=>{},role:"button",tabIndex:o,$isActive:de,$tabType:y||"cylinder",$activeBackgroundColor:Y,$activeBorderColor:Z,$activeTextColor:ee,$borderRadius:re,$hoverBackgroundColor:ae,$hoverBorderColor:oe,$hoverTextColor:ne,$inactiveBackgroundColor:te,$inactiveBorderColor:se,$inactiveTextColor:ie,$border:ce,children:[a.icon&&n.jsx("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center"},children:a.icon}),x&&`${o+1}. `,a.value]},be())},this.state={selectedTabIndex:0}}componentDidMount(){const{selectedTabIndex:e}=this.props;this.setState({selectedTabIndex:e})}render(){const{tabItems:e,tabType:a,gap:o,justifyContent:x,containerWidth:y}=this.props;return n.jsx(me,{theme:t,children:n.jsx(ge,{$tabType:a,$gap:o,$justifyContent:x,$containerWidth:y,children:e&&e.map(this.mapTabItems)})})}}f.defaultProps={};const fe=f;f.defaultProps={tabItems:[{key:"default",value:"Default"},{key:"large",value:"Large"},{key:"activation",value:"Manage Activation"}],showNumbers:!1,tabType:"cylinder",selectedTabFunc:()=>{},selectedTabIndex:0,gap:void 0,border:!0,justifyContent:"flex-start",containerWidth:"800px"};f.__docgenInfo={description:"",methods:[{name:"mapTabItems",docblock:`Function map Tab Items
@param {TabItem} value contains the value
@param {number} i index of the element`,modifiers:[],params:[{name:"value",description:"contains the value",type:{name:"TabItem",alias:"TabItem"},optional:!1},{name:"i",description:"index of the element",type:{name:"number"},optional:!1}],returns:null,description:"Function map Tab Items"}],displayName:"Tabs",props:{tabItems:{required:!1,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"",defaultValue:{value:`[
  {
    key: 'default',
    value: 'Default'
  },
  {
    key: 'large',
    value: 'Large'
  },
  {
    key: 'activation',
    value: 'Manage Activation'
  }
]`,computed:!1}},showNumbers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tabType:{required:!1,tsType:{name:"union",raw:"'cylinder' | 'rectangle' | 'underline'",elements:[{name:"literal",value:"'cylinder'"},{name:"literal",value:"'rectangle'"},{name:"literal",value:"'underline'"}]},description:"",defaultValue:{value:"'cylinder'",computed:!1}},selectedTabFunc:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TabItem, index: number) => any",signature:{arguments:[{type:{name:"TabItem"},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},selectedTabIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},activeBackgroundColor:{required:!1,tsType:{name:"string"},description:""},activeBorderColor:{required:!1,tsType:{name:"string"},description:""},activeTextColor:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""},hoverBackgroundColor:{required:!1,tsType:{name:"string"},description:""},hoverBorderColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},inactiveBackgroundColor:{required:!1,tsType:{name:"string"},description:""},inactiveBorderColor:{required:!1,tsType:{name:"string"},description:""},inactiveTextColor:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"",defaultValue:{value:"'flex-start'",computed:!1}},containerWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'800px'",computed:!1}}}};const Ge={component:fe,title:"Tabs",tags:["autodocs"]},i={args:{tabType:"cylinder"}},c={args:{tabType:"rectangle"}},l={args:{tabType:"underline"}},d={args:{tabType:"cylinder",gap:"24px"}},p={args:{tabType:"cylinder",activeBackgroundColor:"#7c3aed",activeBorderColor:"#7c3aed",activeTextColor:"white",hoverBackgroundColor:"#ede9fe",hoverTextColor:"#7c3aed",inactiveTextColor:"#6b7280"}},u={args:{tabType:"rectangle",borderRadius:"12px",activeBackgroundColor:"#3b82f6",activeBorderColor:"#3b82f6"}},m={args:{tabType:"cylinder",tabItems:[{key:"home",value:"My Apps",icon:n.jsx(s,{icon:"home"})},{key:"marketing",value:"Marketing",icon:n.jsx(s,{icon:"chart bar"})},{key:"tech",value:"Tech Specs",icon:n.jsx(s,{icon:"cog"})},{key:"settings",value:"Advanced Settings",icon:n.jsx(s,{icon:"users"})}]}},b={args:{tabType:"cylinder",activeBackgroundColor:"#6366f1",activeBorderColor:"#6366f1",activeTextColor:"white",hoverBackgroundColor:"#e0e7ff",hoverTextColor:"#6366f1",borderRadius:"20px",gap:"12px",tabItems:[{key:"home",value:"My Apps",icon:n.jsx(s,{icon:"home"})},{key:"marketing",value:"Marketing",icon:n.jsx(s,{icon:"chart bar"})},{key:"tech",value:"Tech Specs",icon:n.jsx(s,{icon:"cog"})},{key:"settings",value:"Advanced Settings",icon:n.jsx(s,{icon:"users"})}]}},g={args:{tabType:"underline",activeBorderColor:"#3b82f6",activeTextColor:"#3b82f6",hoverBackgroundColor:"#f0f9ff",hoverTextColor:"#3b82f6",inactiveTextColor:"#6b7280",gap:"0px"}},v={args:{tabType:"cylinder",border:!1,activeBackgroundColor:"#10b981",activeTextColor:"white",hoverBackgroundColor:"#d1fae5",hoverTextColor:"#10b981",gap:"0px"}};var h,C,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder"
  }
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var B,I,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    tabType: "rectangle"
  }
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var $,S,j;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    tabType: "underline"
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var q,R,A;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    gap: "24px"
  }
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var L,W,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    activeBackgroundColor: "#7c3aed",
    activeBorderColor: "#7c3aed",
    activeTextColor: "white",
    hoverBackgroundColor: "#ede9fe",
    hoverTextColor: "#7c3aed",
    inactiveTextColor: "#6b7280"
  }
}`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var V,N,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    tabType: "rectangle",
    borderRadius: "12px",
    activeBackgroundColor: "#3b82f6",
    activeBorderColor: "#3b82f6"
  }
}`,...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,_,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    tabItems: [{
      key: "home",
      value: "My Apps",
      icon: <LtIcon icon="home" />
    }, {
      key: "marketing",
      value: "Marketing",
      icon: <LtIcon icon="chart bar" />
    }, {
      key: "tech",
      value: "Tech Specs",
      icon: <LtIcon icon="cog" />
    }, {
      key: "settings",
      value: "Advanced Settings",
      icon: <LtIcon icon="users" />
    }]
  }
}`,...(D=(_=m.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var U,G,P;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    activeBackgroundColor: "#6366f1",
    activeBorderColor: "#6366f1",
    activeTextColor: "white",
    hoverBackgroundColor: "#e0e7ff",
    hoverTextColor: "#6366f1",
    borderRadius: "20px",
    gap: "12px",
    tabItems: [{
      key: "home",
      value: "My Apps",
      icon: <LtIcon icon="home" />
    }, {
      key: "marketing",
      value: "Marketing",
      icon: <LtIcon icon="chart bar" />
    }, {
      key: "tech",
      value: "Tech Specs",
      icon: <LtIcon icon="cog" />
    }, {
      key: "settings",
      value: "Advanced Settings",
      icon: <LtIcon icon="users" />
    }]
  }
}`,...(P=(G=b.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var z,K,O;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    tabType: "underline",
    activeBorderColor: "#3b82f6",
    activeTextColor: "#3b82f6",
    hoverBackgroundColor: "#f0f9ff",
    hoverTextColor: "#3b82f6",
    inactiveTextColor: "#6b7280",
    gap: "0px"
  }
}`,...(O=(K=g.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var H,J,Q;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    border: false,
    activeBackgroundColor: "#10b981",
    activeTextColor: "white",
    hoverBackgroundColor: "#d1fae5",
    hoverTextColor: "#10b981",
    gap: "0px"
  }
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Pe=["CylinderTabs","RectangleTabsWithCurvedEdges","UnderlineTabs","CustomGapTabs","CustomColorsTabs","CustomBorderRadius","TabsWithIcons","StyledTabsWithIcons","UnderlineWithCustomColors","NoBorderTabs"];export{u as CustomBorderRadius,p as CustomColorsTabs,d as CustomGapTabs,i as CylinderTabs,v as NoBorderTabs,c as RectangleTabsWithCurvedEdges,b as StyledTabsWithIcons,m as TabsWithIcons,l as UnderlineTabs,g as UnderlineWithCustomColors,Pe as __namedExportsOrder,Ge as default};
