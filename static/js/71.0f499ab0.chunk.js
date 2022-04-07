"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[71],{2071:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(1413),a=n(5861),s=n(885),c=n(7757),i=n.n(c),o=n(2791),u=n(501),l=n(6871),d=n(6188),f=n(2982),v={basic:"movie-details_basic__Fku-Y",basicInfo:"movie-details_basicInfo__Og6ku",title:"movie-details_title__2d0WD",button:"movie-details_button__dDuHU"},m=n(184),p=function(e){var t=e.data;console.log(t);var n=t.poster_path,r=t.title,a=t.tagline,s=t.release_date,c=t.vote_average,i=t.overview,o=t.genres;console.log(o),console.log(s);var u=(0,f.Z)(new Set(o.map((function(e){return e.name}))));return(0,m.jsx)("main",{children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:v.basic,children:[(0,m.jsx)("div",{className:v.basicPoster,children:(0,m.jsx)("img",{className:v.basicPoster__Img,src:"".concat("https://image.tmdb.org/t/p/w200").concat(n),alt:a})}),(0,m.jsxs)("div",{className:v.basicInfo,children:[(0,m.jsx)("h2",{children:"".concat(r," (").concat(s.substr(0,4),")")}),(0,m.jsxs)("p",{children:["User score: ","".concat(10*Number(c),"%")]}),(0,m.jsx)("h3",{className:v.title,children:"Overview"}),i,(0,m.jsx)("h4",{className:v.title,children:"Genres"}),u.join(" ")]})]}),(0,m.jsxs)("div",{className:v.add,children:[(0,m.jsx)("h4",{className:v.title,children:" Additional information"}),(0,m.jsx)("ul",{className:v.addList})]})]})})},h=function(){var e,t=(0,o.useState)({data:{},loading:!1,err:null}),n=(0,s.Z)(t,2),c=n[0],f=n[1],h=(0,l.UO)().movieId;(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0})})),e.next=4,(0,d.TP)(h);case 4:t=e.sent,console.log(t),f((function(e){return(0,r.Z)((0,r.Z)({},e),{},{data:t,loading:!1})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),f((function(t){return(0,r.Z)((0,r.Z)({},t),{},{loading:!1,error:e.t0})}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]);var x=c.data,b=c.loading,g=(null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)||"/";console.log(g);var j=(0,l.s0)();return(0,m.jsx)("main",{children:(0,m.jsxs)("div",{className:"container",children:[b&&(0,m.jsx)("p",{children:"...Loading"}),(0,m.jsx)("button",{className:v.button,onClick:function(){return j(g)},children:"\u2190 Go back"}),Boolean(Object.keys(x).length)&&(0,m.jsx)(p,{data:x}),(0,m.jsx)("li",{className:"list-item",children:(0,m.jsx)(u.rU,{to:"/movies/".concat(h,"/cast"),state:{from:g},children:"Cast"})}),(0,m.jsx)("li",{className:"list-item",children:(0,m.jsx)(u.rU,{to:"/movies/".concat(h,"/reviews"),state:{from:g},children:"Reviews"})}),(0,m.jsx)(l.j3,{})]})})}},6188:function(e,t,n){n.d(t,{XT:function(){return o},TP:function(){return u},zv:function(){return l},tx:function(){return d},z1:function(){return f}});var r=n(5861),a=n(7757),s=n.n(a),c=n(4569),i=n.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f05a275bd04be2a259f3c9758d33fde7",language:"en-US"}}),o=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=71.0f499ab0.chunk.js.map