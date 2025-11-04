import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as p}from"./index-ad58220e.js";import{T as Ue}from"./tickIcon-5d45ebc5.js";import{C as Je}from"./closeIcon-fe6dfcab.js";import{I as T}from"./Icon-370c2d23.js";import{S as ra}from"./stringConstants-f1def6f8.js";import{a as Ut}from"./appConstants-0f4a1d00.js";import{m as R,d as o,l as O}from"./styled-components.browser.esm-675ea4f2.js";import{b as en}from"./index-4fee7e45.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";const Ht=({width:e,height:i,...c})=>{const f={svg:{display:"block",width:e||"100%",height:i||"100%",stroke:"#6b7280",fill:"#6b7280"},rect:{fill:"none",strokeWidth:"32px"},path:{fill:"none",strokeWidth:"32px"}};return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:f.svg,...c,children:[n.jsx("rect",{strokeLinejoin:"round",x:"48",y:"80",width:"416",height:"384",rx:"48",style:f.rect}),n.jsx("circle",{cx:"296",cy:"232",r:"24"}),n.jsx("circle",{cx:"376",cy:"232",r:"24"}),n.jsx("circle",{cx:"296",cy:"312",r:"24"}),n.jsx("circle",{cx:"376",cy:"312",r:"24"}),n.jsx("circle",{cx:"136",cy:"312",r:"24"}),n.jsx("circle",{cx:"216",cy:"312",r:"24"}),n.jsx("circle",{cx:"136",cy:"392",r:"24"}),n.jsx("circle",{cx:"216",cy:"392",r:"24"}),n.jsx("circle",{cx:"296",cy:"392",r:"24"}),n.jsx("path",{strokeLinejoin:"round",strokeLinecap:"round",d:"M128 48v32M384 48v32",style:f.path}),n.jsx("path",{strokeLinejoin:"round",d:"M464 160H48",style:f.path})]})};Ht.__docgenInfo={description:"",methods:[],displayName:"CalendarOutlineIcon",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}},composes:["SVGProps"]};const oa=R`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ia=R`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;R`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;const la=R`
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`,ca=R`
  0% { background-color: rgba(59, 130, 246, 0.2); }
  100% { background-color: #e6ecff; }
`,da=R`
  0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.7; transform: translateX(-50%) scale(1.2); }
`,ua=R`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ga=R`
  0% { background-color: rgba(59, 130, 246, 0.2); }
  100% { background-color: rgba(59, 130, 246, 0.05); }
`,pa=o.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.3s ease;
  z-index: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif;

  .range-selector-icon{
    margin: 0;
  }
`,ze=o.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.$isMobile?"12px 16px":"8px 12px"};
  border: 1px solid ${e=>{var i;return(i=e.$customStyles)!=null&&i.borderColor?e.$customStyles.borderColor:e.$hasError?"#ef4444":e.$isOpen?"#3b82f6":"#d1d5db"}};
  border-radius: ${e=>{var i;return((i=e.$customStyles)==null?void 0:i.borderRadius)||(e.$isMobile?"8px":"6px")}};
  background-color: ${e=>{var i;return(i=e.$customStyles)!=null&&i.backgroundColor?e.$customStyles.backgroundColor:e.$isDisabled?"#f9fafb":"#fff"}};
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${e=>e.$isDisabled?.6:1};

  /* Apply custom styles */
  ${e=>e.$customStyles&&Object.entries(e.$customStyles).map(([i,c])=>["borderColor","borderRadius","backgroundColor"].includes(i)?"":`${i.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${c};`).join("")}

  &:hover {
    border-color: ${e=>{var i;return(i=e.$customStyles)!=null&&i.borderColor?e.$customStyles.borderColor:e.$hasError?"#dc2626":e.$isDisabled?"#d1d5db":"#9ca3af"}};
    box-shadow: ${e=>{var i;return e.$isDisabled?"none":((i=e.$customStyles)==null?void 0:i.boxShadow)||"0 2px 4px rgba(0, 0, 0, 0.1)"}};
  }

  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    outline: none;
  }
`,ha=o.div`
  margin-right: 10px;
  color: #6b7280;
  font-size: ${e=>e.$isMobile?"18px":"16px"};
  transition: color 0.2s ease;

  ${ze}:hover & {
    color: #3b82f6;
  }
`,ma=o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  color: #1f2937;
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  transition: color 0.2s ease;
`,ba=o.div`
  margin-left: 8px;
  color: #6b7280;
  font-size: 16px;
  transition: transform 0.2s ease, color 0.2s ease;

  ${ze}:hover & {
    color: #3b82f6;
  }

  transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)"};
`,nn=o.div`
  background-color: white;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"8px"};
  box-shadow: ${e=>e.$isMobile?"0 -4px 20px rgba(0, 0, 0, 0.15)":"0 4px 20px rgba(0, 0, 0, 0.15)"};
  margin-top: 8px;
  z-index: 9999;
  overflow: hidden;
  position: ${e=>e.$isMobile?"fixed":"absolute"};
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.$isMobile&&O`
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
    z-index: 99999;
    animation: ${ia} 0.3s ease-out;
  `}
`,tn=o.div`
  width: 100%;
  overflow: hidden;
  max-height: 85vh;
  overflow-y: auto;
  background-color: white;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"8px"};

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 4px;
    transition: background 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bfc6d1;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`,an=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isMobile?"16px":"12px 16px"};
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
  position: ${e=>e.$isMobile?"sticky":"static"};
  top: ${e=>e.$isMobile?"0":"auto"};
  z-index: 10;
  border-radius: ${e=>e.$isMobile?"16px 16px 0 0":"0"};
`,sn=o.h4`
  margin: 0;
  font-size: ${e=>e.$isMobile?"16px":"14px"};
  font-weight: 600;
  color: #111827;
`,rn=o.button`
  background: transparent;
  border: none;
  padding: ${e=>e.$isMobile?"8px":"6px"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.$isMobile?"18px":"16px"};
  cursor: pointer;
  color: #6b7280;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,on=o.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: white;
`,ln=o.div`
  flex: 1;
  margin-bottom: 0;
  min-width: 0;

  @media (max-width: 768px) {
    padding: 5px 12px;
    border-right: none;
  }
`,cn=o.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background-color: white;
  padding: 16px;
  position: relative;
`,$e=o.div`
  position: absolute;
  z-index: 10;
  top: 8px;
  ${e=>e.$position==="left"?"left: 16px;":"right: 16px;"}
`,Ce=o.button`
  background: #f3f4f6;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e5e7eb;
    color: #111827;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,fa=o.div`
  flex: 1;
  min-width: 240px;
`,xa=o.div`
  text-align: center;
  font-size: 14px;
  margin: 0 0 12px 0;
  color: #111827;
  font-weight: 600;
`,Da=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin-bottom: 8px;
`,va=o.div`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  padding: 8px 0;
`,Ta=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
`,ya=o.div`
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${e=>e.$isDisabled?"not-allowed":"pointer"};
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  color: ${e=>e.$isDisabled||!e.$isCurrentMonth?"#9ca3af":e.$isSelected?"white":"#111827"};
  position: relative;
  background: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":e.$isInRange?"#e6ecff":e.$isInHoverRange?"#edf2ff":"#f9fafb"};
  transition: all 0.2s ease;
  border-radius: 0;
  z-index: ${e=>e.$isEnd?3:e.$isSelected?2:1};
  opacity: ${e=>e.$isDisabled?.5:1};

  &:hover {
    background-color: ${e=>e.$isDisabled?"#f3f4f6":e.$isSelected?"#14223f":"rgba(59, 130, 246, 0.1)"};
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>e.$isDisabled?"none":"0 0 0 3px rgba(59, 130, 246, 0.2)"};
  }

  ${e=>e.$isSelected&&!e.$isDisabled&&O`
    animation: ${la} 0.3s ease-in-out;
  `}

  ${e=>e.$isInRange&&!e.$isDisabled&&O`
    animation: ${ca} 0.3s ease-in-out;
  `}

  ${e=>e.$isToday&&!e.$isDisabled&&O`
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background-color: #4f7bff;
      border-radius: 50%;
      animation: ${da} 2s ease-in-out infinite;
    }
  `}
`,dn=o.div`
  width: 180px;
  border-left: 1px solid #e5e7eb;
  background-color: #f9fafb;
  overflow-y: auto;
  max-height: 500px;
`,wa=o.div`
  width: 100%;
  background-color: white;
  border-radius: ${e=>(e.$isMobile,"8px")};
  box-shadow: ${e=>e.$isMobile?"0 4px 15px rgba(0, 0, 0, 0.1)":"0 2px 10px rgba(0, 0, 0, 0.12)"};
  z-index: 10000;
  opacity: ${e=>e.$isOpen?1:0};
  transform: translateY(${e=>e.$isOpen?"0":"-10px"});
  transition: all 0.2s ease;
  animation: ${oa} 0.15s ease-out;
  border: ${e=>e.$isMobile?"1px solid #e5e7eb":"none"};
  margin-top: 4px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  max-height: 80vh;
  overflow-y: auto;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 4px;
    transition: background 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bfc6d1;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`,He=o.ul`
  list-style: none;
  padding: 4px 0;
  margin: 0;
`,Qe=o.li`
  display: flex;
  align-items: center;
  padding: ${e=>e.$isMobile?"12px 16px":"10px 16px"};
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  color: ${e=>e.$isActive?"#3b82f6":"#374151"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  background-color: ${e=>e.$isActive?"rgba(59, 130, 246, 0.05)":"transparent"};
  font-weight: ${e=>e.$isActive?"500":"normal"};

  &:hover {
    background-color: rgba(59, 130, 246, 0.05);
  }

  &:focus {
    outline: none;
    background-color: rgba(59, 130, 246, 0.1);
    box-shadow: inset 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  ${e=>e.$isActive&&O`
    animation: ${ga} 0.3s ease-in-out;
  `}

  ${e=>e.$isCustom&&O`
    border-top: 1px solid #e5e7eb;
    margin-top: 4px;
    padding-top: 12px;
    color: #3b82f6;
    font-weight: 500;
  `}
`,Ke=o.span`
  width: 20px;
  margin-right: ${e=>e.$isMobile?"12px":"8px"};
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s ease;
`,un=o.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.$isMobile?"16px":"12px"};
  padding: ${e=>e.$isMobile?"16px":"12px 16px"};
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
  position: sticky;
  bottom: 0;
  z-index: 10;
`,Ee=o.button`
  padding: 12px 16px;
  border-radius: 6px;
  font-size: ${e=>e.$isMobile?"16px":"14px"};
  font-weight: 500;
  cursor: ${e=>e.$isLoading?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  flex: 1;

  ${e=>e.$variant==="cancel"&&O`
    background-color: transparent;
    border: 1px solid #d1d5db;
    color: #4b5563;

    &:hover {
      background-color: #f3f4f6;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `}

  ${e=>e.$variant==="apply"&&O`
    background-color: #3b82f6;
    border: 1px solid #3b82f6;
    color: white;

    &:hover {
      background-color: #2563eb;
      box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: none;
    }

    ${e.$isLoading&&O`
      color: transparent;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        margin: -8px 0 0 -8px;
        border: 2px solid transparent;
        border-top: 2px solid white;
        border-radius: 50%;
        animation: ${ua} 1s linear infinite;
      }
    `}
  `}
`,gn=o.div`
  border-top: 1px solid #e5e7eb;
  padding: ${e=>(e.$isMobile,"16px")};
  background-color: white;
`,pn=o.div`
  display: flex;
  gap: ${e=>e.$isMobile?"20px":"24px"};
  flex-direction: ${e=>(e.$isMobile,"row")};

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`,Ae=o.div`
  flex: 1;
  max-width: ${e=>e.$isMobile?"100%":"300px"};
  display: flex;
  flex-direction: column;
`,ke=o.div`
  font-size: 14px;
  color: #111827;
  margin-bottom: 8px;
  font-weight: 500;
`,Me=o.input`
  padding: 8px 12px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#d1d5db"};
  border-radius: 6px;
  font-size: ${e=>e.$isMobile?"16px":"14px"};
  background-color: white;
  color: #111827;
  flex: 1;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: ${e=>e.$hasError?"#dc2626":"#9ca3af"};
  }
`,hn=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #6b7280;
  padding: ${e=>e.$isMobile?"8px 0":"0 16px"};
  margin-top: ${e=>e.$isMobile?"0":"22px"};
`,mn=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.$isMobile?"16px":"8px 0"};
  border-bottom: 1px solid #e5e7eb;
`,_e=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Oe=o.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
`,je=o.div`
  font-size: ${e=>e.$isMobile?"15px":"14px"};
  font-weight: 500;
  color: #111827;
`,bn=o.div`
  margin: 0 16px;
  font-size: 16px;
  color: #6b7280;
`,fn=o.div`
  padding: 16px;
  width: 100%;
`,xn=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Ve=o.button`
  background: #f3f4f6;
  border: none;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e5e7eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,Dn=o.span`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`,vn=o.div`
  width: 100%;
`,Sa=o.div`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(31, 41, 55, 0.45); // semi-transparent dark
  transition: opacity 0.2s;
`,{DATE_RANGE_SELECTOR:{QUICK_OPTIONS:_,DAYS_OF_WEEK:N},DATE_RANGE_SELECTOR:m}=ra,{DATE_RANGE_QUICK_OPTIONS:l}=Ut,Tn=(e,i)=>{const c=new Date(e);return c.setMonth(c.getMonth()+i),c},q=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),yn=e=>{try{let i=e;return e.split(":").length===2&&(i=`${e}:00`),new Date(`2000-01-01T${i}`).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}catch{return e}},he=(e,i)=>e.getFullYear()===i.getFullYear()&&e.getMonth()===i.getMonth()&&e.getDate()===i.getDate(),wn=(e,i,c)=>{const f=new Date(e.getFullYear(),e.getMonth(),e.getDate()),w=new Date(i.getFullYear(),i.getMonth(),i.getDate()),Y=new Date(c.getFullYear(),c.getMonth(),c.getDate());return f>=w&&f<=Y},W=()=>{const e=new Date,i=e.getHours().toString().padStart(2,"0"),c=e.getMinutes().toString().padStart(2,"0");return`${i}:${c}`},Sn=(e,i)=>{const[c,f]=i.split(":").map(Number),w=new Date(e);return w.setHours(c,f,0,0),w},Qt=({value:e,onChange:i,includeTime:c=!1,disabled:f=!1,error:w=!1,popoverTitle:Y,minDate:I,customStyles:zt={}})=>{const[v,S]=p.useState(!1),[ue,ge]=p.useState(!1),[x,j]=p.useState(new Date),[$,C]=p.useState(new Date),[Ge,Gt]=p.useState(null),[Re,Ye]=p.useState(!1),[y,Ie]=p.useState(new Date),[Ft,Bt]=p.useState(""),Ne=p.useRef(null),be=p.useRef(null),We=p.useRef(null),[s,Zt]=p.useState(window.innerWidth<768),fe=[{value:l.TODAY,label:_.TODAY},{value:l.YESTERDAY,label:_.YESTERDAY},{value:l.LAST_7_DAYS,label:_.LAST_7_DAYS},{value:l.LAST_14_DAYS,label:_.LAST_14_DAYS},{value:l.LAST_30_DAYS,label:_.LAST_30_DAYS},{value:l.THIS_WEEK,label:_.THIS_WEEK},{value:l.LAST_WEEK,label:_.LAST_WEEK},{value:l.THIS_MONTH,label:_.THIS_MONTH},{value:l.LAST_MONTH,label:_.LAST_MONTH}];s&&fe.push({value:l.CUSTOM,label:m.CUSTOM_RANGE});const[xe,E]=p.useState("00:00"),[De,A]=p.useState(W()),[k,ve]=p.useState(typeof e=="string"&&Object.values(l).includes(e)?e:null);p.useEffect(()=>{typeof e=="string"&&Object.values(l).includes(e)?ve(e):ve(null)},[e]),p.useEffect(()=>{const t=()=>{Zt(window.innerWidth<768)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),p.useEffect(()=>{if(!e||e===l.TODAY){const t=new Date;j(t),C(t),c&&(E("00:00"),A(W()))}else if(typeof e=="string"&&e.startsWith("custom_")){const t=e.split("_");t.length>=3&&(j(new Date(t[1])),C(new Date(t[2])),c&&t.length>=5?(E(t[3]),A(t[4])):c&&(E("00:00"),A(W())))}else if(typeof e=="number"){const t=new Date(e);j(t),C(t),c&&(E("00:00"),A(W()))}else if(typeof e=="object"&&e!==null&&"startEpoch"in e)j(new Date(e.startDate)),C(new Date(e.endDate)),c&&e.startTime&&e.endTime?(E(e.startTime),A(e.endTime)):c&&(E("00:00"),A(W()));else if(typeof e=="string"){const t=new Date;let a=new Date(t),r=new Date(t);switch(e){case l.YESTERDAY:a.setDate(t.getDate()-1),r.setDate(t.getDate()-1);break;case l.LAST_7_DAYS:a.setDate(t.getDate()-6);break;case l.LAST_14_DAYS:a.setDate(t.getDate()-13);break;case l.LAST_30_DAYS:a.setDate(t.getDate()-29);break;case l.THIS_WEEK:{const u=t.getDay();a.setDate(t.getDate()-u),r.setDate(a.getDate()+6);break}case l.LAST_WEEK:{const u=t.getDay();a.setDate(t.getDate()-u-7),r.setDate(a.getDate()+6);break}case l.THIS_MONTH:{a=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getFullYear(),t.getMonth()+1,0);break}case l.LAST_MONTH:{a=new Date(t.getFullYear(),t.getMonth()-1,1),r=new Date(t.getFullYear(),t.getMonth(),0);break}}j(a),C(r),c&&(E("00:00"),A(W()))}Ie(new Date(x))},[e,c]),p.useEffect(()=>{Xt()},[x,$]),p.useEffect(()=>{const t=a=>{v&&be.current&&!be.current.contains(a.target)&&Ne.current&&!Ne.current.contains(a.target)&&S(!1),ue&&We.current&&!We.current.contains(a.target)&&!a.composedPath().some(r=>r instanceof HTMLElement&&r.className&&r.className.toString().includes("quickOptionsToggle"))&&ge(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[v,ue]);const Xt=()=>{const t=q(x),a=q($);let r="";if(he(x,$)?r=t:r=`${t} - ${a}`,c){const u=yn(xe),h=yn(De);he(x,$)?r+=` (${u} - ${h})`:r+=` (${u} to ${h})`}Bt(r)},Le=t=>I?t<new Date(I.getFullYear(),I.getMonth(),I.getDate()):!1,Jt=t=>{Le(t)||(Re?(t<x?(C(x),j(t)):C(t),Ye(!1)):(j(t),C(t),Ye(!0)))},ea=t=>{Re&&!Le(t)&&Gt(t)},Te=()=>{Ie(t=>{const a=new Date(t);return a.setMonth(a.getMonth()-1),I&&a<new Date(I.getFullYear(),I.getMonth(),1)?t:a})},ye=()=>{Ie(t=>{const a=new Date(t);return a.setMonth(a.getMonth()+1),a})},Fe=(t,a,r,u)=>{let h,b;if(c&&r&&u){const D=Sn(t,r),M=Sn(a,u);h=D.getTime(),b=M.getTime()}else{const D=new Date(t);D.setHours(0,0,0,0);const M=new Date(a);M.setHours(23,59,59,999),h=D.getTime(),b=M.getTime()}return{startEpoch:h,endEpoch:b,startDate:t.toISOString(),endDate:a.toISOString(),startTime:r,endTime:u}},Be=()=>{const t=Fe(x,$,c?xe:null,c?De:null);i(t),S(!1)},qe=t=>{if(t===l.CUSTOM){ge(!1),Ye(!1),S(!0),ve(null);return}const a=new Date;let r=new Date(a),u=new Date(a);switch(t){case l.TODAY:break;case l.YESTERDAY:r.setDate(a.getDate()-1),u.setDate(a.getDate()-1);break;case l.LAST_7_DAYS:r.setDate(a.getDate()-6);break;case l.LAST_14_DAYS:r.setDate(a.getDate()-13);break;case l.LAST_30_DAYS:r.setDate(a.getDate()-29);break;case l.THIS_WEEK:{const D=a.getDay();r.setDate(a.getDate()-D),u.setDate(r.getDate()+6);break}case l.LAST_WEEK:{const D=a.getDay();r.setDate(a.getDate()-D-7),u.setDate(r.getDate()+6);break}case l.THIS_MONTH:{r=new Date(a.getFullYear(),a.getMonth(),1),u=new Date(a.getFullYear(),a.getMonth()+1,0);break}case l.LAST_MONTH:{r=new Date(a.getFullYear(),a.getMonth()-1,1),u=new Date(a.getFullYear(),a.getMonth(),0);break}}j(r),C(u);const h=c?"00:00":null,b=c?W():null;if(c&&(E(h),A(b)),ge(!1),ve(t),s){const D=Fe(r,u,h,b);i(D)}},na=()=>{s?(ge(!ue),S(!1)):(S(!v),ge(!1))},ta=t=>{const a=t.getFullYear(),r=t.getMonth(),h=new Date(a,r,1).getDay(),D=new Date(a,r+1,0).getDate(),M=h,Se=[];if(M>0){const Xe=new Date(a,r,0).getDate();for(let Pe=Xe-M+1;Pe<=Xe;Pe++)Se.push(new Date(a,r-1,Pe))}const pe=[];for(let V=1;V<=D;V++)pe.push(new Date(a,r,V));const Ze=[],sa=42-Se.length-pe.length;for(let V=1;V<=sa;V++)Ze.push(new Date(a,r+1,V));return[...Se,...pe,...Ze]},aa=(t,a=!0)=>{const r=he(t,x),u=he(t,$),h=r||u,b=Le(t),D=wn(t,x,$)&&!h,M=!!(Re&&Ge&&!h&&!b&&wn(t,x,Ge)&&t>x),pe=he(t,new Date);return n.jsx(ya,{$isCurrentMonth:a,$isSelected:h,$isStart:r,$isEnd:u,$isInRange:D,$isInHoverRange:M,$isToday:pe,$isMobile:s,$isDisabled:b,onClick:()=>Jt(t),onMouseEnter:()=>ea(t),children:t.getDate()},t.toISOString())},L=t=>{const a=t.toLocaleString("default",{month:"long"}),r=t.getFullYear(),u=ta(t),h=[N.SUNDAY,N.MONDAY,N.TUESDAY,N.WEDNESDAY,N.THURSDAY,N.FRIDAY,N.SATURDAY];return n.jsxs(fa,{children:[!s&&n.jsx("div",{children:n.jsxs(xa,{children:[a," ",r]})}),n.jsx(Da,{children:h.map(b=>n.jsx(va,{children:b},b))}),n.jsx(Ta,{children:u.map(b=>aa(b,b.getMonth()===t.getMonth()))})]})},we=(t,a)=>{a?E(t):A(t)};return p.useEffect(()=>(s&&v?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s,v]),n.jsxs(pa,{children:[n.jsxs(ze,{$isMobile:s,$isOpen:v,$hasError:w,$isDisabled:f,$customStyles:zt,onClick:f?void 0:na,ref:Ne,children:[n.jsx(ha,{$isMobile:s,children:n.jsx(Ht,{width:"20px"})}),n.jsx(ma,{$isMobile:s,children:Ft}),n.jsx(ba,{$isOpen:v,children:n.jsx(T,{name:"chevron down",className:"range-selector-icon"})})]}),s&&ue&&n.jsx(wa,{$isMobile:s,$isOpen:ue,ref:We,children:n.jsx(He,{children:fe.map(t=>n.jsxs(Qe,{$isActive:k===t.value,$isCustom:t.value===l.CUSTOM,$isMobile:s,onClick:()=>qe(t.value),children:[n.jsxs(Ke,{$isMobile:s,children:[k===t.value&&n.jsx(Ue,{fill:"#3b82f6"}),t.value===l.CUSTOM&&k!==t.value&&n.jsx(T,{name:"calendar outline",className:"range-selector-icon"})]}),t.label]},t.value))})}),s&&v&&en.createPortal(n.jsx(Sa,{}),document.body),s&&v&&en.createPortal(n.jsx(nn,{$isMobile:s,$isOpen:v,ref:be,children:n.jsxs(tn,{$isMobile:s,children:[n.jsxs(an,{$isMobile:s,children:[n.jsx(sn,{$isMobile:s,children:Y||m.SELECT_DATE_RANGE}),n.jsx(rn,{$isMobile:s,onClick:()=>S(!1),children:n.jsx(Je,{style:{width:"10px",height:"10px"},strokeColor:"#6b7280"})})]}),n.jsxs("div",{children:[n.jsxs(on,{children:[n.jsxs(ln,{children:[n.jsxs(mn,{$isMobile:s,children:[n.jsxs(_e,{children:[n.jsx(Oe,{$isMobile:s,children:m.START_DATE}),n.jsx(je,{$isMobile:s,children:q(x)})]}),n.jsx(bn,{children:"-"}),n.jsxs(_e,{children:[n.jsx(Oe,{$isMobile:s,children:m.END_DATE}),n.jsx(je,{$isMobile:s,children:q($)})]})]}),s?n.jsxs(fn,{children:[n.jsxs(xn,{children:[n.jsx(Ve,{onClick:Te,children:n.jsx(T,{name:"chevron left",className:"range-selector-icon"})}),n.jsxs(Dn,{children:[y.toLocaleString("default",{month:"long"})," ",y.getFullYear()]}),n.jsx(Ve,{onClick:ye,children:n.jsx(T,{name:"chevron right",className:"range-selector-icon"})})]}),n.jsx(vn,{children:L(y)})]}):n.jsxs(cn,{children:[n.jsx($e,{$position:"left",children:n.jsx(Ce,{onClick:Te,children:n.jsx(T,{name:"chevron left",className:"range-selector-icon"})})}),L(y),L(Tn(y,1)),n.jsx($e,{$position:"right",children:n.jsx(Ce,{onClick:ye,children:n.jsx(T,{name:"chevron right",className:"range-selector-icon"})})})]}),c&&n.jsx(gn,{$isMobile:s,children:n.jsxs(pn,{$isMobile:s,children:[n.jsxs(Ae,{$isMobile:s,children:[n.jsx(ke,{children:m.START_TIME}),n.jsx(Me,{type:"time",$isMobile:s,value:xe,onChange:t=>we(t.target.value,!0)})]}),n.jsx(hn,{$isMobile:s,children:m.TO}),n.jsxs(Ae,{$isMobile:s,children:[n.jsx(ke,{children:m.END_TIME}),n.jsx(Me,{type:"time",$isMobile:s,value:De,onChange:t=>we(t.target.value,!1)})]})]})})]}),!s&&n.jsx(dn,{children:n.jsx(He,{children:fe.map(t=>n.jsxs(Qe,{$isActive:k===t.value,$isCustom:t.value===l.CUSTOM,$isMobile:!1,onClick:()=>qe(t.value),children:[n.jsxs(Ke,{$isMobile:!1,children:[k===t.value&&n.jsx(Ue,{fill:"#3b82f6"}),t.value===l.CUSTOM&&k!==t.value&&n.jsx(T,{name:"calendar outline",className:"range-selector-icon"})]}),t.label]},t.value))})})]}),n.jsxs(un,{$isMobile:s,children:[n.jsx(Ee,{$variant:"cancel",$isMobile:s,onClick:()=>S(!1),children:m.CANCEL}),n.jsx(Ee,{$variant:"apply",$isMobile:s,onClick:Be,children:m.APPLY})]})]})]})}),document.body),!s&&v&&n.jsx(nn,{$isMobile:s,$isOpen:v,ref:be,children:n.jsxs(tn,{$isMobile:s,children:[n.jsxs(an,{$isMobile:s,children:[n.jsx(sn,{$isMobile:s,children:Y||m.SELECT_DATE_RANGE}),n.jsx(rn,{$isMobile:s,onClick:()=>S(!1),children:n.jsx(Je,{style:{width:"10px",height:"10px"},strokeColor:"#6b7280"})})]}),n.jsxs("div",{children:[n.jsxs(on,{children:[n.jsxs(ln,{children:[n.jsxs(mn,{$isMobile:s,children:[n.jsxs(_e,{children:[n.jsx(Oe,{$isMobile:s,children:m.START_DATE}),n.jsx(je,{$isMobile:s,children:q(x)})]}),n.jsx(bn,{children:"-"}),n.jsxs(_e,{children:[n.jsx(Oe,{$isMobile:s,children:m.END_DATE}),n.jsx(je,{$isMobile:s,children:q($)})]})]}),s?n.jsxs(fn,{children:[n.jsxs(xn,{children:[n.jsx(Ve,{onClick:Te,children:n.jsx(T,{name:"chevron left",className:"range-selector-icon"})}),n.jsxs(Dn,{children:[y.toLocaleString("default",{month:"long"})," ",y.getFullYear()]}),n.jsx(Ve,{onClick:ye,children:n.jsx(T,{name:"chevron right",className:"range-selector-icon"})})]}),n.jsx(vn,{children:L(y)})]}):n.jsxs(cn,{children:[n.jsx($e,{$position:"left",children:n.jsx(Ce,{onClick:Te,children:n.jsx(T,{name:"chevron left",className:"range-selector-icon"})})}),L(y),L(Tn(y,1)),n.jsx($e,{$position:"right",children:n.jsx(Ce,{onClick:ye,children:n.jsx(T,{name:"chevron right",className:"range-selector-icon"})})})]}),c&&n.jsx(gn,{$isMobile:s,children:n.jsxs(pn,{$isMobile:s,children:[n.jsxs(Ae,{$isMobile:s,children:[n.jsx(ke,{children:m.START_TIME}),n.jsx(Me,{type:"time",$isMobile:s,value:xe,onChange:t=>we(t.target.value,!0)})]}),n.jsx(hn,{$isMobile:s,children:m.TO}),n.jsxs(Ae,{$isMobile:s,children:[n.jsx(ke,{children:m.END_TIME}),n.jsx(Me,{type:"time",$isMobile:s,value:De,onChange:t=>we(t.target.value,!1)})]})]})})]}),!s&&n.jsx(dn,{children:n.jsx(He,{children:fe.map(t=>n.jsxs(Qe,{$isActive:k===t.value,$isCustom:t.value===l.CUSTOM,$isMobile:!1,onClick:()=>qe(t.value),children:[n.jsxs(Ke,{$isMobile:!1,children:[k===t.value&&n.jsx(Ue,{fill:"#3b82f6"}),t.value===l.CUSTOM&&k!==t.value&&n.jsx(T,{name:"calendar outline",className:"range-selector-icon"})]}),t.label]},t.value))})})]}),n.jsxs(un,{$isMobile:s,children:[n.jsx(Ee,{$variant:"cancel",$isMobile:s,onClick:()=>S(!1),children:m.CANCEL}),n.jsx(Ee,{$variant:"apply",$isMobile:s,onClick:Be,children:m.APPLY})]})]})]})})]})},Kt=Qt;Qt.__docgenInfo={description:"",methods:[],displayName:"DateRangeSelector",props:{value:{required:!1,tsType:{name:"union",raw:`string | number | {
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}`,elements:[{name:"string"},{name:"number"},{name:"signature",type:"object",raw:`{
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}`,signature:{properties:[{key:"startEpoch",value:{name:"number",required:!0}},{key:"endEpoch",value:{name:"number",required:!0}},{key:"startDate",value:{name:"string",required:!0}},{key:"endDate",value:{name:"string",required:!0}},{key:"startTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(value: {
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  startEpoch: number;
  endEpoch: number;
  startDate: string;
  endDate: string;
  startTime: string | null;
  endTime: string | null;
}`,signature:{properties:[{key:"startEpoch",value:{name:"number",required:!0}},{key:"endEpoch",value:{name:"number",required:!0}},{key:"startDate",value:{name:"string",required:!0}},{key:"endDate",value:{name:"string",required:!0}},{key:"startTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endTime",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""},includeTime:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},popoverTitle:{required:!1,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},customStyles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  boxShadow?: string;
  [key: string]: any;
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}},{key:"maxWidth",value:{name:"string",required:!1}},{key:"maxHeight",value:{name:"string",required:!1}},{key:"minWidth",value:{name:"string",required:!1}},{key:"minHeight",value:{name:"string",required:!1}},{key:"padding",value:{name:"string",required:!1}},{key:"margin",value:{name:"string",required:!1}},{key:"backgroundColor",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"fontSize",value:{name:"string",required:!1}},{key:"fontWeight",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"boxShadow",value:{name:"string",required:!1}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const{DATE_RANGE_QUICK_OPTIONS:d}=Ut,qa={component:Kt,title:"DateRangeSelector",tags:["autodocs"],argTypes:{value:{control:"select",options:[d.TODAY,d.YESTERDAY,d.LAST_7_DAYS,d.LAST_14_DAYS,d.LAST_30_DAYS,d.THIS_WEEK,d.LAST_WEEK,d.THIS_MONTH,d.LAST_MONTH,"custom_2025-01-01T00:00:00.000Z_2025-01-31T00:00:00.000Z"],description:"The selected date range value"},onChange:{action:"date range changed"},includeTime:{control:"boolean",description:"Whether to include time selection"},disabled:{control:"boolean",description:"Whether the component is disabled"},error:{control:"boolean",description:"Whether to show error state"},popoverTitle:{control:"text",description:"Custom title for the popover"},customStyles:{control:"object",description:"Custom styles to apply to the component"},minDate:{control:"date",description:"Minimum date for date range selection"}},parameters:{docs:{description:{component:"A comprehensive date range selector component with quick options, calendar view, and optional time selection. Supports both desktop and mobile layouts."}}}},g=e=>{const[i,c]=p.useState(e.value||d.TODAY),f=w=>{var Y;c(w),(Y=e.onChange)==null||Y.call(e,w)};return n.jsx("div",{style:{padding:"20px",maxWidth:"400px"},children:n.jsx(Kt,{...e,value:i,onChange:f})})},me=g.bind({});me.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1};const P=g.bind({});P.args={value:d.TODAY,includeTime:!0,disabled:!1,error:!1};P.parameters={docs:{description:{story:"DateRangeSelector with time selection enabled, allowing users to specify both date and time ranges."}}};const U=g.bind({});U.args={value:d.LAST_7_DAYS,includeTime:!1,disabled:!1,error:!1};U.parameters={docs:{description:{story:"Pre-selected with the last 7 days option, commonly used for weekly reports and analytics."}}};const H=g.bind({});H.args={value:d.LAST_30_DAYS,includeTime:!1,disabled:!1,error:!1};H.parameters={docs:{description:{story:"Pre-selected with the last 30 days option, ideal for monthly reports and trend analysis."}}};const Q=g.bind({});Q.args={value:d.THIS_MONTH,includeTime:!1,disabled:!1,error:!1};Q.parameters={docs:{description:{story:"Pre-selected with the current month option, useful for monthly summaries and comparisons."}}};const K=g.bind({});K.args={value:"custom_2025-01-01T00:00:00.000Z_2025-01-31T00:00:00.000Z",includeTime:!1,disabled:!1,error:!1};K.parameters={docs:{description:{story:"Shows a custom date range selection, demonstrating the component's ability to handle specific date ranges."}}};const z=g.bind({});z.args={value:d.TODAY,includeTime:!1,disabled:!0,error:!1};z.parameters={docs:{description:{story:"Disabled state of the DateRangeSelector, typically used when the component should not be interactive."}}};const G=g.bind({});G.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!0};G.parameters={docs:{description:{story:"Error state of the DateRangeSelector, indicating validation issues or invalid date selections."}}};const F=g.bind({});F.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1,popoverTitle:"Date Range Selector"};F.parameters={docs:{description:{story:"DateRangeSelector with a custom popover title, allowing for contextual labeling."}}};const B=g.bind({});B.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1,customStyles:{width:"300px",backgroundColor:"#f8f9fa",borderColor:"#007bff",borderRadius:"8px",fontSize:"14px",fontWeight:"500"}};B.parameters={docs:{description:{story:"DateRangeSelector with custom styling applied, demonstrating the component's flexibility for different design requirements."}}};const Z=g.bind({});Z.args={value:d.YESTERDAY,includeTime:!0,disabled:!1,error:!1};Z.parameters={docs:{description:{story:"Yesterday's date range with time selection enabled, useful for detailed time-based analysis."}}};const X=g.bind({});X.args={value:d.THIS_WEEK,includeTime:!1,disabled:!1,error:!1};X.parameters={docs:{description:{story:"Current week selection, commonly used for weekly reports and planning interfaces."}}};const J=g.bind({});J.args={value:d.LAST_WEEK,includeTime:!1,disabled:!1,error:!1};J.parameters={docs:{description:{story:"Previous week selection, useful for comparing current week performance with the previous week."}}};const ee=g.bind({});ee.args={value:d.LAST_MONTH,includeTime:!1,disabled:!1,error:!1};ee.parameters={docs:{description:{story:"Previous month selection, ideal for monthly comparisons and historical analysis."}}};const ne=g.bind({});ne.args={value:d.LAST_14_DAYS,includeTime:!1,disabled:!1,error:!1};ne.parameters={docs:{description:{story:"Last 14 days selection, useful for bi-weekly reports and fortnightly analysis."}}};const te=g.bind({});te.args={value:d.TODAY,includeTime:!0,disabled:!1,error:!1};te.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile view of the DateRangeSelector with responsive design. The component automatically adapts to mobile layout with single calendar view, mobile-optimized quick options, and touch-friendly interface."}}};const ae=g.bind({});ae.args={value:"custom_2025-01-01T00:00:00.000Z_2025-01-31T00:00:00.000Z",includeTime:!1,disabled:!1,error:!1};ae.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile view with custom date range selection, demonstrating the mobile-optimized calendar interface for selecting specific date ranges."}}};const se=g.bind({});se.args={value:d.LAST_7_DAYS,includeTime:!1,disabled:!1,error:!1,minDate:new Date(Date.now()-30*24*60*60*1e3)};se.parameters={docs:{description:{story:"DateRangeSelector with a recent minimum date (30 days ago). This prevents users from selecting dates too far in the past, useful for applications with data retention policies."}}};const re=g.bind({});re.args={value:d.TODAY,includeTime:!0,disabled:!1,error:!1};re.parameters={docs:{description:{story:'DateRangeSelector that outputs epoch timestamps in milliseconds. The onChange callback is only triggered when the user clicks the "Apply" button, providing a JSON object containing startEpoch, endEpoch, startDate, endDate, startTime, and endTime. Quick options update the internal state but do not trigger onChange until Apply is clicked.'}}};const oe=g.bind({});oe.args={value:d.LAST_30_DAYS,includeTime:!1,disabled:!1,error:!1};oe.parameters={docs:{description:{story:"DateRangeSelector with epoch output but without time selection. The onChange callback is only triggered on Apply button click, returning epoch objects with startTime and endTime set to null when includeTime is false. The epoch values represent the start of day (00:00:00) for start date and end of day (23:59:59) for end date."}}};const ie=g.bind({});ie.args={value:"custom_2025-01-15T00:00:00.000Z_2025-01-20T00:00:00.000Z",includeTime:!0,disabled:!1,error:!1};ie.parameters={docs:{description:{story:"Custom date range with epoch output and time selection. The onChange callback is triggered only when the user clicks the Apply button, providing complete date and time information in epoch format (milliseconds) for backend processing."}}};const le=g.bind({});le.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1,minDate:new Date(Date.now()-24*60*60*1e3)};le.parameters={docs:{description:{story:"DateRangeSelector with minimum date set to yesterday. This prevents users from selecting today or any future dates, only allowing selection of yesterday and earlier dates. Useful for historical data analysis or when you want to restrict selection to past dates only."}}};const ce=g.bind({});ce.args={value:d.TODAY,includeTime:!1,disabled:!1,error:!1};ce.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile view demonstrating instant apply behavior for quick options. When a user selects any quick option (Today, Yesterday, Last 7 Days, etc.) in mobile mode, the onChange callback is immediately triggered without requiring the user to click the Apply button. This provides a better mobile UX by reducing the number of taps needed. In desktop mode, quick options still require clicking Apply to confirm the selection."}}};const de=g.bind({});de.args={value:d.LAST_7_DAYS,includeTime:!0,disabled:!1,error:!1};de.parameters={viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Mobile view with time selection enabled, showing how quick options instantly apply with default time values (00:00 for start time and current time for end time). The onChange callback is triggered immediately upon selecting a quick option, with the epoch values including the time component."}}};var $n,Cn,En;me.parameters={...me.parameters,docs:{...($n=me.parameters)==null?void 0:$n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(En=(Cn=me.parameters)==null?void 0:Cn.docs)==null?void 0:En.source}}};var An,kn,Mn;P.parameters={...P.parameters,docs:{...(An=P.parameters)==null?void 0:An.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Mn=(kn=P.parameters)==null?void 0:kn.docs)==null?void 0:Mn.source}}};var _n,On,jn;U.parameters={...U.parameters,docs:{...(_n=U.parameters)==null?void 0:_n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(jn=(On=U.parameters)==null?void 0:On.docs)==null?void 0:jn.source}}};var Vn,Rn,Yn;H.parameters={...H.parameters,docs:{...(Vn=H.parameters)==null?void 0:Vn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Yn=(Rn=H.parameters)==null?void 0:Rn.docs)==null?void 0:Yn.source}}};var In,Nn,Wn;Q.parameters={...Q.parameters,docs:{...(In=Q.parameters)==null?void 0:In.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Wn=(Nn=Q.parameters)==null?void 0:Nn.docs)==null?void 0:Wn.source}}};var Ln,qn,Pn;K.parameters={...K.parameters,docs:{...(Ln=K.parameters)==null?void 0:Ln.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Pn=(qn=K.parameters)==null?void 0:qn.docs)==null?void 0:Pn.source}}};var Un,Hn,Qn;z.parameters={...z.parameters,docs:{...(Un=z.parameters)==null?void 0:Un.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Qn=(Hn=z.parameters)==null?void 0:Hn.docs)==null?void 0:Qn.source}}};var Kn,zn,Gn;G.parameters={...G.parameters,docs:{...(Kn=G.parameters)==null?void 0:Kn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Gn=(zn=G.parameters)==null?void 0:zn.docs)==null?void 0:Gn.source}}};var Fn,Bn,Zn;F.parameters={...F.parameters,docs:{...(Fn=F.parameters)==null?void 0:Fn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Zn=(Bn=F.parameters)==null?void 0:Bn.docs)==null?void 0:Zn.source}}};var Xn,Jn,et;B.parameters={...B.parameters,docs:{...(Xn=B.parameters)==null?void 0:Xn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(et=(Jn=B.parameters)==null?void 0:Jn.docs)==null?void 0:et.source}}};var nt,tt,at;Z.parameters={...Z.parameters,docs:{...(nt=Z.parameters)==null?void 0:nt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(at=(tt=Z.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var st,rt,ot;X.parameters={...X.parameters,docs:{...(st=X.parameters)==null?void 0:st.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(ot=(rt=X.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,lt,ct;J.parameters={...J.parameters,docs:{...(it=J.parameters)==null?void 0:it.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(ct=(lt=J.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,gt;ee.parameters={...ee.parameters,docs:{...(dt=ee.parameters)==null?void 0:dt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(gt=(ut=ee.parameters)==null?void 0:ut.docs)==null?void 0:gt.source}}};var pt,ht,mt;ne.parameters={...ne.parameters,docs:{...(pt=ne.parameters)==null?void 0:pt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(mt=(ht=ne.parameters)==null?void 0:ht.docs)==null?void 0:mt.source}}};var bt,ft,xt;te.parameters={...te.parameters,docs:{...(bt=te.parameters)==null?void 0:bt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(xt=(ft=te.parameters)==null?void 0:ft.docs)==null?void 0:xt.source}}};var Dt,vt,Tt;ae.parameters={...ae.parameters,docs:{...(Dt=ae.parameters)==null?void 0:Dt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Tt=(vt=ae.parameters)==null?void 0:vt.docs)==null?void 0:Tt.source}}};var yt,wt,St;se.parameters={...se.parameters,docs:{...(yt=se.parameters)==null?void 0:yt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(St=(wt=se.parameters)==null?void 0:wt.docs)==null?void 0:St.source}}};var $t,Ct,Et;re.parameters={...re.parameters,docs:{...($t=re.parameters)==null?void 0:$t.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Et=(Ct=re.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var At,kt,Mt;oe.parameters={...oe.parameters,docs:{...(At=oe.parameters)==null?void 0:At.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Mt=(kt=oe.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var _t,Ot,jt;ie.parameters={...ie.parameters,docs:{...(_t=ie.parameters)==null?void 0:_t.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(jt=(Ot=ie.parameters)==null?void 0:Ot.docs)==null?void 0:jt.source}}};var Vt,Rt,Yt;le.parameters={...le.parameters,docs:{...(Vt=le.parameters)==null?void 0:Vt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Yt=(Rt=le.parameters)==null?void 0:Rt.docs)==null?void 0:Yt.source}}};var It,Nt,Wt;ce.parameters={...ce.parameters,docs:{...(It=ce.parameters)==null?void 0:It.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Wt=(Nt=ce.parameters)==null?void 0:Nt.docs)==null?void 0:Wt.source}}};var Lt,qt,Pt;de.parameters={...de.parameters,docs:{...(Lt=de.parameters)==null?void 0:Lt.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || DATE_RANGE_QUICK_OPTIONS.TODAY);
  const handleChange = (newValue: {
    startEpoch: number;
    endEpoch: number;
    startDate: string;
    endDate: string;
    startTime: string | null;
    endTime: string | null;
  }) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <DateRangeSelector {...args} value={value} onChange={handleChange} />
    </div>;
}`,...(Pt=(qt=de.parameters)==null?void 0:qt.docs)==null?void 0:Pt.source}}};const Pa=["Default","WithTimeSelection","Last7Days","Last30Days","ThisMonth","CustomDateRange","Disabled","WithError","CustomTitle","CustomStyling","YesterdayWithTime","ThisWeek","LastWeek","LastMonth","Last14Days","MobileView","MobileWithCustomRange","WithRecentMinDate","EpochOutput","EpochOutputWithoutTime","CustomRangeWithEpoch","WithMinDateYesterday","MobileQuickOptionInstantApply","MobileQuickOptionWithTime"];export{K as CustomDateRange,ie as CustomRangeWithEpoch,B as CustomStyling,F as CustomTitle,me as Default,z as Disabled,re as EpochOutput,oe as EpochOutputWithoutTime,ne as Last14Days,H as Last30Days,U as Last7Days,ee as LastMonth,J as LastWeek,ce as MobileQuickOptionInstantApply,de as MobileQuickOptionWithTime,te as MobileView,ae as MobileWithCustomRange,Q as ThisMonth,X as ThisWeek,G as WithError,le as WithMinDateYesterday,se as WithRecentMinDate,P as WithTimeSelection,Z as YesterdayWithTime,Pa as __namedExportsOrder,qa as default};
