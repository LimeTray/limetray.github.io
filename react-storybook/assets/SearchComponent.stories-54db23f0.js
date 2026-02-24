import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-058e1dc0.js";import"./_commonjsHelpers-de833af9.js";import"./Input-3ccf8d1e.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-03b4ffc2.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./map-db19bd84.js";import"./childrenUtils-250e70c5.js";import"./htmlPropsUtils-e61b253b.js";import"./Button-a1cbfca3.js";import"./Icon-5cfe3eb1.js";import"./Label-78d4db42.js";import"./ModernAutoControlledComponent-ac79fba3.js";import"./assertThisInitialized-081f9914.js";import"./Portal-392918f3.js";import"./Search-6f7fbf7f.js";import"./isEmpty-f7f0c885.js";import"./index-e8ec4132.js";import"./_arrayReduce-865b0d3f.js";import"./index-b90b37f7.js";import"./styled-components.browser.esm-675ea4f2.js";const B={component:p,title:"SearchComponent",tags:["autodocs"]},h=m=>{const[l,s]=c.useState(""),n=i=>{s(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...m,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
