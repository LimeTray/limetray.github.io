import{_ as y}from"./extends-98964cd2.js";import{_ as se}from"./inheritsLoose-c82a83d4.js";import{i as p,_ as M,a as le}from"./factories-a0d6c822.js";import{c as d,u as a,g as _,b as k,s as oe,a as Z,l as z}from"./getElementType-ead3b972.js";import{R as u,r as Q}from"./index-76fb7be0.js";import{i as A}from"./childrenUtils-25a53b67.js";import{I as X}from"./Icon-84915bf2.js";import{L as ce}from"./Label-fd2b2d7f.js";import{m as de}from"./map-6332fbaf.js";import{R as Y}from"./includes-ae816ee0.js";function E(e){var l=e.children,v=e.className,i=e.content,t=e.hidden,r=e.visible,o=d(a(r,"visible"),a(t,"hidden"),"content",v),n=_(E,e),s=k(E,e);return u.createElement(s,y({},n,{className:o}),A(l)?i:l)}E.handledProps=["as","children","className","content","hidden","visible"];E.propTypes={};function C(e){var l=e.attached,v=e.basic,i=e.buttons,t=e.children,r=e.className,o=e.color,n=e.compact,s=e.content,c=e.floated,f=e.fluid,h=e.icon,w=e.inverted,G=e.labeled,T=e.negative,g=e.positive,$=e.primary,O=e.secondary,I=e.size,L=e.toggle,N=e.vertical,b=e.widths,R=d("ui",o,I,a(v,"basic"),a(n,"compact"),a(f,"fluid"),a(h,"icon"),a(w,"inverted"),a(G,"labeled"),a(T,"negative"),a(g,"positive"),a($,"primary"),a(O,"secondary"),a(L,"toggle"),a(N,"vertical"),z(l,"attached"),Z(c,"floated"),oe(b),"buttons",r),B=_(C,e),K=k(C,e);return p(i)?u.createElement(K,y({},B,{className:R}),A(t)?s:t):u.createElement(K,y({},B,{className:R}),de(i,function(S){return ue.create(S)}))}C.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"];C.propTypes={};function P(e){var l=e.className,v=e.text,i=d("or",l),t=_(P,e),r=k(P,e);return u.createElement(r,y({},t,{className:i,"data-text":v}))}P.handledProps=["as","className","text"];P.propTypes={};var m=function(e){se(l,e);function l(){for(var i,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return i=e.call.apply(e,[this].concat(r))||this,i.ref=Q.createRef(),i.computeElementType=function(){var n=i.props,s=n.attached,c=n.label;if(!p(s)||!p(c))return"div"},i.computeTabIndex=function(n){var s=i.props,c=s.disabled,f=s.tabIndex;if(!p(f))return f;if(c)return-1;if(n==="div")return 0},i.focus=function(n){return M(i.ref.current,"focus",n)},i.handleClick=function(n){var s=i.props.disabled;if(s){n.preventDefault();return}M(i.props,"onClick",n,i.props)},i.hasIconClass=function(){var n=i.props,s=n.labelPosition,c=n.children,f=n.content,h=n.icon;return h===!0?!0:h&&(s||A(c)&&p(f))},i}var v=l.prototype;return v.computeButtonAriaRole=function(t){var r=this.props.role;if(!p(r))return r;if(t!=="button")return"button"},v.render=function(){var t=this.props,r=t.active,o=t.animated,n=t.attached,s=t.basic,c=t.children,f=t.circular,h=t.className,w=t.color,G=t.compact,T=t.content,g=t.disabled,$=t.floated,O=t.fluid,I=t.icon,L=t.inverted,N=t.label,b=t.labelPosition,R=t.loading,B=t.negative,K=t.positive,S=t.primary,ee=t.secondary,te=t.size,V=t.toggle,F=t.type,U=d(w,te,a(r,"active"),a(s,"basic"),a(f,"circular"),a(G,"compact"),a(O,"fluid"),a(this.hasIconClass(),"icon"),a(L,"inverted"),a(R,"loading"),a(B,"negative"),a(K,"positive"),a(S,"primary"),a(ee,"secondary"),a(V,"toggle"),z(o,"animated"),z(n,"attached")),W=d(z(b||!!N,"labeled")),j=d(a(g,"disabled"),Z($,"floated")),q=_(l,this.props),x=k(l,this.props,this.computeElementType),H=this.computeTabIndex(x);if(!p(N)){var ae=d("ui",U,"button",h),ie=d("ui",W,"button",h,j),J=ce.create(N,{defaultProps:{basic:!0,pointing:b==="left"?"right":"left"},autoGenerateKey:!1});return u.createElement(x,y({},q,{className:ie,onClick:this.handleClick}),b==="left"&&J,u.createElement(Y,{innerRef:this.ref},u.createElement("button",{className:ae,"aria-pressed":V?!!r:void 0,disabled:g,type:F,tabIndex:H},X.create(I,{autoGenerateKey:!1})," ",T)),(b==="right"||!b)&&J)}var ne=d("ui",U,j,W,"button",h),D=!A(c),re=this.computeButtonAriaRole(x);return u.createElement(Y,{innerRef:this.ref},u.createElement(x,y({},q,{className:ne,"aria-pressed":V?!!r:void 0,disabled:g&&x==="button"||void 0,onClick:this.handleClick,role:re,type:F,tabIndex:H}),D&&c,!D&&X.create(I,{autoGenerateKey:!1}),!D&&T))},l}(Q.Component);m.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle","type"];m.propTypes={};m.defaultProps={as:"button"};m.Content=E;m.Group=C;m.Or=P;m.create=le(m,function(e){return{content:e}});const ue=m;export{ue as S};