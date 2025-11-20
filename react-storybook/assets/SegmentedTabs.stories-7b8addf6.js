import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as c,R as je}from"./index-ad58220e.js";import{d as O,o as Oe}from"./styled-components.browser.esm-675ea4f2.js";import{t as ke}from"./config-43c6afbd.js";import{L as We}from"./ltButton-5601b3c5.js";import{L as f}from"./index-eb89699e.js";import{u as Le}from"./ThemeContext-71b3bf8d.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const Me=O.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius.large};
  overflow: hidden;
  background: ${({darkMode:e,theme:t,containerBgColor:r})=>r||(e?t.colors.darkModeBgSecondary:t.colors.grey)};
  border: ${({darkMode:e,theme:t,containerBorderWidth:r,containerBorderColor:o})=>{const i=r||"1px",u=o||(e?t.colors.darkModeBorder:t.colors.border);return`${i} solid ${u}`}};
  padding: ${({theme:e})=>e.spacing.xxs};
  gap: ${({theme:e,gap:t})=>t||e.spacing.xxs};
  
  ${({fullWidth:e})=>e&&`
      & > * {
        flex: 1;
      }
    `}
`,Re=O.div`
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
`,y=(e,t,r,o)=>e?o||(t?r.colors.darkModeText:r.colors.white):t?r.colors.darkModeText:r.colors.text,x=(e,t,r,o,i)=>e?o||(t?r.colors.darkModeText:r.colors.white):i||(t?r.colors.darkModeText:r.colors.text),be=(e,t,r,o)=>e?"transparent":o||(t?r.colors.darkModeBgSecondary:r.colors.backgroundSecondary),qe=O.div`
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
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:i})=>x(e,t,r,o,i)};
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
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:i})=>x(e,t,r,o,i)};
    }
    
    /* Override LtIcon color on hover */
    &:hover .leftElement i.icon, &:hover .rightElement i.icon {
      color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:i})=>x(e,t,r,o,i)} !important;
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
    background: ${({isSelected:e,hoverBgColor:t,darkMode:r,theme:o})=>be(e,r,o,t)};
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:i})=>x(e,t,r,o,i)};
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
    color: ${({isSelected:e,darkMode:t,theme:r,selectedTextColor:o,hoverTextColor:i})=>x(e,t,r,o,i)} !important;
  }
`,g=({options:e,selectedId:t,onSelectionChange:r,size:o="medium",fullWidth:i=!1,disabled:u=!1,className:ve,iconOnly:Te=!1,selectedBgColor:k,selectedTextColor:q,hoverBgColor:D,hoverTextColor:F,containerBgColor:Ie,containerBorderColor:ze,containerBorderWidth:Ce,gap:V})=>{const b=Le().theme==="dark",W=c.useRef(null),L=c.useRef([]),[M,$e]=c.useState({left:0,width:0}),Be=Te||e.every(s=>!s.label&&(s.leftElement||s.rightElement)),R=()=>{const s=e.findIndex(h=>h.id===t);if(s===-1)return;const l=L.current[s],a=W.current;if(!l||!a)return;const p=l.getBoundingClientRect(),S=a.getBoundingClientRect();$e({left:p.left-S.left,width:p.width})};c.useEffect(()=>{R()},[t,e,i,V]),c.useEffect(()=>{const s=W.current;if(!s)return;const l=new ResizeObserver(()=>{R()});l.observe(s);let a;const p=()=>{clearTimeout(a),a=setTimeout(()=>{R()},150)};return window.addEventListener("resize",p),()=>{l.disconnect(),window.removeEventListener("resize",p),clearTimeout(a)}},[t,e]);const we=s=>s==="medium"?"large":s,G=s=>je.isValidElement(s)&&s.props&&s.props.icon?s.props.icon:null,_=s=>{var l;u||s.disabled||(r==null||r(s.id),(l=s.onClick)==null||l.call(s))};return n.jsx(Oe,{theme:ke,children:n.jsxs(Me,{ref:W,fullWidth:i,className:ve,darkMode:b,containerBgColor:Ie,containerBorderColor:ze,containerBorderWidth:Ce,gap:V,children:[n.jsx(Re,{darkMode:b,selectedBgColor:k,style:{left:`${M.left}px`,width:`${M.width}px`,opacity:M.width===0?0:1}}),e.map((s,l)=>{const a=t===s.id,p=l===0,S=l===e.length-1;if(Be){const h=G(s.leftElement)||G(s.rightElement);return n.jsx(De,{ref:Ee=>L.current[l]=Ee,isFirst:p,isLast:S,isSelected:a,darkMode:b,selectedBgColor:k,selectedTextColor:q,hoverBgColor:D,hoverTextColor:F,onClick:()=>_(s),children:n.jsx(f,{icon:h,size:we(o),disabled:u||s.disabled,fitted:!0})},s.id)}else return n.jsx(qe,{ref:h=>L.current[l]=h,isFirst:p,isLast:S,isSelected:a,darkMode:b,selectedBgColor:k,selectedTextColor:q,hoverBgColor:D,hoverTextColor:F,children:n.jsx(We,{label:s.label,leftElement:s.leftElement,rightElement:s.rightElement,size:o,disabled:u||s.disabled,onClick:()=>_(s),transparent:!0,border:!1})},s.id)})]})})};g.__docgenInfo={description:"",methods:[],displayName:"SegmentedTabs",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"TabOption"}],raw:"TabOption[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedId: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedId"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},selectedTextColor:{required:!1,tsType:{name:"string"},description:""},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},containerBgColor:{required:!1,tsType:{name:"string"},description:""},containerBorderColor:{required:!1,tsType:{name:"string"},description:""},containerBorderWidth:{required:!1,tsType:{name:"string"},description:""},gap:{required:!1,tsType:{name:"string"},description:""}}};const mt={title:"SegmentedTabs",component:g,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["mini","tiny","small","medium","large","big","huge","massive"]},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},selectedBgColor:{control:{type:"color"}},selectedTextColor:{control:{type:"color"}},hoverBgColor:{control:{type:"color"}},hoverTextColor:{control:{type:"color"}},containerBgColor:{control:{type:"color"}},containerBorderColor:{control:{type:"color"}},containerBorderWidth:{control:{type:"text"}},gap:{control:{type:"text"},description:'Gap between tabs (e.g., "4px", "8px", "1rem")'}}},d=[{id:"layout",label:"Layout"},{id:"styling",label:"Styling"},{id:"content",label:"Content"}],Fe=[{id:"layout",label:"Layout",leftElement:n.jsx(f,{icon:"th",size:"small"})},{id:"styling",label:"Styling",leftElement:n.jsx(f,{icon:"paint brush",size:"small"})},{id:"content",label:"Content",leftElement:n.jsx(f,{icon:"file text",size:"small"})}],Se=[{id:"mobile",leftElement:n.jsx(f,{icon:"mobile",size:"small"})},{id:"tablet",leftElement:n.jsx(f,{icon:"tablet",size:"small"})},{id:"computer",leftElement:n.jsx(f,{icon:"computer",size:"small"})}],m=e=>{var o;const[t,r]=c.useState(e.selectedId||((o=e.options[0])==null?void 0:o.id));return n.jsx(g,{...e,selectedId:t,onSelectionChange:r})},v={render:m,args:{options:d,selectedId:"layout",size:"small"}},T={render:m,args:{options:Fe,selectedId:"layout",size:"small",hoverTextColor:"#2563eb"}},I={render:m,args:{options:Se,selectedId:"computer",size:"small"}},z={render:m,args:{options:d,selectedId:"layout",size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"400px"},children:n.jsx(e,{})})]},C={render:m,args:{options:Se,selectedId:"computer",size:"small",fullWidth:!0},decorators:[e=>n.jsx("div",{style:{width:"300px"},children:n.jsx(e,{})})]},$={render:m,args:{options:d,selectedId:"layout",size:"small",selectedBgColor:"#e74c3c",selectedTextColor:"#ffffff",hoverBgColor:"#f8f9fa",hoverTextColor:"#e74c3c",containerBgColor:"#f8f9fa"}},B={render:()=>{const[e,t]=c.useState("layout"),[r,o]=c.useState("styling"),[i,u]=c.useState("content");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Small Size"}),n.jsx(g,{options:d,selectedId:e,onSelectionChange:t,size:"small"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Medium Size"}),n.jsx(g,{options:d,selectedId:r,onSelectionChange:o,size:"medium"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Large Size"}),n.jsx(g,{options:d,selectedId:i,onSelectionChange:u,size:"large"})]})]})}},w={render:m,args:{options:d,selectedId:"layout",size:"small",disabled:!0}},E={render:m,args:{options:d,selectedId:"layout",size:"small",containerBgColor:"#ffffff",containerBorderColor:"#3b82f6",containerBorderWidth:"2px",selectedBgColor:"#3b82f6",selectedTextColor:"#ffffff"}},j={render:m,args:{options:d,selectedId:"layout",size:"small",gap:"12px"}};var N,H,A;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small'
  }
}`,...(A=(H=v.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var P,U,Z;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: optionsWithIcons,
    selectedId: 'layout',
    size: 'small',
    hoverTextColor: '#2563eb' // Blue hover color to demonstrate it works with icons
  }
}`,...(Z=(U=T.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var J,K,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: iconOnlyOptions,
    selectedId: 'computer',
    size: 'small'
  }
}`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(oe=(re=C.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ne,ie;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ae,ce;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var de,me,pe;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    disabled: true
  }
}`,...(pe=(me=w.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,fe,ge;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,ye,xe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    gap: '12px'
  }
}`,...(xe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};const pt=["Default","WithIcons","IconOnly","FullWidth","FullWidthIconOnly","CustomColors","DifferentSizes","Disabled","CustomBorder","CustomGap"];export{E as CustomBorder,$ as CustomColors,j as CustomGap,v as Default,B as DifferentSizes,w as Disabled,z as FullWidth,C as FullWidthIconOnly,I as IconOnly,T as WithIcons,pt as __namedExportsOrder,mt as default};
