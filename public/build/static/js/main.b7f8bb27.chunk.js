(this["webpackJsonppage-builder-render"]=this["webpackJsonppage-builder-render"]||[]).push([[0],{111:function(e,t,a){e.exports={"outside-container":"PageEditor_outside-container__3cRUF","up-part":"PageEditor_up-part__26Hdo","bottom-part":"PageEditor_bottom-part__yGzTH","bottom-col":"PageEditor_bottom-col__3Q5_0"}},136:function(e,t,a){e.exports={"left-bar":"Leftbar_left-bar__1EqPF",card:"Leftbar_card__S0os-"}},138:function(e,t,a){e.exports={container:"Login_container__AFnH5",footer:"Login_footer__3AOzG",title:"Login_title__3WQIU",content:"Login_content__28BLV","bottom-text":"Login_bottom-text__KV0Eu"}},158:function(e,t,a){e.exports={box:"LoginCard_box__32rtp","text-area":"LoginCard_text-area__2uuru",title:"LoginCard_title__3Tb2o","sub-title":"LoginCard_sub-title__1tVCy"}},203:function(e,t,a){e.exports={"material-card":"MaterialCard_material-card__2nXQX","card-title":"MaterialCard_card-title__29LNe",preview:"MaterialCard_preview__2Bf5W"}},345:function(e,t,a){e.exports={header:"Header_header__1PeX9"}},370:function(e,t,a){},735:function(e,t,a){e.exports={container:"home_container__1nMia",logo:"home_logo__3IrY3","site-layout-background":"home_site-layout-background__1AJUy","sys-name":"home_sys-name__2uBhm"}},738:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(37),r=a.n(c),i=(a(370),a(95)),o=a(41),s=a(752),l=a(58),j=a(343),d=a(344),u=new(function(){function e(){Object(j.a)(this,e),this.eventMap={}}return Object(d.a)(e,[{key:"on",value:function(e,t){this.eventMap[e]||(this.eventMap[e]=[]),this.eventMap[e].push(t)}},{key:"emit",value:function(e,t){var a=this.eventMap[e];a&&a.forEach((function(e){e(t)}))}},{key:"off",value:function(e,t){this.eventMap[e]&&this.eventMap[e].splice(this.eventMap[e].indexOf(t)>0,1)}}]),e}()),b=a(345),h=a.n(b),p=a(6),O=function(){var e=Object(o.g)();return Object(p.jsx)("div",{className:h.a.header,children:Object(p.jsx)(s.a,{onBack:function(){return e.goBack()},title:"\u524d\u7aef\u9875\u9762\u642d\u5efa\u5668",subTitle:"Page Builder formed by MrPiggy",extra:[Object(p.jsx)(l.a,{onClick:function(){return u.emit("preview")},children:"\u9884\u89c8"},"3"),Object(p.jsx)(l.a,{children:"\u53d1\u5e03"},"2"),Object(p.jsx)(l.a,{type:"primary",onClick:function(){return u.emit("save")},children:"\u4fdd\u5b58"},"1")]})})},f=a(36),m=a(749),g=a(359),x=a(361),v=a(758),_=a(203),y=a.n(_),N=m.a.Meta,k=function(e){var t=e.json;return Object(p.jsx)(m.a,{className:y.a["material-card"],style:{marginBottom:8},size:"small",children:Object(p.jsx)(N,{description:t.description,avatar:Object(p.jsx)(g.a,{style:{backgroundColor:"#1890ff"},icon:Object(p.jsx)(v.a,{})}),title:Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("span",{className:y.a["card-title"],children:[Object(p.jsx)("span",{children:t.name}),Object(p.jsx)(x.a,{content:Object(p.jsx)("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),placement:"right",children:Object(p.jsx)("span",{className:y.a.preview,children:"\u9884\u89c8"})})]})})})})},C=a(154),w=a(130),S=a(755),I=function(e){var t=function e(t){t&&t.forEach((function(t){t.children&&e(t.children),t.id=Object(S.a)()}))},a=function(e,a){return e.id=Object(S.a)(),t(e.children),e},c=Object(n.useState)(w.b.map((function(e){return a(e)}))),r=Object(f.a)(c,2),i=r[0],o=r[1];return Object(p.jsx)("div",{children:Object(p.jsx)(C.ReactSortable,{list:i,setList:o,group:{name:"groupName",pull:"clone",put:!1},clone:a,children:i.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(k,{json:e})},e.id)}))})})},P=function(){return Object(p.jsx)("div",{children:"\u5927\u7eb2\u9762\u677f"})},L=a(136),B=a.n(L),E=[{key:"material",tab:"\u7269\u6599"},{key:"outline",tab:"\u5927\u7eb2"}],M=function(){var e=Object(n.useState)("material"),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(p.jsx)("div",{className:B.a["left-bar"],children:Object(p.jsx)(m.a,{className:B.a.card,tabList:E,headStyle:{fontSize:8,height:58},bodyStyle:{padding:5,overflow:"scroll",height:"calc(100% - 48px)"},tabProps:{centered:!0},activeTabKey:a,onTabChange:function(e){c(e)},children:"material"===a?Object(p.jsx)(I,{}):Object(p.jsx)(P,{})})})},A=a(39),F=a(360),T=a(754),z=a(759),J=a(760),R=a(354),V=a(185),q=a.n(V).a.create({baseURL:"http://1.15.135.140:3005"});q.interceptors.request.use((function(e){var t=window.localStorage.getItem("pig_jwt_token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){})),q.interceptors.response.use((function(e){return e.data.token&&window.localStorage.setItem("pig_jwt_token",e.data.token),e.data}),(function(e){var t=e.response;return 401===(null===t||void 0===t?void 0:t.status)&&(window.localStorage.removeItem("pig_jwt_token"),console.log("Auth error"),window.alert("\u8bf7\u91cd\u65b0\u767b\u5f55\uff01"),window.location.href="/"),Promise.reject(e.message)}));var H=q,D=a(91),K=a.n(D),U=function e(t,a,n){if(!a)return n;for(var c=[].concat(t),r=0;r<c.length;r++){var i=c[r];if(i.id===a)return i.children=n,c;i.children&&e(i.children,a,n)}return c},G=function e(t,a,n){for(var c=[].concat(t),r=0;r<c.length;r++){var i=c[r];if(i.id===a)return i.attr=n,c;i.children&&e(i.children,a,n)}return c},X=function e(t,a){for(var n=[].concat(t),c=[],r=0;r<n.length;r++){var i=n[r];if(i.id!==a){if(i.children){var o=e(i.children,a);i.children=o}c.push(i)}}return c},Q=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),s=Object(f.a)(i,2),l=s[0],j=s[1],d=Object(n.useState)({}),b=Object(f.a)(d,2),h=b[0],O=b[1],g=Object(o.g)().location.state.pageId;Object(n.useEffect)((function(){H.post("/api/getJson",{pageId:g}).then((function(e){var t,a=JSON.parse(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.pageJson);r(a||[])})).catch((function(e){return F.b.error("\u51fa\u9519\u4e86")}))}),[g]),Object(n.useEffect)((function(){var e=function(e){var t=h.id,a=G(c,t,e.attr);r(a)},t=function(){H.post("/api/saveJson",{pageId:g,json:JSON.stringify(c)}).then((function(e){F.b.success("\u4fdd\u5b58\u6210\u529f")})).catch((function(e){return F.b.error("\u51fa\u9519\u4e86")}))};return u.on("attribute-change",e),u.on("save",t),u.on("preview",(function(){j(!0)})),function(){u.off("attribute-change",e),u.off("save",t)}}),[c,h,g]);var x=function(e,t){var a=U(c,t,e);r(a)},v=function(e,t,a){e.stopPropagation&&e.stopPropagation(),O(t),u.emit("item-chosen",t)};return Object(p.jsxs)("div",{className:K.a["full-height"],children:[Object(p.jsx)(m.a,{title:Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)("span",{children:"\u62d6\u62fd\u753b\u5e03"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:K.a["tool-icon"],onClick:function(e){return function(e,t){e.stopPropagation&&e.stopPropagation(),r(X(c,t.id)),O(t),u.emit("item-chosen",{})}(e,h)},children:Object(p.jsx)(z.a,{})}),Object(p.jsx)("span",{className:K.a["tool-icon"],children:Object(p.jsx)(J.a,{})})]})]}),headStyle:{height:58},bodyStyle:{padding:12,overflow:"scroll",height:"calc(100% - 58px)"},className:K.a["full-height"],children:Object(p.jsx)(C.ReactSortable,{list:c,className:K.a["full-height"],setList:function(e){return x(e,void 0)},group:"groupName",fallbackOnBody:!0,invertSwap:!0,children:function e(t){return null===t||void 0===t?void 0:t.map((function(t){var a=w.a[t.name],c=t.id===h.id,r=t.id;return t.children?Object(p.jsx)(a,Object(A.a)(Object(A.a)({onClick:function(e){return v(e,t)},className:c?K.a["chosen-item"]:"",mode:"edit"},t.attr),{},{children:Object(p.jsx)(C.ReactSortable,{list:t.children||[],className:K.a["inherit-min-height"],setList:function(e){return x(e,r)},group:"groupName",fallbackOnBody:!0,invertSwap:!0,children:e(t.children)})}),t.id):Object(n.createElement)(a,Object(A.a)(Object(A.a)({onClick:function(e){return v(e,t)},className:c?K.a["chosen-item"]:""},t.attr),{},{key:t.id,mode:"edit"}))}))}(c)})}),Object(p.jsx)(T.a,{destroyOnClose:!0,title:"\u9875\u9762\u9884\u89c8",placement:"bottom",closable:!0,onClose:function(){return j(!1)},visible:l,height:"90vh",children:Object(p.jsx)(R.a,{list:c})},"bottom")]})},W=a(155),Y=a(751),Z=function(e){var t=e.label,a=e.attr,n=e.editor,c=e.handleChange;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[t,":"]}),Object(p.jsx)(Y.a,{defaultValue:a[n.attrName],onChange:function(e){return c(e.target.value,n.attrName)}})]})},$=function(e){var t=e.attr,a=e.editor,n=e.handleChange,c=a.childAttr,r=t.style;return null===c||void 0===c?void 0:c.map((function(e){return Object(p.jsxs)("div",{style:{marginBottom:10},children:[Object(p.jsx)("div",{children:e.label}),Object(p.jsx)(Y.a,{defaultValue:r[e.attrName],onChange:function(t){return n(t.target.value,e.attrName,!0)}})]},e.attrName)}))},ee=a(192),te={display:"block",height:"30px",lineHeight:"30px"},ae=function(e){var t=e.label,a=e.attr,c=e.editor,r=e.handleChange,i=c.datasource,o=Object(n.useState)(a[c.attrName]),s=Object(f.a)(o,2),l=s[0],j=s[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[t,":"]}),Object(p.jsx)(ee.a.Group,{onChange:function(e){var t=e.target.value;j(t),r(t,c.attrName)},value:l,children:i.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(ee.a,{value:e.key,style:te,children:e.name})},e.key)}))})]})},ne=function(e){var t=e.label,a=e.attr,n=e.editor,c=e.handleChange,r=n.when;return function(){var e=!1;return r.forEach((function(t){var n=t.key,c=t.value;a[n]===c&&(e=!0)})),e}()&&Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[t,":"]}),Object(p.jsx)(Y.a,{defaultValue:a[n.attrName],onChange:function(e){return c(e.target.value,n.attrName)}})]})},ce=a(756),re=a(362),ie=function(e){var t=e.label,a=e.attr,c=e.editor,r=e.handleChange,i=c.keys,o=Object(n.useState)(a[c.attrName]||[]),s=Object(f.a)(o,2),j=s[0],d=s[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[t,":"]}),null===j||void 0===j?void 0:j.map((function(e,t){return Object(p.jsx)(ce.b,{style:{display:"flex",marginBottom:8},align:"baseline",children:null===i||void 0===i?void 0:i.map((function(a){return Object(p.jsx)(Y.a,{defaultValue:e[a],onChange:function(e){return function(e,t,a){var n=[].concat(j);n[t][a]=e,d(n),r(n,c.attrName)}(e.target.value,t,a)}},"".concat(t,"-").concat(a))}))},"line-".concat(t))})),Object(p.jsx)(l.a,{type:"dashed",onClick:function(){d(j.concat({}))},block:!0,icon:Object(p.jsx)(re.a,{}),children:"Add field"})]})},oe=a(745),se={String:Z,Style:$,Enum:ae,Relate:ne,Muti:ie,Bool:function(e){var t=e.label,a=e.attr,n=e.editor,c=e.handleChange;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[t,":"]}),Object(p.jsx)(oe.a,{defaultChecked:a[n.attrName],onChange:function(e){console.log("che",n.attrName,e),c(e,n.attrName)}})]})}},le=function(e){var t=Object(n.useState)({}),a=Object(f.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){return u.on("item-chosen",i),function(){u.off("item-chosen",i)}}),[]);var i=function(e){r(e)},o=function(e,t,a){var n=c.attr,i=Object(A.a)({},c);if(a){var o=n.style;i.attr=Object(A.a)(Object(A.a)({},n),{},{style:Object(A.a)(Object(A.a)({},o),{},Object(W.a)({},t,e))})}else i.attr=Object(A.a)(Object(A.a)({},n),{},Object(W.a)({},t,e));r(i),u.emit("attribute-change",i)};return Object(p.jsx)("div",{className:B.a["left-bar"],children:Object(p.jsx)(m.a,{title:(null===c||void 0===c?void 0:c.name)||"\u5c5e\u6027\u533a\u57df",bodyStyle:{padding:12,overflow:"scroll",height:"calc(100% - 58px)"},className:B.a.card,children:function(){var e=c.editor,t=c.attr;return e&&Array.isArray(e)?Object(p.jsx)("div",{children:e.map((function(e){var a=se[e.type];return Object(p.jsx)("div",{style:{marginBottom:10},children:Object(p.jsx)(a,{label:e.label,attr:t,editor:e,handleChange:o})},"".concat(c.id).concat(e.attrName))}))},c.id):Object(p.jsx)("div",{children:"\u6682\u65e0\u6570\u636e"})}()})})},je=a(137),de=a(78),ue=(a(734),a(111)),be=a.n(ue);var he=function(){return Object(p.jsxs)("div",{className:be.a["outside-container"],children:[Object(p.jsx)(je.a,{className:be.a["up-part"],children:Object(p.jsx)(de.a,{span:24,children:Object(p.jsx)(O,{})})}),Object(p.jsxs)(je.a,{className:be.a["bottom-part"],gutter:8,children:[Object(p.jsx)(de.a,{span:4,className:be.a["bottom-col"],children:Object(p.jsx)(M,{})}),Object(p.jsx)(de.a,{span:16,className:be.a["bottom-col"],children:Object(p.jsx)(Q,{})}),Object(p.jsx)(de.a,{span:4,className:be.a["bottom-col"],children:Object(p.jsx)(le,{})})]})]})},pe=a(746),Oe=a(253),fe=a.n(Oe),me=a(355),ge=a(750),xe=a(761),ve=a(158),_e=a.n(ve),ye={labelCol:{span:5},wrapperCol:{span:19}},Ne={wrapperCol:{span:24}},ke=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),c=a[0],r=a[1],i=Object(o.g)(),s=ge.a.useForm(),j=Object(f.a)(s,1)[0],d=function(){var e=Object(me.a)(fe.a.mark((function e(t){var a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),console.log(t),e.next=4,H.post("/login",Object(A.a)({},t));case 4:a=e.sent,r(!1),0===a.code?(F.b.success("\u767b\u5f55\u6210\u529f"),i.push("/home")):F.b.error("\u5bc6\u7801\u9519\u8bef"),console.log("rst",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:_e.a.box,children:[Object(p.jsxs)("div",{className:_e.a["text-area"],children:[Object(p.jsx)("div",{className:_e.a.title,children:"\u524d\u7aef\u9875\u9762\u642d\u5efa\u5668"}),Object(p.jsx)("div",{className:_e.a["sub-title"],children:"\u767b\u5f55\u65b9\u53ef\u4f7f\u7528\u6b63\u5e38\u529f\u80fd,\u63d0\u4ea4\u5373\u6ce8\u518c"})]}),Object(p.jsxs)(ge.a,Object(A.a)(Object(A.a)({},ye),{},{form:j,name:"basic",onFinish:d,children:[Object(p.jsx)(ge.a.Item,{label:"\u8d26\u53f7",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7"}],children:Object(p.jsx)(Y.a,{style:{borderRadius:6}})}),Object(p.jsx)(ge.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:Object(p.jsx)(Y.a.Password,{style:{borderRadius:6}})}),Object(p.jsx)(ge.a.Item,Object(A.a)(Object(A.a)({},Ne),{},{children:Object(p.jsx)(l.a,{type:"primary",htmlType:"submit",style:{width:"100%"},loading:c,shape:"round",icon:Object(p.jsx)(xe.a,{}),children:"\u4e0b\u4e00\u6b65"})}))]}))]})},Ce=a(138),we=a.n(Ce),Se=function(e){return Object(p.jsxs)("div",{className:we.a.container,children:[Object(p.jsxs)("div",{className:we.a.content,children:[Object(p.jsx)("img",{src:"http://1.15.135.140:3005/images/ira_gallery.png",alt:"pic",height:"90%"}),Object(p.jsx)(ke,{})]}),Object(p.jsxs)("div",{className:we.a.footer,children:[Object(p.jsx)("img",{src:"http://1.15.135.140:3005/images/icon.png",height:72,alt:"pic"}),Object(p.jsx)("span",{className:we.a.title,children:"\u524d\u7aef\u9875\u9762\u642d\u5efa\u5668"}),Object(p.jsxs)("div",{className:we.a["bottom-text"],children:[Object(p.jsx)("span",{children:"\u7269\u6599\u7ec4\u4ef6\u5e93"}),Object(p.jsx)(pe.a,{type:"vertical"}),Object(p.jsx)("span",{children:"\u811a\u624b\u67b6\u8bf4\u660e"}),Object(p.jsx)(pe.a,{type:"vertical"}),Object(p.jsx)("span",{children:"\u5305\u7ba1\u7406\u652f\u6301"}),Object(p.jsx)(pe.a,{type:"vertical"}),Object(p.jsx)("span",{children:"\u8054\u7cfb\u5f00\u53d1\u8005"})]})]})]})},Ie=a(747),Pe=a(762),Le=a(763),Be=a(757),Ee=a(748),Me=a(753),Ae={labelCol:{span:6},wrapperCol:{span:16}},Fe=function(){var e=[{title:"\u9875\u9762\u6807\u8bc6\u53f7",dataIndex:"pageId",key:"pageId"},{title:"\u9875\u9762\u540d\u79f0",dataIndex:"pageName",key:"pageName"},{title:"\u9875\u9762\u5907\u6ce8",dataIndex:"pageDescription",key:"pageDescription"},{title:"\u9875\u9762\u72b6\u6001",key:"pageStatus",dataIndex:"pageStatus",render:function(e){return Object(p.jsx)(p.Fragment,{children:0===e?Object(p.jsx)(Be.a,{color:"geekblue",children:"\u5173\u95ed"}):Object(p.jsx)(Be.a,{color:"green",children:"\u5f00\u542f"})})}},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return Object(p.jsxs)(ce.b,{size:"middle",children:[Object(p.jsx)(l.a,{type:"ghost",onClick:function(){return C(t)},children:"\u66f4\u6539"}),Object(p.jsx)(l.a,{type:"primary",danger:!0,onClick:function(){return S(t)},children:"\u5220\u9664"}),Object(p.jsx)(l.a,{type:"primary",onClick:function(){return w(t)},children:"\u7f16\u8f91\u5668"})]})}}],t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),s=Object(f.a)(i,2),j=s[0],d=s[1],u=Object(n.useState)("create"),b=Object(f.a)(u,2),h=b[0],O=b[1],m=Object(n.useState)(!1),g=Object(f.a)(m,2),x=g[0],v=g[1],_=ge.a.useForm(),y=Object(f.a)(_,1)[0],N=Object(o.g)(),k=function(){v(!0),H.get("/api/getPageList").then((function(e){console.log("\u8bf7\u6c42res",e),r(e.data)})).catch((function(e){F.b.error("\u51fa\u9519\u4e86")})).finally((function(){return v(!1)}))};Object(n.useEffect)((function(){k()}),[]);var C=function(e){O(e.pageId),d(!0),y.setFieldsValue(e)},w=function(e){N.push({pathname:"/editor",state:{pageId:e.pageId}})},S=function(e){H.post("/api/deletePage",{pageId:e.pageId}).then((function(e){k(),d(!1)})).catch((function(e){F.b.error("\u51fa\u9519\u4e86")}))};return Object(p.jsxs)("div",{children:[Object(p.jsx)(l.a,{type:"primary",style:{marginBottom:10},onClick:function(){O("create"),d(!0)},children:"\u521b\u5efa\u9875\u9762"}),Object(p.jsx)(Ee.a,{rowKey:"pageId",loading:x,columns:e,dataSource:c}),Object(p.jsx)(Me.a,{destroyOnClose:!0,title:"create"===h?"\u521b\u5efa\u9875\u9762":"\u7f16\u8f91\u9875\u9762",visible:j,onOk:function(){y.validateFields().then((function(e){var t=e.pageName,a=e.pageDescription,n=e.pageStatus,c={pageName:t,pageDescription:a||"--",pageStatus:Number(n)};"create"===h?H.post("/api/createPage",c).then((function(e){k(),d(!1)})).catch((function(e){F.b.error("\u51fa\u9519\u4e86")})):H.post("/api/editPage",Object(A.a)(Object(A.a)({},c),{},{pageId:h})).then((function(e){k(),d(!1)})).catch((function(e){F.b.error("\u51fa\u9519\u4e86")}))}))},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onCancel:function(){d(!1)},children:Object(p.jsxs)(ge.a,Object(A.a)(Object(A.a)({preserve:!1,form:y},Ae),{},{initialValues:{pageStatus:!0},children:[Object(p.jsx)(ge.a.Item,{label:"\u9875\u9762\u540d\u79f0",name:"pageName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9875\u9762\u540d\u79f0"}],children:Object(p.jsx)(Y.a,{})}),Object(p.jsx)(ge.a.Item,{label:"\u9875\u9762\u5907\u6ce8",name:"pageDescription",children:Object(p.jsx)(Y.a,{})}),Object(p.jsx)(ge.a.Item,{label:"\u9875\u9762\u72b6\u6001",name:"pageStatus",valuePropName:"checked",children:Object(p.jsx)(oe.a,{})})]}))})]})},Te=(a.p,a(735),Ie.a.Content),ze=(Ie.a.Sider,Pe.a,function(e){var t=Object(o.g)(),a=Object(n.useState)("page"),c=Object(f.a)(a,2),r=c[0];c[1];return Object(p.jsx)(Ie.a,{style:{minHeight:"100vh"},children:Object(p.jsxs)(Ie.a,{className:"site-layout",children:[Object(p.jsx)(s.a,{onBack:function(){t.push("/login"),window.localStorage.removeItem("pig_jwt_token")},ghost:!1,title:"\u524d\u7aef\u9875\u9762\u642d\u5efa\u5668\u540e\u53f0",subTitle:"Page Builder formed by MrPiggy",extra:[Object(p.jsx)(g.a,{size:"large",icon:Object(p.jsx)(Le.a,{}),style:{marginRight:8}},"ava")]},"pppa"),Object(p.jsx)(Te,{style:{margin:"16px"},children:Object(p.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:"page"===r?Object(p.jsx)(Fe,{}):null})})]})})}),Je=function(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{exact:!0,path:"/editor",children:Object(p.jsx)(he,{})}),Object(p.jsx)(o.b,{exact:!0,path:"/login",children:Object(p.jsx)(Se,{})}),Object(p.jsx)(o.b,{exact:!0,path:"/home",children:Object(p.jsx)(ze,{})}),Object(p.jsx)(o.b,{path:"*",render:function(){return Object(p.jsx)(o.a,{to:"/login"})}})]})})};r.a.render(Object(p.jsx)(Je,{}),document.getElementById("root"))},91:function(e,t,a){e.exports={"chosen-item":"Canvas_chosen-item__3h6m4","delete-icon-warpper":"Canvas_delete-icon-warpper__vXZKK","full-height":"Canvas_full-height__Uqfup","inherit-min-height":"Canvas_inherit-min-height__1L1lz","tool-icon":"Canvas_tool-icon__3aoAh"}}},[[738,1,2]]]);
//# sourceMappingURL=main.b7f8bb27.chunk.js.map