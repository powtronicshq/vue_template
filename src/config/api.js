/* jshint esversion: 6 */

import axios from '../utils/fetch.js';



export function codeLogin(params) {
  // console.dir('................')
  // return axios.post('/api/codeLogin', params);
  return axios.post('/api/news/api/searchNewsList', {page: 1, rows: 3});
}

export function passwordLogin(params){
  return axios.post('/api/passwordLogin', params);
}

export function getPhoneCode(params){
  return axios.post('/v1/passwordLogin', params);
}

export function getImgCodeUrl(params){
  return '/api/user/validateCode?uuid=';
}
export function webSocket(params){
  return 'ws://121.40.165.18:8800';
}

