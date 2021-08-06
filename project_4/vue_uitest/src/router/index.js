import Vue from 'vue'
import VueRouter from 'vue-router'

import login from "../View/login";
import Main from "../View/Main";

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      //登录页
      path:"/login",
      name:"login",
      component:login
    },{
      //首页
      path:"/main",
      name:"main",
      component:Main
    }
  ]
})
