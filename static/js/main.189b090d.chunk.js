(this["webpackJsonpmy-offline-web-app"]=this["webpackJsonpmy-offline-web-app"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),i=t(6),r=t.n(i),a=t(4),s=t(2),l=t(7),u=t.n(l),d=t(5),f=t.n(d),h=t(0),b=function(e){var n=e.question,t=e.choices,c=e.correctChoiceIndex,i=Object(o.useState)(-1),r=Object(s.a)(i,2),l=r[0],d=r[1],b=Object(o.useState)(-1),g=Object(s.a)(b,2),p=g[0],w=g[1],j=Object(o.useState)(-1),v=Object(s.a)(j,2),O=v[0],x=v[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:n}),Object(h.jsx)("ol",{children:t.map((function(e,n){return Object(h.jsxs)("li",{className:u()(Object(a.a)({},f.a.correct,n===p),Object(a.a)({},f.a.wrong,n===O)),children:[Object(h.jsx)("input",{type:"checkbox",checked:l===n,onChange:function(){return d(n)}}),e]},n)}))}),Object(h.jsx)("button",{onClick:function(){return l!==c&&x(l),void w(c)},children:"\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"})]})},g=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(b,{question:"\u0639\u0646\u062f\u0645\u0627 \u062a\u0631\u062a\u0641\u0639 \u062d\u0631\u0627\u0631\u0629 \u0627\u0644\u0645\u0627\u0621 \u0641\u064a \u0627\u0644\u0645\u062d\u0631\u0643 \u0648\u062a\u0631\u064a\u062f \u0625\u0636\u0627\u0641\u0629 \u0645\u0627\u0621 \u0641\u0643\u064a\u0641 \u062a\u0641\u0639\u0644 \u0630\u0644\u0643 :",choices:["\u062a\u0641\u062a\u062d \u063a\u0637\u0627\u0621 \u0627\u0644\u0645\u0628\u0631\u062f \u0628\u062d\u0630\u0631 \u0648\u062a\u0636\u064a\u0641 \u0645\u0627\u0621 \u0648\u0627\u0644\u0645\u062d\u0631\u0643 \u0645\u062a\u0648\u0642\u0641 \u0639\u0646 \u0627\u0644\u0639\u0645\u0644 .","\u062a\u0648\u0642\u0641 \u0639\u0645\u0644 \u0627\u0644\u0645\u062d\u0631\u0643 \u0648\u062a\u0646\u062a\u0638\u0631 \u0625\u0644\u0649 \u0623\u0646 \u064a\u0628\u0631\u062f \u0627\u0644\u0645\u062d\u0631\u0643 \u062b\u0645 \u062a\u0636\u064a\u0641 \u0645\u0627\u0621 .","\u062a\u0648\u0642\u0641 \u0639\u0645\u0644 \u0627\u0644\u0645\u062d\u0631\u0643 \u0648\u062a\u0646\u062a\u0638\u0631 \u0625\u0644\u0649 \u0623\u0646 \u064a\u0628\u0631\u062f \u0627\u0644\u0645\u062d\u0631\u0643 \u062b\u0645 \u062a\u0636\u064a\u0641 \u0645\u0627\u0621 .","\u062a\u062a\u0648\u062c\u0647 \u0625\u0644\u0649 \u0623\u0642\u0631\u0628 \u0643\u0631\u0627\u062c \u0644\u0625\u0636\u0627\u0641\u0629 \u0645\u0627\u0621 \u0641\u064a \u0627\u0644\u0645\u0628\u0631\u062f ."],correctChoiceIndex:2})})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),o(e),c(e),i(e),r(e)}))};t(13);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-offline-web-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/my-offline-web-app","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(n,e)}))}}(),j()},5:function(e,n,t){e.exports={wrong:"QuestionBox_wrong__3E5Vn",correct:"QuestionBox_correct__2CpK6"}}},[[14,1,2]]]);
//# sourceMappingURL=main.189b090d.chunk.js.map