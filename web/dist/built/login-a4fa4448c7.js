webpackJsonp([18],[function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=a(1),r=s(o),l=a(9),i=s(l);new r["default"]({el:"#login",data:{password:null,email:null,params:{},remember:!1},created:function(){if(location.search)switch(this.params=i["default"].getQueryParams(location.search),this.params.status){case"expired":toastr.warning("会话已过期");break;case"success":toastr.success("操作成功")}var e=this;setTimeout(function(){$("#email").focus(),1==localStorage.getItem("login.remember")&&(e.email=localStorage.getItem("user.email")||"",e.password=localStorage.getItem("user.password")||"",e.remember=!0)},100)},methods:{submit:function(){if(this.$validate(!0),!this.$form.valid)return!1;var e=this;i["default"].post("/login.json",{email:this.email,password:this.password},function(t){e.remember?(localStorage.setItem("user.email",e.email),localStorage.setItem("user.password",e.password),localStorage.setItem("login.remember","1")):(localStorage.setItem("user.email",""),localStorage.setItem("user.password",""),localStorage.setItem("login.remember","0")),i["default"].login.success(t.data.token,t.data.user,e.params.refer)})},qq:function(){i["default"].login.qq()},weibo:function(){i["default"].login.weibo()},github:function(){i["default"].login.github()}}})}]);