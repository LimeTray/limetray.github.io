import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as fe}from"./index-ad58220e.js";import{d as X,o as ve}from"./styled-components.browser.esm-675ea4f2.js";import{t as n}from"./config-43c6afbd.js";import{L as s}from"./index-eb89699e.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const ye=X.div`
  width: ${({$containerWidth:e})=>e||"100%"};
  justify-content: ${({$justifyContent:e})=>e||"flex-start"};
  display: flex;
  flex-wrap: wrap;
  gap: ${({$gap:e,$tabType:r})=>e!==void 0?e:r==="underline"?"0px":"12px"};
`,Te=X.div`
  outline: none;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({$tabMinWidth:e})=>e||"auto"};
  background-color: ${({$isActive:e,$activeBackgroundColor:r,$inactiveBackgroundColor:a})=>e?r||n.colors.primary:a||"transparent"};
  color: ${({$isActive:e,$activeTextColor:r,$inactiveTextColor:a})=>e?r||"white":a||n.colors.text};

  ${({$tabType:e,$borderRadius:r,$inactiveBorderColor:a,$border:o,$padding:i,$mobilePadding:c})=>e==="cylinder"?`
        border-radius: ${r||"25px"};
        padding: ${i||"8px 16px"};
        ${o!==!1?`border: 1px solid ${a||n.colors.border};`:"border: none;"}

        @media only screen and (min-width: 320px) and (max-width: 992px) {
          padding: ${c||"4px 8px"};
        }
      `:e==="rectangle"?`
        border-radius: ${r||"4px"};
        padding: ${i||"8px 16px"};
        ${o!==!1?`border: 1px solid ${a||n.colors.border};`:"border: none;"}

        @media only screen and (min-width: 320px) and (max-width: 992px) {
          padding: ${c||"4px 8px"};
        }
      `:e==="underline"?`
        padding: ${i||"16px 24px"};
        ${o!==!1?`border-bottom: 1px solid ${a||n.colors.border};`:"border-bottom: none;"}

        @media only screen and (min-width: 320px) and (max-width: 992px) {
          padding: ${c||"8px 16px"};
        }
      `:""}

  ${({$isActive:e,$tabType:r,$activeBorderColor:a,$border:o})=>o===!1?"":r==="cylinder"||r==="rectangle"?e?`
        border: 1px solid ${a||n.colors.primary};
      `:"":r==="underline"&&e?`
        border-bottom: 4px solid ${a||n.colors.primary};
      `:""}

  &:hover {
    background-color: ${({$isActive:e,$hoverBackgroundColor:r,$activeBackgroundColor:a})=>e?a||n.colors.primary:r||"rgba(0, 0, 0, 0.05)"};
    ${({$border:e,$hoverBorderColor:r})=>e!==!1?`border-color: ${r||n.colors.border};`:""}
    color: ${({$isActive:e,$hoverTextColor:r,$activeTextColor:a})=>e?a||"white":r||n.colors.text};
  }

  @media only screen and (min-width: 320px) and (max-width: 992px) {
    font-size: 12px;
  }

  ${({$customStyles:e})=>e||""}
`;class T extends fe.Component{constructor(r){super(r),this.mapTabItems=(a,o)=>{const{showNumbers:i,tabType:c,selectedTabFunc:x,activeBackgroundColor:Y,activeBorderColor:Z,activeTextColor:ee,borderRadius:re,hoverBackgroundColor:ae,hoverBorderColor:oe,hoverTextColor:te,inactiveBackgroundColor:ne,inactiveBorderColor:se,inactiveTextColor:ie,border:ce,padding:de,mobilePadding:le,tabMinWidth:pe,customStyles:ue}=this.props,{selectedTabIndex:me}=this.state,be=o===me,ge=()=>{this.setState({selectedTabIndex:o},()=>{x&&x(a,o)})};return t.jsxs(Te,{onClick:ge,onKeyDown:()=>{},role:"button",tabIndex:o,$isActive:be,$tabType:c||"cylinder",$activeBackgroundColor:Y,$activeBorderColor:Z,$activeTextColor:ee,$borderRadius:re,$hoverBackgroundColor:ae,$hoverBorderColor:oe,$hoverTextColor:te,$inactiveBackgroundColor:ne,$inactiveBorderColor:se,$inactiveTextColor:ie,$border:ce,$padding:de,$mobilePadding:le,$tabMinWidth:pe,$customStyles:ue,children:[a.icon&&t.jsx("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center"},children:a.icon}),i&&`${o+1}. `,a.value]},a.key??o)},this.state={selectedTabIndex:0}}componentDidMount(){const{selectedTabIndex:r}=this.props;this.setState({selectedTabIndex:r})}render(){const{tabItems:r,tabType:a,gap:o,justifyContent:i,containerWidth:c}=this.props;return t.jsx(ve,{theme:n,children:t.jsx(ye,{$tabType:a,$gap:o,$justifyContent:i,$containerWidth:c,children:r&&r.map(this.mapTabItems)})})}}T.defaultProps={};const xe=T;T.defaultProps={tabItems:[{key:"default",value:"Default"},{key:"large",value:"Large"},{key:"activation",value:"Manage Activation"}],showNumbers:!1,tabType:"cylinder",selectedTabFunc:()=>{},selectedTabIndex:0,gap:void 0,border:!0,justifyContent:"flex-start",containerWidth:"100%",padding:void 0,mobilePadding:void 0,tabMinWidth:void 0,customStyles:void 0};T.__docgenInfo={description:"",methods:[{name:"mapTabItems",docblock:`Function map Tab Items
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
]`,computed:!1}},showNumbers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tabType:{required:!1,tsType:{name:"union",raw:"'cylinder' | 'rectangle' | 'underline'",elements:[{name:"literal",value:"'cylinder'"},{name:"literal",value:"'rectangle'"},{name:"literal",value:"'underline'"}]},description:"",defaultValue:{value:"'cylinder'",computed:!1}},selectedTabFunc:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TabItem, index: number) => any",signature:{arguments:[{type:{name:"TabItem"},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},selectedTabIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},activeBackgroundColor:{required:!1,tsType:{name:"string"},description:""},activeBorderColor:{required:!1,tsType:{name:"string"},description:""},activeTextColor:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""},hoverBackgroundColor:{required:!1,tsType:{name:"string"},description:""},hoverBorderColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},inactiveBackgroundColor:{required:!1,tsType:{name:"string"},description:""},inactiveBorderColor:{required:!1,tsType:{name:"string"},description:""},inactiveTextColor:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"",defaultValue:{value:"'flex-start'",computed:!1}},containerWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'100%'",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},mobilePadding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},tabMinWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},customStyles:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}}}};const ze={component:xe,title:"Tabs",tags:["autodocs"]},d={args:{tabType:"cylinder"}},l={args:{tabType:"rectangle"}},p={args:{tabType:"underline"}},u={args:{tabType:"cylinder",gap:"24px"}},m={args:{tabType:"cylinder",activeBackgroundColor:"#7c3aed",activeBorderColor:"#7c3aed",activeTextColor:"white",hoverBackgroundColor:"#ede9fe",hoverTextColor:"#7c3aed",inactiveTextColor:"#6b7280"}},b={args:{tabType:"rectangle",borderRadius:"12px",activeBackgroundColor:"#3b82f6",activeBorderColor:"#3b82f6"}},g={args:{tabType:"cylinder",tabItems:[{key:"home",value:"My Apps",icon:t.jsx(s,{icon:"home"})},{key:"marketing",value:"Marketing",icon:t.jsx(s,{icon:"chart bar"})},{key:"tech",value:"Tech Specs",icon:t.jsx(s,{icon:"cog"})},{key:"settings",value:"Advanced Settings",icon:t.jsx(s,{icon:"users"})}]}},f={args:{tabType:"cylinder",activeBackgroundColor:"#6366f1",activeBorderColor:"#6366f1",activeTextColor:"white",hoverBackgroundColor:"#e0e7ff",hoverTextColor:"#6366f1",borderRadius:"20px",gap:"12px",tabItems:[{key:"home",value:"My Apps",icon:t.jsx(s,{icon:"home"})},{key:"marketing",value:"Marketing",icon:t.jsx(s,{icon:"chart bar"})},{key:"tech",value:"Tech Specs",icon:t.jsx(s,{icon:"cog"})},{key:"settings",value:"Advanced Settings",icon:t.jsx(s,{icon:"users"})}]}},v={args:{tabType:"underline",activeBorderColor:"#3b82f6",activeTextColor:"#3b82f6",hoverBackgroundColor:"#f0f9ff",hoverTextColor:"#3b82f6",inactiveTextColor:"#6b7280",gap:"0px"}},y={args:{tabType:"cylinder",border:!1,activeBackgroundColor:"#10b981",activeTextColor:"white",hoverBackgroundColor:"#d1fae5",hoverTextColor:"#10b981",gap:"0px"}};var h,C,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder"
  }
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var B,I,$;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    tabType: "rectangle"
  }
}`,...($=(I=l.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var w,S,q;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tabType: "underline"
  }
}`,...(q=(S=p.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var j,W,M;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    gap: "24px"
  }
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var V,A,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    activeBackgroundColor: "#7c3aed",
    activeBorderColor: "#7c3aed",
    activeTextColor: "white",
    hoverBackgroundColor: "#ede9fe",
    hoverTextColor: "#7c3aed",
    inactiveTextColor: "#6b7280"
  }
}`,...(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var R,N,E;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tabType: "rectangle",
    borderRadius: "12px",
    activeBackgroundColor: "#3b82f6",
    activeBorderColor: "#3b82f6"
  }
}`,...(E=(N=b.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,_,D;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(_=g.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,U,G;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(U=f.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var z,K,O;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    tabType: "underline",
    activeBorderColor: "#3b82f6",
    activeTextColor: "#3b82f6",
    hoverBackgroundColor: "#f0f9ff",
    hoverTextColor: "#3b82f6",
    inactiveTextColor: "#6b7280",
    gap: "0px"
  }
}`,...(O=(K=v.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var H,J,Q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    tabType: "cylinder",
    border: false,
    activeBackgroundColor: "#10b981",
    activeTextColor: "white",
    hoverBackgroundColor: "#d1fae5",
    hoverTextColor: "#10b981",
    gap: "0px"
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ke=["CylinderTabs","RectangleTabsWithCurvedEdges","UnderlineTabs","CustomGapTabs","CustomColorsTabs","CustomBorderRadius","TabsWithIcons","StyledTabsWithIcons","UnderlineWithCustomColors","NoBorderTabs"];export{b as CustomBorderRadius,m as CustomColorsTabs,u as CustomGapTabs,d as CylinderTabs,y as NoBorderTabs,l as RectangleTabsWithCurvedEdges,f as StyledTabsWithIcons,g as TabsWithIcons,p as UnderlineTabs,v as UnderlineWithCustomColors,Ke as __namedExportsOrder,ze as default};
