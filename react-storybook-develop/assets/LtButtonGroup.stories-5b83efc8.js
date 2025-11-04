import{j as n}from"./jsx-runtime-8406ef1e.js";import{R as de,r as v}from"./index-ad58220e.js";import{d as T,o as ue}from"./styled-components.browser.esm-675ea4f2.js";import{t as me}from"./config-43c6afbd.js";import{L as pe}from"./ltButton-612ce8c0.js";import{L as i}from"./index-6dcb29cb.js";import{u as fe}from"./ThemeContext-71b3bf8d.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const ge=T.div`
  display: flex;
  flex-direction: row;
  width: ${({fullWidth:r})=>r?"100%":"auto"};
  border-radius: ${({theme:r})=>r.borderRadius.large};
  overflow: hidden;
  background: ${({darkMode:r,theme:t,containerBgColor:e})=>e||(r?t.colors.darkModeBgSecondary:t.colors.grey)};
  border: 1px solid ${({darkMode:r,theme:t})=>r?t.colors.darkModeBorder:t.colors.border};
  padding: ${({theme:r})=>r.spacing.xxs};
  gap: ${({theme:r})=>r.spacing.xxs};
  
  ${({fullWidth:r})=>r&&`
      & > * {
        flex: 1;
      }
    `}
`,ye=T.div`
  position: relative;
  
  &&& .ltButton {
    margin: 0;
    width: 100%;
    border-radius: ${({theme:r})=>r.borderRadius.large};
    min-width: 64px;
    padding: ${({theme:r})=>`${r.spacing.xxs} ${r.spacing.sm}`};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background: ${({isSelected:r,darkMode:t,theme:e,selectedBgColor:o})=>r?o||(t?e.colors.darkModeBgSecondary:e.colors.primary):"transparent"};
    color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o})=>r?o||(t?e.colors.darkModeText:e.colors.white):t?e.colors.darkModeText:e.colors.text};
    border: ${({isSelected:r,darkMode:t,theme:e})=>r?`1px solid ${t?e.colors.darkModeBorder:"transparent"}`:"none"};
    box-shadow: ${({isSelected:r,darkMode:t,theme:e})=>r?t?e.shadows.medium.replace("0.1","0.3"):e.shadows.small:"none"};
    
    &:hover {
      background: ${({isSelected:r,darkMode:t,theme:e,selectedBgColor:o,hoverBgColor:l})=>r?o||(t?e.colors.darkModeBgSecondary:e.colors.primary):l||(t?e.colors.darkModeBgSecondary:e.colors.backgroundSecondary)};
      color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o,hoverTextColor:l})=>r?o||(t?e.colors.darkModeText:e.colors.white):l||(t?e.colors.darkModeText:e.colors.text)};
      opacity: ${({isSelected:r})=>r?1:.8};
    }
    
    .leftElement, .label, .rightElement {
      color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o})=>r?o||(t?e.colors.darkModeText:e.colors.white):t?e.colors.darkModeText:e.colors.text};
    }
    
    /* Reduce gap between icon and text */
    .leftElement {
      margin-right: ${({theme:r})=>r.spacing.xxs} !important;
    }
    
    .rightElement {
      margin-left: ${({theme:r})=>r.spacing.xxs} !important;
    }
    
    /* Override LtIcon color for selected state */
    .leftElement i.icon, .rightElement i.icon {
      color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o})=>r?o||(t?e.colors.darkModeText:e.colors.white):t?e.colors.darkModeText:e.colors.text} !important;
    }
    
    &:hover .leftElement, &:hover .label, &:hover .rightElement {
      color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o,hoverTextColor:l})=>r?o||(t?e.colors.darkModeText:e.colors.white):l||(t?e.colors.darkModeText:e.colors.text)};
    }
    
    /* Override LtIcon color on hover */
    &:hover .leftElement i.icon, &:hover .rightElement i.icon {
      color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o,hoverTextColor:l})=>r?o||(t?e.colors.darkModeText:e.colors.white):l||(t?e.colors.darkModeText:e.colors.text)} !important;
    }
  }
`,he=T.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({theme:r})=>r.spacing.xl};
  min-height: ${({theme:r})=>r.spacing.xl};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${({theme:r})=>r.borderRadius.large};
  background: ${({isSelected:r,darkMode:t,theme:e,selectedBgColor:o})=>r?o||(t?e.colors.darkModeBgSecondary:e.colors.primary):"transparent"};
  color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o})=>r?o||(t?e.colors.darkModeText:e.colors.white):t?e.colors.darkModeText:e.colors.text};
  border: ${({isSelected:r,darkMode:t,theme:e})=>r?`1px solid ${t?e.colors.darkModeBorder:"transparent"}`:"none"};
  box-shadow: ${({isSelected:r,darkMode:t,theme:e})=>r?t?e.shadows.medium.replace("0.1","0.3"):e.shadows.small:"none"};
  
  &:hover {
    background: ${({isSelected:r,darkMode:t,theme:e,selectedBgColor:o,hoverBgColor:l})=>r?o||(t?e.colors.darkModeBgSecondary:e.colors.primary):l||(t?e.colors.darkModeBgSecondary:e.colors.backgroundSecondary)};
    color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o,hoverTextColor:l})=>r?o||(t?e.colors.darkModeText:e.colors.white):l||(t?e.colors.darkModeText:e.colors.text)};
    opacity: ${({isSelected:r})=>r?1:.8};
  }
  
  /* Ensure perfect icon centering by resetting Semantic UI icon styles */
  i.icon {
    margin: 0 !important;
    line-height: 1 !important;
    color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o})=>r?o||(t?e.colors.darkModeText:e.colors.white):t?e.colors.darkModeText:e.colors.text} !important;
  }
  
  &:hover i.icon {
    color: ${({isSelected:r,darkMode:t,theme:e,selectedTextColor:o,hoverTextColor:l})=>r?o||(t?e.colors.darkModeText:e.colors.white):l||(t?e.colors.darkModeText:e.colors.text)} !important;
  }
`,d=({options:r,selectedId:t,onSelectionChange:e,size:o="small",fullWidth:l=!1,disabled:u=!1,className:se,iconOnly:ne=!1,selectedBgColor:$,selectedTextColor:z,hoverBgColor:k,hoverTextColor:w,containerBgColor:le})=>{const I=fe().theme==="dark",ie=ne||r.every(s=>!s.label&&(s.leftElement||s.rightElement)),ae=s=>{switch(s){case"mini":return"mini";case"tiny":return"tiny";case"small":return"small";case"medium":return"large";case"large":return"big";case"big":return"huge";case"huge":return"massive";case"massive":return"massive";default:return"small"}},j=s=>de.isValidElement(s)&&s.props&&s.props.icon?s.props.icon:null,E=s=>{var m;u||s.disabled||(e==null||e(s.id),(m=s.onClick)==null||m.call(s))};return n.jsx(ue,{theme:me,children:n.jsx(ge,{fullWidth:l,className:se,darkMode:I,containerBgColor:le,children:r.map((s,m)=>{const B=t===s.id,M=m===0,O=m===r.length-1;if(ie){const ce=j(s.leftElement)||j(s.rightElement);return n.jsx(he,{isFirst:M,isLast:O,isSelected:B,darkMode:I,selectedBgColor:$,selectedTextColor:z,hoverBgColor:k,hoverTextColor:w,onClick:()=>E(s),children:n.jsx(i,{icon:ce,size:ae(o),disabled:u||s.disabled,fitted:!0})},s.id)}else return n.jsx(ye,{isFirst:M,isLast:O,isSelected:B,darkMode:I,selectedBgColor:$,selectedTextColor:z,hoverBgColor:k,hoverTextColor:w,children:n.jsx(pe,{label:s.label,leftElement:s.leftElement,rightElement:s.rightElement,size:o,disabled:u||s.disabled,onClick:()=>E(s),transparent:!0,border:!1})},s.id)})})})};d.__docgenInfo={description:"",methods:[],displayName:"LtButtonGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonOption"}],raw:"ButtonOption[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedId: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedId"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"SemanticSIZES"},description:"",defaultValue:{value:"'small'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedBgColor:{required:!1,tsType:{name:"string"},description:""},selectedTextColor:{required:!1,tsType:{name:"string"},description:""},hoverBgColor:{required:!1,tsType:{name:"string"},description:""},hoverTextColor:{required:!1,tsType:{name:"string"},description:""},containerBgColor:{required:!1,tsType:{name:"string"},description:""}}};const Ae={title:"Components/LtButtonGroup",component:d,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["mini","tiny","small","medium","large","big","huge","massive"]},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},selectedBgColor:{control:{type:"color"}},selectedTextColor:{control:{type:"color"}},hoverBgColor:{control:{type:"color"}},hoverTextColor:{control:{type:"color"}},containerBgColor:{control:{type:"color"}}}},a=[{id:"layout",label:"Layout"},{id:"styling",label:"Styling"},{id:"content",label:"Content"}],xe=[{id:"layout",label:"Layout",leftElement:n.jsx(i,{icon:"th",size:"small"})},{id:"styling",label:"Styling",leftElement:n.jsx(i,{icon:"paint brush",size:"small"})},{id:"content",label:"Content",leftElement:n.jsx(i,{icon:"file text",size:"small"})}],oe=[{id:"mobile",leftElement:n.jsx(i,{icon:"mobile",size:"small"})},{id:"tablet",leftElement:n.jsx(i,{icon:"tablet",size:"small"})},{id:"computer",leftElement:n.jsx(i,{icon:"computer",size:"small"})}],c=r=>{var o;const[t,e]=v.useState(r.selectedId||((o=r.options[0])==null?void 0:o.id));return n.jsx(d,{...r,selectedId:t,onSelectionChange:e})},p={render:c,args:{options:a,selectedId:"layout",size:"small"}},f={render:c,args:{options:xe,selectedId:"layout",size:"small",hoverTextColor:"#2563eb"}},g={render:c,args:{options:oe,selectedId:"computer",size:"small"}},y={render:c,args:{options:a,selectedId:"layout",size:"small",fullWidth:!0},decorators:[r=>n.jsx("div",{style:{width:"400px"},children:n.jsx(r,{})})]},h={render:c,args:{options:oe,selectedId:"computer",size:"small",fullWidth:!0},decorators:[r=>n.jsx("div",{style:{width:"300px"},children:n.jsx(r,{})})]},x={render:c,args:{options:a,selectedId:"layout",size:"small",selectedBgColor:"#e74c3c",selectedTextColor:"#ffffff",hoverBgColor:"#f8f9fa",hoverTextColor:"#e74c3c",containerBgColor:"#f8f9fa"}},S={render:()=>{const[r,t]=v.useState("layout"),[e,o]=v.useState("styling"),[l,u]=v.useState("content");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Small Size"}),n.jsx(d,{options:a,selectedId:r,onSelectionChange:t,size:"small"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Medium Size"}),n.jsx(d,{options:a,selectedId:e,onSelectionChange:o,size:"medium"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Large Size"}),n.jsx(d,{options:a,selectedId:l,onSelectionChange:u,size:"large"})]})]})}},b={render:c,args:{options:a,selectedId:"layout",size:"small",disabled:!0}};var L,C,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small'
  }
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var q,D,G;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: optionsWithIcons,
    selectedId: 'layout',
    size: 'small',
    hoverTextColor: '#2563eb' // Blue hover color to demonstrate it works with icons
  }
}`,...(G=(D=f.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var R,F,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: iconOnlyOptions,
    selectedId: 'computer',
    size: 'small'
  }
}`,...(V=(F=g.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var _,N,A;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(N=y.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var U,Z,H;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var J,K,P;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(P=(K=x.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
          <LtButtonGroup options={basicOptions} selectedId={selectedSmall} onSelectionChange={setSelectedSmall} size="small" />
        </div>
        
        <div>
          <h3>Medium Size</h3>
          <LtButtonGroup options={basicOptions} selectedId={selectedMedium} onSelectionChange={setSelectedMedium} size="medium" />
        </div>
        
        <div>
          <h3>Large Size</h3>
          <LtButtonGroup options={basicOptions} selectedId={selectedLarge} onSelectionChange={setSelectedLarge} size="large" />
        </div>
      </div>;
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: basicOptions,
    selectedId: 'layout',
    size: 'small',
    disabled: true
  }
}`,...(te=(re=b.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Ue=["Default","WithIcons","IconOnly","FullWidth","FullWidthIconOnly","CustomColors","DifferentSizes","Disabled"];export{x as CustomColors,p as Default,S as DifferentSizes,b as Disabled,y as FullWidth,h as FullWidthIconOnly,g as IconOnly,f as WithIcons,Ue as __namedExportsOrder,Ae as default};
