/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';

// 主框架
let major = () =>
  import ('@/pages/major/index');
// 找回密码
let findPassword = () =>
  import ('@/pages/findPassword/index');

// 登录
let login = () =>
  import ('@/pages/login/index');
// 登录
let passwordLogin = () =>
  import ('@/pages/login/password/index');
// 登录
let codeLogin = () =>
  import ('@/pages/login/code/index');

Vue.use(Router);


export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [{
      path: '*',
      redirect: '/main',
      meta: {
        requireAuth: true,
        hasTokenAllowTo: false,

      },
    },
    {
      path: '/main',
      name: 'main',
      component: major,
      meta: {
        requireAuth: false,
        hasTokenAllowTo: false,


      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [{
          path: 'password',
          name: 'password',
          component: passwordLogin,
          meta: {
            requireAuth: true,
            hasTokenAllowTo: true,

          }
        },
        {
          path: 'code',
          name: 'code',
          component: codeLogin,
          meta: {
            requireAuth: true,
            hasTokenAllowTo: true,

          }
        },
      ],
      meta: {
        requireAuth: true,
        hasTokenAllowTo: true,

      }
    },
    {
      path: '/findPassword',
      name: 'findPassword',
      component: findPassword,
      meta: {
        requireAuth: true,
        hasTokenAllowTo: true,

      }


    },

  ]
});
