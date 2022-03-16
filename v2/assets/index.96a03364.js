import{j as b,a as f,l as C,c as F,m as v,y as j,S as x}from"./vendor.09405598.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}};L();const N="_LinkButton_1rat4_1";var y={LinkButton:N};const u=b,i=f,D=e=>u("a",{className:y.LinkButton,target:"_blank",href:e.href,children:e.children}),V="_HomeView_1rgdu_1",$="_content_1rgdu_15";var w={HomeView:V,content:$};const T=()=>u("div",{className:w.HomeView,children:i("section",{className:w.content,children:[u("h1",{children:"\u4F60\u597D\uFF0C\u543E\u8F88\u540D\u4E3A"}),u("h2",{children:"\u7409\u7483"}),u("h2",{children:"\u543E\u8F88\u57FA\u4E8E web \u6280\u672F\u521B\u9020\u5404\u79CD\u4E1C\u897F"}),i("p",{children:["\u73B0\u5728\u662F\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u559C\u6B22\u6298\u817E\u6709\u8DA3\u7684\u6280\u672F\u3001\u4E8C\u6B21\u5143\u3001\u5F00\u6E90\u548C\u5206\u4EAB\uFF0C\u76EE\u524D\u4E13\u6CE8\u4E8E"," ",u("a",{target:"_blank",href:"https://github.com/rxliuli/liuli-tools",children:"\u524D\u7AEF\u5DE5\u7A0B\u5316"})," ","\u3002"]}),u(D,{href:"https://webos.rxliuli.com",children:"\u770B\u770B webos"})]})}),W="_ExperienceView_wt67q_1",M="_tab_wt67q_13",I="_active_wt67q_71",S="_content_wt67q_81";var p={ExperienceView:W,tab:M,active:I,content:S};const H="_AboutView_eic8e_1",R="_header_eic8e_27",q="_tab_eic8e_75",z="_skills_eic8e_83",O="_avatar_eic8e_123";var d={AboutView:H,header:R,tab:q,skills:z,avatar:O},G="/v2/assets/avatar.218d3797.jpg";const B=e=>i("h2",{className:d.header,children:[u("span",{children:e.order}),e.children]}),J=["TypeScript","React","Vue3","Golang","\u5DE5\u7A0B\u5316"],P=()=>i("div",{id:"about",className:d.AboutView,children:[u(B,{order:"01.",children:"\u5173\u4E8E"}),i("section",{className:d.content,children:[u("p",{children:"\u4F60\u597D\uFF0C\u543E\u8F88\u662F rxliuli\uFF0C\u4E2D\u6587\u540D\u662F\u7409\u7483\u3002\u543E\u8F88\u66FE\u7ECF\u662F\u4E00\u4E2A Java CURD \u7814\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u540E\u9762\u611F\u89C9\u73B0\u4EE3\u524D\u7AEF\u65E5\u65B0\u6708\u5F02\uFF0C\u6709\u8BB8\u591A\u65B0\u5947\u7684\u4E1C\u897F\uFF0C\u6240\u4EE5\u5728 2019 \u5E74\u6B63\u5F0F\u8F6C\u6362\u4E3A\u524D\u7AEF\u5DE5\u4F5C\u3002"}),u("p",{children:"\u5FEB\u8FDB\u5230\u4ECA\u5929\uFF0C\u543E\u8F88\u73B0\u5728\u5728\u4E00\u4E2A\u505A\u7740\u7C7B\u4F3C\u4E8E webos \u4E1C\u897F\u7684\u516C\u53F8\uFF0C\u53EF\u4EE5\u82B1\u66F4\u591A\u7684\u65F6\u95F4\u6765\u505A\u4E00\u4E9B\u957F\u7EBF\u7684\u4E8B\u60C5\uFF0C\u50CF\u662F\u5404\u79CD\u524D\u7AEF\u5DE5\u7A0B\u5316\u7684\u57FA\u5EFA\uFF0C\u4EE5\u53CA\u57FA\u4E8E web \u7684\u5E94\u7528\u5E73\u53F0\u7814\u53D1\u3002"}),u("p",{children:"\u867D\u7136\u516C\u53F8\u4F7F\u7528\u4E86 vue3+typescript\uFF0C\u4F46\u543E\u8F88\u66F4\u559C\u6B22 react\uFF0C\u6240\u4EE5\u793E\u533A\u9879\u76EE\u4ECD\u7136\u7EE7\u7EED\u4F7F\u7528\u5B83\u5F00\u53D1\u3002"}),u("p",{children:"\u4EE5\u4E0B\u662F\u6700\u8FD1\u4E00\u76F4\u5728\u4F7F\u7528\u7684\u4E00\u4E9B\u6280\u672F\uFF1A"}),u("ul",{className:d.skills,children:J.map(e=>u("li",{children:e},e))})]}),u("section",{className:d.avatar,children:u("img",{src:G,alt:"\u6211\u7684\u7167\u7247"})})]}),k=[{name:"\u5317\u4EAC\u5947\u5CB1\u677E",link:"https://www.zhipin.com/gongsi/2328926c2da3d0090XF52tS1GQ~~.html",jobTitle:"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",start:"2021-07",stop:"\u81F3\u4ECA",list:["\u524D\u7AEF\u5DE5\u7A0B\u5316\u548C\u57FA\u7840\u5EFA\u8BBE\uFF0C\u5305\u62EC\u5404\u79CD cli\u3001\u63D2\u4EF6\u548C library \u7B49","webos \u5B50\u5E94\u7528\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u5B9E\u73B0\uFF0C\u534F\u52A9\u5176\u4ED6\u4EBA\u5F00\u53D1\u5B50\u5E94\u7528\uFF0C\u591A\u7EBF\u7A0B\u6A21\u578B\u3001\u901A\u4FE1\u3001\u7CFB\u7EDF api","\u5B9E\u8DF5\u548C\u786E\u5B9A\u4E86\u4F17\u591A\u6280\u672F\u7684\u53EF\u884C\u6027\uFF0C\u5927\u578B monorepo\u3001vite\u3001esbuild\u3001vue3\u3001pnpm"]},{name:"\u5E7F\u5DDE\u79C9\u7406",link:"https://www.ibingli.cn/",jobTitle:"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",start:"2019.09",stop:"2021.03",list:["\u524D\u7AEF\u9879\u76EE\u7684\u57FA\u5EFA\u548C\u5927\u578B\u91CD\u6784\uFF0C\u4FDD\u8BC1\u9879\u76EE\u5728\u8D85\u8FC7 4w \u884C\u4EE3\u7801\u300120 \u4E2A\u6A21\u5757\u65F6\u4ECD\u7136\u4FDD\u6301\u53EF\u7EF4\u62A4\u6027","lerna \u7684\u5177\u4F53\u5B9E\u8DF5\u548C\u843D\u5730\uFF0C\u8BA9\u524D\u7AEF\u5DE5\u7A0B\u6F14\u8FDB\u4E3A monorepo \u5F62\u5F0F\uFF0C\u652F\u6301\u4E86\u4E0A\u9762\u7684\u5927\u578B\u524D\u7AEF\u9879\u76EE","\u9879\u76EE\u89C4\u8303\u7684\u7F16\u5199\u548C\u63A8\u8FDB\uFF0C\u4F7F\u7528 `eslint/prettier/git hooks/code review` \u7684\u5F62\u5F0F\u6821\u9A8C\u4EE3\u7801","\u5728\u524D\u7AEF\u65E5\u5FD7\u65B9\u9762\u505A\u51FA\u63A2\u7D22\uFF0C\u5B9E\u73B0\u4E86\u5728\u90E8\u7F72\u5230\u533B\u9662\u5185\u7F51\u4E4B\u540E\u524D\u7AEF\u53EF\u4EE5\u901A\u8FC7\u65E5\u5FD7\u67E5\u627E\u95EE\u9898","\u9886\u57DF\u9650\u5B9A\u786C\u4EF6\u7684\u8C03\u7814/\u7B2C\u4E09\u65B9\u670D\u52A1\u7684\u63A5\u5165"]},{name:"\u5E7F\u5DDE\u667A\u6653",link:"http://www.zx-soft.cn",jobTitle:"Java \u540E\u7AEF\u5F00\u53D1",start:"2018.03",stop:"2019-07",list:["\u5B66\u4E60\u5E76\u5728\u540E\u7AEF\u56E2\u961F\u5185\u63A8\u5E7F vue \u8FD9\u79CD\u73B0\u4EE3\u524D\u7AEF\u6846\u67B6","\u4F7F\u7528 Java Spring Boot \u5F00\u53D1\u5404\u79CD\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF","\u8BA4\u8BC6\u5230\u4E86\u5F88\u597D\u7684\u540C\u4E8B\uFF0C\u81F3\u4ECA\u4ECD\u7136\u5728\u901A\u8FC7\u90AE\u4EF6\u7EE7\u7EED\u8054\u7CFB"]}],Y=()=>{const[e,t]=C(k[0].name);return i("div",{id:"experience",className:p.ExperienceView,children:[u(B,{order:"02.",children:"\u5DE5\u4F5C"}),i("div",{className:p.tab,children:[u("nav",{children:u("ul",{children:k.map(n=>u("li",{onClick:()=>t(n.name),children:u("button",{className:F({[p.active]:n.name===e}),children:n.name})},n.name))})}),u("ul",{className:p.content,children:k.map(n=>i("section",{style:{display:e===n.name?"block":"none"},children:[i("h3",{children:[u("span",{children:n.jobTitle}),i("a",{href:n.link,target:"_blank",children:["  ","@",n.name]})]}),i("p",{children:[n.start," - ",n.stop]}),u("ul",{children:n.list.map(o=>u("li",{children:o},o))})]},n.name))})]})]})},U="_WorkView_1milk_1",Q="_PrimaryWork_1milk_17",K="_projectImage_1milk_29",X="_projectContent_1milk_43",Z="_content_1milk_61",uu="_cover_1milk_115",eu="_otherWorks_1milk_315",iu="_projectsGrid_1milk_343",tu="_OtherWork_1milk_375",nu="_subject_1milk_449",lu="_folder_1milk_493";var c={WorkView:U,PrimaryWork:Q,projectImage:K,projectContent:X,content:Z,cover:uu,otherWorks:eu,projectsGrid:iu,OtherWork:tu,subject:nu,folder:lu},E=`<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
`,a=`<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>\r
`,ou="/v2/assets/joplin-vscode-plugin-cover.b54c66a0.png",ru="/v2/assets/liuli-cli-cover.3eff268a.png",su=`<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
  stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder">\r
  <title>Folder</title>\r
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>\r
</svg>`;const cu="_LinkIcon_1h1gb_1";var au={LinkIcon:cu};const g=({item:e})=>u("a",{className:au.LinkIcon,href:e.link,target:"_blank",dangerouslySetInnerHTML:{__html:e.icon}});function _(e){return u("div",{dangerouslySetInnerHTML:{__html:v(e.children,{renderer:Fu()})}})}function Fu(){const e=new v.Renderer,t=e.link;return e.link=(n,o,l)=>t.call(e,n,o,l).replace(/^<a /,'<a target="_blank" rel="nofollow" '),e}const Eu=[{title:"Joplin Utils",description:"\u57FA\u4E8E Joplin \u7684\u5468\u8FB9\u793E\u533A\u5DE5\u5177\u3002[joplin-vscode-plugin](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin) \u63D0\u4F9B\u5728 vscode \u4E2D\u7BA1\u7406 joplin \u7B14\u8BB0\u7684\u529F\u80FD\uFF0C\u7ED3\u5408 vscode \u73B0\u6709\u7684\u5F3A\u5927\u7F16\u8F91\u5668\u53CA\u5176\u751F\u6001\u3002[joplin-blog](https://www.npmjs.com/package/joplin-blog) \u5C06\u6307\u5B9A\u6807\u7B7E\u7684\u7B14\u8BB0\u53D1\u5E03\u4E3A\u5728\u7EBF\u7F51\u7AD9\uFF0C\u53EF\u4EE5\u9009\u62E9 blog \u6216 wiki \u7684\u5F62\u5F0F\u3002\u8FD8\u6709\u5F00\u53D1\u8005\u76F8\u5173\u7684\u4E00\u4E9B\u5DE5\u5177\u96C6\uFF0C\u5305\u62EC [joplin-api](https://www.npmjs.com/package/joplin-api)/[joplin-plugin-cli](https://www.npmjs.com/package/joplin-plugin-cli)\u3002",image:ou,link:"https://joplin-utils.rxliuli.com/",topic:["vscode","joplin","hexo","vuepress","chrome"],links:[{title:"github",icon:E,link:"https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-vscode-plugin"},{title:"open",icon:a,link:"https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin"}]},{title:"@liuli-util/cli",description:"\u4E00\u4E2A\u9488\u5BF9\u4E8E\u5E93\u548C cli \u5E94\u7528\u7A0B\u5E8F\u6253\u5305\u7684\u96F6\u914D\u7F6E cli\uFF0C\u57FA\u4E8E [esbuild](https://esbuild.github.io/)\uFF0C\u5B83\u975E\u5E38\u5FEB\uFF0C\u5E76\u4E14\u662F\u81EA\u4E3E\u7684\u3002\u540C\u65F6\u4E5F\u652F\u6301\u914D\u7F6E\u540C\u6B65\uFF08prettier/eslint/git hooks/jest\uFF09\u3001\u751F\u6210\u6A21\u677F\u9879\u76EE\uFF08cli/lib\uFF09\u4EE5\u53CA\u90E8\u7F72\u76F8\u5173\uFF08sftp/gh-pages\uFF09\u529F\u80FD\u3002",image:ru,link:"https://www.npmjs.com/package/@liuli-util/cli",topic:["cli","esbuild","deploy","generate","sync"],links:[{title:"github",icon:E,link:"https://github.com/rxliuli/liuli-tools/tree/master/apps/liuli-cli"},{title:"open",icon:a,link:"https://www.npmjs.com/package/@liuli-util/cli"}]}],du=[{title:"vite-integrated",link:"https://plugins.jetbrains.com/plugin/16897",description:"Vite \u811A\u624B\u67B6\u5728 JetBrains IDE \u4E2D\u7684\u96C6\u6210\uFF0C\u4E3B\u8981\u8D1F\u8D23\u76F4\u63A5\u4F7F\u7528 IDE \u7684\u5F15\u5BFC\u9762\u677F\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u3002",topic:["vite","webstorm","jetbrains"],links:[{title:"github",icon:E,link:"https://github.com/rxliuli/liuli-tools/tree/master/jetbrains-plugins/vite-jetbrains-plugin"},{title:"open",icon:a,link:"https://plugins.jetbrains.com/plugin/16897"}]},{title:"rollup-plugin-i18next-dts-gen",link:"https://www.npmjs.com/package/@liuli-util/rollup-plugin-i18next-dts-gen",description:"\u4ECE i18n JSON \u6587\u4EF6\u751F\u6210\u7C7B\u578B\u5B9A\u4E49\u7528\u4E8E\u4EE3\u7801\u63D0\u793A\u548C\u9A8C\u8BC1",topic:["rollup","i18n","typescript"],links:[{title:"open",icon:a,link:"https://www.npmjs.com/package/@liuli-util/rollup-plugin-i18next-dts-gen"}]},{title:"rollup-plugin-graphql-codegen",link:"https://www.npmjs.com/package/@liuli-util/rollup-plugin-graphql-codegen",description:"\u5728 worker_threads \u4E2D\u4E3A GraphQL \u6587\u4EF6\u751F\u6210\u7C7B\u578B\u5B9A\u4E49",topic:["rollup","graphql","typescript"],links:[{title:"open",icon:a,link:"https://www.npmjs.com/package/@liuli-util/rollup-plugin-graphql-codegen"}]},{title:"vite-plugin-env-dts-gen",link:"https://www.npmjs.com/package/@liuli-util/vite-plugin-env-dts-gen",description:"\u626B\u63CF\u73AF\u5883\u53D8\u91CF\u751F\u6210 dts \u7C7B\u578B\u5B9A\u4E49\uFF0C\u907F\u514D\u624B\u52A8\u7EF4\u62A4\u73AF\u5883\u53D8\u91CF\u7684 dts \u7C7B\u578B\u5B9A\u4E49\u3002",topic:["vite","env","typescript"],links:[{title:"open",icon:a,link:"https://www.npmjs.com/package/@liuli-util/vite-plugin-env-dts-gen"}]},{title:"@liuli-util/react-router",link:"https://www.npmjs.com/package/@liuli-util/react-router",description:"\u5C01\u88C5 react-router \u4E3A\u96C6\u4E2D\u5F0F\u7684 js \u8DEF\u7531\u914D\u7F6E\uFF0C\u7EC4\u4EF6\u4EC5\u66B4\u9732\u5FC5\u8981\u7684 props\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u652F\u6301\u5728 react \u7EC4\u4EF6\u5916\u4F7F\u7528\u8DEF\u7531\u3002",topic:["react-router","\u96C6\u4E2D\u5F0F\u8DEF\u7531"],links:[{title:"open",icon:a,link:"https://www.npmjs.com/package/@liuli-util/react-router"}]},{title:"webos",link:"https://webos.rxliuli.com/",description:"\u4E00\u4E2A\u57FA\u4E8E web \u7684\u53EF\u6269\u5C55\u7CFB\u7EDF\u539F\u578B\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B9E\u8DF5\u5728 web \u4E0A\u8FD0\u884C\u7B2C\u4E09\u65B9\u5E94\u7528\u3002",topic:["webos","\u63D2\u4EF6\u7CFB\u7EDF"],links:[{title:"open",icon:a,link:"https://webos.rxliuli.com/"}]},{title:"saki",link:"https://github.com/rxliuli/saki",description:"\u60F3\u77E5\u9053\u57FA\u4E8E golang \u7F16\u5199 cli \u80FD\u591F\u63D0\u9AD8\u591A\u5C11\u6027\u80FD\uFF0C\u6240\u4EE5\u5C1D\u8BD5\u4F7F\u7528 golang \u7F16\u5199\u4E86\u8FD9\u4E2A cli \u5E94\u7528\u3002",topic:["webos","\u63D2\u4EF6\u7CFB\u7EDF"],links:[{title:"open",icon:a,link:"https://github.com/rxliuli/saki"}]},{title:"mdbook",link:"https://www.npmjs.com/package/@liuli-util/mdbook",description:"\u4E00\u4E2A\u57FA\u4E8E pandoc \u7684 markdown => epub \u7684\u6784\u5EFA\u5DE5\u5177\uFF0C\u652F\u6301\u4F7F\u7528\u914D\u7F6E\u800C\u975E\u547D\u4EE4\u884C\u53C2\u6570\u7684\u5F62\u5F0F\u6307\u5B9A\u7AE0\u8282\u6587\u4EF6\uFF08\u4E5F\u662F\u540E\u9762\u6574\u7406\u548C\u53D1\u5E03\u5C0F\u8BF4 epub \u7248\u672C\u7684\u524D\u63D0\uFF09",topic:["pandoc","markdown","epub"],links:[{title:"github",icon:E,link:"https://github.com/rxliuli/mdbook/blob/master/apps/cli/README.md"},{title:"open",icon:a,link:"https://www.npmjs.com/package/@liuli-util/mdbook"}]},{title:"\u9B54\u6CD5\u5C11\u5973\u5C0F\u5706 \u98DE\u5411\u661F\u7A7A\uFF08\u6574\u7406\u642C\u8FD0\uFF09",link:"https://tts.liuli.moe/",description:"\u5728\u7ECF\u5386\u4E86\u51E0\u4E2A\u4E16\u7EAA\u7684\u52A8\u8361\u4E4B\u540E\uFF0C\u4E00\u4E2A\u4E4C\u6258\u90A6\u5F0F\u7684 AI\u2014 \u4EBA\u7C7B\u653F\u5E9C\u6CBB\u7406\u7740\u5730\u7403\uFF0C\u9884\u793A\u7740\u540E\u7A00\u7F3A\u793E\u4F1A\u7684\u6765\u4E34\u548C\u592A\u7A7A\u6B96\u6C11\u7684\u65B0\u65F6\u4EE3\u3002\u4E00\u6B21\u610F\u5916\u7684\u63A5\u89E6\u5374\u8BA9\u79D1\u6280\u66F4\u5148\u8FDB\u7684\u654C\u5BF9\u5916\u661F\u79CD\u65CF\u6253\u7834\u4E86\u548C\u5E73\uFF0C\u8FD9\u8FEB\u4F7F\u9B54\u6CD5\u5C11\u5973\u4EEC\u8D70\u51FA\u5E55\u540E\uFF0C\u62EF\u6551\u4EBA\u7C7B\u6587\u660E\u3002\u5728\u8FD9\u4E00\u5207\u4E4B\u4E2D\uFF0C\u5FD7\u7B51\u826F\u5B50\uFF0C\u4E00\u4E2A\u666E\u901A\u7684\u5973\u5B69\uFF0C\u4EF0\u671B\u7740\u661F\u7A7A\uFF0C\u597D\u5947\u7740\u5979\u5728\u5B87\u5B99\u4E2D\u7684\u5F52\u6240\u3002",topic:["\u4E8C\u6B21\u5143","\u540C\u4EBA","\u786C\u79D1\u5E7B"],links:[{title:"github",icon:E,link:"https://github.com/liuli-moe/TtS"},{title:"open",icon:a,link:"https://tts.liuli.moe/"}]}],pu=({item:e})=>i("div",{className:c.PrimaryWork,children:[u("div",{className:c.projectImage,children:u("a",{target:"_blank",href:e.link,children:u("img",{className:c.cover,src:e.image,alt:e.title})})}),u("div",{className:c.projectContent,children:i("section",{className:c.content,children:[u("header",{children:"\u7279\u8272\u9879\u76EE"}),u("h3",{children:u("a",{target:"_blank",href:e.link,children:e.title})}),u("p",{children:u(_,{linkTarget:"_blank",children:e.description})}),i("footer",{children:[u("ul",{children:e.topic.map(t=>u("li",{children:t},t))}),u("ul",{children:e.links.map(t=>u("li",{children:u(g,{item:t})},t.link))})]})]})})]}),hu=({item:e})=>i("li",{className:c.OtherWork,children:[i("header",{children:[i("div",{children:[u("div",{className:c.folder,dangerouslySetInnerHTML:{__html:su}}),u("ul",{children:e.links.map(t=>u("li",{children:u(g,{item:t})},t.link))})]}),u("h3",{className:c.subject,children:u("a",{target:"_blank",href:e.link,children:e.title})}),u(_,{linkTarget:"_blank",children:e.description})]}),u("footer",{children:u("ul",{className:c.topic,children:e.topic.map(t=>u("li",{children:t},t))})})]}),Cu=()=>i("div",{id:"work",className:c.WorkView,children:[u(B,{order:"03.",children:"\u4F5C\u54C1"}),u("div",{children:Eu.map(e=>u(pu,{item:e},e.title))}),i("div",{className:c.otherWorks,children:[i("header",{children:[u("h2",{children:"\u5176\u4ED6\u503C\u5F97\u6CE8\u610F\u7684\u9879\u76EE"}),u("a",{href:"",children:"\u67E5\u770B\u5217\u8868"})]}),u("ul",{className:c.projectsGrid,children:du.map(e=>u(hu,{item:e},e.title))})]})]}),mu="_ConcatView_6h2ca_1";var ku={ConcatView:mu};const Bu=()=>i("div",{id:"concat",className:ku.ConcatView,children:[i("header",{children:[i("h2",{children:[u("span",{children:"04."})," \u4E0B\u4E00\u6B65\u662F\u4EC0\u4E48\uFF1F"]}),u("h2",{children:"\u4FDD\u6301\u8054\u7CFB"})]}),u("footer",{children:"\u867D\u7136\u543E\u8F88\u76EE\u524D\u6CA1\u6709\u5BFB\u627E\u4EFB\u4F55\u65B0\u7684\u673A\u4F1A\uFF0C\u4F46\u543E\u8F88\u7684\u90AE\u7BB1\u59CB\u7EC8\u662F\u6253\u5F00\u7684\u3002\u65E0\u8BBA\u60A8\u6709\u4EFB\u4F55\u95EE\u9898\u6216\u53EA\u662F\u60F3\u6253\u4E2A\u62DB\u547C\uFF0C\u4E0D\u7BA1\u662F\u4E8C\u6B21\u5143\u8FD8\u662F\u5F00\u53D1\u8005\uFF0C\u543E\u8F88\u90FD\u4F1A\u5C3D\u529B\u56DE\u590D\u60A8\uFF01"}),u(D,{href:"mailto:rxliuli@gmail.com",children:"\u6253\u4E2A\u62DB\u547C"})]}),gu="_LeftLinks_19sxs_3";var wu={LeftLinks:gu},Au=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-blog"
        version="1.1"
        id="svg4"
>
    <title>blog</title>
    <path
            d="m 10.546972,5.5676426 c -0.527103,-0.025219 -1.0037345,0.3694443 -1.0387395,0.9026289 -0.03582,0.5338299 0.371211,0.9938195 0.9084915,0.9938195 3.237105,0.2093358 6.040317,2.989529 6.251972,6.197756 0.0337,0.512041 0.463607,0.905049 0.974429,0.905049 0.02099,0 0.04262,-0.0013 0.06423,-0.0025 0.538093,-0.03404 0.946343,-0.495498 0.911339,-1.028924 C 18.349729,9.4291361 14.727167,5.8379887 10.546973,5.567644 Z m 0.2605,-3.8776321 c -0.720442,0 -1.3024955,0.5774081 -1.3024955,1.291199 0,0.713791 0.5832745,1.291199 1.3024955,1.291199 5.026814,0 9.117461,4.0551721 9.117461,9.0383935 0,0.713791 0.583272,1.291199 1.302493,1.291199 0.719222,0 1.302495,-0.577408 1.302495,-1.291199 0,-6.4075755 -5.258822,-11.6207915 -11.722449,-11.6207915 z M 8.7031285,10.841383 c -0.594262,-0.117014 -1.151893,0.36315 -1.151893,0.96033 v 2.032428 c 0,0.413587 0.29009,0.741229 0.681774,0.851384 0.737944,0.272362 1.272374,0.983732 1.272374,1.779434 0,1.069274 -0.875113,1.900483 -1.954148,1.900483 -1.078628,0 -1.954149,-0.867524 -1.954149,-1.900483 V 6.5320067 c 0,-0.5346371 -0.437556,-0.9320842 -0.977278,-0.9320842 l -1.954148,3.057e-4 c -0.538093,-0.035815 -0.975649,0.3991583 -0.975649,0.9317777 v 9.9704781 c 0,3.611322 3.343339,6.464065 7.123015,5.677241 2.2134265,-0.464024 3.9998805,-2.239423 4.4691845,-4.426392 0.708231,-3.308698 -1.506009,-6.3067 -4.5790825,-6.91195 z"
            id="path2"
            style="stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"/>
</svg>
`,vu=`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Telegram</title><path d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z"/></svg>
`,Du=`<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
`;const _u=[{title:"github",link:"https://github.com/rxliuli",icon:E},{title:"twitter",link:"https://twitter.com/rxliuli",icon:Du},{title:"telegram",link:"https://t.me/rxliuli",icon:vu},{title:"blog",link:"https://blog.rxliuli.com/",icon:Au}],bu=()=>u("div",{className:wu.LeftLinks,children:u("ul",{children:_u.map(e=>u("li",{children:u(g,{item:e})}))})}),fu="_RightMail_osxbd_1";var ju={RightMail:fu};const xu=()=>u("div",{className:ju.RightMail,children:u("a",{target:"_blank",href:"mailto:rxliuli@gmail.com",children:"rxliuli@gmail.com"})}),Lu="_FooterView_1ndql_1";var Nu={FooterView:Lu};const yu=()=>i("footer",{className:Nu.FooterView,children:["\u7531"," ",u("a",{target:"_blank",href:"https://github.com/bchiang7/v4",children:"bchiang7"})," ","\u8BBE\u8BA1\uFF0C\u4F46\u543E\u8F88\u91CD\u65B0\u5B9E\u73B0\u4E86\u5B83\u3002"]}),Vu="_LayoutNavbar_4wfvj_1",$u="_noTop_4wfvj_25",Tu="_up_4wfvj_33",Wu="_down_4wfvj_39",Mu="_content_4wfvj_47",Iu="_nav_4wfvj_63",Su="_source_4wfvj_153",Hu="_menu_4wfvj_179",Ru="_menuBox_4wfvj_219",qu="_close_4wfvj_275",zu="_menuNav_4wfvj_305",Ou="_sidebar_4wfvj_339";var s={LayoutNavbar:Vu,noTop:$u,up:Tu,down:Wu,content:Mu,nav:Iu,source:Su,menu:Hu,menuBox:Ru,close:qu,menuNav:zu,sidebar:Ou},Gu="/v2/assets/logo.c5bf3d50.svg";const A=[{label:"\u5173\u4E8E",href:"#about"},{label:"\u7ECF\u5386",href:"#experience"},{label:"\u4F5C\u54C1",href:"#work"},{label:"\u8054\u7CFB",href:"#concat"}];function Ju(){const[e,t]=C(),[n,o]=C(0);return j(()=>{const l=()=>{const r=n>window.scrollY?"up":"down";t(r),o(window.scrollY)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[n]),{dir:e,scrollY:n}}const Pu=e=>{const{dir:t,scrollY:n}=Ju();return u("header",{className:F(s.LayoutNavbar,{[s.noTop]:n!==0,[s.up]:t==="up",[s.down]:t==="down"}),children:i("nav",{className:s.content,children:[u("a",{href:"/v2/",children:u("img",{src:Gu,alt:"logo",width:42,height:42})}),i("div",{className:s.nav,children:[u("ol",{className:s.links,children:A.map(({label:o,href:l})=>u("li",{children:u("a",{href:l,children:o})},o))}),u("div",{children:u("a",{className:s.source,target:"_blank",href:"https://github.com/rxliuli/rxliuli",children:"\u6E90\u4EE3\u7801"})})]}),i("div",{className:s.menu,children:[u("button",{onClick:e.onToggle,children:u("div",{className:F(s.menuBox,{[s.close]:e.sidebar})})}),i("aside",{className:F(s.menuNav,{[s.sidebar]:e.sidebar}),children:[u("ol",{children:A.map(({label:o,href:l})=>u("li",{children:u("a",{href:l,onClick:e.onToggle,children:o})},o))}),u("a",{target:"_blank",href:"https://github.com/rxliuli/rxliuli",children:"\u6E90\u4EE3\u7801"})]})]})]})})},Yu="_main_1wd7g_1",Uu="_filter_1wd7g_9",Qu="_mask_1wd7g_43",Ku="_show_1wd7g_59";var h={main:Yu,filter:Uu,mask:Qu,show:Ku};const Xu=()=>{const[e,t]=C(!1);function n(){document.body.style.overflowY=e?"auto":"hidden",t(!e)}return i("div",{children:[u(Pu,{sidebar:e,onToggle:n}),u(bu,{}),u(xu,{}),i("main",{className:F(h.main,{[h.filter]:e}),children:[u(T,{}),u(P,{}),u(Y,{}),u(Cu,{}),u(Bu,{})]}),u("div",{className:F(h.mask,{[h.show]:e}),onClick:()=>{console.log("sidebar && onToggle(): ",e),e&&n()}}),u(yu,{})]})};x(u(Xu,{}),document.getElementById("app"));
