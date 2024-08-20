import{_ as d}from"./extends-98964cd2.js";import{_ as S}from"./inheritsLoose-c82a83d4.js";import{i as U}from"./includes-2d2ad27d.js";import{m as V}from"./map-5ec937e9.js";import{i as K,_ as j,c as q,a as D}from"./factories-aa9c7902.js";import{g as J,i as Q}from"./childrenUtils-ad5f8e12.js";import{g as W,c as L,u as o,a as P,b as X}from"./getElementType-800224f7.js";import{r as v,R as G}from"./index-76fb7be0.js";import{p as Y}from"./htmlPropsUtils-09ff187c.js";import{B as Z}from"./Button-1eadaef4.js";import{I as k}from"./Icon-f4a5e358.js";import{L as ee}from"./Label-f2be6096.js";import{h as te}from"./Ref-0f7da313.js";var p=function(l){S(u,l);function u(){for(var e,f=arguments.length,t=new Array(f),i=0;i<f;i++)t[i]=arguments[i];return e=l.call.apply(l,[this].concat(t))||this,e.inputRef=v.createRef(),e.computeIcon=function(){var r=e.props,n=r.loading,a=r.icon;if(!K(a))return a;if(n)return"spinner"},e.computeTabIndex=function(){var r=e.props,n=r.disabled,a=r.tabIndex;if(!K(a))return a;if(n)return-1},e.focus=function(r){return e.inputRef.current.focus(r)},e.select=function(){return e.inputRef.current.select()},e.handleChange=function(r){var n=J(r,"target.value");j(e.props,"onChange",r,d({},e.props,{value:n}))},e.handleChildOverrides=function(r,n){return d({},n,r.props,{ref:function(s){te(r.ref,s),e.inputRef.current=s}})},e.partitionProps=function(){var r=e.props,n=r.disabled,a=r.type,s=e.computeTabIndex(),b=W(u,e.props),m=Y(b),g=m[0],y=m[1];return[d({},g,{disabled:n,type:a,tabIndex:s,onChange:e.handleChange,ref:e.inputRef}),y]},e}var z=u.prototype;return z.render=function(){var f=this,t=this.props,i=t.action,r=t.actionPosition,n=t.children,a=t.className,s=t.disabled,b=t.error,m=t.fluid,g=t.focus,y=t.icon,A=t.iconPosition,H=t.input,M=t.inverted,I=t.label,c=t.labelPosition,x=t.loading,O=t.size,B=t.transparent,w=t.type,R=L("ui",O,o(s,"disabled"),o(b,"error"),o(m,"fluid"),o(g,"focus"),o(M,"inverted"),o(x,"loading"),o(B,"transparent"),P(r,"action")||o(i,"action"),P(A,"icon")||o(y||x,"icon"),P(c,"labeled")||o(I,"labeled"),"input",a),_=X(u,this.props),E=this.partitionProps(),N=E[0],T=E[1];if(!Q(n)){var F=V(v.Children.toArray(n),function(h){return h.type!=="input"?h:v.cloneElement(h,f.handleChildOverrides(h,N))});return G.createElement(_,d({},T,{className:R}),F)}var C=Z.create(i,{autoGenerateKey:!1}),$=ee.create(I,{defaultProps:{className:L("label",U(c,"corner")&&c)},autoGenerateKey:!1});return G.createElement(_,d({},T,{className:R}),r==="left"&&C,c!=="right"&&$,q(H||w,{defaultProps:N,autoGenerateKey:!1}),k.create(this.computeIcon(),{autoGenerateKey:!1}),r!=="left"&&C,c==="right"&&$)},u}(v.Component);p.handledProps=["action","actionPosition","as","children","className","disabled","error","fluid","focus","icon","iconPosition","input","inverted","label","labelPosition","loading","onChange","size","tabIndex","transparent","type"];p.propTypes={};p.defaultProps={type:"text"};p.create=D(p,function(l){return{type:l}});const he=p;export{he as I};