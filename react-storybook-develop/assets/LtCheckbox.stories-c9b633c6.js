import{j as h}from"./jsx-runtime-8ae9c9ad.js";import{r}from"./index-04c7fd94.js";import{L as v}from"./ltCheckBox-c13e76e1.js";import"./_commonjsHelpers-725317a4.js";import"./Checkbox-ab34d2c3.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./_baseSet-aac0c625.js";import"./clsx.m-b06f1f65.js";import"./factories-559e568f.js";import"./ModernAutoControlledComponent-9145494f.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./includes-ceab992c.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./index-4348461f.js";import"./styled-components.browser.esm-b57a6336.js";import"./ThemeContext-ab9e94eb.js";import"./config-d270d9b6.js";const Q={title:"LtCheckbox",component:v,tags:["autodocs"]},d=e=>{const[L,c]=r.useState(e.checked||!1),[i,o]=r.useState(e.indeterminate||!1);return r.useEffect(()=>{c(e.checked||!1)},[e.checked]),r.useEffect(()=>{o(e.indeterminate||!1)},[e.indeterminate]),h.jsx("div",{style:{padding:"20px"},children:h.jsx(v,{...e,checked:L,indeterminate:i,onChange:(D,m)=>{i?(o(!1),c(!0)):c(!!m.checked),e.onChange&&e.onChange(D,m)}})})},n=d.bind({});n.args={label:"Default Checkbox",checked:!1};const t=d.bind({});t.args={label:"Checked Checkbox",checked:!0};const a=d.bind({});a.args={label:"Indeterminate Checkbox",indeterminate:!0};const s=d.bind({});s.args={label:"Disabled Checkbox",disabled:!0};var k,f,g;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,b,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const U=["Default","Checked","Indeterminate","Disabled"];export{t as Checked,n as Default,s as Disabled,a as Indeterminate,U as __namedExportsOrder,Q as default};
