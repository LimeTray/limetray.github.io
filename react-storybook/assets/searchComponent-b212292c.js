import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{I as p}from"./Input-2c70c87c.js";import{S as i}from"./Search-7d3d7416.js";const t=({placeholder:a,onChange:r})=>{const[o,s]=m.useState(""),c=e=>{s(e.target.value),r(e)};return n.jsx(i,{className:"custom-search",input:n.jsx(p,{icon:{name:"search",color:"green"},iconPosition:"left",placeholder:a,onChange:c,value:o,className:"custom-search-input"})})},d=t;t.__docgenInfo={description:"",methods:[],displayName:"SearchComponent",props:{placeholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{d as S};