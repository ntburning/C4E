!function(e){function n(n){for(var r,c,u=n[0],a=n[1],s=n[2],l=0,p=[];l<u.length;l++)c=u[l],o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(d&&d(n);p.length;)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={0:0},i=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var d=a;i.push([41,1]),t()}({41:function(e,n,t){"use strict";t.r(n);t(42),t(57),t(59),t(76),t(81),t(82);function r(e,n,t,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void t(e)}u.done?n(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise(function(o,i){var c=e.apply(n,t);function u(e){r(c,o,i,u,a,"next",e)}function a(e){r(c,o,i,u,a,"throw",e)}u(void 0)})}}var i="AIzaSyCSeYGW-eBSooVSeQ8ow5w1mnMZd6ARmhI",c="https://content.googleapis.com/youtube/v3/search";function u(){return a.apply(this,arguments)}function a(){return(a=o(regeneratorRuntime.mark(function e(){var n,t,r,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"dua nhau di tron",t="".concat(c,"?part=snippet&q=").concat(n,"&key=").concat(i,"&type=videos"),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:d(e.sent.items);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function s(){var e=document.getElementById("search_input");e.addEventListener("keyup",function(n){"Enter"==n.code&&u(e.value)}),document.getElementById("search_btn").addEventListener("click",function(){u(e.value)}),document.getElementById("search_results").addEventListener("click",function(e){var n=e.target.getAttribute("video_id");n&&(document.getElementById("video_player").innerHTML='\n        <iframe width="560" height="315"\n          src="https://www.youtube.com/embed/'.concat(n,'?autoplay=1"\n          frameborder="0"\n          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n          allowfullscreen>\n        </iframe>'))})}function d(e){var n=document.getElementById("search_results");n.innerHTML="",e.forEach(function(e){var t='\n      <div class="video-result" video_id="'.concat(e.id.videoId,'">\n        <img src="').concat(e.snippet.thumbnails.default.url,'" video_id="').concat(e.id.videoId,'" />\n        <span video_id="').concat(e.id.videoId,'">').concat(e.snippet.title,"</span>\n      </div>\n    ");n.insertAdjacentHTML("beforeend",t)})}function l(){return(l=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s(),e.next=3,u();case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){l.apply(this,arguments)}()},82:function(e,n,t){}});
//# sourceMappingURL=app.f769f479.js.map