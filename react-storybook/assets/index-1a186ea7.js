import{j as b}from"./jsx-runtime-8406ef1e.js";import{d as r,l as v}from"./styled-components.browser.esm-675ea4f2.js";import{t as $}from"./config-92a52d19.js";import{H as q}from"./Header-30441d32.js";const T=()=>$,f=T(),k=()=>f,S={getStyle:k},x=r(q)`
  color: ${e=>e.$color};
`,i=(e,t,n,u)=>v`
  font-family: ${e.fontFamily};
  font-weight: ${e.fontWeight};
  font-size: ${t};
  line-height: ${e.lineHeight};
  color: ${n};
  text-align: ${u||"left"};
`,z=r.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,A=r.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,w=r.span`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,j=r.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,l=e=>{var a;const t=S.getStyle(),n=t.typography[e.type],u=e.size?t.sizes[e.size]:n.fontSize,o=e.color||t.colors.text,y=e.textAlign||"left",m=e.multiplier?typeof e.multiplier=="string"&&((a=t.multipliers)!=null&&a[e.multiplier])?Number(t.multipliers[e.multiplier]):typeof e.multiplier=="number"?e.multiplier<=0?1:e.multiplier:parseFloat(e.multiplier)<=0?1:parseFloat(e.multiplier)||1:1,s=u.replace("rem",""),g=`${parseFloat(s)*m}rem`,d=(h=>{switch(h){case"heading":return x;case"body":return z;case"caption":return A;case"button":return w;default:return j}})(e.type),{type:_,size:F,color:H,text:c,textAlign:N,typographyType:B,subheader:D,...p}=e;return b.jsx(d,{$typographyType:n,$resolvedSize:g,$color:o,$textAlign:y,...p,children:c})},R=l;l.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  heading: Typography;
  body: Typography;
  caption: Typography;
  button: Typography;
  label: Typography;
}`,signature:{properties:[{key:"heading",value:{name:"Typography",required:!0}},{key:"body",value:{name:"Typography",required:!0}},{key:"caption",value:{name:"Typography",required:!0}},{key:"button",value:{name:"Typography",required:!0}},{key:"label",value:{name:"Typography",required:!0}}]}},description:""},id:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  mini: string;
  tiny: string;
  small: string;
  medium: string;
  large: string;
  big: string;
  huge: string;
  massive: string;
}`,signature:{properties:[{key:"mini",value:{name:"string",required:!0}},{key:"tiny",value:{name:"string",required:!0}},{key:"small",value:{name:"string",required:!0}},{key:"medium",value:{name:"string",required:!0}},{key:"large",value:{name:"string",required:!0}},{key:"big",value:{name:"string",required:!0}},{key:"huge",value:{name:"string",required:!0}},{key:"massive",value:{name:"string",required:!0}}]}},description:""},subheader:{required:!1,tsType:{name:"string"},description:""},multiplier:{required:!1,tsType:{name:"union",raw:"number | string | keyof MultiplierStyle",elements:[{name:"number"},{name:"string"},{name:"signature",type:"object",raw:`{
  mini: number;
  tiny: number;
  small: number;
  medium: number;
  large: number;
  big: number;
  huge: number;
  massive: number;
}`,signature:{properties:[{key:"mini",value:{name:"number",required:!0}},{key:"tiny",value:{name:"number",required:!0}},{key:"small",value:{name:"number",required:!0}},{key:"medium",value:{name:"number",required:!0}},{key:"large",value:{name:"number",required:!0}},{key:"big",value:{name:"number",required:!0}},{key:"huge",value:{name:"number",required:!0}},{key:"massive",value:{name:"number",required:!0}}]}}]},description:""}}};export{R as T};
