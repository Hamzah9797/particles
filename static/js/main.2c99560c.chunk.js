(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{296:function(e,n,t){"use strict";t.r(n);var a=t(7),o=t.n(a),i=t(35),r=t.n(i),c=(t(80),t(81),t(68)),s=t(69),l=t(74),u=t(73),d=(t(82),t(70)),A=t.n(d),p=(t(83),t(71)),b=t.n(p),f=function(){return o.a.createElement("div",{className:"ma2 mt0"},o.a.createElement(A.a,{className:"Tilt shadow-5 br2",options:{max:75},style:{height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner pa3"},o.a.createElement("img",{alt:"brain",style:{paddingTop:"5px"},src:b.a}))))},v=t(72),g=t.n(v),h={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:300,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:12,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},m=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{className:"particles",params:h}),o.a.createElement(f,null))}}]),t}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/particles",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/particles","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(n,e)}))}}()},71:function(e,n){e.exports="data:image/png;base64,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"},75:function(e,n,t){e.exports=t(296)},80:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.2c99560c.chunk.js.map