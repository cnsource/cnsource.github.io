webpackJsonp([1],{"3W/a":function(t,e){},"4QTq":function(t,e){},8477:function(t,e){},Gfut:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("dRLW")},null,null).exports,o=s("/ocq"),c=s("7t+N"),l=s.n(c),r={name:"ToolBar",data:function(){return{loginState:!1,isActive:"home",loginpath:"#/login"}},mounted:function(){this.tablink(this.$route.path),null!=Bmob.User.current()?(this.loginpath="#/",this.loginState=!0):(this.loginpath="#/login",this.loginState=!1)},methods:{closeNav:function(){l()("#navbarText").collapse("hide")},logout:function(){confirm("确定要退出登录么？")&&(Bmob.User.logout(),location.href="/")},toolbarClick:function(t){this.isActive=t},tablink:function(t){switch(t){case"/linkmg":case"/passagemg":this.isActive="manager";break;case"/edit":this.isActive="edit";break;case"/content":this.isActive="home";break;default:this.isActive="home"}}},watch:{$route:function(t,e){this.tablink(this.$route.path)}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-toolbar pt-0 pb-0 pl-3 pr-3"},[s("a",{staticClass:"brand",attrs:{href:t.loginpath}},[t._v("Cnsource")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse p-0",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{class:{"nav-link":!0,active:"home"===t.isActive},on:{click:function(e){return t.toolbarClick("home")}}},[s("a",{staticClass:"nav-link",attrs:{href:"#/content"},on:{click:t.closeNav}},[t._v("首页")])]),t._v(" "),t.loginState?s("li",{class:{"nav-link":!0,active:"manager"===t.isActive},on:{click:function(e){return t.toolbarClick("manager")}}},[s("a",{staticClass:"nav-link",attrs:{href:"#/admin"},on:{click:t.closeNav}},[t._v("管理")])]):t._e(),t._v(" "),t.loginState?s("li",{class:{"nav-link":!0,active:"edit"===t.isActive},on:{click:function(e){return t.toolbarClick("edit")}}},[s("a",{staticClass:"nav-link",attrs:{href:"#/edit"},on:{click:t.closeNav}},[t._v("写稿子")])]):t._e(),t._v(" "),t.loginState?s("li",{class:{"nav-link":!0,active:"logout"===t.isActive},on:{click:function(e){return t.toolbarClick("logout")}}},[s("a",{staticClass:"nav-link",attrs:{href:"#/"},on:{click:[t.closeNav,function(e){return e.preventDefault(),t.logout(e)}]}},[t._v("登出")])]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var d={name:"Home",components:{ToolBar:s("VU/8")(r,u,!1,function(t){s("ryJ7")},"data-v-9bd51ed6",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"viewsize"},[e("ToolBar",{staticClass:"sticky-top shadow"}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var p=s("VU/8")(d,v,!1,function(t){s("RJro")},"data-v-98344646",null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleInterval","data-ride":"carousel"}},[s("div",{staticClass:"carousel-inner"},t._l(t.banners,function(e,a){return s("div",{class:{"carousel-item":!0,active:t.pos==a},attrs:{"data-interval":"10000"}},[s("img",{staticClass:"img-responsive img-rounded",attrs:{src:e,alt:"..."}})])}),0),t._v(" "),t._m(0),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleInterval",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Previous")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleInterval",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Next")])])}]};var g=s("VU/8")({name:"Banner",data:function(){return{pos:0,banners:["https://images.pexels.com/photos/4906139/pexels-photo-4906139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/6311128/pexels-photo-6311128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/7069387/pexels-photo-7069387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]}}},m,!1,function(t){s("QFWY")},"data-v-5b44537e",null).exports,h={name:"PassageItem",props:{item:Object},methods:{detail:function(t){this.$router.push({path:"/passage/"+t})}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container shadow-lg"},[s("div",{staticClass:"row mb-4",on:{click:function(e){return e.preventDefault(),t.detail(t.item.passage.objectId)}}},[s("img",{staticClass:"img-fluid col-sm-12 col-md-4 col-lg-3 p-2 rounded",attrs:{src:t.item.coverlink}}),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-8 col-lg-9 p-2 irlay"},[s("div",[s("h5",{staticClass:"text-elipsis pl-1 m-0"},[t._v(t._s(t.item.title))])]),t._v(" "),s("div",[s("p",{staticClass:"text-elipsis-2 pt-2"},[t._v("\n              "+t._s(t.item.description)+"\n          ")])]),t._v(" "),s("div",{staticClass:"text-right"},[s("span",{staticClass:"time p-1 rounded"},[t._v(t._s(t.item.createdAt))])])])])])])},staticRenderFns:[]};var b=s("VU/8")(h,f,!1,function(t){s("4QTq")},"data-v-acd78ef8",null).exports,_={name:"PassageList",components:{PassageItem:b},data:function(){return{count:0,currentPage:1,passages:[]}},mounted:function(){this.getPassageCount(),this.getPassageList(1)},methods:{pageChange:function(t){console.log(t),this.getPassageList(t)},getPassageCount:function(){var t=this;Bmob.Query("PassageList").count().then(function(e){t.count=e,console.log(e)})},getPassageList:function(t){var e=this;t--;var s=Bmob.Query("PassageList");s.limit(10),s.skip(10*t),s.order("-createdAt"),s.find().then(function(t){e.passages=t,console.dir(t)})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-2"},[t._l(t.passages,function(t){return s("div",{staticClass:"row"},[s("passage-item",{staticClass:"col-sm-12 col-md-10 col-lg-10 mx-auto",attrs:{item:t}})],1)}),t._v(" "),s("div",{staticClass:"row  d-none d-md-block d-lg-block p-3"},[s("div",{staticClass:"pagination justify-content-center"},[s("el-pagination",{attrs:{background:"","current-page":t.currentPage,layout:"total, prev, pager, next",total:t.count},on:{"current-change":t.pageChange}})],1)]),t._v(" "),s("div",{staticClass:"row justify-content-center d-lg-none d-md-none p-3"},[s("el-backtop",{attrs:{bottom:50}}),t._v(" "),s("div",{staticClass:"pagination justify-content-center"},[s("el-pagination",{attrs:{small:"",background:"","page-count":5,"current-page":t.currentPage,layout:"prev, pager, next",total:t.count},on:{"current-change":t.pageChange}})],1)],1)],2)},staticRenderFns:[]};var k=s("VU/8")(_,C,!1,function(t){s("Gfut")},"data-v-1170b00c",null).exports,y={name:"ContactInfo",data:function(){return{blogs:[],wemedia:[],partnr:[],groups:[]}},mounted:function(){this.getContact()},methods:{getContact:function(){var t=this,e=Bmob.Query("LinkTable");e.equalTo("type","==","博客"),e.find().then(function(e){t.blogs=e}).catch(function(t){});var s=Bmob.Query("LinkTable");s.equalTo("type","==","自媒体"),s.find().then(function(e){t.wemedia=e}).catch(function(t){});var a=Bmob.Query("LinkTable");a.equalTo("type","==","联系方式"),a.find().then(function(e){t.partnr=e}).catch(function(t){});var n=Bmob.Query("LinkTable");n.equalTo("type","==","公开群"),n.find().then(function(e){t.groups=e}).catch(function(t){})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pl-3 mb-3 mt-3 shadow-lg pl-5 pr-5 pt-3 pb-3 rounded-lg container"},[s("div",{staticClass:"row"},[t.wemedia.length>0?s("b",{staticClass:"col-12 p-2 mb-1"},[t._v("自媒体")]):t._e(),t._v(" "),s("div",{staticClass:"col-12"},t._l(t.wemedia,function(e){return s("a",{staticClass:"d-inline-block m-1",attrs:{href:e.url,target:"_blank"},domProps:{innerHTML:t._s(e.icon)}})}),0)]),t._v(" "),t.blogs.length>0?s("div",{staticClass:"row"},[s("b",{staticClass:"col-12 p-2 mb-1"},[t._v("博客")]),t._v(" "),s("div",{staticClass:"col-12"},t._l(t.blogs,function(e){return s("a",{staticClass:"d-inline-block m-1",attrs:{href:e.url,target:"_blank"},domProps:{innerHTML:t._s(e.icon)}})}),0)]):t._e(),t._v(" "),t.partnr.length>0?s("div",{staticClass:"row"},[s("b",{staticClass:"col-12 p-2 mb-1"},[t._v("合作联系")]),t._v(" "),s("div",{staticClass:"col-12"},[t._l(t.partnr,function(e){return s("a",{staticClass:"d-inline-block m-1",attrs:{href:e.url,target:"_blank"},domProps:{innerHTML:t._s(e.icon)}})}),t._v(" "),s("div",{staticClass:"d-inline-block m-1"}),t._v(" "),s("div",{staticClass:"d-inline-block m-1"})],2)]):t._e(),t._v(" "),t.groups.length>0?s("div",{staticClass:"row"},[s("b",{staticClass:"col-12 p-2 mb-1"},[t._v("公开群")]),t._v(" "),s("div",{staticClass:"col-12"},t._l(t.groups,function(e){return s("a",{staticClass:"d-inline-block m-1",attrs:{href:e.url,target:"_blank"},domProps:{innerHTML:t._s(e.icon)}})}),0)]):t._e()])},staticRenderFns:[]};var w={name:"Content",components:{ContactInfo:s("VU/8")(y,x,!1,function(t){s("gmiG")},"data-v-2a87bcc0",null).exports,PassageList:k,PassageItem:b,Banner:g}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-8 col-lg-8 ml-lg-4 mr-lg-4"},[e("passage-list",{staticClass:"rounded"})],1),this._v(" "),e("div",{staticClass:"col-sm-12 col-md-4 col-lg-3"},[e("contact-info",{staticClass:"float-lg-right"})],1)])])},staticRenderFns:[]};var L=s("VU/8")(w,P,!1,function(t){s("T9Oa")},"data-v-217fd40a",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid sticky-top mt-3 bg-white"},[e("div",{staticClass:"row"},[e("div",{staticClass:" col-sm-12 col-md-12 col-lg-12 mb-3 bg-white"},[e("div",{staticClass:"clearfix align-center"},[e("div",{staticClass:"m-1 d-inline-block"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/linkmg","active-class":"linkActive"}},[this._v("链接管理")])],1),this._v(" "),e("div",{staticClass:"m-1 d-inline-block"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/passagemg","active-class":"linkActive"}},[this._v("文章管理")])],1),this._v(" "),e("div",{staticClass:"m-1 d-inline-block"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/draftmg","active-class":"linkActive"}},[this._v("草稿管理")])],1)])]),this._v(" "),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[e("router-view")],1)])])},staticRenderFns:[]};var T=s("VU/8")({name:"Admin"},I,!1,function(t){s("Q2sM")},"data-v-8c4e6b22",null).exports,$={name:"PassageDetail",data:function(){return{passage:{content:"",createdAt:""}}},mounted:function(){this.getPassage(this.$route.params.objectId)},methods:{back:function(){this.$router.go(-1)},getPassage:function(t){var e=this;Bmob.Query("Passage").get(t).then(function(t){e.passage=t}).catch(function(t){console.log(t)})}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"text-atuo-break col-12 mb-5",domProps:{innerHTML:t._s(t.passage.content)}}),t._v(" "),s("div",{staticClass:"p-2 col-12 fixed-bottom",staticStyle:{"text-align":"center","font-weight":"500","background-color":"#eaeaea"}},[t._v("\n      "+t._s(t.passage.createdAt)+"\n    ")]),t._v(" "),s("div",{staticClass:"floatbtn",on:{click:t.back}},[s("svg",{staticClass:"icon",attrs:{t:"1619171886674",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8348",width:"42",height:"42"}},[s("path",{attrs:{d:"M512.005001 0C228.033403 0 0 228.033403 0 512.005001s228.033403 511.994999 512.005001 511.994999 511.994999-228.033403 511.994999-511.994999S795.926591 0 512.005001 0z m-2.450359 965.211388c-249.416536 0-455.656747-206.250212-455.656747-455.656746S260.138106 53.897895 509.554642 53.897895 965.211388 260.138106 965.211388 509.554642c0 254.207237-206.250212 455.656747-455.656746 455.656746z",fill:"#ff6b6b","p-id":"8349"}}),t._v(" "),s("path",{attrs:{d:"M762.271661 476.739835H403.289076l92.013478-95.604005c13.812023-14.342101 13.812023-38.245602 0-52.587703a35.15515 35.15515 0 0 0-50.617415 0L292.842897 486.301236c-13.812023 14.342101-13.812023 38.245602 0 52.587703l151.872247 157.76311c4.600674 4.770699 13.802022 9.551399 23.003369 9.551399s18.402696-4.7807 23.00337-9.551399c13.812023-14.342101 13.812023-38.245602 0-52.587704l-92.013478-95.614006h358.962582c18.402696 0 36.815393-14.342101 36.815393-38.245602s-13.812023-33.464902-32.214719-33.464902z",fill:"#ff6b6b","p-id":"8350"}})])])])])},staticRenderFns:[]};var E=s("VU/8")($,B,!1,function(t){s("3W/a")},"data-v-7ab97de5",null).exports,A=s("alfv"),j=s.n(A),Q=s("sRRY"),R=s("JSQk"),M=s.n(R),F={name:"Edit",data:function(){return{editor:null,thtml:null,reshtml:"",ptitle:"",coverlink:"",description:"",webtocken:"",dialogImageUrl:"",imgfile:null,dialogVisible:!1,progress:0,filelist:[],pid:"",lid:"",isedit:!1}},mounted:function(){console.log("lid+pid",this.$route.params.lid,this.$route.params.pid),this.getTocken(),this.editor=new j.a("#toolbar","#editorarea"),this.editor.config.height=490,this.editor.config.uploadImgMaxSize=20971520,this.editor.config.uploadImgMaxLength=1;var t=this;this.editor.config.customUploadImg=function(e,s){t.uploadImg(e[0],s,null)},null!=this.$route.params.lid&&null!=this.$route.params.pid&&(this.editPlist(this.$route.params.lid),this.lid=this.$route.params.lid,this.editPassage(this.$route.params.pid),this.pid=this.$route.params.pid,this.isedit=!0),this.editor.create()},methods:{handleRemove:function(t,e){this.imgfile=null,this.coverlink=""},uploadCover:function(t){var e=this;null==this.imgfile?(this.imgfile=t.file,this.uploadImg(t.file,function(t){e.coverlink=t},function(t){e.coverlink="上传进度"+Math.ceil(t)+"..."})):alert("只能上传一张")},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},getTocken:function(){var t=this;this.axios.get("https://qnt.cotubo.cn:7443/vuepage").then(function(e){t.webtocken=e.data})},editPlist:function(t){var e=this;Bmob.Query("PassageList").get(t).then(function(t){e.ptitle=t.title,e.description=t.description,e.coverlink=t.coverlink;var s=t.coverlink.lastIndexOf("/"),a=t.coverlink.lastIndexOf("."),n=t.coverlink.substring(s+1,a),i={};i.name=n,i.url=e.coverlink,e.filelist.push(i)}).catch(function(t){console.log(t)})},editPassage:function(t){var e=this;Bmob.Query("Passage").get(t).then(function(t){e.editor.txt.html(t.content),e.reshtml=t.content}).catch(function(t){console.log(t)})},checkPassage:function(){return""!=this.coverlink&&""!=this.ptitle&&""!=this.getPassage()},savepassage:function(){var t=this,e=Bmob.Query("Passage");e.set("content",this.getPassage()),e.save().then(function(e){console.table(e);var s=Bmob.Query("DraftList"),a=Bmob.Pointer("Passage").set(e.objectId);s.set("passage",a),s.set("title",t.ptitle),s.set("description",t.description),s.set("coverlink",t.coverlink),s.save().then(function(t){alert("已保存为草稿")}).catch(function(t){console.log(t)})}).catch(function(t){console.table(t)})},sendpassage:function(){var t=this;if(this.checkPassage())if(this.isedit)this.updatePassage();else{var e=Bmob.Query("Passage");e.set("content",this.getPassage()),e.save().then(function(s){console.table(s);var a=Bmob.Pointer("Passage").set(s.objectId),n=Bmob.Query("PassageList");n.set("title",t.ptitle),n.set("description",t.description),n.set("coverlink",t.coverlink),n.set("passage",a),n.save().then(function(t){alert("发布成功")}).catch(function(t){e.destroy(s.objectId).then(function(t){console.table(t)}).catch(function(t){console.table(t)}),console.table(t)})}).catch(function(t){console.table(t)})}else alert("填写信息过少")},updatePassage:function(){var t=this,e=Bmob.Query("Passage");e.set("id",this.pid),e.set("content",this.getPassage()),e.save().then(function(s){var a=Bmob.Query("PassageList");a.set("id",t.lid),a.set("title",t.ptitle),a.set("description",t.description),a.set("coverlink",t.coverlink),a.save().then(function(t){alert("更新成功")}).catch(function(t){e.destroy(s.objectId).then(function(t){console.table(t)}).catch(function(t){console.table(t)}),console.table(t)})}).catch(function(t){console.table(t)})},getPassage:function(){return this.editor.txt.html()},uploadImg:function(t,e,s){var a=t.name+"",n=a.lastIndexOf("."),i=a.substring(0,n),o=a.substring(n,a.length),c=M.a.hash(i)+o,l={useCdnDomain:!0,disableStatisticsReport:!1,retryCount:6,region:Q.a.z2},r={next:function(t){null!=s&&s(t.total.percent)},error:function(t){console.log("上传发生问题："),console.log(t),alert("上传失败")},complete:function(t){e("http://qiniu.cotubo.cn/"+t.key)}};Q.b(t,c,this.webtocken,{fname:"",params:{},mimeType:null},l).subscribe(r)}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12 col-lg-4 pt-4",staticStyle:{height:"fit-content"}},[s("el-upload",{attrs:{action:"","list-type":"picture-card",limit:1,"file-list":t.filelist,"http-request":t.uploadCover,"on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[s("i",{staticClass:"el-icon-plus"})]),t._v(" "),s("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]),t._v(" "),s("el-link",{attrs:{href:t.coverlink,target:"_blank",underline:!1,type:"success"}},[t._v("封面链接: "+t._s(t.coverlink))]),t._v(" "),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ptitle,expression:"ptitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.ptitle},on:{input:function(e){e.target.composing||(t.ptitle=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group mb-3"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",staticStyle:{height:"200px"},attrs:{type:"text",placeholder:"简介"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])],1),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-12 col-lg-8 text-right",staticStyle:{"z-index":"0"}},[s("div",{staticClass:"btn-group m-2",attrs:{role:"group"}},[s("div",{staticClass:"btn btn-bg",on:{click:t.savepassage}},[s("div",{staticClass:"svg-align"},[s("svg",{staticClass:"icon",attrs:{t:"1619178963987",viewBox:"0 0 1553 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11896",width:"26",height:"26"}},[s("path",{attrs:{d:"M1057.227034 0.105931A487.600552 487.600552 0 0 0 709.737931 146.39669a331.917241 331.917241 0 0 0-118.324965-21.186207 362.425379 362.425379 0 0 0-339.544276 257.05931 307.764966 307.764966 0 0 0-241.558069 234.036966 346.712276 346.712276 0 0 0 56.743724 288.909241 289.227034 289.227034 0 0 0 230.929655 118.360276h378.385655a30.649379 30.649379 0 0 0 30.649379-30.649379v-134.179311a30.790621 30.790621 0 0 0-30.967172-30.684689c-121.467586 0.670897-138.310621 4.201931-165.958621-24.081656a78.353655 78.353655 0 0 1 1.271173-109.885793c264.827586-264.827586 256.953379-267.934897 300.314483-267.934896s35.84 3.001379 300.420413 267.970207a78.283034 78.283034 0 0 1-45.903448 133.225931v0.600276h-128.635586a30.68469 30.68469 0 0 0-30.68469 30.684689v134.426483a30.649379 30.649379 0 0 0 30.68469 30.649379h92.19531c9.110069 0.317793 18.220138 0.600276 27.330207 0.600276 9.675034 0 19.703172-0.282483 29.095724-0.918069a504.055172 504.055172 0 0 0 467.014621-484.669793c0.317793-8.509793 0.317793-17.655172 0.317793-26.412138A504.937931 504.937931 0 0 0 1057.227034 0.105931z","p-id":"11897",fill:"#ff6b6b"}})])]),t._v(" "),s("div",{staticClass:"btn-align"},[t._v("\n            保存\n          ")])]),t._v(" "),s("div",{staticClass:"btn btn-bg",on:{click:t.sendpassage}},[s("div",{staticClass:"svg-align"},[s("svg",{staticClass:"icon",attrs:{t:"1619179317929",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16574",width:"26",height:"26"}},[s("path",{attrs:{d:"M188.714667 774.570667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V149.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h582.570667a42.666667 42.666667 0 0 1 42.666666 42.666666v60.714667H231.381333a42.666667 42.666667 0 0 0-42.666666 42.666667v521.856z",fill:"#82C4FF","p-id":"16575"}}),t._v(" "),s("path",{attrs:{d:"M637.994667 645.994667l-61.461334 54.016a21.333333 21.333333 0 0 0 28.16 32.042666l104.106667-91.456a21.333333 21.333333 0 0 0-0.042667-32.064l-104.085333-91.264a21.333333 21.333333 0 1 0-28.117333 32.064l61.568 53.994667h-186.304a21.333333 21.333333 0 1 0 0 42.666667h186.176zM874.666667 918.421333H292.096a42.666667 42.666667 0 0 1-42.666667-42.666666V313.429333a42.666667 42.666667 0 0 1 42.666667-42.666666H874.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v562.346667a42.666667 42.666667 0 0 1-42.666666 42.666667z",fill:"#0287FF","p-id":"16576"}})])]),t._v(" "),s("div",{staticClass:"btn-align"},[t._v("\n            发布\n          ")])])]),t._v(" "),s("div",{attrs:{id:"toolbar"}}),t._v(" "),s("div",{staticClass:"mb-2",attrs:{id:"editorarea"}})])])])},staticRenderFns:[]};var V=s("VU/8")(F,U,!1,function(t){s("wun8")},"data-v-8adfb61e",null).exports,S={name:"LinkManager",data:function(){return{Link:{name:"",type:"",url:""},isActive:"",resoutmsg:"添加一条数据吧",links:[]}},created:function(){this.loadLinks()},methods:{choseType:function(t){this.Link.type=t,this.isActive=t},onSubmit:function(){var t=this;if(""!=this.Link.name&&""!=this.Link.type&&""!=this.Link.url&&""!=this.Link.icon){var e=Bmob.Query("LinkTable");e.set("icon",this.Link.icon),e.set("name",this.Link.name),e.set("type",this.Link.type),e.set("url",this.Link.url),e.save().then(function(e){t.resoutmsg="添加成功，数据id: "+e.objectId,t.resetLink(),t.loadLinks(),t.Link={}}).catch(function(e){t.resoutmsg="添加失败"})}else alert("请补充完整数据")},loadLinks:function(){var t=this;Bmob.Query("LinkTable").find().then(function(e){t.links=e})},deleteRow:function(t,e){var s=this;Bmob.Query("LinkTable").destroy(e.objectId).then(function(t){console.log(t),s.loadLinks()}).catch(function(t){console.log(t),alert("删除失败")})},resetLink:function(){var t=this.Link.type;this.Link={},this.Link.type=t,this.isActive=-1,this.resoutmsg="添加一条数据吧"}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12 col-lg-10 mx-auto"},[s("form",[s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-10 offset-1"},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Link.name,expression:"Link.name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"eg:CSDN / Github"},domProps:{value:t.Link.name},on:{input:function(e){e.target.composing||t.$set(t.Link,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-10 offset-1"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Link.icon,expression:"Link.icon"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail2","aria-describedby":"emailHelp",placeholder:"请复制svg代码到此处，图形大小-42"},domProps:{value:t.Link.icon},on:{input:function(e){e.target.composing||t.$set(t.Link,"icon",e.target.value)}}}),t._v(" "),s("a",{staticClass:"nav-link",staticStyle:{"font-size":"0.8em"},attrs:{href:"https://www.iconfont.cn/",target:"_blank"}},[t._v("点我去下载图标")]),t._v(" "),s("div",{staticClass:"col-10",domProps:{innerHTML:t._s(t.Link.icon)}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn-group col-10 offset-1 mt-2 mb-2",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{class:["btn","自媒体"==t.isActive?"btn-success":"btn-outline-secondary"],attrs:{type:"button"},on:{click:function(e){return t.choseType("自媒体")}}},[t._v("自媒体\n            ")]),t._v(" "),s("button",{class:["btn","博客"==t.isActive?"btn-success":"btn-outline-secondary"],attrs:{type:"button"},on:{click:function(e){return t.choseType("博客")}}},[t._v("博客\n            ")]),t._v(" "),s("button",{class:["btn","联系方式"==t.isActive?"btn-success":"btn-outline-secondary"],attrs:{type:"button"},on:{click:function(e){return t.choseType("联系方式")}}},[t._v("联系方式\n            ")]),t._v(" "),s("button",{class:["btn","公开群"==t.isActive?"btn-success":"btn-outline-secondary"],attrs:{type:"button"},on:{click:function(e){return t.choseType("公开群")}}},[t._v("公开群\n            ")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-10 offset-1"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Link.url,expression:"Link.url"}],staticClass:"form-control",attrs:{type:"url",id:"exampleInputPassword1",placeholder:"https://www.example.com"},domProps:{value:t.Link.url},on:{input:function(e){e.target.composing||t.$set(t.Link,"url",e.target.value)}}}),t._v(" "),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("请务必填写完整链接地址.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-10 offset-1 text-right"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("创建")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.resetLink(e)}}},[t._v("清除")])])])])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-11 col-lg-9 mx-auto"},[s("table",{staticClass:"table table-responsive-sm table-responsive-md table-borderless table-hover"},[t._m(3),t._v(" "),s("tbody",t._l(t.links,function(e,a){return s("tr",[s("td",{staticClass:"align-middle",domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(e.type))]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(e.url))]),t._v(" "),s("td",{staticClass:"align-middle"},[s("button",{staticClass:"mx-auto btn btn-danger nav-link",on:{click:function(s){return t.deleteRow(a,e)}}},[t._v("移除")])])])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"exampleInputEmail1"}},[e("b",[this._v("图标名称")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"exampleInputEmail2"}},[e("b",[this._v("SVG图标")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"exampleInputPassword1"}},[e("b",[this._v("链接网址")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("图标")]),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("网址")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("操作")])])])}]};var D=s("VU/8")(S,H,!1,function(t){s("voZl")},"data-v-5b980823",null).exports,N={name:"PassageCard",props:{passage:Object},data:function(){return{visible:!1,bodystyle:{padding:"0px"}}},methods:{edit:function(t,e){console.log("edit",t,e),this.$router.push({path:"/edit/"+t+"/"+e})},passageDetail:function(t){this.$router.push({path:"/passage/"+t})},deletePassage:function(t,e){var s=this,a=null,n=null;Bmob.Query("PassageList").destroy(t).then(function(t){a=t,s.delresult(a,n)}).catch(function(t){console.log(t)}),Bmob.Query("Passage").destroy(e).then(function(t){n=t,delresult(a,n)}).catch(function(t){console.log(t)}),this.visible=!1},delresult:function(t,e){null==t||null==e||this.opentip("已成功删除","success")},opentip:function(t,e){this.$message({message:t,type:e})}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-card",{staticClass:"box-card",attrs:{shadow:"hover","body-style":t.bodystyle}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("h6",{staticClass:"text-elipsis",domProps:{textContent:t._s(t.passage.title)}},[t._v("passage-title")]),t._v(" "),s("div",{staticClass:"text text-elipsis-2"},[t._v("\n        "+t._s(t.passage.description)+"\n      ")])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("el-image",{staticStyle:{width:"100%",height:"130px"},attrs:{src:t.passage.coverlink,fit:"cover"}})],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 p-2 pr-3"},[s("span",{staticClass:"float-right"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[s("el-button",{attrs:{type:"success",icon:"el-icon-edit",circle:""},on:{click:function(e){return t.edit(t.passage.objectId,t.passage.passage.objectId)}}})],1),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看",placement:"top"}},[s("el-button",{staticClass:"m-0",attrs:{type:"primary",icon:"el-icon-document",circle:""},on:{click:function(e){return t.passageDetail(t.passage.passage.objectId)}}})],1),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[s("el-popover",{attrs:{placement:"right",width:"180"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("p",[t._v("确定要删除这篇文章么？")]),t._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"0"}},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.deletePassage(t.passage.objectId,t.passage.passage.objectId)}}},[t._v("确定")])],1),t._v(" "),s("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",circle:""},slot:"reference"})],1)],1)],1)])])])])],1)},staticRenderFns:[]};var q=s("VU/8")(N,z,!1,function(t){s("su7X")},"data-v-bfc8e1d4",null).exports,O={name:"PassageManager",components:{PassageCard:q,PassageItem:b},data:function(){return{count:0,currentPage:1,passages:[]}},mounted:function(){this.getPassageCount(),this.getPassageList(1)},methods:{pageChange:function(t){console.log(t),this.getPassageList(t)},getPassageCount:function(){var t=this;Bmob.Query("PassageList").count().then(function(e){t.count=e,console.log(e)})},getPassageList:function(t){var e=this;t--;var s=Bmob.Query("PassageList");s.limit(8),s.skip(8*t),s.order("-createdAt"),s.find().then(function(t){e.passages=t,console.dir(t)})}}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row  d-none d-md-block d-lg-block p-3"},[s("div",{staticClass:"pagination justify-content-center"},[s("el-pagination",{attrs:{background:"","current-page":t.currentPage,layout:"total, prev, pager, next",total:t.count},on:{"current-change":t.pageChange}})],1)]),t._v(" "),s("div",{staticClass:"row p-0 m-auto"},t._l(t.passages,function(t){return s("passage-card",{key:t.objectId,staticClass:"clo-sm-12 col-md-4 col-lg-3 mb-3",attrs:{passage:t}})}),1),t._v(" "),s("div",{staticClass:"row justify-content-center d-lg-none d-md-none p-3"},[s("el-backtop",{attrs:{bottom:50}}),t._v(" "),s("div",{staticClass:"pagination justify-content-center"},[s("el-pagination",{attrs:{small:"",background:"","page-count":5,"current-page":t.currentPage,layout:"prev, pager, next",total:t.count},on:{"current-change":t.pageChange}})],1)],1)])])},staticRenderFns:[]};var J=s("VU/8")(O,W,!1,function(t){s("8477")},"data-v-78c4c2a8",null).exports,G={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){Bmob.User.login(this.username,this.password).then(function(t){location.href="/"}).catch(function(t){alert("用户名或密码错误")})}}},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center pt-3"},[s("h1",[t._v("管理登录")]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center m-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"row justify-content-center m-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"row justify-content-center"},[s("button",{staticClass:"btn btn-primary w-25",on:{click:t.login}},[t._v("登录")])])])])},staticRenderFns:[]};var X=s("VU/8")(G,Y,!1,function(t){s("TLFi")},"data-v-abff971e",null).exports,Z={name:"DraftManager",components:{PassageCard:q},data:function(){return{drafts:[]}},mounted:function(){this.getDraftList()},methods:{getDraftList:function(){var t=this,e=Bmob.Query("DraftList");e.order("-createdAt"),e.find().then(function(e){t.drafts=e,console.table(e)})}}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},this._l(this.drafts,function(t){return e("passage-card",{key:t.objectId,staticClass:"clo-sm-12 col-md-4 col-lg-3 mb-3",attrs:{passage:t}})}),1)])},staticRenderFns:[]};var tt=s("VU/8")(Z,K,!1,function(t){s("WmOT")},"data-v-ebcff4a0",null).exports;a.default.use(o.a);var et=new o.a({routes:[{path:"/",name:"Home",component:p,redirect:"/content",children:[{path:"/content",name:"Content",component:L},{path:"/login",name:"Login",component:X},{path:"/admin",name:"Admin",component:T,redirect:"/linkmg",children:[{path:"/linkmg",name:"LinkManager",component:D},{path:"/passagemg",name:"PassageManager",component:J},{path:"/draftmg",name:"DraftManager",component:tt}]},{path:"/edit",name:"Edit",component:V},{path:"/edit/:lid/:pid",name:"Edit",component:V},{path:"/passage/:objectId",name:"PassageDetail",component:E}]}]}),st=["LinkManager","PassageManager","Edit","Admin"];et.beforeEach(function(t,e,s){var a=Bmob.User.current();if(st.indexOf(t.name)>=0)return null!=a?void s():(et.go(-1),void alert("无权限访问"));s()});var at=et,nt=(s("Bb4J"),s("qb6w"),s("mtWM")),it=s.n(nt),ot=s("DWlv"),ct=s.n(ot),lt=s("zL8q"),rt=s.n(lt);s("tvR6");a.default.use(rt.a),a.default.use(ct.a,it.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:at,components:{App:i},template:"<App/>"})},Q2sM:function(t,e){},QFWY:function(t,e){},RJro:function(t,e){},T9Oa:function(t,e){},TLFi:function(t,e){},WmOT:function(t,e){},dRLW:function(t,e){},gmiG:function(t,e){},qb6w:function(t,e){},ryJ7:function(t,e){},su7X:function(t,e){},tvR6:function(t,e){},voZl:function(t,e){},wun8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.98786e45468b531d42bf.js.map