/* jshint esversion: 6 */
// {
//   "window.zoomLevel": 0,
//   "extensions.ignoreRecommendations": true,
//   // "emmet.syntaxProfiles": {
//   //     "vue-html": "html",
//   //     "vue": "html"
//   // },
//   "vetur.validation.template": false,
//   "eslint.options": {
//       "plugins": ["html"]
//   },
//   "eslint.validate": [
//       "javascript",
//       "javascriptreact",
//       "html",
//       { "language": "vue", "autoFix": true }
//   ],
//   "prettier.singleQuote": true,
//   "prettier.semi": false,
//   "vetur.format.defaultFormatter.html": "js-beautify-html",
//   "vetur.format.defaultFormatterOptions": {
//      "wrap_attributes": "force-aligned"
//   },
//   "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
//   "editor.quickSuggestions": {
//       "strings": true
//   },
//   "git.enableSmartCommit": true,
//   "files.autoSave": "off"
// }

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

