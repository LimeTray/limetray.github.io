import{j as c}from"./jsx-runtime-8ae9c9ad.js";import{C as i}from"./Checkbox-ab34d2c3.js";import{g as m}from"./styled-components.browser.esm-f4af7a4c.js";import{u as l}from"./ThemeContext-ab9e94eb.js";import{t as e}from"./config-d270d9b6.js";const d=m(i)`
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
`,r=({className:o="",...a})=>{var t;const s=((t=l())==null?void 0:t.theme)==="dark";return c.jsx(d,{$darkMode:s,className:`lt-checkbox ${o}`,...a})},h=r;r.__docgenInfo={description:"",methods:[],displayName:"LtCheckbox",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{h as L};
