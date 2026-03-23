import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-b141130c.js";import"./_commonjsHelpers-de833af9.js";import"./Input-94f4c1a5.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-c2454020.js";import"./ModernAutoControlledComponent-9b4bd770.js";import"./assertThisInitialized-081f9914.js";import"./factories-d6e88bd9.js";import"./getElementType-0ca87dce.js";import"./index-4fee7e45.js";import"./map-db19bd84.js";import"./childrenUtils-250e70c5.js";import"./htmlPropsUtils-25182749.js";import"./Button-97fd5a94.js";import"./Icon-5cfe3eb1.js";import"./Label-11060fec.js";import"./Portal-86734c92.js";import"./Search-0f2c1240.js";import"./isEmpty-f7f0c885.js";import"./index-e8ec4132.js";import"./_arrayReduce-865b0d3f.js";import"./index-6af4c633.js";import"./styled-components.browser.esm-675ea4f2.js";const A={component:p,title:"SearchComponent",tags:["autodocs"]},h=s=>{const[l,m]=c.useState(""),n=i=>{m(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...s,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div style={{
    width: "200px"
  }}>
      <SearchComponent {...args} onChange={handleChange} />
    </div>;
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,A as default};
