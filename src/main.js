// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */

import Vue from 'vue';
import App from './App';
import router from './router';
import * as axios from './config/api.js';
// import Vuex from 'vuex'; // 状态容器
import store from './store';
import ElementUI from 'element-ui'; // 饿了么ui控件
import 'element-ui/lib/theme-chalk/index.css'; // 饿了么 scss 样式文件
import '../src/styles/element.scss';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // 饿了么UI控件 文字 中文
import 'nprogress/nprogress.css'; // 顶部加载条 样式

import * as notice from './utils/notice';
import {map} from './config/menus';

// Vue.use(Vuex);
Vue.use(ElementUI, {
  locale
});
Vue.config.productionTip = false; // 来关闭生产模式下给出的提示

// 把网络请求挂载到Vue对象上 使用：this.$axios
Vue.prototype.$axios = axios;
Vue.prototype.$notice = notice;
Vue.prototype.$routesMap = map;



// vuex 容器管理复杂业务,后台管理系统 解耦性很高这里可以直接用vue实例挂载上去
// Vue.prototype.$username =store.getters.username; 
// Vue.prototype.$uuid =store.getters.uuid; 
// Vue.prototype.$token =store.getters.token; 
// console.dir()

router.beforeEach((to, from, next) => {
  notice.proStart();
  if (store.state.data.token === '' || typeof (store.state.data.token) === 'undefined') {
    if (!to.meta.requireAuth) {
      notice.proDone();

      next({
        path: '/login',
        replace: true
      });
    } else {
      notice.proDone();
      next();
    }
  } else {
    if (from.fullPath === '/') {
      if (to.meta.hasTokenAllowTo) { // true 时跳转到主页 
        notice.proDone();
        next({
          path: '/main',
          replace: true
        });
      } else {
        notice.proDone();
        next();
      }
    }
    notice.proDone();
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
