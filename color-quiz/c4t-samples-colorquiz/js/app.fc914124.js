!function(t){function e(e){for(var r,a,u=e[0],l=e[1],i=e[2],s=0,p=[];s<u.length;s++)a=u[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(f&&f(e);p.length;)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var f=l;c.push([41,1]),n()}({41:function(t,e,n){"use strict";n.r(e);n(42),n(54),n(62),n(73),n(78);var r,o,c,a="./public/correct.mp3",u="./public/incorrect.mp3",l=Array.from(document.getElementsByClassName("color-choice")),i=document.getElementById("result");function f(t,e,n){var r=t+(t-e<(n-e)/2?1:-1)*(Math.random()*n-e);return r<e?e:r>n?n:r}function s(){r=Math.floor(360*Math.random()),o=Math.floor(100*Math.random()),c=Math.floor(100*Math.random());var t=Math.floor(Math.random()*l.length);console.log(t);for(var e=0;e<l.length;e++)if(e==t)l[e].style.backgroundColor="hsl(".concat(r,", ").concat(o,"%, ").concat(c,"%)"),l[e].setAttribute("correct",!0);else{var n=f(r,72,360),a=f(o,0,100),u=f(c,0,100);l[e].style.backgroundColor="hsl(".concat(n,", ").concat(a,"%, ").concat(u,"%)"),l[e].setAttribute("correct",!1)}document.getElementById("quiz").textContent="hsl(".concat(r,", ").concat(o,"%, ").concat(c,"%)"),setTimeout(function(){i.textContent="Pick one...",i.style.color="#000000"},500)}l.forEach(function(t){t.addEventListener("click",function(t){"true"===t.target.getAttribute("correct")?(i.textContent="Yay",i.style.color="green",new Audio(a).play()):(i.textContent="Nah",i.style.color="red",new Audio(u).play()),s()})}),s()},78:function(t,e,n){}});
//# sourceMappingURL=app.fc914124.js.map