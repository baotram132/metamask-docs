"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9304],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=s,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},o="Use MetaMask SDK with Node.js",i={unversionedId:"how-to/use-sdk/javascript/nodejs",id:"how-to/use-sdk/javascript/nodejs",title:"Use MetaMask SDK with Node.js",description:"Set up the SDK in your Node.js dapp.",source:"@site/wallet/how-to/use-sdk/javascript/nodejs.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/nodejs",permalink:"/zs/snap-getclientstatus/wallet/how-to/use-sdk/javascript/nodejs",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/nodejs.md",tags:[{label:"JavaScript SDK",permalink:"/zs/snap-getclientstatus/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React Native and Expo",permalink:"/zs/snap-getclientstatus/wallet/how-to/use-sdk/javascript/react-native"},next:{title:"Electron",permalink:"/zs/snap-getclientstatus/wallet/how-to/use-sdk/javascript/electron"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-metamask-sdk-with-nodejs"},"Use MetaMask SDK with Node.js"),(0,s.kt)("p",null,"Import ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/concepts/sdk/"},"MetaMask SDK")," into your Node.js dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for Node.js has the ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,s.kt)("h2",{id:"steps"},"Steps"),(0,s.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,s.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,s.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,s.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetaMaskSDK } from '@metamask/sdk';\n")),(0,s.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,s.kt)("p",null,"Instantiate the SDK using any ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/reference/sdk-js-options"},"options"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: "Example Node.js Dapp",\n    url: window.location.href,\n  }\n  // Other options\n});\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n')),(0,s.kt)("admonition",{title:"Important SDK options",type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/wallet/reference/sdk-js-options#dappmetadata"},(0,s.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/wallet/reference/sdk-js-options#modals"},(0,s.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/wallet/reference/sdk-js-options#infuraapikey"},(0,s.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,s.kt)("a",{parentName:"li",href:"/zs/snap-getclientstatus/wallet/how-to/use-3rd-party-integrations/js-infura-api"},"make read-only RPC requests")," from your dapp."))),(0,s.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,s.kt)("p",null,"Use the SDK by calling any ",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,s.kt)("a",{parentName:"p",href:"/zs/snap-getclientstatus/wallet/reference/provider-api#ethereumrequestargs"},(0,s.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"You can copy the full Node.js example to get started:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"import { MetaMaskSDK } from '@metamask/sdk';\n\nconst MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: \"Example Node.js Dapp\",\n    url: window.location.href,\n  }\n  // Other options\n});\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n\nethereum.request({ method: 'eth_requestAccounts', params: [] });\n")),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"example Node.js dapp"),"\nin the JavaScript SDK GitHub repository for advanced use cases."))}u.isMDXComponent=!0}}]);