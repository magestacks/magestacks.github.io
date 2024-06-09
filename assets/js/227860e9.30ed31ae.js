"use strict";(self.webpackChunkopen_8gu=self.webpackChunkopen_8gu||[]).push([[4334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),s=l,k=d["".concat(o,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905)),a=n(9962);const i={id:"wpchd5zbg7z9uu67",sidebar_position:20,title:"Redis\u7684\u538b\u7f29\u5217\u8868\u662f\u4ec0\u4e48\uff1f"},p=void 0,o={unversionedId:"data-structure/wpchd5zbg7z9uu67",id:"data-structure/wpchd5zbg7z9uu67",title:"Redis\u7684\u538b\u7f29\u5217\u8868\u662f\u4ec0\u4e48\uff1f",description:"\u7b54\u9898\u601d\u8def",source:"@site/redis/data-structure/20.Redis\u7684\u538b\u7f29\u5217\u8868\u662f\u4ec0\u4e48\uff1f.md",sourceDirName:"data-structure",slug:"/data-structure/wpchd5zbg7z9uu67",permalink:"/redis/data-structure/wpchd5zbg7z9uu67",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"wpchd5zbg7z9uu67",sidebar_position:20,title:"Redis\u7684\u538b\u7f29\u5217\u8868\u662f\u4ec0\u4e48\uff1f"},sidebar:"community",previous:{title:"Redis\u5b57\u7b26\u4e32\u5e95\u5c42\u6570\u636e\u7ed3\u6784\uff1f",permalink:"/redis/data-structure/tbsvrxr5qlmqkauh"},next:{title:"Redis\u7684\u8df3\u8868\u662f\u4ec0\u4e48\uff1f",permalink:"/redis/data-structure/uo5bw9bha6ba4g1h"}},u={},c=[{value:"\u7b54\u9898\u601d\u8def",id:"\u7b54\u9898\u601d\u8def",level:2},{value:"\u56de\u7b54\u8bdd\u672f",id:"\u56de\u7b54\u8bdd\u672f",level:2},{value:"1. \u7ed3\u6784\u7279\u70b9",id:"1-\u7ed3\u6784\u7279\u70b9",level:3},{value:"2. \u8fde\u9501\u66f4\u65b0",id:"2-\u8fde\u9501\u66f4\u65b0",level:3},{value:"3. \u7d27\u51d1\u5217\u8868",id:"3-\u7d27\u51d1\u5217\u8868",level:3},{value:"\u95ee\u9898\u8be6\u89e3",id:"\u95ee\u9898\u8be6\u89e3",level:2},{value:"1. \u538b\u7f29\u5217\u8868",id:"1-\u538b\u7f29\u5217\u8868",level:3},{value:"2. \u7d27\u51d1\u5217\u8868",id:"2-\u7d27\u51d1\u5217\u8868",level:3}],d={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.ZP,{mdxType:"CommonContent"}),(0,l.kt)("h2",{id:"\u7b54\u9898\u601d\u8def"},"\u7b54\u9898\u601d\u8def"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/720cf6c7-b014-4d0c-9982-ec3b648e9c49",alt:null})),(0,l.kt)("h2",{id:"\u56de\u7b54\u8bdd\u672f"},"\u56de\u7b54\u8bdd\u672f"),(0,l.kt)("p",null,"Redis \u7684\u538b\u7f29\u5217\u8868\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"List"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Hash")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSet")," \u8fd9\u4e09\u79cd\u6570\u636e\u7ed3\u6784\u7684\u5e95\u5c42\u5b9e\u73b0\u4e4b\u4e00\u3002\u5b83\u7531\u4e00\u6bb5\u8fde\u7eed\u7684\u5185\u5b58\u5757\u7ec4\u6210\uff0c\u6bcf\u4e00\u5c0f\u6bb5\u5185\u5b58\u90fd\u5bf9\u5e94\u4e00\u4e2a\u8282\u70b9\u3002\u76f8\u5bf9\u4f20\u7edf\u7684\u94fe\u8868\uff0c\u5b83\u4e0d\u4f7f\u7528\u6307\u9488\u800c\u4f7f\u7528\u5185\u5b58\u504f\u79fb\u91cf\u8bb0\u5f55\u8282\u70b9\u95f4\u7684\u76f8\u5bf9\u5173\u7cfb\u3002"),(0,l.kt)("h3",{id:"1-\u7ed3\u6784\u7279\u70b9"},"1. \u7ed3\u6784\u7279\u70b9"),(0,l.kt)("p",null,"\u538b\u7f29\u5217\u8868\u7684\u5934\u90e8\u8bb0\u5f55\u4e86\u5360\u7528\u5185\u5b58\u5927\u5c0f\u3001\u5c3e\u8282\u70b9\u4f4d\u7f6e\u4e0e\u8282\u70b9\u603b\u6570\uff0c\u800c\u6bcf\u4e2a\u8282\u70b9\u90fd\u8bb0\u5f55\u4e86\u4e0a\u4e00\u8282\u70b9\u957f\u5ea6\u3001\u7f16\u7801\u683c\u5f0f\u548c\u6570\u636e\u3002\u8fd9\u79cd\u7b80\u6d01\u800c\u7d27\u51d1\u7684\u7ed3\u6784\u4f7f\u5176\u53ef\u4ee5\u4f7f\u7528\u5c3d\u53ef\u80fd\u5c0f\u7684\u5185\u5b58\u5b58\u5c3d\u53ef\u80fd\u591a\u7684\u6570\u636e\uff0c\u5e76\u4e14\u4ecd\u5177\u5907\u4f20\u7edf\u94fe\u8868\u7684\u6b63\u5411\u4e0e\u9006\u5411\u904d\u5386\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"2-\u8fde\u9501\u66f4\u65b0"},"2. \u8fde\u9501\u66f4\u65b0"),(0,l.kt)("p",null,"\u538b\u7f29\u5217\u8868\u7684\u6700\u5927\u95ee\u9898\u5728\u4e8e\uff0c\u5f53\u4fee\u6539\u8282\u70b9\u65f6\u9700\u8981\u4e00\u5e76\u4fee\u6539\u540e\u7ee7\u8282\u70b9\u8bb0\u5f55\u7684\u524d\u9a71\u8282\u70b9\u7684\u957f\u5ea6\uff0c\u5f53\u957f\u5ea6\u8d85\u8fc7\u7f16\u7801\u7c7b\u578b\u6240\u652f\u6301\u7684\u6700\u5927\u6570\u503c\u65f6\uff0c\u540e\u7ee7\u8282\u70b9\u4e5f\u9700\u8981\u91cd\u65b0\u5206\u914d\u5185\u5b58\u4ee5\u6539\u53d8\u7f16\u7801\u7c7b\u578b\u3002\u4f9d\u6b21\u7c7b\u63a8\uff0c\u5c31\u4f1a\u5bfc\u81f4\u8fde\u9501\u66f4\u65b0\u3002"),(0,l.kt)("h3",{id:"3-\u7d27\u51d1\u5217\u8868"},"3. \u7d27\u51d1\u5217\u8868"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fde\u9501\u66f4\u65b0\u95ee\u9898\uff0cRedis \u5728\u540e\u7eed\u8ba1\u5212\u5f15\u5165\u7d27\u51d1\u5217\u8868\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"listpack"),"\uff09\u66ff\u4ee3\u538b\u7f29\u5217\u8868\u3002\u5b83\u4e0e\u538b\u7f29\u5217\u8868\u4e00\u6837\uff0c\u90fd\u662f\u57fa\u4e8e\u4e00\u5757\u8fde\u7eed\u7684\u5185\u5b58\u5b9e\u73b0\u7684\u6709\u5e8f\u5217\u8868\uff0c\u4f46\u662f\u5b83\u7684\u8282\u70b9\u53ea\u8bb0\u5f55\u5f53\u524d\u8282\u70b9\u7684\u957f\u5ea6\uff0c\u800c\u4e0d\u8bb0\u5f55\u524d\u9a71\u8282\u70b9\u957f\u5ea6\u3002\u56e0\u6b64\u4fee\u6539\u8282\u70b9\u5e76\u4e0d\u4f1a\u89e6\u53d1\u8fde\u9501\u66f4\u65b0\u3002"),(0,l.kt)("h2",{id:"\u95ee\u9898\u8be6\u89e3"},"\u95ee\u9898\u8be6\u89e3"),(0,l.kt)("h3",{id:"1-\u538b\u7f29\u5217\u8868"},"1. \u538b\u7f29\u5217\u8868"),(0,l.kt)("p",null,"Redis \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"List"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Hash")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSet")," \u90fd\u662f\u4f7f\u7528\u538b\u7f29\u5217\u8868\u4f5c\u4e3a\u5176\u5b9e\u73b0\u65b9\u5f0f\u7684\u4e00\u79cd\u3002"),(0,l.kt)("p",null,"\u538b\u7f29\u5217\u8868\u662f\u4e00\u79cd\u7ed3\u6784\u7c7b\u4f3c\u6570\u7ec4\u3001\u7531\u8fde\u7eed\u7684\u6574\u6bb5\u5185\u5b58\u7ec4\u6210\u7684\u96c6\u5408\u3002\u5b83\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u5bf9\u5e94\u5176\u4e2d\u7684\u4e00\u5c0f\u5757\u5185\u5b58\u3002\u4e5f\u56e0\u6b64\u5982\u6b64\uff0c\u5b83\u7684\u8282\u70b9\u4e0d\u9700\u8981\u50cf\u94fe\u8868\u90a3\u6837\u4f7f\u7528\u5934\u5c3e\u6307\u9488\u4e92\u76f8\u5173\u8054\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u4f7f\u7528\u5185\u5b58\u504f\u79fb\u91cf\u8bb0\u5f55\u8282\u70b9\u95f4\u7684\u76f8\u5bf9\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/cd9ca6bc-8f6c-4e4a-a399-9d9079bfd891",alt:"image.png"})),(0,l.kt)("p",null,"\u538b\u7f29\u5217\u8868\u5728\u5934\u90e8\u8bb0\u5f55\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u4e09\u4e2a\u5c5e\u6027"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5217\u8868\u5927\u5c0f\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"zlbytes")," \uff09\uff0c\u5373\u6574\u6bb5\u5217\u8868\u5728\u5185\u5b58\u4e2d\u5360\u7528\u7684\u5b57\u8282\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c3e\u8282\u70b9\u4f4d\u7f6e\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"zltail"),"\uff09\uff0c\u4e5f\u5c31\u662f\u4ece\u961f\u5217\u5934\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u8d77\u59cb\u4f4d\u7f6e\u7684\u5185\u5b58\u504f\u79fb\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u6570\u91cf\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"zllen"),"\uff09\uff0c\u5373\u603b\u5171\u6709\u591a\u5c11\u4e2a\u8282\u70b9\u3002")),(0,l.kt)("p",null,"\u800c\u6bcf\u4e2a\u8282\u70b9\u4e2d\u53c8\u53ef\u4ee5\u5212\u5206\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u4e09\u4e2a\u90e8\u5206"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u4e00\u8282\u70b9\u957f\u5ea6\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"prelen"),"\uff09\uff0c\u7528\u4e8e\u5012\u5e8f\u904d\u5386\u65f6\u786e\u8ba4\u4e0a\u4e00\u8282\u70b9\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u7f16\u7801\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"encoding"),"\uff09\uff0c\u5b83\u540c\u65f6\u8bb0\u5f55\u4e86\u957f\u5ea6\u548c\u7f16\u7801\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\uff09\u3002")),(0,l.kt)("p",null,"\u76f8\u6bd4\u8d77\u4f20\u7edf\u7684\u94fe\u8868\uff0c\u538b\u7f29\u5217\u8868\u6700\u5927\u4f18\u70b9\u5c31\u662f",(0,l.kt)("strong",{parentName:"p"},"\u8282\u7701\u5185\u5b58"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u6570\u636e\u5b58\u50a8\u5728\u4e00\u6bb5\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u6240\u4ee5\u5b83\u7684\u7ed3\u6784\u5341\u5206\u7d27\u51d1\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u4f7f\u7528\u4e86\u5185\u5b58\u504f\u79fb\u91cf\u66ff\u4ee3\u4e86\u94fe\u8868\u4e2d\u7684\u6307\u9488\uff0c\u56e0\u6b64\u5728\u4fdd\u7559\u6b63\u5e8f\u548c\u5012\u5e8f\u904d\u5386\u80fd\u529b\u7684\u540c\u65f6\uff0c\u66f4\u8282\u7701\u5185\u5b58\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u6bcf\u4e2a\u8282\u70b9\u90fd\u8bb0\u5f55\u4e86\u7f16\u7801\uff0c\u56e0\u6b64\u80fd\u9488\u5bf9\u6bcf\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u800c\u4f7f\u7528\u6700\u8282\u7701\u5185\u5b58\u7684\u5185\u5b58\u5206\u914d\u65b9\u6848\uff1b")),(0,l.kt)("p",null,"\u4e0d\u8fc7\u5bf9\u5e94\u7684\uff0c\u538b\u7f29\u5217\u8868\u7684\u7f3a\u70b9\u4e5f\u975e\u5e38\u660e\u663e\uff0c\u90a3\u5c31\u662f",(0,l.kt)("strong",{parentName:"p"},"\u4fee\u6539\u6210\u672c\u9ad8"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u540e\u7ee7\u8282\u70b9\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"prelen")," \u8bb0\u5f55\u7684\u524d\u9a71\u8282\u70b9\u7684\u957f\u5ea6\uff0c\u56e0\u6b64\u5f53\u524d\u9a71\u8282\u70b9\u4fee\u6539\u540e\uff0c\u540e\u7ee7\u8282\u70b9\u5c31\u9700\u8981\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"li"},"prelen"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5f53",(0,l.kt)("inlineCode",{parentName:"li"},"prelen")," \u8d85\u8fc7\u5f53\u524d\u7c7b\u578b\u7f16\u7801\u7684\u6700\u5927\u5927\u5c0f\u65f6\uff0c\u5c31\u9700\u8981\u6539\u53d8\u7f16\u7801\u7c7b\u578b\uff0c\u5e76\u91cd\u65b0\u5206\u914d\u5185\u5b58\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u540e\u7ee7\u8282\u70b9\u91cd\u65b0\u5206\u914d\u5185\u5b58\u540e\uff0c\u5176\u540e\u7ee7\u8282\u70b9\u540c\u6837\u9762\u4e34\u4e00\u6837\u7684\u60c5\u51b5\uff0c\u5982\u6b64\u53cd\u590d\uff0c\u4ece\u800c\u53ef\u80fd\u5f15\u53d1",(0,l.kt)("strong",{parentName:"li"},"\u8fde\u9501\u66f4\u65b0"),"\u3002")),(0,l.kt)("p",null,"\u7efc\u4e0a\u8003\u8651\uff0cRedis \u4e00\u822c\u4ec5\u5728\u5b58\u50a8\u5c11\u91cf\u5c0f\u6570\u636e\u7684\u65f6\u5019\u624d\u4f1a\u4f7f\u7528\u538b\u7f29\u5217\u8868\uff0c\u800c\u6570\u636e\u6bd4\u8f83\u591a\u6216\u8005\u6bd4\u8f83\u5927\u7684\u65f6\u5019\u5c31\u4f1a\u6362\u6210\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u3002"),(0,l.kt)("h3",{id:"2-\u7d27\u51d1\u5217\u8868"},"2. \u7d27\u51d1\u5217\u8868"),(0,l.kt)("p",null,"\u9488\u5bf9\u538b\u7f29\u5217\u8868\u4fee\u6539\u65f6\u8868\u73b0\u51fa\u7684\u7f3a\u70b9\uff0cRedis \u5728\u66f4\u9ad8\u7684\u7248\u672c\u8ba1\u5212\u4f7f\u7528\u7d27\u51d1\u5217\u8868\uff08listpack\uff09\u66ff\u4ee3\u538b\u7f29\u5217\u8868\u3002"),(0,l.kt)("p",null,"\u7d27\u51d1\u5217\u8868\u548c\u538b\u7f29\u5217\u8868\u4e00\u6837\uff0c\u540c\u6837\u57fa\u4e8e\u4e00\u6574\u6bb5\u8fde\u7eed\u5185\u5b58\u5b58\u50a8\u6570\u636e\uff0c\u4e0d\u8fc7\u5b83\u7684\u5217\u8868\u5934\u548c\u8282\u70b9\u7684\u8bbe\u8ba1\u6709\u6240\u4e0d\u540c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/59279953-63e4-4ba1-b52c-05b1c50ccccc",alt:"image.png"})),(0,l.kt)("p",null,"\u7d27\u51d1\u5217\u8868\u5728\u5934\u90e8\u8bb0\u5f55\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u5c5e\u6027"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5217\u8868\u5927\u5c0f\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"total"),"\uff09\uff0c\u5373\u6574\u6bb5\u5217\u8868\u5728\u5185\u5b58\u4e2d\u5360\u7528\u7684\u5b57\u8282\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u6570\u91cf\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"num"),"\uff09\uff0c\u5373\u603b\u5171\u6709\u591a\u5c11\u4e2a\u8282\u70b9\u3002")),(0,l.kt)("p",null,"\u5b83\u7684\u8282\u70b9\u5219\u5305\u62ec",(0,l.kt)("strong",{parentName:"p"},"\u4e09\u4e2a\u90e8\u5206"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u957f\u5ea6\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"len"),"\uff09\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"encoding")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," \u7684\u603b\u957f\u5ea6\u3002\u6b63\u5411\u6216\u53cd\u5411\u904d\u5386\u4f9d\u8d56\u5b83\u5b8c\u6210\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u7f16\u7801\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"encoding"),"\uff09\u8282\u70b9\u7684\u7f16\u7801\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\uff09\u3002")),(0,l.kt)("p",null,"\u7531\u4e8e\u8282\u70b9\u4e0d\u518d\u8bb0\u5f55\u4e0a\u4e00\u8282\u70b9\u7684\u957f\u5ea6\uff0c\u4e0a\u4e00\u8282\u70b9\u7684\u91cd\u65b0\u5206\u914d\u5185\u5b58\u540e\uff0c\u5f53\u524d\u8282\u70b9\u672c\u8eab\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u4fee\u6539\uff0c\u8fd9\u6837\u5c31",(0,l.kt)("strong",{parentName:"p"},"\u907f\u514d\u4e86\u8fde\u9501\u66f4\u65b0"),"\u3002"))}s.isMDXComponent=!0},9962:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={toc:[]},i="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f5c\u8005\uff1a\u7a0b\u5e8f\u5458\u9a6c\u4e01"),(0,l.kt)("p",null,"\u5728\u7ebf\u535a\u5ba2\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://open8gu.com"},"https://open8gu.com")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5927\u8bdd\u9762\u8bd5\uff0c\u6280\u672f\u540c\u5b66\u9762\u8bd5\u5fc5\u5907\u7684\u516b\u80a1\u6587\u5c0f\u518c\uff0c\u4ee5\u7cbe\u5f69\u56de\u7b54\u5e94\u5bf9\u6df1\u5ea6\u95ee\u9898\uff0c\u52a9\u529b\u4f60\u5728\u9762\u8bd5\u4e2d\u62ff\u4e2aoffer\u3002")))}p.isMDXComponent=!0}}]);