(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/1x4":function(e){e.exports=JSON.parse('{"4c31df":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"aaa1bf":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"2eb176":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"afb423":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"a1b64e":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ebe86a":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ab4d13":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"},{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"f51b46":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"}],"1ea59c":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"1a02b0":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"}],"f196ce":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"fd26cf":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ac7dc6":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ee13b5":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"d7ba54":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}]}')},"6vEM":function(e,t,a){},XyE2:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u}));a("f3/d"),a("pIFo"),a("dRSK"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Z2Ku"),a("L9s1");var n=a("q1tI"),l=a.n(n),r=a("t1PT"),s=function(e,t){var a=i(e);a.includes("#outcome")||a.push("#outcome");var n=t.edges.filter((function(e){var t=e.node.frontmatter.key;return a.includes("#"+t)}));return n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"glossary-listing",href:"#glossary-listing"},l.a.createElement("h2",null,"Glossary")),n.map((function(e){var t=e.node,a=t.frontmatter,n=t.html,r=a.key;return l.a.createElement("article",{key:t.id},l.a.createElement("a",{id:r,href:"#"+r},l.a.createElement("h3",null,a.title)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}))):null},i=function(e){var t=[];return Object.keys(r).forEach((function(a){r[a].forEach((function(n){n.slug!==e||t.includes(a)||t.push(a)}))})),t};function c(e,t){return e?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"heading"},"Input Aspects:"),l.a.createElement("ul",null,e.map((function(e){var a=t[e]?t[e]:t.default;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:a},e))})))):null}function u(e,t,a){return void 0===a&&(a=!1),e?l.a.createElement("div",{className:"side-notes"},l.a.createElement("div",{className:"meta"},l.a.createElement("span",{className:"heading"},"Input Rules"),l.a.createElement("ul",null,e.map((function(e){var n=t.find((function(t){return t.node.frontmatter.id===e})),r=a?n.node.fields.slug.replace("rules/",""):n.node.fields.slug,s=n.node.frontmatter.name;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:r},s))}))))):null}},Yh6b:function(e,t,a){},"e+bk":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return I}));a("f3/d"),a("Z2Ku"),a("L9s1");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("M55E"),i=a.n(s),c=a("sWYD"),u=a("vrFN"),o=a("Bl7J"),m=(a("dRSK"),a("KKXr"),a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),function(e){var t=e.scrollLinkId,a=e.items,n=e.contributors,r=["authors","previous_authors","reviewers","funding"],s=Object.keys(a).reduce((function(e,t){return r.includes(t)||(e[t]=a[t]),e}),{}),i=Object.assign({Authors:a.authors,"Previous Authors":a.previous_authors,Reviewers:a.reviewers,funding:a.funding},s);return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:t,href:"#"+t},l.a.createElement("h2",null,"Acknowledgments")),Object.keys(i).map((function(e){var t=i[e]||[];return t&&t.length?l.a.createElement("div",{className:"meta",key:e},l.a.createElement("h3",{className:"heading"},e.split("_").join(" ")),l.a.createElement("ul",null,t.map((function(e){var t=n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}));return t?l.a.createElement("li",{key:t.name},l.a.createElement("a",{className:"sc-item block",target:"_blank",rel:"noopener noreferrer",href:t.url},t.name)):(console.warn(t+", not in contributor list."),null)})))):null})))});m.defaultProps={scrollLinkId:"",items:{authors:[],previous_authors:[],reviewers:[]},contributors:[]};var d=m,h=a("3OQw"),f=a("rbzX"),E=a("TSYQ"),g=a.n(E),v=a("lU33"),p=(a("6vEM"),function(e){var t=e.toc,a=Object(n.useState)(!0),r=a[0],s=a[1];return l.a.createElement("section",{className:g()("tableOfContents",{hide:!r})},l.a.createElement(v.a,{queries:{large:"(min-width: 1200px)"},onChange:function(e){return s(e.large)}}),l.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Table of Contents"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#glossary-listing"},"Glossary")),l.a.createElement("li",null,l.a.createElement("a",{href:"#useful-links"},"Useful Links")),l.a.createElement("li",null,l.a.createElement("a",{href:"#implementation-metrics"},"Implementations")),l.a.createElement("li",null,l.a.createElement("a",{href:"#acknowledgments"},"Acknowledgments"))))}),b=a("hmaj"),y=a("/1x4"),k=a("IQve"),w=a.n(k),N=a("XyE2"),_=a("rlp3"),I=(a("Yh6b"),t.default=function(e){var t=e.location,a=e.data,n=a.rule,s=a.allRules,m=a.allGlossary,E=a.site,g=n.html,v=n.frontmatter,k=n.tableOfContents,I=n.fields,O=I.slug,S=I.fastmatterAttributes,T=I.changelog,L=I.fileName.relativePath,M=JSON.parse(T),j=JSON.parse(S),C=new i.a.Converter,R=JSON.parse(E.siteMetadata.actRulesPackage),H=R.repository,q=R.config,A=R.contributors,F=w()(H.url),G=v.id,K="/testcases/"+G+"/rule-"+G+"-testcases-for-em-report-tool.json",P=F+"/edit/develop/_rules/"+L,x="/rules/"+G+"/changelog",J=F+"/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+"+G+"+",W=q["rule-format-metadata"]["input-aspects"],z=y[G],B=_.filter((function(e){return e.actMapping.filter((function(e){var t=e.ruleId,a=e.consistency;return t===G&&["consistent","partially-consistent"].includes(a)})).length>0}));return l.a.createElement(o.a,{location:t},l.a.createElement(u.a,{title:"Rule | "+v.name}),l.a.createElement("section",{className:"page-rule"},l.a.createElement("header",null,l.a.createElement("h1",{dangerouslySetInnerHTML:{__html:C.makeHtml(v.name)}})),l.a.createElement("ul",{className:"meta"},v.rule_type&&l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Type:"),l.a.createElement("span",null,v.rule_type)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Id:"),l.a.createElement("span",null," ",G)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Last modified:"),l.a.createElement("span",null," ",M&&M.length?Object(c.a)(new Date(M[0].date),"MMM dd, yyyy"):"-")),l.a.createElement("li",null,l.a.createElement(h.a,{accessibility_requirements:j.accessibility_requirements})),z&&z.length>0&&l.a.createElement("li",null,l.a.createElement(b.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Used in rules:")},itemKey:"slug",itemTemplate:function(e){return l.a.createElement(r.Link,{to:e.slug},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:C.makeHtml(e.name)}}))},items:z})),l.a.createElement("li",null,Object(N.b)(v.input_aspects,W)),l.a.createElement("li",null,Object(N.c)(v.input_rules,s.edges,!0))),l.a.createElement("hr",null),l.a.createElement("h2",{id:"description"},l.a.createElement("a",{href:"#description","aria-label":"description permalink",className:"anchor before"},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",viewBox:"0 0 16 16",width:"16"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Description"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:C.makeHtml(v.description)}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:g}}),l.a.createElement("hr",null),Object(N.a)(O,m),l.a.createElement("hr",null),l.a.createElement("a",{href:"#useful-links",id:"useful-links"},l.a.createElement("h2",null,"Useful Links")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:J},"Github issues related to this rule")),l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:x},"Changelog")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:P},"Propose a change to the rule")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:K},"Test case file for use in the WCAG-EM Report Tool"))),l.a.createElement("hr",null),l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"implementation-metrics",href:"#implementation-metrics"},l.a.createElement("h2",null,"Implementations")),l.a.createElement("p",null,"This section is not part of the official rule. It is populated dynamically and not accounted for in the change history or the last modified date. This section will not be included in the rule when it is published on the W3C website."),l.a.createElement(f.a,{implementers:B,ruleId:G})),l.a.createElement(d,{scrollLinkId:"acknowledgments",items:j.acknowledgments||j.acknowledgements,contributors:A})),l.a.createElement(p,{toc:k}))},"3849545629")},hmaj:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=function(e){var t=e.cls,a=e.headingTemplate,n=e.itemKey,r=e.itemTemplate,s=e.items,i=void 0===s?[]:s;return l.a.createElement("div",{className:t},a(),(!i||!i.length)&&l.a.createElement("div",{className:"note"},"No Data"),i.length>0&&l.a.createElement("ul",null,i.map((function(e){return l.a.createElement("li",{key:e[n]},r(e))}))))};r.defaultProps={cls:"",heading:"",items:[]},t.a=r}}]);
//# sourceMappingURL=component---src-templates-rule-js-1d10fa4791a83493d95a.js.map