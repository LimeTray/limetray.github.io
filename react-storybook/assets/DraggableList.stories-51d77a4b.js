import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as C}from"./index-ad58220e.js";import{g}from"./requestIdGenerator-f6efc017.js";import{B as k}from"./Button-4d423377.js";import{D as j}from"./grippy-fc4fd531.js";import{u as D,a as x,s as w,K as E,P as R,D as H,c as P,S as _,v as B,b as L,C as W}from"./sortable.esm-ef2713f3.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Icon-7990d6af.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";const N=(e,r,t)=>{const i=Array.from(e),[s]=i.splice(r,1);return i.splice(t,0,s),i},a={listContainer:(e,r)=>({minWidth:e,maxWidth:r,border:"1px solid #e0e0e0",borderRadius:"4px"}),scrollContainer:e=>({maxHeight:e,overflow:"auto",scrollbarWidth:"none",msOverflowStyle:"none"}),emptyState:{display:"flex",alignItems:"center",justifyContent:"center",height:"400px"},fixedHeader:{position:"sticky",top:0,backgroundColor:"#e7ebf0",zIndex:2,wordBreak:"break-all",borderBottom:"1px solid #e0e0e0"},fixedHeaderRow:{display:"flex",alignItems:"center"},headerCell:e=>({width:`${e}%`,display:"flex",alignSelf:"normal",padding:"12px 16px",alignItems:"center",color:"#333",fontWeight:"bold"}),sortableItem:(e,r,t)=>({transform:r||void 0,transition:t||void 0,userSelect:"none",background:e?"darkgrey":"white",zIndex:e?2:"auto",position:"relative",borderBottom:"1px solid #e0e0e0",display:"flex",alignItems:"center",wordBreak:"break-all"}),itemCell:e=>({width:`${e}%`,display:"flex",alignSelf:"normal",alignItems:"center",padding:"12px 16px",textAlign:"center"}),cellRelative:{position:"relative"},dragIcon:e=>({position:"absolute",left:"-20px",visibility:e?"visible":"hidden",top:"50%",transform:"translateY(-50%)"}),dragIconImg:{height:"20px"},noScrollbar:{scrollbarWidth:"none",msOverflowStyle:"none"}},T=({id:e,index:r,item:t,headers:i})=>{const[s,o]=C.useState(!1),{attributes:d,listeners:l,setNodeRef:m,transform:p,transition:I,isDragging:f}=L({id:e});return n.jsx("div",{ref:m,style:a.sortableItem(f,W.Transform.toString(p),I),...d,...l,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:i.map((c,S)=>n.jsx("div",{style:a.itemCell(c.colCount/12*100),children:n.jsxs("div",{style:a.cellRelative,children:[S===0&&n.jsx("div",{style:a.dragIcon(s||f),children:n.jsx("img",{src:j,alt:"draggable",style:a.dragIconImg})}),typeof t[c.key]=="function"?t[c.key](c.key,r):t[c.key]]})},g()))})},V=({childrens:e,headers:r,onDragEnd:t})=>{const i=D(x(R,{activationConstraint:{distance:5}}),x(E,{coordinateGetter:w})),s=e.map(o=>String(o.id));return n.jsx(H,{sensors:i,collisionDetection:P,onDragEnd:o=>{const{active:d,over:l}=o;if(l&&d.id!==l.id){const m=s.indexOf(String(d.id)),p=s.indexOf(String(l.id));m!==-1&&p!==-1&&t({source:{index:m},destination:{index:p}})}},children:n.jsx(_,{items:s,strategy:B,children:n.jsx("div",{style:a.noScrollbar,children:e.map((o,d)=>n.jsx(T,{id:String(o.id),item:o,index:d,headers:r},o.id))})})})};class h extends C.Component{constructor(r){super(r),this.onDragEnd=t=>{if(!t.destination)return;const{childrens:i}=this.state,s=N(i,t.source.index,t.destination.index);this.setState({childrens:s},()=>{const{onDragEnd:o,identifier:d}=this.props,l={newRank:t.destination.index,identifier:d};o&&o(l)})},this.renderHeader=()=>{const{headers:t}=this.state;return n.jsx("div",{style:a.fixedHeader,children:n.jsx("div",{style:a.fixedHeaderRow,children:t.map(i=>n.jsx("div",{style:a.headerCell(i.colCount/12*100),children:i.label},g()))})})},this.renderContent=()=>{const{childrens:t,headers:i}=this.state;return n.jsx(V,{childrens:t,headers:i,onDragEnd:this.onDragEnd})},this.state={headers:[],childrens:[]}}componentDidMount(){const{headers:r,childrens:t}=this.props;this.setState({headers:r||[],childrens:t||[]})}render(){const{headers:r}=this.state,{minWidth:t="700px",maxWidth:i="900px",maxHeight:s="500px"}=this.props;return n.jsx("div",{style:a.listContainer(t,i),children:r.length>0?n.jsxs("div",{style:a.scrollContainer(s),children:[this.renderHeader(),this.renderContent()]}):n.jsx("div",{style:a.emptyState,children:"Invalid table"})})}}h.defaultProps={};h.defaultProps={headers:[{key:"id",label:"Id",colCount:2},{key:"itemName",label:"Item Name",colCount:2},{key:"variant",label:"Variant",colCount:2},{key:"itemPrice",label:"Item Price",colCount:3},{key:"edit",label:"Edit",colCount:3}],childrens:Array.from({length:100},(e,r)=>r).map(()=>({id:g(),itemName:e=>n.jsx("div",{children:"Burger"}),variant:"Regular",itemPrice:"Rs 170",edit:e=>n.jsx("div",{children:n.jsx(k,{children:"PRICE"})})})),onDragEnd:()=>{},minWidth:"700px",maxWidth:"900px",maxHeight:"500px"};const q=h;h.__docgenInfo={description:"",methods:[{name:"onDragEnd",docblock:`Function to notify when an item position is changed to parent by onDragEnd function
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
}))`,computed:!0}},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},identifier:{required:!1,tsType:{name:"string"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'700px'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'900px'",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'500px'",computed:!1}}}};const ue={component:q,title:"DraggableList",tags:["autodocs"]},u={args:{}};var y,b,v;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(v=(b=u.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const he=["Default"];export{u as Default,he as __namedExportsOrder,ue as default};
