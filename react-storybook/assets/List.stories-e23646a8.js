import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as f}from"./index-ad58220e.js";import{B as d}from"./Button-21321eef.js";import{I as h}from"./Icon-370c2d23.js";import{I as x}from"./Input-3f8aa787.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";class r extends f.Component{constructor(a){super(a),this.mapVariants=(s,e)=>t.jsxs("div",{className:"pdng-xs list-item margin-bottom-xs bdr bdr-rds flex align",children:[t.jsx("div",{className:"text-blue",children:s}),t.jsx("div",{className:"flex-grow-1 justify-end flex",children:t.jsx(h,{onClick:()=>this.removeVariant(e),className:"text-blue pointer-cr remove-btn-test",name:"close"})})]},s),this.removeVariant=s=>{const{list:e}=this.state;this.setState({list:e.filter((i,o)=>o!==s)})},this.addListItem=()=>{const{listItem:s,list:e}=this.state,i=s.trim();i&&e.indexOf(i)===-1?this.setState({list:[...e,i],listItem:""}):e.indexOf(i)>-1&&alert("Item already in the list")},this.finishAdding=()=>{const{list:s}=this.state,{doneButtonClick:e}=this.props;e&&e(s)},this.state={list:[],listItem:""}}componentDidMount(){const{list:a}=this.props;this.setState({list:a||[]})}render(){const{list:a,listItem:s}=this.state,{upperSectionLabel:e,bottomSectionLabel:i,addButtonLabel:o,doneButtonLabel:u}=this.props;return t.jsxs("div",{className:"bdr new-variant-container bdr-rds",children:[t.jsxs("div",{className:"pdng-s",children:[t.jsx("div",{className:"pdng-bottom-xs",children:e}),t.jsxs("div",{className:"flex",children:[t.jsx(x,{value:s,onChange:l=>this.setState({listItem:l.target.value}),onKeyDown:l=>{l.keyCode===13&&this.addListItem()},placeholder:"Enter here..."}),t.jsx(d,{onClick:this.addListItem,disabled:!s.length,className:"margin-left-s blue-btn add-btn-test",children:o})]})]}),t.jsxs("div",{className:"bdr-top-grey pdng-s",children:[t.jsx("div",{className:"pdng-bottom-s",children:i}),a&&a.length?t.jsx("div",{className:"margin-bottom-s",children:a.map(this.mapVariants)}):"",t.jsx("div",{className:"flex justify-end",children:t.jsx(d,{onClick:this.finishAdding,className:"blue-btn",children:u})})]})]})}}r.defaultProps={};const b=r;r.defaultProps={list:["DEFAULT","LARGE"],doneButtonClick:()=>{},upperSectionLabel:"Add Variants",bottomSectionLabel:"Existing Variants",addButtonLabel:"Add",doneButtonLabel:"Done"};r.__docgenInfo={description:"",methods:[{name:"mapVariants",docblock:`Function to map every listItems to a div
@param {String} value
@param {Number} index`,modifiers:[],params:[{name:"value",type:{name:"any"},optional:!1},{name:"index",type:{name:"any"},optional:!1}],returns:null,description:"Function to map every listItems to a div"},{name:"removeVariant",docblock:`remove a listItem from the list array in local state.
@param {Number} index index number of the variation in the array`,modifiers:[],params:[{name:"index",description:"index number of the variation in the array",type:{name:"any"},optional:!1}],returns:null,description:"remove a listItem from the list array in local state."},{name:"addListItem",docblock:"Add listItem to the list array in local state.",modifiers:[],params:[],returns:null,description:"Add listItem to the list array in local state."},{name:"finishAdding",docblock:"Function to send all the added listItems",modifiers:[],params:[],returns:null,description:"Function to send all the added listItems"}],displayName:"ToDo",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:'["DEFAULT", "LARGE"]',computed:!1}},doneButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},upperSectionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Add Variants"',computed:!1}},bottomSectionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Existing Variants"',computed:!1}},addButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Add"',computed:!1}},doneButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Done"',computed:!1}}}};const P={component:b,title:"List",tags:["autodocs"]},n={args:{}};var m,c,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const U=["Default"];export{n as Default,U as __namedExportsOrder,P as default};