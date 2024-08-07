import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as X}from"./index-76fb7be0.js";import{B as $}from"./Button-4d603abf.js";import{I as B}from"./Icon-c6fca73b.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-34c191df.js";import"./getElementType-751ca897.js";import"./childrenUtils-5b78ad27.js";import"./Label-0be1d8a8.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-26f5100b.js";import"./Portal-07b213b9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-0d286b3c.js";class l extends X.Component{constructor(){super(...arguments),this.state={}}renderImage(){const{image:c}=this.props;return c}render(){const{isButton:c,icon:e,onClick:d,title:p,disabled:g,labelPosition:A,className:f,loading:h,circular:y,color:v,size:b,basic:J,style:I,image:u,imagePosition:T}=this.props;return c?i.jsxs($,{onClick:d,icon:!!e,disabled:g,labelPosition:A,className:f,loading:h,basic:J,circular:y,color:v,size:b,style:I,children:[e&&i.jsx(B,{name:e}),u&&T!=="right"&&this.renderImage(),p||null,u&&T==="right"&&this.renderImage()]}):u?this.renderImage():i.jsx(B,{name:e,disabled:g,className:f,onClick:d,loading:h,circular:y,color:v,size:b,style:I})}}l.defaultProps={};l.defaultProps={isButton:!1,icon:"",disabled:!1,className:"",loading:!1,title:"",circular:!1,color:"green",size:"large",basic:!1,style:{}};const F=l;l.__docgenInfo={description:"",methods:[{name:"renderImage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LtIcon",props:{isButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},icon:{required:!1,tsType:{name:"SemanticICONS"},description:"",defaultValue:{value:'""',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:"'right' | 'left'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},circular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"SemanticCOLORS"},description:"",defaultValue:{value:"'green'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive'",elements:[{name:"literal",value:"'mini'"},{name:"literal",value:"'tiny'"},{name:"literal",value:"'small'"},{name:"literal",value:"'large'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"},{name:"literal",value:"'massive'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},basic:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},image:{required:!1,tsType:{name:"JSX.Element"},description:""},imagePosition:{required:!1,tsType:{name:"union",raw:"'right' | 'left'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:""}}};const pe={component:F,title:"LtIcon",tags:["autodocs"]},a={args:{icon:"chess queen"}},t={args:{icon:"chess rook",color:"blue"}},r={args:{icon:"chess rook",disabled:!0}},m=()=>{alert("Downloading ....")},s={args:{icon:"redo",onClick:m}},o={args:{icon:"download",onClick:m,isButton:!0,title:"Downloading",labelPosition:"left"}},n={args:{image:i.jsx("img",{style:{marginRight:"10px"},src:"https://outlet-ui-service.dashboards.limetray.com/images/dine_in_active.svg"}),onClick:m,isButton:!0,title:"Dine-In",labelPosition:"left"}};var L,q,C;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    icon: "chess queen"
  }
}`,...(C=(q=a.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var k,x,S;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    icon: "chess rook",
    color: "blue"
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var P,V,w;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    icon: "chess rook",
    disabled: true
  }
}`,...(w=(V=r.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var W,_,D;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: "redo",
    onClick: onClick
  }
}`,...(D=(_=s.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var j,N,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: "download",
    onClick: onClick,
    isButton: true,
    title: "Downloading",
    labelPosition: 'left'
  }
}`,...(E=(N=o.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var O,R,z;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    image: <img style={{
      marginRight: '10px'
    }} src="https://outlet-ui-service.dashboards.limetray.com/images/dine_in_active.svg" />,
    onClick: onClick,
    isButton: true,
    title: "Dine-In",
    labelPosition: 'left'
  }
}`,...(z=(R=n.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const ge=["LTIconWithoutButton","LTIconWithoutButtonBlueColor","LTIconWithoutButtonDisabled","LTIcon","LTIconWithButton","LTImageWithButton"];export{s as LTIcon,o as LTIconWithButton,a as LTIconWithoutButton,t as LTIconWithoutButtonBlueColor,r as LTIconWithoutButtonDisabled,n as LTImageWithButton,ge as __namedExportsOrder,pe as default};
