(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scoket-chat"],{"3d39":function(t,e,r){var n=r("6179");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("dd304b2a",n,!0,{sourceMap:!1,shadowMode:!1})},6179:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".map[data-v-5cafd9ff]{height:%?400?%;width:100%}uni-input[data-v-5cafd9ff]{border:1px solid #000}.footer[data-v-5cafd9ff]{width:100%;position:fixed;bottom:var(--window-bottom)}",""]),t.exports=e},"6a9c":function(t,e,r){"use strict";r.r(e);var n=r("f1b9"),o=r("fb7d");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("c848");var a,c=r("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"5cafd9ff",null,!1,n["a"],a);e["default"]=u.exports},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(I([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=E.prototype=x.prototype=Object.create(y);_.prototype=w.constructor=E,E.constructor=_,E[u]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},k(O.prototype),O.prototype[c]=function(){return this},f.AsyncIterator=O,f.async=function(t,e,r,n){var o=new O(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=I,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=j(t,r,a),i}function L(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function _(){}function E(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(r,n,i,a){var c=L(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function j(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=P(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=L(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a8d3:function(t,e,r){"use strict";var n=r("ee27");r("d81d"),r("d3b7"),r("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("c964")),i={data:function(){return{chatList:[],chatContent:"",providerList:[],price:1,title:"map",latitude:39.909,longitude:116.39742,covers:[{latitude:39.909,longitude:116.39742,iconPath:"../../static/20190730161123.jpg"},{latitude:39.9,longitude:116.39,iconPath:"../../static/20190730161123.jpg"}]}},onLoad:function(){var t=this,e=this;uni.getLocation({type:"gcj02",success:function(t){plus.nativeUI.alert(JSON.stringify(t)),e.latitude=t.latitude,e.longitude=t.longitude,console.log("当前位置的经度："+t.longitude),console.log("当前位置的纬度："+t.latitude)},fail:function(t){plus.nativeUI.alert(JSON.stringify(t))}}),uni.getProvider({service:"payment",success:function(e){console.log("payment success:"+JSON.stringify(e));var r=[];e.provider.map((function(t){switch(t){case"alipay":r.push({name:"支付宝",id:t,loading:!1});break;case"wxpay":r.push({name:"微信",id:t,loading:!1});break;default:break}})),t.providerList=r,console.log(JSON.stringify(t.providerList))}})},methods:{open:function(){plus.runtime.openWeb("http://www.baidu.com")},requestPayment:function(t,e){var r=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.providerList[e].loading=!0,n.next=3,r.getOrderInfo(t.id);case 3:o=n.sent,console.log(o),uni.requestPayment({provider:t.id,orderInfo:o.data,success:function(t){console.log(t)},fail:function(t){console.log(t)},complete:function(){r.providerList[e].loading=!1}});case 6:case"end":return n.stop()}}),n)})))()},getOrderInfo:function(t){var e="",r="https://demo.dcloud.net.cn/payment/?payid="+t+"&appid="+e+"&total="+this.price;return new Promise((function(t){uni.request({url:r,success:function(e){t(e)},fail:function(e){t(e)}})}))},sendmessage:function(){var t=this;this.chatContent.trim()&&uni.sendSocketMessage({data:this.chatContent,success:function(){t.chatContent=""}})}}};e.default=i},c848:function(t,e,r){"use strict";var n=r("3d39"),o=r.n(n);o.a},c964:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},f1b9:function(t,e,r){"use strict";var n,o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{},[t._v(t._s(t.providerList[0])),t.providerList.length>0?t._l(t.providerList,(function(e,n){return r("v-uni-button",{key:n,attrs:{loading:e.loading},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.requestPayment(e,n)}}},[t._v(t._s(e.name)+"支付")])})):t._e(),r("v-uni-map",{staticStyle:{width:"100%",height:"300px"},attrs:{latitude:t.latitude,longitude:t.longitude,markers:t.covers}}),t._v("#")],2)},i=[];r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}))},fb7d:function(t,e,r){"use strict";r.r(e);var n=r("a8d3"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a}}]);