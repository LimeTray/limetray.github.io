import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-2f436876.js";import"./_commonjsHelpers-de833af9.js";import"./Input-1caabc1a.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-43fe29aa.js";import"./factories-c6068050.js";import"./clsx.m-10f99be2.js";import"./getElementType-727593ce.js";import"./map-25546da5.js";import"./childrenUtils-34f25e95.js";import"./get-9dca3307.js";import"./invoke-834bb7a1.js";import"./htmlPropsUtils-6da27db3.js";import"./Button-69b249bb.js";import"./Icon-20504660.js";import"./Label-023c9f1b.js";import"./ModernAutoControlledComponent-67368388.js";import"./assertThisInitialized-081f9914.js";import"./Portal-cd8f909f.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-fd04116c.js";import"./isEmpty-e89d99f0.js";import"./index-a2e6dd30.js";import"./_arrayReduce-865b0d3f.js";import"./index-5fa34cbd.js";import"./styled-components.browser.esm-9c5c32f2.js";const K={component:p,title:"SearchComponent",tags:["autodocs"]},h=m=>{const[l,i]=c.useState(""),s=n=>{i(n.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...m,onChange:s})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
