import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as d}from"./index-ad58220e.js";import{d as u}from"./styled-components.browser.esm-675ea4f2.js";import{S as K}from"./searchComponent-fe301ace.js";import{L as U}from"./ltTable-df0258c1.js";import{C as X}from"./crossIcon-11d15636.js";import"./_commonjsHelpers-de833af9.js";import"./Input-3f8aa787.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-192f9362.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./htmlPropsUtils-2b22d933.js";import"./Button-21321eef.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./index-eb89699e.js";const q=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-grip-vertical",children:[n.jsx("circle",{cx:"9",cy:"12",r:"1"}),n.jsx("circle",{cx:"9",cy:"5",r:"1"}),n.jsx("circle",{cx:"9",cy:"19",r:"1"}),n.jsx("circle",{cx:"15",cy:"12",r:"1"}),n.jsx("circle",{cx:"15",cy:"5",r:"1"}),n.jsx("circle",{cx:"15",cy:"19",r:"1"})]});q.__docgenInfo={description:"",methods:[],displayName:"GripVerticalIcon"};const z=({height:e=48,width:i=48,color:l="currentColor"})=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:e,viewBox:"0 0 24 24",fill:"none",stroke:l,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-table",children:[n.jsx("path",{d:"M12 3v18"}),n.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n.jsx("path",{d:"M3 9h18"}),n.jsx("path",{d:"M3 15h18"})]});z.__docgenInfo={description:"",methods:[],displayName:"TableIcon",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},style:{required:!1,tsType:{name:"object"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y=u.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`,Z=u.div`
  width: 25%;
  background: ${e=>e.backgroundColor||"white"};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: calc(100vh - 64px);
`,_=u.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.textColor||"rgb(2, 8, 23)"};
`,ee=u.div`
  max-height: 24rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,te=u.div`
  background: ${e=>e.backgroundColor||"white"};
  border: 1px solid #e5e7eb;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: ${e=>e.textColor||"inherit"};
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #f9fafb;
    color: #000000;
  }
`,ne=u.div`
  max-height: 24rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,oe=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${e=>e.backgroundColor||"white"};
  border: 1px solid #e5e7eb;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  gap: 4px;
  cursor: grab;
  color: ${e=>e.textColor||"inherit"};
`,re=u.div`
  width: ${e=>e.width||"75%"};
`,ae=u.div`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.textColor||"rgb(2, 8, 23)"};
  margin: 16px 0 10px 0;
`,se=u.div`
  font-size: 14px;
  color: rgb(107, 114, 128);
  text-align: center;
`,ie=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 16px;
  height: 256px;
  background: ${e=>e.backgroundColor||"white"};
  border-radius: 16px;
`,E=({builderMode:e=!1,tableData:i,columnsInfo:l,selectedColumnsInfo:g,tableOptions:C={},tableActions:P,backgroundColor:f,textColor:b,onColumnChange:p,onColumnReorder:j})=>{const[O,I]=d.useState(""),[r,x]=d.useState(g||[]),[c,m]=d.useState(l||[]),[v,y]=d.useState([[]]),[h,T]=d.useState(null),H=t=>{const o=r.filter(s=>s.type==="dimension"),a=r.filter(s=>s.type==="metric");if(t.type==="dimension"){if(p)return p([...o,t,...a]);x([...o,t,...a])}else{if(p)return p([...o,...a,t]);x([...o,...a,t])}m(c.filter(s=>s.id!==t.id))},G=t=>{const o=r.find(s=>s.id===t),a=r.filter(s=>s.id!==t);if((h==null?void 0:h.columnIndex)===r.indexOf(o)&&T(null),p)return p(a);x(a),o&&m([...c,o])},F=(t,o)=>{t.dataTransfer.setData("text/plain",o.toString())},Q=(t,o)=>{t.preventDefault();const a=parseInt(t.dataTransfer.getData("text/plain")),s=Array.from(r),[A]=s.splice(a,1),M=s.filter(D=>D.type==="dimension");s.filter(D=>D.type==="metric");let k=o;if(A.type==="dimension"?k=Math.min(o,M.length):k=Math.max(o,M.length),s.splice(k,0,A),j)return j(s);x(s)};d.useEffect(()=>{l&&(m(l.filter(t=>!(g!=null&&g.find(o=>o.id===t.id)))),x(g||[]))},[g]),d.useEffect(()=>{if(!i)return;const t=(i==null?void 0:i.map(o=>r.map(a=>o[a.id])))||[];if(y(t),h){const o=r.findIndex(a=>a.id===h.columnsId);T(o===-1?null:{columnIndex:o,isAscending:h.isAscending,columnsId:r[o].id})}},[r,i]);const W=t=>{I(t.target.value)},J=(t,o)=>{T({columnIndex:t,isAscending:o,columnsId:r[t].id}),C.onSort&&C.onSort(r[t],o)};return n.jsxs(Y,{children:[e&&n.jsxs(Z,{backgroundColor:f,children:[n.jsx(K,{placeholder:"Search columns",onChange:W,fluid:!0}),n.jsx(_,{textColor:b,children:"Available Columns"}),n.jsx(ee,{children:c.filter(t=>t.name.toLowerCase().includes(O.toLowerCase())).map(t=>n.jsx(te,{onClick:()=>H(t),backgroundColor:f,textColor:b,children:n.jsx("span",{children:t.name})},t.id))}),n.jsx(_,{textColor:b,children:"Selected Columns (drag to reorder)"}),n.jsx(ne,{children:r.map((t,o)=>n.jsxs(oe,{draggable:!0,onDragStart:a=>F(a,o),onDragOver:a=>a.preventDefault(),onDrop:a=>Q(a,o),backgroundColor:f,textColor:b,children:[n.jsx(q,{}),n.jsx("div",{style:{marginRight:"auto"},children:t.name}),n.jsx(X,{color:"rgb(156, 163, 175)",height:16,width:16,style:{cursor:"pointer"},onClick:()=>G(t.id)})]},t.id))})]}),n.jsxs(re,{width:e?"75%":"100%",children:[P,e&&r.length===0?n.jsxs(ie,{backgroundColor:f,children:[n.jsx(z,{height:96,width:96,color:"rgb(156, 163, 175)"}),n.jsx(ae,{textColor:b,children:"Customized Data Table"}),n.jsx(se,{children:"Select columns from the available options on the left to build your custom data table."})]}):n.jsx(U,{...C,cellData:v,headers:r.map(t=>t.name),sortableColumns:r.map(t=>t.isSortable||!1),onSort:J,sortConfig:h,backgroundColor:f,textColor:b})]})]})},V=E;E.__docgenInfo={description:"",methods:[],displayName:"TableBuilder",props:{builderMode:{defaultValue:{value:"false",computed:!1},required:!1},tableOptions:{defaultValue:{value:"{}",computed:!1},required:!1}}};const R=[{id:"outlet",name:"Outlet",type:"dimension",isSortable:!0},{id:"channel",name:"Channel",type:"dimension",isSortable:!0},{id:"service",name:"Service",type:"dimension",isSortable:!0},{id:"net_subtotal",name:"Net Subtotal",type:"metric",isSortable:!0},{id:"net_revenue",name:"Net Revenue",type:"metric",isSortable:!0},{id:"net_discount",name:"Net Discount",type:"metric",isSortable:!0}],le=e=>{const i=[];for(let l=1;l<=e;l++)i.push({outlet:`Outlet ${l}`,channel:`Channel ${l}`,service:`Service ${l}`,net_subtotal:Math.floor(Math.random()*1e3)+1,net_revenue:Math.floor(Math.random()*1e3)+1,net_discount:Math.floor(Math.random()*100)+1}),l===1&&i.push({outlet:"Outlet 1",channel:"Channel 1",service:"Service 3",net_subtotal:Math.floor(Math.random()*1e3)+1,net_revenue:Math.floor(Math.random()*1e3)+1,net_discount:Math.floor(Math.random()*100)+1});return i},S=le(30),L=[{id:"outlet",name:"Outlet",type:"dimension",isSortable:!0}],ce={builderMode:!0,columnsInfo:R,selectedColumnsInfo:L,tableData:S,backgroundColor:"#ffffff",textColor:"#333333",tableOptions:{size:"small",pagination:!0,rowsPerPage:10,onSort:(e,i)=>{console.log(e,i)},totalPage:Math.ceil(S.length/10),currentPage:1}},Re={component:V,title:"TableBuilder",parameters:{docs:{description:{component:"\nThe `TableBuilder` component is a table-building utility that allows users to customize the columns and data displayed. It supports features like pagination, column reordering, and sorting.\n\n### Props:\n\n- `builderMode?: boolean`: Determines whether the table is in builder mode. In this mode, users can customize columns and other table settings.\n\n- `backgroundColor?: string`: Sets the background color of the table container. Accepts any valid CSS color value.\n\n- `textColor?: string`: Sets the text color of the table content. Accepts any valid CSS color value.\n\n- `columnsInfo?: ColumnsInfo`: An array of objects defining all available columns.\n  - **Properties**:\n    - `id: string`: A unique identifier for the column.\n    - `name: string`: The display name of the column.\n    - `type: string`: The type of the column (e.g., dimension or metric).\n    - `isSortable?: boolean`: Specifies if the column is sortable.\n\n- `selectedColumnsInfo?: ColumnsInfo`: An array of objects defining the columns selected for display. These objects have the same structure as `columnsInfo`.\n\n- `tableData?: any[]`: An array of objects defining the data to be displayed in the table.\n  - Each object represents a row, where the keys correspond to column IDs, and the values are the data for each column.\n\n- `tableOptions?: TableOption`: An object defining table-specific options.\n  - **Properties**:\n    - `searchQuery?: string`: A search query to filter table data.\n    - `sortableColumns?: boolean[]`: An optional array specifying which columns are sortable.\n    - `pagination?: boolean`: Enables or disables pagination.\n    - `rowsPerPage?: number`: The number of rows to display per page.\n    - `totalPage?: number`: The total number of pages available.\n    - `currentPage?: number`: The current page number.\n    - `onPrevPage?: () => void`: A function triggered when navigating to the previous page.\n    - `onNextPage?: () => void`: A function triggered when navigating to the next page.\n    - `onSort?: (column: Column, isAscending: boolean) => void`: A callback for handling sorting.\n      - **Parameters**:\n        - `column: Column`: The column to sort by.\n        - `isAscending: boolean`: Whether the sorting is in ascending order.\n\n- `tableActions?: React.ReactNode`: Custom actions or buttons displayed with the table.\n\n- `onColumnChange?: (selectedColumns: Column[]) => void`: A callback triggered when the selected columns change.\n\n- `onColumnReorder?: (selectedColumns: Column[]) => void`: A callback triggered when columns are reordered.\n\n- `currentPage?: number`: The current page number of the table (used when pagination is enabled).\n\n- `totalPage?: number`: The total number of pages (used when pagination is enabled).\n    "}}}},de=e=>{var r,x;const[i,l]=d.useState(R),[g,C]=d.useState(L),[P,f]=d.useState(((r=e==null?void 0:e.tableOptions)==null?void 0:r.currentPage)||1),[b,p]=d.useState(S.slice(0,(x=e==null?void 0:e.tableOptions)==null?void 0:x.rowsPerPage)),j=c=>{C(c)},O=()=>{var c,m;if((c=e==null?void 0:e.tableOptions)!=null&&c.totalPage&&((m=e==null?void 0:e.tableOptions)!=null&&m.rowsPerPage)&&P<e.tableOptions.totalPage){const v=P+1;f(v);const y=(v-1)*e.tableOptions.rowsPerPage,h=y+e.tableOptions.rowsPerPage;p(S.slice(y,h))}},I=()=>{var c;if((c=e==null?void 0:e.tableOptions)!=null&&c.rowsPerPage&&P>1){const m=P-1;f(m);const v=(m-1)*e.tableOptions.rowsPerPage,y=v+e.tableOptions.rowsPerPage;p(S.slice(v,y))}};return n.jsx("div",{style:{padding:"20px",backgroundColor:e.backgroundColor||"#f5f5f5",color:e.textColor||"#333333"},children:n.jsx(V,{...e,columnsInfo:i,selectedColumnsInfo:g,onColumnChange:j,tableData:b,tableOptions:{...e.tableOptions,currentPage:P,onPrevPage:I,onNextPage:O}})})},w=de.bind({});w.args={...ce};var N,$,B;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [columnsInfos, setColumnsInfos] = useState<Column[]>(columnsInfo);
  const [selectedColumnsInfos, setSelectedColumnsInfos] = useState<Column[]>(selectedColumns);
  const [currentPage, setCurrentPage] = useState<number>(args?.tableOptions?.currentPage || 1);
  const [data, setData] = useState<any[]>(tableData.slice(0, args?.tableOptions?.rowsPerPage));
  const handleColumn = (columns: Column[]) => {
    setSelectedColumnsInfos(columns);
  };
  const handleNextPage = () => {
    if (args?.tableOptions?.totalPage && args?.tableOptions?.rowsPerPage) {
      if (currentPage < args.tableOptions.totalPage) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        const start = (nextPage - 1) * args.tableOptions.rowsPerPage;
        const end = start + args.tableOptions.rowsPerPage;
        setData(tableData.slice(start, end));
      }
    }
  };
  const handlePrevPage = () => {
    if (args?.tableOptions?.rowsPerPage) {
      if (currentPage > 1) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        const start = (prevPage - 1) * args.tableOptions.rowsPerPage;
        const end = start + args.tableOptions.rowsPerPage;
        setData(tableData.slice(start, end));
      }
    }
  };
  return <div style={{
    padding: '20px',
    backgroundColor: args.backgroundColor || '#f5f5f5',
    color: args.textColor || '#333333'
  }}>
      <TableBuilder {...args} columnsInfo={columnsInfos} selectedColumnsInfo={selectedColumnsInfos} onColumnChange={handleColumn} tableData={data} tableOptions={{
      ...args.tableOptions,
      currentPage: currentPage,
      onPrevPage: handlePrevPage,
      onNextPage: handleNextPage
    }} />
    </div>;
}`,...(B=($=w.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const Le=["Default"];export{w as Default,Le as __namedExportsOrder,Re as default};
