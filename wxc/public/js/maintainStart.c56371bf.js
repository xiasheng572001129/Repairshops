(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["maintainStart"],{"0432":function(t,e,i){"use strict";var a=i("1966"),n=i.n(a);n.a},"11e9":function(t,e,i){var a=i("52a7"),n=i("4630"),r=i("6821"),o=i("6a99"),s=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=r(t),e=o(e,!0),c)try{return l(t,e)}catch(i){}if(s(t,e))return n(!a.f.call(t,e),t[e])}},1966:function(t,e,i){},"1f47":function(t,e,i){},"214f":function(t,e,i){"use strict";var a=i("32e9"),n=i("2aba"),r=i("79e5"),o=i("be13"),s=i("2b4c");t.exports=function(t,e,i){var c=s(t),l=i(o,c,""[t]),p=l[0],u=l[1];r(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(n(String.prototype,t,p),a(RegExp.prototype,c,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)}))}},"386d":function(t,e,i){i("214f")("search",1,function(t,e,i){return[function(i){"use strict";var a=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,a):new RegExp(i)[e](String(a))},i]})},"40c4":function(t,e,i){t.exports=i.p+"public/img/plate.a864be92.png"},"423e":function(t,e,i){t.exports=i.p+"public/img/policy.125bca72.png"},5167:function(t,e,i){t.exports=i.p+"public/img/serveEnd.ea991187.png"},"5dbc":function(t,e,i){var a=i("d3f4"),n=i("8b97").set;t.exports=function(t,e,i){var r,o=e.constructor;return o!==i&&"function"==typeof o&&(r=o.prototype)!==i.prototype&&a(r)&&n&&n(t,r),t}},"77d8":function(t,e,i){"use strict";var a=i("1f47"),n=i.n(a);n.a},"8b97":function(t,e,i){var a=i("d3f4"),n=i("cb7c"),r=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return r(t,i),e?t.__proto__=i:a(t,i),t}}({},!1):void 0),check:r}},9093:function(t,e,i){var a=i("ce10"),n=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},aa77:function(t,e,i){var a=i("5ca1"),n=i("be13"),r=i("79e5"),o=i("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),p=RegExp(s+s+"*$"),u=function(t,e,i){var n={},s=r(function(){return!!o[t]()||c[t]()!=c}),l=n[t]=s?e(d):o[t];i&&(n[i]=l),a(a.P+a.F*s,"String",n)},d=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},becb:function(t,e,i){t.exports=i.p+"public/img/license.c861a0b4.png"},c5f6:function(t,e,i){"use strict";var a=i("7726"),n=i("69a8"),r=i("2d95"),o=i("5dbc"),s=i("6a99"),c=i("79e5"),l=i("9093").f,p=i("11e9").f,u=i("86cc").f,d=i("aa77").trim,f="Number",m=a[f],h=m,y=m.prototype,g=r(i("2aeb")(y))==f,v="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():d(e,3);var i,a,n,r=e.charCodeAt(0);if(43===r||45===r){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var o,c=e.slice(2),l=0,p=c.length;l<p;l++)if(o=c.charCodeAt(l),o<48||o>n)return NaN;return parseInt(c,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof m&&(g?c(function(){y.valueOf.call(i)}):r(i)!=f)?o(new h(b(e)),i,m):b(e)};for(var _,I=i("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;I.length>w;w++)n(h,_=I[w])&&!n(m,_)&&u(m,_,p(h,_));m.prototype=y,y.constructor=m,i("2aba")(a,f,m)}},f3d3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"maintain"},[a("div",{staticClass:"viewMain"},[a("h2",{staticClass:"col-32373C"},[t._v("邦保养服务")]),a("div",{staticClass:"whiteBlock"},[a("div",{staticClass:"searchBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.plate,expression:"form.plate"}],attrs:{type:"text",placeholder:"输入车牌号"},domProps:{value:t.form.plate},on:{input:[function(e){e.target.composing||t.$set(t.form,"plate",e.target.value)},t.getRecord]}}),0!=t.plateRecord.length?a("div",{staticClass:"recordBox"},t._l(t.plateRecord,function(e,i){return a("p",{key:i,on:{click:function(i){t.selectPlate(e)}}},[t._v(t._s(e))])})):t._e(),a("button",{on:{click:t.search}},[t._v("查找")]),t.carInfo&&t.carInfo.car_pic?a("img",{staticClass:"plateImg",attrs:{src:t.carInfo&&t.carInfo.car_pic,alt:"",title:"车牌照片"}}):t._e(),t.carInfo&&t.carInfo.name&&2==t.carInfo.if_policy&&1==t.carInfo.put_policy?a("button",{staticStyle:{"margin-left":"20px"},on:{click:function(e){t.openUpload()}}},[t._v("上传保单")]):t._e()]),t.carInfo&&t.carInfo.name?a("div",{staticClass:"carInfo"},[a("div",{staticClass:"card"},[a("table",{staticClass:"infoTabal"},[a("tr",[a("td",[t._v("车型：")]),a("td",[t._v(t._s(t.carInfo.type))]),a("td",[t._v("建议保养里程：")]),a("td",[t._v(t._s(t.carInfo.km))])]),a("tr",[a("td",[t._v("用户名：")]),a("td",[t._v(t._s(t.carInfo.name))]),a("td",[t._v("物料型号：")]),a("td",[t._v("\n                --\n              ")])]),a("tr",[a("td",[t._v("联系方式：")]),a("td",[t._v(t._s(t.carInfo.phone))]),a("td",[t._v("使用数量：")]),a("td",[t._v(t._s(t.carInfo.litre))])]),a("tr",[a("td",[t._v("建议保养周期：")]),a("td",[t._v(t._s(t.carInfo.month))]),a("td",[t._v("服务费"),2!=t.carInfo.free?a("span",{staticStyle:{"font-size":"14px"}},[t._v("(含机滤)")]):t._e(),t._v("：")]),a("td",[t._v(t._s(" "+(parseInt(t.carInfo.hour_charge)+parseInt(t.carInfo.filter))+"  元"))])]),a("tr",[a("td",{staticStyle:{"text-align":"center",color:"red"},attrs:{colspan:"4"}},[a("b",[t._v("推荐用油："+t._s(t.carInfo.oil))])])])]),a("span",{staticClass:"col-32373C"},[t._v("\n            此卡剩余次数："+t._s(t.carInfo.remain_times)+"次\n            "),t.carInfo.msgs?a("span",[t._v("（"+t._s(t.carInfo.msgs)+"）")]):t._e()])]),a("el-form",{ref:"form",staticClass:"elForm",attrs:{model:t.form,"label-width":"120px"}},[2==t.carInfo.free?a("el-form-item",{attrs:{label:"施工图片"}},[a("el-upload",{ref:"upload",attrs:{action:t.uploadUrl,"list-type":"picture-card",limit:1,name:"image",data:{token:t.token},"on-success":t.constructionSuccess,"on-remove":t.constructionRemove}},[a("i",{staticClass:"el-icon-plus"})]),a("div",{staticClass:"constructionInstance",on:{click:function(e){t.viewConstructionImg()}}},[t._v("\n              示例\n            ")])],1):t._e(),2==t.carInfo.free?a("el-form-item",[a("div",{staticStyle:{color:"red"}},[t._v("\n              需清晰上传施工照\n            ")])]):t._e(),t.carInfo.last_mileage?a("el-form-item",{attrs:{label:"上次养护里程"}},[a("span",[t._v(t._s(t.carInfo.last_mileage+"公里"))])]):t._e(),a("el-form-item",{attrs:{label:"本次养护里程"}},[a("el-input",{attrs:{placeholder:"输入本次保养里程（公里）",min:"0",type:"number"},nativeOn:{keyup:function(e){return t.mileageRule(e)}},model:{value:t.form.the_mileage,callback:function(e){t.$set(t.form,"the_mileage",e)},expression:"form.the_mileage"}})],1),""!=t.form.the_mileage?a("el-form-item",{attrs:{label:""}},[a("span",{staticStyle:{color:"#606266"}},[t._v("下次保养里程："+t._s(t.nextMileage)+"公里")])]):t._e(),a("el-form-item",{attrs:{label:"确认码"}},[a("el-input",{attrs:{placeholder:"输入用户确认码",type:"number"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{slot:"append",disabled:t.disabled},on:{click:t.sendCode},slot:"append"},[t._v(t._s(t.time))])],1)],1),a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:2==t.carInfo.free&&t.carInfo.pay_money>0,expression:"carInfo.free==2 && carInfo.pay_money>0"}],staticClass:"submit",attrs:{type:"primary",loading:t.PayLoading},on:{click:function(e){t.pay()}}},[t._v("支付")])],1),a("el-form-item",[a("el-button",{staticClass:"submit",attrs:{type:"primary",loading:t.submitLoading},on:{click:t.submitForm}},[t._v("提交")])],1)],1)],1):a("span",{staticClass:"col-32373C"},[t._v("输入车牌号查找邦保养用户信息")])])]),a("el-dialog",{attrs:{visible:t.dialogVisible,width:"1000px","before-close":t.complate},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"serveDialog"},[a("img",{attrs:{src:i("5167"),alt:""}}),a("span",{staticClass:"col-32373C"},[t._v(t._s(t.Tips))]),a("el-button",{attrs:{type:"primary"},on:{click:t.complate}},[t._v("好的")])],1)]),a("el-dialog",{attrs:{title:t.PayCode.title,center:"",visible:t.PayVisible},on:{"update:visible":function(e){t.PayVisible=e}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.PayCode,expression:"PayCode"}],staticClass:"Paycode"},[a("h1",[t._v(t._s(t.PayCode.bottom))]),a("h2",[t._v(t._s(t.PayCode.detail))]),a("p",[a("img",{attrs:{src:t.PayCode.src}})]),a("el-button",{attrs:{type:"primary",loading:t.PayStatus},on:{click:t.confirmPay}},[t._v("确定")])],1)]),a("el-dialog",{attrs:{title:"上传保单",center:"",visible:t.policyVisible},on:{"update:visible":function(e){t.policyVisible=e},close:function(){t.$refs.form.resetFields(),t.$refs.upload.clearFiles()}}},[a("el-form",{ref:"form",staticStyle:{width:"60%"},attrs:{model:t.policyData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"客户类型: ",prop:"pid"}},[a("el-select",{staticClass:"el-Width",attrs:{placeholder:"请选择保险公司"},model:{value:t.policyData.pid,callback:function(e){t.$set(t.policyData,"pid",e)},expression:"policyData.pid"}},t._l(t.companyList,function(e,i){return a("el-option",{key:i,attrs:{label:e.company,value:e.id}},[t._v(t._s(e.company))])}))],1),a("el-form-item",{attrs:{label:"保单号: ",prop:"policy_num"}},[a("el-input",{staticClass:"el-Width",attrs:{placeholder:"请输入保单号"},model:{value:t.policyData.policy_num,callback:function(e){t.$set(t.policyData,"policy_num",e)},expression:"policyData.policy_num"}})],1),a("el-form-item",{attrs:{label:"投保金额: ",prop:"policy_money"}},[a("el-input",{staticClass:"el-Width",attrs:{placeholder:"请输入投保金额"},model:{value:t.policyData.policy_money,callback:function(e){t.$set(t.policyData,"policy_money",e)},expression:"policyData.policy_money"}})],1),a("el-form-item",{attrs:{label:"投保开始时间: ",prop:"start_time"}},[a("el-date-picker",{staticClass:"el-Width",attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择投保开始时间"},model:{value:t.policyData.start_time,callback:function(e){t.$set(t.policyData,"start_time",e)},expression:"policyData.start_time"}})],1),a("el-form-item",{attrs:{label:"投保结束时间: ",prop:"end_time"}},[a("el-date-picker",{staticClass:"el-Width",attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择投保结束时间"},model:{value:t.policyData.end_time,callback:function(e){t.$set(t.policyData,"end_time",e)},expression:"policyData.end_time"}})],1),a("el-form-item",{attrs:{label:"投保类型: ",prop:"policy_type"}},t._l(t.insuredType,function(e,i){return a("el-button",{key:i,staticClass:"insuredType",attrs:{type:e.checked?"primary":""},on:{click:function(e){t.chooseInsuredType(i)}}},[t._v(t._s(e.type))])})),a("el-form-item",{attrs:{label:"投保图片: ",prop:"pc_img"}},[a("el-upload",{ref:"upload",attrs:{action:t.uploadUrl,"list-type":"picture-card",limit:3,name:"image",data:{token:t.token},"file-list":t.fileList,"on-preview":t.handlePictureCardPreview,"on-success":t.handlePictureCardSuccess,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.magnifyImgVisible,"append-to-body":""},on:{"update:visible":function(e){t.magnifyImgVisible=e}}},[a("img",{attrs:{width:"100%",src:t.magnifyImageUrl,alt:""}})]),a("div",{staticStyle:{color:"red"}},[t._v("上传说明: (含: 车前照、行驶证、保单照片、图片大小不能超过2M)")]),a("div",{staticStyle:{color:"red","line-height":"20px"}},[t._v("\n          1、不符合要求的车辆系统每单自动扣除维修厂120元\n        ")]),a("div",{staticStyle:{color:"red","line-height":"20px"}},[t._v("\n          2、保单信息确保清晰，一经上传，系统不可修改\n        ")]),a("div",{staticStyle:{color:"red",cursor:"pointer"},on:{click:function(e){t.instanceVisible=!0,t.examineShoot()}}},[t._v("查看拍摄实例(请上传清晰的保单图片)")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.uploadLoading},on:{click:t.upload}},[t._v("上传")])],1)],1),a("el-dialog",{attrs:{title:"示例",center:"",visible:t.instanceVisible,"append-to-body":""},on:{"update:visible":function(e){t.instanceVisible=e}}},[a("div",{staticClass:"instance"},[a("img",{ref:"license",attrs:{src:i("becb"),width:"200px",height:"200px"}}),a("img",{ref:"plate",attrs:{src:i("40c4"),width:"200px",height:"200px"}}),a("img",{ref:"policy",attrs:{src:i("423e"),width:"200px",height:"200px"}})])])],1),a("el-dialog",{attrs:{title:"审核保单",center:"",visible:t.auditPolicyVisible},on:{"update:visible":function(e){t.auditPolicyVisible=e}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"保险公司: "}},[t._v("\n        "+t._s(t.PolicyList.company)+"\n      ")]),a("el-form-item",{attrs:{label:"保单号: "}},[t._v("\n        "+t._s(t.PolicyList.policy_num)+"\n      ")]),a("el-form-item",{attrs:{label:"投保开始时间: "}},[t._v("\n        "+t._s(t.PolicyList.start_time)+"\n      ")]),a("el-form-item",{attrs:{label:"投保结束时间: "}},[t._v("\n        "+t._s(t.PolicyList.end_time)+"\n      ")]),a("el-form-item",{attrs:{label:"保单金额: "}},[t._v("\n        "+t._s(t.PolicyList.policy_money)+"元\n      ")]),a("el-form-item",{attrs:{label:"保单险种: "}},[t._v("\n        "+t._s(t.PolicyList.policy_type&&t.PolicyList.policy_type.length>0?t.PolicyList.policy_type.join("、"):"")+"\n      ")]),a("el-form-item",{attrs:{label:"保单图片: "}},t._l(t.PolicyList.pc_img,function(t,e){return a("img",{key:e,ref:"policyImg",refInFor:!0,staticStyle:{"margin-right":"10px"},attrs:{src:t,width:"100px",height:"100px"}})})),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.auditLoading},on:{click:t.audit}},[t._v("审核")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.modifyPolicy()}}},[t._v("修改保单")])],1)],1)],1),a("el-dialog",{attrs:{title:"施工照片",center:"",visible:t.constructionVisible,width:"25%"},on:{"update:visible":function(e){t.constructionVisible=e}}},[a("div",{staticClass:"constructionImg"},t._l(t.constructionImgList,function(e,i){return a("div",{key:i},[a("img",{ref:"constructionImg",refInFor:!0,attrs:{src:e.image}}),a("p",[t._v(t._s(e.title))])])}))])],1)},n=[],r=(i("20d6"),i("f751"),i("ac6a"),i("be94")),o=(i("96cf"),i("1da1")),s=(i("386d"),i("c5f6"),i("4328")),c=i.n(s),l=i("2fa4"),p=i.n(l),u=(i("0c97"),i("4362")),d={data:function(){return{token:window.localStorage.getItem("token"),form:{plate:"",code:"",the_mileage:""},plateRecord:[],last_mileage:"",carInfo:{},time:"发送验证码",disabled:!1,dialogVisible:!1,PayVisible:!1,PayLoading:!1,PayCode:{},PayStatus:!1,Tips:"",policyVisible:!1,magnifyImgVisible:!1,magnifyImageUrl:"",uploadLoading:!1,submitLoading:!1,policyData:{cid:"",sid:"",uid:"",pid:"",policy_num:"",policy_money:"",start_time:"",end_time:"",policy_type:[],pc_img:[]},insuredType:[],companyList:[],instanceVisible:!1,auditPolicyVisible:!1,PolicyList:{},auditLoading:!1,fileList:[],constructionVisible:!1,constructionImgList:[{image:"https://xmp.ctbls.com/uploads/Gift/20200109/sencnd.png",title:"施工照"}],oil_photo:[]}},computed:{nextMileage:function(){return this.form.the_mileage<0?Number(this.carInfo.km):Number(this.carInfo.km)+Number(this.form.the_mileage)},ThisTimeMileage:function(){return this.form.the_mileage}},watch:{ThisTimeMileage:function(t){t<0&&(this.form.the_mileage=1)}},methods:{selectPlate:function(t){this.form.plate=t,this.plateRecord=[],this.search()},getRecord:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["sb"])(this.form.plate);case 2:e=t.sent,console.log(e.data),this.plateRecord=e.data;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mileageRule:function(){},search:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=window.localStorage.getItem("shop_type"),2!=e){t.next=4;break}return this.$confirm("暂无权限","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",showClose:!1,closeOnClickModal:!0,closeOnPressEscape:!0,center:!0}),t.abrupt("return");case 4:return t.next=6,Object(u["ec"])(this.form.plate);case 6:i=t.sent,1==i.data.code?this.carInfo=i.data.data:(this.carInfo={},this.$message({message:i.data.msg,type:"warning"})),this.getCompany();case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),sendCode:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,e.time=10,e.disabled=!0,i=window.setInterval(function(){e.time--,e.time<0&&(e.time="重新发送",e.disabled=!1,window.clearInterval(i))},1e3),t.next=6,Object(u["fc"])(this.carInfo.phone,this.carInfo.card_number);case 6:a=t.sent,1==a.data.code?this.$message({message:a.data.msg,type:"success"}):this.$message({message:a.data.msg,type:"warning"});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),pay:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.PayLoading=!0,t.next=4,Object(u["k"])({sid:this.carInfo.sid,uid:this.carInfo.uid,pay_money:this.carInfo.pay_money,oid:this.carInfo.oid,cid:this.carInfo.cid});case 4:e=t.sent,this.PayCode=e.data.data||{},1==e.data.code?this.PayVisible=!0:(this.$message({message:e.data.msg,type:"warning"}),this.PayVisible=!1),this.PayLoading=!1,t.next=14;break;case 10:throw t.prev=10,t.t0=t["catch"](0),this.PayLoading=!1,t.t0;case 14:case"end":return t.stop()}},t,this,[[0,10]])}));return function(){return t.apply(this,arguments)}}(),confirmPay:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.PayStatus=!0,t.next=4,Object(u["b"])({sid:this.carInfo.sid,cid:this.carInfo.cid,uid:this.carInfo.uid});case 4:e=t.sent,this.PayStatus=!1,1==e.data.data.status?(this.$message({message:e.data.data.detail,type:"success"}),this.PayVisible=!1,this.search()):this.$message.error(e.data.data.detail),t.next=13;break;case 9:throw t.prev=9,t.t0=t["catch"](0),this.PayStatus=!1,t.t0;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),submitForm:function(){var t=this;this.$confirm("是否提交?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark(function e(){var i,a,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=t.form,a=t.carInfo,n=c.a.stringify(Object(r["a"])({},i))+"&"+c.a.stringify(Object(r["a"])({},a))+"&"+c.a.stringify({oil_photo:t.oil_photo&&t.oil_photo.length>0?t.oil_photo:""}),t.submitLoading=!0,e.next=5,Object(u["pc"])(c.a.parse(n));case 5:o=e.sent,t.submitLoading=!1,1==o.data.code?(t.dialogVisible=!0,t.Tips=o.data.msg,t.oil_photo=[]):t.$message({message:o.data.msg,type:"warning"});case 8:case"end":return e.stop()}},e,this)}))).catch(function(){})},complate:function(){this.form={plate:"",code:"",the_mileage:""},this.carInfo={},this.dialogVisible=!1},chooseInsuredType:function(t){this.insuredType[t].checked=!this.insuredType[t].checked;var e=[];this.insuredType.filter(function(t){return t.checked}).forEach(function(t){e.push(t.type)}),this.policyData.policy_type=e},openUpload:function(){var t=this;this.policyVisible=!0;try{this.policyTypeList().then(function(e){var i=e;2==t.carInfo.put_policy?i.forEach(function(e){t.policyData.policy_type.forEach(function(t){e.type==t&&(e=Object.assign(e,{checked:!0}))})}):i.forEach(function(t){t=Object.assign(t,{checked:!1})}),t.insuredType=i||[]})}catch(e){throw e}},policyTypeList:function(){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,i){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u["Xb"])();case 3:a=t.sent,e(a.data.data||[]),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),i(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e,i){return t.apply(this,arguments)}}())},getCompany:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u["h"])({sid:this.carInfo.sid});case 3:e=t.sent,this.companyList=e.data.data||[],t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0;case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),handlePictureCardPreview:function(t){this.magnifyImageUrl=t.url,this.magnifyImgVisible=!0},handlePictureCardSuccess:function(t){this.policyData.pc_img.push(t)},handleRemove:function(t){var e=this.policyData.pc_img.findIndex(function(e){return e==t.response});this.policyData.pc_img.splice(e,1)},examineShoot:function(){var t=this;this.$nextTick(function(){var e=t.$refs,i=e.license,a=e.plate,n=e.policy,r=[i,a,n];r.forEach(function(t){new p.a(t)})})},upload:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.uploadLoading=!0,t.next=4,Object(u["wc"])(Object.assign(this.policyData,{sid:this.carInfo.sid,uid:this.carInfo.uid,cid:this.carInfo.cid}));case 4:e=t.sent,this.uploadLoading=!1,1==e.data.code?(this.$message({message:e.data.msg,type:"success"}),this.policyVisible=!1,this.auditPolicyVisible=!1,this.search()):this.$message.error(e.data.msg),t.next=13;break;case 9:throw t.prev=9,t.t0=t["catch"](0),this.uploadLoading=!1,t.t0;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),auditPolicy:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.auditPolicyVisible=!0,t.next=4,Object(u["Zb"])({uid:this.carInfo.uid,cid:this.carInfo.cid});case 4:e=t.sent,this.PolicyList=e.data.data||{},this.ImgAmplification("policyImg"),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](0),t.t0;case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),audit:function(){var t=this;this.$confirm("此操作将审核保单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(Object(o["a"])(regeneratorRuntime.mark(function e(){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.auditLoading=!0,e.next=4,Object(u["A"])({sid:t.carInfo.sid,uid:t.carInfo.uid,cid:t.carInfo.cid});case 4:i=e.sent,t.auditLoading=!1,1==i.data.code?(t.$message({message:i.data.msg,type:"success"}),t.auditPolicyVisible=!1,t.search()):t.$message.error(i.data.msg),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](0),t.auditLoading=!1,e.t0;case 13:case"end":return e.stop()}},e,this,[[0,9]])})))},modifyPolicy:function(){var t=this;this.$nextTick(function(){t.policyData=t.PolicyList,t.fileList=t.PolicyList.pc_img.map(function(t){return{url:t}}),t.openUpload()})},viewConstructionImg:function(){this.constructionVisible=!0,this.ImgAmplification("constructionImg")},constructionSuccess:function(t){this.oil_photo.push(t)},constructionRemove:function(t){var e=this.oil_photo.findIndex(function(e){return e==t.response});this.oil_photo.splice(e,1)},ImgAmplification:function(t){var e=this;this.$nextTick(function(){var i=e.$refs[t];console.log(i),i.forEach(function(t){new p.a(t)})})}}},f=d,m=(i("77d8"),i("0432"),i("2877")),h=Object(m["a"])(f,a,n,!1,null,"9c063bea",null);h.options.__file="maintainStart.vue";e["default"]=h.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=maintainStart.c56371bf.js.map