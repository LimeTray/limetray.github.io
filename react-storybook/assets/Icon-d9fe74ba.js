import{_ as f}from"./extends-98964cd2.js";import{_ as C}from"./inheritsLoose-c82a83d4.js";import{_ as G,i as u,a as L}from"./factories-11ce6580.js";import{c as h,g as v,a as b,u as o,l as R,b as m}from"./getElementType-09c91dec.js";import{R as g,r as V}from"./index-76fb7be0.js";import{i as w}from"./childrenUtils-9ef4481f.js";function d(r){var n=r.children,c=r.className,i=r.content,e=r.size,t=h(e,"icons",c),a=v(d,r),s=b(d,r);return g.createElement(s,f({},a,{className:t}),w(n)?i:n)}d.handledProps=["as","children","className","content","size"];d.propTypes={};d.defaultProps={as:"i"};var l=function(r){C(n,r);function n(){for(var i,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return i=r.call.apply(r,[this].concat(t))||this,i.handleClick=function(s){var p=i.props.disabled;if(p){s.preventDefault();return}G(i.props,"onClick",s,i.props)},i}var c=n.prototype;return c.getIconAriaOptions=function(){var e={},t=this.props,a=t["aria-label"],s=t["aria-hidden"];return u(a)?e["aria-hidden"]="true":e["aria-label"]=a,u(s)||(e["aria-hidden"]=s),e},c.render=function(){var e=this.props,t=e.bordered,a=e.circular,s=e.className,p=e.color,y=e.corner,N=e.disabled,I=e.fitted,O=e.flipped,k=e.inverted,z=e.link,A=e.loading,E=e.name,T=e.rotated,x=e.size,K=h(p,E,x,o(t,"bordered"),o(a,"circular"),o(N,"disabled"),o(I,"fitted"),o(k,"inverted"),o(z,"link"),o(A,"loading"),R(y,"corner"),m(O,"flipped"),m(T,"rotated"),"icon",s),P=v(n,this.props),_=b(n,this.props),$=this.getIconAriaOptions();return g.createElement(_,f({},P,$,{className:K,onClick:this.handleClick}))},n}(V.PureComponent);l.handledProps=["aria-hidden","aria-label","as","bordered","circular","className","color","corner","disabled","fitted","flipped","inverted","link","loading","name","rotated","size"];l.propTypes={};l.defaultProps={as:"i"};l.Group=d;l.create=L(l,function(r){return{name:r}});const q=l;export{q as I};