import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as x}from"./index-ad58220e.js";import{D as V,C as P,P as I}from"./react-beautiful-dnd.esm-970fb784.js";import{g as N}from"./requestIdGenerator-f6efc017.js";import{h}from"./util-bfaa5c4b.js";import{D as w}from"./grippy-fc4fd531.js";import{I as g}from"./Icon-370c2d23.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-5494d9cc.js";import"./extends-4c19d496.js";import"./toPropertyKey-4015efc6.js";import"./index-4fee7e45.js";import"./tiny-invariant-dd7d57d2.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";const D=(r,i)=>({userSelect:"none",background:r?"darkgrey":"white",...i}),j=(r,i,a)=>{const n=Array.from(r),[s]=n.splice(i,1);return n.splice(a,0,s),n},E=r=>({background:r?"grey":"white"});class p extends x.Component{constructor(i){super(i),this.onDragEnd=a=>{if(!a.destination)return;const{dataList:n}=this.state,s=j(n,a.source.index,a.destination.index);this.setState({dataList:s,selectedIndex:a.destination.index},()=>{const{onDragEnd:l,identifier:o}=this.props,d={newRank:a.destination.index,identifier:o};l&&l(d)})},this.renderChildrens=a=>{const{childrenItemElem:n,selectChild:s}=this.props;return e.jsx("div",{children:a.childrens.map((l,o)=>e.jsxs("div",{onClick:()=>{s(l)},tabIndex:o,onKeyDown:()=>{},role:"button",className:"d-l-sm-item-child flex align-center  bdr-btm-grey d-sm-children",children:[e.jsx("div",{children:l.childName}),e.jsx("div",{className:"flex-grow-1 justify-end flex",children:n(l)})]},N()))})},this.renderList=()=>{const{dataList:a,openedParent:n,selectedIndex:s}=this.state,{parentItemElem:l,selectParent:o}=this.props;return e.jsx("div",{children:e.jsx(V,{onDragEnd:this.onDragEnd,children:e.jsx(P,{droppableId:"droppable",children:(d,v)=>e.jsxs("div",{...d.droppableProps,ref:d.innerRef,style:E(v.isDraggingOver),children:[a.map((t,c)=>e.jsx(I,{draggableId:t.parentId,index:c,children:(u,k)=>e.jsxs("div",{onClick:()=>{this.setState({selectedIndex:c}),o(t)},tabIndex:c,role:"button",onKeyDown:()=>{},ref:u.innerRef,...u.draggableProps,...u.dragHandleProps,style:D(k.isDragging,u.draggableProps.style),children:[e.jsxs("div",{style:{borderLeft:s===c?"4px solid #0054ce":"none",color:s===c?"#0054ce":"black"},className:"d-l-sm-item bdr-btm-grey flex align-center",children:[e.jsx("img",{className:"d-l-sm-icon",src:w,alt:""}),e.jsx("div",{className:"margin-left-xs",children:t.parentName}),e.jsxs("div",{className:"flex-grow-1 flex justify-end",children:[e.jsx("div",{className:"margin-right-s",children:l(t)}),t.childrens&&t.childrens.length?e.jsx(g,{onClick:()=>{n.indexOf(t.parentId)>-1?this.setState({openedParent:n.filter(b=>b!==t.parentId)}):this.setState({openedParent:[...n,t.parentId]})},className:"pointer-cr",name:`chevron ${n.indexOf(t.parentId)>-1?"up":"down"}`}):""]})]}),n.indexOf(t.parentId)>-1&&this.renderChildrens(t)]})},t.parentId)),d.placeholder]})})})})},this.state={showDataSchemaError:!1,dataList:[],openedParent:[],selectedIndex:null}}componentDidMount(){const{dataList:i,dataSchema:a}=this.props;if(h.schemaValidator(a)){const n=h.mapDataWithSchema(i,a);this.setState({dataList:n||[],showDataSchemaError:!1})}else this.setState({showDataSchemaError:!0})}render(){const{showDataSchemaError:i}=this.state;return e.jsx("div",{className:"d-l-sm-container bdr no-scrollbar",children:i?e.jsx("div",{children:"Wrong Schema"}):e.jsx("div",{children:this.renderList()})})}}p.defaultProps={};const S=p;p.defaultProps={dataList:[{key:"nochild",value:"No Child",selectedValues:[]},{key:"burger",value:"Burger",childrens:[{key:"vegburger",value:"Veg Burger"},{key:"nonvegburger",value:"Non-Veg Burger"}],selectedValues:[]},{key:"pizza",value:"Pizza",childrens:[{key:"vegpizza",value:"Veg Pizza"},{key:"nonvegpizza",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza2",value:"Pizza",childrens:[{key:"vegpizza2",value:"Veg Pizza"},{key:"nonvegpizza2",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza3",value:"Pizza",childrens:[{key:"vegpizza3",value:"Veg Pizza"},{key:"nonvegpizza3",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza4",value:"Pizza",childrens:[{key:"vegpizza123",value:"Veg Pizza"},{key:"nonvegpizza34",value:"Non-Veg Pizza"}],selectedValues:[]},{key:"pizza5",value:"Pizza",childrens:[{key:"vegpizza13",value:"Veg Pizza"},{key:"nonvegpizza34",value:"Non-Veg Pizza"}],selectedValues:[]}],dataSchema:{parentId:"key",parentName:"value",childrenElement:"childrens",childName:"value",childId:"key"},label:"All Cities",parentItemElem:()=>e.jsx(g,{className:"pointer-cr",name:"pencil"}),childrenItemElem:()=>e.jsx(g,{className:"pointer-cr",name:"pencil"}),onDragEnd:()=>{},selectParent:r=>console.log(r),selectChild:r=>console.log(r)};p.__docgenInfo={description:"",methods:[{name:"onDragEnd",docblock:`Function to notify when an item position is changed to parent by onDragEnd function
which is passed by the parent to this component
@param {Object} result contains the info of old index and new index of the item in the list`,modifiers:[],params:[{name:"result",description:"contains the info of old index and new index of the item in the list",type:{name:"any"},optional:!1}],returns:null,description:`Function to notify when an item position is changed to parent by onDragEnd function
which is passed by the parent to this component`},{name:"renderChildrens",docblock:`Function to render childrens of a draggable Item
@param {Object} parent contains parent info with the childrens array`,modifiers:[],params:[{name:"parent",description:"contains parent info with the childrens array",type:{name:"any"},optional:!1}],returns:null,description:"Function to render childrens of a draggable Item"},{name:"renderList",docblock:"Function to render the draggable List using react-beautiful-dnd",modifiers:[],params:[],returns:null,description:"Function to render the draggable List using react-beautiful-dnd"}],displayName:"DraggableSmall",props:{dataList:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
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
}`,computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'All Cities'",computed:!1}},parentItemElem:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:'() => <Icon className="pointer-cr" name="pencil" />',computed:!1}},childrenItemElem:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:'() => <Icon className="pointer-cr" name="pencil" />',computed:!1}},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},identifier:{required:!0,tsType:{name:"string"},description:""},selectParent:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"(data: any) => console.log(data)",computed:!1}},selectChild:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"(data: any) => console.log(data)",computed:!1}}}};const U={component:S,title:"DraggableSmall",tags:["autodocs"]},m={args:{identifier:"category"}};var y,z,f;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    identifier: "category"
  }
}`,...(f=(z=m.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};const X=["Default"];export{m as Default,X as __namedExportsOrder,U as default};
