(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc8ec2ca"],{"159b":function(t,e,a){var i=a("da84"),s=a("fdbc"),r=a("17c2"),n=a("9112");for(var c in s){var o=i[c],l=o&&o.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,s=a("a640"),r=a("ae40"),n=s("forEach"),c=r("forEach");t.exports=n&&c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var i=a("d039"),s=a("b622"),r=a("2d00"),n=s("species");t.exports=function(t){return r>=51||!i((function(){var e=[],a=e.constructor={};return a[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,a){"use strict";var i=a("23e7"),s=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"4de4":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").filter,r=a("1dde"),n=a("ae40"),c=r("filter"),o=n("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,a){var i=a("861d"),s=a("e8b5"),r=a("b622"),n=r("species");t.exports=function(t,e){var a;return s(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?i(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var i=a("c04e"),s=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var n=i(e);n in t?s.f(t,n,r(0,a)):t[n]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),s=a("d039"),r=a("e8b5"),n=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),f=a("1dde"),d=a("b622"),p=a("2d00"),v=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",m=p>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=f("concat"),x=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},y=!m||!C;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,i,s,r,n=c(this),f=u(n,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?n:arguments[e],x(r)){if(s=o(r.length),d+s>h)throw TypeError(g);for(a=0;a<s;a++,d++)a in r&&l(f,d,r[a])}else{if(d>=h)throw TypeError(g);l(f,d++,r)}return f.length=d,f}})},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var i=a("83ab"),s=a("d039"),r=a("5135"),n=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,e){if(r(c,t))return c[t];e||(e={});var a=[][t],l=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:o,f=r(e,1)?e[1]:void 0;return c[t]=!!a&&!s((function(){if(l&&!i)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:o}):t[1]=1,a.call(t,u,f)}))}},b727:function(t,e,a){var i=a("0366"),s=a("44ad"),r=a("7b0b"),n=a("50c4"),c=a("65f0"),o=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,f=6==t,d=7==t,p=5==t||f;return function(v,h,g,m){for(var C,x,y=r(v),w=s(y),b=i(h,g,3),_=n(w.length),E=0,k=m||c,S=e?k(v,_):a||d?k(v,0):void 0;_>E;E++)if((p||E in w)&&(C=w[E],x=b(C,E,y),t))if(e)S[E]=x;else if(x)switch(t){case 3:return!0;case 5:return C;case 6:return E;case 2:o.call(S,C)}else switch(t){case 4:return!1;case 7:o.call(S,C)}return f?-1:l||u?u:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("div",{staticClass:"loadingAnimation"},[t._m(0)]):t._e(),a("section",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:t.openLeftside,expression:"openLeftside",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:t.closeLeftside,expression:"closeLeftside",arg:"swipe",modifiers:{left:!0}}],staticClass:"preFadein",class:{fadeIn:t.loadingCompleted}},[a("div",{staticClass:"computerleftSide d-flex align-items-center justify-content-center flex-column"},[a("div",{staticClass:"mt-auto"},[a("h1",{staticClass:"h3 text-white mt-4"},[t._v("台 北 市 旅 遊 網")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentDistric,expression:"currentDistric"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentDistric=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇行政區")]),t._l(t.distric,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),t._m(1)]),a("div",{staticClass:"leftSide d-flex align-items-center justify-content-center flex-column",class:{leftSideMove:t.sideMove}},[a("div",{staticClass:"leftSideBtn"},[a("div",{staticClass:"d-flex justify-content-center mt-2"},[t.sideMove?a("h2",{staticClass:"text-white",on:{click:function(e){t.sideMove=!t.sideMove}}},[t._v("«")]):a("h2",{staticClass:"text-white",on:{click:function(e){t.sideMove=!t.sideMove}}},[t._v("»")])])]),a("div",{staticClass:"mt-auto"},[a("h1",{staticClass:"h3 text-white mt-4"},[t._v("台 北 市 旅 遊 網")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentDistric,expression:"currentDistric"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentDistric=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("請選擇行政區")]),t._l(t.distric,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),t._m(2)]),a("div",{staticClass:"computerrightSide"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.filterData[t.currentPage],(function(e){return a("div",{key:e.id,staticClass:"col-md-3 my-3"},[a("div",{staticClass:"card h-100",on:{click:function(a){return a.preventDefault(),t.checkDetail(e)}}},[a("div",{staticClass:"card-header p-0 d-flex justify-content-center border-0"},[e.images[0]?a("img",{attrs:{src:e.images[0].src,alt:"",height:"170px"}}):a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg/1200px-%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg.png",alt:"",height:"170px"}})]),a("div",{staticClass:"card-body p-0 py-3 pl-2 d-flex justify-content-center flex-column"},[a("h2",{staticClass:"h6 text-primary d-flex"},[t._v(" "+t._s(e.name)+" ")]),a("div",t._l(e.category,(function(e){return a("span",{key:e.id,staticClass:"badge badge-primary mr-1",class:{"badge-danger":e.id%2!==0}},[t._v(" "+t._s(e.name)+" ")])})),0)])])])})),0),a("nav",{staticClass:"d-flex justify-content-center my-3",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{pageDisabled:0===t.currentPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.currentPage=t.currentPage-1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.newPaginationpages+1,(function(e){return a("li",{key:e.id,staticClass:"page-item",class:{active:t.currentPage===e-1}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.currentPage=e-1}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{pageDisabled:t.currentPage===t.newPaginationpages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.currentPage=t.currentPage+1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])]),a("div",{staticClass:"rightSide"},[a("div",{staticClass:"curtain",class:{curtainShow:t.sideMove}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._l(t.filterData[t.currentPage],(function(e){return a("div",{key:e.id,staticClass:"col-md-3 my-3"},[a("div",{staticClass:"card",on:{click:function(a){return a.preventDefault(),t.checkDetail(e)}}},[a("div",{staticClass:"card-header p-0 d-flex justify-content-center"},[e.images[0]?a("img",{attrs:{src:e.images[0].src,alt:"",width:"100%"}}):a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg/1200px-%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg.png",alt:"",height:"170px"}})]),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"h5 text-secondary"},[t._v(" "+t._s(e.name)+" ")]),a("div",t._l(e.category,(function(e){return a("span",{key:e.id,staticClass:"badge badge-primary mr-1",class:{"badge-danger":e.id>15}},[t._v(" "+t._s(e.name)+" ")])})),0)])])])})),a("div",{staticClass:"d-flex mx-auto"},[a("span",{staticClass:"d-flex align-self-center mr-2"},[t._v("第")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPage,expression:"currentPage"}],staticClass:"p-2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentPage=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v(" 1 ")]),t._l(t.newPaginationpages,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e+1)+" ")])}))],2),a("span",{staticClass:"d-flex align-self-center ml-2"},[t._v("頁")])])],2)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h3",{staticClass:"text-success h4"},[t._v("載入中 請稍候...")]),a("i",{staticClass:"fas fa-spinner fa-spin fa-3x text-danger"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-auto mb-3"},[a("ul",{staticClass:"d-flex justify-content-center text-center p-0 mb-0"},[a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.facebook.com/YuTsungChih",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.instagram.com/youxiaaaaaa/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://github.com/Youxiaaa",target:"_blank"}},[a("i",{staticClass:"fab fa-github-alt text-white"})])])]),a("h2",{staticClass:"h6 text-white"},[t._v("Copyright © 2021 YoYo游")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-auto mb-3"},[a("ul",{staticClass:"d-flex justify-content-center text-center p-0 mb-0"},[a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.facebook.com/YuTsungChih",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://www.instagram.com/youxiaaaaaa/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram text-white"})])]),a("li",{staticClass:"list-unstyled mx-2 h4"},[a("a",{attrs:{href:"https://github.com/Youxiaaa",target:"_blank"}},[a("i",{staticClass:"fab fa-github-alt text-white"})])])]),a("h2",{staticClass:"h6 text-white"},[t._v("Copyright © 2021 YoYo游")])])}],r=(a("99af"),a("4de4"),a("4160"),a("c975"),a("159b"),{data:function(){return{isLoading:!1,getPage:0,total:0,paginationPage:0,newPaginationpages:0,distric:["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"],currentDistric:"",currentPage:0,newArray:[],sideMove:!1,sessionData:JSON.parse(sessionStorage.getItem("arrayData"))||[],loadingCompleted:!1}},watch:{currentPage:function(){document.documentElement.scrollTop=0},currentDistric:function(){document.documentElement.scrollTop=0}},methods:{checkDetail:function(t){var e=this;setTimeout((function(){e.loadingCompleted=!1}),10),setTimeout((function(){e.$router.push("/detail/".concat(t.id))}),300),setTimeout((function(){e.$bus.$emit("getDetail",t)}),400)},openLeftside:function(){var t=this;t.sideMove=!0},closeLeftside:function(){var t=this;t.sideMove=!1}},computed:{filterData:function(){var t=this,e=[],a=[];return""!==t.currentDistric?(e=t.newArray.filter((function(e){return-1!==e.address.indexOf(t.currentDistric)})),t.sideMove=!1,t.currentPage=0):(e=t.newArray,t.sideMove=!1,t.currentPage=0),e.forEach((function(e,i){i%32===0&&a.push([]);var s=parseInt(i/32);t.newPaginationpages=s,a[s].push(e)})),a}},created:function(){var t=this;t.isLoading=!0,null===sessionStorage.getItem("arrayData")?t.$http.get("https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All").then((function(e){t.total=e.data.total,t.paginationPage=parseInt(t.total/30+1);for(var a=0;a<t.paginationPage;a++)setTimeout((function(){var e="https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=".concat(t.getPage+=1);t.$http.get(e).then((function(e){var a=t.sessionData;a.push(e.data.data),sessionStorage.setItem("arrayData",JSON.stringify(a))})),t.newArray=[].concat.apply([],t.sessionData)}),500*a),t.isLoading=!1})):(t.newArray=[].concat.apply([],t.sessionData),t.isLoading=!1),setTimeout((function(){t.loadingCompleted=!0}),10),t.$bus.$on("getDistric",(function(e){t.currentDistric=e,setTimeout((function(){t.loadingCompleted=!0}),10)}))}}),n=r,c=a("2877"),o=Object(c["a"])(n,i,s,!1,null,null,null);e["default"]=o.exports},c975:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").indexOf,r=a("a640"),n=a("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=n("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(t){return o?c.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,a){var i=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-bc8ec2ca.c1b548aa.js.map