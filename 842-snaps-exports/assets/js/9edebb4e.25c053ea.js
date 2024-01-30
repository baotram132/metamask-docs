"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Learn about wallet interoperability.",sidebar_position:6},i="Wallet interoperability",l={unversionedId:"concepts/wallet-interoperabilty",id:"concepts/wallet-interoperabilty",title:"Wallet interoperability",description:"Learn about wallet interoperability.",source:"@site/wallet/concepts/wallet-interoperabilty.md",sourceDirName:"concepts",slug:"/concepts/wallet-interoperabilty",permalink:"/842-snaps-exports/wallet/concepts/wallet-interoperabilty",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-interoperabilty.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Learn about wallet interoperability.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/842-snaps-exports/wallet/concepts/signing-methods"},next:{title:"Tutorials",permalink:"/842-snaps-exports/wallet/tutorials"}},s={},p=[{value:"Community support",id:"community-support",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wallet-interoperability"},"Wallet interoperability"),(0,a.kt)("p",null,"A web dapp can integrate with multiple wallets simultaneously by adding support for\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which improves the user experience when the\nuser has multiple wallet browser extensions installed.\nEIP-6963 introduces an alternative discovery mechanism to the ",(0,a.kt)("a",{parentName:"p",href:"/842-snaps-exports/wallet/concepts/apis#ethereum-provider-api"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum")," injected provider"),",\nenabling dapps to discover multiple injected wallet providers in a user's browser.\nWe recommend using this new mechanism for provider discovery."),(0,a.kt)("p",{align:"center"},(0,a.kt)("video",{width:"100%",controls:!0},(0,a.kt)("source",{src:"/eip-6963.mov"}))),(0,a.kt)("p",null,"You can add support for connecting to the MetaMask browser extension via EIP-6963 in the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/842-snaps-exports/wallet/how-to/connect/set-up-sdk/javascript/"},"Set up MetaMask SDK")," in your dapp.\nThe SDK connects to the MetaMask extension via EIP-6963 by default, and we recommend using this method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/842-snaps-exports/wallet/how-to/discover-multiple-wallets"},"Directly update your dapp code")," to support EIP-6963."),(0,a.kt)("li",{parentName:"ul"},"Use third-party libraries that support EIP-6963.")),(0,a.kt)("p",null,"Alternatively, you can use ",(0,a.kt)("a",{parentName:"p",href:"/842-snaps-exports/wallet/concepts/convenience-libraries"},"convenience libraries")," that support wallet\ninteroperability.\nWe recommend using the SDK for the best MetaMask user experience."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"MetaMask SDK doesn't support connecting to non-MetaMask wallets via EIP-6963.\nIf you intend to support discovery of other wallets, we recommend using other methods of adding\nEIP-6963 support.")),(0,a.kt)("h2",{id:"community-support"},"Community support"),(0,a.kt)("p",null,"The alternative discovery mechanism works for wallets that have implemented support for EIP-6963.\nThis includes MetaMask, Coinbase, Trust Wallet, OKX, and other major wallets.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WalletConnect/EIP6963/blob/master/src/utils/constants.ts"},"list of wallets that support EIP-6963"),"."),(0,a.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,a.kt)("p",null,"Dapps that do not support EIP-6963 can still detect MetaMask using the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider.\nHowever, we recommend adding support to improve the user experience for multiple installed wallets.\nRead more about ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#backwards-compatibility"},"EIP-6963 backwards compatibility"),"."))}m.isMDXComponent=!0}}]);