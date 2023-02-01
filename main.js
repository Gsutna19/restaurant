(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(145),t.b),d=i()(o());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap);"]);var p=s()(l);d.push([e.id,":root {\n    --light-bg: #CAD8E5;\n    --dark-bg: #34404D;\n    --light-txt: #998C77;\n    --dark-txt: #34404D;\n    --prim-link: #778899;\n    --sec-link: #4D412C;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n    background: url("+p+")\n}\n\nh1, h2 {\n    font-family: 'Lobster Two', cursive;\n    font-size: 2.25rem;\n}\n\nh1, h2, p {\n    color: var(--light-txt);\n    padding: 8px 0;\n}\n\np {\n    padding: 8px 40px; \n}\n\n#content {\n    background-color: var(--dark-bg);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    max-width: 632px;\n    border-radius: 30px;\n    padding: 16px 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--dark-bg);\n    color: var(--light-txt);\n    list-style-type: none;\n    box-shadow: 0 1px 4px black;\n    width: 96vw;\n    z-index: 99;\n}\n\nli {\n    padding: 16px;\n    font-family: 'Lobster Two', cursive;\n    /* font-size: 1.5rem; */\n}\n\nli, p {\n    font-size: 1.5rem;\n    text-align: center;\n}\n\nimg {\n    max-width: 100%;\n}",""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},145:(e,n,t)=>{e.exports=t.p+"9fe09ccf7b0a8368d246.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=document.createElement("h1"),n=document.createElement("h2"),r=document.createElement("h2"),o=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p"),c=document.createElement("ul"),s=document.createElement("li"),l=document.createElement("li"),d=document.createElement("li");c.classList.add("header"),s.textContent="Home",l.textContent="Menu",d.textContent="Contact Us",c.appendChild(s),c.appendChild(l),c.appendChild(d),e.innerHTML="Welcome to Restaurant!",n.innerHTML="Menu",r.innerHTML="Contact Us",o.innerHTML="The restaurant is great! 10/10 would eat here again.",a.innerHTML="Check out our Heavenly Menu!",i.innerHTML="But if you still have questions contact our team.";var p=t(379),u=t.n(p),f=t(795),m=t.n(f),h=t(569),g=t.n(h),v=t(565),y=t.n(v),b=t(216),x=t.n(b),C=t(589),w=t.n(C),T=t(426),E={};E.styleTagTransform=w(),E.setAttributes=y(),E.insert=g().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=x(),u()(T.Z,E),T.Z&&T.Z.locals&&T.Z.locals;const M=t.p+"886769b23a49dc7c270e.jpg",L=t.p+"3444cf90276fd23b441e.jpg",j=t.p+"792048d13b374a7c66d2.jpg";document.body.appendChild(function(){const t=document.getElementById("content");document.body.appendChild(c),t.appendChild(e);const s=new Image;s.src=M,t.appendChild(s),t.appendChild(o);const l=new Image;l.src=L,t.appendChild(n),t.appendChild(l),t.appendChild(a);const d=new Image;return d.src=j,t.appendChild(r),t.appendChild(d),t.appendChild(i),t}())})()})();