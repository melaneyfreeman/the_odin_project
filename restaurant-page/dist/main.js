!function(e){var t={};function n(d){if(t[d])return t[d].exports;var l=t[d]={i:d,l:!1,exports:{}};return e[d].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(d,l,function(t){return e[t]}.bind(null,l));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function d(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("sideBar"),e.appendChild(t);let n=document.createElement("h2");n.classList.add("location"),t.appendChild(n),n.innerHTML="SHIBUYA, TOKYO";let d=document.createElement("img");d.classList.add("logo"),d.src="../src/images/bigbangburger_logo.png",t.appendChild(d);let l=document.createElement("p");l.classList.add("description"),l.innerHTML="A quality eating house based in Shibuya, we serve our burgers BIG with a BANG!!!",t.appendChild(l);let a=document.createElement("div");a.classList.add("nav-bar"),e.appendChild(a);let s=document.createElement("a");s.classList.add("listItem"),s.classList.add("home"),a.appendChild(s),s.innerHTML="HOME";let c=document.createElement("a");c.classList.add("listItem"),c.classList.add("menu"),a.appendChild(c),c.innerHTML="MENU";let i=document.createElement("a");i.classList.add("listItem"),i.classList.add("contact"),a.appendChild(i),i.innerHTML="CONTACT";let o=document.createElement("img");o.classList.add("star"),o.src="../src/images/star_1.png";let r=document.createElement("p");r.classList.add("slogan"),r.innerHTML="Do you have the guts? Take our challenge!";let m=document.createElement("div");m.classList.add("sloganWrapper"),l.appendChild(m),r.appendChild(o),m.appendChild(r),t.appendChild(l)}function l(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("slideshow-container"),t.id="slideshowContainer";let n=document.createElement("div");n.classList.add("mySlides"),n.classList.add("fade");let d=document.createElement("img");d.style.widows="100%",d.src="../src/images/burger_7.jpeg",t.appendChild(n),n.appendChild(d);let l=document.createElement("div");l.classList.add("mySlides"),l.classList.add("fade");let a=document.createElement("img");a.style.widows="100%",a.src="../src/images/burger_6.jpeg",t.appendChild(l),l.appendChild(a);let s=document.createElement("div");s.classList.add("mySlides"),s.classList.add("fade");let c=document.createElement("img");c.style.widows="100%",c.src="../src/images/burger_7.jpeg",t.appendChild(s),s.appendChild(c);let i=document.createElement("div");i.classList.add("mySlides"),i.classList.add("fade");let o=document.createElement("img");o.style.widows="100%",o.src="../src/images/burger_4.jpg",t.appendChild(i),i.appendChild(o);let r=document.createElement("div");r.classList.add("mySlides"),r.classList.add("fade");let m=document.createElement("img");m.style.widows="100%",m.src="../src/images/burger_5.jpeg",t.appendChild(r),r.appendChild(m);let u=document.createElement("a");u.classList.add("prev"),t.appendChild(u);let p=document.createElement("a");p.classList.add("next"),t.appendChild(p);let g=document.createElement("div");g.style.textAlign="center";let y=document.createElement("span");y.classList.add("dot"),g.appendChild(y);let h=document.createElement("span");h.classList.add("dot"),g.appendChild(h);let C=document.createElement("span");C.classList.add("dot"),g.appendChild(C);let E=document.createElement("span");E.classList.add("dot"),g.appendChild(E);let b=document.createElement("span");var L;b.classList.add("dot"),g.appendChild(b),e.appendChild(t),t.appendChild(g),L=0,function e(){if(document.body.contains(document.getElementById("slideshowContainer"))){var t,n=document.getElementsByClassName("dot"),d=document.getElementsByClassName("mySlides");for(t=0;t<d.length;t++)d[t].style.display="none";for(++L>d.length&&(L=1),t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");d[L-1].style.display="block",n[L-1].className+=" active",setTimeout(e,500)}}()}n.r(t),d();let a=document.getElementById("content");document.getElementById("slideshowContainer");l(),document.body.contains(document.getElementById("slideshowContainer"));let s=document.getElementsByClassName("home")[0],c=document.getElementsByClassName("menu")[0],i=document.getElementsByClassName("contact")[0];s.style.backgroundColor="#e62d2e",s.style.borderRadius="50px 50px 0px 0px",s.onclick=function(){a.innerHTML="",d(),l(),console.log("home"),s.style.backgroundColor="#e62d2e",s.style.borderRadius="50px 50px 0px 0px",c.style.backgroundColor="black",i.style.backgroundColor="black"},c.onclick=function(){document.getElementById("content").innerHTML="",a.innerHTML="",console.log("menu"),c.style.backgroundColor="#e62d2e",c.style.borderRadius="50px 50px 0px 0px",s.style.backgroundColor="black",i.style.backgroundColor="black"},i.onclick=function(){console.log("contact")}}]);