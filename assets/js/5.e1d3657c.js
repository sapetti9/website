(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(t,a,e){"use strict";var i=e(82);e.n(i).a},158:function(t,a,e){"use strict";var i=e(83);e.n(i).a},162:function(t,a,e){"use strict";var i=e(85);e.n(i).a},163:function(t,a,e){"use strict";var i=e(98);e.n(i).a},164:function(t,a,e){"use strict";var i=e(99);e.n(i).a},334:function(t,a,e){"use strict";e.r(a);e(58);var i={components:{NavLink:e(120).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(e(157),e(0)),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",[this._v("\n      The\n      "),a("span",{staticClass:"tooltip",attrs:{"data-tooltip":"zen = simple, minimal, clean, powerful"}},[this._v("zen")]),this._v("\n      framework for data integration\n    ")])}],!1,null,null,null).exports,r={computed:{data:function(){return this.$page.frontmatter}}},o=(e(158),Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"theme-default-content"},[e("header",{staticClass:"hero"},[e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title||"Product ..."))]),t._v(" "),t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"}):t._e()]),t._v(" "),e("Content")],1)])}),[],!1,null,null,null).exports),l=(e(125),e(126),e(127),e(75),e(159),e(46),e(160),e(84),/#.*$/),c=/\.(md|html)$/,u=/\/$/,h=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function d(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function v(t){return decodeURI(t).replace(l,"").replace(c,"")}function p(t){return h.test(t)}function f(t){if(p(t))return t;var a=t.match(l),e=a?a[0]:"",i=v(t);return u.test(i)?t:i+".html"+e}function m(t,a,e){if(p(a))return{type:"external",path:a};e&&(a=function(t,a,e){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return a+t;var s=a.split("/");e&&s[s.length-1]||s.pop();for(var n=t.replace(/^\//,"").split("/"),r=0;r<n.length;r++){var o=n[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(a,e));for(var i=v(a),s=0;s<t.length;s++)if(v(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:f(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(a,'"')),{}}function g(t,a,e,i){var s=e.pages,n=e.themeConfig,r=i&&n.locales&&n.locales[i]||n;if("auto"===(t.frontmatter.sidebar||r.sidebar||n.sidebar))return function(t){var a=function(t){var a;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?a=t:a&&(a.children||(a.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:a.map((function(a){return{type:"auto",title:a.title,basePath:t.path,path:t.path+"#"+a.slug,children:a.children||[]}}))}]}(t);var o=r.sidebar||n.sidebar;if(o){var l=function(t,a){if(Array.isArray(a))return{base:"/",config:a};for(var e in a)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(e)))return{base:e,config:a[e]};var i;return{}}(a,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(a,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof a)return m(e,a,i);if(Array.isArray(a))return Object.assign(m(e,a[0],i),{title:a[1]});s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var n=a.children||[];return 0===n.length&&a.path?Object.assign(m(e,a.path,i),{title:a.title}):{type:"group",path:a.path,title:a.title,sidebarDepth:a.sidebarDepth,children:n.map((function(a){return t(a,e,i,s+1)})),collapsable:!1!==a.collapsable}}(t,s,c)})):[]}return[]}var _=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("img",{staticClass:"w-4 h-4 inline text-lg",attrs:{src:"https://image.flaticon.com/icons/png/512/94/94699.png"}}),t._v(" "),t._l(t.$page.frontmatter.tags,(function(a){return e("router-link",{key:a,staticClass:"pl-2",attrs:{to:{path:""}}},[t._v("\n    "+t._s(a)+"\n  ")])}))],2)}),[],!1,null,null,null).exports,b={components:{TagLinks:_},methods:{formatDate:d}},x=(e(162),Object(s.a)(b,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"blog-home",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"pb-6"},[t._v("Frictionless Blog")]),t._v(" "),e("ul",{staticClass:"flex flex-col"},t._l(t.$pagination.pages,(function(a){return e("li",{},[e("div",{staticClass:"container shadow-md pl-6 pt-6 flex flex-row pb-6"},[e("div",{staticClass:"container flex flex-col w-2/3"},[e("router-link",{staticClass:"text-2xl page-link pr-12",attrs:{to:a.path}},[t._v(t._s(a.title)+"\n          ")]),t._v(" "),e("div",{staticClass:"container pt-2"},[e("p",{staticClass:"text-sm italic inline"},[t._v(" "+t._s(t.formatDate(a.frontmatter.date))+" by "+t._s(a.frontmatter.author||"Frictionless Data")+" ")]),t._v(" "),e("TagLinks",{staticClass:"inline pl-4"})],1),t._v(" "),a.frontmatter.summary?e("p",{staticClass:"pt-2 text-xl mr-12"},[t._v(" "+t._s(a.frontmatter.summary)+" ")]):a.frontmatter.summary?t._e():e("p",{staticClass:"pt-2 text-xl mr-12",domProps:{innerHTML:t._s(a.excerpt)}})],1),t._v(" "),e("div",{staticClass:"container pl-6 w-1/3 pt-2"},[e("img",{staticClass:"w-56 shadow-md",attrs:{src:a.frontmatter.image||a.frontmatter.heroImage||"https://i.ytimg.com/vi/lWHKVXxuci0/maxresdefault.jpg"}})])]),t._v(" "),e("hr")])})),0),t._v(" "),e("div",{attrs:{id:"pagination"}},[t.$pagination.hasPrev?e("router-link",{staticClass:"pl-6",attrs:{to:t.$pagination.prevLink}},[t._v("Prev")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{staticClass:"pl-6",attrs:{to:t.$pagination.nextLink}},[t._v("Next")]):t._e()],1),t._v(" "),e("br"),e("br")])])}),[],!1,null,"a3f32a58",null).exports),C={components:{TagLinks:_},methods:{formatDate:d}},y=Object(s.a)(C,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"theme-default-content"},[e("header",[e("h1",{staticClass:"text-3xl pt-6"},[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),e("p",{staticClass:"text-xl pb-6"},[t._v(t._s(t.$page.frontmatter.summary)+" ")]),t._v(" "),e("time",{staticClass:"italic"},[t._v(" "+t._s(t.formatDate(t.$page.frontmatter.date))+" by "+t._s(t.$page.frontmatter.author||"Frictionless Data")+" ")]),t._v(" "),e("TagLinks",{staticClass:"pt-4 text-blue-500 pb-6"})],1),t._v(" "),e("Content"),t._v(" "),t._m(0)],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",[a("a",{attrs:{href:"/blog/"}},[this._v(" < Go back")])])}],!1,null,null,null).exports,w=(e(66),e(67),e(88),e(90)),$=e(91),k=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],S=function(){function t(a){Object(w.a)(this,t),this.shape=[8,3],this.domNode=a}return Object($.a)(t,[{key:"configure",value:function(){var t=this,a=Honeycomb.extendHex({size:61,orientation:"flat",currentIndex:function(){var a=this.toPoint(),e=t.gridType.pointToHex([a.x,a.y]);return e.x+1+(e.y+1)*t.shape[0]},render:function(a){var e=this.toPoint(),i=e.x,s=e.y,n=this.toPoint(),r=this.center().add(n),o=(t.gridType.pointToHex([n.x,n.y]),this.corners()),l=this.currentIndex(),c={width:1,color:"#999"};""===k[l][0]&&(c={}),this.draw=a.polygon(o.map((function(t){var a=t.x,e=t.y;return"".concat(a,",").concat(e)}))).fill("none").stroke(c).translate(i,s);var u=k[l][0],h=u.includes("\n")?r.y-26:r.y-13;a.text(u).font({size:13,anchor:"middle",leading:1.4,fill:"#1A98FF"}).translate(r.x,h)},openAnchor:function(){var t=this.currentIndex();""!==k[t][0]&&window.open(k[t][1])},highlight:function(){var t=this.currentIndex();""!==k[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#6a8bad"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(a)}},{key:"setup",value:function(){var t=this.shape;this.configure();var a=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(a)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(a){var e=a.offsetX,i=a.offsetY,s=t.gridType.pointToHex([e,i]),n=t.gridInstance.get(s);n&&n.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(a){var e=a.offsetX,i=a.offsetY,s=t.gridType.pointToHex([e,i]),n=t.gridInstance.get(s);n&&n.openAnchor()}))}}]),t}(),j={mounted:function(){var t=new S(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},P=(e(163),{components:{JobsDiagramSmall:Object(s.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"a5ca1272",null).exports},computed:{data:function(){return this.$page.frontmatter}}}),T=(e(164),Object(s.a)(P,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"page",attrs:{"aria-labelledby":"main-title"}},[e("div",{staticClass:"theme-default-content"},[e("header",{staticClass:"hero"},[e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.data.tagline))])]),t._v(" "),e("JobsDiagramSmall",{staticClass:"pt-12"}),t._v(" "),e("p",[t._v(t._s(t.data.description))]),t._v(" "),e("h2",[t._v("Context")]),t._v(" "),e("p",[t._v(t._s(t.data.context))]),t._v(" "),e("p",[t._v(t._s(t.data.pain))]),t._v(" "),e("Content")],1)])}),[],!1,null,null,null).exports),D=e(331),I=e(330),E=e(332),O={components:{Home:n,Product:o,BlogIndex:x,BlogPost:y,Job:T,Page:I.a,Sidebar:E.a,Navbar:D.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!("home"==t.layout)&&!this.isBlogIndexPage&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return g(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass,a=this.$page.frontmatter.layout;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},a,t]},isBlogIndexPage:function(){return!(!this.$page.frontmatter.title||!this.$page.frontmatter.title.match(/(?:Page \d+ \| )?Blog/))}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var a=t.changedTouches[0].clientX-this.touchStart.x,e=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(a)>Math.abs(e)&&Math.abs(a)>40&&(a>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},L=Object(s.a)(O,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(a){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),"home"===t.$page.frontmatter.layout?e("Home"):"product"===t.$page.frontmatter.layout?e("Product"):t.isBlogIndexPage?e("BlogIndex"):"Post"===t.$page.frontmatter.layout?e("BlogPost"):"job"===t.$page.frontmatter.layout?e("Job"):e("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),t._m(0)],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"banner fd-footer py-16"},[e("div",{staticClass:"banner flex flex-row"},[e("div",{staticClass:"w-1/3 text-center pl-10"},[e("img",{staticClass:"w-64",attrs:{src:"/img/home/logo-white-thicker.svg"}})]),t._v(" "),e("div",{staticClass:"container w-2/3 flex justify-center flex-row px-10"},[e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-xl font-normal text-white"},[t._v("Supported by")]),t._v(" "),e("div",[e("img",{staticClass:"w-32 mx-auto py-8",attrs:{src:"/img/home/alfred.svg"}})]),t._v(" "),e("div",[e("img",{staticClass:"w-32 mx-auto",attrs:{src:"/img/home/open-data-institute.svg"}})])]),t._v(" "),e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("About")]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/about/"}},[t._v("About")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/team/"}},[t._v("Contact")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"https://okfn.org/privacy-policy/"}},[t._v("Privacy Policy")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"https://okfn.org/terms-of-use/"}},[t._v("Terms of Use")])])]),t._v(" "),e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("Help")]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/contribute/"}},[t._v("Support")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/"}},[t._v("Get started")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("a",{staticClass:"text-white font-light text-lg",attrs:{href:"/team/"}},[t._v("Community")])])]),t._v(" "),e("div",{staticClass:"w-1/4 text-left pr-20"},[e("h2",{staticClass:"text-xl text-white font-normal"},[t._v("Social")]),t._v(" "),e("div",{staticClass:"pt-4"},[e("img",{staticClass:"w-8 inline-block align-middle",attrs:{src:"/img/home/github.svg"}}),t._v(" "),e("a",{staticClass:"text-white inline pl-2 font-light text-lg",attrs:{href:"https://github.com/frictionlessdata/"}},[t._v("GitHub")])]),t._v(" "),e("div",{staticClass:"pt-6"},[e("img",{staticClass:"w-8 inline-block align-middle",attrs:{src:"/img/home/twitter.svg"}}),t._v(" "),e("a",{staticClass:"text-white pl-2 inline font-light text-lg",attrs:{href:"https://twitter.com/hashtag/frictionlessdata"}},[t._v("Twitter")])]),t._v(" "),e("div",{staticClass:"pt-6 pr-10"},[e("img",{staticClass:"w-8 inline-block align-middle",attrs:{src:"/img/home/gitter.svg"}}),t._v(" "),e("a",{staticClass:"text-white pl-2 inline font-light text-lg",attrs:{href:"https://gitter.im/frictionlessdata/chat"}},[t._v("Gitter")])])])])])])}],!1,null,null,null);a.default=L.exports},82:function(t,a,e){},83:function(t,a,e){},85:function(t,a,e){},98:function(t,a,e){},99:function(t,a,e){}}]);