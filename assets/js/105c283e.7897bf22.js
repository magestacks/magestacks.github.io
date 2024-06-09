"use strict";(self.webpackChunkopen_8gu=self.webpackChunkopen_8gu||[]).push([[1464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),k=r,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),l=t(9962);const o={id:"tc8yg7e1e6aa7khd",sidebar_position:200,title:"JDK\u4ee3\u7406\u548cCGLib\u4ee3\u7406\u7684\u533a\u522b\uff1f"},i=void 0,p={unversionedId:"spring/tc8yg7e1e6aa7khd",id:"spring/tc8yg7e1e6aa7khd",title:"JDK\u4ee3\u7406\u548cCGLib\u4ee3\u7406\u7684\u533a\u522b\uff1f",description:"\u56de\u7b54\u8bdd\u672f",source:"@site/framework/spring/200.JDK\u4ee3\u7406\u548cCGLib\u4ee3\u7406\u7684\u533a\u522b\uff1f.md",sourceDirName:"spring",slug:"/spring/tc8yg7e1e6aa7khd",permalink:"/framework/spring/tc8yg7e1e6aa7khd",draft:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{id:"tc8yg7e1e6aa7khd",sidebar_position:200,title:"JDK\u4ee3\u7406\u548cCGLib\u4ee3\u7406\u7684\u533a\u522b\uff1f"},sidebar:"community",previous:{title:"SpringAOP\u6709\u54ea\u4e9b\u6838\u5fc3\u7ec4\u4ef6\uff1f",permalink:"/framework/spring/kxgaagqol0n39f0h"},next:{title:"SpringBoot",permalink:"/framework/category/springboot"}},u={},c=[{value:"\u56de\u7b54\u8bdd\u672f",id:"\u56de\u7b54\u8bdd\u672f",level:2},{value:"\u95ee\u9898\u8be6\u89e3",id:"\u95ee\u9898\u8be6\u89e3",level:2},{value:"1. JDK \u4ee3\u7406",id:"1-jdk-\u4ee3\u7406",level:3},{value:"1.1. \u5b9e\u73b0\u539f\u7406",id:"11-\u5b9e\u73b0\u539f\u7406",level:4},{value:"1.2. \u4f7f\u7528\u9650\u5236",id:"12-\u4f7f\u7528\u9650\u5236",level:4},{value:"1.3. \u4f7f\u7528\u573a\u666f",id:"13-\u4f7f\u7528\u573a\u666f",level:4},{value:"2. CGLIB \u4ee3\u7406",id:"2-cglib-\u4ee3\u7406",level:3},{value:"2.1. \u5b9e\u73b0\u539f\u7406",id:"21-\u5b9e\u73b0\u539f\u7406",level:4},{value:"2.2. \u4e0e JDK \u4ee3\u7406\u7684\u4f7f\u7528\u533a\u522b",id:"22-\u4e0e-jdk-\u4ee3\u7406\u7684\u4f7f\u7528\u533a\u522b",level:4},{value:"2.3. \u57fa\u4e8e <code>@Configuration</code> \u7684\u914d\u7f6e\u7c7b\u4ee3\u7406",id:"23-\u57fa\u4e8e-configuration-\u7684\u914d\u7f6e\u7c7b\u4ee3\u7406",level:4}],m={toc:c},s="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.ZP,{mdxType:"CommonContent"}),(0,r.kt)("h2",{id:"\u56de\u7b54\u8bdd\u672f"},"\u56de\u7b54\u8bdd\u672f"),(0,r.kt)("p",null,"JDK \u4ee3\u7406\u548c CGLib \u4ee3\u7406\u90fd\u662f Spring \u9ed8\u8ba4\u652f\u6301\u7684\u4ee3\u7406\u6a21\u5f0f\uff0c\u5b83\u4eec\u7684\u533a\u522b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ee3\u7406\u5bf9\u8c61"),"\uff1aJDK \u4ee3\u7406\u53ea\u652f\u6301\u9762\u5411\u63a5\u53e3\u4ee3\u7406\uff0c\u800c CGLib \u4ee3\u7406\u9664\u4e86\u63a5\u53e3\u5916\uff0c\u4e5f\u53ef\u4ee5\u9762\u5411\u666e\u901a\u7684\u7c7b\u8fdb\u884c\u4ee3\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),"\uff1aJDK \u4ee3\u7406\u662f\u751f\u6210\u63a5\u53e3\u7684\u533f\u540d\u5b9e\u73b0\u7c7b\uff0c\u800c CGLib \u5219\u8fd8\u53ef\u4ee5\u751f\u6210\u76ee\u6807\u7c7b\u7684\u5b50\u7c7b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u62e6\u622a\u65b9\u6cd5"),"\uff1aJDK \u4ee3\u7406\u53ea\u652f\u6301\u62e6\u622a\u63a5\u53e3\u4e2d\u7684\u516c\u5171\u62bd\u8c61\u65b9\u6cd5\uff0c\u800c CGLib \u652f\u6301\u62e6\u622a\u4efb\u4f55\u975e\u79c1\u6709\u7684\u5b9e\u4f8b\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5185\u90e8\u8c03\u7528\u652f\u6301"),"\uff1aJDK \u4ee3\u7406\u4e0d\u652f\u6301\u4ee3\u7406\u5185\u90e8\u8c03\u7528\uff0c\u800c CGLib \u652f\u6301\uff0c\u7406\u7531\u540c\u4e0a\u4e00\u70b9\u3002")),(0,r.kt)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSpring \u4f1a\u4f18\u5148\u4f7f\u7528 JDK \u4ee3\u7406\uff0c\u4e0d\u8fc7\u5982\u76ee\u6807\u7c7b\u6ca1\u6709\u5b9e\u73b0\u4e00\u4e2a\u516c\u5171\u63a5\u53e3\uff0c\u90a3\u5c31\u4f1a\u57fa\u4e8e CGLib \u8fdb\u884c\u4ee3\u7406\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u90a3\u5c31\u662f\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@Configuration")," \u7684\u914d\u7f6e\u7c7b\uff0c\u5728 Full \u6a21\u5f0f\u4e0b\uff0c\u603b\u662f\u56fa\u5b9a\u4f7f\u7528 CGLib \u4ee3\u7406\u3002"),(0,r.kt)("h2",{id:"\u95ee\u9898\u8be6\u89e3"},"\u95ee\u9898\u8be6\u89e3"),(0,r.kt)("h3",{id:"1-jdk-\u4ee3\u7406"},"1. JDK \u4ee3\u7406"),(0,r.kt)("p",null,"\u9664\u4e86 SpringAOP \u5916\uff0cJDK \u4ee3\u7406\u4e5f\u88ab\u5e7f\u6cdb\u7684\u8fd0\u7528\u4e8e\u5404\u79cd\u6846\u67b6\u4e43\u81f3 JDK \u5185\u90e8\uff0c\u6bd4\u5982 Java \u7684\u6ce8\u89e3\u5176\u5b9e\u4e5f\u662f\u57fa\u4e8e JDK \u4ee3\u7406\u5b9e\u73b0\u7684\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"AnnotationInvocationHandler"),"\uff09\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u8bf4 JDK \u4ee3\u7406\u662f\u6211\u4eec\u65e5\u5e38\u4e2d\u6700\u7ecf\u5e38\u6253\u4ea4\u9053\u7684\u4ee3\u7406\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/0a543dcc-95f8-4ac4-8252-3c295040fc5b",alt:"image.png"})),(0,r.kt)("h4",{id:"11-\u5b9e\u73b0\u539f\u7406"},"1.1. \u5b9e\u73b0\u539f\u7406"),(0,r.kt)("p",null,"JDK \u4ee3\u7406\u7684\u7279\u5f81\u662f",(0,r.kt)("strong",{parentName:"p"},"\u9762\u5411\u63a5\u53e3\u4ee3\u7406"),"\uff0c\u5b83\u7684\u5b8c\u6574\u6267\u884c\u6d41\u7a0b\u5927\u81f4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u63d0\u4f9b\u63a5\u53e3"),"\uff1a\u5f53\u4f60\u751f\u6210\u4ee3\u7406\u65f6\uff0c\u4f60\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u7528\u4e8e\u4ee3\u7406\u7684\u63a5\u53e3\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa\u8c03\u7528\u62e6\u622a\u5668"),"\uff1a\u4f60\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u5b9e\u73b0\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"InvocationHandler")," \u63a5\u53e3\u7684\u8c03\u7528\u62e6\u622a\u5668\uff0c\u5b83\u662f\u771f\u6b63\u7528\u4e8e\u5b9e\u73b0\u4ee3\u7406\u903b\u8f91\u7684\u7c7b\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61"),"\uff1a \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Proxy.newProxyInstance"),"\u9759\u6001\u5de5\u5382\u65b9\u6cd5\u57fa\u4e8e\u63a5\u53e3\u751f\u6210\u4e00\u4e2a\u533f\u540d\u5b9e\u73b0\u7c7b\u5e76\u52a0\u8f7d\u5230 JVM\uff0c\u7136\u540e\u518d\u57fa\u4e8e\u8be5\u5b9e\u73b0\u7c7b\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u6240\u8bf4\u7684\u4ee3\u7406\u5bf9\u8c61\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u628a\u8c03\u7528\u59d4\u6258\u7ed9\u8c03\u7528\u62e6\u622a\u5668"),"\uff1a\u4ee3\u7406\u5bf9\u8c61\u5185\u90e8\u4f1a\u6301\u6709\u65b9\u6cd5\u62e6\u622a\u5668 ",(0,r.kt)("inlineCode",{parentName:"li"},"InvocationHandler"),"\uff0c\u5f53\u8c03\u7528\u8be5\u4ee3\u7406\u5bf9\u8c61\u7684\u65b9\u6cd5\u65f6\uff0c\u8be5\u65b9\u6cd5\u8c03\u7528\u5c06\u4f1a\u88ab\u59d4\u6258\u7ed9\u62e6\u622a\u5668\uff0c\u7136\u540e\u62e6\u622a\u5668\u518d\u771f\u6b63\u7684\u6267\u884c\u4e1a\u52a1\u903b\u8f91\u3002")),(0,r.kt)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684 JDK \u4ee3\u7406\u7684\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u63d0\u4f9b\u4e00\u4e2a\u63a5\u53e3\u7528\u4e8e\u4ee3\u7406\npublic interface Example {\n    public void sayHello();\n}\n\npublic ExampleInvocationHandler implements InvocationHandler {\n\n    /**\n     * \u6267\u884c\u8c03\u7528\u903b\u8f91\n     * \n     * @param obj \u4ee3\u7406\u5bf9\u8c61\n     * @param method \u88ab\u8c03\u7528\u7684\u65b9\u6cd5\n     * @param objs \u8c03\u7528\u7684\u53c2\u6570\n     */\n    @Override\n    public Object invoke(Object obj, Method method, Object[] objs) {\n            throws Throwable {\n        // \u5982\u679c\u8c03\u7528\u662f\u7684 sayHello \u65b9\u6cd5\uff0c\u5219\u8f93\u51fa \u201cHello world\u201d\n        if ("sayHello".equals(method.getName())) {\n            System.out.println("Hello world!");\n        }\n        // \u5176\u4ed6\u65b9\u6cd5\u8fd9\u91cc\u4e0d\u505a\u5904\u7406\uff0c\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a null\n        return null;\n    }\n}\n\npublic void run() {\n    Example proxy = (HelloInterface) Proxy.newProxyInstance(\n        Example.class.getClassLoader(),  // \u4ee3\u7406\u7c7b\u7684\u7c7b\u52a0\u8f7d\u5668\n        new Class[]{ Example.class },  // \u8981\u4ee3\u7406\u7684\u63a5\u53e3\n        handler // \u65b9\u6cd5\u62e6\u622a\u5668\n    );\n    proxy.sayHello(); // = "Hello world!"\n}\n')),(0,r.kt)("h4",{id:"12-\u4f7f\u7528\u9650\u5236"},"1.2. \u4f7f\u7528\u9650\u5236"),(0,r.kt)("p",null,"\u6839\u636e JDK \u4ee3\u7406\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u6211\u4eec\u4e0d\u96be\u770b\u51fa\u5b83\u7684\u4e00\u4e9b\u4f7f\u7528\u9650\u5236\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5fc5\u987b\u6709\u63a5\u53e3\u624d\u80fd\u4ee3\u7406"),"\uff1a\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u76ee\u6807\u7c7b\u6ca1\u6709\u5b9e\u73b0\u4e00\u4e2a\u7edf\u4e00\u7684\u63a5\u53e3\uff0c\u90a3\u4e48\u5c31\u65e0\u6cd5\u4ee3\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ea\u80fd\u4ee3\u7406\u516c\u5171\u65b9\u6cd5"),"\uff1a\u7531\u4e8e\u672c\u8d28\u4e0a\u662f\u751f\u6210\u4e86\u4e00\u4e2a\u63a5\u53e3\u5b9e\u73b0\u7c7b\uff0c\u56e0\u6b64\u53ea\u8981\u4e0d\u662f\u63a5\u53e3\u4e2d\u7684\u516c\u5171\u65b9\u6cd5\uff08\u66f4\u9ad8\u7248\u672c\u7684 JDK \u4e2d\u63a5\u53e3\u8fd8\u4f1a\u6709\u79c1\u6709\u65b9\u6cd5\uff09\uff0c\u5168\u90e8\u90fd\u65e0\u6cd5\u4ee3\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ea\u80fd\u4ee3\u7406\u5b9e\u4f8b\u65b9\u6cd5"),"\uff1a\u7406\u7531\u540c\u4e0a\uff0c\u9759\u6001\u65b9\u6cd5\u5c5e\u4e8e\u7c7b\u800c\u975e\u5b9e\u4f8b\uff0c\u56e0\u6b64\u4ee3\u7406\u5bf9\u8c61\u65e0\u6cd5\u62e6\u622a\u9759\u6001\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u65e0\u6cd5\u5904\u7406\u5185\u90e8\u8c03\u7528"),"\uff1a\u7531\u4e8e\u53ea\u6709\u901a\u8fc7\u4ee3\u7406\u5bf9\u8c61\u53d1\u8d77\u7684\u8c03\u7528\u624d\u80fd\u88ab\u59d4\u6258\u5230\u8c03\u7528\u62e6\u622a\u5668\uff0c\u56e0\u6b64\u5982\u679c\u88ab\u4ee3\u7406\u5bf9\u8c61\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u8c03\u7528\u5185\u90e8\u7684\u65b9\u6cd5\uff0c\u90a3\u4e48\u5c06\u65e0\u6cd5\u88ab\u62e6\u622a\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7531\u4e8e\u6211\u4eec\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u7684 Service \u57fa\u672c\u90fd\u662f\u57fa\u4e8e\u63a5\u53e3\u7684 JDK \u4ee3\u7406\uff0c\u56e0\u6b64\u8001\u751f\u5e38\u8c08\u7684 Spring \u58f0\u660e\u5f0f\u4e8b\u52a1\u5931\u6548\u7684\u95ee\u9898\u672c\u8d28\u4e0a\u5c31\u662f\u4ee3\u7406\u4e3a\u4ec0\u4e48\u4e0d\u751f\u6548\u7684\u95ee\u9898"),"\uff0c\u6bd4\u5982\u52a0\u4e86 final \u4fee\u9970\u7b26\u5bfc\u81f4\u4e8b\u52a1\u5931\u6548\uff0c\u6216\u8005\u901a\u8fc7 this \u8c03\u7528\u5185\u90e8\u52a0\u4e86\u4e8b\u52a1\u65b9\u6cd5\u5374\u65e0\u6cd5\u5f00\u542f\u4e8b\u52a1\u2026\u2026\u7b49\u7b49\uff0c\u672c\u8d28\u4e0a\u90fd\u56e0\u4e3a\u6ca1\u6709\u6210\u529f\u4ee3\u7406\u8c03\u7528\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e Spring \u58f0\u660e\u5f0f\u4e8b\u52a1\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f\u548c\u539f\u56e0\uff0c\u8bf7\u53c2\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.yuque.com/magestack/open8gu/ie2ny7th96uuynrc?view=doc_embed"},"Spring \u58f0\u660e\u5f0f\u4e8b\u52a1\u5931\u6548\u7684\u573a\u666f\uff1f"))),(0,r.kt)("h4",{id:"13-\u4f7f\u7528\u573a\u666f"},"1.3. \u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u4ece\u4e25\u683c\u610f\u4e49\u4e0a\u6765\u8bf4\uff0cJDK \u4ee3\u7406\u6709\u4e24\u79cd\u7528\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u65e0\u4e2d\u751f\u6709"),"\uff1a\u5373\u53ea\u6709\u63a5\u53e3\u800c\u6ca1\u6709\u5b9e\u73b0\u7c7b\uff0c\u4ee3\u7406\u76f8\u5f53\u4e8e\u51ed\u7a7a\u4e3a\u63a5\u53e3\u521b\u9020\u5b9e\u73b0\u7c7b\uff0c\u6bd4\u5982\u6211\u4eec Myabtis \u7684 Mapper \u63a5\u53e3\uff0cFeign \u8fd8\u6709 Dubbo \u8fd9\u7c7b\u6846\u67b6\u7684 RPC \u63a5\u53e3\u90fd\u662f\u5982\u6b64\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u79fb\u82b1\u63a5\u6728"),"\uff1a\u5373\u5df2\u7ecf\u6709\u4e86\u5b9e\u73b0\u7c7b\uff0c\u4f46\u662f\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u6765\u5b9e\u73b0\u4e00\u4e9b\u989d\u5916\u7684\u589e\u5f3a\uff0c\u6bd4\u5982\u6211\u4eec\u9879\u76ee\u4e2d\u7684 Service \u4e0a\u7684\u58f0\u660e\u5f0f\u4e8b\u52a1\u6216\u58f0\u660e\u5f0f\u91cd\u8bd5\u673a\u5236\u4fbf\u662f\u5982\u6b64\u3002")),(0,r.kt)("p",null,"\u4e0d\u8fc7\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cJDK \u7684\u52a8\u6001\u4ee3\u7406\u8fd8\u662f\u7528\u4e8e\u5b9e\u73b0\u7b2c\u4e00\u79cd\u9700\u6c42\uff0c\u5728 Spring \u4e2d\uff0c\u8fd9\u79cd\u6548\u679c\u5f80\u5f80\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"FactoryBean")," \u5b9e\u73b0\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e FactoryBean\uff0c\u8bf7\u53c2\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"/framework/spring/dhzlrik2ylop354g"},"\u2705 \u4ec0\u4e48\u662f FactoryBean\uff1f"))),(0,r.kt)("h3",{id:"2-cglib-\u4ee3\u7406"},"2. CGLIB \u4ee3\u7406"),(0,r.kt)("p",null,"CGLib \u4ee3\u7406\u4e5f\u662f Spring \u7684\u9ed8\u8ba4\u4ee3\u7406\u65b9\u5f0f\u4e4b\u4e00\uff0c\u5b83\u7684\u548c JDK \u4ee3\u7406\u6700\u5927\u7684\u533a\u522b\u5c31\u5728\u4e8e\u5b83\u901a\u8fc7 ASM \u64cd\u4f5c\u5b57\u8282\u7801\uff0c\u4ece\u800c\u52a8\u6001\u521b\u5efa\u76ee\u6807\u7c7b\u7684\u5b50\u7c7b\u6765\u5b9e\u73b0\u4ee3\u7406\u7684\u6548\u679c\uff0c\u53ef\u4ee5\u5728\u76ee\u6807\u5bf9\u8c61\u6ca1\u6709\u5b9e\u73b0\u63a5\u53e3\u7684\u60c5\u51b5\u8fdb\u884c\u4ee3\u7406\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u9664\u4e86 CGLib\uff0c\u76ee\u524d\u6d41\u884c\u7684\u5b57\u8282\u7801\u589e\u5f3a\u5e93\u57fa\u672c\u90fd\u652f\u6301\u8fd9\u79cd\u6a21\u5f0f\uff0c\u6bd4\u5982 ByteBuddy\uff0c\u6216\u8005 Javassist\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/open8gu/f20c27c1-5797-47fc-85f4-607e5f1f3be3",alt:"image.png"})),(0,r.kt)("h4",{id:"21-\u5b9e\u73b0\u539f\u7406"},"2.1. \u5b9e\u73b0\u539f\u7406"),(0,r.kt)("p",null,"CGLib \u4ee3\u7406\u4e0e JDK \u4ee3\u7406\u6709\u4e00\u4e9b\u4e0d\u540c\uff0c\u5b83\u540c\u6837\u9700\u8981\u4e00\u4e2a\u8c03\u7528\u62e6\u622a\u5668 ",(0,r.kt)("inlineCode",{parentName:"p"},"InvocationHandler")," \uff08\u5728 CGLib \u4e2d\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"Callback"),"\uff09\uff0c\u4f46\u662f\u5374\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Enhancer")," \u751f\u6210\u4ee3\u7406\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u63d0\u4f9b\u4e00\u4e2a\u7c7b\u7528\u4e8e\u4ee3\u7406\npublic abstract class Example {\n    public abstract void sayHello();\n}\n\n// \u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u63a5\u53e3\u662f org.springframework.cglib.proxy.InvocationHandler\npublic ExampleInvocationHandler implements InvocationHandler {\n\n    /**\n     * \u6267\u884c\u8c03\u7528\u903b\u8f91\n     * \n     * @param obj \u4ee3\u7406\u5bf9\u8c61\n     * @param method \u88ab\u8c03\u7528\u7684\u65b9\u6cd5\n     * @param objs \u8c03\u7528\u7684\u53c2\u6570\n     */\n    @Override\n    public Object invoke(Object obj, Method method, Object[] objs) {\n            throws Throwable {\n        // \u5982\u679c\u8c03\u7528\u662f\u7684 sayHello \u65b9\u6cd5\uff0c\u5219\u8f93\u51fa \u201cHello world\u201d\n        if ("sayHello".equals(method.getName())) {\n            System.out.println("Hello world!");\n        }\n        // \u5176\u4ed6\u65b9\u6cd5\u8fd9\u91cc\u4e0d\u505a\u5904\u7406\uff0c\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a null\n        return null;\n    }\n}\n\npublic static void run() {\n    Enhancer enhancer = new Enhancer();\n    enhancer.setSuperclass(Foo.class);\n    // \u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u7c7b\u662f org.springframework.cglib.proxy.InvocationHandler\uff0c\n    // \u5b83\u672c\u8d28\u4e0a\u662f org.springframework.cglib.proxy.Callback\n    enhancer.setCallback((InvocationHandler) (proxy, method, args1) -> {\n        // \u5982\u679c\u8c03\u7528\u662f\u7684 sayHello \u65b9\u6cd5\uff0c\u5219\u8f93\u51fa \u201cHello world\u201d\n        if ("sayHello".equals(method.getName())) {\n            System.out.println("Hello world!");\n        }\n        // \u5176\u4ed6\u65b9\u6cd5\u8fd9\u91cc\u4e0d\u505a\u5904\u7406\uff0c\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a null\n        return null;\n    });\n    ((Example)enhancer.create()).sayHello();\n}\n')),(0,r.kt)("p",null,"\u5f53\u7136\uff0cCGLib \u540c\u6837\u53ef\u4ee5\u57fa\u4e8e\u63a5\u53e3\u521b\u5efa\u4ee3\u7406\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5b83\u4e0e JDK \u4ee3\u7406\u5e76\u65e0\u5dee\u5f02\u3002"),(0,r.kt)("h4",{id:"22-\u4e0e-jdk-\u4ee3\u7406\u7684\u4f7f\u7528\u533a\u522b"},"2.2. \u4e0e JDK \u4ee3\u7406\u7684\u4f7f\u7528\u533a\u522b"),(0,r.kt)("p",null,"\u7531\u4e8e\u4ee3\u7406\u65b9\u5f0f\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u56e0\u6b64\u5b83\u5728\u4f7f\u7528\u4e0a\u4e0e JDK \u4ee3\u7406\u4e5f\u6709\u4e86\u533a\u522b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u57fa\u4e8e\u63a5\u53e3\u6216\u7c7b\u8fdb\u884c\u4ee3\u7406"),"\uff1aCGLib \u652f\u6301\u57fa\u4e8e\u63a5\u53e3\u4ee3\u7406\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5\u57fa\u4e8e\u7c7b\u4ee3\u7406\uff0c\u5728\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\u5b83\u5c06\u4f1a\u751f\u6210\u76ee\u6807\u7c7b\u7684\u5b50\u7c7b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ee3\u7406\u7c7b\u9700\u8981\u53ef\u4ee5\u7ee7\u627f"),"\uff1a\u7531\u4e8e\u9700\u8981\u57fa\u4e8e\u4ee3\u7406\u7c7b\uff0c\u56e0\u6b64\u4ee3\u7406\u7c7b\u4e0d\u53ef\u4ee5\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"final")," \u4fee\u9970\uff0c\u5426\u5219\u5c31\u6ca1\u6cd5\u7ee7\u627f\u4e86\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u4ee3\u7406\u4efb\u4f55\u975e\u79c1\u6709\u65b9\u6cd5"),"\uff1a\u7531\u4e8e JDK \u7684\u65b9\u6cd5\u91cd\u5199\u53ef\u4ee5\u91cd\u65b0\u7236\u7c7b\u4e2d\u9664\u4e86\u79c1\u6709\u65b9\u6cd5\u5916\u7684\u6240\u6709\u65b9\u6cd5\uff08\u9664\u975e\u88ab final \u4fee\u9970\uff09\uff0c\u56e0\u6b64\u4e0e JDK \u4ee3\u7406\u4e0d\u540c\uff0c\u5b83\u53ef\u4ee5\u4ee3\u7406\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"protected")," \u6216\u88ab\u9ed8\u8ba4\u4fee\u9970\u7b26\u4fee\u9970\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u4ee3\u7406\u5185\u90e8\u8c03\u7528"),"\uff1a\u7531\u4e8e\u76f8\u5f53\u4e8e\u76f4\u63a5\u91cd\u5199\u4e86\u5185\u90e8\u65b9\u6cd5\uff0c\u56e0\u6b64\u4f60\u901a\u8fc7 this \u8c03\u7528\u975e\u79c1\u6709\u65b9\u6cd5\u65f6\uff0c\u4ecd\u7136\u53ef\u4ee5\u89e6\u53d1\u4ee3\u7406\u3002")),(0,r.kt)("h4",{id:"23-\u57fa\u4e8e-configuration-\u7684\u914d\u7f6e\u7c7b\u4ee3\u7406"},"2.3. \u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h4"},"@Configuration")," \u7684\u914d\u7f6e\u7c7b\u4ee3\u7406"),(0,r.kt)("p",null,"CGLib \u8fd9\u79cd\u57fa\u4e8e\u5b50\u7c7b\u7684\u4ee3\u7406\u65e0\u7591\u6bd4 JDK \u4ee3\u7406\u8981\u5f3a\u5927\u5f88\u591a\u2014\u2014\u5c24\u5176\u662f\u53ef\u4ee5\u4ee3\u7406\u6240\u6709\u975e\u79c1\u6709\u65b9\u6cd5\u548c\u652f\u6301\u5185\u90e8\u8c03\u7528\u8fd9\u4e00\u70b9\u3002"),(0,r.kt)("p",null,"\u4e5f\u6b63\u56e0\u5982\u6b64\uff0cSpring \u5bf9\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@Configuration")," \u6ce8\u89e3\u7684\u914d\u7f6e\u7c7b\uff0c\u5f53\u5728 Full \u6a21\u5f0f\u603b\u662f\u4f1a\u56fa\u5b9a\u4f7f\u7528 CGLib \u8fdb\u884c\u4ee3\u7406\uff0c\u76ee\u7684\u5c31\u662f\u4fdd\u8bc1\u5de5\u5382\u65b9\u6cd5\u5728\u4e92\u76f8\u8c03\u7528\u7684\u60c5\u51b5\u4e0b\uff0c\u4f9d\u7136\u80fd\u591f\u4ece Spring \u5bb9\u5668\u4f18\u5148\u83b7\u53d6\u5df2\u7ecf\u521b\u5efa\u7684 Bean\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e Spring \u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@Configuration")," \u7684 Full \u914d\u7f6e\u6a21\u5f0f\uff0c\u8bf7\u53c2\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"/framework/spring/gaudxa9kfs8gwdzs"},"\u2705 @Configuration \u548c@Component \u6709\u4ec0\u4e48\u533a\u522b\uff1f"))))}k.isMDXComponent=!0},9962:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(7462),r=(t(7294),t(3905));const l={toc:[]},o="wrapper";function i(e){let{components:n,...t}=e;return(0,r.kt)(o,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f5c\u8005\uff1a\u7a0b\u5e8f\u5458\u9a6c\u4e01"),(0,r.kt)("p",null,"\u5728\u7ebf\u535a\u5ba2\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://open8gu.com"},"https://open8gu.com")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5927\u8bdd\u9762\u8bd5\uff0c\u6280\u672f\u540c\u5b66\u9762\u8bd5\u5fc5\u5907\u7684\u516b\u80a1\u6587\u5c0f\u518c\uff0c\u4ee5\u7cbe\u5f69\u56de\u7b54\u5e94\u5bf9\u6df1\u5ea6\u95ee\u9898\uff0c\u52a9\u529b\u4f60\u5728\u9762\u8bd5\u4e2d\u62ff\u4e2aoffer\u3002")))}i.isMDXComponent=!0}}]);