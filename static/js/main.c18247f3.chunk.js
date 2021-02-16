(this["webpackJsonpnumber-sorting-game"]=this["webpackJsonpnumber-sorting-game"]||[]).push([[0],{12:function(t,e,n){t.exports={numberButton:"NumberButton_numberButton__1IYRm",goodMove:"NumberButton_goodMove__1fJ1B",hintBounce:"NumberButton_hintBounce__vEAG7"}},19:function(t,e,n){t.exports={log:"Log_log__1Ppmz"}},21:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=n(14),c=n.n(a),u=(n(28),n(2)),i=n(3),s=(n(29),n(15)),l=n(16),f=n.n(l),b=n(17),h=n(8),v=n(18),j=n(23),d=n(22),g=function(t){Object(v.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(b.a)(this,n),o=e.call(this,t),Object.setPrototypeOf(Object(h.a)(o),n.prototype),o}return n}(Object(d.a)(Error)),m=function(t){return t.every((function(t,e){return t===e+1}))},O=function(t,e){return[].concat(Object(u.a)(t.slice(0,e+1).reverse()),Object(u.a)(t.slice(e+1)))},p=function(t,e){for(var n=[],o=e;o>=0;o--)n.push(t[o]);for(var r=e+1;r<t.length;r++)n.push(t[r]);return n},M=function(t){return t.slice().reverse()},y=function(t){for(var e in t)return!1;return!0},x=function(t){return t[function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;if(e<t)throw new g("Max cannot be less than min, you silly goose.");return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}(0,t.length-1)]},w=n(19),C=n.n(w),S=n(0);var k=function(t){var e=t.logs,n=t.maxLogs,o=Math.min(n,3),r=Math.pow(2,1/o)*Math.pow(1.15,-1/o),a=e.length+o-n,c=o-a,u=function(t){return e=1.15*Math.pow(r,t+c)-1,Math.round(100*e)/100;var e},i=function(t){return t>=a?"":u(t)},s=e.map((function(t,e){var n=i(e);return"number"===typeof n&&n<0?"":Object(S.jsx)("div",{className:C.a.log,style:{opacity:i(e)},children:t},"".concat(e,"-log"))})).reverse();return Object(S.jsx)("div",{children:s})},B=function(t,e,n){if(!_(t)||!_(e))throw new g('Why are you sending things like "'.concat(t,'" and "').concat(e,'" to a function that requires hex color values?'));var o=A(t),r=A(e);return"#"+[0,1,2].map((function(t){return G(o[t],r[t],n)})).map(N).join("")},_=function(t){return/^#[a-fA-F0-9]{6}$/.test(t)},E=function(t){return parseInt(t,16)},N=function(t){return t.toString(16).padStart(2,"0")},A=function(t){return[t.slice(1,3),t.slice(3,5),t.slice(5)].map(E)},G=function(t,e,n){var o=Math.min(t,e),r=Math.max(t,e),a=t>e?1-n:n;return Math.floor((r-o)*a+o)},T=n(10),F=n(20),L=n.n(F),P=n(12),I=n.n(P);var Y=function(t){var e=t.color,n=t.children,o=t.goodMove,r=t.disabled,a=t.onClick,c=L()(Object(T.a)({},I.a.goodMove,o),I.a.numberButton);return Object(S.jsx)("button",{onClick:a,className:c,style:{backgroundColor:e,borderColor:e},disabled:r,children:n})},J=n(21),R=n.n(J);var H=function(t){var e=t.numArr,n=t.reverseUpTo,o=t.tryCount,r=t.goodMoves,a=t.startColor,c=t.endColor,u=e.map((function(t,o){return Object(S.jsx)(Y,{disabled:0===o||!r.length,color:B(a,c,(t-1)/(e.length-1)),goodMove:r.includes(o),onClick:function(){return n(o)},children:t},"".concat(o,"-numberSelector"))}));return Object(S.jsxs)("div",{className:R.a.numberSelectorContainer,children:["Attempt ",o,": ",u]})},U={};function W(){if(y(U)){console.time("populateEasySolutionMap"),U[123456789]=[];for(var t=[1,2,3,4,5,6,7,8,9],e=[[t,[]]],n=0;e[n][1].length<6;n++)for(var o=1;o<t.length;o++){var r=p(e[n][0],o),a=r.join("");if(!U[a]){var c=[].concat(Object(u.a)(e[n][1]),[o]);e.push([r,c]),U[a]=c}}console.timeEnd("populateEasySolutionMap")}}window.setTimeout(W,0);var $=function(t){y(U)&&W();var e=null,n=[[t,[]]],o=t.join("");if(U[o])e=M(U[o]);else for(var r=Object(T.a)({},t.join(""),[]),a=0;!e&&a<n.length&&a<1e6;a++)for(var c=1;!e&&c<t.length;c++){var i=O(n[a][0],c),s=i.join("");if(!r[s]){var l=[].concat(Object(u.a)(n[a][1]),[c]);if(U[s])e=[].concat(Object(u.a)(l),Object(u.a)(M(U[s])));else if(m(i)){e=l;break}n.push([i,l]),r[s]=l}}if(e)return e;throw new Error("Solver failed for "+t)},q=function(){return function(t){for(var e=Object(u.a)(t),n=e.length-1;n>0;n--){var o=Math.floor(Math.random()*(n+1)),r=e[n];e[n]=e[o],e[o]=r}return e}([1,2,3,4,5,6,7,8,9])},z=f()((function(t,e){t(e)}),100);var D=function(){var t=Object(o.useState)(["Your goal is to sort the list. Click a number, and all numbers from the beginning to that point will be reversed. How many turns will it take?"]),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(o.useState)(q()),c=Object(i.a)(a,2),l=c[0],f=c[1],b=Object(o.useState)(0),h=Object(i.a)(b,2),v=h[0],j=h[1],d=Object(o.useState)(0),g=Object(i.a)(d,2),p=g[0],M=g[1],y=Object(o.useState)(25),w=Object(i.a)(y,2),C=w[0],B=(w[1],Object(o.useState)($(l).length)),_=Object(i.a)(B,2),E=_[0],N=_[1],A=Object(o.useState)("#bc15a0"),G=Object(i.a)(A,2),T=G[0],F=G[1],L=Object(o.useState)("#5fdbdd"),P=Object(i.a)(L,2),I=P[0],Y=P[1],J=m(l),R=function(t){for(var e=$(t),n=[],o=1;o<t.length;o++)if(e[0]!==o){var r=O(t,o);$(r).length<e.length&&n.push(o)}else n.push(o);return{solution:e,goodMoves:n}}(l),U=(R.solution,R.goodMoves),W=function(t){r([].concat(Object(u.a)(n),[t]).slice(-1*C))},D=function(t){if(0!==t){var e=O(l,t);W("Attempt ".concat(p+1,": ").concat(l.join(", ")," - flip ").concat(t+1)+(U.includes(t)?" (Good move!)":"")),f(e),M(p+1)}},K=function(t){var e=t.target,n=e.value,o=e.name;z("start"===o?F:Y,n)};return Object(s.a)("keydown",(function(t){return function(t){/^\d$/.test(t.key)&&D(Number(t.key))}(t)})),Object(o.useEffect)((function(){J&&function(){var t,e=p-E;t=0===e?"\ud83c\udf89\ud83e\udd73\ud83c\udf88PERFECT GAME!\ud83c\udf88\ud83e\udd73\ud83c\udf89":e<=2?"Nearly flawless!":e<=5?"Well done! You finished in ".concat(e," moves over par."):"Ouch! You went ".concat(e," moves over par. Better luck next time."),W("".concat(t," ").concat(x(["Go again?","Another game?","Try another?","One more time?","Hit that New Game button!"])))}()}),[l,J]),Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("input",{type:"color",onChange:K,value:T,name:"start"})," ",T,Object(S.jsx)("input",{type:"color",onChange:K,value:I,name:"end"})," ",I,Object(S.jsx)("button",{onClick:function(){j(v+1);var t=q();f(t),M(0);var e=$(t).length;N(e),W("Game ".concat(v+2,": Good luck! The best strategy solves this in ").concat(e," steps."))},children:J?"New Game":"Reset"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(H,{startColor:T,endColor:I,numArr:l,reverseUpTo:D,tryCount:p+1,goodMoves:U}),Object(S.jsx)(k,{logs:n,maxLogs:C})]})},K=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),o(t),r(t),a(t),c(t)}))};c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(D,{})}),document.getElementById("root")),K()}},[[31,1,2]]]);
//# sourceMappingURL=main.c18247f3.chunk.js.map