(this.webpackJsonpweathermeter=this.webpackJsonpweathermeter||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(4),r=n.n(i),o=(n(10),n(3)),d="24632732eb9a833f013d856c333f40eb",h="http://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)({}),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(c.jsx)("div",{className:"undefined"!=typeof l.main?l.main.temp>18?"app-warm":"app-cold":"app-und",children:Object(c.jsxs)("main",{children:[Object(c.jsx)("div",{className:"search-box",children:Object(c.jsx)("input",{type:"text",className:"search-bar",placeholder:"Enter the name of a city...",onChange:function(e){return s(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(n,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){j(e),s(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"location-box",children:Object(c.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]})}),Object(c.jsxs)("div",{className:"weather-box",children:[Object(c.jsxs)("div",{className:"temp",children:[l.main.temp,"\xb0C"]}),Object(c.jsx)("div",{className:"weather",children:l.weather[0].description})]})]}):" "]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),j()}},[[11,1,2]]]);
//# sourceMappingURL=main.d7c99681.chunk.js.map