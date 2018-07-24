/* jshint esversion: 6 */

const test = 'http://testentrustapi.tankchaoren.com';
const uat = 'http://uatentrustapi.tankchaoren.com';
const product = 'http://entrustapi.tankchaoren.com';
const dev = 'http://testentrustapi.tankchaoren.com';
const mit = 'http://mitentrustapi.tankchaoren.com';

const imgUrlTest = 'https://testimage.tankchaoren.com/images';
const imgUrlMit = 'https://mitimage.tankchaoren.com/images';
const imgUrlUat = 'https://uatimage.tankchaoren.com/images';
const imgUrlProd = 'https://image.tankchaoren.com/images';

let requestUrl;
let imgUrl;


switch (process.env.NODE_ENV) {

  case 'production':
    requestUrl = product;
    imgUrl = imgUrlProd;
    break;
  case 'uat':
    requestUrl = uat;
    imgUrl = imgUrlUat;
    break;
  case 'test':
    requestUrl = test;
    imgUrl = imgUrlTest;
    break;
  case 'development':
    requestUrl = dev;
    imgUrl = imgUrlTest;
    requestUrl = test;
    imgUrl = imgUrlTest;
    break;
  case 'mit':
    requestUrl = mit;
    imgUrl = imgUrlMit;
    break;
}

export {
  requestUrl,
  imgUrl
};
