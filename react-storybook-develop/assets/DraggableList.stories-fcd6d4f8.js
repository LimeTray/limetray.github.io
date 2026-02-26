import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as k}from"./index-ad58220e.js";import{g}from"./requestIdGenerator-f6efc017.js";import{B as S}from"./Button-97fd5a94.js";import{D as I}from"./grippy-fc4fd531.js";import{u as D,a as y,s as w,K as E,P as R,D as P,c as _,S as B,v as L,b as N,C as A}from"./sortable.esm-9bf26abb.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./Icon-5cfe3eb1.js";import"./Label-11060fec.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-25182749.js";import"./includes-c2454020.js";import"./index-4fee7e45.js";import"./Portal-86734c92.js";import"./map-db19bd84.js";const H=(o,r,t)=>{const n=Array.from(o),[s]=n.splice(r,1);return n.splice(t,0,s),n},O=({id:o,index:r,item:t,headers:n})=>{const[s,i]=k.useState(!1),{attributes:a,listeners:d,setNodeRef:c,transform:m,transition:C,isDragging:h}=N({id:o}),j={transform:A.Transform.toString(m),transition:C,userSelect:"none",background:h?"darkgrey":"white",zIndex:h?2:"auto",position:"relative",borderBottom:"1px solid #e0e0e0",display:"flex",alignItems:"center",wordBreak:"break-all"};return e.jsx("div",{ref:c,style:j,...a,...d,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:n.map((l,f)=>e.jsx("div",{style:{width:`${l.colCount/12*100}%`,display:"flex",alignSelf:"normal",alignItems:"center",padding:"12px 16px",textAlign:"center",borderRight:f===n.length-1?"none":void 0},children:e.jsxs("div",{style:{position:"relative"},children:[f===0&&e.jsx("div",{style:{position:"absolute",left:"-20px",visibility:s||h?"visible":"hidden",top:"50%",transform:"translateY(-50%)"},children:e.jsx("img",{src:I,alt:"draggable",style:{height:"20px"}})}),typeof t[l.key]=="function"?t[l.key](l.key,r):t[l.key]]})},g()))})},W=({childrens:o,headers:r,onDragEnd:t})=>{const n=D(y(R,{activationConstraint:{distance:5}}),y(E,{coordinateGetter:w})),s=o.map(i=>String(i.id));return e.jsx(P,{sensors:n,collisionDetection:_,onDragEnd:i=>{const{active:a,over:d}=i;if(d&&a.id!==d.id){const c=s.indexOf(String(a.id)),m=s.indexOf(String(d.id));c!==-1&&m!==-1&&t({source:{index:c},destination:{index:m}})}},children:e.jsx(B,{items:s,strategy:L,children:e.jsx("div",{style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:o.map((i,a)=>e.jsx(O,{id:String(i.id),item:i,index:a,headers:r},i.id))})})})};class u extends k.Component{constructor(r){super(r),this.onDragEnd=t=>{if(!t.destination)return;const{childrens:n}=this.state,s=H(n,t.source.index,t.destination.index);this.setState({childrens:s},()=>{const{onDragEnd:i,identifier:a}=this.props,d={newRank:t.destination.index,identifier:a};i&&i(d)})},this.renderHeader=()=>{const{headers:t}=this.state;return e.jsx("div",{style:{position:"sticky",top:0,backgroundColor:"#e7ebf0",zIndex:2,wordBreak:"break-all",borderBottom:"1px solid #e0e0e0"},children:e.jsx("div",{style:{display:"flex",alignItems:"center"},children:t.map(n=>e.jsx("div",{style:{width:`${n.colCount/12*100}%`,display:"flex",alignSelf:"normal",padding:"12px 16px",alignItems:"center",color:"#333",fontWeight:"bold"},children:n.label},g()))})})},this.renderContent=()=>{const{childrens:t,headers:n}=this.state;return e.jsx(W,{childrens:t,headers:n,onDragEnd:this.onDragEnd})},this.state={headers:[],childrens:[]}}componentDidMount(){const{headers:r,childrens:t}=this.props;this.setState({headers:r||[],childrens:t||[]})}render(){const{headers:r}=this.state;return e.jsx("div",{style:{minWidth:"700px",maxWidth:"900px",border:"1px solid #e0e0e0",borderRadius:"4px"},children:r.length>0?e.jsxs("div",{style:{maxHeight:"500px",overflow:"auto",scrollbarWidth:"none",msOverflowStyle:"none"},children:[this.renderHeader(),this.renderContent()]}):e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"400px"},children:"Invalid table"})})}}u.defaultProps={};u.defaultProps={headers:[{key:"id",label:"Id",colCount:2},{key:"itemName",label:"Item Name",colCount:2},{key:"variant",label:"Variant",colCount:2},{key:"itemPrice",label:"Item Price",colCount:3},{key:"edit",label:"Edit",colCount:3}],childrens:Array.from({length:100},(o,r)=>r).map(()=>({id:g(),itemName:o=>e.jsx("div",{children:"Burger"}),variant:"Regular",itemPrice:"Rs 170",edit:o=>e.jsx("div",{children:e.jsx(S,{children:"PRICE"})})})),onDragEnd:()=>{}};const T=u;u.__docgenInfo={description:"",methods:[{name:"onDragEnd",docblock:`Function to notify when an item position is changed to parent by onDragEnd function
which is passed by the parent to this component
@param {Object} result contains the info of old index and new index of the item in the list`,modifiers:[],params:[{name:"result",description:"contains the info of old index and new index of the item in the list",type:{name:"any"},optional:!1}],returns:null,description:`Function to notify when an item position is changed to parent by onDragEnd function
which is passed by the parent to this component`},{name:"renderHeader",docblock:"Function to render the header of the draggable List",modifiers:[],params:[],returns:null,description:"Function to render the header of the draggable List"},{name:"renderContent",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DraggableList",props:{headers:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  {
    key: 'id',
    label: 'Id',
    colCount: 2
  },
  {
    key: 'itemName',
    label: 'Item Name',
    colCount: 2
  },
  {
    key: 'variant',
    label: 'Variant',
    colCount: 2
  },
  {
    key: 'itemPrice',
    label: 'Item Price',
    colCount: 3
  },
  {
    key: 'edit',
    label: 'Edit',
    colCount: 3
  }
]`,computed:!1}},childrens:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`Array.from({ length: 100 }, (_v: any, k: any) => k).map(() => ({
  id: generateRandomId(),
  itemName: (_item: any) => <div>Burger</div>,
  variant: 'Regular',
  itemPrice: 'Rs 170',
  edit: (_item: any) => (
    <div>
      <Button>PRICE</Button>
    </div>
  )
}))`,computed:!0}},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},identifier:{required:!1,tsType:{name:"string"},description:""}}};const de={component:T,title:"DraggableList",tags:["autodocs"]},p={args:{}};var x,b,v;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const le=["Default"];export{p as Default,le as __namedExportsOrder,de as default};
