(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(33);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),l=a(152),o=a(160),c=a(156),s=a(157),d=a(153),m=(a(145),a(186)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next,A={identifier:e.id,title:e.frontmatter.title};return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{className:"parse__subtitle",style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},i.a.createElement("span",{className:"material-icons",style:Object.assign({},Object(d.b)(-.2))},"calendar_today"),i.a.createElement("span",null,e.frontmatter.date)),i.a.createElement("div",{className:"section__post",dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement(o.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,n&&i.a.createElement(l.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),i.a.createElement("li",null,r&&i.a.createElement(l.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))),i.a.createElement(m.DiscussionEmbed,{shortname:"raina",config:A}))},t}(i.a.Component);t.default=u;var p="2761936148"},152:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),l=a(32),o=a.n(l);a.d(t,"a",function(){return o.a});a(154);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return A}),a.d(t,"a",function(){return i});var n=a(165),r=new(a.n(n).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Myeongjo"],bodyFontFamily:["Nanum Gothic Coding"]});var A=r.scale,i=r.rhythm;r.options},154:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";a(33);var n=a(34),r=a.n(n),A=a(7),i=a.n(A),l=a(0),o=a.n(l),c=a(152),s=a(153),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a.handleScroll=a.handleScroll.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.handleScroll=function(){this.setState({scroll:window.scrollY})},a.componentDidMount=function(){var e=document.querySelector("header");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll,!0)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e,t,a=this.props,n=a.location,r=a.title,A=a.children,i={width:Object(s.a)(36)};return this.state.scroll>this.state.top&&(i.paddingTop=""+Object(s.a)(1.5),e="section__header--fixed"),t="/"===n.pathname?o.a.createElement("header",{className:"section__header "+e,style:i},o.a.createElement("div",null,o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r,"✨"))),o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{to:"/til"},"TAG")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/til"},"CATEGORY"))))):o.a.createElement("header",{className:"section__header "+e,style:i},o.a.createElement("h3",{style:{marginTop:0}},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r,"✨")),o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{to:"/til"},"TAG")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/til"},"CATEGORY"))))),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(36),padding:Object(s.a)(1.5)+" 0"}},t,o.a.createElement("main",null,A),o.a.createElement("footer",null,"raina + gatsby"))},t}(o.a.Component);t.a=d},157:function(e,t,a){"use strict";var n=a(158),r=a(0),A=a.n(r),i=a(4),l=a.n(i),o=a(166),c=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,o=n.data.site,s=t||o.siteMetadata.description;return A.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Raina's log",description:"A log about Web development written by raina",author:"SeongRyeong Kim"}}}}},160:function(e,t,a){"use strict";a(161);var n=a(163),r=a(0),A=a.n(r),i=a(152),l=a(164),o=a.n(l),c=a(153);var s="3932108081";t.a=function(){return A.a.createElement(i.b,{query:s,render:function(e){var t=e.site.siteMetadata.author,a={margin:0};return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},A.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),A.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},A.a.createElement("p",{style:a},"Written by ",A.a.createElement("strong",null,t)),A.a.createElement("p",{style:a},"Jr Web FrontEnd Developer ",A.a.createElement("small",null,"#game #web #cat"))))},data:n})}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHUyLkCq8zSJewqMVl//8QAHRAAAgICAwEAAAAAAAAAAAAAAgMBEgARFCEiMf/aAAgBAQABBQJx1CChZchWllsGBF4qrB6z7CvQ/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/AUTKf//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/ASP/xAAbEAADAAIDAAAAAAAAAAAAAAAAAREhQRASIv/aAAgBAQAGPwKpWi3jJ6cMl1s6xvhlZ//EABwQAQADAAMBAQAAAAAAAAAAAAEAESExQVGBwf/aAAgBAQABPyFbV6eRQrDxywIaK7jCIraCItDP1ENynDzkVc9/JdtBo4lr5tep/9oADAMBAAIAAwAAABDY18P/xAAYEQEBAAMAAAAAAAAAAAAAAAARAAEhUf/aAAgBAwEBPxABGMal2//EABcRAAMBAAAAAAAAAAAAAAAAAAABEUH/2gAIAQIBAT8QeilcIj//xAAeEAEAAgICAwEAAAAAAAAAAAABESEAMWFxUYGxwf/aAAgBAQABPxAmQqBqki44bIayQjzf7gjS6GyON5FqGQoJr7hpKmbpkmyKYWaPWs1AuF9MRLRstPeHw2AAOCs//9k=",width:50,height:50,src:"/static/6a2618febf09a1407f090a6e427b9df2/7e494/profile.jpg",srcSet:"/static/6a2618febf09a1407f090a6e427b9df2/7e494/profile.jpg 1x,\n/static/6a2618febf09a1407f090a6e427b9df2/36cc2/profile.jpg 1.5x,\n/static/6a2618febf09a1407f090a6e427b9df2/0a3a6/profile.jpg 2x,\n/static/6a2618febf09a1407f090a6e427b9df2/75d16/profile.jpg 3x"}}},site:{siteMetadata:{author:"SeongRyeong Kim"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3d18bc01c694dea8ce8c.js.map