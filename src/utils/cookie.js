/* jshint esversion: 6 */

import Cookie from 'js-cookie';

// Cookie取值
export let getCookie = (name) => {
  
  return Cookie.get(name)===undefined?'':Cookie.get(name);
};

// Cookie设置值
export let setCookie = (name, value, day) => {
  if(value===''){
    Cookie.remove(name);
    return;
  }
  Cookie.set(name, value, { expires: day });
};

// 为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
export let delCookie = (name) => {
   Cookie.remove(name);
};

