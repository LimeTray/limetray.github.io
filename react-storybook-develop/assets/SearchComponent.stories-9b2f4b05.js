import{j as e}from"./jsx-runtime-8ae9c9ad.js";import{r as c}from"./index-04c7fd94.js";import{S as p}from"./searchComponent-66211013.js";import"./_commonjsHelpers-725317a4.js";import"./Input-21e04e92.js";import"./getElementType-acd63778.js";import"./invoke-58a3b25b.js";import"./includes-ce84422f.js";import"./factories-e576304c.js";import"./clsx.m-5e077714.js";import"./map-eed02b7e.js";import"./childrenUtils-2c3608b2.js";import"./get-2a449dd5.js";import"./htmlPropsUtils-7d6cf03b.js";import"./Button-97519630.js";import"./Icon-d9968253.js";import"./Label-823e724a.js";import"./ModernAutoControlledComponent-9145494f.js";import"./Portal-2918dd9c.js";import"./index-4348461f.js";import"./Ref-0746b26a.js";import"./objectWithoutPropertiesLoose-75170e70.js";import"./Search-308123e2.js";import"./isEmpty-4bdff5b0.js";import"./index-95bd258f.js";import"./_arrayReduce-865b0d3f.js";import"./index-49132820.js";import"./styled-components.browser.esm-b57a6336.js";const F={component:p,title:"SearchComponent",tags:["autodocs"]},h=m=>{const[l,s]=c.useState(""),n=i=>{s(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...m,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
