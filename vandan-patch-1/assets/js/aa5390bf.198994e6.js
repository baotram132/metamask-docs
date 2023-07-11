"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1.5,description:"Learn about the MetaMask Ethereum provider API."},i="Ethereum provider API",p={unversionedId:"concepts/provider-api",id:"concepts/provider-api",title:"Ethereum provider API",description:"Learn about the MetaMask Ethereum provider API.",source:"@site/wallet/concepts/provider-api.md",sourceDirName:"concepts",slug:"/concepts/provider-api",permalink:"/vandan-patch-1/wallet/concepts/provider-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/provider-api.md",tags:[],version:"current",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5,description:"Learn about the MetaMask Ethereum provider API."},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/vandan-patch-1/wallet/concepts/architecture"},next:{title:"JSON-RPC API",permalink:"/vandan-patch-1/wallet/concepts/rpc-api"}},s={},c=[],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,n.kt)("p",null,"MetaMask injects a global JavaScript API into websites visited by its users using the\n",(0,n.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nThis API is specified by ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),", and it allows dapps to\nrequest users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more."),(0,n.kt)("p",null,"The MetaMask Ethereum provider API contains the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/vandan-patch-1/wallet/reference/provider-api#properties"},"Properties")," - The provider contains a property that\ndetects if a user has MetaMask installed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/vandan-patch-1/wallet/reference/provider-api#methods"},"Methods")," - The provider contains methods that dapps can call.\nThe ",(0,n.kt)("a",{parentName:"li",href:"/vandan-patch-1/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nprovider method wraps the ",(0,n.kt)("a",{parentName:"li",href:"/vandan-patch-1/wallet/concepts/rpc-api"},"MetaMask JSON-RPC API"),"; dapps can use this\nprovider method to call any RPC method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/vandan-patch-1/wallet/reference/provider-api#events"},"Events")," - The provider emits events that dapps can listen to.")),(0,n.kt)("p",null,"View the ",(0,n.kt)("a",{parentName:"p",href:"/vandan-patch-1/wallet/reference/provider-api"},"provider API reference")," for all the provider properties,\nmethods, and events."),(0,n.kt)("admonition",{title:"Use MetaMask SDK with the provider API",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can call the provider API from a dapp with or without ",(0,n.kt)("a",{parentName:"p",href:"/vandan-patch-1/wallet/concepts/sdk"},"MetaMask SDK")," installed, but we\nrecommend using the SDK to enable users to easily connect to the MetaMask browser extension and\nMetaMask Mobile.\nThe SDK supports multiple dapp platforms including mobile and gaming dapps."),(0,n.kt)("p",{parentName:"admonition"},"Get started by ",(0,n.kt)("a",{parentName:"p",href:"/vandan-patch-1/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")))}u.isMDXComponent=!0}}]);