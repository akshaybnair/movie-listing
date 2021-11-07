(this["webpackJsonpmovie-listing"]=this["webpackJsonpmovie-listing"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(11),a=n.n(c),i=(n(35),n(36),n(16)),o=n(12),s=n(5),u=function(e,t){var n=e.movies,r=e.indices,c=e.style,a=e.measure;return Object(s.jsx)("div",{ref:t,style:c,className:"flex flex-1 flex-row justify-around  item-row",children:r.map((function(e){var t=n[e];return Object(s.jsx)(l,{movie:t,measure:a},"".concat(t.name,"-").concat(e))}))})},l=function(e){var t=e.movie;e.measure;return Object(s.jsxs)("div",{className:" flex flex-col p-1 py-2 item h-full mb-3 item",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"image",src:t["poster-image"],alt:t.name})}),Object(s.jsx)("div",{children:Object(s.jsx)("span",{className:"text-white mt-2 movie-description",children:t.name})})]})},d=Object(r.forwardRef)(u),j=n(15),f=n.n(j),b=n(19),h=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("CONTENTLISTINGPAGE-PAGE".concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m="LOAD_MOVIES",v="MOVIES_LOADED",x="SEARCH_MOVIES",O="REMOVE_SEARCH",p=function(e){return{type:v,payload:e}},g=function(){var e=Object(o.b)(),t=Object(r.useCallback)(function(){var t=Object(b.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:m}),t.prev=1,console.log(" pagenumber to be loaded : ",n),t.next=5,h(n);case 5:r=t.sent,e(p(r)),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return t},w=function(e,t,n){for(var r=[],c=e*t,a=c;a<Math.min(c+t,n);a++)r.push(a);return r},y=new i.c({fixedWidth:!0,defaultHeight:300,minWidth:300}),M=function(){var e=Object(r.useRef)(),t=g(),n=Object(o.c)((function(e){return e})),c=n.nextPageAvailable,a=n.filteredMovies,u=n.currentPage,l=n.isLoading,j=n.searchMode,f=function(e,t,n){return n?Math.ceil(e/3):Math.ceil(e/3)+(t?1:0)}(a.length,c,j),b=function(e){var t=e.index,n=e.key,r=e.style,c=e.parent,o=w(t,3,a.length);return Object(s.jsx)(i.b,{cache:y,parent:c,columnIndex:0,rowIndex:t,children:function(e){var t=e.registerChild,c=e.measure;return Object(s.jsx)(d,{measure:c,ref:t,movies:a,indices:o,style:r},n)}},n)};return Object(s.jsx)("div",{className:"mx-auto list-panel",children:Object(s.jsx)(i.d,{ref:e,isRowLoaded:function(e){var t=e.index,n=w(t,3,a.length).length>0,r=!c||n;return r},loadMoreRows:function(e){e.startIndex,e.stopIndex;l||!c||j||t(u+1)},rowCount:f,children:function(e){var t=e.onRowsRendered,n=e.registerChild;return Object(s.jsx)(i.a,{children:function(e){var r=e.width,c=e.height;return Object(s.jsx)(i.e,{ref:n,onRowsRendered:t,width:r,height:c,rowCount:f,rowRenderer:b,deferredMeasurementCache:y,rowHeight:y.rowHeight,overscanRowCount:10,noRowsRenderer:function(){return Object(s.jsx)("div",{className:"text-white no-records",children:"No movies found"})}})}})}})})},C=Object(r.memo)(M),N=n(29),R=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.searchMode})),n=Object(r.useState)(""),c=Object(N.a)(n,2),a=c[0],i=c[1];Object(r.useEffect)((function(){""===a&&e({type:O})}),[a,e]);return Object(s.jsxs)("div",{className:"bg-black py-10 flex justify-start items-center header fixed h-10 search-bar w-full",children:[t&&""!==a&&Object(s.jsx)("span",{className:"mr-2 h-1 cursor-pointer icon flex-none",onClick:function(){i("")},children:Object(s.jsx)("img",{src:"Back.png",alt:"back arrow"})}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),""!==a&&e(function(e){return{type:x,payload:e}}(a))},children:Object(s.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",name:"query",value:a,onChange:function(e){i(e.target.value)}})})}),Object(s.jsx)("span",{className:"cursor-pointer icon flex-none ml-2",onClick:onsubmit,children:Object(s.jsx)("img",{src:"search.png",alt:"seach button"})})]})},k=function(e){e.movies;return Object(s.jsxs)("div",{className:"bg-black overflow-x-hidden content-container",children:[Object(s.jsx)(R,{}),Object(s.jsx)(C,{})]})},E=Object(r.memo)(k),I=function(){return Object(s.jsx)(E,{})},L=function(){return Object(s.jsx)(I,{})},P=n(30),A=n(23),S=n(13),D={isLoading:!1,movies:[],filteredMovies:[],currentPage:0,totalItems:0,nextPageAvailable:!0,searchMode:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0});case v:var n=+t.payload.page["page-num-requested"],r=+t.payload.page["total-content-items"],c=t.payload.page["content-items"].content,a=[].concat(Object(A.a)(e.movies),Object(A.a)(c));return Object(S.a)(Object(S.a)({},e),{},{movies:a,filteredMovies:a,isLoading:!1,currentPage:n,totalItems:r,nextPageAvailable:r-a.length>0});case x:var i=e.movies.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));return Object(S.a)(Object(S.a)({},e),{},{searchMode:!0,filteredMovies:i});case O:return Object(S.a)(Object(S.a)({},e),{},{searchMode:!1,filteredMovies:e.movies});default:return D}},T=Object(P.a)(H);var F=function(){return Object(s.jsx)(o.a,{store:T,children:Object(s.jsx)(L,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};a.a.render(Object(s.jsx)(F,{}),document.getElementById("root")),V()}},[[54,1,2]]]);
//# sourceMappingURL=main.5a92961d.chunk.js.map