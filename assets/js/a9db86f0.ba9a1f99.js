"use strict";(self.webpackChunkopen_8gu=self.webpackChunkopen_8gu||[]).push([[2809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905)),a=n(9962);const i={id:"ftgh02hvumpm3zqg",sidebar_position:10,title:"\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f\uff1f"},l=void 0,p={unversionedId:"thread-pool/ftgh02hvumpm3zqg",id:"thread-pool/ftgh02hvumpm3zqg",title:"\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f\uff1f",description:"\u56de\u7b54\u8bdd\u672f",source:"@site/concurrent/thread-pool/10.\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f\uff1f.md",sourceDirName:"thread-pool",slug:"/thread-pool/ftgh02hvumpm3zqg",permalink:"/concurrent/thread-pool/ftgh02hvumpm3zqg",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"ftgh02hvumpm3zqg",sidebar_position:10,title:"\u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f\uff1f"},sidebar:"community",previous:{title:"\u7ebf\u7a0b\u6c60\u7bc7",permalink:"/concurrent/category/\u7ebf\u7a0b\u6c60\u7bc7"},next:{title:"\u9879\u76ee\u91cd\u542f\u6216\u5b95\u673a\u65f6\u7ebf\u7a0b\u6c60\u4efb\u52a1\u8fd8\u6ca1\u5904\u7406\u5b8c\uff1f",permalink:"/concurrent/thread-pool/cbrhx6xrc802t8sy"}},u={},c=[{value:"\u56de\u7b54\u8bdd\u672f",id:"\u56de\u7b54\u8bdd\u672f",level:2},{value:"1. \u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42",id:"1-\u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42",level:3},{value:"2. \u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1",id:"2-\u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1",level:3},{value:"\u95ee\u9898\u8be6\u89e3",id:"\u95ee\u9898\u8be6\u89e3",level:2},{value:"1. \u5e76\u53d1\u6267\u884c\u83b7\u53d6\u7ed3\u679c",id:"1-\u5e76\u53d1\u6267\u884c\u83b7\u53d6\u7ed3\u679c",level:3},{value:"2. \u6279\u5904\u7406\u4efb\u52a1",id:"2-\u6279\u5904\u7406\u4efb\u52a1",level:3}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{mdxType:"CommonContent"}),(0,o.kt)("h2",{id:"\u56de\u7b54\u8bdd\u672f"},"\u56de\u7b54\u8bdd\u672f"),(0,o.kt)("p",null,"\u7ebf\u7a0b\u6c60\u662f\u4e00\u79cd\u57fa\u4e8e\u6c60\u5316\u601d\u60f3\u7ba1\u7406\u7ebf\u7a0b\u7684\u5de5\u5177\uff0c\u4f7f\u7528\u7ebf\u7a0b\u6c60\u53ef\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u51cf\u5c11\u521b\u5efa\u9500\u6bc1\u7ebf\u7a0b\u7684\u5f00\u9500"),"\uff0c\u907f\u514d\u7ebf\u7a0b\u8fc7\u591a\u5bfc\u81f4\u7cfb\u7edf\u8d44\u6e90\u8017\u5c3d\u3002\u5145\u5206\u5229\u7528\u6c60\u5185\u8ba1\u7b97\u8d44\u6e90\uff0c\u7b49\u5f85\u5206\u914d\u5e76\u53d1\u6267\u884c\u4efb\u52a1\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u63d0\u9ad8\u7cfb\u7edf\u6027\u80fd\u548c\u54cd\u5e94\u80fd\u529b"),"\u3002"),(0,o.kt)("p",null,"\u5728\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u7ebf\u7a0b\u6c60\u6709\u4e24\u4e2a\u5e38\u89c1\u7684\u5e94\u7528\u573a\u666f\uff0c\u5206\u522b\u662f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42\u548c\u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1"),"\u3002"),(0,o.kt)("h3",{id:"1-\u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42"},"1. \u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42"),(0,o.kt)("p",null,"\u4ee5\u7535\u5546\u4e2d\u7684\u67e5\u8be2\u5546\u54c1\u8be6\u60c5\u63a5\u53e3\u4e3e\u4f8b\uff0c\u4ece\u7528\u6237\u53d1\u8d77\u8bf7\u6c42\u5f00\u59cb\uff0c\u60f3\u8981\u83b7\u53d6\u5230\u5546\u54c1\u5168\u90e8\u4fe1\u606f\uff0c\u53ef\u80fd\u4f1a\u5305\u62ec\u83b7\u53d6\u5546\u54c1\u57fa\u672c\u4fe1\u606f\u3001\u5e93\u5b58\u4fe1\u606f\u3001\u4f18\u60e0\u5238\u4ee5\u53ca\u8bc4\u8bba\u7b49\u591a\u4e2a\u67e5\u8be2\u903b\u8f91\uff0c\u5047\u8bbe\u6bcf\u4e2a\u67e5\u8be2\u662f 50ms\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u662f\u4e32\u884c\u5316\u67e5\u8be2\u5219\u9700\u8981 200ms"),"\uff0c\u67e5\u8be2\u6027\u80fd\u4e00\u822c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/dd806c2e-4b22-4ced-a9e7-a7365ec6fbae",alt:"image.png"})),(0,o.kt)("p",null,"\u800c\u5982\u679c\u8bf4\u901a\u8fc7\u7ebf\u7a0b\u6c60\u7684\u65b9\u5f0f\u5e76\u884c\u67e5\u8be2\uff0c\u90a3\u67e5\u8be2\u5168\u90e8\u5546\u54c1\u4fe1\u606f\u7684\u65f6\u95f4\u5c31\u53d6\u51b3\u4e8e\u591a\u4e2a\u6d41\u7a0b\u4e2d\u6700\u6162\u7684\u90a3\u4e00\u6761\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe\u4f18\u60e0\u4fe1\u606f\u6d41\u7a0b\u67e5\u8be2\u65f6\u95f4 80ms\uff0c\u5176\u4ed6\u6d41\u7a0b\u67e5\u8be2\u65f6\u95f4 50ms\uff0c\u7ecf\u8fc7\u7ebf\u7a0b\u6c60\u5e76\u884c\u4f18\u5316\u540e\uff0c\u5546\u54c1\u8be6\u60c5\u63a5\u53e3\u54cd\u5e94\u65f6\u95f4\u5c31\u662f 80ms\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u5e76\u884c\u7f29\u77ed\u4e86\u6574\u4f53\u67e5\u8be2\u65f6\u95f4"),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7ebf\u7a0b\u6c60\u79cd\u5e76\u884c\u63d0\u4ea4\u4efb\u52a1\u7684\u5b8c\u6210\u65f6\u95f4\uff0c\u53d6\u51b3\u4e8e\u8fd9\u4e9b\u4efb\u52a1\u4e2d\u6267\u884c\u65f6\u95f4\u6700\u6162\u7684\u6d41\u7a0b\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/33b86bb2-1c7e-4324-aae3-64d5d60f87f2",alt:"image.png"})),(0,o.kt)("p",null,"\u8fd9\u79cd\u573a\u666f\u60f3\u8981\u8fbe\u5230\u7684\u6548\u679c\u662f",(0,o.kt)("strong",{parentName:"p"},"\u6700\u5feb\u65f6\u95f4\u5c06\u7ed3\u679c\u54cd\u5e94\u7ed9\u7528\u6237"),"\uff0c\u6211\u4eec\u5728\u521b\u5efa\u7ebf\u7a0b\u6c60\u65f6",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u5e94\u8be5\u4f7f\u7528\u963b\u585e\u961f\u5217\u53bb\u7f13\u51b2\u4efb\u52a1"),"\uff0c\u800c\u662f\u53ef\u4ee5\u5c1d\u8bd5\u9002\u5f53\u8c03\u5927\u6838\u5fc3\u7ebf\u7a0b\u6570\u548c\u6700\u5927\u7ebf\u7a0b\u6570\uff0c\u63d0\u9ad8\u4efb\u52a1\u5e76\u884c\u6267\u884c\u7684\u6027\u80fd\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u5982\u4f55\u8bbe\u7f6e\u7ebf\u7a0b\u6c60\u53c2\u6570\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.yuque.com/magestack/open8gu/cqkp7qkk76itbprh?view=doc_embed"},"\ud83d\udea7 \u5982\u4f55\u8bbe\u7f6e\u7ebf\u7a0b\u6c60\u7684\u53c2\u6570\uff1f"))),(0,o.kt)("h3",{id:"2-\u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1"},"2. \u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1"),(0,o.kt)("p",null,"\u5728\u5de5\u4f5c\u4e2d\uff0c\u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1\u573a\u666f\u6bd4\u8f83\u591a\uff0c\u5305\u62ec\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u4e3e\u5f97\u4f8b\u5b50\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u516c\u53f8\u4e3e\u529e\u5468\u5e74\u5e86\uff0c\u9700\u8981\u7ed9\u6bcf\u4e2a\u5458\u5de5\u53d1\u9001\u90ae\u4ef6\u8bf4\u660e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u77ed\u4fe1\u5e73\u53f0\u540e\u53f0\u901a\u8fc7\u4e0a\u4f20 Excel \u7ed9\u4e00\u6279\u7528\u6237\u53d1\u9001\u77ed\u4fe1\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u4ee5\u53d1\u9001\u6279\u91cf\u77ed\u4fe1\u4e3e\u4f8b\u5b50\uff0c\u5047\u8bbe\u9700\u8981\u7ed9 100 \u4e07\u7528\u6237\u53d1\u9001\u77ed\u4fe1\u901a\u77e5\uff0c\u4e00\u6761\u77ed\u4fe1\u901a\u77e5\u6d41\u7a0b\u9700\u8981 50ms\uff0c\u521d\u6b65\u8ba1\u7b97\u5982\u679c\u8981\u7ed9\u6240\u6709\u7528\u6237\u53d1\u9001\u6210\u529f\uff0c\u6267\u884c\u65f6\u95f4\u5927\u6982\u9700\u8981 13 \u5c0f\u65f6\u5de6\u53f3\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/19bf5973-d132-4d5c-a8f1-66f11a58524c",alt:"image.png"})),(0,o.kt)("p",null,"\u5904\u7406\u6279\u91cf\u4efb\u52a1\u548c\u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42\u4e0d\u4e00\u81f4\uff0c\u5728\u540e\u8005\u7684\u4f7f\u7528\u573a\u666f\u4e2d\uff0c\u4e3b\u7ebf\u7a0b\u9700\u8981\u963b\u585e\u7684\u7b49\u5f85\u6240\u6709\u4efb\u52a1\u6267\u884c\u5b8c\u6210\uff0c\u56e0\u6b64\u5fc5\u987b\u8981\u5c3d\u53ef\u80fd\u51cf\u5c11\u7b49\u5f85\u65f6\u95f4\uff0c\u800c\u524d\u8005\u7684\u4f7f\u7528\u573a\u666f\u4e2d\u5219\u5b8c\u5168\u4e0d\u9700\u8981\u8003\u8651\u8fd9\u4e2a\u95ee\u9898\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5408\u9002\u7684\u963b\u585e\u961f\u5217\u7528\u6765\u7f13\u51b2\u4efb\u52a1\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5927\u91cf\u4efb\u52a1\u5806\u79ef\u7ebf\u7a0b\u6c60\u963b\u585e\u961f\u5217\u573a\u666f\u4e0b\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u9879\u76ee\u53d1\u5e03\u91cd\u542f\u6216\u8005\u610f\u5916\u5b95\u673a\u7b49\u60c5\u51b5\uff0c\u8fdb\u800c\u5bfc\u81f4\u4efb\u52a1\u4e22\u5931\u98ce\u9669\uff0c\u8be6\u60c5\u67e5\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"/concurrent/thread-pool/cbrhx6xrc802t8sy"},"\u2705 \u9879\u76ee\u91cd\u542f\u6216\u5b95\u673a\u65f6\u7ebf\u7a0b\u6c60\u4efb\u52a1\u8fd8\u6ca1\u5904\u7406\u5b8c\uff1f"))),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u901a\u8fc7\u7ebf\u7a0b\u6c60\u5e76\u53d1\u6267\u884c\uff0c\u5047\u8bbe\u7ebf\u7a0b\u6c60\u5185\u7ebf\u7a0b\u6570\u662f 10 \u4e2a\uff0c\u90a3\u4e48\u6267\u884c\u65f6\u95f4\u5c06\u4f1a\u5927\u5e45\u5ea6\u7f29\u51cf\uff0c\u6700\u4f73\u60c5\u51b5\u4f1a\u7f29\u77ed\u65f6\u95f4\u65f6\u95f4\u63a5\u8fd1 10 \u500d\u7684\u6027\u80fd\uff0c\u7ea6\u7b49\u4e8e 1 \u5c0f\u65f6 38 \u5206\u949f\u5de6\u53f3\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/f584d41e-71c5-4a50-ab8f-f923f6f80b1d",alt:"image.png"})),(0,o.kt)("h2",{id:"\u95ee\u9898\u8be6\u89e3"},"\u95ee\u9898\u8be6\u89e3"),(0,o.kt)("h3",{id:"1-\u5e76\u53d1\u6267\u884c\u83b7\u53d6\u7ed3\u679c"},"1. \u5e76\u53d1\u6267\u884c\u83b7\u53d6\u7ed3\u679c"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e32\u884c\u5316\u83b7\u53d6\u5546\u54c1\u8be6\u60c5\u4fe1\u606f\uff0c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nimport lombok.SneakyThrows;\n\n/**\n * \u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f@\u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42\uff0c\u6587\u7ae0\u9996\u53d1 <a href="https://open8gu.com"/>\n */\npublic class Main {\n\n    public static void main(String[] args) {\n        long startTime = System.currentTimeMillis();\n        getProductInventory();\n        getProductPromotions();\n        getProductReviews();\n        System.out.println("\u67e5\u8be2\u5546\u54c1\u8be6\u60c5\u8017\u65f6\uff1a" + (System.currentTimeMillis() - startTime));\n    }\n\n    /**\n     * \u83b7\u53d6\u5546\u54c1\u5e93\u5b58\u4fe1\u606f\n     */\n    @SneakyThrows\n    private static Object getProductInventory() {\n        Thread.sleep(50);\n        return new Object();\n    }\n\n    /**\n     * \u83b7\u53d6\u5546\u54c1\u4f18\u60e0\u4fe1\u606f\n     */\n    @SneakyThrows\n    private static Object getProductPromotions() {\n        Thread.sleep(80);\n        return new Object();\n    }\n\n    /**\n     * \u83b7\u53d6\u5546\u54c1\u8bc4\u8bba\u4fe1\u606f\n     */\n    @SneakyThrows\n    private static Object getProductReviews() {\n        Thread.sleep(50);\n        return new Object();\n    }\n}\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7a0b\u5e8f\u8f93\u51fa\u8017\u65f6\u5927\u6982\u5728 180ms \u5230 200ms \u4e4b\u95f4\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u662f\u4e32\u884c\u5316\uff0c\u6240\u4ee5\u8981\u5c06\u6240\u6709\u65b9\u6cd5\u8017\u65f6\u8fdb\u884c\u7d2f\u52a0\uff0c\u540c\u65f6\u8981\u52a0\u4e0a\u8ba1\u7b97\u673a\u8fd0\u884c\u6253\u5370\u548c\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u7b49\u6b65\u9aa4\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u901a\u8fc7\u7ebf\u7a0b\u6c60\u7684\u65b9\u5f0f\u5e76\u884c\u67e5\u8be2\uff0c\u9700\u8981\u91cd\u6784\u4e0b\u76f8\u5173\u903b\u8f91\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import lombok.SneakyThrows;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.Future;\nimport java.util.concurrent.SynchronousQueue;\nimport java.util.concurrent.ThreadPoolExecutor;\nimport java.util.concurrent.TimeUnit;\n\n/**\n * \u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f@\u5feb\u901f\u54cd\u5e94\u7528\u6237\u8bf7\u6c42\uff0c\u6587\u7ae0\u9996\u53d1 <a href="https://open8gu.com"/>\n */\npublic class Main {\n\n    private static final ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(\n            6,\n            9,\n            1024,\n            TimeUnit.SECONDS,\n            new SynchronousQueue<>());\n\n    @SneakyThrows\n    public static void main(String[] args) {\n        long startTime = System.currentTimeMillis();\n        List<Future<Object>> results = new ArrayList<>();\n        Future<Object> getProductInventory = threadPoolExecutor.submit(Main::getProductInventory);\n        results.add(getProductInventory);\n        Future<Object> getProductPromotions = threadPoolExecutor.submit(Main::getProductPromotions);\n        results.add(getProductPromotions);\n        Future<Object> getProductReviews = threadPoolExecutor.submit(Main::getProductReviews);\n        results.add(getProductReviews);\n        for (Future<Object> result : results) {\n            result.get();\n        }\n        System.out.println("\u67e5\u8be2\u5546\u54c1\u8be6\u60c5\u8017\u65f6\uff1a" + (System.currentTimeMillis() - startTime));\n        // \u4f18\u96c5\u7f16\u7801\uff0c\u8fd9\u91cc\u5982\u679c\u4e0d\u8fdb\u884c\u505c\u6b62\u7ebf\u7a0b\u6c60\uff0c\u6d4b\u8bd5\u65b9\u6cd5\u4e0d\u80fd\u4e3b\u52a8\u7ed3\u675f\n        threadPoolExecutor.shutdown();\n    }\n\n    /**\n     * \u83b7\u53d6\u5546\u54c1\u5e93\u5b58\u4fe1\u606f\n     */\n    @SneakyThrows\n    private static Object getProductInventory() {\n        Thread.sleep(50);\n        return new Object();\n    }\n\n    /**\n     * \u83b7\u53d6\u5546\u54c1\u4f18\u60e0\u4fe1\u606f\n     */\n    @SneakyThrows\n    private static Object getProductPromotions() {\n        Thread.sleep(80);\n        return new Object();\n    }\n\n    /**\n     * \u83b7\u53d6\u5546\u54c1\u8bc4\u8bba\u4fe1\u606f\n     */\n    @SneakyThrows\n    private static Object getProductReviews() {\n        Thread.sleep(50);\n        return new Object();\n    }\n}\n')),(0,o.kt)("p",null,"\u5e76\u53d1\u6267\u884c\u7684\u7a0b\u5e8f\u8017\u65f6\u5927\u6982\u5728 80ms \u5230 100ms \u4e4b\u95f4\uff0c\u56e0\u4e3a\u4e0a\u9762\u6709\u8bf4\uff0c\u7ebf\u7a0b\u6c60\u79cd\u5e76\u884c\u63d0\u4ea4\u4efb\u52a1\u7684\u5b8c\u6210\u65f6\u95f4\uff0c\u53d6\u51b3\u4e8e\u8fd9\u4e9b\u4efb\u52a1\u4e2d\u6267\u884c\u65f6\u95f4\u6700\u6162\u7684\u6d41\u7a0b\u3002"),(0,o.kt)("h3",{id:"2-\u6279\u5904\u7406\u4efb\u52a1"},"2. \u6279\u5904\u7406\u4efb\u52a1"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e32\u884c\u5316\u6279\u91cf\u53d1\u9001\u7528\u6237\u77ed\u4fe1\u901a\u77e5\uff0c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import cn.hutool.core.collection.ListUtil;\nimport lombok.SneakyThrows;\n\nimport java.util.List;\n\n/**\n * \u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f@\u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1\uff0c\u6587\u7ae0\u9996\u53d1 <a href="https://open8gu.com"/>\n */\npublic class Main {\n\n    public static void main(String[] args) {\n        List<String> phones = ListUtil.of("1560116xxxx", "1560116xxxx", "1560116xxxx", "1560116xxxx");\n        for (String phone : phones) {\n            sendPhoneSms(phone);\n        }\n    }\n\n    /**\n     * \u53d1\u9001\u624b\u673a\u77ed\u4fe1\u6d41\u7a0b\n     */\n    @SneakyThrows\n    private static void sendPhoneSms(String phone) {\n        Thread.sleep(50);\n    }\n}\n')),(0,o.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u7528\u963b\u585e\u961f\u5217\u6765\u7f13\u51b2\u4efb\u52a1\u3002\u63d0\u4ea4\u4efb\u52a1\u7684\u7ebf\u7a0b\u5c06\u4efb\u52a1\u63d0\u4ea4\u5230\u7ebf\u7a0b\u6c60\uff0c\u7136\u540e\u7ebf\u7a0b\u6c60\u4e2d\u7684\u7ebf\u7a0b\u4f1a\u4ece\u963b\u585e\u961f\u5217\u4e2d\u83b7\u53d6\u4efb\u52a1\u5e76\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u8fd9\u79cd\u6267\u884c\u65b9\u5f0f\u5141\u8bb8\u4efb\u52a1\u7684\u63d0\u4ea4\u548c\u6267\u884c\u89e3\u8026\uff0c\u63d0\u9ad8\u4e86\u7cfb\u7edf\u7684\u7075\u6d3b\u6027\u548c\u5e76\u53d1\u5904\u7406\u80fd\u529b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import cn.hutool.core.collection.ListUtil;\nimport lombok.SneakyThrows;\n\nimport java.util.List;\nimport java.util.concurrent.LinkedBlockingQueue;\nimport java.util.concurrent.ThreadPoolExecutor;\nimport java.util.concurrent.TimeUnit;\n\n/**\n * \u7ebf\u7a0b\u6c60\u6709\u54ea\u4e9b\u5e94\u7528\u573a\u666f@\u5feb\u901f\u5904\u7406\u6279\u91cf\u4efb\u52a1\uff0c\u6587\u7ae0\u9996\u53d1 <a href="https://open8gu.com"/>\n */\npublic class Main {\n\n    private static final ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(\n            10,\n            10,\n            1024,\n            TimeUnit.SECONDS,\n            new LinkedBlockingQueue<>(100000));\n\n    public static void main(String[] args) {\n        List<String> phones = ListUtil.of("1560116xxxx", "1560116xxxx", "1560116xxxx", "1560116xxxx");\n        for (String phone : phones) {\n            threadPoolExecutor.execute(() -> sendPhoneSms(phone));\n        }\n    }\n\n    /**\n     * \u53d1\u9001\u624b\u673a\u77ed\u4fe1\u6d41\u7a0b\n     */\n    @SneakyThrows\n    private static void sendPhoneSms(String phone) {\n        Thread.sleep(50);\n    }\n}\n')))}d.isMDXComponent=!0},9962:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f5c\u8005\uff1a\u7a0b\u5e8f\u5458\u9a6c\u4e01"),(0,o.kt)("p",null,"\u5728\u7ebf\u535a\u5ba2\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://open8gu.com"},"https://open8gu.com")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5927\u8bdd\u9762\u8bd5\uff0c\u6280\u672f\u540c\u5b66\u9762\u8bd5\u5fc5\u5907\u7684\u516b\u80a1\u6587\u5c0f\u518c\uff0c\u4ee5\u7cbe\u5f69\u56de\u7b54\u5e94\u5bf9\u6df1\u5ea6\u95ee\u9898\uff0c\u52a9\u529b\u4f60\u5728\u9762\u8bd5\u4e2d\u62ff\u4e2aoffer\u3002")))}l.isMDXComponent=!0}}]);