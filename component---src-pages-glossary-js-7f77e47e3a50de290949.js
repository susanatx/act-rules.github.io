(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"KY7+":function(e,t,a){"use strict";a.r(t);a("Zi+Q");var n=a("q1tI"),l=a.n(n),r=a("TSYQ"),m=a.n(r),i=a("Wbzz"),s=a("lU33"),c=a("Bl7J"),u=a("vrFN"),o=a("t1PT"),d=a("hmaj"),h=a("M55E"),E=new(a.n(h).a.Converter);t.default=function(e){var t=e.location,a=Object(i.useStaticQuery)("1392162143").glossaryData,r=Object(n.useState)(""),h=r[0],g=r[1];return l.a.createElement(c.a,{location:t},l.a.createElement(s.a,{queries:{small:"(max-width: 599px)",medium:"(min-width: 600px) and (max-width: 1199px)",large:"(min-width: 1200px)"},onChange:function(e){return e.small?g("sm"):e.medium?g("md"):g("lg")}}),l.a.createElement(u.a,{title:"Glossary"}),l.a.createElement("section",{className:"page-glossary"},l.a.createElement("h1",null,"Glossary"),l.a.createElement("section",{className:m()("listing",h)},a.edges.map((function(e){var t=e.node,a=t.frontmatter,n=t.html,r=o["#"+a.key];return l.a.createElement("article",{key:a.key},l.a.createElement("section",null,l.a.createElement("a",{id:a.key,href:"#"+a.key},l.a.createElement("h2",null,a.title)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),l.a.createElement(d.a,{cls:"used-rules",headingTemplate:function(){return l.a.createElement("h3",null,"Used In Rules: (",r?r.length:"0",")")},itemTemplate:function(e){return l.a.createElement("li",{key:e.slug},l.a.createElement("a",{href:"/"+e.slug},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:E.makeHtml(e.name)}})))},items:o["#"+a.key]}))})))))}},"Zi+Q":function(e,t,a){},hmaj:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=function(e){var t=e.cls,a=e.headingTemplate,n=e.itemTemplate,r=e.items,m=void 0===r?[]:r;return l.a.createElement("div",{className:t},a(),(!m||!m.length)&&l.a.createElement("div",{className:"note"},"No Data"),m.length>0&&l.a.createElement("ul",null,m.map((function(e){return n(e)}))))};r.defaultProps={cls:"",heading:"",items:[]},t.a=r}}]);
//# sourceMappingURL=component---src-pages-glossary-js-7f77e47e3a50de290949.js.map