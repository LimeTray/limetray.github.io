import{i,d as o,e,f as n,h as f,j as a,k as p}from"./getElementType-09c91dec.js";import{a as y}from"./childrenUtils-9ef4481f.js";var g="[object Map]",c="[object Set]",m=Object.prototype,b=m.hasOwnProperty;function A(r){if(r==null)return!0;if(i(r)&&(o(r)||typeof r=="string"||typeof r.splice=="function"||e(r)||n(r)||f(r)))return!r.length;var t=y(r);if(t==g||t==c)return!r.size;if(a(r))return!p(r).length;for(var s in r)if(b.call(r,s))return!1;return!0}export{A as i};