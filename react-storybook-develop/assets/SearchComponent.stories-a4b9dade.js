import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{r as c}from"./index-04c7fd94.js";import{S as p}from"./searchComponent-7a2ff757.js";import"./_commonjsHelpers-725317a4.js";import"./Input-4003f5c3.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./includes-ceab992c.js";import"./factories-559e568f.js";import"./clsx.m-b06f1f65.js";import"./map-d105d6f1.js";import"./childrenUtils-d21e35d1.js";import"./get-2a449dd5.js";import"./htmlPropsUtils-c8ab4bb9.js";import"./Button-8d24c33b.js";import"./Icon-6945f610.js";import"./Label-c1a3398d.js";import"./ModernAutoControlledComponent-9145494f.js";import"./Portal-f57c5e74.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./Search-ce2a06d3.js";import"./isEmpty-0f216811.js";import"./index-edc4e742.js";import"./_arrayReduce-865b0d3f.js";import"./index-c3b335ed.js";import"./styled-components.browser.esm-f4af7a4c.js";const F={component:p,title:"SearchComponent",tags:["autodocs"]},h=m=>{const[l,s]=c.useState(""),n=i=>{s(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...m,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div style={{
    width: "200px"
  }}>
      <SearchComponent {...args} onChange={handleChange} />
    </div>;
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,F as default};
