import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as P}from"./index-ad58220e.js";import{g as D}from"./requestIdGenerator-f6efc017.js";import{h as k}from"./util-bfaa5c4b.js";import{D as E}from"./grippy-fc4fd531.js";import{I as x}from"./Icon-7990d6af.js";import{u as q,a as I,s as L,K as A,P as T,D as B,c as W,S as O,v as R,b as H,C as _}from"./sortable.esm-ef2713f3.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./index-4fee7e45.js";const G=(a,s,e)=>{const n=Array.from(a),[t]=n.splice(s,1);return n.splice(e,0,t),n},o={container:(a,s,e)=>({maxHeight:a,minWidth:s,maxWidth:e,overflow:"auto",border:"1px solid #e0e0e0",scrollbarWidth:"none",msOverflowStyle:"none"}),sortableItem:(a,s,e)=>({transform:s||void 0,transition:e||void 0,userSelect:"none",background:a?"darkgrey":"white",zIndex:a?2:"auto",position:"relative"}),itemRow:a=>({borderLeft:a?"4px solid #0054ce":"4px solid transparent",color:a?"#0054ce":"black",display:"flex",alignItems:"center",borderBottom:"1px solid #e0e0e0",padding:"16px"}),dragIcon:a=>({opacity:a?1:0,height:"20px"}),parentName:{marginLeft:"12px",flexGrow:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},actionsContainer:{flexGrow:1,display:"flex",justifyContent:"flex-end",alignItems:"center"},parentAction:{marginRight:"10px"},chevronIcon:{cursor:"pointer",padding:"4px",borderRadius:"50%"},childItem:{padding:"16px 24px",backgroundColor:"#e7ebf0",borderBottom:"1px solid #e0e0e0",display:"flex",alignItems:"center"},childActions:{flexGrow:1,display:"flex",justifyContent:"flex-end"},listBackground:{background:"white"}},K=({id:a,index:s,selectedIndex:e,openedParent:n,parent:t,parentItemElem:i,selectParent:c,setSelectedIndex:l,renderChildrens:p,toggleParent:f})=>{const[m,d]=P.useState(!1),{attributes:u,listeners:g,setNodeRef:y,transform:h,transition:w,isDragging:N}=H({id:a}),j=e===s;return r.jsxs("div",{ref:y,style:o.sortableItem(N,_.Transform.toString(h),w),...u,...g,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>{l(s),c(t)},tabIndex:0,role:"button",children:[r.jsxs("div",{style:o.itemRow(j),children:[r.jsx("img",{style:o.dragIcon(m),src:E,alt:""}),r.jsx("div",{style:o.parentName,children:t.parentName}),r.jsxs("div",{style:o.actionsContainer,children:[r.jsx("div",{style:o.parentAction,children:i(t)}),t.childrens&&t.childrens.length?r.jsx(x,{onClick:C=>{C.stopPropagation(),f(t.parentId)},className:"pointer-cr",style:o.chevronIcon,name:`chevron ${n.indexOf(t.parentId)>-1?"up":"down"}`}):null]})]}),n.indexOf(t.parentId)>-1&&p(t)]})},M=({dataList:a,openedParent:s,selectedIndex:e,selectParent:n,parentItemElem:t,renderChildrens:i,onDragEnd:c,setSelectedIndex:l,toggleParent:p})=>{const f=q(I(T,{activationConstraint:{distance:5}}),I(A,{coordinateGetter:L})),m=a.map(d=>String(d.parentId));return r.jsx(B,{sensors:f,collisionDetection:W,onDragEnd:d=>{const{active:u,over:g}=d;if(g&&u.id!==g.id){const y=m.indexOf(String(u.id)),h=m.indexOf(String(g.id));y!==-1&&h!==-1&&c({source:{index:y},destination:{index:h}})}},children:r.jsx(O,{items:m,strategy:R,children:r.jsx("div",{style:o.listBackground,children:a.map((d,u)=>r.jsx(K,{id:String(d.parentId),parent:d,index:u,selectedIndex:e,openedParent:s,setSelectedIndex:l,toggleParent:p,selectParent:n,parentItemElem:t,renderChildrens:i},d.parentId))})})})};class v extends P.Component{constructor(s){super(s),this.onDragEnd=e=>{if(!e.destination)return;const{dataList:n}=this.state,t=G(n,e.source.index,e.destination.index);this.setState({dataList:t,selectedIndex:e.destination.index},()=>{const{onDragEnd:i,identifier:c}=this.props,l={newRank:e.destination.index,identifier:c};i&&i(l)})},this.renderChildrens=e=>{const{childrenItemElem:n,selectChild:t}=this.props;return r.jsx("div",{children:e.childrens.map(i=>r.jsxs("div",{onClick:c=>{c.stopPropagation(),t(i)},tabIndex:0,onKeyDown:()=>{},role:"button",style:o.childItem,children:[r.jsx("div",{children:i.childName}),r.jsx("div",{style:o.childActions,children:n(i)})]},D()))})},this.renderList=()=>{const{dataList:e,openedParent:n,selectedIndex:t}=this.state,{parentItemElem:i,selectParent:c}=this.props;return r.jsx(M,{dataList:e,openedParent:n,selectedIndex:t,selectParent:c,parentItemElem:i,renderChildrens:this.renderChildrens,onDragEnd:this.onDragEnd,setSelectedIndex:l=>this.setState({selectedIndex:l}),toggleParent:l=>{n.indexOf(l)>-1?this.setState({openedParent:n.filter(p=>p!==l)}):this.setState({openedParent:[...n,l]})}})},this.state={showDataSchemaError:!1,dataList:[],openedParent:[],selectedIndex:null}}componentDidMount(){const{dataList:s,dataSchema:e}=this.props;if(k.schemaValidator(e)){const n=k.mapDataWithSchema(s,e);this.setState({dataList:n||[],showDataSchemaError:!1})}else this.setState({showDataSchemaError:!0})}render(){const{showDataSchemaError:s}=this.state,{maxHeight:e="500px",minWidth:n="300px",maxWidth:t="300px"}=this.props;return r.jsx("div",{style:o.container(e,n,t),children:s?r.jsx("div",{children:"Wrong Schema"}):r.jsx("div",{children:this.renderList()})})}}v.defaultProps={};v.defaultProps={dataList:[{key:"nochild",value:"No Child",selectedValues:[]},{key:"burger",value:"Burger",childrens:[{key:"vegburger",value:"Veg Burger"},{key:"nonvegburger",value:"Non-Veg Burger"}],selectedValues:[]},{key:"pizza",value:"Pizza",childrens:[{key:"vegpizza",value:"Veg Pizza"},{key:"nonvegpizza",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza2",value:"Pizza",childrens:[{key:"vegpizza2",value:"Veg Pizza"},{key:"nonvegpizza2",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza3",value:"Pizza",childrens:[{key:"vegpizza3",value:"Veg Pizza"},{key:"nonvegpizza3",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza4",value:"Pizza",childrens:[{key:"vegpizza123",value:"Veg Pizza"},{key:"nonvegpizza34",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza5",value:"Pizza",childrens:[{key:"vegpizza13",value:"Veg Pizza"},{key:"nonvegpizza34",value:"Non-Veg Pizza"}],selectedValues:[]}],dataSchema:{parentId:"key",parentName:"value",childrenElement:"childrens",childName:"value",childId:"key"},label:"All Cities",parentItemElem:()=>r.jsx(x,{className:"pointer-cr",name:"pencil"}),childrenItemElem:()=>r.jsx(x,{className:"pointer-cr",name:"pencil"}),onDragEnd:()=>{},selectParent:a=>console.log(a),selectChild:a=>console.log(a),maxHeight:"500px",minWidth:"300px",maxWidth:"300px"};const $=v;v.__docgenInfo={description:"",methods:[{name:"onDragEnd",docblock:null,modifiers:[],params:[{name:"result",optional:!1,type:{name:"any"}}],returns:null},{name:"renderChildrens",docblock:null,modifiers:[],params:[{name:"parent",optional:!1,type:{name:"any"}}],returns:null},{name:"renderList",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DraggableSmall",props:{dataList:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  { key: 'nochild', value: 'No Child', selectedValues: [] },
  {
    key: 'burger', value: 'Burger',
    childrens: [
      { key: 'vegburger', value: 'Veg Burger' },
      { key: 'nonvegburger', value: 'Non-Veg Burger' }
    ],
    selectedValues: []
  },
  {
    key: 'pizza', value: 'Pizza',
    childrens: [
      { key: 'vegpizza', value: 'Veg Pizza' },
      { key: 'nonvegpizza', value: 'Non-Veg Pizza' }
    ],
    selectedValues: []
  },
  {
    key: 'pizza2', value: 'Pizza',
    childrens: [
      { key: 'vegpizza2', value: 'Veg Pizza' },
      { key: 'nonvegpizza2', value: 'Non-Veg Pizza' }
    ],
    selectedValues: []
  },
  {
    key: 'pizza3', value: 'Pizza',
    childrens: [
      { key: 'vegpizza3', value: 'Veg Pizza' },
      { key: 'nonvegpizza3', value: 'Non-Veg Pizza' }
    ],
    selectedValues: []
  },
  {
    key: 'pizza4', value: 'Pizza',
    childrens: [
      { key: 'vegpizza123', value: 'Veg Pizza' },
      { key: 'nonvegpizza34', value: 'Non-Veg Pizza' }
    ],
    selectedValues: []
  },
  {
    key: 'pizza5', value: 'Pizza',
    childrens: [
      { key: 'vegpizza13', value: 'Veg Pizza' },
      { key: 'nonvegpizza34', value: 'Non-Veg Pizza' }
    ],
    selectedValues: []
  }
]`,computed:!1}},dataSchema:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  parentId?: string,
  parentName?: string,
  childrenElement?: string,
  childName?: string,
  childId?: string
}`,signature:{properties:[{key:"parentId",value:{name:"string",required:!1}},{key:"parentName",value:{name:"string",required:!1}},{key:"childrenElement",value:{name:"string",required:!1}},{key:"childName",value:{name:"string",required:!1}},{key:"childId",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:`{
  parentId: 'key',
  parentName: 'value',
  childrenElement: 'childrens',
  childName: 'value',
  childId: 'key'
}`,computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'All Cities'",computed:!1}},parentItemElem:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:'() => <Icon className="pointer-cr" name="pencil" />',computed:!1}},childrenItemElem:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:'() => <Icon className="pointer-cr" name="pencil" />',computed:!1}},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},identifier:{required:!0,tsType:{name:"string"},description:""},selectParent:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"(data: any) => console.log(data)",computed:!1}},selectChild:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"(data: any) => console.log(data)",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'500px'",computed:!1}},minWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'300px'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'300px'",computed:!1}}}};const ue={component:$,title:"DraggableSmall",tags:["autodocs"]},z={args:{identifier:"category"}};var V,b,S;z.parameters={...z.parameters,docs:{...(V=z.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    identifier: "category"
  }
}`,...(S=(b=z.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const pe=["Default"];export{z as Default,pe as __namedExportsOrder,ue as default};
