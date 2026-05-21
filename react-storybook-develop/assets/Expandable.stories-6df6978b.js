import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as u,R as C}from"./index-ad58220e.js";import{d as c,l as _,o as B}from"./styled-components.browser.esm-675ea4f2.js";import{t as V}from"./config-d270d9b6.js";import{P as z}from"./pumpkinIcon-7a5587d6.js";import{L as P}from"./Loader-70696280.js";import{L as $}from"./ltButton-9d7d3ed4.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./clsx.m-64db5d3b.js";import"./getElementType-727593ce.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./Button-4d423377.js";import"./inheritsLoose-5494d9cc.js";import"./invoke-834bb7a1.js";import"./factories-499f84ec.js";import"./Icon-7990d6af.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-fd491f3d.js";import"./includes-83c43633.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-61d3de0c.js";const W=c.div`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  .thead {
    box-shadow: 0px 1px 3px 0px #0000001A;
    border-bottom: 1px solid rgba(229, 231, 235, 1);
    background-color: #F3F4F6;
    border-radius: ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large} 0 0;

    .tr {
      display: flex;

      .th {
        text-align: left;
        padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
        font-weight: 600;
        font-size: 14px;
        color: ${({theme:e})=>e.colors.text};
      }
    }
  }

  .tbody {
    box-shadow: 0px 1px 3px 0px #0000001A;
    border-radius: 0px 0px ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large};
    background-color: ${({theme:e})=>e.colors.white};

    .tr {
      display: flex;
      transition: all 0.2s ease;
      outline: none;
      border-top: 1px solid ${({theme:e})=>e.colors.border};
      align-items: center;

      &:first-child {
        border-top: none;
      }

      &.expanded-row {
        margin-bottom: ${({theme:e})=>e.spacing.md};
        border-bottom: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: 0 0 ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large};
        &:last-child {
          border-bottom: 0px;
          border-radius: 0px;
        }
        
      }

      .td {
        padding: ${({theme:e})=>e.spacing.md};
        font-size: 14px;
        color: ${({theme:e})=>e.colors.text};

        &:first-child {
          padding-left: ${({theme:e})=>e.spacing.lg};
        }

        &:last-child {
          padding-right: ${({theme:e})=>e.spacing.lg};
        }
      }

      &.expanded {
        background-color: #F9FAFB;
        border-radius: ${({theme:e})=>e.borderRadius.large} ${({theme:e})=>e.borderRadius.large} 0 0;
        margin-top: ${({theme:e})=>e.spacing.md};

        &:first-child {
          margin-top: 0;
        }
      }

      &.expanded-row {
        .td {
          padding: 0;
          border: none;
        }
      }
    }
  };
`,O=c.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.large};
`,G=c.div`
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
`,H=c.div`
  ${({isLoading:e})=>e&&_`
    opacity: 0.5;
    pointer-events: none;
  `}
`,T=({tableData:e,columns:n,emptyMessage:E="",onRowToggle:g,isLoading:p=!1,showLoadMore:D=!1,loadMoreButton:I,onRowClick:h})=>{const[d,A]=u.useState(e),[b,L]=u.useState([]);u.useEffect(()=>{A(e)},[e]);const S=(r,a)=>()=>{var i,l;((l=(i=d[a])==null?void 0:i.items)==null?void 0:l.length)>0&&L(m=>{const x=m.includes(r)?m.filter(M=>M!==r):[...m,r];return g&&g(x),x}),h&&h(d[a],a)},F=r=>t.jsx("div",{children:r.map(a=>t.jsx("div",{children:t.jsxs("div",{className:"draggable-item-content",children:[a.content," "]})},a.id))});return t.jsxs(B,{theme:V,children:[t.jsx(H,{isLoading:p,children:t.jsxs(W,{children:[t.jsx("div",{className:"thead",children:t.jsx("div",{className:"tr",children:n.map((r,a)=>t.jsx("div",{className:"th",style:{width:r.width},children:r.header},a))})}),d.length===0?t.jsxs(O,{children:[t.jsx(z,{}),t.jsx("p",{children:E})]}):t.jsx("div",{className:"tbody",children:d.map((r,a)=>t.jsxs(C.Fragment,{children:[t.jsx("div",{"data-testid":`row-${a}`,className:`tr ${b.includes(r.id)?"expanded":""}`,onClick:S(r.id,a),children:n.map((i,l)=>t.jsx("div",{className:"td",style:{width:i.width},children:i.accessor(r)},l))}),b.includes(r.id)&&t.jsx("div",{className:"tr expanded-row",children:t.jsx("div",{className:"td",style:{width:"100%"},children:F(r.items)})})]},r.id))})]})}),p&&t.jsx(G,{children:t.jsx(P,{active:!0,inline:"centered"})}),!p&&D&&I]})},k=T;T.__docgenInfo={description:"",methods:[],displayName:"ExpandableTable",props:{tableData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  [key: string]: any; // Allow flexibility in row data
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"TableRow[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  header: string;
  accessor: (row: TableRow) => React.ReactNode; // Function to get the value for the cell
}`,signature:{properties:[{key:"header",value:{name:"string",required:!0}},{key:"accessor",value:{name:"signature",type:"function",raw:"(row: TableRow) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  [key: string]: any; // Allow flexibility in row data
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!0}}]}}],raw:"TableColumn[]"},description:""},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"''",computed:!1}},onRowToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedRows: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedRows"}],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLoadMore:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadMoreButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TableRow, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  [key: string]: any; // Allow flexibility in row data
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const ve={title:"ExpandableTable",component:k,argTypes:{showLoadMore:{control:"boolean"},isLoading:{control:"boolean"},tableData:{control:"object"},columns:{control:"object"},onRowClick:{action:"row clicked"}}},J=[{id:"1",description:"Description for item 1",status:"Active"},{id:"2",items:[{id:"2-1",content:"Item 2-1"}],description:"Description for item 2",status:"Inactive"},{id:"3",items:[{id:"3-1",content:"Item 3-1"},{id:"3-2",content:"Item 3-2"},{id:"3-3",content:"Item 3-3"}],description:"Description for item 3",status:"Active"},{id:"4",items:[{id:"4-1",content:"Item 4-1"}],description:"Description for item 4",status:"Inactive"},{id:"5",items:[{id:"5-1",content:"Item 5-1"},{id:"5-2",content:"Item 5-2"}],description:"Description for item 5",status:"Active"}],N=[{header:"ID",accessor:e=>e.id,width:"20%"},{header:"Description",accessor:e=>e.description,width:"40%"},{header:"Status",accessor:e=>e.status,width:"20%"},{header:"Column 2",accessor:e=>"Some content",width:"20%"}],q=e=>t.jsx(k,{...e}),s=q.bind({});s.args={tableData:J,columns:N,showLoadMore:!0,loadMoreButton:t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"16px"},children:t.jsx($,{transparent:!0,border:!0,label:"Load More"})}),onRowClick:(e,n)=>{console.log("Row clicked:66",e,n)},isLoading:!1};const o=q.bind({});o.args={tableData:[],columns:N,emptyMessage:t.jsxs("div",{children:["No data available ",t.jsx($,{transparent:!0,border:!0,label:"Reset filters"})]})};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var R,v,j;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:"args => <ExpandableTable {...args} />",...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const je=["Default","EmptyState"];export{s as Default,o as EmptyState,je as __namedExportsOrder,ve as default};
