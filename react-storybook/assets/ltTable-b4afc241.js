import{j as a}from"./jsx-runtime-8406ef1e.js";import{R as p}from"./index-ad58220e.js";import{_ as A}from"./extends-4c19d496.js";import{m as oe}from"./map-20538cdf.js";import{c as K,g as F,b as Q,y as he,z as ue,r as me,u as n,a as pe,l as I}from"./getElementType-ff0d42f5.js";import{i as ee}from"./childrenUtils-dd3b0ba5.js";import{a as fe}from"./factories-df82d7d3.js";import{I as B}from"./Icon-370c2d23.js";import{L as de}from"./index-6dcb29cb.js";import{d as U,l as D}from"./styled-components.browser.esm-675ea4f2.js";function z(e){var o=e.children,u=e.className,h=K(u),f=F(z,e),b=Q(z,e);return p.createElement(b,A({},f,{className:h}),o)}z.handledProps=["as","children","className"];z.defaultProps={as:"tbody"};z.propTypes={};function T(e){var o=e.active,u=e.children,h=e.className,f=e.collapsing,b=e.content,v=e.disabled,R=e.error,O=e.icon,y=e.negative,_=e.positive,C=e.selectable,k=e.singleLine,r=e.textAlign,w=e.verticalAlign,E=e.warning,S=e.width,H=K(n(o,"active"),n(f,"collapsing"),n(v,"disabled"),n(R,"error"),n(y,"negative"),n(_,"positive"),n(C,"selectable"),n(k,"single line"),n(E,"warning"),me(r),ue(w),he(S,"wide"),h),N=F(T,e),j=Q(T,e);return ee(u)?p.createElement(j,A({},N,{className:H}),B.create(O),b):p.createElement(j,A({},N,{className:H}),u)}T.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"];T.defaultProps={as:"td"};T.propTypes={};T.create=fe(T,function(e){return{content:e}});function P(e){var o=e.children,u=e.className,h=e.content,f=e.fullWidth,b=K(n(f,"full-width"),u),v=F(P,e),R=Q(P,e);return p.createElement(R,A({},v,{className:b}),ee(o)?h:o)}P.handledProps=["as","children","className","content","fullWidth"];P.defaultProps={as:"thead"};P.propTypes={};function M(e){var o=e.as,u=F(M,e);return p.createElement(P,A({},u,{as:o}))}M.handledProps=["as"];M.propTypes={};M.defaultProps={as:"tfoot"};function G(e){var o=e.as,u=e.className,h=e.sorted,f=K(pe(h,"sorted"),u),b=F(G,e);return p.createElement(T,A({},b,{as:o,className:f}))}G.handledProps=["as","className","sorted"];G.propTypes={};G.defaultProps={as:"th"};function x(e){var o=e.active,u=e.cellAs,h=e.cells,f=e.children,b=e.className,v=e.disabled,R=e.error,O=e.negative,y=e.positive,_=e.textAlign,C=e.verticalAlign,k=e.warning,r=K(n(o,"active"),n(v,"disabled"),n(R,"error"),n(O,"negative"),n(y,"positive"),n(k,"warning"),me(_),ue(C),b),w=F(x,e),E=Q(x,e);return ee(f)?p.createElement(E,A({},w,{className:r}),oe(h,function(S){return T.create(S,{defaultProps:{as:u}})})):p.createElement(E,A({},w,{className:r}),f)}x.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"];x.defaultProps={as:"tr",cellAs:"td"};x.propTypes={};x.create=fe(x,function(e){return{cells:e}});function s(e){var o=e.attached,u=e.basic,h=e.celled,f=e.children,b=e.className,v=e.collapsing,R=e.color,O=e.columns,y=e.compact,_=e.definition,C=e.fixed,k=e.footerRow,r=e.headerRow,w=e.headerRows,E=e.inverted,S=e.padded,H=e.renderBodyRow,N=e.selectable,j=e.singleLine,ae=e.size,L=e.sortable,W=e.stackable,le=e.striped,te=e.structured,se=e.tableData,ne=e.textAlign,ie=e.unstackable,re=e.verticalAlign,J=K("ui",R,ae,n(h,"celled"),n(v,"collapsing"),n(_,"definition"),n(C,"fixed"),n(E,"inverted"),n(N,"selectable"),n(j,"single line"),n(L,"sortable"),n(W,"stackable"),n(le,"striped"),n(te,"structured"),n(ie,"unstackable"),I(o,"attached"),I(u,"basic"),I(y,"compact"),I(S,"padded"),me(ne),ue(re),he(O,"column"),"table",b),X=F(s,e),Y=Q(s,e);if(!ee(f))return p.createElement(Y,A({},X,{className:J}),f);var t=r||w,i={defaultProps:{cellAs:"th"}},g=t&&p.createElement(P,null,x.create(r,i),oe(w,function(m){return x.create(m,i)}));return p.createElement(Y,A({},X,{className:J}),g,p.createElement(z,null,H&&oe(se,function(m,$){return x.create(H(m,$))})),k&&p.createElement(M,null,x.create(k)))}s.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"];s.defaultProps={as:"table"};s.propTypes={};s.Body=z;s.Cell=T;s.Footer=M;s.Header=P;s.HeaderCell=G;s.Row=x;const d={"lttable-container":"_lttable-container_sly0f_1","table-wrapper":"_table-wrapper_sly0f_12","lt-custom-header-row":"_lt-custom-header-row_sly0f_19","lt-sorting-icon":"_lt-sorting-icon_sly0f_27","lt-rounded-table":"_lt-rounded-table_sly0f_30","lt-table-header-row":"_lt-table-header-row_sly0f_54","lt-pagination-footer":"_lt-pagination-footer_sly0f_58","lt-download-btn":"_lt-download-btn_sly0f_67","lt-pagination-btn-group":"_lt-pagination-btn-group_sly0f_80","lt-custom-header-item":"_lt-custom-header-item_sly0f_94","LTtable-body":"_LTtable-body_sly0f_100","pagination-container":"_pagination-container_sly0f_103"},be=e=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-download",...e,children:[a.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),a.jsx("polyline",{points:"7 10 12 15 17 10"}),a.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]});be.__docgenInfo={description:"",methods:[],displayName:"DownloadIcon"};const ve=U(s.HeaderCell)`
  &&& {
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    white-space: nowrap;
    margin: 0;
    &:hover {
      background-color: #f5f5f5;
    }
  }

  ${e=>e.$collapsed&&D`
    &&& {
      background-color: #fafafa;
      &:hover {
        background-color: #f0f0f0;
      }
    }
  `}

  ${e=>!e.$collapsed&&D`
    &&& {
      padding-left: 0 ;
      padding-right: 0 ;
      padding-bottom: 0 ;
      border: none ;
      box-shadow: none ;
    }
  `}
`,we=U.div`
  &&& {
    justify-content: center;
    width: 100%;
    white-space: nowrap;
    min-width: 50px;
    display: flex;
    align-items: center;
  }

  ${e=>e.$expanded&&D`
    &&& {
      text-align: center;
      justify-content: center;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 0;
      padding-right: 0;
      background-color: #eceef0;
      font-weight: 500;
      border-bottom: 1px solid #eceef0;
      border-right: 1px solid #eceef0;
    }
  `}
`,xe=U(s.Row)`
  &&& {
    border-right: 1px solid #eceef0;
    &:last-child {
      border-bottom: 1px solid #eceef0;
    }
  }
`,ye=U(s.HeaderCell)`
  &&& {
    white-space: nowrap;
    width: fit-content;
    min-width: 80px;
    max-width: 100px;
  }

  ${e=>e.$total&&D`
    &&& {
      background-color: #eceef0;
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
  ${e=>e.$metricStart&&D`
    &&& {
      background-color: #eceef0;
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
`,Ne=U(s.Cell)`
  &&& {
    text-align: ${e=>e.align||"left"} ;
  }
`,ge=({size:e,headers:o=[],cellData:u=[],customHeaders:h=[],searchQuery:f="",onSort:b,sortableColumns:v=[],pagination:R=!1,rowsPerPage:O=10,currentPage:y=1,totalPage:_,onPrevPage:C,onNextPage:k,sortConfig:r,onDownload:w,useCollapsibleColumns:E=!1,collapsibleColumns:S=[],onToggleCollapse:H,renderCustomHeader:N,renderCustomCell:j=L=>typeof L=="string"&&!isNaN(parseFloat(L.replace(/[₹,%]/g,"")))?a.jsx("div",{children:L}):L,...ae})=>{const L=u.filter(t=>t.some(i=>String(i).toLowerCase().includes(f.toLowerCase()))),W=t=>{const i=(r==null?void 0:r.columnIndex)===t?!r.isAscending:!0;b==null||b(t,i)},le=t=>{t.stopPropagation()},te=(t,i)=>{i.stopPropagation(),H&&H(t)},se=t=>{t>=0&&v[t]&&W(t)},ne=()=>{C==null||C()},ie=()=>{k==null||k()},re=()=>{w==null||w()},J=()=>{const t=o||[],i=S||[];if(!E||t.length===0)return a.jsx(s.Header,{children:a.jsx(s.Row,{children:t.map((l,c)=>a.jsxs(s.HeaderCell,{onClick:()=>v[c]?W(c):void 0,className:d["lt-table-header-row"],children:[N?N(l):l,v[c]&&((r==null?void 0:r.columnIndex)===c?a.jsx(B,{name:r.isAscending?"long arrow alternate up":"long arrow alternate down",className:d["lt-sorting-icon"]}):a.jsxs(p.Fragment,{children:[a.jsx(B,{name:"long arrow alternate up",style:{width:"0.4em",paddingLeft:"2px"},className:d["lt-sorting-icon"],color:"black"}),a.jsx(B,{name:"long arrow alternate down",style:{width:0,paddingRight:"7.4px"},className:d["lt-sorting-icon"],color:"black"})]}))]},c))})});const g=i.map(l=>l.header),m=t.filter(l=>{const c=l.includes("(")?l.split(" (")[0]:l;return!g.includes(c)}),$=i.some(l=>!l.isCollapsed),Z=[];return m.forEach(l=>{const c={header:l,isCollapsible:!1,colSpan:1,rowSpan:$?2:1,displayName:l};Z.push(c)}),i.forEach(l=>{const c={header:l.header,isCollapsible:!0,colSpan:l.isCollapsed?1:l.subColumns.length,rowSpan:l.isCollapsed&&$?2:1,displayName:l.header,subHeaders:l.isCollapsed?[]:l.subColumns};Z.push(c)}),a.jsxs(s.Header,{children:[a.jsx(s.Row,{children:Z.map((l,c)=>{var V;if(l.isCollapsible){const q=(V=i.find(ce=>ce.header===l.header))==null?void 0:V.isCollapsed;return a.jsx(ve,{colSpan:l.colSpan,rowSpan:l.rowSpan,$collapsed:q,onClick:le,children:a.jsxs(we,{$expanded:!q,children:[a.jsx("span",{children:N?N(l.displayName):l.displayName}),a.jsx(de,{icon:q?"chevron right":"chevron down",onClick:ce=>te(l.header,ce),style:{fontSize:"14px",paddingLeft:"5px",cursor:"pointer"},color:"black"})]})},`header-${c}`)}else{const q=t.indexOf(l.header);return a.jsx(s.HeaderCell,{colSpan:l.colSpan,rowSpan:l.rowSpan,className:l.className||d["lt-table-header-row"],onClick:()=>se(q),children:a.jsxs("div",{children:[N?N(l.header):l.header,v[q]&&((r==null?void 0:r.columnIndex)===q?a.jsx(B,{name:r.isAscending?"long arrow alternate up":"long arrow alternate down",className:d["lt-sorting-icon"]}):a.jsxs(p.Fragment,{children:[a.jsx(B,{name:"long arrow alternate up",style:{width:"0.4em",paddingLeft:"2px"},className:d["lt-sorting-icon"]}),a.jsx(B,{name:"long arrow alternate down",style:{width:0,paddingRight:"7.4px"},className:d["lt-sorting-icon"]})]}))]})},`header-${c}`)}})}),$&&a.jsx(xe,{children:Z.filter(l=>{var c;return l.isCollapsible&&!((c=i.find(V=>V.header===l.header))!=null&&c.isCollapsed)}).flatMap(l=>(l.subHeaders??[]).map((c,V)=>a.jsx(ye,{"data-parent-header":l.header,"data-metric-start":V===0?"true":"false",$metricStart:V===0,children:c},`sub-${l.header}-${V}`)))})]})},X=(o||[]).map(t=>{const i=t.includes("(")?t.split(" (")[0]:t;return(S||[]).find(m=>m.header===i)||null}),Y=()=>E?a.jsx(s.Body,{className:d["LTtable-body"],children:L.map((t,i)=>a.jsx(s.Row,{children:t.map((g,m)=>{const $=X[m];return $?a.jsx(Ne,{align:$.isCollapsed?"center":"left",children:j&&j(g,i,m)||g},m):a.jsx(s.Cell,{children:j&&j(g,i,m)||g},m)})},i))}):a.jsx(s.Body,{className:d["LTtable-body"],children:L.map((t,i)=>a.jsx(s.Row,{children:t.map((g,m)=>a.jsx(s.Cell,{children:j&&j(g,i,m)||g},m))},i))});return a.jsxs("div",{className:d["lttable-container"],children:[a.jsxs("div",{className:d["table-wrapper"],children:[h&&h.length>0&&a.jsx("div",{className:d["lt-custom-header-row"],children:h.map((t,i)=>a.jsx("div",{className:d["lt-custom-header-item"],children:t},i))}),a.jsxs(s,{size:e,className:d["lt-rounded-table"],...ae,children:[J(),Y()]})]}),R&&_&&a.jsxs("div",{className:d["lt-pagination-footer"],children:[a.jsxs("div",{children:["Page ",y," of ",_]}),w&&a.jsx("div",{className:d["lt-download-btn"],onClick:re,children:a.jsx(be,{})}),a.jsxs("div",{className:d["lt-pagination-btn-group"],children:[a.jsx("div",{children:a.jsx(de,{icon:"angle left",fitted:!0,onClick:ne,disabled:y===1,style:{fontSize:"16px",color:"rgb(2, 8, 23)",opacity:y===1?.5:1}})}),a.jsx("div",{children:a.jsx(de,{icon:"angle right",fitted:!0,onClick:ie,disabled:y===_,style:{color:"rgb(2, 8, 23)",fontSize:"16px",opacity:y===_?.5:1}})})]})]})]})},He=ge;ge.__docgenInfo={description:"",methods:[],displayName:"LtTable",props:{headers:{defaultValue:{value:"[]",computed:!1},required:!1},cellData:{defaultValue:{value:"[]",computed:!1},required:!1},customHeaders:{defaultValue:{value:"[]",computed:!1},required:!1},searchQuery:{defaultValue:{value:"''",computed:!1},required:!1},sortableColumns:{defaultValue:{value:"[]",computed:!1},required:!1},pagination:{defaultValue:{value:"false",computed:!1},required:!1},rowsPerPage:{defaultValue:{value:"10",computed:!1},required:!1},currentPage:{defaultValue:{value:"1",computed:!1},required:!1},useCollapsibleColumns:{defaultValue:{value:"false",computed:!1},required:!1},collapsibleColumns:{defaultValue:{value:"[]",computed:!1},required:!1},renderCustomCell:{defaultValue:{value:`(cell) => {
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
}`,computed:!1},required:!1}}};export{He as L};
