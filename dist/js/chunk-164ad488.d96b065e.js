(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-164ad488"],{"7f7f":function(e,t,o){var l=o("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,n="name";n in i||o("9e1e")&&l(i,n,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},bda4:function(e,t,o){"use strict";var l=o("cd29"),i=o.n(l);i.a},cd29:function(e,t,o){},d3b0:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[e._v("个人信息")])]),o("el-form",{ref:"form",staticClass:"profile",attrs:{model:e.profile,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[o("el-input",{model:{value:e.profile.nickname,callback:function(t){e.$set(e.profile,"nickname",t)},expression:"profile.nickname"}})],1),o("el-form-item",{attrs:{label:"个人介绍",prop:"bio"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.profile.bio,callback:function(t){e.$set(e.profile,"bio",t)},expression:"profile.bio"}})],1),o("el-form-item",{attrs:{label:"URL",prop:"url"}},[o("el-input",{model:{value:e.profile.url,callback:function(t){e.$set(e.profile,"url",t)},expression:"profile.url"}})],1),o("el-form-item",{attrs:{label:"公司",prop:"company"}},[o("el-input",{model:{value:e.profile.company,callback:function(t){e.$set(e.profile,"company",t)},expression:"profile.company"}})],1),o("el-form-item",{attrs:{label:"地址",prop:"location"}},[o("el-input",{model:{value:e.profile.location,callback:function(t){e.$set(e.profile,"location",t)},expression:"profile.location"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保存")])],1)],1)],1)},i=[],r=(o("7f7f"),{data:function(){return{profile:{},rules:{}}},methods:{loadInfo:function(){var e=this;this.$moreu.profileGet().then((function(t){e.profile=t.data.profile}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.$moreu.updateProfile(t.profile).then((function(e){t.$message({type:"success",message:"保存成功!"}),t.loadInfo()}))}))}},mounted:function(){this.loadInfo()}}),n=r,a=(o("bda4"),o("2877")),c=Object(a["a"])(n,l,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-164ad488.d96b065e.js.map