(this["webpackJsonprtk-github-issues-example-01-plain-react"]=this["webpackJsonprtk-github-issues-example-01-plain-react"]||[]).push([[0],{10:function(e,t,a){e.exports={comment:"IssueComments_comment__2K-P3",body:"IssueComments_body__26Hu9",avatar:"IssueComments_avatar__1IClw",username:"IssueComments_username__3CX3Q",commentsList:"IssueComments_commentsList__1rPMM"}},11:function(e,t,a){e.exports={issueDetailsPage:"IssueDetailsPage_issueDetailsPage__2L9pw",issueLabels:"IssueDetailsPage_issueLabels__2xoOq",summary:"IssueDetailsPage_summary__3WqKZ",divider:"IssueDetailsPage_divider__2tP7Z"}},14:function(e,t,a){e.exports={issue:"IssueListItem_issue__2Yp8T",number:"IssueListItem_number___KKiF",title:"IssueListItem_title__1l-Lb",label:"IssueListItem_label__319aw"}},15:function(e,t,a){e.exports={issueState:"IssueMeta_issueState__39S-8",open:"IssueMeta_open__1dZwy",number:"IssueMeta_number__1Exec",meta:"IssueMeta_meta__V0kVE"}},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(43),c=a.n(r),u=(a(53),a(2)),i=(a(54),a(55),a(56),function(e){var t=e.org,a=e.repo,r=e.setOrgAndRepo,c=e.setJumpToPage,i=Object(n.useState)(t),o=Object(u.a)(i,2),l=o[0],m=o[1],p=Object(n.useState)(a),f=Object(u.a)(p,2),g=f[0],v=f[1],b=Object(n.useState)("1"),h=Object(u.a)(b,2),_=h[0],d=h[1];return s.a.createElement("form",{className:"pure-form"},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"org",style:{marginRight:5}},"Org:"),s.a.createElement("input",{name:"org",value:l,onChange:function(e){m(e.target.value)}}),s.a.createElement("label",{htmlFor:"repo",style:{marginRight:5,marginLeft:10}},"Repo:"),s.a.createElement("input",{name:"repo",value:g,onChange:function(e){v(e.target.value)}}),s.a.createElement("button",{type:"button",className:"pure-button pure-button-primary",style:{marginLeft:5},onClick:function(){r(l,g)}},"Load Repo")),s.a.createElement("div",{style:{marginTop:5}},s.a.createElement("label",{htmlFor:"jumpToPage",style:{marginRight:5}},"Issues Page:"),s.a.createElement("input",{name:"jumpToPage",value:_,onChange:function(e){d(e.target.value)}}),s.a.createElement("button",{type:"button",className:"pure-button pure-button-primary",style:{marginLeft:5},onClick:function(){var e=parseInt(_);e>=1&&c(e)}},"Jump to Page")))}),o=a(1),l=a.n(o),m=a(6),p=a(13),f=a.n(p),g=a(44),v=a.n(g),b=function(){return{headers:{Authorization:"token ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/rtk-github-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GH_API_TOKEN)}}},h=function(e){return e?function(e){return 2===Object.keys(e).length&&e.first&&e.prev}(e)?parseInt(e.prev.page,10)+1:e.last?parseInt(e.last.page,10):0:0};function _(e,t){return d.apply(this,arguments)}function d(){return(d=Object(m.a)(l.a.mark((function e(t,a){var n,s,r,c,u,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:1,s="https://api.github.com/repos/".concat(t,"/").concat(a,"/issues?per_page=25&page=").concat(n),e.prev=2,e.next=5,f.a.get(s);case 5:return r=e.sent,c=0,null!==(u=v()(r.headers.link))&&(c=h(u)),e.abrupt("return",{pageLinks:u,pageCount:c,issues:r.data});case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function E(e,t){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(l.a.mark((function e(t,a){var n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.github.com/repos/".concat(t,"/").concat(a),e.next=3,f.a.get(n,b());case 3:return s=e.sent,r=s.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t,a){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(l.a.mark((function e(t,a,n){var s,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://api.github.com/repos/".concat(t,"/").concat(a,"/issues/").concat(n),e.next=3,f.a.get(s,b());case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t,b());case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=e.org,a=e.repo;return s.a.createElement("span",null,s.a.createElement("a",{href:"https://github.com/".concat(t),className:"header__org"},t)," / ",s.a.createElement("a",{href:"https://github.com/".concat(t,"/").concat(a),className:"header__repo"},a))}function C(e){var t=e.openIssuesCount,a=void 0===t?-1:t,n=e.org,r=e.repo;if(-1===a)return s.a.createElement("h1",null,"Open issues for ",s.a.createElement(w,{org:n,repo:r}));var c=1===a?"issue":"issues";return s.a.createElement("h1",null,s.a.createElement("span",{className:"header__openIssues"},a)," open"," ",c," for ",s.a.createElement(w,{org:n,repo:r}))}function x(e){return e.replace(/\B(@([a-zA-Z0-9](-?[a-zA-Z0-9_])+))/g,"**[$1](https://github.com/$2)**")}var P=a(3),k=a.n(P),L=function(e){var t=e.labels,a=e.className;return s.a.createElement("div",{className:k()("issue__labels",a)},t.map((function(e){return s.a.createElement("span",{key:e.id,className:"issue__label",style:{boxShadow:"0 0 2px #".concat(e.color),borderColor:"#".concat(e.color)}},e.name)})))},S=a(12),D=a(9),T=a.n(D),A=function(e){var t,a=e.user,n=e.orientation,r=void 0===n?"vertical":n,c=e.link,u=void 0===c||c,i=e.classes,o=void 0===i?{}:i,l=k()(T.a.issueUser,(t={},Object(S.a)(t,T.a.vertical,"vertical"===r),Object(S.a)(t,T.a.horizontal,"horizontal"===r),t)),m=k()(T.a.avatar,o.avatar),p=k()(T.a.username,o.username),f=s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{className:m,src:a.avatar_url,alt:""}),s.a.createElement("div",{className:p},a.login));return u?s.a.createElement("a",{href:"https://github.com/".concat(a.login),className:l},f):s.a.createElement("span",{className:l},f)},R=a(14),U=a.n(R),W=function(e){var t=e.number,a=e.title,n=e.labels,r=e.user,c=e.comments,u=e.body,i=void 0===u?"":u,o=e.showIssueComments,l=1===c?"comment":"comments";return s.a.createElement("div",{className:U.a.issue},s.a.createElement(A,{user:r}),s.a.createElement("div",{className:"issue__body"},s.a.createElement("a",{href:"#comments",onClick:function(e){e.preventDefault(),e.stopPropagation(),o(t)}},s.a.createElement("span",{className:U.a.number},"#",t),s.a.createElement("span",{className:U.a.title},a)),s.a.createElement("br",null)," (",c," ",l,")",s.a.createElement("p",{className:"issue__summary"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:140,a=e.replace(/\\r\\n/g,"\n");if(a.length<=t)return a;var n=" ...",s=a.substr(0,141);if(/\W$/.test(s))return s.substr(0,140)+n;for(var r=s.length;--r;)if(/\W/.test(s[r]))return s.substr(0,r)+n;return s.substr(0,140)+n}(i)),s.a.createElement(L,{labels:n,className:U.a.label})))},z=a(45),K=a.n(z),M=function(e){var t=e.issues,a=e.showIssueComments,n=t.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(W,Object.assign({},e,{showIssueComments:a})))}));return s.a.createElement("ul",{className:K.a.issuesList},n)},Z=a(46),J=a.n(Z),F=a(47),B=a.n(F),H=(a(86),function(e){var t=e.currentPage,a=e.pageCount,n=e.onPageChange;return s.a.createElement("div",{className:k()("issuesPagination",B.a.pagination)},s.a.createElement(J.a,{forcePage:t,pageCount:a,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:n,nextLabel:"\u2192",previousLabel:"\u2190"}))}),V=function(e){var t=e.org,a=e.repo,r=e.page,c=void 0===r?1:r,i=e.setJumpToPage,o=e.showIssueComments,p=Object(n.useState)({pageLinks:null,pageCount:1,issues:[]}),f=Object(u.a)(p,2),g=f[0],v=f[1],b=Object(n.useState)(-1),h=Object(u.a)(b,2),d=h[0],O=h[1],y=Object(n.useState)(!1),j=Object(u.a)(y,2),I=j[0],N=j[1],w=Object(n.useState)(null),x=Object(u.a)(w,2),P=x[0],k=x[1],L=g.issues,S=g.pageCount;if(Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var n,s,r,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){return(u=Object(m.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,a);case 2:n=e.sent,O(n.open_issues_count);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},r=function(){return u.apply(this,arguments)},s=function(){return(s=Object(m.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t,a,c);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},n=function(){return s.apply(this,arguments)},e.prev=4,e.next=7,Promise.all([n(),r()]);case 7:k(null),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0),k(e.t0);case 14:return e.prev=14,N(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[4,10,14,17]])})))).apply(this,arguments)}N(!0),function(){e.apply(this,arguments)}()}),[t,a,c]),P)return s.a.createElement("div",null,s.a.createElement("h1",null,"Something went wrong..."),s.a.createElement("div",null,P.toString()));var D=Math.min(S,Math.max(c,1))-1,T=I?s.a.createElement("h3",null,"Loading..."):s.a.createElement(M,{issues:L,showIssueComments:o});return s.a.createElement("div",{id:"issue-list-page"},s.a.createElement(C,{openIssuesCount:d,org:t,repo:a}),T,s.a.createElement(H,{currentPage:D,pageCount:S,onPageChange:function(e){var t=e.selected+1;i(t)}}))},$=a(19),q=a.n($),Q=a(15),Y=a.n(Q),G=function(e){var t=e.issue.state;return s.a.createElement("span",{className:k()("issue-detail__state",Y.a.issueState,Object(S.a)({},Y.a.open,"open"===t))},t)},X=function(e){var t=e.issue;return s.a.createElement("span",{className:k()("issue-detail__number",Y.a.number)},"#",t.number)},ee=function(e){var t=e.issue;return s.a.createElement("div",{className:k()("issue-detail__meta",Y.a.meta)},s.a.createElement(X,{issue:t}),s.a.createElement(G,{issue:t}),s.a.createElement(A,{user:t.user,orientation:"horizontal"}))},te=a(10),ae=a.n(te);function ne(e){var t=e.comment;return s.a.createElement("div",{className:ae.a.comment},s.a.createElement(A,{user:t.user,classes:{avatar:ae.a.avatar,username:ae.a.username},orientation:"horizontal"}),s.a.createElement("div",{className:ae.a.body},s.a.createElement(q.a,{className:"markdown",source:x(t.body)})))}function se(e){var t=e.comments,a=void 0===t?[]:t;return 0===e.issue.comments?s.a.createElement("div",{className:"issue-detail--no-comments"},"No comments"):a&&0!==a.length?s.a.createElement("ul",{className:ae.a.commentsList},a.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(ne,{comment:e}))}))):s.a.createElement("div",{className:"issue-detail--comments-loading"},"Comments loading...")}var re=a(11),ce=a.n(re),ue=(a(168),function(e){var t,a=e.org,r=e.repo,c=e.issueId,i=e.showIssuesList,o=Object(n.useState)(null),p=Object(u.a)(o,2),f=p[0],g=p[1],v=Object(n.useState)([]),b=Object(u.a)(v,2),h=b[0],_=b[1],d=Object(n.useState)(null),E=Object(u.a)(d,2),O=E[0],j=E[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(null),e.next=4,y(a,r,c);case 4:t=e.sent,g(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,c]),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===f){e.next=5;break}return e.next=3,I(f.comments_url);case 3:t=e.sent,_(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]);var N=s.a.createElement("button",{className:"pure-button",onClick:i},"Back to Issues List");if(O)return s.a.createElement("div",{className:"issue-detail--error"},N,s.a.createElement("h1",null,"There was a problem loading issue #",c),s.a.createElement("p",null,O.toString()));if(null===f)t=s.a.createElement("div",{className:"issue-detail--loading"},N,s.a.createElement("p",null,"Loading issue #",c,"..."));else{var w=s.a.createElement(se,{issue:f,comments:h});t=s.a.createElement("div",{className:k()("issueDetailsPage",ce.a.issueDetailsPage)},s.a.createElement("h1",{className:"issue-detail__title"},f.title),N,s.a.createElement(ee,{issue:f}),s.a.createElement(L,{labels:f.labels,className:ce.a.issueLabels}),s.a.createElement("hr",{className:ce.a.divider}),s.a.createElement("div",{className:ce.a.summary},s.a.createElement(q.a,{className:"testing",source:x(f.body)})),s.a.createElement("hr",{className:ce.a.divider}),s.a.createElement("ul",null,w))}return s.a.createElement("div",null,t)}),ie=function(){var e,t=Object(n.useState)("pactsafe"),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)("pactsafe-react-sdk"),l=Object(u.a)(o,2),m=l[0],p=l[1],f=Object(n.useState)(1),g=Object(u.a)(f,2),v=g[0],b=g[1],h=Object(n.useState)({type:"issues"}),_=Object(u.a)(h,2),d=_[0],E=_[1],O=function(e){b(e)};if("issues"===d.type)e=s.a.createElement(s.a.Fragment,null,s.a.createElement(i,{org:r,repo:m,setOrgAndRepo:function(e,t){c(e),p(t)},setJumpToPage:O}),s.a.createElement(V,{org:r,repo:m,page:v,setJumpToPage:O,showIssueComments:function(e){E({type:"comments",issueId:e})}}));else{var y=d.issueId,j="".concat(r,"/").concat(m,"/").concat(y);e=s.a.createElement(ue,{key:j,org:r,repo:m,issueId:y,showIssuesList:function(){E({type:"issues"})}})}return s.a.createElement("div",{className:"App"},e)};c.a.render(s.a.createElement(ie,null),document.getElementById("root"))},45:function(e,t,a){e.exports={issuesList:"IssuesList_issuesList__3YTSL"}},47:function(e,t,a){e.exports={pagination:"IssuePagination_pagination__1fZ4j"}},48:function(e,t,a){e.exports=a(169)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},86:function(e,t,a){},9:function(e,t,a){e.exports={issueUser:"UserWithAvatar_issueUser__1rZ56",avatar:"UserWithAvatar_avatar__2b4Ue",username:"UserWithAvatar_username__DZB8Q",vertical:"UserWithAvatar_vertical__3VEes",horizontal:"UserWithAvatar_horizontal__3DPD3"}}},[[48,1,2]]]);
//# sourceMappingURL=main.9c448242.chunk.js.map