"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5015],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return a?r.createElement(m,c(c({ref:e},d),{},{components:a})):r.createElement(m,c({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43926:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={description:"Enable your dapp to interact with smart contracts.",sidebar_position:5},c="Interact with smart contracts",i={unversionedId:"how-to/interact-with-smart-contracts/index",id:"how-to/interact-with-smart-contracts/index",title:"Interact with smart contracts",description:"Enable your dapp to interact with smart contracts.",source:"@site/wallet/how-to/interact-with-smart-contracts/index.md",sourceDirName:"how-to/interact-with-smart-contracts",slug:"/how-to/interact-with-smart-contracts/",permalink:"/wallet/how-to/interact-with-smart-contracts/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/interact-with-smart-contracts/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Enable your dapp to interact with smart contracts.",sidebar_position:5},sidebar:"walletSidebar",previous:{title:"Display a dapp icon",permalink:"/wallet/how-to/display/icon"},next:{title:"Interact with smart contracts in Unity",permalink:"/wallet/how-to/interact-with-smart-contracts/unity/"}},s={},l=[{value:"Contract network",id:"contract-network",level:2},{value:"Contract address",id:"contract-address",level:2},{value:"Contract ABI",id:"contract-abi",level:2},{value:"Contract bytecode",id:"contract-bytecode",level:2},{value:"Contract source code",id:"contract-source-code",level:2}],d={toc:l},p="wrapper";function h(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interact-with-smart-contracts"},"Interact with smart contracts"),(0,n.kt)("p",null,"This is a high-level overview of how to interact with smart contracts.\nYou can also see how to\n",(0,n.kt)("a",{parentName:"p",href:"/wallet/how-to/interact-with-smart-contracts/unity/"},"interact with smart contracts from your Unity game"),"."),(0,n.kt)("p",null,"To interact with a smart contract, your dapp needs the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-network"},"Contract network")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-address"},"Contract address")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-abi"},"Contract ABI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-bytecode"},"Contract bytecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contract-source-code"},"Contract source code"))),(0,n.kt)("h2",{id:"contract-network"},"Contract network"),(0,n.kt)("p",null,"If you're not connected to the right network, you can't send transactions to your contract.\nMany dapp developers deploy their contract to a testnet first, in order to avoid potentially\ndisastrous fees if something goes wrong during development and testing on Mainnet."),(0,n.kt)("p",null,"Regardless of which network you deploy your final dapp on, your users must be able to access it.\nUse the ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," and\n",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))," RPC methods to prompt\nthe user to add a chain that you suggest, and switch to it using a confirmation dialogue."),(0,n.kt)("h2",{id:"contract-address"},"Contract address"),(0,n.kt)("p",null,"Every account in Ethereum has an address, whether it's an external key-pair account or a smart contract.\nFor any smart contract library to communicate with your contracts, a smart contract  must know the exact address."),(0,n.kt)("p",null,"Read about\n",(0,n.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360059683451-How-to-view-or-add-custom-token-contract-address"},"how to find a token contact address"),"."),(0,n.kt)("h2",{id:"contract-abi"},"Contract ABI"),(0,n.kt)("p",null,"In Ethereum, the ",(0,n.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"ABI specification")," is a\nway to encode the interface of a smart contract that's comprehensible to your user interface.\nThe ABI is an array of method-describing objects, and when you feed this and the address into a\ncontract-abstraction library, the ABI tells those libraries about what methods to provide, and\nhow to compose transactions to call those methods."),(0,n.kt)("p",null,"Example libraries include the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ethers"},"Ethers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/web3"},"web3.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://framework.embarklabs.io/"},"Embark")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ethjs"},"ethjs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.trufflesuite.com/"},"Truffle"))),(0,n.kt)("h2",{id:"contract-bytecode"},"Contract bytecode"),(0,n.kt)("p",null,"If your dapp publishes a new pre-compiled smart contract, it might need to include some bytecode.\nYou don't know the contract address in advance; you must publish the contract, watch for the\ntransaction to be processed, and then extract the final contract's address from the completed transaction."),(0,n.kt)("p",null,"If you publish a contract from bytecode, you still need an ",(0,n.kt)("a",{parentName:"p",href:"#contract-abi"},"ABI")," to interact with it.\nThe bytecode doesn't describe how to interact with the final contract."),(0,n.kt)("h2",{id:"contract-source-code"},"Contract source code"),(0,n.kt)("p",null,"If your dapp allows users to edit smart contract source code and compile it, similar to\n",(0,n.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),", you can import a whole compiler.\nYou derive your bytecode and ABI from that source code, and eventually derive the contract's address\nfrom the completed transaction, where that bytecode is published."))}h.isMDXComponent=!0}}]);