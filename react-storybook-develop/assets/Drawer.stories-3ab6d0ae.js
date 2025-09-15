import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as ue}from"./index-ad58220e.js";import{B as ne}from"./Button-21321eef.js";import{I as me}from"./Icon-370c2d23.js";import{S as be}from"./Segment-17af24fa.js";import{S as ge}from"./Sidebar-90cf1049.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";const v=({children:n,className:h,direction:p,closeButtonPosition:B,closeButtonClass:se,closeIcon:f,closeButtonImage:ie,visible:re,onHide:ae,showCloseButton:le,onClose:ce})=>{const de=()=>e.jsxs(ne,{onClick:ce,className:`close-button-position-${B} ${se}`,icon:!!f,children:[f&&e.jsx(me,{name:f}),ie]});return e.jsxs(ge,{as:be,animation:"overlay",direction:p,onHide:ae,visible:re,className:h,children:[n,le&&de()]})},oe=v;v.defaultProps={closeButtonPosition:"top",className:"",closeButtonClass:"",direction:"right",closeIcon:"close"};v.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},closeButtonPosition:{required:!1,tsType:{name:"union",raw:`| "top"
| "right"
| "bottomright"
| "bottomleft"
| "topcenter"
| "bottomcenter"
| "leftcenter"
| "rightcenter"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottomright"'},{name:"literal",value:'"bottomleft"'},{name:"literal",value:'"topcenter"'},{name:"literal",value:'"bottomcenter"'},{name:"literal",value:'"leftcenter"'},{name:"literal",value:'"rightcenter"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},closeButtonClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},closeIcon:{required:!1,tsType:{name:"SemanticICONS"},description:"",defaultValue:{value:'"close"',computed:!1}},closeButtonImage:{required:!1,tsType:{name:"JSX.Element"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},onHide:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""}}};const Te={component:oe,title:"Drawer",tags:["autodocs"],argTypes:{visible:{control:"boolean"},onHide:{action:"onHide"}}},t=n=>{const[h,p]=ue.useState(n.visible),B=()=>{p(!1),n.onHide&&n.onHide()};return e.jsxs("div",{children:[e.jsx(ne,{onClick:()=>p(!0),children:"Open Drawer"}),e.jsx(oe,{...n,visible:h,onHide:B})]})},o=t.bind({});o.args={visible:!1,closeButtonPosition:"top",showCloseButton:!0};const s=t.bind({});s.args={visible:!1,closeButtonPosition:"top",children:e.jsx("p",{children:"Content goes here."})};const i=t.bind({});i.args={visible:!1,closeButtonPosition:"right",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const r=t.bind({});r.args={visible:!1,closeButtonPosition:"bottomleft",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const a=t.bind({});a.args={visible:!1,closeButtonPosition:"bottomright",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const l=t.bind({});l.args={visible:!1,closeButtonPosition:"topcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const c=t.bind({});c.args={visible:!1,closeButtonPosition:"leftcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const d=t.bind({});d.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const u=t.bind({});u.args={visible:!1,closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const m=t.bind({});m.args={visible:!1,closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"left",showCloseButton:!0};const b=t.bind({});b.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top",showCloseButton:!0};const g=t.bind({});g.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top",closeIcon:"arrow circle up",showCloseButton:!0};var C,I,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var S,H,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(V=(H=s.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var y,D,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var R,O,P;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(P=(O=r.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var J,X,x;a.parameters={...a.parameters,docs:{...(J=a.parameters)==null?void 0:J.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(x=(X=a.parameters)==null?void 0:X.docs)==null?void 0:x.source}}};var W,j,T;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var E,k,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var q,L,_;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var $,z,F;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,K,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
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
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ee=["Default","DrawerWithContent","DrawerWithButtonRight","DrawerWithButtonBottomLeft","DrawerWithButtonBottomRight","DrawerWithButtonTopCenter","DrawerWithButtonLeftCenter","DrawerWithButtonBottomCenter","DrawerWithButtonRightCenter","LeftDrawerWithButtonRightCenter","TopDrawerWithButtonBottomCenter","TopDrawerWithDynamicCloseIcon"];export{o as Default,d as DrawerWithButtonBottomCenter,r as DrawerWithButtonBottomLeft,a as DrawerWithButtonBottomRight,c as DrawerWithButtonLeftCenter,i as DrawerWithButtonRight,u as DrawerWithButtonRightCenter,l as DrawerWithButtonTopCenter,s as DrawerWithContent,m as LeftDrawerWithButtonRightCenter,b as TopDrawerWithButtonBottomCenter,g as TopDrawerWithDynamicCloseIcon,Ee as __namedExportsOrder,Te as default};
