(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a1798922"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,a[1](c)}o[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01cb":function(t,e,a){t.exports=a.p+"img/ZoneC.b4e74d30.jpg"},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"03a7":function(t,e,a){t.exports=a.p+"img/psu.28549ef1.png"},"0b69":function(t,e,a){},"121c":function(t,e,a){t.exports=a.p+"img/ZoneF.e3c38799.jpg"},1918:function(t,e,a){t.exports=a.p+"img/register.c3df0a85.png"},"1e8d":function(t,e,a){"use strict";var n=a("683b"),o=a.n(n);o.a},3967:function(t,e,a){"use strict";var n=a("cfe9"),o=a.n(n);o.a},4360:function(t,e){},"525c":function(t,e,a){t.exports=a.p+"img/ZoneE.d36375c4.jpg"},"53e4":function(t,e,a){t.exports=a.p+"img/ZoneB.6b66c5c8.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-expand-md  fixed-top navbar-dark bg-dark mb-4"},[a("b-navbar-brand",[a("img",{staticClass:"d-inline-block align-left",attrs:{src:"https://eila.psu.ac.th/wp-content/uploads/2019/10/logo_psu-white512.png",width:"20%",height:"20%"}})]),t._m(0)],1),a("br"),a("br"),a("br"),a("router-view")],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Home")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[a("ul",{staticClass:"navbar-nav me-auto mb-2 mb-md-0"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"/Data"}},[t._v("ข้อมูลพืชพรรณ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/AddData"}},[t._v("การจัดการข้อมูลพรรณพืช")])])]),a("form",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit",align:"center"}},[t._v("Logout")])])])])}],r=(a("4989"),a("ab8b"),a("5f5b")),i=a("b1e0"),l=(a("f9e3"),a("2dd8"),a("8c4f")),c=a("8aa5"),u=a.n(c);n["default"].use(r["a"]),n["default"].use(i["a"]);var p={name:"app",setup(){const t=Object(l["useRouter"])(),e=Object(l["useRoute"])();Object(n["onBeforeMount"])(()=>{u.a.auth().onAuthStateChanged(a=>{a?"/login"!==e.path&&"/register"!==e.path||t.replace("/"):t.replace("/login")})})}},d=p,m=(a("034f"),a("2877")),v=Object(m["a"])(d,o,s,!1,null,null,null),b=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",attrs:{align:"center"}},[n("br"),n("img",{attrs:{alt:"Vue be",src:a("d68e"),width:"900",height:"550"}}),n("br"),n("br"),n("HelloWorld",{attrs:{msg:"โครงการอนุรักษ์พันธุกรรมพืช ฯ  (อพ.สธ.) "}}),n("h1",{attrs:{align:"center"}},[t._v("มหาวิทยาลัยสงขลานครินทร์")]),n("br"),n("br"),n("img",{attrs:{alt:"Vue map2",src:a("7b91"),width:"700",height:"500"}}),t._v(" "),n("br"),n("br"),n("br"),t._m(0),n("br"),n("br"),n("h3",{attrs:{align:"left"}},[t._v("ประวัติโครงการ")]),n("br"),n("h4",{attrs:{align:"left"}},[t._v(" โครงการอนุรักษ์ตันหม้อข้าวหม้อแกงลิง มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตตรัง ")]),n("br"),n("img",{attrs:{alt:"Vue ff",src:a("6553"),width:"350",height:"300"}}),t._v(" "),n("br"),n("br"),n("div",{attrs:{align:"left"}},[n("h7",[t._v(" ตามที่มหาวิทยาลัยสงขลานครินทร์ ได้รับพระราชทานพระราชานุญาตดำเนินงาน โครงการอันเนื่องมาจากพระราชดำริในโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ สมเด็จพระเทพรัตนราชสุดา ฯ สยามบรมราชกุมารี (อพ.สธ.)และต่อมามหาวิทยาลัยได้รับแจ้ง การประสานจากวิทยาเขตตรังถึงการสำรวจพื้นที่ภายในวิทยาเขต ")])],1),n("div",{attrs:{align:"left"}},[n("h7",[t._v(" พบว่ามีพรรณพืชหายากและพืชท้องถิ่นภายในวิทยาเขตจึงมีความประสงค์ขอนำพื้นที่ บริเวณที่สำรวจพบพรรณพืชดังกล่าวเข้าร่วมสนองพระราชดำริฯในโครงการอนุรักษ์พันธุกรรมพืช อันเนื่องมาจากพระราชดำริฯ จึงนำพื้นที่ที่สำรวจพบต้นหม้อข้าวหม้อแกงลิงและพืชหายาก ภายในมหาวิทยาลัยสงขลานครินทร์ วิทยาเขตตรัง เข้าร่วมสนองพระราชดำริในโครงการอนุรักษ์ อันเนื่องมาจากพระราชดำริฯโดยมีเนื้อที่ทั้งสิ้น 6 ไร่ 2 งาน 51 ตารางวาและมหาวิทยาลัย ได้จัดทำหนังสือขอนำพื้นที่ดังกล่าวเข้าร่วมสนองพระราชดำริในโครงการอนุรักษ์ พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ(อพ.สธ.) เมื่อวันที่ 28 พฤษภาคม 2557 ")])],1),n("br"),n("br"),t._m(1),n("br"),t._m(2)],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("table",[n("br"),n("br"),n("div",{staticClass:"a"},[n("a",{attrs:{href:"/zoneA"}},[n("img",{attrs:{src:a("69f2"),vspace:"4",hspace:"4",width:"300",height:"180"}})]),n("a",{attrs:{href:"/zoneB"}},[n("img",{attrs:{src:a("53e4"),vspace:"4",hspace:"4",width:"300",height:"180"}})]),n("a",{attrs:{href:"/zoneC"}},[n("img",{attrs:{src:a("01cb"),vspace:"4",hspace:"4",width:"300",height:"180"}})])]),n("div",{staticClass:"a"},[n("a",{attrs:{href:"/zoneD"}},[n("img",{attrs:{src:a("c77d"),vspace:"4",hspace:"4",width:"300",height:"180"}})]),n("a",{attrs:{href:"/zoneE"}},[n("img",{attrs:{src:a("525c"),vspace:"4",hspace:"4",width:"300",height:"180"}})]),n("a",{attrs:{href:"/zoneF"}},[n("img",{attrs:{src:a("121c"),vspace:"4",hspace:"4",width:"300",height:"180"}})])]),n("div",{staticClass:"a"},[n("a",{attrs:{href:"/zoneG"}},[n("img",{attrs:{src:a("937e"),vspace:"5",hspace:"5",width:"300",height:"180"}})]),n("a",{attrs:{href:"/zoneH"}},[n("img",{attrs:{src:a("f97d"),vspace:"5",hspace:"5",width:"300",height:"180"}})]),n("a",{attrs:{href:"/zoneI"}},[n("img",{attrs:{src:a("ceaa"),vspace:"5",hspace:"5",width:"300",height:"180"}})])]),n("br"),n("br")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("img",{attrs:{alt:"Vue coc1",src:a("f5b4"),width:"250"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",[n("img",{attrs:{alt:"Vue psu",src:a("03a7"),width:"250"}})])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},y=[],_={name:"HelloWorld",props:{msg:String}},C=_,w=(a("6067"),Object(m["a"])(C,g,y,!1,null,"21bb3bb3",null)),x=w.exports,Z={name:"Home",components:{HelloWorld:x}},z=Z,j=(a("cccb"),Object(m["a"])(z,f,h,!1,null,null,null)),E=j.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container "},[a("br"),a("h1",{attrs:{align:"center"}},[t._v("ข้อมูลพืชพรรณ")]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 border"},[a("div",{staticClass:"show",staticStyle:{width:"20rem",hight:"25rem"},attrs:{"mt-3":""}}),t._l(t.contacts,(function(e,n){return a("div",{key:n},[a("br"),a("br"),a("img",{staticClass:"card-img-top",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBzWgc85I8N1iEkTK4UekW9wpt7A4PcP3J7A&usqp=CAU",alt:"card image cap"}}),a("br"),a("div",{staticClass:"card-body"},[a("b-card",{attrs:{"bg-variant":"success","text-variant":"white",title:""}},[a("b-card-text",[a("p",[t._v("ชื่อ : "+t._s(e.name))]),a("p",[t._v("ชื่อวิทยาศาสตร์ : "+t._s(e.style))]),a("p",[t._v("ประเภท : "+t._s(e.category))]),a("p",[t._v("บริเวณที่พบ : "+t._s(e.Zone))])])],1)],1)])}))],2)])])},k=[];const A={apiKey:"AIzaSyD15ifNbyeWtxy-tnNIVyI4nYJs3_rhHUA",authDomain:"projectone-ce602.firebaseapp.com",databaseURL:"https://projectone-ce602.firebaseio.com",projectId:"projectone-ce602",storageBucket:"projectone-ce602.appspot.com",messagingSenderId:"474368809432",appId:"1:474368809432:web:e2b626d569682d4ce67aad",measurementId:"G-KR6XNKD9Z9"};c["initializeApp"](A),c["analytics"]();var I=c;const D=I.database(),F=D.ref("/contacts");var P={name:"AddData",data(){return{contacts:{},name:"",style:"",category:"",zone:""}},mounted(){F.on("value",t=>{this.contacts=t.val()})}},N=P,S=(a("1e8d"),Object(m["a"])(N,O,k,!1,null,"5030cece",null)),$=S.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("br"),a("br"),a("h1",{attrs:{align:"center"}},[t._v("การจัดการข้อมูลพรรณพืช")]),t._m(0),a("br"),a("br"),a("button",{staticClass:"btn btn-primary",staticStyle:{width:"3cm"},attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v(" + เพิ่มข้อมูล ")]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg"},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",[a("br"),a("label",{attrs:{for:"username"}},[t._v(" ชื่อ (Name) ")]),t._v(" "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",size:"90px",placeholder:"กรอกชื่อ"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",[a("br"),a("label",{attrs:{for:"username"}},[t._v(" ชื่อวิทยาศาสตร์ (Science name) ")]),t._v(" "),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.style,expression:"style"}],attrs:{type:"text",size:"90px",placeholder:"กรอกชื่อวิทยาศาสตร์"},domProps:{value:t.style},on:{input:function(e){e.target.composing||(t.style=e.target.value)}}})]),a("div",[a("label",{attrs:{for:"username"}},[t._v(" ประเภท (Category) ")]),t._v(" "),a("br"),a("b-form-select",{staticClass:"mb-3",attrs:{placeholder:"กดเลือกประเภท",options:t.options},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- กดเลือกประเภท--")])]},proxy:!0}]),model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},[a("b-form-select-option",{attrs:{value:"เฟิร์นและพืชใกล้เคียงเฟิร์น"}},[t._v("กลุ่มเฟิร์นและพืชใกล้เคียงเฟิร์น (FERN and FERN ALLIES)")]),a("b-form-select-option",{attrs:{value:"พืชเมล็ดเปลือย "}},[t._v("กลุ่มพืชเมล็ดเปลือย (GYMNOSPERM)")]),a("b-form-select-option",{attrs:{value:"พืชใบเลี้ยงเดี่ยว"}},[t._v("กลุ่มพืชใบเลี้ยงเดี่ยว (MONOCOTYLEDON)")]),a("b-form-select-option",{attrs:{value:"พืชใบเลี้ยงคู่"}},[t._v("กลุ่มพืชใบเลี้ยงคู่ (DICOTYLEDON)")])],1)],1),a("div",[a("label",{attrs:{for:"username"}},[t._v(" บริเวณที่พบ")]),t._v(" "),a("br"),a("b-form-select",{staticClass:"mb-3",attrs:{placeholder:"กดเลือกบริเวณที่พบ",options:t.options},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- กดเลือกบริเวณที่พบ--")])]},proxy:!0}]),model:{value:t.Zone,callback:function(e){t.Zone=e},expression:"Zone"}},[a("b-form-select-option",{attrs:{value:"Zone A"}},[t._v("ZoneA")]),a("b-form-select-option",{attrs:{value:"Zone B"}},[t._v("ZoneB")]),a("b-form-select-option",{attrs:{value:"Zone C"}},[t._v("Zone C")]),a("b-form-select-option",{attrs:{value:"Zone D"}},[t._v("Zone D")]),a("b-form-select-option",{attrs:{value:"Zone E"}},[t._v("Zone E")]),a("b-form-select-option",{attrs:{value:"Zone F"}},[t._v("Zone F")]),a("b-form-select-option",{attrs:{value:"Zone G"}},[t._v("Zone G")]),a("b-form-select-option",{attrs:{value:"Zone H"}},[t._v("Zone H")]),a("b-form-select-option",{attrs:{value:"Zone I"}},[t._v("Zone I")])],1)],1),t._m(2),a("div"),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.insertToContact(t.name,t.style,t.category,t.Zone,t.myFile)}}},[t._v(" Save ")])])])])])]),a("br"),a("br"),a("br"),a("table",{staticClass:"table table-bordered text-center "},[t._m(3),t._l(t.contacts,(function(e,n){return a("tbody",{key:n},[t.updateKey===n?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatename,expression:"updatename"}],attrs:{type:"text",placeholder:" ชื่อ (Name)"},domProps:{value:t.updatename},on:{input:function(e){e.target.composing||(t.updatename=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatestyle,expression:"updatestyle"}],attrs:{type:"text",placeholder:"ชื่อวิทยาศาสตร์ (Science name)"},domProps:{value:t.updatestyle},on:{input:function(e){e.target.composing||(t.updatestyle=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatecategory,expression:"updatecategory"}],attrs:{type:"text",placeholder:"ประเภท (Class)"},domProps:{value:t.updatecategory},on:{input:function(e){e.target.composing||(t.updatecategory=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatezone,expression:"updatezone"}],attrs:{type:"text",placeholder:"บริเวณที่พบ (Zone)"},domProps:{value:t.updatezone},on:{input:function(e){e.target.composing||(t.updatezone=e.target.value)}}}),a("input",{staticClass:"form-control-file",attrs:{type:"file",size:"80px",id:"myFile"}}),a("button",{on:{click:function(e){return t.updateContact(t.updatename,t.updatestyle,t.updatecategory,t.updatezone,t.updatemyFile)}}},[t._v(" Save ")])]):a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.name))]),a("th",{attrs:{scope:"row"}},[t._v(t._s(e.style))]),a("th",{attrs:{scope:"row"}},[t._v(t._s(e.category))]),a("th",{attrs:{scope:"row"}},[t._v(t._s(e.Zone))]),a("th",{attrs:{scope:"row"}},[t._v(t._s(e.myFile))]),a("td",[a("button",{staticClass:"btn btn-success",on:{click:function(a){return t.setUpdateContact(n,e)}}},[t._v(" แก้ไข(Edit)")]),t._v(" "),a("i",{staticClass:"fas fa-trash-alt"}),a("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteContact(n)}}},[t._v("ลบ (Delete)")])])])])}))],2)])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",attrs:{tabindex:"-1"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Add Data")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Save")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("เพิ่มข้อมูล (Add Data)")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("label",{attrs:{for:"myFile"}},[t._v(" เลือกไฟล์ ")]),a("br"),a("input",{staticClass:"form-control-file",attrs:{type:"file",size:"80px",id:"myFile"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"table-active"},[a("tr",[a("th",{attrs:{scope:"col-9"}},[t._v("ชื่อ (Name)")]),a("th",{attrs:{scope:"col-6"}},[t._v("ชื่อวิทยาศาสตร์ (Science name)")]),a("th",{attrs:{scope:"col-6"}},[t._v("ประเภท (Category)")]),a("th",{attrs:{scope:"col-6"}},[t._v("บริเวณที่พบ (Zone)")]),a("th",{attrs:{scope:"col-6"}},[t._v("รูปภาพ (Image)")]),a("th",{attrs:{scope:"col-6"}})])])}];const M=I.database(),R=M.ref("/contacts");var T={name:"AddData",data(){return{contacts:{},name:"",style:"",category:"",zone:"",myFile:"",updatename:"",updatestyle:"",updatecategory:"",updateKey:"",updatezone:"",updatemyFile:""}},methods:{insertToContact(t,e,a,n,o){const s={name:t,style:e,category:a,Zone:n,myFile:o};R.push(s),this.name="",this.style="",this.category="",this.Zone="",this.myFile=""},setUpdateContact(t,e){this.updateKey=t,this.updatename=e.name,this.updatestyle=e.style,this.updatecategory=e.category,this.updatezone=e.Zone,this.updatemyFile=e.myFile},updateContact(t,e,a,n,o){R.child(this.updateKey).update({name:t,style:e,category:a,Zone:n,myFile:o}),this.updateKey="",this.updatename="",this.updatestyle="",this.updatecategory="",this.updatezone="",this.updatemyFile=""},deleteContact(t){R.child(t).remove()}},mounted(){R.on("value",t=>{this.contacts=t.val()})},category(){return{category:null,options:[{value:null},{value:"เฟิร์นและพืชใกล้เคียงเฟิร์น"},{value:"พืชเมล็ดเปลือย"},{value:"พืชใบเลี้ยงเดี่ยว"},{value:"พืชใบเลี้ยงคู่"}]}},Zone(){return{Zone:null,options:[{value:null},{value:"Zone A"},{value:"Zone B"},{value:"Zone C"},{value:"Zone D"},{value:"Zone E"},{value:"Zone F"},{value:"Zone G"},{value:"Zone H"},{value:"Zone I"}]}}},B=T,G=(a("3967"),Object(m["a"])(B,H,L,!1,null,"31560564",null)),U=G.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-form",[a("v-text-field",{attrs:{label:"Email"},model:{value:t.loginInfo.email,callback:function(e){t.$set(t.loginInfo,"email",e)},expression:"loginInfo.email"}}),a("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.loginInfo.password,callback:function(e){t.$set(t.loginInfo,"password",e)},expression:"loginInfo.password"}}),a("v-btn",{on:{click:t.loginUser}},[t._v("Login")])],1)],1)},W=[],V={data(){return{loginInfo:{email:"",password:""}}},methods:{async loginUser(){const t=await this.$store.dispatch("loginUser",this.loginInfo);t.error?Object(n["alert"])(t.error):Object(n["alert"])("Thank you for signing in, "+t.name)}}},J=V,Y=Object(m["a"])(J,K,W,!1,null,"fdf77bbe",null),q=Y.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("h1",[t._v("Register")]),n("br"),n("img",{attrs:{alt:"register",src:a("1918"),width:"200",height:"200"}}),n("br"),n("br"),n("br"),n("form",{on:{submit:function(e){return e.preventDefault(),t.Register(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Register"}}),n("p",[t._v("Have an account? "),n("router-link",{attrs:{to:"/login"}},[t._v("Login Here")])],1)])])},X=[],tt={setup(){const t=Object(n["ref"])(""),e=Object(n["ref"])(""),a=()=>{u.a.auth().createUserWithEmailAndPassword(t.value,e.value).then(t=>{Object(n["alert"])(t)}).catch(t=>Object(n["alert"])(t.message))};return{Register:a,email:t,password:e}}},et=tt,at=Object(m["a"])(et,Q,X,!1,null,null,null),nt=at.exports;n["default"].use(l["a"]);const ot=[{path:"/",name:"Home",component:E},{path:"/Data",name:"Data",component:$},{path:"/Login",name:"Login",component:q},{path:"/Register",name:"egister",component:nt},{path:"/AddData",name:"AddData",component:U},{path:"/zoneA",name:"zoneA",component:()=>a.e("about").then(a.bind(null,"df44"))},{path:"/zoneB",name:"zoneB",component:()=>a.e("about").then(a.bind(null,"b9cc"))},{path:"/zoneC",name:"zoneC",component:()=>a.e("about").then(a.bind(null,"4aee"))},{path:"/zoneD",name:"zoneD",component:()=>a.e("about").then(a.bind(null,"71a6"))},{path:"/zoneE",name:"zoneE",component:()=>a.e("about").then(a.bind(null,"ac05"))},{path:"/zoneF",name:"zoneF",component:()=>a.e("about").then(a.bind(null,"114a"))},{path:"/zoneG",name:"zoneG",component:()=>a.e("about").then(a.bind(null,"4d8d"))},{path:"/zoneH",name:"zoneH",component:()=>a.e("about").then(a.bind(null,"e73d"))},{path:"/zoneI",name:"zoneI",component:()=>a.e("about").then(a.bind(null,"11eb"))}],st=new l["a"]({mode:"history",base:"/",routes:ot});var rt=st,it=a("4360"),lt=a.n(it);n["default"].config.productionTip=!1,new n["default"]({router:rt,store:lt.a,render:t=>t(b)}).$mount("#app")},"5ced":function(t,e,a){},6067:function(t,e,a){"use strict";var n=a("0b69"),o=a.n(n);o.a},6553:function(t,e,a){t.exports=a.p+"img/ff.139b220e.jpg"},"683b":function(t,e,a){},"69f2":function(t,e,a){t.exports=a.p+"img/ZoneA.2201cd21.jpg"},"7b91":function(t,e,a){t.exports=a.p+"img/map.a6cffac6.jpg"},"85ec":function(t,e,a){},"937e":function(t,e,a){t.exports=a.p+"img/ZoneG.e41b4a84.jpg"},c77d:function(t,e,a){t.exports=a.p+"img/ZoneD.85725daf.jpg"},cccb:function(t,e,a){"use strict";var n=a("5ced"),o=a.n(n);o.a},ceaa:function(t,e,a){t.exports=a.p+"img/ZoneI.e1c27389.jpg"},cfe9:function(t,e,a){},d68e:function(t,e,a){t.exports=a.p+"img/bg.cd50a81a.png"},f5b4:function(t,e,a){t.exports=a.p+"img/coc1.6eb136cf.png"},f97d:function(t,e,a){t.exports=a.p+"img/ZoneH.0c63a819.jpg"}});
//# sourceMappingURL=app.93de16e8.js.map