(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=(n(22),n(6)),s=n(2),l=n(15),u=n(16),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);var f=n(4),b=n(5),p=n(8),g=n(7),m=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})})))},v=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa1 ba b--green bg-light-blue",type:"search",placeholder:"search robos",onChange:t}))},O=(n(29),function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"600px"}},e.children)}),w=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oops something went Wrong"):this.props.children}}]),n}(r.Component),y=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading ..."):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Robofriends"),o.a.createElement(v,{searchField:t,searchChange:n}),o.a.createElement(O,null,o.a.createElement(w,null,o.a.createElement(E,{robots:c}))))}}]),n}(r.Component),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payLoad:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payLoad:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payLoad:t})}))}))}}}))(y),j=n(1),S={searchField:""},C={isPending:!1,robots:[],error:""},L=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)(Object(j.a)({},e),{},{searchField:t.payLoad});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{robots:t.payLoad,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(j.a)(Object(j.a)({},e),{},{error:t.payLoad,isPending:!1});default:return e}}}),_=Object(l.createLogger)(),k=Object(s.d)(L,Object(s.a)(u.a,_));c.a.render(o.a.createElement(i.a,{store:k},o.a.createElement(R,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/mypractice",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/mypractice","/service-worker.js");h?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):d(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.2f3eede6.chunk.js.map