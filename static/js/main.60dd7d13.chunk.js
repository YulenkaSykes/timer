(this.webpackJsonpnew_timer=this.webpackJsonpnew_timer||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(9),u=n.n(r),a=(n(15),n(7)),i=n(20),b=n(10),o=(n(16),n(3)),l=Object(i.a)(1e3);var j=function(){var e=Object(c.useRef)(),t=Object(c.useState)(new Date(0)),n=Object(a.a)(t,2),s=n[0],r=n[1],u=Object(c.useState)(!1),i=Object(a.a)(u,2),j=i[0],d=i[1],O=Object(c.useState)(!1),h=Object(a.a)(O,2),f=h[0],C=h[1],g=Object(c.useCallback)((function(e){return e.toString().length<2?"0"+e:e}),[]),S=Object(c.useCallback)((function(){e.current.unsubscribe(),d(!1)}),[]),k=Object(c.useCallback)((function(){e.current=l.subscribe((function(e){return r(new Date(s.setUTCSeconds(s.getUTCSeconds()+1)))})),d(!0)}),[]),m=Object(c.useCallback)((function(){j?S():k()}),[j]),x=Object(c.useCallback)((function(){f?S():(C(!0),Object(b.a)(300).subscribe((function(e){return C(!1)})))}),[f]),w=Object(c.useCallback)((function(){try{S(),r(new Date(s.setUTCSeconds(0))),k()}catch(e){alert("Time not going")}}),[]);return Object(o.jsxs)("div",{className:"App col centered",children:[Object(o.jsxs)("div",{className:"row centered",children:[Object(o.jsx)("h1",{children:g(s.getUTCHours())}),":",Object(o.jsx)("h1",{children:g(s.getUTCMinutes())}),":",Object(o.jsx)("h1",{children:g(s.getUTCSeconds())})]}),Object(o.jsxs)("div",{className:"row centered",children:[Object(o.jsx)("button",{className:"".concat(j?"red":"green"),onClick:function(){return m()},children:j?"Stop":"Start"}),Object(o.jsx)("button",{className:"orange",onClick:function(){return x()},children:"Wait"}),Object(o.jsx)("button",{className:"blue",onClick:function(){return w()},children:"Reset"})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),c(e),s(e),r(e),u(e)}))};u.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),d()}},[[18,1,2]]]);
//# sourceMappingURL=main.60dd7d13.chunk.js.map