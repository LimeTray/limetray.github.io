import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{g as y,r as O}from"./styled-components.browser.esm-f4af7a4c.js";import{t}from"./config-d270d9b6.js";import{T as R}from"./tooltip-9f060db3.js";import"./index-04c7fd94.js";import"./_commonjsHelpers-725317a4.js";import"./Popup-79f6d5ab.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./ModernAutoControlledComponent-9145494f.js";import"./pick-76e2c856.js";import"./_baseSet-aac0c625.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./includes-ceab992c.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";const U={primary:{ringColor:t.colors.primary,centerColor:t.colors.primary,dashed:!1,centerMode:"filled"},primaryDashed:{ringColor:t.colors.primary,centerColor:t.colors.primary,dashed:!0,centerMode:"halfFilled"},secondary:{ringColor:t.colors.secondary,centerColor:t.colors.secondary,dashed:!1,centerMode:"filled"},secondaryDashed:{ringColor:t.colors.secondary,centerColor:t.colors.secondary,dashed:!0,centerMode:"halfFilled"},destructive:{ringColor:t.colors.error,centerColor:t.colors.error,dashed:!1,centerMode:"filled"}},N={small:{outer:"20px",inner:"9px",ring:"2px"},medium:{outer:"28px",inner:"13px",ring:"3px"},large:{outer:"36px",inner:"17px",ring:"4px"}},Y=y.span`
  display: inline-flex;
  align-items: center;
`,A=y.span`
  display: inline-flex;
  align-items: center;
`,Z=y.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({$outerSize:a})=>a};
  height: ${({$outerSize:a})=>a};
  border-radius: 50%;
  flex-shrink: 0;
  box-sizing: border-box;
  border: ${({$ringWidth:a,$dashed:s,$ringColor:i})=>`${a} ${s?"dashed":"solid"} ${i}`};
  background: transparent;
`,B=y.span`
  position: relative;
  width: ${({$innerSize:a})=>a};
  height: ${({$innerSize:a})=>a};
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  border: ${({$centerMode:a,$centerColor:s,$ringWidth:i})=>a==="halfFilled"?"none":`${i} solid ${s}`};
  background: ${({$centerMode:a,$centerColor:s})=>a==="filled"?s:"transparent"};

  &::after {
    content: '';
    display: ${({$centerMode:a})=>a==="halfFilled"?"block":"none"};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
    background: ${({$centerColor:a})=>a};
  }
`,r=({variant:a="secondary",label:s,size:i="medium",customiseVariant:V,showTooltip:k=!0,tooltipPosition:F="top center",className:_,"data-testid":E})=>{const l={...U[a],...V},n=N[i],h=s??a,g=e.jsx(A,{"aria-label":h,children:e.jsx(Z,{$outerSize:n.outer,$ringWidth:n.ring,$ringColor:l.ringColor,$dashed:l.dashed,"aria-hidden":"true",children:e.jsx(B,{$innerSize:n.inner,$centerColor:l.centerColor,$centerMode:l.centerMode,$ringWidth:n.ring})})});return e.jsx(O,{theme:t,children:e.jsx(Y,{className:_,"data-testid":E,children:k?e.jsx(R,{content:h,trigger:g,position:F}):g})})};r.__docgenInfo={description:"",methods:[],displayName:"LtStatus",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'primaryDashed'
| 'secondary'
| 'secondaryDashed'
| 'destructive'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'primaryDashed'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'secondaryDashed'"},{name:"literal",value:"'destructive'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},customiseVariant:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  ringColor: string;
  centerColor: string;
  dashed: boolean;
  centerMode: 'outline' | 'filled' | 'halfFilled';
}`,signature:{properties:[{key:"ringColor",value:{name:"string",required:!0}},{key:"centerColor",value:{name:"string",required:!0}},{key:"dashed",value:{name:"boolean",required:!0}},{key:"centerMode",value:{name:"union",raw:"'outline' | 'filled' | 'halfFilled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'halfFilled'"}],required:!0}}]}}],raw:"Partial<StatusStyles>"},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},tooltipPosition:{required:!1,tsType:{name:"union",raw:`| 'top left'
| 'top right'
| 'bottom right'
| 'bottom left'
| 'right center'
| 'left center'
| 'top center'
| 'bottom center'`,elements:[{name:"literal",value:"'top left'"},{name:"literal",value:"'top right'"},{name:"literal",value:"'bottom right'"},{name:"literal",value:"'bottom left'"},{name:"literal",value:"'right center'"},{name:"literal",value:"'left center'"},{name:"literal",value:"'top center'"},{name:"literal",value:"'bottom center'"}]},description:"",defaultValue:{value:"'top center'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const fe={title:"LtStatus",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","primaryDashed","secondary","secondaryDashed","destructive"]},size:{control:{type:"select"},options:["small","medium","large"]},showTooltip:{control:{type:"boolean"}},label:{control:"text"}}},o={args:{variant:"primary",label:"Published",size:"medium"}},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx(r,{variant:"secondary",label:"Draft"}),e.jsx(r,{variant:"secondaryDashed",label:"Draft and has changes"}),e.jsx(r,{variant:"primary",label:"Published"}),e.jsx(r,{variant:"primaryDashed",label:"Published and has changes"}),e.jsx(r,{variant:"destructive",label:"Offline"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx(r,{variant:"primary",label:"Published",size:"small"}),e.jsx(r,{variant:"primary",label:"Published",size:"medium"}),e.jsx(r,{variant:"primary",label:"Published",size:"large"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(r,{variant:"primary",label:"primary"}),e.jsx("p",{style:{font:"20px",fontWeight:500},children:"primary"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(r,{variant:"primaryDashed",label:"primaryDashed"}),e.jsx("p",{style:{font:"20px",fontWeight:500},children:"primaryDashed"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(r,{variant:"secondary",label:"secondary"}),e.jsx("p",{style:{font:"20px",fontWeight:500},children:"secondary"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(r,{variant:"secondaryDashed",label:"secondaryDashed"}),e.jsx("p",{style:{font:"20px",fontWeight:500},children:"secondaryDashed"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(r,{variant:"destructive",label:"destructive"}),e.jsx("p",{style:{font:"20px",fontWeight:500},children:"destructive"})]})]})},m={args:{variant:"primaryDashed",label:"Published and has changes",showTooltip:!1}},u={args:{variant:"primaryDashed",label:"Custom warning-style status",size:"small",customiseVariant:{ringColor:"#f2c037",centerColor:"#f2c037",dashed:!0,centerMode:"halfFilled"}}};var f,v,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Published',
    size: 'medium'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,S,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  }}>
      <LtStatus variant="secondary" label="Draft" />
      <LtStatus variant="secondaryDashed" label="Draft and has changes" />
      <LtStatus variant="primary" label="Published" />
      <LtStatus variant="primaryDashed" label="Published and has changes" />
      <LtStatus variant="destructive" label="Offline" />
    </div>
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var j,C,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  }}>
      <LtStatus variant="primary" label="Published" size="small" />
      <LtStatus variant="primary" label="Published" size="medium" />
      <LtStatus variant="primary" label="Published" size="large" />
    </div>
}`,...(T=(C=p.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var $,L,z;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
        <LtStatus variant="primary" label="primary" />
        <p style={{
        font: "20px",
        fontWeight: 500
      }}>primary</p>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
        <LtStatus variant="primaryDashed" label="primaryDashed" />
        <p style={{
        font: "20px",
        fontWeight: 500
      }}>primaryDashed</p>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
        <LtStatus variant="secondary" label="secondary" />
        <p style={{
        font: "20px",
        fontWeight: 500
      }}>secondary</p>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
        <LtStatus variant="secondaryDashed" label="secondaryDashed" />
        <p style={{
        font: "20px",
        fontWeight: 500
      }}>secondaryDashed</p>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
        <LtStatus variant="destructive" label="destructive" />
        <p style={{
        font: "20px",
        fontWeight: 500
      }}>destructive</p>
      </div>
    </div>
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var I,P,W;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'primaryDashed',
    label: 'Published and has changes',
    showTooltip: false
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var w,M,q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'primaryDashed',
    label: 'Custom warning-style status',
    size: 'small',
    customiseVariant: {
      ringColor: '#f2c037',
      centerColor: '#f2c037',
      dashed: true,
      centerMode: 'halfFilled'
    }
  }
}`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const ve=["Default","StatusUseCases","SmallMediumLarge","VariantReference","WithoutTooltip","CustomiseVariantOverride"];export{u as CustomiseVariantOverride,o as Default,p as SmallMediumLarge,d as StatusUseCases,c as VariantReference,m as WithoutTooltip,ve as __namedExportsOrder,fe as default};
