!function(e){function n(n){for(var r,c,a=n[0],u=n[1],s=n[2],f=0,d=[];f<a.length;f++)c=a[f],o[c]&&d.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(n);d.length;)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={0:0},i=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=u;i.push([41,1]),t()}({41:function(e,n,t){"use strict";t.r(n);var r;t(42),t(57),t(59),t(76),t(79),t(84),t(85);function o(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void t(e)}a.done?n(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var c=e.apply(n,t);function a(e){o(c,r,i,a,u,"next",e)}function u(e){o(c,r,i,a,u,"throw",e)}a(void 0)})}}function c(){return a.apply(this,arguments)}function a(){return(a=i(regeneratorRuntime.mark(function e(){var n,t,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("top_songs").innerHTML='\n    <div id="loading">\n      <img src="public/spinner.svg">\n    </div>\n  ',n=document.getElementById("type_select").value,t=document.getElementById("quantity_select").value,r="https://itunes.apple.com/us/rss/".concat(n,"/all/limit=").concat(t,"/json"),e.next=6,fetch(r,{mode:"cors"});case 6:return o=e.sent,e.next=9,o.json();case 9:u(e.sent.feed.entry);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function u(e){var n=document.getElementById("top_songs");n.innerHTML="",e.forEach(function(e){var t=e["im:name"].label,r=e["im:image"][1].label,o=e.link[1]?e.link[1].attributes.href:null,i=e["im:artist"].label,c='\n      <div class="song-item" previewUrl="'.concat(o,'">\n        <img\n          class="').concat(o?"btn song-item-img":"song-item-img",'"\n          src="').concat(r,'"\n          alt="').concat(t,'"\n        />\n        <div class="song-name">').concat(t,'</div>\n        <div class="song-artist">').concat(i,"</div>\n        ").concat(o?'<div class="song-preview">Preview</div>':"","\n      </div>\n      ");n.insertAdjacentHTML("beforeend",c)});var t=function(e){!function(e){r&&r.pause();(r=new Audio(e)).play()}(e.target.parentNode.getAttribute("previewUrl"))},o=document.getElementsByClassName("song-item-img"),i=document.getElementsByClassName("song-preview");o.forEach(function(e){e.addEventListener("click",t)}),i.forEach(function(e){e.addEventListener("click",t)})}function s(){return(s=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}document.getElementById("type_select").addEventListener("change",c),document.getElementById("quantity_select").addEventListener("change",c),function(){s.apply(this,arguments)}()},85:function(e,n,t){}});
//# sourceMappingURL=app.096b69e6.js.map