(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],f=0,d=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("9cea"),o=n.n(r),a=(n("0fae"),n("9e2f")),u=n.n(a),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),e._m(1),n("router-view"),e._m(2)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cover"},[n("div",{staticClass:"cover-img"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flag"},[n("p",[n("span",[e._v("by ")]),e._v("arthur ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("p",[e._v("On the road")])])}],l=(n("7c55"),n("2877")),f={},d=Object(l["a"])(f,c,s,!1,null,null,null),p=d.exports,v=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("router-view")],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-slogan"},[n("p",[e._v("Come on, bro!")]),n("p",{staticStyle:{display:"none"},attrs:{id:"sloganContent"}},[e._v("Wish you good fortune in the days to come.")]),n("p",{attrs:{id:"showContent"}})])}],b={data:function(){return{wish:""}},mounted:function(){this.handleWords()},methods:{handleWords:function(){window.onload=setTimeout((function(){var e=document.getElementById("sloganContent"),t=document.getElementById("showContent"),n=0,r=setInterval((function(){t.innerHTML=e.innerHTML.substring(0,n++),t.innerHTML===e.innerHTML&&clearInterval(r)}),300)}),6e3)}}},_=b,y=(n("8bd3"),Object(l["a"])(_,h,m,!1,null,"69240ade",null)),g=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"carousel"})},O=[],j={},C=j,x=Object(l["a"])(C,w,O,!1,null,"b94430b6",null),E=x.exports;i["default"].use(v["a"]);var M=[{path:"/",component:g,children:[{path:"",component:E}]}],T=new v["a"]({routes:M}),$=T;i["default"].use(u.a),i["default"].component(o.a.name,o.a),i["default"].config.productionTip=!1,new i["default"]({router:$,render:function(e){return e(p)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},"83b0":function(e,t,n){},"8bd3":function(e,t,n){"use strict";var r=n("83b0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.19c20757.js.map