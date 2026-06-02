import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as je}from"./index-ad58220e.js";import{B as I}from"./Button-4d423377.js";import{r as Oe}from"./index-4fee7e45.js";import{D as Je,L as Xe}from"./languageTranslatorIcon-78ac1483.js";import{I as Te}from"./Icon-7990d6af.js";import{S as We}from"./Segment-6b7a0086.js";import{S as Ee}from"./Sidebar-9de1ce2e.js";import{d as o}from"./styled-components.browser.esm-675ea4f2.js";import{C as ke}from"./crossIcon-11d15636.js";import{C as Ae}from"./checkIcon-e2b8e3fe.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";const qe=o.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`,Le=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,_e=o.div`
  font-size: 16px;
  align-self: flex-start;
  font-weight: 500;
`,Me=o.div`
  gap: 8px;
  display: flex;
  align-items: center;
`,R=o(I)`
  &&& {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #e5e7eb;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,$e=o(Je)`
  &&& {
    margin: 0;
    border-top: 1px solid #E5E7EB;
  }
`,S=({children:n,className:v,direction:B,closeButtonPosition:C,closeButtonClass:Ce,closeIcon:w,closeButtonImage:we,visible:Ie,onHide:Se,showCloseButton:He,onClose:H,header:y,portalElement:V,style:ye})=>{const Ve=()=>e.jsxs(I,{onClick:H,className:`close-button-position-${C} ${Ce}`,icon:!!w,children:[w&&e.jsx(Te,{name:w}),we]}),De=()=>{if(!y)return null;const{title:xe,icon:Ne,showSaveButton:x=!0,showCancelButton:N=!0,onSave:Re,onCancel:Pe}=y;return e.jsxs(e.Fragment,{children:[e.jsxs(qe,{children:[e.jsxs(Le,{children:[Ne,e.jsx(_e,{children:xe})]}),(x||N)&&e.jsxs(Me,{children:[N&&e.jsx(R,{icon:!0,onClick:Pe||H||(()=>{}),circular:!0,children:e.jsx(ke,{})}),x&&e.jsx(R,{icon:!0,onClick:Re,circular:!0,children:e.jsx(Ae,{})})]})]}),e.jsx($e,{})]})},D=e.jsxs(Ee,{as:We,animation:"overlay",direction:B,onHide:Se,visible:Ie,className:v,style:ye,children:[De(),n,He&&Ve()]});return V&&typeof document<"u"?Oe.createPortal(D,V):D},ve=S;S.defaultProps={closeButtonPosition:"top",className:"",closeButtonClass:"",direction:"right",closeIcon:"close"};S.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},closeButtonPosition:{required:!1,tsType:{name:"union",raw:`| "top"
| "right"
| "bottomright"
| "bottomleft"
| "topcenter"
| "bottomcenter"
| "leftcenter"
| "rightcenter"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottomright"'},{name:"literal",value:'"bottomleft"'},{name:"literal",value:'"topcenter"'},{name:"literal",value:'"bottomcenter"'},{name:"literal",value:'"leftcenter"'},{name:"literal",value:'"rightcenter"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},closeButtonClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},closeIcon:{required:!1,tsType:{name:"SemanticICONS"},description:"",defaultValue:{value:'"close"',computed:!1}},closeButtonImage:{required:!1,tsType:{name:"JSX.Element"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},onHide:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},header:{required:!1,tsType:{name:"DrawerHeaderProps"},description:""},portalElement:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const wt={component:ve,title:"Drawer",tags:["autodocs"],argTypes:{visible:{control:"boolean"},onHide:{action:"onHide"}}},t=n=>{const[v,B]=je.useState(n.visible),C=()=>{B(!1),n.onHide&&n.onHide()};return e.jsxs("div",{children:[e.jsx(I,{onClick:()=>B(!0),children:"Open Drawer"}),e.jsx(ve,{...n,visible:v,onHide:C})]})},s=t.bind({});s.args={visible:!1,closeButtonPosition:"top",showCloseButton:!0};const i=t.bind({});i.args={visible:!1,closeButtonPosition:"top",children:e.jsx("p",{children:"Content goes here."})};const r=t.bind({});r.args={visible:!1,closeButtonPosition:"right",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const a=t.bind({});a.args={visible:!1,closeButtonPosition:"bottomleft",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const l=t.bind({});l.args={visible:!1,closeButtonPosition:"bottomright",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const c=t.bind({});c.args={visible:!1,closeButtonPosition:"topcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const d=t.bind({});d.args={visible:!1,closeButtonPosition:"leftcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const u=t.bind({});u.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const m=t.bind({});m.args={visible:!1,closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const g=t.bind({});g.args={visible:!1,closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"left",showCloseButton:!0};const b=t.bind({});b.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top",showCloseButton:!0};const p=t.bind({});p.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top",closeIcon:"arrow circle up",showCloseButton:!0};const h=t.bind({});h.args={visible:!1,header:{title:"Add Translations",icon:e.jsx(Xe,{}),showSaveButton:!0,showCancelButton:!0,onSave:()=>alert("Save clicked!"),onCancel:()=>alert("Cancel/Close clicked!")},style:{width:"400px"},children:e.jsx("p",{style:{padding:"20px"},children:"Drawer content goes here."})};const f=t.bind({});f.args={visible:!1,portalElement:typeof document<"u"?document.body:null,header:{title:"Portal Drawer",showSaveButton:!0,showCancelButton:!0,onSave:()=>alert("Save clicked in Portal!")},style:{width:"400px"},children:e.jsx("p",{style:{padding:"20px"},children:"This drawer is rendered outside of the DOM tree (in document.body) using React Portals."})};var P,j,O;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(O=(j=s.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var J,X,T;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(T=(X=i.parameters)==null?void 0:X.docs)==null?void 0:T.source}}};var W,E,k;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(k=(E=r.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var A,q,L;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(L=(q=a.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var _,M,$;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...($=(M=l.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var z,F,G;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(oe=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,re;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(re=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,le,ce;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,me;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(me=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,be,pe;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(pe=(be=h.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var he,fe,Be;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(Be=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};const It=["Default","DrawerWithContent","DrawerWithButtonRight","DrawerWithButtonBottomLeft","DrawerWithButtonBottomRight","DrawerWithButtonTopCenter","DrawerWithButtonLeftCenter","DrawerWithButtonBottomCenter","DrawerWithButtonRightCenter","LeftDrawerWithButtonRightCenter","TopDrawerWithButtonBottomCenter","TopDrawerWithDynamicCloseIcon","DrawerWithHeader","DrawerWithPortal"];export{s as Default,u as DrawerWithButtonBottomCenter,a as DrawerWithButtonBottomLeft,l as DrawerWithButtonBottomRight,d as DrawerWithButtonLeftCenter,r as DrawerWithButtonRight,m as DrawerWithButtonRightCenter,c as DrawerWithButtonTopCenter,i as DrawerWithContent,h as DrawerWithHeader,f as DrawerWithPortal,g as LeftDrawerWithButtonRightCenter,b as TopDrawerWithButtonBottomCenter,p as TopDrawerWithDynamicCloseIcon,It as __namedExportsOrder,wt as default};
