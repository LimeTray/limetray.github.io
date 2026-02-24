import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-0a7edce8.js";import"./_commonjsHelpers-de833af9.js";import"./Input-c6093d57.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-8058702b.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./index-4fee7e45.js";import"./factories-f5adea19.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./htmlPropsUtils-923b414b.js";import"./Button-a662ac97.js";import"./Icon-33b7fdc8.js";import"./Label-541ced09.js";import"./ModernAutoControlledComponent-fe68b7fb.js";import"./assertThisInitialized-081f9914.js";import"./Portal-50130825.js";import"./Search-d0565fee.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./index-4350e941.js";import"./styled-components.browser.esm-675ea4f2.js";const B={component:p,title:"SearchComponent",tags:["autodocs"]},h=m=>{const[l,s]=c.useState(""),n=i=>{s(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...m,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
