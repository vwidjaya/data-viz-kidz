(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"Page not Found :("),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n={lightWhite:"#FBFDFF",lightGray:"rgba(120, 120, 120)",mediumGray:"#B0B8BA",gray:"#A0A4A6",babyBlue:"#50CAF9",blue:"#5368f1",teal:"rgb(25, 133, 140)",teal55:"rgba(25, 133, 140, 0.55)",teal60:"rgba(25, 133, 140, 0.6)",cream:"rgb(222, 204, 171)"},r="linear-gradient(to top right, "+n.cream+", "+n.teal+")",i="10px"},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Data Viz Kidz"}}}}},148:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(154),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap",rel:"stylesheet"}))}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Data Viz Kidz",description:"Landing page for our UW INFO Capstone Project",author:"Data Viz Kidz (UW INFO Capstone 2020 AE-3)"}}}}},152:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=(a(33),a(145),i.a.createContext({})),l=function(e){return i.a.createElement(c.Consumer,null,(function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")}))};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var u=a(144),d=function(){return i.a.createElement("footer",{style:{backgroundColor:u.b.teal60}},i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",padding:"1rem 2rem",fontSize:".85rem",color:"white"}},i.a.createElement("span",{style:{marginLeft:"1rem",marginRight:"1rem"}},"Data Viz Kidz"),i.a.createElement("span",{style:{marginLeft:"1rem",marginRight:"1rem"}},"UW iSchool Capstone 2020"),i.a.createElement("span",{style:{marginLeft:"1rem",marginRight:"1rem"}},"Sponsored by Microsoft PowerBI")))};d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var p=d,m=(a(153),function(e){var t=e.children;return i.a.createElement(l,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{padding:"0 1rem"}},i.a.createElement("main",null,t)),i.a.createElement(p,null))},data:n})});m.propTypes={children:s.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-95f1dc88c14bfb054ad1.js.map