"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{3086:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(2982),a=r(1413),c=r(5861),s=r(885),u=r(7757),i=r.n(u),o=r(2791),f=r(6871),p=r(6188),l={castItem__Img:"cast_castItem__Img__YyXtx",castList:"cast_castList__w9Z3z",name:"cast_name__Fuw8L",character:"cast_character__VDWFM"},m=r(184),d=function(t){var n=t.cast.slice(0,10);return console.log(n),(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:l.castList,children:n.map((function(t){var n=t.cast_id,r=t.profile_path,e=t.name,a=t.character;return(0,m.jsxs)("li",{className:l.castItem,children:[r&&(0,m.jsx)("img",{className:l.castItem__Img,src:"".concat("https://image.tmdb.org/t/p/w200").concat(r),alt:e}),(0,m.jsxs)("h4",{className:l.name,children:[" ",e]}),(0,m.jsx)("p",{className:l.character,children:"Character: ".concat(a)})]},n)}))})})},v=function(){var t=(0,o.useState)({cast:[],loading:!1,err:null}),n=(0,s.Z)(t,2),r=n[0],u=n[1],l=(0,f.UO)().movieId;(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!0})})),t.next=4,(0,p.zv)(l);case 4:n=t.sent,console.log(n),u((function(t){return(0,a.Z)((0,a.Z)({},t),{},{cast:[].concat((0,e.Z)(t.cast),(0,e.Z)(n.cast)),loading:!1})})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),u((function(n){return(0,a.Z)((0,a.Z)({},n),{},{loading:!1,error:t.t0})}));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[l]);var v=r.cast,h=r.loading;return(0,m.jsx)("main",{children:(0,m.jsxs)("div",{className:"container",children:[h&&(0,m.jsx)("p",{children:"...Loading"}),Boolean(v.length)&&(0,m.jsx)(d,{cast:v})]})})}},6188:function(t,n,r){r.d(n,{XT:function(){return i},TP:function(){return o},zv:function(){return f},tx:function(){return p},z1:function(){return l}});var e=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"f05a275bd04be2a259f3c9758d33fde7",language:"en-US"}}),i=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=86.cd17568b.chunk.js.map