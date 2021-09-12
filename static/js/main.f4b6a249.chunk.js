(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{42:function(e,c,t){},62:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),r=t(30),s=t.n(r),i=t(21),l=(t(42),t(31)),j=t.n(l),o=t(96),d=t(89),h=t(87),b=(t(62),t(2)),p=function(e){var c=e.key,t=e.symbol,a=e.name,n=e.currPrice,r=e.cp1h,s=e.cp24h,i=e.cp7d,l=e.image,j=e.marketCap;return Object(b.jsxs)(h.a,{className:"table-row",children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(o.a,{alt:"logo",src:l})}),Object(b.jsx)(d.a,{align:"left",children:Object(b.jsx)("p",{className:"row-text",children:a})}),Object(b.jsx)(d.a,{align:"left",children:Object(b.jsx)("p",{className:"row-text",children:t})}),Object(b.jsx)(d.a,{align:"center",children:Object(b.jsxs)("p",{className:"row-text",children:["\u20b9",n.toLocaleString()]})}),Object(b.jsx)(d.a,{align:"center",children:r<0?Object(b.jsxs)("p",{className:"coin-percent red row-text",children:[r.toFixed(2),"%"]}):Object(b.jsxs)("p",{className:"coin-percent green row-text",children:[r.toFixed(2),"%"]})}),Object(b.jsx)(d.a,{align:"center",children:s<0?Object(b.jsxs)("p",{className:"coin-percent red row-text",children:[s.toFixed(2),"%"]}):Object(b.jsxs)("p",{className:"coin-percent green row-text",children:[s.toFixed(2),"%"]})}),Object(b.jsx)(d.a,{align:"center",children:i<0?Object(b.jsxs)("p",{className:"coin-percent red row-text",children:[i.toFixed(2),"%"]}):Object(b.jsxs)("p",{className:"coin-percent green row-text",children:[i.toFixed(2),"%"]})}),Object(b.jsx)(d.a,{align:"center",children:Object(b.jsxs)("p",{className:"row-text",children:["\u20b9",j.toLocaleString()]})})]},c)},x=t(90),O=t(93),m=t(95),g=t(91),u=t(94),_=t(92),N=Object(x.a)({table:{minWidth:"25%",color:"#fff",backgroundColor:"#1a1a1c"}});var f=function(){var e=N(),c=Object(a.useState)([]),t=Object(i.a)(c,2),n=t[0],r=t[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),o=l[0],x=l[1];Object(a.useEffect)((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]);var f=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"coin-search",children:[Object(b.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(b.jsx)("form",{children:Object(b.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){x(e.target.value),console.log(o)},placeholder:"Search"})})]}),Object(b.jsx)("div",{className:"coin-app",children:Object(b.jsx)(g.a,{component:_.a,children:Object(b.jsxs)(O.a,{className:e.table,"aria-label":"simple table",children:[Object(b.jsx)(u.a,{children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)(d.a,{align:"left",children:Object(b.jsx)("p",{className:"table-heading",children:"COIN"})}),Object(b.jsx)(d.a,{align:"left",children:Object(b.jsx)("p",{className:"table-heading"})}),Object(b.jsx)(d.a,{align:"center",children:Object(b.jsx)("p",{className:"table-heading",children:"CURR. PRICE"})}),Object(b.jsx)(d.a,{align:"center",children:Object(b.jsx)("p",{className:"table-heading",children:"1H"})}),Object(b.jsx)(d.a,{align:"center",children:Object(b.jsx)("p",{className:"table-heading",children:"24H"})}),Object(b.jsx)(d.a,{align:"center",children:Object(b.jsx)("p",{className:"table-heading",children:"7d"})}),Object(b.jsx)(d.a,{align:"center",children:Object(b.jsx)("p",{className:"table-heading",children:"MKT. VOL."})})]})}),Object(b.jsx)(m.a,{className:"table-body",children:f?f.map((function(e){return Object(b.jsx)(p,{symbol:e.symbol,name:e.name,currPrice:e.current_price,cp1h:e.price_change_percentage_1h_in_currency,cp24h:e.price_change_percentage_24h_in_currency,cp7d:e.price_change_percentage_7d_in_currency,image:e.image,marketCap:e.total_volume},e.id)})):n.map((function(e){return Object(b.jsx)(p,{symbol:e.symbol,name:e.name,currPrice:e.current_price,cp1h:e.price_change_percentage_1h_in_currency,cp24h:e.price_change_percentage_24h_in_currency,cp7d:e.price_change_percentage_7d_in_currency,image:e.image,marketCap:e.total_volume},e.id)}))})]})})})]})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f4b6a249.chunk.js.map