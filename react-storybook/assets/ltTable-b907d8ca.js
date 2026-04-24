import{j as a}from"./jsx-runtime-8406ef1e.js";import{R as v}from"./index-ad58220e.js";import{_ as $}from"./extends-4c19d496.js";import{m as me}from"./map-61d3de0c.js";import{f as U,o as be,p as fe,n as he,u as i,g as we,h as le}from"./clsx.m-64db5d3b.js";import{i as ne}from"./childrenUtils-decbf9e9.js";import{g as F,a as G}from"./getElementType-727593ce.js";import{a as ge}from"./factories-499f84ec.js";import{I as xe}from"./Icon-7990d6af.js";import{L as E}from"./index-033d1919.js";import{d as C,l as Q}from"./styled-components.browser.esm-675ea4f2.js";function B(e){var m=e.children,f=e.className,h=U(f),b=F(B,e),g=G(B,e);return v.createElement(g,$({},b,{className:h}),m)}B.handledProps=["as","children","className"];B.defaultProps={as:"tbody"};B.propTypes={};function A(e){var m=e.active,f=e.children,h=e.className,b=e.collapsing,g=e.content,w=e.disabled,R=e.error,D=e.icon,j=e.negative,k=e.positive,S=e.selectable,_=e.singleLine,d=e.textAlign,x=e.verticalAlign,r=e.warning,t=e.width,L=U(i(m,"active"),i(b,"collapsing"),i(w,"disabled"),i(R,"error"),i(j,"negative"),i(k,"positive"),i(S,"selectable"),i(_,"single line"),i(r,"warning"),he(d),fe(x),be(t,"wide"),h),P=F(A,e),I=G(A,e);return ne(f)?v.createElement(I,$({},P,{className:L}),xe.create(D),g):v.createElement(I,$({},P,{className:L}),f)}A.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"];A.defaultProps={as:"td"};A.propTypes={};A.create=ge(A,function(e){return{content:e}});function z(e){var m=e.children,f=e.className,h=e.content,b=e.fullWidth,g=U(i(b,"full-width"),f),w=F(z,e),R=G(z,e);return v.createElement(R,$({},w,{className:g}),ne(m)?h:m)}z.handledProps=["as","children","className","content","fullWidth"];z.defaultProps={as:"thead"};z.propTypes={};function K(e){var m=e.as,f=F(K,e);return v.createElement(z,$({},f,{as:m}))}K.handledProps=["as"];K.propTypes={};K.defaultProps={as:"tfoot"};function J(e){var m=e.as,f=e.className,h=e.sorted,b=U(we(h,"sorted"),f),g=F(J,e);return v.createElement(A,$({},g,{as:m,className:b}))}J.handledProps=["as","className","sorted"];J.propTypes={};J.defaultProps={as:"th"};function y(e){var m=e.active,f=e.cellAs,h=e.cells,b=e.children,g=e.className,w=e.disabled,R=e.error,D=e.negative,j=e.positive,k=e.textAlign,S=e.verticalAlign,_=e.warning,d=U(i(m,"active"),i(w,"disabled"),i(R,"error"),i(D,"negative"),i(j,"positive"),i(_,"warning"),he(k),fe(S),g),x=F(y,e),r=G(y,e);return ne(b)?v.createElement(r,$({},x,{className:d}),me(h,function(t){return A.create(t,{defaultProps:{as:f}})})):v.createElement(r,$({},x,{className:d}),b)}y.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"];y.defaultProps={as:"tr",cellAs:"td"};y.propTypes={};y.create=ge(y,function(e){return{cells:e}});function s(e){var m=e.attached,f=e.basic,h=e.celled,b=e.children,g=e.className,w=e.collapsing,R=e.color,D=e.columns,j=e.compact,k=e.definition,S=e.fixed,_=e.footerRow,d=e.headerRow,x=e.headerRows,r=e.inverted,t=e.padded,L=e.renderBodyRow,P=e.selectable,I=e.singleLine,H=e.size,M=e.sortable,ie=e.stackable,T=e.striped,W=e.structured,ce=e.tableData,se=e.textAlign,re=e.unstackable,de=e.verticalAlign,X=U("ui",R,H,i(h,"celled"),i(w,"collapsing"),i(k,"definition"),i(S,"fixed"),i(r,"inverted"),i(P,"selectable"),i(I,"single line"),i(M,"sortable"),i(ie,"stackable"),i(T,"striped"),i(W,"structured"),i(re,"unstackable"),le(m,"attached"),le(f,"basic"),le(j,"compact"),le(t,"padded"),he(se),fe(de),be(D,"column"),"table",g),Y=F(s,e),Z=G(s,e);if(!ne(b))return v.createElement(Z,$({},Y,{className:X}),b);var oe=d||x,ee={defaultProps:{cellAs:"th"}},n=oe&&v.createElement(z,null,y.create(d,ee),me(x,function(c){return y.create(c,ee)}));return v.createElement(Z,$({},Y,{className:X}),n,v.createElement(B,null,L&&me(ce,function(c,p){return y.create(L(c,p))})),_&&v.createElement(K,null,y.create(_)))}s.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"];s.defaultProps={as:"table"};s.propTypes={};s.Body=B;s.Cell=A;s.Footer=K;s.Header=z;s.HeaderCell=J;s.Row=y;const u={"lttable-container":"_lttable-container_efj02_1","table-wrapper":"_table-wrapper_efj02_11","lt-custom-header-row":"_lt-custom-header-row_efj02_18","lt-sorting-icon":"_lt-sorting-icon_efj02_26","lt-rounded-table":"_lt-rounded-table_efj02_29","lt-table-header-row":"_lt-table-header-row_efj02_53","lt-pagination-footer":"_lt-pagination-footer_efj02_57","lt-download-btn":"_lt-download-btn_efj02_66","lt-pagination-btn-group":"_lt-pagination-btn-group_efj02_79","lt-custom-header-item":"_lt-custom-header-item_efj02_93","LTtable-body":"_LTtable-body_efj02_99","pagination-container":"_pagination-container_efj02_102"},pe=e=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-download",...e,children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"7 10 12 15 17 10"}),a.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]});pe.__docgenInfo={description:"",methods:[],displayName:"DownloadIcon"};C.div`
  &&& {
    background-color: ${e=>e.backgroundColor||""};
  }
`;const Ne=C(s.HeaderCell)`
  &&& {
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    white-space: nowrap;
    margin: 0;
    background: ${e=>e.backgroundColor||""};
    color: ${e=>e.textColor||""};
    &:hover {
      background-color: ${e=>e.backgroundColor?e.backgroundColor:"#f5f5f5"};
    }
  }

  ${e=>e.$collapsed&&Q`
    &&& {
      background-color: ${e.backgroundColor||"#fafafa"};
      &:hover {
        background-color: ${e.backgroundColor?e.backgroundColor:"#f0f0f0"};
      }
    }
  `}

  ${e=>!e.$collapsed&&Q`
    &&& {
      padding-left: 0 ;
      padding-right: 0 ;
      padding-bottom: 0 ;
      border: none ;
      box-shadow: none ;
    }
  `}
`,ye=C.div`
  &&& {
    justify-content: center;
    width: 100%;
    white-space: nowrap;
    min-width: 50px;
    display: flex;
    align-items: center;
    color: ${e=>e.textColor||""};
  }

  ${e=>e.$expanded&&Q`
    &&& {
      text-align: center;
      justify-content: center;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 0;
      padding-right: 0;
      background-color: ${e.backgroundColor||"#eceef0"};
      font-weight: 500;
      border-bottom: 1px solid #eceef0;
      border-right: 1px solid #eceef0;
      color: ${e.textColor||""};
    }
  `}
`,je=C(s.Row)`
  &&& {
    border-right: 1px solid #eceef0;
    &:last-child {
      border-bottom: 1px solid #eceef0;
    }
  }
`,ke=C(s.HeaderCell)`
  &&& {
    white-space: nowrap;
    width: fit-content;
    min-width: 80px;
    max-width: 100px;
    background: ${e=>e.backgroundColor||""};
    color: ${e=>e.textColor||""};
  }

  ${e=>e.$total&&Q`
    &&& {
      background-color: ${e.backgroundColor||"#eceef0"};
      position: relative;
      padding-left: 10px;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 2px;
        background-color: #d1d5db;
      }
    }
  `}
  ${e=>e.$metricStart&&Q`
    &&& {
      background-color: ${e.backgroundColor||"#eceef0"};
      font-weight: 500;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 2px;
        background-color: #d1d5db;
      }
    }
  `}
`,_e=C(s.Cell)`
  &&& {
    text-align: ${e=>e.align||"left"} ;
    background: ${e=>e.backgroundColor||""};
    color: ${e=>e.textColor||""};
  }
`,$e=C(s)`
  &&& {
    background: ${e=>e.backgroundColor||""} !important;
    color: ${e=>e.textColor||""} !important;
    
  
  }
`,Ae=C.div`
  &&& {
    background: ${e=>e.backgroundColor||""};
    color: ${e=>e.textColor||""};
    
    .lt-download-btn {
      color: ${e=>e.textColor||""};
    }
  }
`,te=C(s.Row)`
  &&& {
    td {
      color: ${e=>e.textColor||""} !important;
    }
   th {  
      color: ${e=>e.textColor||""} !important;
    }
  }
`,ve=({size:e,headers:m=[],cellData:f=[],customHeaders:h=[],searchQuery:b="",onSort:g,sortableColumns:w=[],pagination:R=!1,rowsPerPage:D=10,currentPage:j=1,totalPage:k,onPrevPage:S,onNextPage:_,sortConfig:d,onDownload:x,backgroundColor:r,textColor:t,useCollapsibleColumns:L=!1,collapsibleColumns:P=[],onToggleCollapse:I,renderCustomHeader:H,renderCustomCell:M=T=>typeof T=="string"&&!isNaN(parseFloat(T.replace(/[₹,%]/g,"")))?a.jsx("div",{children:T}):T,...ie})=>{const T=f.filter(n=>n.some(c=>String(c).toLowerCase().includes(b.toLowerCase()))),W=n=>{const c=(d==null?void 0:d.columnIndex)===n?!d.isAscending:!0;g==null||g(n,c)},ce=n=>{n.stopPropagation()},se=(n,c)=>{c.stopPropagation(),I&&I(n)},re=n=>{n>=0&&w[n]&&W(n)},de=()=>{S==null||S()},X=()=>{_==null||_()},Y=()=>{x==null||x()},Z=()=>{const n=m||[],c=P||[];if(!L||n.length===0)return a.jsx(s.Header,{children:a.jsx(te,{backgroundColor:r,textColor:t,children:n.map((l,o)=>a.jsxs(s.HeaderCell,{onClick:()=>w[o]?W(o):void 0,className:u["lt-table-header-row"],style:{backgroundColor:r||"",color:t||""},children:[H?H(l):l,w[o]&&((d==null?void 0:d.columnIndex)===o?a.jsx(E,{useReactIcon:!0,reactIconName:d.isAscending?"MdArrowUpward":"MdArrowDownward",reactIconSet:"md",fitted:!0,size:"small",className:u["lt-sorting-icon"],style:{color:t||"black"}}):a.jsxs(v.Fragment,{children:[a.jsx(E,{useReactIcon:!0,reactIconName:"MdArrowUpward",reactIconSet:"md",fitted:!0,size:"small",style:{fontSize:"10px",paddingLeft:"2px",color:t||"black"},className:u["lt-sorting-icon"]}),a.jsx(E,{useReactIcon:!0,reactIconName:"MdArrowDownward",reactIconSet:"md",fitted:!0,size:"small",style:{fontSize:"10px",paddingRight:"7.4px",color:t||"black"},className:u["lt-sorting-icon"]})]}))]},o))})});const p=c.map(l=>l.header),N=n.filter(l=>{const o=l.includes("(")?l.split(" (")[0]:l;return!p.includes(o)}),O=c.some(l=>!l.isCollapsed),ae=[];return N.forEach(l=>{const o={header:l,isCollapsible:!1,colSpan:1,rowSpan:O?2:1,displayName:l};ae.push(o)}),c.forEach(l=>{const o={header:l.header,isCollapsible:!0,colSpan:l.isCollapsed?1:l.subColumns.length,rowSpan:l.isCollapsed&&O?2:1,displayName:l.header,subHeaders:l.isCollapsed?[]:l.subColumns};ae.push(o)}),a.jsxs(s.Header,{children:[a.jsx(te,{backgroundColor:r,textColor:t,children:ae.map((l,o)=>{var V;if(l.isCollapsible){const q=(V=c.find(ue=>ue.header===l.header))==null?void 0:V.isCollapsed;return a.jsx(Ne,{colSpan:l.colSpan,rowSpan:l.rowSpan,$collapsed:q,backgroundColor:r,textColor:t,onClick:ce,children:a.jsxs(ye,{$expanded:!q,textColor:t,backgroundColor:r,children:[a.jsx("span",{children:H?H(l.displayName):l.displayName}),a.jsx(E,{useReactIcon:!0,reactIconName:q?"MdChevronRight":"MdExpandMore",reactIconSet:"md",fitted:!0,onClick:ue=>se(l.header,ue),style:{fontSize:"14px",paddingLeft:"5px",cursor:"pointer",color:t||"black"}})]})},`header-${o}`)}else{const q=n.indexOf(l.header);return a.jsx(s.HeaderCell,{colSpan:l.colSpan,rowSpan:l.rowSpan,className:l.className||u["lt-table-header-row"],onClick:()=>re(q),style:{backgroundColor:r||"",color:t||""},children:a.jsxs("div",{children:[H?H(l.header):l.header,w[q]&&((d==null?void 0:d.columnIndex)===q?a.jsx(E,{useReactIcon:!0,reactIconName:d.isAscending?"MdArrowUpward":"MdArrowDownward",reactIconSet:"md",fitted:!0,className:u["lt-sorting-icon"],style:{color:t||"black"}}):a.jsxs(v.Fragment,{children:[a.jsx(E,{useReactIcon:!0,reactIconName:"MdArrowUpward",reactIconSet:"md",fitted:!0,style:{fontSize:"10px",paddingLeft:"2px",color:t||"black"},className:u["lt-sorting-icon"]}),a.jsx(E,{useReactIcon:!0,reactIconName:"MdArrowDownward",reactIconSet:"md",fitted:!0,style:{fontSize:"10px",paddingRight:"7.4px",color:t||"black"},className:u["lt-sorting-icon"]})]}))]})},`header-${o}`)}})}),O&&a.jsx(je,{children:ae.filter(l=>{var o;return l.isCollapsible&&!((o=c.find(V=>V.header===l.header))!=null&&o.isCollapsed)}).flatMap(l=>(l.subHeaders??[]).map((o,V)=>a.jsx(ke,{"data-parent-header":l.header,"data-metric-start":V===0?"true":"false",$metricStart:V===0,backgroundColor:r,textColor:t,children:o},`sub-${l.header}-${V}`)))})]})},oe=(m||[]).map(n=>{const c=n.includes("(")?n.split(" (")[0]:n;return(P||[]).find(N=>N.header===c)||null}),ee=()=>L?a.jsx(s.Body,{className:u["LTtable-body"],children:T.map((n,c)=>a.jsx(te,{backgroundColor:r,textColor:t,children:n.map((p,N)=>{const O=oe[N];return O?a.jsx(_e,{align:O.isCollapsed?"center":"left",backgroundColor:r,textColor:t,children:M&&M(p,c,N)||p},N):a.jsx(s.Cell,{style:{backgroundColor:r||"",color:t||""},children:M&&M(p,c,N)||p},N)})},c))}):a.jsx(s.Body,{className:u["LTtable-body"],children:T.map((n,c)=>a.jsx(te,{backgroundColor:r,textColor:t,children:n.map((p,N)=>a.jsx(s.Cell,{style:{backgroundColor:r||"",color:t||""},children:M&&M(p,c,N)||p},N))},c))});return a.jsxs("div",{className:u["lttable-container"],style:{backgroundColor:r||"#ffffff"},children:[a.jsxs("div",{className:u["table-wrapper"],children:[h&&h.length>0&&a.jsx("div",{className:u["lt-custom-header-row"],children:h.map((n,c)=>a.jsx("div",{className:u["lt-custom-header-item"],children:n},c))}),a.jsxs($e,{size:e,className:u["lt-rounded-table"],backgroundColor:r,textColor:t,...ie,children:[Z(),ee()]})]}),R&&k&&a.jsxs(Ae,{className:u["lt-pagination-footer"],backgroundColor:r,textColor:t,children:[a.jsxs("div",{children:["Page ",j," of ",k]}),x&&a.jsx("div",{className:u["lt-download-btn"],onClick:Y,children:a.jsx(pe,{})}),a.jsxs("div",{className:u["lt-pagination-btn-group"],children:[a.jsx("div",{children:a.jsx(E,{useReactIcon:!0,reactIconName:"MdChevronLeft",reactIconSet:"md",fitted:!0,onClick:de,disabled:j===1,style:{fontSize:"16px",color:t||"rgb(2, 8, 23)",opacity:j===1?.5:1}})}),a.jsx("div",{children:a.jsx(E,{useReactIcon:!0,reactIconName:"MdChevronRight",reactIconSet:"md",fitted:!0,onClick:X,disabled:j===k,style:{color:t||"rgb(2, 8, 23)",fontSize:"16px",opacity:j===k?.5:1}})})]})]})]})},Ie=ve;ve.__docgenInfo={description:"",methods:[],displayName:"LtTable",props:{headers:{defaultValue:{value:"[]",computed:!1},required:!1},cellData:{defaultValue:{value:"[]",computed:!1},required:!1},customHeaders:{defaultValue:{value:"[]",computed:!1},required:!1},searchQuery:{defaultValue:{value:"''",computed:!1},required:!1},sortableColumns:{defaultValue:{value:"[]",computed:!1},required:!1},pagination:{defaultValue:{value:"false",computed:!1},required:!1},rowsPerPage:{defaultValue:{value:"10",computed:!1},required:!1},currentPage:{defaultValue:{value:"1",computed:!1},required:!1},useCollapsibleColumns:{defaultValue:{value:"false",computed:!1},required:!1},collapsibleColumns:{defaultValue:{value:"[]",computed:!1},required:!1},renderCustomCell:{defaultValue:{value:`(cell) => {
  if (typeof cell === 'string') {
    const isNumericCell = !isNaN(parseFloat(cell.replace(/[₹,%]/g, '')));
    if (isNumericCell) {
      return (
        <div>
          {cell}
        </div>
      );
    }
  }
  return cell;
}`,computed:!1},required:!1}}};export{Ie as L};
