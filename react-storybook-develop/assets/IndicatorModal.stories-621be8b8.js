import{j as n}from"./jsx-runtime-8ae9c9ad.js";import{r as R}from"./index-04c7fd94.js";import{S as qo,g as u,f as Lo}from"./styled-components.browser.esm-b57a6336.js";import{M as Eo}from"./ltModal-751d9e8d.js";import{L as Wo}from"./ltButton-603a60bb.js";import{L as D}from"./index-9e8f50bb.js";import{u as To,T as Vo}from"./ThemeContext-ab9e94eb.js";import{t as r}from"./config-d270d9b6.js";import{T as _o}from"./ToggleComponent-e6524698.js";import"./_commonjsHelpers-725317a4.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./Modal-39f90a8c.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-0f216811.js";import"./crossIcon-81d02106.js";import"./checkIcon-7642d33c.js";import"./index-019b0ce5.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./deburr-bb2546ff.js";import"./tickIcon-9f7569d5.js";const Ko={info:n.jsx(D,{useReactIcon:!0,reactIconName:"MdInfoOutline",reactIconSet:"md",size:"medium"}),success:n.jsx(D,{useReactIcon:!0,reactIconName:"MdCheck",reactIconSet:"md",size:"medium"}),warning:n.jsx(D,{useReactIcon:!0,reactIconName:"MdWarningAmber",reactIconSet:"md",size:"medium"}),error:n.jsx(D,{useReactIcon:!0,reactIconName:"MdErrorOutline",reactIconSet:"md",size:"medium"})},Uo={left:"flex-start",center:"center",right:"flex-end"};let Fo=0;const Po=()=>{const[o]=R.useState(()=>`am${++Fo}`);return o},Yo=qo`
  .ui.modal.custom-modal.${({$scopeClass:o})=>o} {
    max-width: ${({$maxWidth:o})=>o};
    width: ${({$maxWidth:o})=>o};
  }
`,Ho=u.div`
  &&& {
    position: relative;
    padding: 8px;
  }
`,Jo=u.button`
  &&& {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    color: ${({$isDark:o})=>o?r.colors.darkModeTextThird:"#6b7280"};
    font-size: 16px;
    line-height: 1;
    padding: 0;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: ${({$isDark:o})=>o?"rgba(248, 113, 113, 0.15)":"#fef2f2"};
      color: ${({$isDark:o})=>o?r.colors.error:"#ef4444"};
    }

    &:focus-visible {
      outline: 2px solid ${r.colors.primary};
      outline-offset: 2px;
    }
  }
`,Go=Lo`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${({$bg:o})=>o};
    flex-shrink: 0;
    font-size: 22px;
    color: ${({$accent:o})=>o};
    font-weight: 700;
    line-height: 1;
    user-select: none;
  }
`,Zo=u.div`
  ${Go}
`,Qo=u.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }
`,Xo=u.div`
  &&& {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    color: ${({$isDark:o})=>o?r.colors.darkModeText:"#111827"};
    text-align: center;
  }
`,on=u.div`
  &&& {
    font-size: 14px;
    line-height: 1.6;
    color: ${({$isDark:o})=>o?r.colors.darkModeTextThird:"#6b7280"};
    text-align: center;
  }
`,nn=u.div`
  &&& {
    display: flex;
    justify-content: ${({$justify:o})=>o};
    gap: 12px;
    flex-wrap: wrap;
  }
`,U=(o,a)=>{const c=o.replace("#",""),y=parseInt(c.substring(0,2),16),d=parseInt(c.substring(2,4),16),w=parseInt(c.substring(4,6),16);return`rgba(${y}, ${d}, ${w}, ${a})`},Io=({open:o,onClose:a,title:c,message:y,variant:d="info",icon:w,actions:g,dismissText:s="OK",actionsAlignment:i="center",buttonSize:M="tiny",className:j="",maxWidth:q,showCloseButton:Do=!0})=>{const $=Po(),L=`indicator-modal-${$}`,E=`am-title-${$}`,W=`am-message-${$}`,{theme:Ro}=To(),I=Ro==="dark",p={info:r.colors.info,success:r.colors.success,warning:r.colors.warning,error:r.colors.error}[d],jo=I?U(p,.15):U(p,.1),$o=Ko[d],No=Uo[i],zo=g&&g.length>0?g:[{label:s,onClick:a,backgroundColor:p,color:"#ffffff"}],N=R.useRef(null);return R.useEffect(()=>{if(!o)return;const t=()=>N.current?Array.from(N.current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]')):[],z=setTimeout(()=>{const l=t();l.length>0&&l[0].focus()},50),V=l=>{if(l.key==="Escape"){a();return}if(l.key==="Tab"){const O=t();if(O.length===0)return;const _=O[0],K=O[O.length-1];l.shiftKey?document.activeElement===_&&(K.focus(),l.preventDefault()):document.activeElement===K&&(_.focus(),l.preventDefault())}};return window.addEventListener("keydown",V),()=>{clearTimeout(z),window.removeEventListener("keydown",V)}},[o,a]),n.jsxs(n.Fragment,{children:[q&&n.jsx(Yo,{$scopeClass:L,$maxWidth:q}),n.jsx(Eo,{className:`indicator-modal ${L} ${j}`.trim(),onClose:a,open:o,showCloseIcon:!1,darkBackground:r.colors.darkModeBg,darkText:r.colors.darkModeText,role:"alertdialog","aria-labelledby":E,"aria-describedby":W,children:n.jsxs(Ho,{ref:N,children:[Do&&n.jsx(Jo,{$isDark:I,"aria-label":"Close",onClick:a,children:"✕"}),n.jsxs(Qo,{children:[n.jsx(Zo,{$accent:p,$bg:jo,children:w??$o}),n.jsx(Xo,{id:E,$isDark:I,children:c}),n.jsx(on,{id:W,$isDark:I,"aria-live":"polite",children:y})]}),n.jsx(nn,{$justify:No,children:zo.map((t,z)=>n.jsx(Wo,{label:t.label,onClick:t.onClick,size:M,disabled:t.disabled,backgroundColor:t.backgroundColor??p,color:t.color??"#ffffff",hoverBackgroundColor:t.hoverBackgroundColor,border:!0,borderStyles:{width:"1px",type:"solid",color:t.backgroundColor??p,radius:"8px"},padding:"8px 20px"},z))})]})})]})},Oo=Io;Io.__docgenInfo={description:"",methods:[],displayName:"IndicatorModal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the modal is dismissed (close button / backdrop)"},title:{required:!0,tsType:{name:"string"},description:"Title rendered below the icon in the modal body.\nReplaces the old `header` prop — the LtModal header bar is not used."},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body content – accepts a string or any ReactNode"},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Visual variant used for the icon strip colour and default icon.
Defaults to "info".`,defaultValue:{value:"'info'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Fully custom icon to render inside the coloured icon strip.
When provided, this overrides the default variant icon.`},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Button label */
  label: string;
  /** Click handler */
  onClick: () => void;
  /** Override the button background colour */
  backgroundColor?: string;
  /** Override the button text colour */
  color?: string;
  /** Override the button hover background colour */
  hoverBackgroundColor?: string;
  /** Disable this button */
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Button label"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0},description:"Click handler"},{key:"backgroundColor",value:{name:"string",required:!1},description:"Override the button background colour"},{key:"color",value:{name:"string",required:!1},description:"Override the button text colour"},{key:"hoverBackgroundColor",value:{name:"string",required:!1},description:"Override the button hover background colour"},{key:"disabled",value:{name:"boolean",required:!1},description:"Disable this button"}]}}],raw:"IndicatorModalAction[]"},description:`Actions rendered in the footer action row.
When empty (default), a single "OK" dismiss button is shown.`},dismissText:{required:!1,tsType:{name:"string"},description:'Fallback dismiss label when no custom actions are provided. Defaults to "OK"',defaultValue:{value:"'OK'",computed:!1}},actionsAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:`Horizontal alignment of the action buttons.
Defaults to "center".`,defaultValue:{value:"'center'",computed:!1}},buttonSize:{required:!1,tsType:{name:"SemanticSIZES"},description:'Semantic-UI size for action buttons. Defaults to "tiny"',defaultValue:{value:"'tiny'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Additional CSS class applied to the underlying LtModal.
Useful for one-off z-index overrides in the consuming app.`,defaultValue:{value:"''",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:'Controls the maximum width of the modal dialog.\nAccepts any valid CSS length value, e.g. `"400px"`, `"50%"`, `"40rem"`.\nInternally applied via a scoped CSS class so no inline styles leak out.\nWhen omitted the default LtModal max-width (70%) is used.'},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`When false, the absolute-positioned close (×) button is hidden.
Defaults to true.`,defaultValue:{value:"true",computed:!1}}}};const Kn={component:Oo,title:"IndicatorModal",tags:["autodocs"],decorators:[o=>n.jsx(Vo,{children:n.jsx(o,{})})],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Controls the accent colour and default icon."},actionsAlignment:{control:"select",options:["left","center","right"],description:"Horizontal alignment of the action buttons."},buttonSize:{control:"select",options:["mini","tiny","small","medium","large","big","huge","massive"]},onClose:{action:"onClose"},maxWidth:{control:"text",description:'Max width of the modal. Accepts any valid CSS length, e.g. "400px", "50%", "40rem".'}}},e=o=>{var g;const[a,c]=R.useState(!1),{theme:y}=To(),d=y==="dark",w=(g=o.actions)==null?void 0:g.map(s=>{let i=s.backgroundColor,M=s.color,j=s.hoverBackgroundColor;return d&&(i==="#f59e0b"?i="#d97706":i==="#3b82f6"?i="#2563eb":i==="#22c55e"&&(i="#16a34a"),M==="#374151"&&(M="#d1d5db")),{...s,backgroundColor:i,color:M,hoverBackgroundColor:j}});return n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:16},children:n.jsx(_o,{})}),n.jsx("button",{onClick:()=>c(!0),style:{padding:"10px 20px",background:d?"#374151":"#1f2937",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px"},children:"Open IndicatorModal"}),n.jsx(Oo,{...o,actions:w,open:a,onClose:()=>{var s;c(!1),(s=o.onClose)==null||s.call(o)}})]})},A=e.bind({});A.args={title:"Heads Up",message:"This outlet is currently in read-only mode. Changes to the configuration are disabled until the review cycle completes.",variant:"info"};const S=e.bind({});S.args={title:"Changes Saved",message:"Your changes have been saved and are now live across all connected outlets.",variant:"success",dismissText:"Great!"};const B=e.bind({});B.args={title:"Approaching Limit",message:"You have used 90% of your monthly API quota. Consider upgrading your plan to avoid interruptions.",variant:"warning"};const T=e.bind({});T.args={title:"Operation Failed",message:"We could not save your changes due to a server error. Please try again or contact support if the problem persists.",variant:"error",dismissText:"Dismiss"};const m=e.bind({});m.storyName="Multiple Actions";m.args={title:"Session Expiring Soon",message:"Your session will expire in 5 minutes due to inactivity. What would you like to do?",variant:"warning",actionsAlignment:"right",actions:[{label:"Log out",onClick:()=>alert("Logging out…"),backgroundColor:"transparent",color:"#374151"},{label:"Keep me signed in",onClick:()=>alert("Session extended!"),backgroundColor:"#f59e0b",color:"#ffffff",hoverBackgroundColor:"#d97706"}]};const b=e.bind({});b.storyName="Actions Alignment – Left";b.args={title:"Confirm Action",message:"This demonstrates left-aligned action buttons.",variant:"info",actionsAlignment:"left",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#3b82f6",color:"#fff"}]};const f=e.bind({});f.storyName="Actions Alignment – Center (default)";f.args={title:"Confirm Action",message:"This demonstrates center-aligned action buttons (the default).",variant:"success",actionsAlignment:"center",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#22c55e",color:"#fff"}]};const k=e.bind({});k.storyName="Actions Alignment – Right";k.args={title:"Confirm Action",message:"This demonstrates right-aligned action buttons.",variant:"warning",actionsAlignment:"right",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#f59e0b",color:"#fff"}]};const h=e.bind({});h.storyName="Custom Icon";h.args={title:"Maintenance Scheduled",message:"The system will be under scheduled maintenance on Sunday 08 Jun from 02:00–04:00 UTC. Please save your work before then.",variant:"info",icon:"🛠"};const C=e.bind({});C.storyName="Rich Message Content";C.args={title:"Breaking Change Detected",message:n.jsxs("div",{children:[n.jsxs("p",{style:{marginBottom:8},children:["The ",n.jsx("strong",{children:"Delivery Areas API v1"})," will be retired on"," ",n.jsx("strong",{children:"30 Jun 2026"}),"."]}),n.jsxs("ul",{style:{paddingLeft:18,margin:0,textAlign:"left"},children:[n.jsx("li",{children:"Update all consumers to v2 before the deadline."}),n.jsxs("li",{children:["Refer to the"," ",n.jsx("a",{href:"#",style:{color:"#3b82f6"},children:"migration guide"})," ","for detailed instructions."]}),n.jsx("li",{children:"Reach out to the platform team for assistance."})]})]}),variant:"warning",dismissText:"Understood"};const v=e.bind({});v.storyName="No Close Button (forced dismiss)";v.args={title:"Critical Alert",message:"You must acknowledge this alert before continuing. Please read the message carefully.",variant:"error",showCloseButton:!1,dismissText:"I Acknowledge"};const x=e.bind({});x.storyName="Custom Width – Narrow (360px)";x.args={title:"Confirm Logout",message:"Are you sure you want to log out of this session?",variant:"warning",maxWidth:"360px",actionsAlignment:"center",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Log out",onClick:()=>alert("Logged out"),backgroundColor:"#f59e0b",color:"#fff"}]};var F,P,Y;A.parameters={...A.parameters,docs:{...(F=A.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(Y=(P=A.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var H,J,G;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(G=(J=S.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Z,Q,X;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var oo,no,eo;T.parameters={...T.parameters,docs:{...(oo=T.parameters)==null?void 0:oo.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(eo=(no=T.parameters)==null?void 0:no.docs)==null?void 0:eo.source}}};var ro,to,ao;m.parameters={...m.parameters,docs:{...(ro=m.parameters)==null?void 0:ro.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(ao=(to=m.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var so,io,co;b.parameters={...b.parameters,docs:{...(so=b.parameters)==null?void 0:so.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(co=(io=b.parameters)==null?void 0:io.docs)==null?void 0:co.source}}};var lo,uo,go;f.parameters={...f.parameters,docs:{...(lo=f.parameters)==null?void 0:lo.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(go=(uo=f.parameters)==null?void 0:uo.docs)==null?void 0:go.source}}};var po,mo,bo;k.parameters={...k.parameters,docs:{...(po=k.parameters)==null?void 0:po.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(bo=(mo=k.parameters)==null?void 0:mo.docs)==null?void 0:bo.source}}};var fo,ko,ho;h.parameters={...h.parameters,docs:{...(fo=h.parameters)==null?void 0:fo.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(ho=(ko=h.parameters)==null?void 0:ko.docs)==null?void 0:ho.source}}};var Co,vo,xo;C.parameters={...C.parameters,docs:{...(Co=C.parameters)==null?void 0:Co.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(xo=(vo=C.parameters)==null?void 0:vo.docs)==null?void 0:xo.source}}};var yo,wo,Mo;v.parameters={...v.parameters,docs:{...(yo=v.parameters)==null?void 0:yo.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(Mo=(wo=v.parameters)==null?void 0:wo.docs)==null?void 0:Mo.source}}};var Ao,So,Bo;x.parameters={...x.parameters,docs:{...(Ao=x.parameters)==null?void 0:Ao.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const {
    theme
  } = useThemeMode();
  const isDark = theme === 'dark';

  // Map static actions colors to theme-aware colors inside stories
  const resolvedActions = args.actions?.map(action => {
    let backgroundColor = action.backgroundColor;
    let color = action.color;
    let hoverBackgroundColor = action.hoverBackgroundColor;

    // Convert hardcoded light colors to dark variants when in dark mode
    if (isDark) {
      if (backgroundColor === '#f59e0b') {
        backgroundColor = '#d97706'; // darker warning amber
      } else if (backgroundColor === '#3b82f6') {
        backgroundColor = '#2563eb'; // darker info blue
      } else if (backgroundColor === '#22c55e') {
        backgroundColor = '#16a34a'; // darker success green
      }
      if (color === '#374151') {
        color = '#d1d5db'; // light gray text on transparent button
      }
    }
    return {
      ...action,
      backgroundColor,
      color,
      hoverBackgroundColor
    };
  });
  return <div>
      <div style={{
      marginBottom: 16
    }}>
        <ToggleComponent />
      </div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: isDark ? '#374151' : '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} actions={resolvedActions} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(Bo=(So=x.parameters)==null?void 0:So.docs)==null?void 0:Bo.source}}};const Un=["Info","Success","Warning","Error","MultipleActions","ActionsAlignmentLeft","ActionsAlignmentCenter","ActionsAlignmentRight","CustomIcon","RichMessage","NoCloseButton","NarrowWidth"];export{f as ActionsAlignmentCenter,b as ActionsAlignmentLeft,k as ActionsAlignmentRight,h as CustomIcon,T as Error,A as Info,m as MultipleActions,x as NarrowWidth,v as NoCloseButton,C as RichMessage,S as Success,B as Warning,Un as __namedExportsOrder,Kn as default};
