(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),s=t.n(n),l=t(5),r=t.n(l),i=t(40),o=t.n(i);t.d(a,"a",function(){return o.a});t(166);var u=s.a.createContext({});function c(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,r=t?t.data:a[n]&&a[n].data;return s.a.createElement(s.a.Fragment,null,r&&l(r),!r&&s.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return s.a.createElement(u.Consumer,null,function(e){return s.a.createElement(c,{data:a,query:t,render:n||l,staticQueryData:e})})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},166:function(e,a,t){var n;e.exports=(n=t(171))&&n.default||n},167:function(e,a,t){"use strict";var n=t(172),s=t(0),l=t.n(s),r=t(5),i=t.n(r),o=t(179),u=t.n(o);function c(e){var a=e.description,t=e.lang,s=e.meta,r=e.keywords,i=e.title,o=n.data.site,c=a||o.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(s)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=c},168:function(e,a,t){"use strict";var n=t(8),s=t.n(n),l=t(170),r=t(0),i=t.n(r),o=t(5),u=t.n(o),c=t(165),m=t(185),p=(t(175),function(e){var a=e.siteTitle;return i.a.createElement("header",{className:"app-header"},i.a.createElement(c.a,{to:"/pages/about"},i.a.createElement("h1",null,a)))});p.propTypes={siteTitle:u.a.string},p.defaultProps={siteTitle:""};var g=p,d=t(169),h=(t(176),function(e){e.siteTitle;return i.a.createElement("footer",{className:"app-footer"},i.a.createElement("div",{className:"tags"},i.a.createElement("p",{className:"tag"},"A Community Group of the",i.a.createElement("a",{href:"https://www.w3.org/",target:"_blank",rel:"noopener noreferrer"},"World Wide Web Consortium.")),i.a.createElement("p",{className:"tag"},"Developed with the support of the EU-funded"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.w3.org/WAI/"},"WAI-Tools"," ")," ","Project.")),i.a.createElement("div",{className:"logos"},i.a.createElement("a",{lang:"en",className:"logo-w3c",href:"https://www.w3.org/",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("svg",{role:"img","aria-label":"W3C",viewBox:"0 0 68 34",height:"25",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",null,i.a.createElement("path",{d:"m16.117 1.006 5.759 19.58 5.759-19.58h4.17 11.444v1.946l-5.879 10.128c2.065.663 3.627 1.868 4.686 3.615 1.059 1.748 1.589 3.799 1.589 6.155 0 2.914-.775 5.363-2.324 7.348s-3.555 2.978-6.017 2.978c-1.854 0-3.469-.589-4.845-1.767-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35c.477 1.218 1.106 2.178 1.887 2.879.781.702 1.701 1.052 2.76 1.052 1.112 0 2.052-.622 2.82-1.866.768-1.245 1.152-2.74 1.152-4.489 0-1.933-.411-3.429-1.231-4.488-.954-1.244-2.45-1.867-4.489-1.867h-1.588v-1.906l5.56-9.612h-6.712l-.382.65-8.163 27.548h-.397l-5.958-19.937-5.957 19.937h-.397l-9.53-32.168h4.17l5.759 19.58 3.892-13.185-1.906-6.395z"}),i.a.createElement("path",{d:"m64.92 1.006c-.819 0-1.554.295-2.111.861-.591.6-.92 1.376-.92 2.178s.313 1.545.887 2.128c.583.591 1.334.912 2.145.912.793 0 1.562-.321 2.161-.903.574-.557.887-1.3.887-2.136 0-.811-.321-1.57-.878-2.136-.584-.592-1.344-.904-2.171-.904zm2.643 3.065c0 .701-.271 1.351-.768 1.832-.524.507-1.174.777-1.892.777-.675 0-1.342-.278-1.84-.785s-.777-1.157-.777-1.849.287-1.368.802-1.891c.481-.49 1.131-.751 1.84-.751.726 0 1.376.271 1.883.785.49.489.752 1.147.752 1.882zm-2.559-1.807h-1.3v3.445h.65v-1.469h.642l.701 1.469h.726l-.769-1.57c.498-.102.785-.439.785-.929 0-.625-.472-.946-1.435-.946zm-.118.422c.608 0 .886.169.886.591 0 .405-.278.549-.87.549h-.549v-1.14z"}),i.a.createElement("path",{d:"m59.807.825.676 4.107-2.391 4.575s-.918-1.941-2.443-3.015c-1.285-.905-2.122-1.102-3.431-.832-1.681.347-3.587 2.357-4.419 4.835-.995 2.965-1.005 4.4-1.04 5.718-.056 2.113.277 3.362.277 3.362s-1.452-2.686-1.438-6.62c.009-2.808.451-5.354 1.75-7.867 1.143-2.209 2.842-3.535 4.35-3.691 1.559-.161 2.791.59 3.743 1.403 1 .854 2.01 2.721 2.01 2.721z"}),i.a.createElement("path",{d:"m60.102 24.063s-1.057 1.889-1.715 2.617c-.659.728-1.837 2.01-3.292 2.651s-2.218.762-3.656.624c-1.437-.138-2.772-.97-3.24-1.317s-1.664-1.369-2.34-2.322-1.733-2.859-1.733-2.859.589 1.91.958 2.721c.212.467.864 1.894 1.789 3.136.863 1.159 2.539 3.154 5.086 3.604 2.547.451 4.297-.693 4.73-.97s1.346-1.042 1.924-1.66c.603-.645 1.174-1.468 1.49-1.962.231-.36.607-1.092.607-1.092z"})))),i.a.createElement("a",{lang:"en",className:"logo-wai",href:"https://www.w3.org/WAI/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("span",{className:"wai"},i.a.createElement("span",{className:"wa"},"Web Accessibility")," ",i.a.createElement("span",{className:"i"},i.a.createElement("span",{className:"initieative"},"Initiative")," ",i.a.createElement("span",null,"WAI")))),i.a.createElement("a",{href:d.repository.url,target:"_blank",rel:"noopener noreferrer",className:"logo-github","aria-label":"link to github repository"},i.a.createElement("svg",{enableBackground:"new 0 0 512 512",id:"Layer_1",version:"1.1",width:"25",height:"25",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",null,i.a.createElement("path",{d:"M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"}))))))});h.propTypes={siteTitle:u.a.string},h.defaultProps={siteTitle:""};var b=h,f=(t(177),t(178),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={showMenu:!0},t}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=window.location.hash;if(e){var a=document.getElementById(e);a&&a.scrollIntoView()}},t.handleHideShowMenu=function(){this.setState(function(e){return{showMenu:!e.showMenu}})},t.getListItemFromEdges=function(e){return e.map(function(e){var a=e.node,t=a.path,n=a.context;if(!n||!n.title)return null;var s=""+n.title+t;return i.a.createElement("li",{key:s},i.a.createElement(c.a,{activeClassName:"active",to:t},n.title))})},t.render=function(){var e=this,a=this.props.children;return i.a.createElement(c.b,{query:"1707565321",render:function(t){var n=t.getSiteTitle,s=t.getTopLevelNavigation,l=t.getNonRulesNavigation;return i.a.createElement("section",{className:"layout-container"},i.a.createElement(m.a,{query:"(max-width: 600px)",onChange:function(a){return a&&e.state.showMenu&&e.handleHideShowMenu()}}),i.a.createElement(m.a,{query:"(min-width: 601px)",onChange:function(a){return a&&!e.state.showMenu&&e.handleHideShowMenu()}}),i.a.createElement("aside",{className:e.state.showMenu?"show":"hide"},i.a.createElement("button",{className:"nav-hide-show-menu",onClick:function(a){return e.handleHideShowMenu()}},"☰"),i.a.createElement("div",{className:"logo"},i.a.createElement(g,{siteTitle:n.siteMetadata.title})),i.a.createElement("nav",{className:"navigation"},i.a.createElement("ul",null,s.group.map(function(a){return e.getListItemFromEdges(a.edges)}),i.a.createElement("li",null,i.a.createElement("hr",null)),i.a.createElement("li",{key:"rules"},i.a.createElement(c.a,{to:"/rules/",activeClassName:"active"},"Rules")),i.a.createElement("li",{key:"glossary"},i.a.createElement(c.a,{to:"/glossary/",activeClassName:"active"},"Glossary")),i.a.createElement("li",null,i.a.createElement("hr",null)),l.group.map(function(a,t){var n=a.totalCount,s=a.edges,l=a.fieldValue;if(n<=0)return null;var r=l+"-"+t;return i.a.createElement("li",{key:r},i.a.createElement("p",{className:"parent-item"},l),i.a.createElement("ul",null,e.getListItemFromEdges(s)),i.a.createElement("hr",null))})))),i.a.createElement("main",null,i.a.createElement("section",null,a),i.a.createElement(b,null)))},data:l})},a}(i.a.Component));f.propTypes={children:u.a.node.isRequired};a.a=f},169:function(e){e.exports={name:"act-rules-community",description:"Accessibility conformance testing rules for HTML",version:"1.0.0",author:"ACT-Rules Community",contributors:[{name:"Anne Thyme Nørregaard",url:"https://github.com/annethyme"},{name:"Annika Nietzio",url:"https://github.com/annika-FTB"},{name:"Audrey Maniez",url:"https://github.com/audreymaniez"},{name:"Brian Bors",url:"https://www.linkedin.com/in/brianbors/"},{name:"Bryn Anderson",url:"https://github.com/brynanders"},{name:"Carlos Duarte",url:"https://github.com/carlosapaduarte"},{name:"Corbb O'Connor",url:"https://github.com/corbb"},{name:"Dagfinn Rømen",url:"https://github.com/DagfinnRomen"},{name:"Emma Pratt Richens",url:"https://github.com/EmmaJP"},{name:"Frank Berker",url:"https://github.com/yetanothereye"},{name:"Geir Sindre Fossøy",url:"https://github.com/geirsf"},{name:"Jey Nandakumar",url:"https://github.com/jkodu"},{name:"John Hicks",url:"https://github.com/john-urbilog"},{name:"Malin Øvrebø",url:"https: //github.com/MaliinO"},{name:"Rafal Charlampowicz",url:"https://github.com/Rafalchar"},{name:"Rob Fentress",url:"https://github.com/robfentress"},{name:"Shadi Abou-Zahra",url:"https://github.com/nitedog"},{name:"Stein Erik Skotkjerra",url:"https://github.com/skotkjerra"},{name:"Wilco Fiers",url:"https://github.com/wilcofiers"}],dependencies:{"act-rules-implementation-access-engine":"git+https://git@github.com/act-rules/act-rules-implementation-access-engine.git","act-rules-implementation-alfa":"git+https://git@github.com/act-rules/act-rules-implementation-alfa.git","act-rules-implementation-axe-core":"git+https://git@github.com/act-rules/act-rules-implementation-axe-core.git","act-rules-implementation-rgaa":"git+https://git@github.com/act-rules/act-rules-implementation-rgaa.git","act-rules-implementation-trusted-tester":"git+https://git@github.com/act-rules/act-rules-implementation-trusted-tester.git",axios:"^0.18.1",commander:"^2.20.0",fastmatter:"^2.1.1",flat:"^4.1.0","fs-extra":"^8.1.0",gatsby:"^2.8.6","gatsby-image":"^2.1.2","gatsby-plugin-manifest":"^2.1.1","gatsby-plugin-offline":"^2.1.1","gatsby-plugin-prefetch-google-fonts":"^1.4.2","gatsby-plugin-react-helmet":"^3.0.12","gatsby-plugin-sass":"^2.0.10","gatsby-plugin-sharp":"^2.1.3","gatsby-remark-autolink-headers":"^2.0.15","gatsby-remark-copy-linked-files":"^2.0.12","gatsby-remark-prismjs":"^3.2.11","gatsby-source-filesystem":"^2.0.38","gatsby-transformer-remark":"^2.3.12","gatsby-transformer-sharp":"^2.1.21","gfm-code-blocks":"^1.0.0",globby:"^9.2.0","is-url":"^1.2.4",jsonld:"^1.6.2","make-dir":"^2.1.0",marked:"^0.6.2","node-sass":"^4.12.0","normalize.css":"^8.0.1","object-hash":"^1.3.1",prismjs:"^1.16.0","prop-types":"^15.7.2",react:"^16.8.6","react-dom":"^16.8.6","react-helmet":"^5.2.1","react-media":"^1.9.2",showdown:"^1.9.0"},devDependencies:{husky:"^2.4.0",jest:"^24.8.0",marked:"^0.6.2",prettier:"^1.18.2","lint-staged":"^8.2.0"},keywords:["WCAG","ACT Rules","Accessibility","W3C"],license:"MIT",scripts:{clean:"gatsby clean",getImplementationAccessEngine:"node ./build/get-implementation --org 'Level Access' --tool 'Access Engine' --path './node_modules/act-rules-implementation-access-engine/report.json'",getImplementationAlfa:"node ./build/get-implementation --org 'Siteimprove' --tool 'Alfa' --path './node_modules/act-rules-implementation-alfa/report.json'",getImplementationAxeCore:"node ./build/get-implementation --org 'Deque Systems' --tool 'Axe-core' --path './node_modules/act-rules-implementation-axe-core/report.json'",getImplementationRgaa:"node ./build/get-implementation --org 'Access42' --tool 'RGAA 3.0' --path './node_modules/act-rules-implementation-rgaa/reports/*.json'",getImplementationTrustedTester:"node ./build/get-implementation --org 'Trusted Tester' --tool 'Trusted Tester' --path './node_modules/act-rules-implementation-trusted-tester/reports/*.json'",getImplementations:"npm run getImplementationAccessEngine && npm run getImplementationAlfa && npm run getImplementationAxeCore && npm run getImplementationRgaa && npm run getImplementationTrustedTester",createImplementationsMetrics:"node ./build/create-implementation-metrics",implementations:"npm run getImplementations && npm run createImplementationsMetrics",createTestcases:"node ./build/create-testcases",createGlossary:"node ./build/create-glossary-usages",getWcagData:"node ./build/get-wcag-data",getData:"npm run getWcagData && npm run createTestcases && npm run createGlossary && npm run implementations",predevelop:"npm run getData",develop:"gatsby develop",prebuild:"npm run clean && npm run getData",build:"gatsby build",format:"prettier --write *.{json,md,js,jsx} './{_data,_rules,build,gatsby,pages,src,test-assets}/**/*.{json,md,js,jsx}'",start:"npm run clean && npm run develop",serve:"gatsby serve",pretest:"npm run getData",test:"jest --coverage"},homepage:"https://github.com/act-rules/act-rules.github.io",repository:{type:"git",url:"https://github.com/act-rules/act-rules.github.io"},bugs:{url:"https://github.com/act-rules/act-rules.github.io/issues"},pulls:{url:"https://github.com/act-rules/act-rules.github.io/pulls"},www:{url:"https://act-rules.github.io"},config:{references:{wcag21:"https://raw.githubusercontent.com/w3c/wai-wcag-quickref/gh-pages/_data/wcag21.json"},"rule-format-metadata":{"input-aspects":{default:"https://www.w3.org/TR/act-rules-aspects/#intro","HTTP Messages":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-http","DOM Tree":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom","CSS Styling":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-css","Accessibility Tree":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility",Language:"https://www.w3.org/TR/act-rules-aspects/#input-aspects-text"}}},jest:{verbose:!0,bail:!0,testPathIgnorePatterns:["<rootDir>/test/test-utils/","<rootDir>/.cache/","<rootDir>/.public/"]},"lint-staged":{"*.{md,json,js,html}":["prettier --write","git add"]}}},170:function(e){e.exports={data:{getSiteTitle:{siteMetadata:{title:"ACT-Rules Community"}},getTopLevelNavigation:{group:[{fieldValue:"default",totalCount:3,edges:[{node:{path:"/pages/about/",context:{sourceInstanceName:"pages",title:"About Us",markdownType:"default"}}},{node:{path:"/pages/contribute/",context:{sourceInstanceName:"pages",title:"How to Contribute",markdownType:"default"}}},{node:{path:"/pages/license/",context:{sourceInstanceName:"pages",title:"License",markdownType:"default"}}}]}]},getNonRulesNavigation:{group:[{fieldValue:"documentation",totalCount:8,edges:[{node:{path:"/pages/design/atomic-template-empty/",context:{title:"",markdownType:"documentation"}}},{node:{path:"/pages/design/composite-template-empty/",context:{title:"",markdownType:"documentation"}}},{node:{path:"/pages/structure/accessibility-support/",context:{title:"Accessibility Support",markdownType:"documentation"}}},{node:{path:"/pages/design/definition-of-done/",context:{title:"Definition of Done",markdownType:"documentation"}}},{node:{path:"/pages/design/review/",context:{title:"Review Process",markdownType:"documentation"}}},{node:{path:"/pages/design/rule-design/",context:{title:"Rule Design",markdownType:"documentation"}}},{node:{path:"/pages/design/rule-template/",context:{title:"Rule Template",markdownType:"documentation"}}},{node:{path:"/pages/structure/terminology/",context:{title:"Terminology",markdownType:"documentation"}}}]},{fieldValue:"implementations",totalCount:7,edges:[{node:{path:"/pages/implementations/overview/",context:{title:"ACT Implementations",markdownType:"implementations"}}},{node:{path:"/pages/implementations/mapping/",context:{title:"Mapping To Rule",markdownType:"implementations"}}},{node:{path:"/pages/implementations/earl-reports/",context:{title:"Reporting Format",markdownType:"implementations"}}},{node:{path:"/pages/implementations/reporting/",context:{title:"Submit an Implementation",markdownType:"implementations"}}},{node:{path:"/pages/implementations/testcases/",context:{title:"Test Cases",markdownType:"implementations"}}},{node:{path:"/pages/implementations/tools/",context:{title:"Testing Tools",markdownType:"implementations"}}},{node:{path:"/pages/implementations/wcag-em-tool/",context:{title:"WCAG-EM Report Tool",markdownType:"implementations"}}}]}]}}}},171:function(e,a,t){"use strict";t.r(a);t(41);var n=t(0),s=t.n(n),l=t(5),r=t.n(l),i=t(66),o=function(e){var a=e.location,t=e.pageResources;return t?s.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=o},172:function(e){e.exports={data:{site:{siteMetadata:{title:"ACT-Rules Community",description:"Accessibility conformance testing rules for HTML",author:"ACT-Rules Community"}}}}},183:function(e){e.exports={"#included-in-the-accessibility-tree":[{name:"ARIA state or property allowed",slug:"rules/5c01ea"},{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"Audio elements have a transcript",slug:"rules/2eb176"},{name:"Audio only has a text alternative",slug:"rules/e7aa44"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Iframe has an accessible name",slug:"rules/cae760"},{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Links with identical accessible names serve equivalent purpose",slug:"rules/b20e66"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Id attribute is unique",slug:"rules/3ea0c8"},{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video only element has transcript",slug:"rules/ee13b5"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"}],"#semantic-role":[{name:"ARIA state or property allowed",slug:"rules/5c01ea"},{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Label and name from content mismatch",slug:"rules/2ee8b8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Links with identical accessible names serve equivalent purpose",slug:"rules/b20e66"},{name:"Role attribute has valid value",slug:"rules/674b10"},{name:"Role has required states and properties",slug:"rules/4e8ab6"}],"#non-streaming-media-element":[{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"Audio elements have a transcript",slug:"rules/2eb176"},{name:"Audio only has a text alternative",slug:"rules/e7aa44"}],"#visible":[{name:"Audio-only as a media alternative for text",slug:"rules/afb423"},{name:"Audio elements have a transcript",slug:"rules/2eb176"},{name:"Audio only has a text alternative",slug:"rules/e7aa44"},{name:"Heading is descriptive",slug:"rules/b49b2e"},{name:"Form field label is descriptive",slug:"rules/cc0f0a"},{name:"Video with audio has audio descriptions or transcript",slug:"rules/c5a4ea"},{name:"Video with audio has audio description",slug:"rules/1ec09b"},{name:"Video element audio described",slug:"rules/1ea59c"},{name:"Video element description track",slug:"rules/f196ce"},{name:"Video has audio alternative",slug:"rules/eac66b"},{name:"Video has captions",slug:"rules/f51b46"},{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video only has an accessible alternative",slug:"rules/c3232f"},{name:"video only has audio alternative",slug:"rules/d7ba54"},{name:"Video only element has description track",slug:"rules/ac7dc6"},{name:"Video only element has transcript",slug:"rules/ee13b5"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"Video element transcript",slug:"rules/1a02b0"}],"#visible-on-the-page":[{name:"Autocomplete valid",slug:"rules/73f2c2"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"Id attribute is unique",slug:"rules/3ea0c8"}],"#correct-autocomplete-field":[{name:"Autocomplete valid",slug:"rules/73f2c2"}],"#appropriate-field-for-the-form-control":[{name:"Autocomplete valid",slug:"rules/73f2c2"}],"#accessible-name":[{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Filename is valid accessible name",slug:"rules/9eb3f6"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Iframe has an accessible name",slug:"rules/cae760"},{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Label and name from content mismatch",slug:"rules/2ee8b8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Links with identical accessible names serve equivalent purpose",slug:"rules/b20e66"}],"#whitespace":[{name:"Buttons have an accessible name",slug:"rules/97a4e1"},{name:"Document title is descriptive",slug:"rules/c4a8a4"},{name:"Form field has accessible name",slug:"rules/e086e5"},{name:"Iframe has an accessible name",slug:"rules/cae760"},{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Image button has accessible name",slug:"rules/59796f"},{name:"Image has accessible name",slug:"rules/23a2a8"},{name:"Links have an accessible name",slug:"rules/c487ae"},{name:"Links with identical accessible names serve equivalent purpose",slug:"rules/b20e66"},{name:"HTML Page has a title",slug:"rules/2779a5"}],"#section-of-content":[{name:"Heading is descriptive",slug:"rules/b49b2e"}],"#filename":[{name:"Filename is valid accessible name",slug:"rules/9eb3f6"}],"#valid-language-subtag":[{name:"Validity of HTML Lang attribute",slug:"rules/bf051a"},{name:"HTML lang and xml:lang match",slug:"rules/5b7ae0"},{name:"Valid body lang attribute",slug:"rules/de46e4"}],"#non-empty":[{name:"Validity of HTML Lang attribute",slug:"rules/bf051a"}],"#matching-characters":[{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Links with identical accessible names serve equivalent purpose",slug:"rules/b20e66"}],"#same-resource":[{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Links with identical accessible names serve equivalent purpose",slug:"rules/b20e66"}],"#equivalent-resource":[{name:"Iframes with identical accessible names serve equivalent purpose",slug:"rules/4b1c6c"},{name:"Links with identical accessible names serve equivalent purpose",slug:"rules/b20e66"}],"#decorative":[{name:"Image has accessible name",slug:"rules/23a2a8"}],"#visible-text-content":[{name:"Label and name from content mismatch",slug:"rules/2ee8b8"}],"#focusable":[{name:"No keyboard trap",slug:"rules/80af7b"},{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"No keyboard trap standard navigation",slug:"rules/a1b64e"}],"#standard-keyboard-navigation":[{name:"No keyboard trap non-standard navigation",slug:"rules/ebe86a"},{name:"No keyboard trap standard navigation",slug:"rules/a1b64e"}],"#implicit-role":[{name:"Role has required states and properties",slug:"rules/4e8ab6"}],"#non-streaming":[{name:"Video with audio has audio descriptions or transcript",slug:"rules/c5a4ea"},{name:"Video with audio has audio description",slug:"rules/1ec09b"},{name:"Video element audio described",slug:"rules/1ea59c"},{name:"Video element description track",slug:"rules/f196ce"},{name:"Video has captions",slug:"rules/f51b46"},{name:"Video as a media alternative for text",slug:"rules/ab4d13"},{name:"Video only has an accessible alternative",slug:"rules/c3232f"},{name:"video only has audio alternative",slug:"rules/d7ba54"},{name:"Video only element has description track",slug:"rules/ac7dc6"},{name:"Video only element has transcript",slug:"rules/ee13b5"},{name:"Video-only as a media alternative for text",slug:"rules/fd26cf"},{name:"Video element transcript",slug:"rules/1a02b0"}],"#audio":[{name:"Video has captions",slug:"rules/f51b46"}],"#captions":[{name:"Video has captions",slug:"rules/f51b46"}]}}}]);
//# sourceMappingURL=2-f71774c25ba0cb0fa372.js.map