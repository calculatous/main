"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>O,default:()=>P,frontMatter:()=>I,metadata:()=>E,toc:()=>A});var r=n(87462),a=n(67294),o=n(3905),l=n(86010),i=n(12466),s=n(16550),u=n(91980),c=n(67392),d=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:n,groupId:r}),[c,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??c;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}const x={tabItem:"tabItem_Ymn6"};function N(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(x.tabItem,r),hidden:n},t)}const I={sidebar_position:1},O="Installation",E={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Kohl's Admin is currently in development. Everything in these docs is subject to change.",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/kohls-admin/main/edit/master/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Custom Commands",permalink:"/docs/custom_commands"}},S={},A=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation-1",level:2},{value:"Step 1: Acquire the KA Test Loader Model",id:"step-1-acquire-the-ka-test-loader-model",level:3},{value:"Step 2: Open Roblox Studio",id:"step-2-open-roblox-studio",level:3},{value:"Step 3: Import the KA Test Loader Model",id:"step-3-import-the-ka-test-loader-model",level:3},{value:"Step 4: Verify Installation",id:"step-4-verify-installation",level:3}],K={toc:A},V="wrapper";function P(e){let{components:t,...n}=e;return(0,o.kt)(V,(0,r.Z)({},K,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Kohl's Admin is currently in development. Everything in these docs is subject to change.")),(0,o.kt)("p",null,"Before you can start using Kohl's Admin, it needs to be installed in your Roblox game. This section will guide you through the initial setup process."),(0,o.kt)("p",null,"In this guide, we will use the KA Test Model. You can also explore Kohl's Admin features in the Test Place."),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(N,{value:"testmodel",label:"KA Test Model",default:!0,mdxType:"TabItem"},"Take the KA Test Model by clicking ",(0,o.kt)("a",{href:"https://create.roblox.com/store/asset/18525985332/KA",target:"_blank",rel:"noopener noreferrer"},"here"),"."),(0,o.kt)(N,{value:"testplace",label:"KA Test Place",mdxType:"TabItem"},"Access our dedicated Roblox test place ",(0,o.kt)("a",{href:"https://www.roblox.com/games/18274376677/KA-Demo",target:"_blank",rel:"noopener noreferrer"},"here"),".")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Make sure you have Roblox Studio installed on your environment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Roblox Studio"),": Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://www.roblox.com/create"},"Roblox Studio"))),(0,o.kt)("h2",{id:"installation-1"},"Installation"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Be aware of models impersonating Kohl's Admin. The model should be made by ",(0,o.kt)("a",{parentName:"p",href:"https://www.roblox.com/users/44391621/profile"},"@Scripth"),".")),(0,o.kt)("h3",{id:"step-1-acquire-the-ka-test-loader-model"},"Step 1: Acquire the KA Test Loader Model"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://create.roblox.com/store/asset/18525985332/KA"},"KA Test Loader")," page."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Get Model")," button to add the model to your inventory.")),(0,o.kt)("h3",{id:"step-2-open-roblox-studio"},"Step 2: Open Roblox Studio"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch ",(0,o.kt)("strong",{parentName:"li"},"Roblox Studio")," on your computer."),(0,o.kt)("li",{parentName:"ol"},"Open the experience you want to install KA Test Loader or create a new experience.")),(0,o.kt)("h3",{id:"step-3-import-the-ka-test-loader-model"},"Step 3: Import the KA Test Loader Model"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In Roblox Studio, open the ",(0,o.kt)("strong",{parentName:"li"},"Toolbox")," by selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"View > Toolbox")," from the top menu."),(0,o.kt)("li",{parentName:"ol"},"In the Toolbox, click on the ",(0,o.kt)("strong",{parentName:"li"},"Inventory")," tab and search for ",(0,o.kt)("strong",{parentName:"li"},"KA Test Loader Infinite")," and click on the model."),(0,o.kt)("li",{parentName:"ol"},"Click OK on the script warning prompt."),(0,o.kt)("li",{parentName:"ol"},"Once the KA Test Loader model is in place, save your changes by selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"File > Publish to Roblox"),".")),(0,o.kt)("h3",{id:"step-4-verify-installation"},"Step 4: Verify Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open and play the experience that you've imported the model into."),(0,o.kt)("li",{parentName:"ol"},"Test some basic commands to make sure the admin commands are functioning as expected.")),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Still need help? Feel free to join the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/kohl"},"Kohl's Admin Discord"),"!")))}P.isMDXComponent=!0}}]);