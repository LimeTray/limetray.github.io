import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-76d766bc.js";import"./_commonjsHelpers-de833af9.js";import"./Input-252c8987.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-83c43633.js";import"./factories-499f84ec.js";import"./clsx.m-64db5d3b.js";import"./getElementType-727593ce.js";import"./map-61d3de0c.js";import"./childrenUtils-decbf9e9.js";import"./get-9dca3307.js";import"./invoke-834bb7a1.js";import"./htmlPropsUtils-fd491f3d.js";import"./Button-4d423377.js";import"./Icon-7990d6af.js";import"./Label-7a818bf9.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./Portal-e77ebf16.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-c71277a2.js";import"./isEmpty-38656364.js";import"./index-d2fcf037.js";import"./_arrayReduce-865b0d3f.js";import"./index-90e0ca33.js";import"./styled-components.browser.esm-675ea4f2.js";const K={component:p,title:"SearchComponent",tags:["autodocs"]},h=m=>{const[l,i]=c.useState(""),s=n=>{i(n.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...m,onChange:s})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div style={{
    width: "200px"
  }}>
      <SearchComponent {...args} onChange={handleChange} />
    </div>;
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,K as default};
