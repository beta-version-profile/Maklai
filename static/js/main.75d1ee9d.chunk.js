(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),s=(a(15),a(2)),l=a.n(s),i=a(3),u=a(7),p=a(1),f=a(8),m=a.n(f),h=(a(18),function(e){var t=e.data,a=e.getImageUrl;return c.a.createElement("div",{className:"flickr-photos"},t&&t.map(function(e){return c.a.createElement("img",{className:"flickr-image",key:e.id,alt:"flickr",src:a(e)})}))}),b=a(9),d=a.n(b),k=(a(19),function(e){var t=e.fetchData,a=e.setSearchText,n=d()(a,500);return c.a.createElement("div",{className:"flickr__search-wrapper"},c.a.createElement("input",{className:"flickr__input",onChange:function(e){var t=e.target.value;return n(t)},placeholder:"Photos..."}),c.a.createElement("button",{onClick:t,className:"flickr__button"},"Search"))}),v=function(e){var t=e.onClick;return c.a.createElement("div",{className:"App-header"},c.a.createElement("button",{onClick:t},"More photos..."))},g=(a(20),"".concat("https://api.flickr.com/services/rest","/?api_key=").concat("d8ca6f1555fdba922dbbc5897636f19e","&format=rest&format=json&nojsoncallback=1")),j=function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")},E=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),s=Object(p.a)(o,2),f=s[0],b=s[1],d=Object(n.useState)(null),E=Object(p.a)(d,2),O=E[0],w=E[1],x=Object(n.useState)(null),N=Object(p.a)(x,2),_=N[0],S=N[1],y=Object(n.useState)(!1),C=Object(p.a)(y,2),A=C[0],I=C[1],B=function(){var e=Object(u.a)(l.a.mark(function e(){var t,n,c,r,o,s,u,p=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=p.length>0&&void 0!==p[0]?p[0]:1,a){e.next=3;break}return e.abrupt("return");case 3:return I(!0),e.prev=4,e.next=7,fetch("".concat(g,"&method=flickr.photos.search&text=").concat(a,"&per_page=10&page=").concat(t));case 7:return n=e.sent,e.next=10,n.json();case 10:c=e.sent,r=c.photos,o=r.photo,s=r.page,u=r.pages,w(s),S(u),b(s>1?[].concat(Object(i.a)(f),Object(i.a)(o)):o),I(!1),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(4),console.error(e.t0),I(!1);case 25:case"end":return e.stop()}},e,null,[[4,21]])}));return function(){return e.apply(this,arguments)}}(),D=O&&O<_;return A?c.a.createElement(m.a,{type:"spinningBubbles",color:"#000",height:"20%",width:"20%",className:"loading"}):c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(k,{setSearchText:r,fetchData:B})),c.a.createElement(h,{getImageUrl:j,data:f}),D&&c.a.createElement(v,{onClick:function(){return B(O+1)}}))};o.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.75d1ee9d.chunk.js.map