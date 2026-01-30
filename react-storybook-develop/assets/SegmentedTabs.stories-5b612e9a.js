import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as d,R as G}from"./index-ad58220e.js";import{d as O,o as Oe}from"./styled-components.browser.esm-675ea4f2.js";import{t as ke}from"./config-43c6afbd.js";import{L as We}from"./ltButton-3f888cf3.js";import{L as u}from"./index-c4e29528.js";import{u as Me}from"./ThemeContext-71b3bf8d.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const Le=O.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  overflow: hidden;
  background: ${({darkMode:e,theme:t,containerBgColor:r})=>r||(e?t.colors.darkModeBgSecondary:t.colors.grey)};
  border: ${({darkMode:e,theme:t,containerBorderWidth:r,containerBorderColor:o})=>{const l=r||"1px",m=o||(e?t.colors.darkModeBorder:t.colors.border);return`${l} solid ${m}`}};
  padding: ${({theme:e})=>e.spacing.xxs};
  gap: ${({theme:e,gap:t})=>t||e.spacing.xxs};
  
  ${({fullWidth:e})=>e&&`
      & > * {
        flex: 1;
      }
    `}
`,qe=O.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing.xxs};
  bottom: ${({theme:e})=>e.spacing.xxs};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  background: ${({darkMode:e,theme:t,selectedBgColor:r})=>r||(e?t.colors.darkModeBgSecondary:t.colors.primary)};
  border: ${({darkMode:e,theme:t})=>`1px solid ${e?t.colors.darkModeBorder:"transparent"}`};
  box-shadow: ${({darkMode:e,theme:t})=>e?t.shadows.medium.replace("0.1","0.3"):t.shadows.small};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 0;
`,y=(e,t,r,o)=>e?o||(t?r.colors.darkModeText:r.colors.white):t?r.colors.darkModeText:r.colors.text,x=(e,t,r,o,l)=>e?o||(t?r.colors.darkModeText:r.colors.white):l||(t?r.colors.darkModeText:r.colors.text),xe=(e,t,r,o)=>e?"transparent":o||(t?r.colors.darkModeBgSecondary:r.colors.backgroundSecondary),Re=O.div`
  position: relative;
  z-index: 1;
  
  &&& .ltButton {
    margin: 0;
    width: 100%;
    border-radius: ${({theme:e})=>e.borderRadius.large};
    min-width: 64px;
    padding: ${({theme:e})=>`${e.spacing.xxs} ${e.spacing.sm}`};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background: transparent;
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o})=>y(e,t,r,o)};
    border: none;
    box-shadow: none;
    
    &:hover {
      background: ${({isSelected:e,hoverBgColor:t,darkMode:r,theme:o})=>xe(e,r,o,t)};
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:l})=>x(e,t,r,o,l)};
      opacity: ${({isSelected:e})=>1};
    }
    
    .leftElement, .label, .rightElement {
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o})=>y(e,t,r,o)};
      transition: color 0.2s ease;
    }
    
    /* Reduce gap between icon and text */
    .leftElement {
      margin-right: ${({theme:e})=>e.spacing.xxs} !important;
    }
    
    .rightElement {
      margin-left: ${({theme:e})=>e.spacing.xxs} !important;
    }
    
    /* Override LtIcon color for selected state */
    .leftElement i.icon, .rightElement i.icon {
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o})=>y(e,t,r,o)} !important;
      transition: color 0.2s ease;
    }
    
    &:hover .leftElement, &:hover .label, &:hover .rightElement {
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:l})=>x(e,t,r,o,l)};
    }
    
    /* Override LtIcon color on hover */
    &:hover .leftElement i.icon, &:hover .rightElement i.icon {
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:l})=>x(e,t,r,o,l)} !important;
    }
  }
`,De=O.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({theme:e})=>e.spacing.xl};
  min-height: ${({theme:e})=>e.spacing.xl};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${({theme:e})=>e.borderRadius.large};
  background: transparent;
  color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o})=>y(e,t,r,o)};
  border: none;
  box-shadow: none;
  
  &:hover {
    background: ${({isSelected:e,hoverBgColor:t,darkMode:r,theme:o})=>xe(e,r,o,t)};
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:l})=>x(e,t,r,o,l)};
    opacity: ${({isSelected:e})=>1};
  }
  
  /* Ensure perfect icon centering by resetting Semantic UI icon styles */
  i.icon {
    margin: 0 !important;
    line-height: 1 !important;
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o})=>y(e,t,r,o)} !important;
    transition: color 0.2s ease;
  }
  
  &:hover i.icon {
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:l})=>x(e,t,r,o,l)} !important;
  }
`,f=({options:e,selectedId:t,onSelectionChange:r,size:o="medium",fullWidth:l=!1,disabled:m=!1,className:Se,iconOnly:ve=!1,selectedBgColor:k,selectedTextColor:L,hoverBgColor:q,hoverTextColor:R,containerBgColor:Ie,containerBorderColor:Te,containerBorderWidth:Ce,gap:D})=>{const b=Me().theme==="dark",F=d.useRef(null),W=d.useRef([]),[M,ze]=d.useState({left:0,width:0}),$e=ve||e.every(s=>!s.label&&(s.leftElement||s.rightElement));d.useEffect(()=>{const s=e.findIndex(p=>p.id===t);if(s===-1)return;const i=W.current[s],g=F.current;if(!i||!g)return;const h=i.getBoundingClientRect(),S=g.getBoundingClientRect();ze({left:h.left-S.left,width:h.width})},[t,e,l,D]);const Be=s=>s==="medium"?"large":s,Ee=s=>G.isValidElement(s)&&s.props&&s.props.icon?s.props.icon:null,V=s=>{var i;m||s.disabled||(r==null||r(s.id),(i=s.onClick)==null||i.call(s))};return n.jsx(Oe,{theme:ke,children:n.jsxs(Le,{ref:F,fullWidth:l,className:Se,darkMode:b,containerBgColor:Ie,containerBorderColor:Te,containerBorderWidth:Ce,gap:D,children:[n.jsx(qe,{darkMode:b,selectedBgColor:k,style:{left:`${M.left}px`,width:`${M.width}px`,opacity:M.width===0?0:1}}),e.map((s,i)=>{const g=t===s.id,h=i===0,S=i===e.length-1;if($e){const p=s.leftElement||s.rightElement,je=Ee(p);return n.jsx(De,{ref:we=>W.current[i]=we,isFirst:h,isLast:S,isSelected:g,darkMode:b,selectedBgColor:k,selectedTextColor:L,hoverBgColor:q,hoverTextColor:R,onClick:()=>V(s),children:G.isValidElement(p)?p:n.jsx(u,{icon:je,size:Be(o),disabled:m||s.disabled,fitted:!0})},s.id)}else return n.jsx(Re,{ref:p=>W.current[i]=p,isFirst:h,isLast:S,isSelected:g,darkMode:b,selectedBgColor:k,selectedTextColor:L,hoverBgColor:q,hoverTextColor:R,children:n.jsx(We,{label:s.label,leftElement:s.leftElement,rightElement:s.rightElement,size:o,disabled:m||s.disabled,onClick:()=>V(s),transparent:!0,border:!1})},s.id)})]})})};f.__docgenInfo={description:"",methods:[],displayName:"SegmentedTabs",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"TabOption"}],raw:"TabOption[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedId: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedId"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},selectedTextColor:{required:!1,tsType:{name:"string"},description:""},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},containerBgColor:{required:!1,tsType:{name:"string"},description:""},containerBorderColor:{required:!1,tsType:{name:"string"},description:""},containerBorderWidth:{required:!1,tsType:{name:"string"},description:""},gap:{required:!1,tsType:{name:"string"},description:""}}};const mt={title:"SegmentedTabs",component:f,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["mini","tiny","small","medium","large","big","huge","massive"]},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},selectedBgColor:{control:{type:"color"}},selectedTextColor:{control:{type:"color"}},hoverBgColor:{control:{type:"color"}},hoverTextColor:{control:{type:"color"}},containerBgColor:{control:{type:"color"}},containerBorderColor:{control:{type:"color"}},containerBorderWidth:{control:{type:"text"}},gap:{control:{type:"text"},description:'Gap between tabs (e.g., "4px", "8px", "1rem")'}}},a=[{id:"layout",label:"Layout"},{id:"styling",label:"Styling"},{id:"content",label:"Content"}],Fe=[{id:"layout",label:"Layout",leftElement:n.jsx(u,{icon:"th",size:"small"})},{id:"styling",label:"Styling",leftElement:n.jsx(u,{icon:"paint brush",size:"small"})},{id:"content",label:"Content",leftElement:n.jsx(u,{icon:"file text",size:"small"})}],be=[{id:"mobile",leftElement:n.jsx(u,{icon:"mobile",size:"small"})},{id:"tablet",leftElement:n.jsx(u,{icon:"tablet",size:"small"})},{id:"computer",leftElement:n.jsx(u,{icon:"computer",size:"small"})}],c=e=>{var o;const[t,r]=d.useState(e.selectedId||((o=e.options[0])==null?void 0:o.id));return n.jsx(f,{...e,selectedId:t,onSelectionChange:r})},v={render:c,args:{options:a,selectedId:"layout",size:"small"}},I={render:c,args:{options:Fe,selectedId:"layout",size:"small",hoverTextColor:"#2563eb"}},T={render:c,args:{options:be,selectedId:"computer",size:"small"}},C={render:c,args:{options:a,selectedId:"layout",size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"400px"},children:n.jsx(e,{})})]},z={render:c,args:{options:be,selectedId:"computer",size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"300px"},children:n.jsx(e,{})})]},$={render:c,args:{options:a,selectedId:"layout",size:"small",selectedBgColor:"#e74c3c",selectedTextColor:"#ffffff",hoverBgColor:"#f8f9fa",hoverTextColor:"#e74c3c",containerBgColor:"#f8f9fa"}},B={render:()=>{const[e,t]=d.useState("layout"),[r,o]=d.useState("styling"),[l,m]=d.useState("content");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Small Size"}),n.jsx(f,{options:a,selectedId:e,onSelectionChange:t,size:"small"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Medium Size"}),n.jsx(f,{options:a,selectedId:r,onSelectionChange:o,size:"medium"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Large Size"}),n.jsx(f,{options:a,selectedId:l,onSelectionChange:m,size:"large"})]})]})}},E={render:c,args:{options:a,selectedId:"layout",size:"small",disabled:!0}},j={render:c,args:{options:a,selectedId:"layout",size:"small",containerBgColor:"#ffffff",containerBorderColor:"#3b82f6",containerBorderWidth:"2px",selectedBgColor:"#3b82f6",selectedTextColor:"#ffffff"}},w={render:c,args:{options:a,selectedId:"layout",size:"small",gap:"12px"}};var _,N,H;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small'
  }
}`,...(H=(N=v.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var A,U,Z;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: optionsWithIcons,
    selectedId: 'layout',
    size: 'small',
    hoverTextColor: '#2563eb' // Blue hover color to demonstrate it works with icons
  }
}`,...(Z=(U=I.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var J,K,P;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: iconOnlyOptions,
    selectedId: 'computer',
    size: 'small'
  }
}`,...(P=(K=T.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,X,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,re;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: iconOnlyOptions,
    selectedId: 'computer',
    size: 'small',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...(re=(te=z.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,se,ne;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    selectedBgColor: '#e74c3c',
    selectedTextColor: '#ffffff',
    hoverBgColor: '#f8f9fa',
    hoverTextColor: '#e74c3c',
    containerBgColor: '#f8f9fa'
  }
}`,...(ne=(se=$.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,ae;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [selectedSmall, setSelectedSmall] = useState('layout');
    const [selectedMedium, setSelectedMedium] = useState('styling');
    const [selectedLarge, setSelectedLarge] = useState('content');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center'
    }}>
        <div>
          <h3>Small Size</h3>
          <SegmentedTabs options={basicOptions} selectedId={selectedSmall} onSelectionChange={setSelectedSmall} size="small" />
        </div>
        
        <div>
          <h3>Medium Size</h3>
          <SegmentedTabs options={basicOptions} selectedId={selectedMedium} onSelectionChange={setSelectedMedium} size="medium" />
        </div>
        
        <div>
          <h3>Large Size</h3>
          <SegmentedTabs options={basicOptions} selectedId={selectedLarge} onSelectionChange={setSelectedLarge} size="large" />
        </div>
      </div>;
  }
}`,...(ae=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var ce,de,me;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    disabled: true
  }
}`,...(me=(de=E.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,fe;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    containerBgColor: '#ffffff',
    containerBorderColor: '#3b82f6',
    containerBorderWidth: '2px',
    selectedBgColor: '#3b82f6',
    selectedTextColor: '#ffffff'
  }
}`,...(fe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var ge,he,ye;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    gap: '12px'
  }
}`,...(ye=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const pt=["Default","WithIcons","IconOnly","FullWidth","FullWidthIconOnly","CustomColors","DifferentSizes","Disabled","CustomBorder","CustomGap"];export{j as CustomBorder,$ as CustomColors,w as CustomGap,v as Default,B as DifferentSizes,E as Disabled,C as FullWidth,z as FullWidthIconOnly,T as IconOnly,I as WithIcons,pt as __namedExportsOrder,mt as default};
