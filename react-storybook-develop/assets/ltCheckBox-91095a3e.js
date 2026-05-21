import{j as c}from"./jsx-runtime-8406ef1e.js";import{C as d}from"./Checkbox-365a731f.js";import{d as i}from"./styled-components.browser.esm-675ea4f2.js";import{u as m}from"./ThemeContext-71b3bf8d.js";import{t as e}from"./config-d270d9b6.js";const l=i(d)`
  &.ui.checkbox input:checked ~ label:after,
  &.ui.checkbox input:indeterminate ~ label:after {
    border-radius: ${e.borderRadius.small};
    background: ${e.colors.primary} !important;
    color: ${e.colors.white} !important;
    font-size: 0.7em;
  }

  &.ui.checkbox label {
    color: ${({$darkMode:o})=>o?e.colors.darkModeText:e.colors.text};
    font-size: 15px;
  }
`,r=({className:o="",...a})=>{var t;const s=((t=m())==null?void 0:t.theme)==="dark";return c.jsx(l,{$darkMode:s,className:`lt-checkbox ${o}`,...a})},h=r;r.__docgenInfo={description:"",methods:[],displayName:"LtCheckbox",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{h as L};
