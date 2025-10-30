import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-41f1a0bc.js";import"./_commonjsHelpers-de833af9.js";import"./Input-e9b3beb1.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-646822e3.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./htmlPropsUtils-9497f5af.js";import"./Button-13ce16b7.js";import"./Icon-33b7fdc8.js";import"./Label-32ef75b5.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./Portal-25fcd847.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-de48c75c.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./index-4ec9b07a.js";const B={component:p,title:"SearchComponent",tags:["autodocs"]},h=m=>{const[l,s]=c.useState(""),n=i=>{s(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...m,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div style={{
    width: "200px"
  }}>
      <SearchComponent {...args} onChange={handleChange} />
    </div>;
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,B as default};
