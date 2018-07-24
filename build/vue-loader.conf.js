'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

// var webpack_SourceMap = '';
//
// switch (process.env.NODE_ENV){
//   case "production":
//     webpack_SourceMap = config.build.productionSourceMap
//     break
//   case "test":
//     webpack_SourceMap = config.test.productionSourceMap
//     break
//   case "uat":
//     webpack_SourceMap = config.uat.productionSourceMap
//     break
//   default:
//     webpack_SourceMap = config.dev.cssSourceMap
//     break
// }

const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
