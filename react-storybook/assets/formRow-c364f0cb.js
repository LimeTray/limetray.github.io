import{j as r}from"./jsx-runtime-ffb262ed.js";import{S as l}from"./index-48813856.js";import{L as d}from"./ltButton-4c5c5b3e.js";import{L as T}from"./ltInput-8291f699.js";import{L as E}from"./ltToggle-30815ac1.js";import{T as N}from"./TextArea-2ab395f2.js";import{H as O,a as P}from"./Header-74a2fe0c.js";import{L as f}from"./ltCheckBox-340f451f.js";import{a as t}from"./appConstants-a03b85fa.js";import{L as y}from"./ltDropdown-cfd4df77.js";import{S as C}from"./searchComponent-d6e01770.js";import{L as S}from"./ltRadio-0dafada8.js";const n=({className:o="",header:m,subHeader:p,components:i})=>{const u=()=>i.map((a,s)=>{const{isHidden:c,props:e={}}=a;if(c)return null;switch(a.type){case t.COMPONENTS_TYPE.SELECTOR_GROUP:return r.jsx(l,{...e},s);case t.COMPONENTS_TYPE.BUTTON:return r.jsx(d,{...e},s);case t.COMPONENTS_TYPE.INPUT:return r.jsx(T,{...e},s);case t.COMPONENTS_TYPE.TOGGLE:return r.jsx(E,{...e},s);case t.COMPONENTS_TYPE.CHECKBOX:return r.jsx(f,{...e},s);case t.COMPONENTS_TYPE.RADIO:return r.jsx(S,{...e},s);case t.COMPONENTS_TYPE.TEXTAREA:return r.jsx(N,{...e},s);case t.COMPONENTS_TYPE.DROPDOWN:return r.jsx(y,{...e,placeholder:e.placeholder,options:e.options},s);case t.COMPONENTS_TYPE.SEARCH:return r.jsx(C,{...e,placeholder:e.placeholder,onChange:e.onChange},s);case t.COMPONENTS_TYPE.CUSTOM:return e.component;default:return null}});return r.jsxs("div",{className:`form-row-root ${o}`,children:[r.jsxs(O,{as:"h4",className:"header-text",children:[m,r.jsx(P,{className:"subheader",children:p})]}),r.jsx("div",{className:"component-container",children:u()})]})},v=n;n.__docgenInfo={description:"",methods:[],displayName:"FormRow",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},header:{required:!0,tsType:{name:"string"},description:""},subHeader:{required:!0,tsType:{name:"string"},description:""},components:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  className?: string;
  isHidden?: boolean;
  props: {
    component?: React.JSX.Element,
    [key: string]: any;
  };
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"isHidden",value:{name:"boolean",required:!1}},{key:"props",value:{name:"signature",type:"object",raw:`{
  component?: React.JSX.Element,
  [key: string]: any;
}`,signature:{properties:[{key:"component",value:{name:"React.JSX.Element",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]},required:!0}}]}}],raw:"ComponentProps[]"},description:""}}};export{v as F};
