import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as I}from"./index-ad58220e.js";import{g as j}from"./requestIdGenerator-f6efc017.js";import{h as k}from"./util-bfaa5c4b.js";import{D as C}from"./grippy-fc4fd531.js";import{I as f}from"./Icon-5cfe3eb1.js";import{u as E,a as V,s as L,K as q,P as T,D as A,c as B,S as O,v as R,b as W,C as K}from"./sortable.esm-9bf26abb.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./childrenUtils-250e70c5.js";import"./index-4fee7e45.js";const _=(l,r,n)=>{const a=Array.from(l),[t]=a.splice(r,1);return a.splice(n,0,t),a},G=({id:l,index:r,selectedIndex:n,openedParent:a,parent:t,parentItemElem:i,selectParent:d,setSelectedIndex:s,renderChildrens:u,toggleParent:v})=>{const[p,o]=I.useState(!1),{attributes:c,listeners:m,setNodeRef:g,transform:y,transition:w,isDragging:x}=W({id:l}),N={transform:K.Transform.toString(y),transition:w,userSelect:"none",background:x?"darkgrey":"white",zIndex:x?2:"auto",position:"relative"};return e.jsxs("div",{ref:g,style:N,...c,...m,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>{s(r),d(t)},tabIndex:r,role:"button",onKeyDown:()=>{},children:[e.jsxs("div",{style:{borderLeft:n===r?"4px solid #0054ce":"4px solid transparent",color:n===r?"#0054ce":"black",display:"flex",alignItems:"center",borderBottom:"1px solid #e0e0e0",padding:"16px"},children:[e.jsx("img",{style:{opacity:p?1:0,height:"20px"},src:C,alt:""}),e.jsx("div",{style:{marginLeft:"12px",flexGrow:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.parentName}),e.jsxs("div",{style:{flexGrow:1,display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[e.jsx("div",{style:{marginRight:"10px"},children:i(t)}),t.childrens&&t.childrens.length?e.jsx(f,{onClick:D=>{D.stopPropagation(),v(t.parentId)},className:"pointer-cr",style:{cursor:"pointer",padding:"4px",borderRadius:"50%"},name:`chevron ${a.indexOf(t.parentId)>-1?"up":"down"}`}):null]})]}),a.indexOf(t.parentId)>-1&&u(t)]})},H=({dataList:l,openedParent:r,selectedIndex:n,selectParent:a,parentItemElem:t,renderChildrens:i,onDragEnd:d,setSelectedIndex:s,toggleParent:u})=>{const v=E(V(T,{activationConstraint:{distance:5}}),V(q,{coordinateGetter:L})),p=l.map(o=>String(o.parentId));return e.jsx(A,{sensors:v,collisionDetection:B,onDragEnd:o=>{const{active:c,over:m}=o;if(m&&c.id!==m.id){const g=p.indexOf(String(c.id)),y=p.indexOf(String(m.id));g!==-1&&y!==-1&&d({source:{index:g},destination:{index:y}})}},children:e.jsx(O,{items:p,strategy:R,children:e.jsx("div",{style:{background:"white"},children:l.map((o,c)=>e.jsx(G,{id:String(o.parentId),parent:o,index:c,selectedIndex:n,openedParent:r,setSelectedIndex:s,toggleParent:u,selectParent:a,parentItemElem:t,renderChildrens:i},o.parentId))})})})};class h extends I.Component{constructor(r){super(r),this.onDragEnd=n=>{if(!n.destination)return;const{dataList:a}=this.state,t=_(a,n.source.index,n.destination.index);this.setState({dataList:t,selectedIndex:n.destination.index},()=>{const{onDragEnd:i,identifier:d}=this.props,s={newRank:n.destination.index,identifier:d};i&&i(s)})},this.renderChildrens=n=>{const{childrenItemElem:a,selectChild:t}=this.props;return e.jsx("div",{children:n.childrens.map((i,d)=>e.jsxs("div",{onClick:s=>{s.stopPropagation(),t(i)},tabIndex:d,onKeyDown:()=>{},role:"button",style:{padding:"16px 24px",backgroundColor:"#e7ebf0",borderBottom:"1px solid #e0e0e0",display:"flex",alignItems:"center"},children:[e.jsx("div",{children:i.childName}),e.jsx("div",{style:{flexGrow:1,display:"flex",justifyContent:"flex-end"},children:a(i)})]},j()))})},this.renderList=()=>{const{dataList:n,openedParent:a,selectedIndex:t}=this.state,{parentItemElem:i,selectParent:d}=this.props;return e.jsx(H,{dataList:n,openedParent:a,selectedIndex:t,selectParent:d,parentItemElem:i,renderChildrens:this.renderChildrens,onDragEnd:this.onDragEnd,setSelectedIndex:s=>this.setState({selectedIndex:s}),toggleParent:s=>{a.indexOf(s)>-1?this.setState({openedParent:a.filter(u=>u!==s)}):this.setState({openedParent:[...a,s]})}})},this.state={showDataSchemaError:!1,dataList:[],openedParent:[],selectedIndex:null}}componentDidMount(){const{dataList:r,dataSchema:n}=this.props;if(k.schemaValidator(n)){const a=k.mapDataWithSchema(r,n);this.setState({dataList:a||[],showDataSchemaError:!1})}else this.setState({showDataSchemaError:!0})}render(){const{showDataSchemaError:r}=this.state;return e.jsx("div",{style:{maxHeight:"500px",minWidth:"300px",maxWidth:"300px",overflow:"auto",border:"1px solid #e0e0e0",scrollbarWidth:"none",msOverflowStyle:"none"},children:r?e.jsx("div",{children:"Wrong Schema"}):e.jsx("div",{children:this.renderList()})})}}h.defaultProps={};h.defaultProps={dataList:[{key:"nochild",value:"No Child",selectedValues:[]},{key:"burger",value:"Burger",childrens:[{key:"vegburger",value:"Veg Burger"},{key:"nonvegburger",value:"Non-Veg Burger"}],selectedValues:[]},{key:"pizza",value:"Pizza",childrens:[{key:"vegpizza",value:"Veg Pizza"},{key:"nonvegpizza",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza2",value:"Pizza",childrens:[{key:"vegpizza2",value:"Veg Pizza"},{key:"nonvegpizza2",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza3",value:"Pizza",childrens:[{key:"vegpizza3",value:"Veg Pizza"},{key:"nonvegpizza3",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza4",value:"Pizza",childrens:[{key:"vegpizza123",value:"Veg Pizza"},{key:"nonvegpizza34",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza5",value:"Pizza",childrens:[{key:"vegpizza13",value:"Veg Pizza"},{key:"nonvegpizza34",value:"Non-Veg Pizza"}],selectedValues:[]}],dataSchema:{parentId:"key",parentName:"value",childrenElement:"childrens",childName:"value",childId:"key"},label:"All Cities",parentItemElem:()=>e.jsx(f,{className:"pointer-cr",name:"pencil"}),childrenItemElem:()=>e.jsx(f,{className:"pointer-cr",name:"pencil"}),onDragEnd:()=>{},selectParent:l=>console.log(l),selectChild:l=>console.log(l)};const M=h;h.__docgenInfo={description:"",methods:[{name:"onDragEnd",docblock:null,modifiers:[],params:[{name:"result",optional:!1,type:{name:"any"}}],returns:null},{name:"renderChildrens",docblock:null,modifiers:[],params:[{name:"parent",optional:!1,type:{name:"any"}}],returns:null},{name:"renderList",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DraggableSmall",props:{dataList:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  {
    key: 'nochild',
    value: 'No Child',
    selectedValues: []
  },
  {
    key: 'burger',
    value: 'Burger',
    childrens: [
      {
        key: 'vegburger',
        value: 'Veg Burger'
      },
      {
        key: 'nonvegburger',
        value: 'Non-Veg Burger'
      }
    ],
    selectedValues: []
  },
  {
    key: 'pizza',
    value: 'Pizza',
    childrens: [
      {
        key: 'vegpizza',
        value: 'Veg Pizza'
      },
      {
        key: 'nonvegpizza',
        value: 'Non-Veg Pizza'
      }
    ],
    selectedValues: []
  },
  {
    key: 'pizza2',
    value: 'Pizza',
    childrens: [
      {
        key: 'vegpizza2',
        value: 'Veg Pizza'
      },
      {
        key: 'nonvegpizza2',
        value: 'Non-Veg Pizza'
      }
    ],
    selectedValues: []
  },
  {
    key: 'pizza3',
    value: 'Pizza',
    childrens: [
      {
        key: 'vegpizza3',
        value: 'Veg Pizza'
      },
      {
        key: 'nonvegpizza3',
        value: 'Non-Veg Pizza'
      }
    ],
    selectedValues: []
  },
  {
    key: 'pizza4',
    value: 'Pizza',
    childrens: [
      {
        key: 'vegpizza123',
        value: 'Veg Pizza'
      },
      {
        key: 'nonvegpizza34',
        value: 'Non-Veg Pizza'
      }
    ],
    selectedValues: []
  },
  {
    key: 'pizza5',
    value: 'Pizza',
    childrens: [
      {
        key: 'vegpizza13',
        value: 'Veg Pizza'
      },
      {
        key: 'nonvegpizza34',
        value: 'Non-Veg Pizza'
      }
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
}`,computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'All Cities'",computed:!1}},parentItemElem:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:'() => <Icon className="pointer-cr" name="pencil" />',computed:!1}},childrenItemElem:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:'() => <Icon className="pointer-cr" name="pencil" />',computed:!1}},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => { }",computed:!1}},identifier:{required:!0,tsType:{name:"string"},description:""},selectParent:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"(data: any) => console.log(data)",computed:!1}},selectChild:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"(data: any) => console.log(data)",computed:!1}}}};const le={component:M,title:"DraggableSmall",tags:["autodocs"]},z={args:{identifier:"category"}};var b,S,P;z.parameters={...z.parameters,docs:{...(b=z.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    identifier: "category"
  }
}`,...(P=(S=z.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const oe=["Default"];export{z as Default,oe as __namedExportsOrder,le as default};
