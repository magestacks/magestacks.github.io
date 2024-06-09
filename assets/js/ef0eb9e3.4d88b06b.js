"use strict";(self.webpackChunkopen_8gu=self.webpackChunkopen_8gu||[]).push([[9566],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),o=t(9962);const i={id:"kf7urcgrdof30x6i",sidebar_position:40,title:"\u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u6027\u80fd\u6307\u6807\uff1f"},l=void 0,p={unversionedId:"thread-pool/kf7urcgrdof30x6i",id:"thread-pool/kf7urcgrdof30x6i",title:"\u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u6027\u80fd\u6307\u6807\uff1f",description:"\u56de\u7b54\u8bdd\u672f",source:"@site/concurrent/thread-pool/40.\u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u6027\u80fd\u6307\u6807\uff1f.md",sourceDirName:"thread-pool",slug:"/thread-pool/kf7urcgrdof30x6i",permalink:"/concurrent/thread-pool/kf7urcgrdof30x6i",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"kf7urcgrdof30x6i",sidebar_position:40,title:"\u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u6027\u80fd\u6307\u6807\uff1f"},sidebar:"community",previous:{title:"\u7ebf\u7a0b\u6c60\u5982\u4f55\u5b9e\u73b0\u7ebf\u7a0b\u590d\u7528\u548c\u56de\u6536\uff1f",permalink:"/concurrent/thread-pool/gcg3etelu75edrnd"},next:{title:"\u5982\u4f55\u611f\u77e5\u7ebf\u7a0b\u6c60\u89e6\u53d1\u4e86\u62d2\u7edd\u7b56\u7565\uff1f",permalink:"/concurrent/thread-pool/deghvrhtfgq7v1ca"}},u={},c=[{value:"\u56de\u7b54\u8bdd\u672f",id:"\u56de\u7b54\u8bdd\u672f",level:2},{value:"\u95ee\u9898\u8be6\u89e3",id:"\u95ee\u9898\u8be6\u89e3",level:2},{value:"1. \u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u6570\u636e\uff1f",id:"1-\u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u6570\u636e",level:3},{value:"1.1. \u975e Spring Bean \u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6",id:"11-\u975e-spring-bean-\u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6",level:4},{value:"1.2. Spring Bean \u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6",id:"12-spring-bean-\u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6",level:4},{value:"2. \u7ebf\u7a0b\u6c60\u76d1\u63a7\u6307\u6807\u90fd\u6709\u54ea\u4e9b\uff1f",id:"2-\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6307\u6807\u90fd\u6709\u54ea\u4e9b",level:3},{value:"3. \u76d1\u63a7\u6570\u636e\u5982\u4f55\u5b58\u50a8\uff1f",id:"3-\u76d1\u63a7\u6570\u636e\u5982\u4f55\u5b58\u50a8",level:3},{value:"\u6587\u672b\u5f15\u8a00",id:"\u6587\u672b\u5f15\u8a00",level:2}],m={toc:c},d="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.ZP,{mdxType:"CommonContent"}),(0,a.kt)("h2",{id:"\u56de\u7b54\u8bdd\u672f"},"\u56de\u7b54\u8bdd\u672f"),(0,a.kt)("p",null,"\u7edd\u5927\u591a\u6570\u7684\u9879\u76ee\u5176\u5b9e\u90fd\u8fd0\u884c\u5728\u5927\u5927\u5c0f\u5c0f\u7684\u7ebf\u7a0b\u6c60\u4e2d\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u5bf9\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u72b6\u6001\u8fdb\u884c\u76d1\u63a7\uff0c\u90a3\u4e48\u5c31\u4e0d\u80fd\u53ca\u65f6\u7684\u53d1\u73b0\u95ee\u9898\u7684\u82d7\u5934\uff0c\u800c\u53ea\u80fd\u7b49\u5230\u95ee\u9898\u771f\u6b63\u53d1\u751f\u7684\u65f6\u5019\u518d\u8fdb\u884c\u8865\u6551\u3002\u6bd4\u5982\u5e38\u89c1\u7684\u7ebf\u7a0b\u6c60\u88ab\u6253\u6ee1\u7684\u95ee\u9898\uff0c\u5982\u679c\u80fd\u53ca\u65f6\u53d1\u73b0\u7ebf\u7a0b\u6c60\u6d88\u8d39\u901f\u7387\u4e0d\u8db3\uff0c\u4efb\u52a1\u79ef\u538b\u4e25\u91cd\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5c3d\u65e9\u5904\u7406\u907f\u514d\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/cd8d6acf-882f-453e-b1ea-a8bb8ccbff25",alt:"image.png"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u662f\u7ebf\u7a0b\u6c60\u63d0\u4f9b\u7684\u539f\u751f\u76d1\u63a7\u65b9\u6cd5\uff0c\u6709\u4e9b\u540c\u5b66\u770b\u4e86\u53ef\u80fd\u4f1a\u6bd4\u8f83\u7591\u60d1\uff0c\u963b\u585e\u961f\u5217\u660e\u660e\u4e5f\u662f\u7ebf\u7a0b\u6c60\u7684\u4e00\u90e8\u5206\uff0c\u4f46\u662f\u5728\u8fd9\u91cc\u9762\u4f3c\u4e4e\u5e76\u6ca1\u6709\u770b\u5230\u83b7\u53d6\u963b\u585e\u961f\u5217\u72b6\u6001\u7684 API\u3002"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u963b\u585e\u961f\u5217\u672c\u8eab\u5355\u72ec\u63d0\u4f9b\u4e86\u4e24\u4e2a\u83b7\u53d6\u72b6\u6001\u4fe1\u606f\u7684 API\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4ece\u963b\u585e\u961f\u5217\u4e0a\u91c7\u96c6\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u963b\u585e\u961f\u5217\u4e2d\u6709\u591a\u5c11\u5143\u7d20\uff0c\u8be5\u65b9\u6cd5\u5e76\u4e0d\u662f BlockingQueue \u63a5\u53e3\u72ec\u6709\uff0c\u800c\u662f\u7ee7\u627f\u81ea Collection \u63a5\u53e3\n */\nint size();\n\n/**\n * \u963b\u585e\u961f\u5217\u8fd8\u80fd\u5bb9\u7eb3\u591a\u5c11\u5143\u7d20\n */\nint remainingCapacity();\n")),(0,a.kt)("p",null,"\u6709\u4e86\u8fd9\u4e9b API \u540e\uff0c\u6211\u4eec\u5c31\u80fd\u83b7\u53d6\u5230\u7ebf\u7a0b\u6c60\u7684\u76f8\u5173\u8fd0\u884c\u6307\u6807\uff0c\u5e76\u5c06\u5176\u63a5\u5165\u76d1\u63a7\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u4ee5\u76ee\u524d\u4e92\u8054\u7f51\u4e3b\u6d41\u7684\u76d1\u63a7\u6280\u672f\u65b9\u6848\u6765\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bf8\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Micrometer")," \u8fd9\u7c7b\u6307\u6807\u5e93\u6765\u4ece\u7ebf\u7a0b\u6c60\u4e2d\u91c7\u96c6\u4e00\u4e9b\u8fd0\u884c\u6307\u6807\u5e76\u4e3a\u5176\u6253\u4e0a\u6807\u7b7e\uff0c\u7136\u540e\u518d\u901a\u8fc7\u5b9a\u65f6\u4efb\u52a1\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," \u5b9a\u671f\u7684\u4ece\u9879\u76ee\u4e2d\u62c9\u53d6\u6307\u6807\u6570\u636e\u3002\u8fd9\u4e9b\u6570\u636e\u6700\u7ec8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Grafana")," \u8fdb\u884c\u53ef\u89c6\u5316\u5c55\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/e88550c9-39bd-4837-a4c3-a7d41496f7bf",alt:"image.png"})),(0,a.kt)("p",null,"\u6709\u4e86\u76d1\u63a7\u65b9\u6848\u4ee5\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5ef6\u4f38\u51fa\u4e00\u4e9b\u544a\u8b66\u529f\u80fd\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u9608\u503c\u8bbe\u7f6e 80%\uff0c\u7ebf\u7a0b\u6c60\u6700\u5927\u7ebf\u7a0b\u6570 10\uff0c\u5f53\u6d3b\u8dc3\u7ebf\u7a0b\u6570\u8fbe\u5230 8 \u53d1\u8d77\u62a5\u8b66\u3002\u53ef\u4ee5\u77e5\u9053\u7ebf\u7a0b\u6570\u662f\u5426\u4e0d\u591f\uff0c\u8fdb\u800c\u6709\u6548\u8c03\u6574\u7ebf\u7a0b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u9608\u503c\u8bbe\u7f6e 80%\uff0c\u963b\u585e\u961f\u5217\u5bb9\u91cf 100\uff0c\u5f53\u961f\u5217\u5bb9\u91cf\u8fbe\u5230 80 \u53d1\u8d77\u62a5\u8b66\u3002\u76d1\u63a7\u963b\u585e\u961f\u5217\u5bb9\u91cf\u53ef\u4ee5\u8ba9\u6211\u4eec\u53ca\u65f6\u610f\u8bc6\u5230\u51fa\u73b0\u4efb\u52a1\u5806\u79ef\u3002")),(0,a.kt)("h2",{id:"\u95ee\u9898\u8be6\u89e3"},"\u95ee\u9898\u8be6\u89e3"),(0,a.kt)("h3",{id:"1-\u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u6570\u636e"},"1. \u5982\u4f55\u76d1\u63a7\u7ebf\u7a0b\u6c60\u6570\u636e\uff1f"),(0,a.kt)("p",null,"\u7531\u4e8e\u7ebf\u7a0b\u6c60\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u662f\u76f8\u5bf9\u72ec\u7acb\u7684\uff0c\u5f53\u6211\u4eec\u8c03\u7528\u83b7\u53d6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u72b6\u6001\u7684 API \u65f6\uff0c\u5b9e\u9645\u4e0a\u7ebf\u7a0b\u4e0e\u4efb\u52a1\u7684\u72b6\u6001\u90fd\u5728\u5b9e\u65f6\u7684\u53d8\u5316\uff0c\u56e0\u6b64\u8bf8\u5982\u5b8c\u6210\u4efb\u52a1\u6570\u6216\u8005\u5de5\u4f5c\u7ebf\u7a0b\u6570\u8fd9\u7c7b\u6570\u636e\u662f\u4e0d\u80fd\u4fdd\u8bc1\u7edd\u5bf9\u51c6\u786e\u4e14\u5b9e\u65f6\u6709\u6548\u7684\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u4e3a\u4e86\u6700\u5927\u5c42\u5ea6\u7684\u4fdd\u8bc1\u6570\u636e\u7684\u76f8\u5bf9\u51c6\u786e\u6027\uff0c\u7ebf\u7a0b\u6c60\u4f1a\u5728\u83b7\u53d6\u6570\u636e\u65f6\u52a0\u9501\uff08\u8fd9\u90e8\u5206\u540e\u6587\u4f1a\u89e3\u91ca\uff09\uff0c\u800c\u4e00\u65e6\u52a0\u9501\u53c8\u6beb\u65e0\u7591\u95ee\u7684\u4f1a\u5f71\u54cd\u5230\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u83b7\u53d6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u6570\u636e\u6d89\u53ca\u5230\u52a0\u9501\u884c\u4e3a\uff0c\u4e3a\u6b64\u6211\u4eec\u5e94\u8be5\u907f\u514d\u9891\u7e41\u83b7\u53d6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b9a\u65f6\u4efb\u52a1\u65b9\u5f0f\u91c7\u96c6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u6570\u636e\u5e76\u8fdb\u884c\u63a5\u4e0b\u6765\u6570\u636e\u4e0a\u62a5\u7b49\u64cd\u4f5c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u4e00\u822c\u4f1a\u628a",(0,a.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u6c60\u58f0\u660e\u4e3a Spring \u5bb9\u5668\u4e2d\u7684 Bean"),"\uff0c\u5bf9\u4e8e\u6b64\u7c7b\u7ebf\u7a0b\u6c60\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5728\u9879\u76ee Web \u5bb9\u5668\uff08\u5982 Tomcat\uff09\u542f\u52a8\u6210\u529f\u540e\uff0c\u8ba9\u91c7\u96c6\u5668\u76f4\u63a5\u4ece\u5bb9\u5668\u83b7\u53d6\u76f8\u5173\u7684\u7ebf\u7a0b\u6c60\u5b9e\u4f8b\u8fdb\u884c\u91c7\u96c6\u3002"),(0,a.kt)("p",null,"\u800c\u5982\u679c\u7ebf\u7a0b\u6c60\u4e0d\u88ab Spring \u7ba1\u7406\uff0c\u90a3\u4e48\u6211\u4eec\u5219\u9700\u8981\u5728 Spring \u5bb9\u5668\u542f\u52a8\u524d\u4e3b\u52a8\u7684\u5c06\u5176\u6ce8\u518c\u5230\u91c7\u96c6\u5668\u3002\u4e0b\u9762\u6211\u4eec\u7b80\u5355\u793a\u8303\u4e00\u4e0b\uff1a"),(0,a.kt)("h4",{id:"11-\u975e-spring-bean-\u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6"},"1.1. \u975e Spring Bean \u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6"),(0,a.kt)("p",null,"\u521b\u5efa\u7ebf\u7a0b\u6c60\u5b9a\u65f6\u4efb\u52a1\u6570\u636e\u91c7\u96c6\u5668\uff0c\u5728\u5e94\u7528\u542f\u52a8\u540e\u6267\u884c\u5b9a\u65f6\u4efb\u52a1\u83b7\u53d6\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u6570\u636e\uff0c\u5e76\u5c06\u91c7\u96c6\u5230\u7684\u7ebf\u7a0b\u6c60\u6570\u636e\u4e0a\u62a5\u5230\u76d1\u63a7\u7aef\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u7247\u6bb5\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"THREAD_POOL_EXECUTOR_LIST")," \u662f\u7ebf\u7a0b\u6c60\u76d1\u63a7\u5b58\u50a8\u5bb9\u5668\uff0c\u4ee3\u7801\u4e2d\u521b\u5efa\u7ebf\u7a0b\u6c60\u540e\u5c06\u5bf9\u8c61\u5b58\u50a8\u4e00\u4efd\u5230\u8be5\u96c6\u5408\u4e2d\u5373\u53ef\uff0c\u540e\u7eed\u5b9a\u65f6\u4efb\u52a1\u4f1a\u91c7\u96c6\u8be5\u7ebf\u7a0b\u6c60\u8fd0\u884c\u65f6\u76d1\u63a7\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import cn.hutool.core.thread.ThreadFactoryBuilder;\nimport lombok.RequiredArgsConstructor;\nimport org.springframework.boot.ApplicationArguments;\nimport org.springframework.boot.ApplicationRunner;\nimport org.springframework.stereotype.Component;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.ScheduledThreadPoolExecutor;\nimport java.util.concurrent.ThreadPoolExecutor;\nimport java.util.concurrent.TimeUnit;\n\n@Component\n@RequiredArgsConstructor\npublic class ThreadPoolSpringNotBeanDataCollector implements ApplicationRunner {\n\n    private static final List<ThreadPoolExecutor> THREAD_POOL_EXECUTOR_LIST = new ArrayList<>();\n\n    private final String COLLECT_VESSEL_TASK_NAME = "client_scheduled_collect_data_";\n    private final ScheduledThreadPoolExecutor COLLECT_VESSEL_EXECUTOR = new ScheduledThreadPoolExecutor(\n            1,\n            ThreadFactoryBuilder.create().setNamePrefix(COLLECT_VESSEL_TASK_NAME).build()\n    );\n\n    @Override\n    public void run(ApplicationArguments args) throws Exception {\n        // \u5ef6\u8fdf initialDelay \u540e\u5faa\u73af\u8c03\u7528. scheduleWithFixedDelay \u6bcf\u6b21\u6267\u884c\u65f6\u95f4\u4e3a\u4e0a\u4e00\u6b21\u4efb\u52a1\u7ed3\u675f\u65f6, \u5411\u540e\u63a8\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694\n        COLLECT_VESSEL_EXECUTOR.scheduleWithFixedDelay(\n                () -> THREAD_POOL_EXECUTOR_LIST.forEach(each -> {\n                    // \u6267\u884c\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6570\u636e\u91c7\u96c6\u4efb\u52a1\n                }),\n                10,  // \u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u5ef6\u8fdf\u65f6\u95f4\n                5,  // \u81ea\u5b9a\u4e49\u91c7\u96c6\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6570\u636e\u65f6\u95f4\u5468\u671f\n                TimeUnit.MILLISECONDS  // \u91c7\u96c6\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6570\u636e\u65f6\u95f4\u5355\u4f4d\uff0c\u9ed8\u8ba4\u6beb\u79d2\n        );\n    }\n\n    public void putExecutor(ThreadPoolExecutor executor) {\n        THREAD_POOL_EXECUTOR_LIST.add(executor);\n    }\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u89c9\u5f97\u4e1a\u52a1\u7ebf\u7a0b\u6c60\u662f\u9700\u8981\u76d1\u63a7\u7684\uff0c\u6211\u4eec\u901a\u8fc7\u4e0b\u8ff0\u65b9\u5f0f\u6dfb\u52a0\u5230\u76d1\u63a7\u5b58\u50a8\u5bb9\u5668\u5c5e\u6027\u4e2d\u5373\u53ef\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import lombok.RequiredArgsConstructor;\nimport org.springframework.beans.factory.InitializingBean;\nimport org.springframework.stereotype.Component;\n\nimport java.util.concurrent.LinkedBlockingDeque;\nimport java.util.concurrent.ThreadPoolExecutor;\nimport java.util.concurrent.TimeUnit;\n\n@Component\n@RequiredArgsConstructor\npublic class SendMessageService implements InitializingBean {\n\n    private final ThreadPoolSpringNotBeanDataCollector threadPoolSpringNotBeanDataCollector;\n\n    private final ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(\n            10,\n            10,\n            1024,\n            TimeUnit.SECONDS,\n            new LinkedBlockingDeque<>(4096)\n    );\n\n    @Override\n    public void afterPropertiesSet() throws Exception {\n        threadPoolSpringNotBeanDataCollector.putExecutor(threadPoolExecutor);\n    }\n}\n")),(0,a.kt)("h4",{id:"12-spring-bean-\u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6"},"1.2. Spring Bean \u7ebf\u7a0b\u6c60\u6570\u636e\u91c7\u96c6"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u628a\u7ebf\u7a0b\u6c60\u58f0\u660e\u4e3a Bean \u4ea4\u7ed9 Spring \u5bb9\u5668\u7ba1\u7406\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u4e0d\u9700\u8981\u518d\u624b\u52a8\u5c06\u5176\u6ce8\u518c\u5230\u91c7\u96c6\u5668\u4e86\uff0c\u76f4\u63a5\u8ba9\u91c7\u96c6\u5668\u5728\u542f\u52a8\u540e\u4e3b\u52a8\u4ece Spring \u5bb9\u5668\u83b7\u53d6\u6240\u6709\u7ebf\u7a0b\u6c60\u5b9e\u4f8b\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport cn.hutool.core.thread.ThreadFactoryBuilder;\nimport lombok.RequiredArgsConstructor;\nimport org.springframework.boot.ApplicationArguments;\nimport org.springframework.boot.ApplicationRunner;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Map;\nimport java.util.concurrent.ScheduledThreadPoolExecutor;\nimport java.util.concurrent.ThreadPoolExecutor;\nimport java.util.concurrent.TimeUnit;\n\n@Configuration\npublic class ThreadPoolConfiguration {\n\n    @Bean\n    public ThreadPoolExecutor customerThreadPoolExecutor() {\n        return new ThreadPoolExecutor(xxx, xxx, xxx, xxx);\n    }\n}\n\n@Component\n@RequiredArgsConstructor\npublic class ThreadPoolSpringBeanDataCollector implements ApplicationRunner {\n\n    private final String COLLECT_VESSEL_TASK_NAME = "client_scheduled_collect_data_";\n    private final ScheduledThreadPoolExecutor COLLECT_VESSEL_EXECUTOR = new ScheduledThreadPoolExecutor(\n            1,\n            ThreadFactoryBuilder.create().setNamePrefix(COLLECT_VESSEL_TASK_NAME).build()\n    );\n\n    private final ApplicationContext APPLICATION_CONTEXT;\n\n    @Override\n    public void run(ApplicationArguments args) throws Exception {\n        Map<String, ThreadPoolExecutor> threadPoolExecutorMap = APPLICATION_CONTEXT.getBeansOfType(ThreadPoolExecutor.class);\n        // \u5ef6\u8fdf initialDelay \u540e\u5faa\u73af\u8c03\u7528. scheduleWithFixedDelay \u6bcf\u6b21\u6267\u884c\u65f6\u95f4\u4e3a\u4e0a\u4e00\u6b21\u4efb\u52a1\u7ed3\u675f\u65f6, \u5411\u540e\u63a8\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694\n        COLLECT_VESSEL_EXECUTOR.scheduleWithFixedDelay(\n                () -> threadPoolExecutorMap.forEach((key, val) -> {\n                    // \u6267\u884c\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6570\u636e\u91c7\u96c6\u4efb\u52a1     \n                }),\n                10,  // \u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u5ef6\u8fdf\u65f6\u95f4\n                5,  // \u81ea\u5b9a\u4e49\u91c7\u96c6\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6570\u636e\u65f6\u95f4\u5468\u671f\n                TimeUnit.MILLISECONDS  // \u91c7\u96c6\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6570\u636e\u65f6\u95f4\u5355\u4f4d\uff0c\u9ed8\u8ba4\u6beb\u79d2\n        );\n    }\n}\n')),(0,a.kt)("p",null,"\u4e0d\u8bba\u7ebf\u7a0b\u6c60\u662f\u5426\u7531 Spring \u7ba1\u7406\uff0c\u91c7\u96c6\u7684\u65b9\u5f0f\u5927\u81f4\u76f8\u540c\u3002\u4e00\u79cd\u662f\u521b\u5efa\u597d\u7ebf\u7a0b\u6c60\u540e\u653e\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bb9\u5668\uff0c\u53e6\u4e00\u79cd\u5219\u662f\u4ece Spring \u5bb9\u5668\u4e2d\u83b7\u53d6\u3002"),(0,a.kt)("h3",{id:"2-\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6307\u6807\u90fd\u6709\u54ea\u4e9b"},"2. \u7ebf\u7a0b\u6c60\u76d1\u63a7\u6307\u6807\u90fd\u6709\u54ea\u4e9b\uff1f"),(0,a.kt)("p",null,"\u6839\u636e\u6211\u7684\u7406\u89e3\uff0c\u54b1\u4eec\u5728\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6307\u6807\u65f6\uff0c\u6536\u96c6\u7684\u6838\u5fc3\u6570\u636e\u5305\u62ec\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u5217\u8868\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7ebf\u7a0b\u6c60\u5f53\u524d\u8d1f\u8f7d"),"\uff1a\u5f53\u524d\u7ebf\u7a0b\u6570 / \u6700\u5927\u7ebf\u7a0b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7ebf\u7a0b\u6c60\u5cf0\u503c\u8d1f\u8f7d"),"\uff1a\u5f53\u524d\u7ebf\u7a0b\u6570 / \u6700\u5927\u7ebf\u7a0b\u6570\uff0c\u7ebf\u7a0b\u6c60\u8fd0\u884c\u671f\u95f4\u6700\u5927\u7684\u8d1f\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u6838\u5fc3\u7ebf\u7a0b\u6570"),"\uff1a\u7ebf\u7a0b\u6c60\u7684\u6838\u5fc3\u7ebf\u7a0b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u6700\u5927\u7ebf\u7a0b\u6570"),"\uff1a\u7ebf\u7a0b\u6c60\u9650\u5236\u540c\u65f6\u5b58\u5728\u7684\u7ebf\u7a0b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u5f53\u524d\u7ebf\u7a0b\u6570"),"\uff1a\u5f53\u524d\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u6d3b\u8dc3\u7ebf\u7a0b\u6570"),"\uff1a\u6267\u884c\u4efb\u52a1\u7684\u7ebf\u7a0b\u7684\u5927\u81f4\u6570\u76ee\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u6700\u5927\u51fa\u73b0\u7ebf\u7a0b\u6570"),"\uff1a\u7ebf\u7a0b\u6c60\u4e2d\u8fd0\u884c\u4ee5\u6765\u540c\u65f6\u5b58\u5728\u7684\u6700\u5927\u7ebf\u7a0b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u963b\u585e\u961f\u5217"),"\uff1a\u7ebf\u7a0b\u6c60\u6682\u5b58\u4efb\u52a1\u7684\u5bb9\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u961f\u5217\u5bb9\u91cf"),"\uff1a\u961f\u5217\u4e2d\u5141\u8bb8\u5143\u7d20\u7684\u6700\u5927\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u961f\u5217\u5143\u7d20"),"\uff1a\u961f\u5217\u4e2d\u5df2\u5b58\u653e\u7684\u5143\u7d20\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u961f\u5217\u5269\u4f59\u5bb9\u91cf"),"\uff1a\u961f\u5217\u4e2d\u8fd8\u53ef\u4ee5\u5b58\u653e\u7684\u5143\u7d20\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7ebf\u7a0b\u6c60\u4efb\u52a1\u5b8c\u6210\u603b\u91cf"),"\uff1a\u5df2\u5b8c\u6210\u6267\u884c\u7684\u4efb\u52a1\u7684\u5927\u81f4\u603b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u62d2\u7edd\u7b56\u7565\u6267\u884c\u6b21\u6570"),"\uff1a\u8fd0\u884c\u65f6\u629b\u51fa\u7684\u62d2\u7edd\u6b21\u6570\u603b\u6570\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u62d2\u7edd\u7b56\u7565\u6267\u884c\u6b21\u6570\u53c2\u6570\u5728\u539f\u751f\u7ebf\u7a0b\u6c60\u4e2d\u5e76\u6ca1\u6709 API \u4f53\u73b0\uff0c\u4e3a\u6b64\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u6269\u5c55\u7b56\u7565\u5b9e\u73b0\u8be5\u6307\u6807\u3002\u8be6\u60c5\u67e5\u770b\uff1a",(0,a.kt)("a",{parentName:"p",href:"/concurrent/thread-pool/deghvrhtfgq7v1ca"},"\u5982\u4f55\u611f\u77e5\u7ebf\u7a0b\u6c60\u89e6\u53d1\u4e86\u62d2\u7edd\u7b56\u7565\uff1f"))),(0,a.kt)("p",null,"\u8fd9\u4e9b\u6307\u6807\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u6392\u67e5\u5e76\u89e3\u51b3\u5927\u90e8\u5206\u56e0\u4e3a\u7ebf\u7a0b\u6c60\u5bfc\u81f4\u7684\u95ee\u9898\u3002\u5f53\u83b7\u53d6\u8fd9\u4e9b\u6307\u6807\u65f6\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5927\u591a\u90fd\u9700\u8981\u5148\u83b7\u53d6\u7ebf\u7a0b\u6c60\u4e2d\u7684\u4e3b\u9501\u624d\u80fd\u8fdb\u884c"),"\uff0c\u800c\u7ebf\u7a0b\u6c60\u7684\u521b\u5efa\u7ebf\u7a0b\u3001\u9500\u6bc1\u7ebf\u7a0b\u3001\u8bb0\u5f55\u5b8c\u6210\u4efb\u52a1\u6570\u7b49\u64cd\u4f5c\u4e5f\u540c\u6837\u9700\u8981\u83b7\u53d6\u8fd9\u628a\u9501\u3002"),(0,a.kt)("p",null,"\u8fd9\u610f\u5473\u7740\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u6211\u4eec\u9891\u7e41\u7684\u8c03\u7528\u8fd9\u4e9b\u9700\u8981\u83b7\u53d6\u4e3b\u9501\u7684 API\uff0c\u90a3\u4e48\u5fc5\u7136\u4f1a\u5f71\u54cd\u7ebf\u7a0b\u6c60\u7684\u6b63\u5e38\u8fd0\u884c"),"\uff0c\u8fdb\u800c\u5f71\u54cd\u5230\u7ebf\u7a0b\u6c60\u7684\u6267\u884c\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5c3d\u53ef\u80fd\u7684\u907f\u514d\u9891\u7e41\u7684\u83b7\u53d6\u8fd9\u4e9b\u53c2\u6570\uff0c\u8fd9\u4e5f\u662f\u6211\u4eec\u5728\u4e0a\u6587\u4e0d\u63a8\u8350\u76f4\u63a5\u5728\u7ebf\u7a0b\u6c60\u91cc\u9762\u57cb\u70b9\u7edf\u8ba1\u8fd0\u884c\u6307\u6807\u7684\u539f\u56e0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"final ReentrantLock mainLock = this.mainLock;\nmainLock.lock();\ntry {\n    xxxxx\n} finally {\n    mainLock.unlock();\n}\n")),(0,a.kt)("h3",{id:"3-\u76d1\u63a7\u6570\u636e\u5982\u4f55\u5b58\u50a8"},"3. \u76d1\u63a7\u6570\u636e\u5982\u4f55\u5b58\u50a8\uff1f"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6307\u6807\u5982\u679c\u53ea\u80fd\u652f\u6301\u5b9e\u65f6\u67e5\u770b\uff0c\u5e76\u4e0d\u80fd\u5e2e\u5fd9\u5f00\u53d1\u65e5\u5e38\u6392\u67e5\u9519\u8bef\u3002\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u751f\u4ea7\u4e0a\u7684\u95ee\u9898\u53d1\u73b0\u4f1a\u6709\u5ef6\u8fdf\u3002\u6bd4\u5982 12:30 \u51fa\u73b0\u7684\u95ee\u9898\uff0c\u4e1a\u52a1\u4eba\u5458 13:00 \u8fdb\u884c\u7684\u53cd\u9988\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u5e2e\u52a9\u5f00\u53d1\u6392\u9519\uff0c\u6211\u4eec\u9700\u8981\u5c06\u7ebf\u7a0b\u6c60\u7684\u5386\u53f2\u8fd0\u884c\u6570\u636e\u8fdb\u884c\u5b58\u50a8\u3002\u8bf4\u5230\u7ebf\u7a0b\u6c60\u5386\u53f2\u8fd0\u884c\u6570\u636e\u7684\u5b58\u50a8\uff0c\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u65f6\u5e8f\u6570\u636e\u5e93\uff08TSDB\uff09")," \u662f\u6700\u5408\u9002\u7684\u3002\u4f46\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u516c\u53f8\u4e0d\u4f1a\u4e3a\u4e86\u8fd9\u4e00\u4e2a\u9700\u6c42\u642d\u5efa\u6216\u8005\u91c7\u8d2d\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u90a3\u5c31\u53ef\u4ee5\u4f7f\u7528\u6298\u4e2d\u65b9\u6848\uff0c\u6bd4\u5982\u8bf4 MySQL\u3001ElasticSearch \u7b49\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5 MySQL \u4e3a\u4f8b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"his_run_data")," \u5386\u53f2\u8fd0\u884c\u6570\u636e\u8868\uff0c\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `his_run_data` (\n  `thread_pool_id` varchar(56) DEFAULT NULL COMMENT '\u7ebf\u7a0b\u6c60ID',\n  `instance_id` varchar(256) DEFAULT NULL COMMENT '\u5b9e\u4f8bID',\n  `current_load` bigint(20) DEFAULT NULL COMMENT '\u5f53\u524d\u8d1f\u8f7d',\n  `peak_load` bigint(20) DEFAULT NULL COMMENT '\u5cf0\u503c\u8d1f\u8f7d',\n  `pool_size` bigint(20) DEFAULT NULL COMMENT '\u7ebf\u7a0b\u6570',\n  `active_size` bigint(20) DEFAULT NULL COMMENT '\u6d3b\u8dc3\u7ebf\u7a0b\u6570',\n  `queue_capacity` bigint(20) DEFAULT NULL COMMENT '\u961f\u5217\u5bb9\u91cf',\n  `queue_size` bigint(20) DEFAULT NULL COMMENT '\u961f\u5217\u5143\u7d20',\n  `queue_remaining_capacity` bigint(20) DEFAULT NULL COMMENT '\u961f\u5217\u5269\u4f59\u5bb9\u91cf',\n  `completed_task_count` bigint(20) DEFAULT NULL COMMENT '\u5df2\u5b8c\u6210\u4efb\u52a1\u8ba1\u6570',\n  `reject_count` bigint(20) DEFAULT NULL COMMENT '\u62d2\u7edd\u6b21\u6570',\n  `timestamp` bigint(20) DEFAULT NULL COMMENT '\u65f6\u95f4\u6233',\n  `gmt_create` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gmt_modified` datetime DEFAULT NULL COMMENT '\u4fee\u6539\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  KEY `idx_group_key` (`tp_id`,`instance_id`) USING BTREE,\n  KEY `idx_timestamp` (`timestamp`) USING BTREE\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='\u5386\u53f2\u8fd0\u884c\u6570\u636e\u8868';\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5efa\u8868\u8bed\u53e5\u4e2d\u6709\u4e09\u4e2a\u5173\u952e\u5b57\u6bb5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_pool_id"),"\uff1a\u8868\u793a\u5f53\u524d\u6570\u636e\u7684\u7ebf\u7a0b\u6c60\u6807\u8bc6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"instance_id"),"\uff1a\u5e94\u7528\u53ef\u80fd\u96c6\u7fa4\u90e8\u7f72\uff0c\u6807\u8bc6\u96c6\u7fa4\u4e0b\u552f\u4e00\u7684\u7ebf\u7a0b\u6c60\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp"),"\uff1a\u8bb0\u5f55\u7ebf\u7a0b\u6c60\u8fd0\u884c\u6570\u636e\u4ea7\u751f\u65f6\u7684\u65f6\u95f4\u6233\u3002")),(0,a.kt)("p",null,"\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u7ebf\u4e0a\u7684\u7ebf\u7a0b\u6c60\u662f\u6e90\u6e90\u4e0d\u65ad\u4ea7\u751f\u8fd0\u884c\u6570\u636e\u7684\uff0c\u8fdf\u65e9\u4e0d\u5f97\u628a\u8868\u7684\u6570\u636e\u91cf\u63a8\u5230\u4e0a\u4ebf\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56e0\u4e3a\u6570\u636e\u662f\u6709\u65f6\u6548\u6027\u7684"),"\uff0c\u8fc7\u4e86\u4e00\u5b9a\u65f6\u95f4\u4e4b\u540e\uff0c\u5c31\u6ca1\u6709\u5fc5\u8981\u518d\u5360\u7528\u5b9e\u65f6\u7684\u8d44\u6e90\u3002\u9488\u5bf9\u4e0a\u8ff0\u95ee\u9898\u63d0\u4f9b\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u6570\u636e\u5b58\u50a8 1 \u5929\uff0c\u5982\u679c\u8d85\u51fa\u8fd9\u4e2a\u65f6\u95f4\uff0c\u76f4\u63a5\u5220\u9664\u5373\u53ef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u4e0a\u6240\u8ff0\uff0c\u8fc7\u671f\u6570\u636e\u53ef\u4ee5\u4fdd\u7559\u5230\u5907\u4efd\u8868\u4e2d\uff0c\u5e76\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"his_run_data")," \u6570\u636e\u3002")),(0,a.kt)("p",null,"\u53ef\u80fd\u6709\u7684\u5c0f\u4f19\u4f34\u8fd8\u4f1a\u62c5\u5fc3\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u91cf\u592a\u5927\u4f1a\u4e0d\u4f1a\u5bfc\u81f4\u67e5\u8be2\u65f6\u8fc7\u6162"),"\uff1f\u6211\u4eec\u53ef\u4ee5\u7b97\u4e00\u4e0b\uff0c\u5047\u8bbe\u6709 100 \u4e2a\u5e94\u7528\uff0c\u6bcf\u4e2a\u5e94\u7528\u90e8\u7f72 10 \u4e2a\u8282\u70b9\u3002\u5047\u8bbe\u6570\u636e\u6709\u6548\u671f\u4e3a 1 \u5c0f\u65f6\uff0c\u90a3\u4e48\u53ef\u4ee5\u4ea7\u51fa\u7684\u6570\u636e\u662f 72 \u4e07\uff0c\u4e00\u5929\u4e5f\u5c31\u662f 1728 \u4e07\u3002\u5bf9\u4e8e MySQL \u800c\u8a00\uff0c\u51e0\u5343\u4e07\u6570\u636e\u91cf\u4ee5\u4e0b\u9488\u5bf9\u7d22\u5f15\u7684\u67e5\u8be2\uff0c\u90fd\u4e0d\u4f1a\u4ea7\u751f\u6027\u80fd\u74f6\u9888\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u4fdd\u5b58\u65f6\u95f4\u66f4\u957f\u6216\u8005\u5e94\u7528\u4ee5\u53ca\u8282\u70b9\u6570\u636e\u66f4\u591a\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u91c7\u7528\u5206\u8868\u65b9\u6848\u5b58\u50a8\uff0c\u4ee5\u6b64\u4fdd\u969c\u771f\u5b9e\u4f01\u4e1a\u7ea7\u5e94\u7528\u6570\u636e\u6d77\u91cf\u5b58\u50a8\u3002"),(0,a.kt)("h2",{id:"\u6587\u672b\u5f15\u8a00"},"\u6587\u672b\u5f15\u8a00"),(0,a.kt)("p",null,"\u6211\u5f00\u6e90\u4e86\u4e00\u6b3e\u7ebf\u7a0b\u6c60\u6846\u67b6 Hippo4j\uff0c\u652f\u6301\u7ebf\u7a0b\u6c60\u52a8\u6001\u53d8\u66f4\\&\u76d1\u63a7\\&\u62a5\u8b66\u3002\u4e0a\u6587\u4e2d\u7684\u76d1\u63a7\u76f8\u5173\u529f\u80fd\u4ee5\u53ca\u5bf9\u5e94\u6307\u6807\u5747\u4ee5\u5b9e\u73b0\uff0cGitHub \u5df2\u6536\u83b7 ",(0,a.kt)("inlineCode",{parentName:"p"},"5.2k")," Star\uff0c\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u6b22\u8fce\u67e5\u9605\u8be5\u6846\u67b6\u3002"),(0,a.kt)("p",null,"\u5f00\u6e90\u4ed3\u5e93\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opengoofy/hippo4j"},"github.com/opengoofy/hippo4j")))}s.isMDXComponent=!0},9962:(e,n,t)=>{t.d(n,{ZP:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={toc:[]},i="wrapper";function l(e){let{components:n,...t}=e;return(0,a.kt)(i,(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f5c\u8005\uff1a\u7a0b\u5e8f\u5458\u9a6c\u4e01"),(0,a.kt)("p",null,"\u5728\u7ebf\u535a\u5ba2\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://open8gu.com"},"https://open8gu.com")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5927\u8bdd\u9762\u8bd5\uff0c\u6280\u672f\u540c\u5b66\u9762\u8bd5\u5fc5\u5907\u7684\u516b\u80a1\u6587\u5c0f\u518c\uff0c\u4ee5\u7cbe\u5f69\u56de\u7b54\u5e94\u5bf9\u6df1\u5ea6\u95ee\u9898\uff0c\u52a9\u529b\u4f60\u5728\u9762\u8bd5\u4e2d\u62ff\u4e2aoffer\u3002")))}l.isMDXComponent=!0}}]);