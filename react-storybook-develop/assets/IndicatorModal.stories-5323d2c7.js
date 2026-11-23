import{j as n}from"./jsx-runtime-8ae9c9ad.js";import{r as N}from"./index-04c7fd94.js";import{g as u,f as $o}from"./styled-components.browser.esm-b57a6336.js";import{M as qo}from"./ltModal-640afd98.js";import{L as Eo}from"./ltButton-514ee5b4.js";import{L as z}from"./index-49132820.js";import{u as Bo,T as Lo}from"./ThemeContext-ab9e94eb.js";import{t as a}from"./config-24cd80d3.js";import{T as Wo}from"./ToggleComponent-e6524698.js";import"./_commonjsHelpers-725317a4.js";import"./Button-97519630.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-e576304c.js";import"./clsx.m-5e077714.js";import"./childrenUtils-2c3608b2.js";import"./get-2a449dd5.js";import"./Icon-d9968253.js";import"./Label-823e724a.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-7d6cf03b.js";import"./includes-ce84422f.js";import"./Portal-2918dd9c.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-eed02b7e.js";import"./Modal-55fc66aa.js";import"./pick-5c1869c9.js";import"./_baseSet-f93032ae.js";import"./index-95bd258f.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-4bdff5b0.js";import"./crossIcon-81d02106.js";import"./checkIcon-7642d33c.js";import"./index-4f6f396f.js";import"./tickIcon-9f7569d5.js";const Vo={info:n.jsx(z,{useReactIcon:!0,reactIconName:"MdInfoOutline",reactIconSet:"md",size:"medium"}),success:n.jsx(z,{useReactIcon:!0,reactIconName:"MdCheck",reactIconSet:"md",size:"medium"}),warning:n.jsx(z,{useReactIcon:!0,reactIconName:"MdWarningAmber",reactIconSet:"md",size:"medium"}),error:n.jsx(z,{useReactIcon:!0,reactIconName:"MdErrorOutline",reactIconSet:"md",size:"medium"})},_o={left:"flex-start",center:"center",right:"flex-end"};let Ko=0;const Uo=()=>{const[o]=N.useState(()=>`am${++Ko}`);return o},Fo=u.div`
  &&& {
    position: relative;
    padding: 12px 4px 4px;
  }
`,Po=u.button`
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
    color: ${({$isDark:o})=>o?a.colors.darkModeTextThird:"#6b7280"};
    font-size: 16px;
    line-height: 1;
    padding: 0;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: ${({$isDark:o})=>o?"rgba(248, 113, 113, 0.15)":"#fef2f2"};
      color: ${({$isDark:o})=>o?a.colors.error:"#ef4444"};
    }
    &:focus {
      outline: none;
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px ${({$isDark:o})=>o?"rgba(255, 255, 255, 0.35)":"#d1d5db"};
    }
  }
`,Yo=$o`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin-bottom: 8px;
    border-radius: 50%;
    background-color: ${({$bg:o})=>o};
    flex-shrink: 0;
    font-size: 24px;
    color: ${({$accent:o})=>o};
    font-weight: 700;
    line-height: 1;
    user-select: none;
  }
`,Ho=u.div`
  ${Yo}
`,Jo=u.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-bottom: 24px;
    padding: 0 16px;
  }
`,Zo=u.div`
  &&& {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${({$isDark:o})=>o?a.colors.darkModeText:"#111827"};
    text-align: center;
  }
`,Go=u.div`
  &&& {
    font-size: 14px;
    line-height: 20px;
    color: ${({$isDark:o})=>o?a.colors.darkModeTextThird:"#6b7280"};
    text-align: center;
    overflow-wrap: anywhere;
  }
`,Qo=u.div`
  &&& {
    display: flex;
    justify-content: ${({$justify:o})=>o};
    gap: 12px;
    flex-wrap: wrap;
  }
  /* Centred actions share the row equally, so a short label like "Cancel" isn't a narrow button. */
  ${({$stretch:o})=>o&&`
    &&& > .ltButton.ui.button {
      flex: 1 1 0;
      min-width: 0;
      justify-content: center;
    }
  `}
  &&& > .ltButton.ui.button {
    min-height: 40px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
  }
  &&& > .ltButton.ui.button .label {
    white-space: nowrap;
  }
`,K=(o,s)=>{const c=o.replace("#",""),w=parseInt(c.substring(0,2),16),l=parseInt(c.substring(2,4),16),S=parseInt(c.substring(4,6),16);return`rgba(${w}, ${l}, ${S}, ${s})`},Io=({open:o,onClose:s,title:c,message:w,variant:l="info",icon:S,actions:g,dismissText:i="OK",actionsAlignment:t="center",buttonSize:M="tiny",className:$="",maxWidth:E,showCloseButton:Oo=!0})=>{const L=Uo(),W=`am-title-${L}`,V=`am-message-${L}`,{theme:Do}=Bo(),R=Do==="dark",p={info:a.colors.info,success:a.colors.success,warning:a.colors.warning,error:a.colors.error}[l],Ro=R?K(p,.15):K(p,.1),jo=Vo[l],zo=_o[t],No=g&&g.length>0?g:[{label:i,onClick:s,backgroundColor:p,color:"#ffffff"}],j=N.useRef(null);return N.useEffect(()=>{if(!o)return;const e=()=>j.current?Array.from(j.current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]')):[],q=setTimeout(()=>{var A,B;const d=(A=j.current)==null?void 0:A.querySelector(".indicator-modal-actions .ltButton"),m=e();(B=d||m[0])==null||B.focus()},50),_=d=>{if(d.key==="Escape"){s();return}if(d.key==="Tab"){const m=e();if(m.length===0)return;const A=m[0],B=m[m.length-1];d.shiftKey?document.activeElement===A&&(B.focus(),d.preventDefault()):document.activeElement===B&&(A.focus(),d.preventDefault())}};return window.addEventListener("keydown",_),()=>{clearTimeout(q),window.removeEventListener("keydown",_)}},[o,s]),n.jsx(n.Fragment,{children:n.jsx(qo,{className:`indicator-modal ${$}`.trim(),onClose:s,open:o,showCloseIcon:!1,darkBackground:a.colors.darkModeBg,darkText:a.colors.darkModeText,role:"alertdialog",style:E?{width:E,maxWidth:"calc(100vw - 32px)",minWidth:0}:void 0,"aria-labelledby":W,"aria-describedby":V,children:n.jsxs(Fo,{ref:j,children:[Oo&&n.jsx(Po,{$isDark:R,"aria-label":"Close",onClick:s,children:"✕"}),n.jsxs(Jo,{children:[n.jsx(Ho,{$accent:p,$bg:Ro,children:S??jo}),n.jsx(Zo,{id:W,$isDark:R,children:c}),n.jsx(Go,{id:V,$isDark:R,"aria-live":"polite",children:w})]}),n.jsx(Qo,{className:"indicator-modal-actions",$justify:zo,$stretch:t==="center",children:No.map((e,q)=>n.jsx(Eo,{label:e.label,onClick:e.onClick,size:e.size??M,disabled:e.disabled,alignItemCenter:!0,backgroundColor:e.backgroundColor??p,color:e.color??"#ffffff",hoverBackgroundColor:e.hoverBackgroundColor,hoverColor:e.hoverColor,border:!0,borderStyles:{width:"1px",type:"solid",color:e.borderColor??e.backgroundColor??p,radius:"8px"},padding:"8px 20px"},q))})]})})})},To=Io;Io.__docgenInfo={description:"",methods:[],displayName:"IndicatorModal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the modal is dismissed (close button / backdrop)"},title:{required:!0,tsType:{name:"string"},description:"Title rendered below the icon in the modal body.\nReplaces the old `header` prop — the LtModal header bar is not used."},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body content – accepts a string or any ReactNode"},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Visual variant used for the icon strip colour and default icon.
Defaults to "info".`,defaultValue:{value:"'info'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Fully custom icon to render inside the coloured icon strip.
When provided, this overrides the default variant icon.`},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Button label */
  label: string;
  /** Click handler */
  onClick: () => void;
  /** Override the button background colour */
  backgroundColor?: string;
  /** Override the button border colour */
  borderColor?: string;
  /** Override the button text colour */
  color?: string;
  /** Override the button hover background colour */
  hoverBackgroundColor?: string;
  /** Override the button hover text colour */
  hoverColor?: string;
  /** Disable this button */
  disabled?: boolean;
  /** Size override for the button */
  size?: SemanticSIZES;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Button label"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0},description:"Click handler"},{key:"backgroundColor",value:{name:"string",required:!1},description:"Override the button background colour"},{key:"borderColor",value:{name:"string",required:!1},description:"Override the button border colour"},{key:"color",value:{name:"string",required:!1},description:"Override the button text colour"},{key:"hoverBackgroundColor",value:{name:"string",required:!1},description:"Override the button hover background colour"},{key:"hoverColor",value:{name:"string",required:!1},description:"Override the button hover text colour"},{key:"disabled",value:{name:"boolean",required:!1},description:"Disable this button"},{key:"size",value:{name:"SemanticSIZES",required:!1},description:"Size override for the button"}]}}],raw:"IndicatorModalAction[]"},description:`Actions rendered in the footer action row.
When empty (default), a single "OK" dismiss button is shown.`},dismissText:{required:!1,tsType:{name:"string"},description:'Fallback dismiss label when no custom actions are provided. Defaults to "OK"',defaultValue:{value:"'OK'",computed:!1}},actionsAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:`Horizontal alignment of the action buttons.
Defaults to "center".`,defaultValue:{value:"'center'",computed:!1}},buttonSize:{required:!1,tsType:{name:"SemanticSIZES"},description:'Semantic-UI size for action buttons. Defaults to "tiny"',defaultValue:{value:"'tiny'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Additional CSS class applied to the underlying LtModal.
Useful for one-off z-index overrides in the consuming app.`,defaultValue:{value:"''",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:'Controls the maximum width of the modal dialog.\nAccepts any valid CSS length value, e.g. `"400px"`, `"50%"`, `"40rem"`.\nInternally applied via a scoped CSS class so no inline styles leak out.\nWhen omitted the default LtModal max-width (70%) is used.'},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`When false, the absolute-positioned close (×) button is hidden.
Defaults to true.`,defaultValue:{value:"true",computed:!1}}}};const qn={component:To,title:"IndicatorModal",tags:["autodocs"],decorators:[o=>n.jsx(Lo,{children:n.jsx(o,{})})],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Controls the accent colour and default icon."},actionsAlignment:{control:"select",options:["left","center","right"],description:"Horizontal alignment of the action buttons."},buttonSize:{control:"select",options:["mini","tiny","small","medium","large","big","huge","massive"]},onClose:{action:"onClose"},maxWidth:{control:"text",description:'Max width of the modal. Accepts any valid CSS length, e.g. "400px", "50%", "40rem".'}}},r=o=>{var g;const[s,c]=N.useState(!1),{theme:w}=Bo(),l=w==="dark",S=(g=o.actions)==null?void 0:g.map(i=>{let t=i.backgroundColor,M=i.color,$=i.hoverBackgroundColor;return l&&(t==="#f59e0b"?t="#d97706":t==="#3b82f6"?t="#2563eb":t==="#22c55e"&&(t="#16a34a"),M==="#374151"&&(M="#d1d5db")),{...i,backgroundColor:t,color:M,hoverBackgroundColor:$}});return n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:16},children:n.jsx(Wo,{})}),n.jsx("button",{onClick:()=>c(!0),style:{padding:"10px 20px",background:l?"#374151":"#1f2937",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px"},children:"Open IndicatorModal"}),n.jsx(To,{...o,actions:S,open:s,onClose:()=>{var i;c(!1),(i=o.onClose)==null||i.call(o)}})]})},I=r.bind({});I.args={title:"Heads Up",message:"This outlet is currently in read-only mode. Changes to the configuration are disabled until the review cycle completes.",variant:"info"};const T=r.bind({});T.args={title:"Changes Saved",message:"Your changes have been saved and are now live across all connected outlets.",variant:"success",dismissText:"Great!"};const O=r.bind({});O.args={title:"Approaching Limit",message:"You have used 90% of your monthly API quota. Consider upgrading your plan to avoid interruptions.",variant:"warning"};const D=r.bind({});D.args={title:"Operation Failed",message:"We could not save your changes due to a server error. Please try again or contact support if the problem persists.",variant:"error",dismissText:"Dismiss"};const b=r.bind({});b.storyName="Multiple Actions";b.args={title:"Session Expiring Soon",message:"Your session will expire in 5 minutes due to inactivity. What would you like to do?",variant:"warning",actionsAlignment:"right",actions:[{label:"Log out",onClick:()=>alert("Logging out…"),backgroundColor:"transparent",color:"#374151"},{label:"Keep me signed in",onClick:()=>alert("Session extended!"),backgroundColor:"#f59e0b",color:"#ffffff",hoverBackgroundColor:"#d97706"}]};const f=r.bind({});f.storyName="Actions Alignment – Left";f.args={title:"Confirm Action",message:"This demonstrates left-aligned action buttons.",variant:"info",actionsAlignment:"left",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#3b82f6",color:"#fff"}]};const k=r.bind({});k.storyName="Actions Alignment – Center (default)";k.args={title:"Confirm Action",message:"This demonstrates center-aligned action buttons (the default).",variant:"success",actionsAlignment:"center",actions:[{label:"Cancel",onClick:()=>alert("Cancelled"),backgroundColor:"transparent",color:"#374151",borderColor:"#c2c2c2"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#22c55e",color:"#fff"}]};const h=r.bind({});h.storyName="Actions Alignment – Right";h.args={title:"Confirm Action",message:"This demonstrates right-aligned action buttons.",variant:"warning",actionsAlignment:"right",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#f59e0b",color:"#fff"}]};const C=r.bind({});C.storyName="Custom Icon";C.args={title:"Maintenance Scheduled",message:"The system will be under scheduled maintenance on Sunday 08 Jun from 02:00–04:00 UTC. Please save your work before then.",variant:"info",icon:"🛠"};const v=r.bind({});v.storyName="Rich Message Content";v.args={title:"Breaking Change Detected",message:n.jsxs("div",{children:[n.jsxs("p",{style:{marginBottom:8},children:["The ",n.jsx("strong",{children:"Delivery Areas API v1"})," will be retired on"," ",n.jsx("strong",{children:"30 Jun 2026"}),"."]}),n.jsxs("ul",{style:{paddingLeft:18,margin:0,textAlign:"left"},children:[n.jsx("li",{children:"Update all consumers to v2 before the deadline."}),n.jsxs("li",{children:["Refer to the"," ",n.jsx("a",{href:"#",style:{color:"#3b82f6"},children:"migration guide"})," ","for detailed instructions."]}),n.jsx("li",{children:"Reach out to the platform team for assistance."})]})]}),variant:"warning",dismissText:"Understood"};const x=r.bind({});x.storyName="No Close Button (forced dismiss)";x.args={title:"Critical Alert",message:"You must acknowledge this alert before continuing. Please read the message carefully.",variant:"error",showCloseButton:!1,dismissText:"I Acknowledge"};const y=r.bind({});y.storyName="Custom Width – Narrow (360px)";y.args={title:"Confirm Logout",message:"Are you sure you want to log out of this session?",variant:"warning",maxWidth:"360px",actionsAlignment:"center",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Log out",onClick:()=>alert("Logged out"),backgroundColor:"#f59e0b",color:"#fff"}]};var U,F,P;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(P=(F=I.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var Y,H,J;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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
}`,...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Z,G,Q;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(Q=(G=O.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,oo,no;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(no=(oo=D.parameters)==null?void 0:oo.docs)==null?void 0:no.source}}};var eo,ro,to;b.parameters={...b.parameters,docs:{...(eo=b.parameters)==null?void 0:eo.docs,source:{originalSource:`args => {
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
}`,...(to=(ro=b.parameters)==null?void 0:ro.docs)==null?void 0:to.source}}};var ao,so,io;f.parameters={...f.parameters,docs:{...(ao=f.parameters)==null?void 0:ao.docs,source:{originalSource:`args => {
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
}`,...(io=(so=f.parameters)==null?void 0:so.docs)==null?void 0:io.source}}};var co,lo,uo;k.parameters={...k.parameters,docs:{...(co=k.parameters)==null?void 0:co.docs,source:{originalSource:`args => {
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
}`,...(uo=(lo=k.parameters)==null?void 0:lo.docs)==null?void 0:uo.source}}};var go,po,mo;h.parameters={...h.parameters,docs:{...(go=h.parameters)==null?void 0:go.docs,source:{originalSource:`args => {
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
}`,...(mo=(po=h.parameters)==null?void 0:po.docs)==null?void 0:mo.source}}};var bo,fo,ko;C.parameters={...C.parameters,docs:{...(bo=C.parameters)==null?void 0:bo.docs,source:{originalSource:`args => {
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
}`,...(ko=(fo=C.parameters)==null?void 0:fo.docs)==null?void 0:ko.source}}};var ho,Co,vo;v.parameters={...v.parameters,docs:{...(ho=v.parameters)==null?void 0:ho.docs,source:{originalSource:`args => {
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
}`,...(vo=(Co=v.parameters)==null?void 0:Co.docs)==null?void 0:vo.source}}};var xo,yo,wo;x.parameters={...x.parameters,docs:{...(xo=x.parameters)==null?void 0:xo.docs,source:{originalSource:`args => {
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
}`,...(wo=(yo=x.parameters)==null?void 0:yo.docs)==null?void 0:wo.source}}};var So,Mo,Ao;y.parameters={...y.parameters,docs:{...(So=y.parameters)==null?void 0:So.docs,source:{originalSource:`args => {
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
}`,...(Ao=(Mo=y.parameters)==null?void 0:Mo.docs)==null?void 0:Ao.source}}};const En=["Info","Success","Warning","Error","MultipleActions","ActionsAlignmentLeft","ActionsAlignmentCenter","ActionsAlignmentRight","CustomIcon","RichMessage","NoCloseButton","NarrowWidth"];export{k as ActionsAlignmentCenter,f as ActionsAlignmentLeft,h as ActionsAlignmentRight,C as CustomIcon,D as Error,I as Info,b as MultipleActions,y as NarrowWidth,x as NoCloseButton,v as RichMessage,T as Success,O as Warning,En as __namedExportsOrder,qn as default};
