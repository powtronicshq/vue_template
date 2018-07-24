/* jshint esversion: 6 */

import {
  MessageBox,
  Message
} from 'element-ui';
import NProgress from 'nprogress'; // 引入顶部加载条

export let warning = (content, title, confirmButtonText = '确认', cancelButtonText = '取消', success, error) => {
  MessageBox.confirm(content, title, {
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    type: 'warning'
  }).then(() =>
    success()
  ).catch(() => {
    error();
  });

};

export let error = (content, title, confirmButtonText = '确认', cancelButtonText = '取消', success, error) => {
  MessageBox.confirm(content, title, {
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    type: 'error'
  }).then(() =>
    success()
  ).catch(() => {
    error();
  });

};

export let toast = (msg = '', type = 'info', isClose = false, duration = 2000) => {
  return Message[type]({
    showClose: isClose,
    message: msg,
    duration: duration
  });
};


// /**
//  * 等待提示
//  * @param {String} text  提示内容
//  * @param {Boolean} isFull  是否全屏
//  * @return {Loading} Loading对象  close()关闭等待提示
//  */
// export let loading = (text = 'Loading', isFull = true) => {
//   return Loading.service({
//     lock: true,
//     text: text,
//     fullscreen: false,
//     // body:true
//     // spinner: 'el-icon-loading',
//     background: 'rgba(255, 255, 255, 0.5)'
//   });
// };

export let proStart = () => {
  return NProgress.start();
};

export let proDone = () => {
  return NProgress.done();
};
