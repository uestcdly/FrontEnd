// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from "vue-router";
import router from './router' //自动扫描里面的路由配置

Vue.config.productionTip = false

// //显式声明使用vueRouter
// Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  components: { App },
  template: '<App/>'
})
