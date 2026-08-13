import{j as h}from"./jsx-runtime-8406ef1e.js";import{r}from"./index-ad58220e.js";import{L as v}from"./ltCheckBox-a6e15640.js";import"./_commonjsHelpers-de833af9.js";import"./Checkbox-ffba8f4e.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./_baseSet-7eab0e06.js";import"./invoke-834bb7a1.js";import"./getElementType-727593ce.js";import"./clsx.m-10f99be2.js";import"./factories-c6068050.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-6da27db3.js";import"./includes-43fe29aa.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./styled-components.browser.esm-9c5c32f2.js";import"./ThemeContext-71b3bf8d.js";import"./config-1dd99552.js";const W={title:"LtCheckbox",component:v,tags:["autodocs"]},d=e=>{const[L,c]=r.useState(e.checked||!1),[i,o]=r.useState(e.indeterminate||!1);return r.useEffect(()=>{c(e.checked||!1)},[e.checked]),r.useEffect(()=>{o(e.indeterminate||!1)},[e.indeterminate]),h.jsx("div",{style:{padding:"20px"},children:h.jsx(v,{...e,checked:L,indeterminate:i,onChange:(D,m)=>{i?(o(!1),c(!0)):c(!!m.checked),e.onChange&&e.onChange(D,m)}})})},t=d.bind({});t.args={label:"Default Checkbox",checked:!1};const n=d.bind({});n.args={label:"Checked Checkbox",checked:!0};const a=d.bind({});a.args={label:"Indeterminate Checkbox",indeterminate:!0};const s=d.bind({});s.args={label:"Disabled Checkbox",disabled:!0};var k,f,g;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked || false);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  useEffect(() => {
    setChecked(args.checked || false);
  }, [args.checked]);
  useEffect(() => {
    setIndeterminate(args.indeterminate || false);
  }, [args.indeterminate]);
  return <div style={{
    padding: '20px'
  }}>
      <LtCheckbox {...args} checked={checked} indeterminate={indeterminate} onChange={(e, data) => {
      if (indeterminate) {
        setIndeterminate(false);
        setChecked(true);
      } else {
        setChecked(!!data.checked);
      }
      if (args.onChange) {
        args.onChange(e, data);
      }
    }} />
    </div>;
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked || false);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  useEffect(() => {
    setChecked(args.checked || false);
  }, [args.checked]);
  useEffect(() => {
    setIndeterminate(args.indeterminate || false);
  }, [args.indeterminate]);
  return <div style={{
    padding: '20px'
  }}>
      <LtCheckbox {...args} checked={checked} indeterminate={indeterminate} onChange={(e, data) => {
      if (indeterminate) {
        setIndeterminate(false);
        setChecked(true);
      } else {
        setChecked(!!data.checked);
      }
      if (args.onChange) {
        args.onChange(e, data);
      }
    }} />
    </div>;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,b,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked || false);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  useEffect(() => {
    setChecked(args.checked || false);
  }, [args.checked]);
  useEffect(() => {
    setIndeterminate(args.indeterminate || false);
  }, [args.indeterminate]);
  return <div style={{
    padding: '20px'
  }}>
      <LtCheckbox {...args} checked={checked} indeterminate={indeterminate} onChange={(e, data) => {
      if (indeterminate) {
        setIndeterminate(false);
        setChecked(true);
      } else {
        setChecked(!!data.checked);
      }
      if (args.onChange) {
        args.onChange(e, data);
      }
    }} />
    </div>;
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var I,S,E;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked || false);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  useEffect(() => {
    setChecked(args.checked || false);
  }, [args.checked]);
  useEffect(() => {
    setIndeterminate(args.indeterminate || false);
  }, [args.indeterminate]);
  return <div style={{
    padding: '20px'
  }}>
      <LtCheckbox {...args} checked={checked} indeterminate={indeterminate} onChange={(e, data) => {
      if (indeterminate) {
        setIndeterminate(false);
        setChecked(true);
      } else {
        setChecked(!!data.checked);
      }
      if (args.onChange) {
        args.onChange(e, data);
      }
    }} />
    </div>;
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const X=["Default","Checked","Indeterminate","Disabled"];export{n as Checked,t as Default,s as Disabled,a as Indeterminate,X as __namedExportsOrder,W as default};
