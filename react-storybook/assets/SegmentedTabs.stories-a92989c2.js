import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as c,R as G}from"./index-ad58220e.js";import{d as O,o as Me}from"./styled-components.browser.esm-675ea4f2.js";import{t as Re}from"./config-43c6afbd.js";import{L as ke}from"./ltButton-75277577.js";import{L as g}from"./index-b90b37f7.js";import{u as We}from"./ThemeContext-71b3bf8d.js";import"./_commonjsHelpers-de833af9.js";import"./Button-a1cbfca3.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./Icon-5cfe3eb1.js";import"./Label-78d4db42.js";import"./ModernAutoControlledComponent-ac79fba3.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-e61b253b.js";import"./includes-03b4ffc2.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./Portal-392918f3.js";import"./map-db19bd84.js";const Le=O.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  overflow: hidden;
  background: ${({darkMode:e,theme:t,containerBgColor:r})=>r||(e?t.colors.darkModeBgSecondary:t.colors.grey)};
  border: ${({darkMode:e,theme:t,containerBorderWidth:r,containerBorderColor:o})=>{const a=r||"1px",u=o||(e?t.colors.darkModeBorder:t.colors.border);return`${a} solid ${u}`}};
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
`,y=(e,t,r,o)=>e?o||(t?r.colors.darkModeText:r.colors.white):t?r.colors.darkModeText:r.colors.text,x=(e,t,r,o,a)=>e?o||(t?r.colors.darkModeText:r.colors.white):a||(t?r.colors.darkModeText:r.colors.text),be=(e,t,r,o)=>e?"transparent":o||(t?r.colors.darkModeBgSecondary:r.colors.backgroundSecondary),De=O.div`
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
      background: ${({isSelected:e,hoverBgColor:t,darkMode:r,theme:o})=>be(e,r,o,t)};
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:a})=>x(e,t,r,o,a)};
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
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:a})=>x(e,t,r,o,a)};
    }
    
    /* Override LtIcon color on hover */
    &:hover .leftElement i.icon, &:hover .rightElement i.icon {
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:a})=>x(e,t,r,o,a)} !important;
    }
  }
`,Ne=O.div`
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
    background: ${({isSelected:e,hoverBgColor:t,darkMode:r,theme:o})=>be(e,r,o,t)};
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:a})=>x(e,t,r,o,a)};
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
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:a})=>x(e,t,r,o,a)} !important;
  }
`,h=({options:e,selectedId:t,onSelectionChange:r,size:o="medium",fullWidth:a=!1,disabled:u=!1,className:Ie,iconOnly:ve=!1,selectedBgColor:M,selectedTextColor:q,hoverBgColor:D,hoverTextColor:N,containerBgColor:Te,containerBorderColor:ze,containerBorderWidth:Ce,gap:F})=>{const b=We().theme==="dark",R=c.useRef(null),k=c.useRef([]),[W,$e]=c.useState({left:0,width:0}),Be=ve||e.every(s=>!s.label&&(s.leftElement||s.rightElement)),L=()=>{const s=e.findIndex(f=>f.id===t);if(s===-1)return;const i=k.current[s],l=R.current;if(!i||!l)return;const p=i.getBoundingClientRect(),S=l.getBoundingClientRect();$e({left:p.left-S.left,width:p.width})};c.useEffect(()=>{L()},[t,e,a,F]),c.useEffect(()=>{const s=R.current;if(!s)return;const i=new ResizeObserver(()=>{L()});i.observe(s);let l;const p=()=>{clearTimeout(l),l=setTimeout(()=>{L()},150)};return window.addEventListener("resize",p),()=>{i.disconnect(),window.removeEventListener("resize",p),clearTimeout(l)}},[t,e]);const Ee=s=>s==="medium"?"large":s,we=s=>G.isValidElement(s)&&s.props&&s.props.icon?s.props.icon:null,V=s=>{var i;u||s.disabled||(r==null||r(s.id),(i=s.onClick)==null||i.call(s))};return n.jsx(Me,{theme:Re,children:n.jsxs(Le,{ref:R,fullWidth:a,className:Ie,darkMode:b,containerBgColor:Te,containerBorderColor:ze,containerBorderWidth:Ce,gap:F,children:[n.jsx(qe,{darkMode:b,selectedBgColor:M,style:{left:`${W.left}px`,width:`${W.width}px`,opacity:W.width===0?0:1}}),e.map((s,i)=>{const l=t===s.id,p=i===0,S=i===e.length-1;if(Be){const f=s.leftElement||s.rightElement,je=we(f);return n.jsx(Ne,{ref:Oe=>k.current[i]=Oe,isFirst:p,isLast:S,isSelected:l,darkMode:b,selectedBgColor:M,selectedTextColor:q,hoverBgColor:D,hoverTextColor:N,onClick:()=>V(s),children:G.isValidElement(f)?f:n.jsx(g,{icon:je,size:Ee(o),disabled:u||s.disabled,fitted:!0})},s.id)}else return n.jsx(De,{ref:f=>k.current[i]=f,isFirst:p,isLast:S,isSelected:l,darkMode:b,selectedBgColor:M,selectedTextColor:q,hoverBgColor:D,hoverTextColor:N,children:n.jsx(ke,{label:s.label,leftElement:s.leftElement,rightElement:s.rightElement,size:o,disabled:u||s.disabled,onClick:()=>V(s),transparent:!0,border:!1})},s.id)})]})})};h.__docgenInfo={description:"",methods:[],displayName:"SegmentedTabs",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"TabOption"}],raw:"TabOption[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedId: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedId"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},selectedTextColor:{required:!1,tsType:{name:"string"},description:""},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},containerBgColor:{required:!1,tsType:{name:"string"},description:""},containerBorderColor:{required:!1,tsType:{name:"string"},description:""},containerBorderWidth:{required:!1,tsType:{name:"string"},description:""},gap:{required:!1,tsType:{name:"string"},description:""}}};const mt={title:"SegmentedTabs",component:h,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["mini","tiny","small","medium","large","big","huge","massive"]},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},selectedBgColor:{control:{type:"color"}},selectedTextColor:{control:{type:"color"}},hoverBgColor:{control:{type:"color"}},hoverTextColor:{control:{type:"color"}},containerBgColor:{control:{type:"color"}},containerBorderColor:{control:{type:"color"}},containerBorderWidth:{control:{type:"text"}},gap:{control:{type:"text"},description:'Gap between tabs (e.g., "4px", "8px", "1rem")'}}},d=[{id:"layout",label:"Layout"},{id:"styling",label:"Styling"},{id:"content",label:"Content"}],Fe=[{id:"layout",label:"Layout",leftElement:n.jsx(g,{useReactIcon:!0,reactIconName:"MdApps",reactIconSet:"md",size:"small"})},{id:"styling",label:"Styling",leftElement:n.jsx(g,{useReactIcon:!0,reactIconName:"MdBrush",reactIconSet:"md",size:"small"})},{id:"content",label:"Content",leftElement:n.jsx(g,{useReactIcon:!0,reactIconName:"MdDescription",reactIconSet:"md",size:"small"})}],Se=[{id:"mobile",leftElement:n.jsx(g,{useReactIcon:!0,reactIconName:"MdSmartphone",reactIconSet:"md",size:"small"})},{id:"tablet",leftElement:n.jsx(g,{useReactIcon:!0,reactIconName:"MdOutlineTabletMac",reactIconSet:"md",size:"small"})},{id:"computer",leftElement:n.jsx(g,{useReactIcon:!0,reactIconName:"MdComputer",reactIconSet:"md",size:"small"})}],m=e=>{var o;const[t,r]=c.useState(e.selectedId||((o=e.options[0])==null?void 0:o.id));return n.jsx(h,{...e,selectedId:t,onSelectionChange:r})},I={render:m,args:{options:d,selectedId:"layout",size:"small"}},v={render:m,args:{options:Fe,selectedId:"layout",size:"small",hoverTextColor:"#2563eb"}},T={render:m,args:{options:Se,selectedId:"computer",size:"small"}},z={render:m,args:{options:d,selectedId:"layout",size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"400px"},children:n.jsx(e,{})})]},C={render:m,args:{options:Se,selectedId:"computer",size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"300px"},children:n.jsx(e,{})})]},$={render:m,args:{options:d,selectedId:"layout",size:"small",selectedBgColor:"#e74c3c",selectedTextColor:"#ffffff",hoverBgColor:"#f8f9fa",hoverTextColor:"#e74c3c",containerBgColor:"#f8f9fa"}},B={render:()=>{const[e,t]=c.useState("layout"),[r,o]=c.useState("styling"),[a,u]=c.useState("content");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Small Size"}),n.jsx(h,{options:d,selectedId:e,onSelectionChange:t,size:"small"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Medium Size"}),n.jsx(h,{options:d,selectedId:r,onSelectionChange:o,size:"medium"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Large Size"}),n.jsx(h,{options:d,selectedId:a,onSelectionChange:u,size:"large"})]})]})}},E={render:m,args:{options:d,selectedId:"layout",size:"small",disabled:!0}},w={render:m,args:{options:d,selectedId:"layout",size:"small",containerBgColor:"#ffffff",containerBorderColor:"#3b82f6",containerBorderWidth:"2px",selectedBgColor:"#3b82f6",selectedTextColor:"#ffffff"}},j={render:m,args:{options:d,selectedId:"layout",size:"small",gap:"12px"}};var _,A,H;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small'
  }
}`,...(H=(A=I.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var P,U,Z;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: optionsWithIcons,
    selectedId: 'layout',
    size: 'small',
    hoverTextColor: '#2563eb' // Blue hover color to demonstrate it works with icons
  }
}`,...(Z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var J,K,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: iconOnlyOptions,
    selectedId: 'computer',
    size: 'small'
  }
}`,...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,re,oe;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(re=C.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ne,ae;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,le,ce;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    disabled: true
  }
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,fe,ge;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,ye,xe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    gap: '12px'
  }
}`,...(xe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};const pt=["Default","WithIcons","IconOnly","FullWidth","FullWidthIconOnly","CustomColors","DifferentSizes","Disabled","CustomBorder","CustomGap"];export{w as CustomBorder,$ as CustomColors,j as CustomGap,I as Default,B as DifferentSizes,E as Disabled,z as FullWidth,C as FullWidthIconOnly,T as IconOnly,v as WithIcons,pt as __namedExportsOrder,mt as default};
