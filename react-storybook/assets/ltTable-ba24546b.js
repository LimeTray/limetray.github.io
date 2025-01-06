import{j as s}from"./jsx-runtime-8406ef1e.js";import{R as m,r as re}from"./index-ad58220e.js";import{_ as w}from"./extends-4c19d496.js";import{m as O}from"./map-20538cdf.js";import{c as P,g as B,b as z,y as X,z as Q,r as U,u as a,a as ce,l as S}from"./getElementType-ff0d42f5.js";import{i as K}from"./childrenUtils-dd3b0ba5.js";import{a as Y}from"./factories-df82d7d3.js";import{I as F}from"./Icon-370c2d23.js";import{L as M}from"./index-6dcb29cb.js";function V(e){var n=e.children,c=e.className,o=P(c),u=B(V,e),d=z(V,e);return m.createElement(d,w({},u,{className:o}),n)}V.handledProps=["as","children","className"];V.defaultProps={as:"tbody"};V.propTypes={};function y(e){var n=e.active,c=e.children,o=e.className,u=e.collapsing,d=e.content,v=e.disabled,A=e.error,C=e.icon,N=e.negative,g=e.positive,x=e.selectable,b=e.singleLine,T=e.textAlign,t=e.verticalAlign,R=e.warning,f=e.width,k=P(a(n,"active"),a(u,"collapsing"),a(v,"disabled"),a(A,"error"),a(N,"negative"),a(g,"positive"),a(x,"selectable"),a(b,"single line"),a(R,"warning"),U(T),Q(t),X(f,"wide"),o),i=B(y,e),l=z(y,e);return K(c)?m.createElement(l,w({},i,{className:k}),F.create(C),d):m.createElement(l,w({},i,{className:k}),c)}y.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"];y.defaultProps={as:"td"};y.propTypes={};y.create=Y(y,function(e){return{content:e}});function L(e){var n=e.children,c=e.className,o=e.content,u=e.fullWidth,d=P(a(u,"full-width"),c),v=B(L,e),A=z(L,e);return m.createElement(A,w({},v,{className:d}),K(n)?o:n)}L.handledProps=["as","children","className","content","fullWidth"];L.defaultProps={as:"thead"};L.propTypes={};function q(e){var n=e.as,c=B(q,e);return m.createElement(L,w({},c,{as:n}))}q.handledProps=["as"];q.propTypes={};q.defaultProps={as:"tfoot"};function H(e){var n=e.as,c=e.className,o=e.sorted,u=P(ce(o,"sorted"),c),d=B(H,e);return m.createElement(y,w({},d,{as:n,className:u}))}H.handledProps=["as","className","sorted"];H.propTypes={};H.defaultProps={as:"th"};function h(e){var n=e.active,c=e.cellAs,o=e.cells,u=e.children,d=e.className,v=e.disabled,A=e.error,C=e.negative,N=e.positive,g=e.textAlign,x=e.verticalAlign,b=e.warning,T=P(a(n,"active"),a(v,"disabled"),a(A,"error"),a(C,"negative"),a(N,"positive"),a(b,"warning"),U(g),Q(x),d),t=B(h,e),R=z(h,e);return K(u)?m.createElement(R,w({},t,{className:T}),O(o,function(f){return y.create(f,{defaultProps:{as:c}})})):m.createElement(R,w({},t,{className:T}),u)}h.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"];h.defaultProps={as:"tr",cellAs:"td"};h.propTypes={};h.create=Y(h,function(e){return{cells:e}});function r(e){var n=e.attached,c=e.basic,o=e.celled,u=e.children,d=e.className,v=e.collapsing,A=e.color,C=e.columns,N=e.compact,g=e.definition,x=e.fixed,b=e.footerRow,T=e.headerRow,t=e.headerRows,R=e.inverted,f=e.padded,k=e.renderBodyRow,i=e.selectable,l=e.singleLine,j=e.size,E=e.sortable,D=e.stackable,W=e.striped,p=e.structured,ee=e.tableData,ae=e.textAlign,le=e.unstackable,te=e.verticalAlign,$=P("ui",A,j,a(o,"celled"),a(v,"collapsing"),a(g,"definition"),a(x,"fixed"),a(R,"inverted"),a(i,"selectable"),a(l,"single line"),a(E,"sortable"),a(D,"stackable"),a(W,"striped"),a(p,"structured"),a(le,"unstackable"),S(n,"attached"),S(c,"basic"),S(N,"compact"),S(f,"padded"),U(ae),Q(te),X(C,"column"),"table",d),G=B(r,e),I=z(r,e);if(!K(u))return m.createElement(I,w({},G,{className:$}),u);var se=T||t,J={defaultProps:{cellAs:"th"}},ne=se&&m.createElement(L,null,h.create(T,J),O(t,function(_){return h.create(_,J)}));return m.createElement(I,w({},G,{className:$}),ne,m.createElement(V,null,k&&O(ee,function(_,ie){return h.create(k(_,ie))})),b&&m.createElement(q,null,h.create(b)))}r.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"];r.defaultProps={as:"table"};r.propTypes={};r.Body=V;r.Cell=y;r.Footer=q;r.Header=L;r.HeaderCell=H;r.Row=h;const Z=({size:e,headers:n=[],cellData:c=[],customHeaders:o=[],searchQuery:u="",onSort:d,sortableColumns:v=[],pagination:A=!1,rowsPerPage:C=10,currentPage:N=1,totalPage:g,onPrevPage:x,onNextPage:b,...T})=>{const[t,R]=re.useState(null),f=c.filter(i=>i.some(l=>String(l).toLowerCase().includes(u.toLowerCase())));t&&!d&&[...f].sort((i,l)=>{const j=i[t.columnIndex],E=l[t.columnIndex];if(j&&E){if(j<E)return t.isAscending?-1:1;if(j>E)return t.isAscending?1:-1}return 0});const k=i=>{const l=(t==null?void 0:t.columnIndex)===i?!t.isAscending:!0;R({columnIndex:i,isAscending:l}),d==null||d(i,l)};return s.jsxs("div",{className:"table-container",children:[o&&o.length>0&&s.jsx("div",{className:"custom-header-row",children:o.map((i,l)=>s.jsx("div",{className:"custom-header-item",children:i},l))}),s.jsxs(r,{size:e,className:"rounded-table",...T,children:[n&&n.length>0&&s.jsx(r.Header,{children:s.jsx(r.Row,{children:n.map((i,l)=>s.jsxs(r.HeaderCell,{onClick:()=>v[l]?k(l):void 0,className:"table-header-row",children:[i,v[l]&&((t==null?void 0:t.columnIndex)===l?s.jsx(F,{name:t.isAscending?"long arrow alternate up":"long arrow alternate down",className:"sorting-icon"}):s.jsxs(m.Fragment,{children:[s.jsx(F,{name:"long arrow alternate up",style:{width:"0.4em",paddingLeft:"2px"},className:"sorting-icon"}),s.jsx(F,{name:"long arrow alternate down",style:{width:0,paddingRight:"7.4px"},className:"sorting-icon"})]}))]},l))})}),s.jsx(r.Body,{className:"LTtable-body",children:f.map((i,l)=>s.jsx(r.Row,{children:i.map((j,E)=>{const D=l>0&&f[l-1][E]===j,W=l<f.length-1&&f[l+1][E]===j;return s.jsx(r.Cell,{style:{borderTop:D?"none":"",borderBottom:W?"none":""},children:D?null:j},E)})},l))})]}),A&&g&&g>1&&s.jsxs("div",{className:"pagination-footer",children:[s.jsxs("div",{children:["Page ",N," of ",g]}),s.jsxs("div",{className:"pagination-btn-group",children:[s.jsx("div",{onClick:()=>{x==null||x()},children:s.jsx(M,{icon:"angle left",fitted:!0,color:"rgb(2, 8, 23)",style:{fontSize:"16px",color:"rgb(2, 8, 23)",opacity:N===1?.5:1}})}),s.jsx("div",{onClick:()=>{b==null||b()},children:s.jsx(M,{icon:"angle right",fitted:!0,color:"rgb(2, 8, 23)",style:{color:"rgb(2, 8, 23)",fontSize:"16px",opacity:N===g?.5:1}})})]})]})]})},we=Z;Z.__docgenInfo={description:"",methods:[],displayName:"LtTable",props:{headers:{defaultValue:{value:"[]",computed:!1},required:!1},cellData:{defaultValue:{value:"[]",computed:!1},required:!1},customHeaders:{defaultValue:{value:"[]",computed:!1},required:!1},searchQuery:{defaultValue:{value:"''",computed:!1},required:!1},sortableColumns:{defaultValue:{value:"[]",computed:!1},required:!1},pagination:{defaultValue:{value:"false",computed:!1},required:!1},rowsPerPage:{defaultValue:{value:"10",computed:!1},required:!1},currentPage:{defaultValue:{value:"1",computed:!1},required:!1}}};export{we as L};
