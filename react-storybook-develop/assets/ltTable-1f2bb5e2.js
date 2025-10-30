import{j as a}from"./jsx-runtime-8406ef1e.js";import{R as p}from"./index-ad58220e.js";import{_ as $}from"./extends-4c19d496.js";import{m as he}from"./map-20538cdf.js";import{c as D,g as K,b as J,y as ge,z as fe,r as be,u as i,a as xe,l as le}from"./getElementType-ff0d42f5.js";import{i as ne}from"./childrenUtils-dd3b0ba5.js";import{a as ve}from"./factories-f5adea19.js";import{I as z}from"./Icon-33b7fdc8.js";import{L as me}from"./index-4ec9b07a.js";import{d as S,l as G}from"./styled-components.browser.esm-675ea4f2.js";function O(e){var m=e.children,h=e.className,f=D(h),b=K(O,e),g=J(O,e);return p.createElement(g,$({},b,{className:f}),m)}O.handledProps=["as","children","className"];O.defaultProps={as:"tbody"};O.propTypes={};function T(e){var m=e.active,h=e.children,f=e.className,b=e.collapsing,g=e.content,w=e.disabled,A=e.error,M=e.icon,N=e.negative,k=e.positive,R=e.selectable,_=e.singleLine,d=e.textAlign,x=e.verticalAlign,c=e.warning,t=e.width,L=D(i(m,"active"),i(b,"collapsing"),i(w,"disabled"),i(A,"error"),i(N,"negative"),i(k,"positive"),i(R,"selectable"),i(_,"single line"),i(c,"warning"),be(d),fe(x),ge(t,"wide"),f),q=K(T,e),B=J(T,e);return ne(h)?p.createElement(B,$({},q,{className:L}),z.create(M),g):p.createElement(B,$({},q,{className:L}),h)}T.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"];T.defaultProps={as:"td"};T.propTypes={};T.create=ve(T,function(e){return{content:e}});function P(e){var m=e.children,h=e.className,f=e.content,b=e.fullWidth,g=D(i(b,"full-width"),h),w=K(P,e),A=J(P,e);return p.createElement(A,$({},w,{className:g}),ne(m)?f:m)}P.handledProps=["as","children","className","content","fullWidth"];P.defaultProps={as:"thead"};P.propTypes={};function Q(e){var m=e.as,h=K(Q,e);return p.createElement(P,$({},h,{as:m}))}Q.handledProps=["as"];Q.propTypes={};Q.defaultProps={as:"tfoot"};function X(e){var m=e.as,h=e.className,f=e.sorted,b=D(xe(f,"sorted"),h),g=K(X,e);return p.createElement(T,$({},g,{as:m,className:b}))}X.handledProps=["as","className","sorted"];X.propTypes={};X.defaultProps={as:"th"};function j(e){var m=e.active,h=e.cellAs,f=e.cells,b=e.children,g=e.className,w=e.disabled,A=e.error,M=e.negative,N=e.positive,k=e.textAlign,R=e.verticalAlign,_=e.warning,d=D(i(m,"active"),i(w,"disabled"),i(A,"error"),i(M,"negative"),i(N,"positive"),i(_,"warning"),be(k),fe(R),g),x=K(j,e),c=J(j,e);return ne(b)?p.createElement(c,$({},x,{className:d}),he(f,function(t){return T.create(t,{defaultProps:{as:h}})})):p.createElement(c,$({},x,{className:d}),b)}j.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"];j.defaultProps={as:"tr",cellAs:"td"};j.propTypes={};j.create=ve(j,function(e){return{cells:e}});function r(e){var m=e.attached,h=e.basic,f=e.celled,b=e.children,g=e.className,w=e.collapsing,A=e.color,M=e.columns,N=e.compact,k=e.definition,R=e.fixed,_=e.footerRow,d=e.headerRow,x=e.headerRows,c=e.inverted,t=e.padded,L=e.renderBodyRow,q=e.selectable,B=e.singleLine,C=e.size,H=e.sortable,ie=e.stackable,E=e.striped,U=e.structured,se=e.tableData,re=e.textAlign,ce=e.unstackable,de=e.verticalAlign,Y=D("ui",A,C,i(f,"celled"),i(w,"collapsing"),i(k,"definition"),i(R,"fixed"),i(c,"inverted"),i(q,"selectable"),i(B,"single line"),i(H,"sortable"),i(ie,"stackable"),i(E,"striped"),i(U,"structured"),i(ce,"unstackable"),le(m,"attached"),le(h,"basic"),le(N,"compact"),le(t,"padded"),be(re),fe(de),ge(M,"column"),"table",g),Z=K(r,e),I=J(r,e);if(!ne(b))return p.createElement(I,$({},Z,{className:Y}),b);var oe=d||x,ee={defaultProps:{cellAs:"th"}},n=oe&&p.createElement(P,null,j.create(d,ee),he(x,function(s){return j.create(s,ee)}));return p.createElement(I,$({},Z,{className:Y}),n,p.createElement(O,null,L&&he(se,function(s,v){return j.create(L(s,v))})),_&&p.createElement(Q,null,j.create(_)))}r.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"];r.defaultProps={as:"table"};r.propTypes={};r.Body=O;r.Cell=T;r.Footer=Q;r.Header=P;r.HeaderCell=X;r.Row=j;const u={"lttable-container":"_lttable-container_efj02_1","table-wrapper":"_table-wrapper_efj02_11","lt-custom-header-row":"_lt-custom-header-row_efj02_18","lt-sorting-icon":"_lt-sorting-icon_efj02_26","lt-rounded-table":"_lt-rounded-table_efj02_29","lt-table-header-row":"_lt-table-header-row_efj02_53","lt-pagination-footer":"_lt-pagination-footer_efj02_57","lt-download-btn":"_lt-download-btn_efj02_66","lt-pagination-btn-group":"_lt-pagination-btn-group_efj02_79","lt-custom-header-item":"_lt-custom-header-item_efj02_93","LTtable-body":"_LTtable-body_efj02_99","pagination-container":"_pagination-container_efj02_102"},pe=e=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-download",...e,children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"7 10 12 15 17 10"}),a.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]});pe.__docgenInfo={description:"",methods:[],displayName:"DownloadIcon"};S.div`
  &&& {
    background-color: ${e=>e.backgroundColor||""};
  }
`;const ye=S(r.HeaderCell)`
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

  ${e=>e.$collapsed&&G`
    &&& {
      background-color: ${e.backgroundColor||"#fafafa"};
      &:hover {
        background-color: ${e.backgroundColor?e.backgroundColor:"#f0f0f0"};
      }
    }
  `}

  ${e=>!e.$collapsed&&G`
    &&& {
      padding-left: 0 ;
      padding-right: 0 ;
      padding-bottom: 0 ;
      border: none ;
      box-shadow: none ;
    }
  `}
`,je=S.div`
  &&& {
    justify-content: center;
    width: 100%;
    white-space: nowrap;
    min-width: 50px;
    display: flex;
    align-items: center;
    color: ${e=>e.textColor||""};
  }

  ${e=>e.$expanded&&G`
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
`,Ne=S(r.Row)`
  &&& {
    border-right: 1px solid #eceef0;
    &:last-child {
      border-bottom: 1px solid #eceef0;
    }
  }
`,ke=S(r.HeaderCell)`
  &&& {
    white-space: nowrap;
    width: fit-content;
    min-width: 80px;
    max-width: 100px;
    background: ${e=>e.backgroundColor||""};
    color: ${e=>e.textColor||""};
  }

  ${e=>e.$total&&G`
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
  ${e=>e.$metricStart&&G`
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
`,_e=S(r.Cell)`
  &&& {
    text-align: ${e=>e.align||"left"} ;
    background: ${e=>e.backgroundColor||""};
    color: ${e=>e.textColor||""};
  }
`,$e=S(r)`
  &&& {
    background: ${e=>e.backgroundColor||""} !important;
    color: ${e=>e.textColor||""} !important;
    
  
  }
`,Te=S.div`
  &&& {
    background: ${e=>e.backgroundColor||""};
    color: ${e=>e.textColor||""};
    
    .lt-download-btn {
      color: ${e=>e.textColor||""};
    }
  }
`,te=S(r.Row)`
  &&& {
    td {
      color: ${e=>e.textColor||""} !important;
    }
   th {  
      color: ${e=>e.textColor||""} !important;
    }
  }
`,we=({size:e,headers:m=[],cellData:h=[],customHeaders:f=[],searchQuery:b="",onSort:g,sortableColumns:w=[],pagination:A=!1,rowsPerPage:M=10,currentPage:N=1,totalPage:k,onPrevPage:R,onNextPage:_,sortConfig:d,onDownload:x,backgroundColor:c,textColor:t,useCollapsibleColumns:L=!1,collapsibleColumns:q=[],onToggleCollapse:B,renderCustomHeader:C,renderCustomCell:H=E=>typeof E=="string"&&!isNaN(parseFloat(E.replace(/[₹,%]/g,"")))?a.jsx("div",{children:E}):E,...ie})=>{const E=h.filter(n=>n.some(s=>String(s).toLowerCase().includes(b.toLowerCase()))),U=n=>{const s=(d==null?void 0:d.columnIndex)===n?!d.isAscending:!0;g==null||g(n,s)},se=n=>{n.stopPropagation()},re=(n,s)=>{s.stopPropagation(),B&&B(n)},ce=n=>{n>=0&&w[n]&&U(n)},de=()=>{R==null||R()},Y=()=>{_==null||_()},Z=()=>{x==null||x()},I=()=>{const n=m||[],s=q||[];if(!L||n.length===0)return a.jsx(r.Header,{children:a.jsx(te,{backgroundColor:c,textColor:t,children:n.map((l,o)=>a.jsxs(r.HeaderCell,{onClick:()=>w[o]?U(o):void 0,className:u["lt-table-header-row"],style:{backgroundColor:c||"",color:t||""},children:[C?C(l):l,w[o]&&((d==null?void 0:d.columnIndex)===o?a.jsx(z,{name:d.isAscending?"long arrow alternate up":"long arrow alternate down",className:u["lt-sorting-icon"],style:{color:t||"black"}}):a.jsxs(p.Fragment,{children:[a.jsx(z,{name:"long arrow alternate up",style:{width:"0.4em",paddingLeft:"2px",color:t||"black"},className:u["lt-sorting-icon"]}),a.jsx(z,{name:"long arrow alternate down",style:{width:0,paddingRight:"7.4px",color:t||"black"},className:u["lt-sorting-icon"]})]}))]},o))})});const v=s.map(l=>l.header),y=n.filter(l=>{const o=l.includes("(")?l.split(" (")[0]:l;return!v.includes(o)}),W=s.some(l=>!l.isCollapsed),ae=[];return y.forEach(l=>{const o={header:l,isCollapsible:!1,colSpan:1,rowSpan:W?2:1,displayName:l};ae.push(o)}),s.forEach(l=>{const o={header:l.header,isCollapsible:!0,colSpan:l.isCollapsed?1:l.subColumns.length,rowSpan:l.isCollapsed&&W?2:1,displayName:l.header,subHeaders:l.isCollapsed?[]:l.subColumns};ae.push(o)}),a.jsxs(r.Header,{children:[a.jsx(te,{backgroundColor:c,textColor:t,children:ae.map((l,o)=>{var V;if(l.isCollapsible){const F=(V=s.find(ue=>ue.header===l.header))==null?void 0:V.isCollapsed;return a.jsx(ye,{colSpan:l.colSpan,rowSpan:l.rowSpan,$collapsed:F,backgroundColor:c,textColor:t,onClick:se,children:a.jsxs(je,{$expanded:!F,textColor:t,backgroundColor:c,children:[a.jsx("span",{children:C?C(l.displayName):l.displayName}),a.jsx(me,{icon:F?"chevron right":"chevron down",onClick:ue=>re(l.header,ue),style:{fontSize:"14px",paddingLeft:"5px",cursor:"pointer",color:t||"black"}})]})},`header-${o}`)}else{const F=n.indexOf(l.header);return a.jsx(r.HeaderCell,{colSpan:l.colSpan,rowSpan:l.rowSpan,className:l.className||u["lt-table-header-row"],onClick:()=>ce(F),style:{backgroundColor:c||"",color:t||""},children:a.jsxs("div",{children:[C?C(l.header):l.header,w[F]&&((d==null?void 0:d.columnIndex)===F?a.jsx(z,{name:d.isAscending?"long arrow alternate up":"long arrow alternate down",className:u["lt-sorting-icon"],style:{color:t||"black"}}):a.jsxs(p.Fragment,{children:[a.jsx(z,{name:"long arrow alternate up",style:{width:"0.4em",paddingLeft:"2px",color:t||"black"},className:u["lt-sorting-icon"]}),a.jsx(z,{name:"long arrow alternate down",style:{width:0,paddingRight:"7.4px",color:t||"black"},className:u["lt-sorting-icon"]})]}))]})},`header-${o}`)}})}),W&&a.jsx(Ne,{children:ae.filter(l=>{var o;return l.isCollapsible&&!((o=s.find(V=>V.header===l.header))!=null&&o.isCollapsed)}).flatMap(l=>(l.subHeaders??[]).map((o,V)=>a.jsx(ke,{"data-parent-header":l.header,"data-metric-start":V===0?"true":"false",$metricStart:V===0,backgroundColor:c,textColor:t,children:o},`sub-${l.header}-${V}`)))})]})},oe=(m||[]).map(n=>{const s=n.includes("(")?n.split(" (")[0]:n;return(q||[]).find(y=>y.header===s)||null}),ee=()=>L?a.jsx(r.Body,{className:u["LTtable-body"],children:E.map((n,s)=>a.jsx(te,{backgroundColor:c,textColor:t,children:n.map((v,y)=>{const W=oe[y];return W?a.jsx(_e,{align:W.isCollapsed?"center":"left",backgroundColor:c,textColor:t,children:H&&H(v,s,y)||v},y):a.jsx(r.Cell,{style:{backgroundColor:c||"",color:t||""},children:H&&H(v,s,y)||v},y)})},s))}):a.jsx(r.Body,{className:u["LTtable-body"],children:E.map((n,s)=>a.jsx(te,{backgroundColor:c,textColor:t,children:n.map((v,y)=>a.jsx(r.Cell,{style:{backgroundColor:c||"",color:t||""},children:H&&H(v,s,y)||v},y))},s))});return a.jsxs("div",{className:u["lttable-container"],style:{backgroundColor:c||"#ffffff"},children:[a.jsxs("div",{className:u["table-wrapper"],children:[f&&f.length>0&&a.jsx("div",{className:u["lt-custom-header-row"],children:f.map((n,s)=>a.jsx("div",{className:u["lt-custom-header-item"],children:n},s))}),a.jsxs($e,{size:e,className:u["lt-rounded-table"],backgroundColor:c,textColor:t,...ie,children:[I(),ee()]})]}),A&&k&&a.jsxs(Te,{className:u["lt-pagination-footer"],backgroundColor:c,textColor:t,children:[a.jsxs("div",{children:["Page ",N," of ",k]}),x&&a.jsx("div",{className:u["lt-download-btn"],onClick:Z,children:a.jsx(pe,{})}),a.jsxs("div",{className:u["lt-pagination-btn-group"],children:[a.jsx("div",{children:a.jsx(me,{icon:"angle left",fitted:!0,onClick:de,disabled:N===1,style:{fontSize:"16px",color:t||"rgb(2, 8, 23)",opacity:N===1?.5:1}})}),a.jsx("div",{children:a.jsx(me,{icon:"angle right",fitted:!0,onClick:Y,disabled:N===k,style:{color:t||"rgb(2, 8, 23)",fontSize:"16px",opacity:N===k?.5:1}})})]})]})]})},Be=we;we.__docgenInfo={description:"",methods:[],displayName:"LtTable",props:{headers:{defaultValue:{value:"[]",computed:!1},required:!1},cellData:{defaultValue:{value:"[]",computed:!1},required:!1},customHeaders:{defaultValue:{value:"[]",computed:!1},required:!1},searchQuery:{defaultValue:{value:"''",computed:!1},required:!1},sortableColumns:{defaultValue:{value:"[]",computed:!1},required:!1},pagination:{defaultValue:{value:"false",computed:!1},required:!1},rowsPerPage:{defaultValue:{value:"10",computed:!1},required:!1},currentPage:{defaultValue:{value:"1",computed:!1},required:!1},useCollapsibleColumns:{defaultValue:{value:"false",computed:!1},required:!1},collapsibleColumns:{defaultValue:{value:"[]",computed:!1},required:!1},renderCustomCell:{defaultValue:{value:`(cell) => {
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
}`,computed:!1},required:!1}}};export{Be as L};
