import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{r as le}from"./index-04c7fd94.js";import{S as ke,g as r,f as Se}from"./styled-components.browser.esm-b57a6336.js";import{M as Ie}from"./ltModal-5a4eac69.js";import{L as Oe}from"./ltButton-466fbc29.js";import{L as y}from"./index-9e8f50bb.js";import{T as Ae}from"./ThemeContext-ab9e94eb.js";import"./_commonjsHelpers-725317a4.js";import"./Button-8d24c33b.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./map-d105d6f1.js";import"./Modal-39f90a8c.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-0f216811.js";import"./crossIcon-81d02106.js";import"./checkIcon-7642d33c.js";import"./index-019b0ce5.js";import"./Dropdown-4796e13c.js";import"./without-b20c73c8.js";import"./deburr-bb2546ff.js";import"./tickIcon-9f7569d5.js";import"./config-d270d9b6.js";const we={info:"#3b82f6",success:"#22c55e",warning:"#f59e0b",error:"#ef4444"},Me={info:"#eff6ff",success:"#f0fdf4",warning:"#fffbeb",error:"#fef2f2"},Re={info:e.jsx(y,{useReactIcon:!0,reactIconName:"MdInfoOutline",reactIconSet:"md",size:"medium"}),success:e.jsx(y,{useReactIcon:!0,reactIconName:"MdCheck",reactIconSet:"md",size:"medium"}),warning:e.jsx(y,{useReactIcon:!0,reactIconName:"MdWarningAmber",reactIconSet:"md",size:"medium"}),error:e.jsx(y,{useReactIcon:!0,reactIconName:"MdErrorOutline",reactIconSet:"md",size:"medium"})},Te={left:"flex-start",center:"center",right:"flex-end"};let je=0;const Ne=()=>{const[n]=le.useState(()=>`am${++je}`);return n},ze=ke`
  .ui.modal.custom-modal.${({$scopeClass:n})=>n} {
    max-width: ${({$maxWidth:n})=>n};
    width: ${({$maxWidth:n})=>n};
  }
`,Be=r.div`
  &&& {
    position: relative;
    padding: 8px;
  }
`,qe=r.button`
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
    color: #6b7280;
    font-size: 16px;
    line-height: 1;
    padding: 0;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: #fef2f2;
      color: #ef4444;
    }
  }
`,Le=Se`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${({$bg:n})=>n};
    flex-shrink: 0;
    font-size: 22px;
    color: ${({$accent:n})=>n};
    font-weight: 700;
    line-height: 1;
    user-select: none;
  }
`,We=r.div`
  ${Le}
`,$e=r.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }
`,_e=r.div`
  &&& {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    color: #111827;
    text-align: center;
  }
`,De=r.div`
  &&& {
    font-size: 14px;
    line-height: 1.6;
    color: #6b7280;
    text-align: center;
  }
`,Ve=r.div`
  &&& {
    display: flex;
    justify-content: ${({$justify:n})=>n};
    gap: 12px;
    flex-wrap: wrap;
  }
`,ce=({open:n,onClose:m,title:x,message:C,variant:k="info",icon:ue,actions:S,dismissText:pe="OK",actionsAlignment:me="center",buttonSize:fe="tiny",className:ge="",maxWidth:I,showCloseButton:be=!0})=>{const O=`indicator-modal-${Ne()}`,v=we[k],he=Me[k],xe=Re[k],Ce=Te[me],ve=S&&S.length>0?S:[{label:pe,onClick:m,backgroundColor:v,color:"#ffffff"}];return e.jsxs(e.Fragment,{children:[I&&e.jsx(ze,{$scopeClass:O,$maxWidth:I}),e.jsx(Ie,{className:`indicator-modal ${O} ${ge}`.trim(),onClose:m,open:n,showCloseIcon:!1,children:e.jsxs(Be,{children:[be&&e.jsx(qe,{"aria-label":"Close",onClick:m,children:"✕"}),e.jsxs($e,{children:[e.jsx(We,{$accent:v,$bg:he,children:ue??xe}),e.jsx(_e,{children:x}),e.jsx(De,{children:C})]}),e.jsx(Ve,{$justify:Ce,children:ve.map((t,ye)=>e.jsx(Oe,{label:t.label,onClick:t.onClick,size:fe,disabled:t.disabled,backgroundColor:t.backgroundColor??v,color:t.color??"#ffffff",hoverBackgroundColor:t.hoverBackgroundColor,border:!0,borderStyles:{width:"1px",type:"solid",color:t.backgroundColor??v,radius:"8px"},padding:"8px 20px"},ye))})]})})]})},de=ce;ce.__docgenInfo={description:"",methods:[],displayName:"IndicatorModal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the modal is dismissed (close button / backdrop)"},title:{required:!0,tsType:{name:"string"},description:"Title rendered below the icon in the modal body.\nReplaces the old `header` prop — the LtModal header bar is not used."},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body content – accepts a string or any ReactNode"},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`Visual variant used for the icon strip colour and default icon.
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
Defaults to true.`,defaultValue:{value:"true",computed:!1}}}};const Rn={component:de,title:"IndicatorModal",tags:["autodocs"],decorators:[n=>e.jsx(Ae,{children:e.jsx(n,{})})],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"Controls the accent colour and default icon."},actionsAlignment:{control:"select",options:["left","center","right"],description:"Horizontal alignment of the action buttons."},buttonSize:{control:"select",options:["mini","tiny","small","medium","large","big","huge","massive"]},onClose:{action:"onClose"},maxWidth:{control:"text",description:'Max width of the modal. Accepts any valid CSS length, e.g. "400px", "50%", "40rem".'}}},o=n=>{const[m,x]=le.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>x(!0),style:{padding:"10px 20px",background:"#1f2937",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px"},children:"Open IndicatorModal"}),e.jsx(de,{...n,open:m,onClose:()=>{var C;x(!1),(C=n.onClose)==null||C.call(n)}})]})},f=o.bind({});f.args={title:"Heads Up",message:"This outlet is currently in read-only mode. Changes to the configuration are disabled until the review cycle completes.",variant:"info"};const g=o.bind({});g.args={title:"Changes Saved",message:"Your changes have been saved and are now live across all connected outlets.",variant:"success",dismissText:"Great!"};const b=o.bind({});b.args={title:"Approaching Limit",message:"You have used 90% of your monthly API quota. Consider upgrading your plan to avoid interruptions.",variant:"warning"};const h=o.bind({});h.args={title:"Operation Failed",message:"We could not save your changes due to a server error. Please try again or contact support if the problem persists.",variant:"error",dismissText:"Dismiss"};const s=o.bind({});s.storyName="Multiple Actions";s.args={title:"Session Expiring Soon",message:"Your session will expire in 5 minutes due to inactivity. What would you like to do?",variant:"warning",actionsAlignment:"right",actions:[{label:"Log out",onClick:()=>alert("Logging out…"),backgroundColor:"transparent",color:"#374151"},{label:"Keep me signed in",onClick:()=>alert("Session extended!"),backgroundColor:"#f59e0b",color:"#ffffff",hoverBackgroundColor:"#d97706"}]};const a=o.bind({});a.storyName="Actions Alignment – Left";a.args={title:"Confirm Action",message:"This demonstrates left-aligned action buttons.",variant:"info",actionsAlignment:"left",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#3b82f6",color:"#fff"}]};const i=o.bind({});i.storyName="Actions Alignment – Center (default)";i.args={title:"Confirm Action",message:"This demonstrates center-aligned action buttons (the default).",variant:"success",actionsAlignment:"center",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#22c55e",color:"#fff"}]};const l=o.bind({});l.storyName="Actions Alignment – Right";l.args={title:"Confirm Action",message:"This demonstrates right-aligned action buttons.",variant:"warning",actionsAlignment:"right",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Confirm",onClick:()=>alert("Confirmed"),backgroundColor:"#f59e0b",color:"#fff"}]};const c=o.bind({});c.storyName="Custom Icon";c.args={title:"Maintenance Scheduled",message:"The system will be under scheduled maintenance on Sunday 08 Jun from 02:00–04:00 UTC. Please save your work before then.",variant:"info",icon:"🛠"};const d=o.bind({});d.storyName="Rich Message Content";d.args={title:"Breaking Change Detected",message:e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:8},children:["The ",e.jsx("strong",{children:"Delivery Areas API v1"})," will be retired on"," ",e.jsx("strong",{children:"30 Jun 2026"}),"."]}),e.jsxs("ul",{style:{paddingLeft:18,margin:0,textAlign:"left"},children:[e.jsx("li",{children:"Update all consumers to v2 before the deadline."}),e.jsxs("li",{children:["Refer to the"," ",e.jsx("a",{href:"#",style:{color:"#3b82f6"},children:"migration guide"})," ","for detailed instructions."]}),e.jsx("li",{children:"Reach out to the platform team for assistance."})]})]}),variant:"warning",dismissText:"Understood"};const u=o.bind({});u.storyName="No Close Button (forced dismiss)";u.args={title:"Critical Alert",message:"You must acknowledge this alert before continuing. Please read the message carefully.",variant:"error",showCloseButton:!1,dismissText:"I Acknowledge"};const p=o.bind({});p.storyName="Custom Width – Narrow (360px)";p.args={title:"Confirm Logout",message:"Are you sure you want to log out of this session?",variant:"warning",maxWidth:"360px",actionsAlignment:"center",actions:[{label:"Cancel",onClick:()=>{},backgroundColor:"transparent",color:"#374151"},{label:"Log out",onClick:()=>alert("Logged out"),backgroundColor:"#f59e0b",color:"#fff"}]};var A,w,M;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(M=(w=f.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var R,T,j;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(j=(T=g.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var N,z,B;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(B=(z=b.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var q,L,W;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var $,_,D;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(D=(_=s.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var V,E,P;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(P=(E=a.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var U,F,K;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(K=(F=i.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Y,H,J;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var G,Z,Q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(Q=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,ee,ne;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(ne=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,te,re;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(re=(te=u.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ae,ie;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
      <button onClick={() => setOpen(true)} style={{
      padding: '10px 20px',
      background: '#1f2937',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
        Open IndicatorModal
      </button>
      <IndicatorModal {...args} open={open} onClose={() => {
      setOpen(false);
      args.onClose?.();
    }} />
    </div>;
}`,...(ie=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Tn=["Info","Success","Warning","Error","MultipleActions","ActionsAlignmentLeft","ActionsAlignmentCenter","ActionsAlignmentRight","CustomIcon","RichMessage","NoCloseButton","NarrowWidth"];export{i as ActionsAlignmentCenter,a as ActionsAlignmentLeft,l as ActionsAlignmentRight,c as CustomIcon,h as Error,f as Info,s as MultipleActions,p as NarrowWidth,u as NoCloseButton,d as RichMessage,g as Success,b as Warning,Tn as __namedExportsOrder,Rn as default};
