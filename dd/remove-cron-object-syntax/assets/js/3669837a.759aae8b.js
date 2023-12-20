"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),o=a(12466),l=a(70989),i=a(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==l&&(p(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},o,{className:(0,s.Z)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function d(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function p(e){const t=(0,l.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",u.tabList)},r.createElement(c,(0,n.Z)({},e,t)),r.createElement(d,(0,n.Z)({},e,t)))}function m(e){const t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>p});var n=a(67294),r=a(16550),s=a(91980),o=a(67392),l=a(50012);function i(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=u(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[p,m]=d({queryString:a,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,l.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=p??h;return c({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),b(e)}),[m,b,s]),tabValues:s}}},78695:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),o=a(85162);const l={sidebar_position:4,description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",tags:["Unity SDK"]},i="Enable human-readable addresses in Unity",u={unversionedId:"how-to/use-3rd-party-integrations/unity-dweb",id:"how-to/use-3rd-party-integrations/unity-dweb",title:"Enable human-readable addresses in Unity",description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",source:"@site/wallet/how-to/use-3rd-party-integrations/unity-dweb.md",sourceDirName:"how-to/use-3rd-party-integrations",slug:"/how-to/use-3rd-party-integrations/unity-dweb",permalink:"/dd/remove-cron-object-syntax/wallet/how-to/use-3rd-party-integrations/unity-dweb",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-3rd-party-integrations/unity-dweb.md",tags:[{label:"Unity SDK",permalink:"/dd/remove-cron-object-syntax/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Set up Infura in Unity",permalink:"/dd/remove-cron-object-syntax/wallet/how-to/use-3rd-party-integrations/unity-infura"},next:{title:"Add a network",permalink:"/dd/remove-cron-object-syntax/wallet/how-to/add-network"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize the integration wrapper",id:"initialize-the-integration-wrapper",level:2},{value:"Convert a name to an Ethereum address",id:"convert-a-name-to-an-ethereum-address",level:2},{value:"Convert an Ethereum address to a name",id:"convert-an-ethereum-address-to-a-name",level:2},{value:"Example",id:"example",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enable-human-readable-addresses-in-unity"},"Enable human-readable addresses in Unity"),(0,r.kt)("p",null,"You can integrate the ",(0,r.kt)("a",{parentName:"p",href:"https://decentraweb.org/"},"Decentraweb")," name resolver into your Unity game\nwith ",(0,r.kt)("a",{parentName:"p",href:"/dd/remove-cron-object-syntax/wallet/how-to/connect/set-up-sdk/gaming/unity"},"MetaMask SDK")," installed.\nDecentraweb maps human-readable names to machine-readable identifiers, such as Ethereum addresses.\nIntegrating Decentraweb into your game allows users to interact with addresses in a more user-friendly way."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/dd/remove-cron-object-syntax/wallet/how-to/connect/set-up-sdk/gaming/unity"},"MetaMask SDK set up")," in your Unity game."),(0,r.kt)("h2",{id:"initialize-the-integration-wrapper"},"Initialize the integration wrapper"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"newDWebAPIWrapper()")," method to configure and initialize a C# integration wrapper, which\nacts as a bridge between the MetaMask Unity SDK and the Decentraweb name resolver API.\nThis method initializes the wrapper with necessary configuration parameters, including\nauthentication details required to interact with the Decentraweb name resolver API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialize the wrapper\nvar apiWrapper = newDWebAPIWrapper();\n")),(0,r.kt)("h2",{id:"convert-a-name-to-an-ethereum-address"},"Convert a name to an Ethereum address"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResolveNameAsync(name)")," method to convert a human-readable name to the corresponding\nEthereum address."),(0,r.kt)("p",null,"The C# integration wrapper translates the request into a format that the Decentraweb name resolver\nAPI can understand, and sends the translated request to the name resolver using a standard HTTP POST request."),(0,r.kt)("p",null,"The name resolver processes the request and responds with the Ethereum address."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Method",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Initialize the wrapper\nvar apiWrapper = newDWebAPIWrapper();\n\n// Get the user\'s human-readable name\nvar name = "user.dweb";\n\n// Resolve the name to an Ethereum address\nvar address = await apiWrapper.ResolveNameAsync(name);\n'))),(0,r.kt)(o.Z,{label:"JSON response",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "result": "0xcB3E45F337Dd3Beeba98F5F9F9A16e9cD152cC86"\n}\n')))),(0,r.kt)("h2",{id:"convert-an-ethereum-address-to-a-name"},"Convert an Ethereum address to a name"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetNameAsync(address)")," method to convert an Ethereum address to the corresponding\nhuman-readable name."),(0,r.kt)("p",null,"The C# integration wrapper translates the request into a format the Unity SDK can understand, and\nsends the translated request to the SDK."),(0,r.kt)("p",null,"The SDK processes the request and responds with the human-readable name."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Method",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Initialize the wrapper\nvar apiWrapper = newDWebAPIWrapper();\n\n// Get the user\'s address\nvar address = "0xcB3E45F337Dd3Beeba98F5F9F9A16e9cD152cC86"\n\n// Resolve the address to a human-readable name\nvar name = await apiWrapper.GetNameAsync(address)\n'))),(0,r.kt)(o.Z,{label:"JSON response",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "result": {\n    "name": "lordsats",\n    "confirmed": true \n  } \n}\n')))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is an example of using the Unity SDK Decentraweb integration to create a transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public async Task FormTransactionAsync()\n{\n  // Initialize the wrapper\n  var apiWrapper = new DWebAPIWrapper();\n  \n  // Get the user\'s human-readable name\n  var name = "user.dweb";\n  \n  // Resolve the name to an Ethereum address\n  var address = await apiWrapper.ResolveNameAsync(name);\n  \n  // Form the transaction\n  var transaction = new Transaction\n  {\n    To = address,\n    Value = 1.0m,\n    Gas = 21000\n  };\n  \n  // The rest of the transaction formation code...\n}\n')))}h.isMDXComponent=!0}}]);