import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{m as pt,d as u,o as dt}from"./styled-components.browser.esm-675ea4f2.js";import{t as mt}from"./config-43c6afbd.js";import{L as j}from"./ltButton-5601b3c5.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const ht=pt`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,bt=pt`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,gt=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 320px;
  max-width: 400px;
  padding: ${({theme:t})=>t.padding.medium};
  border-radius: ${({theme:t})=>t.borderRadius.medium};
  box-shadow: ${({theme:t})=>t.shadows.large};
  background-color: ${({theme:t})=>t.colors.white};
  border-left: ${({variant:t,theme:o})=>{switch(t){case"success":return`4px solid ${o.colors.success}`;case"error":return`4px solid ${o.colors.error}`;case"warning":return`4px solid ${o.colors.warning}`;case"info":return`4px solid ${o.colors.info}`;default:return"0"}}};
  animation: ${({isClosing:t})=>t?bt:ht} 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
`,vt=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.xxs};
  padding-right: ${({theme:t})=>t.spacing.xxs};
`,Tt=u.div`
  font-size: ${({theme:t})=>t.sizes.medium};
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text};
  line-height: 1.4;
`,xt=u.div`
  font-size: ${({theme:t})=>t.sizes.medium};
  color: ${({theme:t})=>t.colors.muted};
  line-height: 1.5;
`,Ct=u.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({theme:t})=>t.padding.xsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  color: ${({theme:t})=>t.colors.muted};

  ${gt}:hover & {
    opacity: 1;
  }

  &:hover {
    color: ${({theme:t})=>t.colors.text};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,wt=u.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: ${({theme:t})=>t.colors.primary};
  animation: progress ${({duration:t})=>t}ms linear;

  @keyframes progress {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`,yt=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),w=({title:t,description:o,variant:n="default",autoClose:s=1e4,onClose:r,showCloseButton:S=!0,showProgressBar:V=!0})=>{const[i,p]=c.useState(!1);c.useEffect(()=>{if(s&&s>0){const ft=setTimeout(()=>{l()},s);return()=>clearTimeout(ft)}},[s]);const l=()=>{p(!0),setTimeout(()=>{r==null||r()},300)};return e.jsx(dt,{theme:mt,children:e.jsxs(gt,{variant:n,isClosing:i,children:[e.jsxs(vt,{children:[e.jsx(Tt,{children:t}),o&&e.jsx(xt,{children:o})]}),S&&e.jsx(Ct,{onClick:l,"aria-label":"Close notification",children:e.jsx(yt,{})}),V&&s>0&&e.jsx(wt,{duration:s})]})})},Lt=u.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sm};
  pointer-events: none;

  ${({position:t})=>{switch(t){case"top-right":return"top: 24px; right: 24px;";case"top-left":return"top: 24px; left: 24px;";case"bottom-right":return"bottom: 24px; right: 24px;";case"bottom-left":return"bottom: 24px; left: 24px;";case"top-center":return"top: 24px; left: 50%; transform: translateX(-50%);";case"bottom-center":return"bottom: 24px; left: 50%; transform: translateX(-50%);";default:return"top: 24px; right: 24px;"}}}

  > * {
    pointer-events: all;
  }
`,B=({position:t="top-right",children:o})=>e.jsx(dt,{theme:mt,children:e.jsx(Lt,{position:t,children:o})});w.__docgenInfo={description:"",methods:[],displayName:"LtToast",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},autoClose:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showProgressBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:""}}};B.__docgenInfo={description:"",methods:[],displayName:"LtToastContainer",props:{position:{required:!1,tsType:{name:"union",raw:'"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"',elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"bottom-center"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Jt={component:w,title:"LtToast",tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},variant:{control:"select",options:["success","error","warning","info","default"]},autoClose:{control:"number"},showCloseButton:{control:"boolean"},showProgressBar:{control:"boolean"},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"]}}},a=t=>{const[o,n]=c.useState(!0);return e.jsxs("div",{children:[e.jsx(j,{label:"Show Toast",onClick:()=>n(!0),style:{marginBottom:"20px"}}),o&&e.jsx(B,{position:t.position||"top-right",children:e.jsx(w,{...t,onClose:()=>n(!1)})})]})},d=a.bind({});d.args={title:"Notification",description:"This is a default toast notification.",variant:"default",autoClose:1e4,showCloseButton:!0};const m=a.bind({});m.args={title:"Success!",description:"Your changes have been saved successfully.",variant:"success",autoClose:1e4,showCloseButton:!0};const g=a.bind({});g.args={title:"Error",description:"Something went wrong. Please try again.",variant:"error",autoClose:1e4,showCloseButton:!0};const f=a.bind({});f.args={title:"Warning",description:"Please review your input before proceeding.",variant:"warning",autoClose:1e4,showCloseButton:!0};const h=a.bind({});h.args={title:"Info",description:"New updates are available for download.",variant:"info",autoClose:1e4,showCloseButton:!0};const b=a.bind({});b.args={title:"Quick notification",variant:"success",autoClose:1e4,showCloseButton:!0};const v=a.bind({});v.args={title:"Persistent notification",description:"This notification will not auto-close.",variant:"info",autoClose:0,showCloseButton:!0,showProgressBar:!1};const T=a.bind({});T.args={title:"Quick notification",description:"This will close in 3 seconds.",variant:"success",autoClose:3e3,showCloseButton:!0};const x=a.bind({});x.args={title:"Auto-close only",description:"This toast can only be closed automatically.",variant:"default",autoClose:5e3,showCloseButton:!1};const C=a.bind({});C.args={title:"No progress bar",description:"This toast has no progress bar at the bottom.",variant:"success",autoClose:1e4,showCloseButton:!0,showProgressBar:!1};const Bt=()=>{const[t,o]=c.useState([]),[n,s]=c.useState(0),r=["success","error","warning","info","default"],S=()=>{const i=r[n%r.length],p={id:Date.now(),title:`Toast ${n+1}`,description:`This is toast notification number ${n+1}`,variant:i};o(l=>[...l,p]),s(l=>l+1)},V=i=>{o(p=>p.filter(l=>l.id!==i))};return e.jsxs("div",{children:[e.jsx(j,{label:"Add Toast",onClick:S}),e.jsx(B,{position:"top-right",children:t.map(i=>e.jsx(w,{title:i.title,description:i.description,variant:i.variant,autoClose:1e4,onClose:()=>V(i.id)},i.id))})]})},y=Bt.bind({}),St=()=>{const[t,o]=c.useState("top-right"),[n,s]=c.useState(!1);return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"20px",display:"flex",gap:"10px",flexWrap:"wrap"},children:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"].map(r=>e.jsx(j,{label:r,onClick:()=>{o(r),s(!0),setTimeout(()=>s(!1),3e3)}},r))}),n&&e.jsx(B,{position:t,children:e.jsx(w,{title:`Toast at ${t}`,description:"This toast will auto-close in 3 seconds.",variant:"info",autoClose:3e3,onClose:()=>s(!1)})})]})},L=St.bind({});var $,k,P;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var W,q,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var A,I,E;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(E=(I=g.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var N,_,R;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var X,z,M;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(M=(z=h.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var O,Q,Y;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var F,G,H;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,U;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(U=(K=T.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Z,tt,et;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(et=(tt=x.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var ot,st,it;C.parameters={...C.parameters,docs:{...(ot=C.parameters)==null?void 0:ot.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  return <div>
      <LtButton label="Show Toast" onClick={() => setVisible(true)} style={{
      marginBottom: "20px"
    }} />
      {visible && <LtToastContainer position={args.position || "top-right"}>
          <LtToast {...args} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(it=(st=C.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var nt,rt,at;y.parameters={...y.parameters,docs:{...(nt=y.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  const [toasts, setToasts] = useState<Array<{
    id: number;
    title: string;
    description: string;
    variant: any;
  }>>([]);
  const [counter, setCounter] = useState(0);
  const variants = (["success", "error", "warning", "info", "default"] as const);
  const addToast = () => {
    const variant = variants[counter % variants.length];
    const newToast = {
      id: Date.now(),
      title: \`Toast \${counter + 1}\`,
      description: \`This is toast notification number \${counter + 1}\`,
      variant
    };
    setToasts(prev => [...prev, newToast]);
    setCounter(prev => prev + 1);
  };
  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  return <div>
      <LtButton label="Add Toast" onClick={addToast} />
      <LtToastContainer position="top-right">
        {toasts.map(toast => <LtToast key={toast.id} title={toast.title} description={toast.description} variant={toast.variant} autoClose={10000} onClose={() => removeToast(toast.id)} />)}
      </LtToastContainer>
    </div>;
}`,...(at=(rt=y.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var lt,ct,ut;L.parameters={...L.parameters,docs:{...(lt=L.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  const [position, setPosition] = useState<any>("top-right");
  const [visible, setVisible] = useState(false);
  return <div>
      <div style={{
      marginBottom: "20px",
      display: "flex",
      gap: "10px",
      flexWrap: "wrap"
    }}>
        {["top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"].map(pos => <LtButton key={pos} label={pos} onClick={() => {
        setPosition(pos);
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
      }} />)}
      </div>
      {visible && <LtToastContainer position={position}>
          <LtToast title={\`Toast at \${position}\`} description="This toast will auto-close in 3 seconds." variant="info" autoClose={3000} onClose={() => setVisible(false)} />
        </LtToastContainer>}
    </div>;
}`,...(ut=(ct=L.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};const Kt=["Default","Success","Error","Warning","Info","WithoutDescription","WithoutAutoClose","CustomAutoClose","WithoutCloseButton","WithoutProgressBar","MultipleToasts","DifferentPositions"];export{T as CustomAutoClose,d as Default,L as DifferentPositions,g as Error,h as Info,y as MultipleToasts,m as Success,f as Warning,v as WithoutAutoClose,x as WithoutCloseButton,b as WithoutDescription,C as WithoutProgressBar,Kt as __namedExportsOrder,Jt as default};
