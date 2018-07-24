/* jshint esversion: 6 */

import axios from 'axios';
import store from '../store';
import router from '../router';
import * as notice from './notice';
import * as cookie from './cookie';


let clearStoreLoginInfo = () => {
  store.state.data.role = '';
  store.state.data.token = '';
  store.state.data.username = '';
  store.state.data.uuid = '';
  cookie.setCookie('role','');
  cookie.setCookie('token','');
  cookie.setCookie('username','');
  cookie.setCookie('uuid','');
  router.replace({ path: '/login' });
};

// axios配置
// axios.defaults.baseURL = '/api'
// 设置默认请求头
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest'
// }


axios.defaults.timeout = 10000;

// 添加请求截器
axios.interceptors.request.use(
  config => {
    notice.proStart();
    if (store.state.data.token) {
      config.headers.token = `${store.state.data.token}`;
    }
    return config;
  },
  err => {
    notice.proDone();
    return Promise.reject(err);
  }
);


// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    notice.proDone();
    if (response.status !== 200) {
      notice.toast('请求失败!', 'error');

      let err = {
        data: {},
        errcode: -99999,
        errmsg: '请求失败!'
      };
      Promise.reject(err);

    }

    /**
     * errcode为非0是抛错 
     */
    // 0	成功
    // 40001	token超时，请检查 token 的有效期
    // 40002	不合法的token，请认真比对 token 的签名
    // 40003	缺少token参数
    // 40005	解析token失败
    // -1	系统繁忙，请稍候再试
    // -2	系统超时，请稍候再试
    let res = response.data;
    switch (res.errcode) {
      case 40001 || 40002 || 40003 || 40005:
        clearStoreLoginInfo();
        notice.toast('连接超时,请重新登录!', 'error');
        Promise.reject(res);
        break;
      case -1 || -2:
        notice.toast('系统繁忙,请稍后再试!', 'error');
        Promise.reject(res);
        break;
      case 0:
        return res;
      default:
        notice.toast(res.errmsg, 'error');
        Promise.reject(res);
        break;
    }

  },
  error => {
    notice.proDone();
    if (error.response) {
      if (error.response.status !== 200) {
        notice.toast('网络请求失败!', 'error');
      }
    } else {
      notice.toast('网络请求异常!', 'error');
    }
    let response = {
      data: {},
      errcode: -99999,
      errmsg: error.message
    };
    return Promise.reject(response);
  }
);


export default axios;
