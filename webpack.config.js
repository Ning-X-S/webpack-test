const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const config = merge(common, {
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:10].[ext]',
            limit: 204800,
            outputPath: './images/'
          }
        }
      },
      {
        test: /\.(jpeg|jpg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:20].[ext]',
            outputPath: './images/'
          }
        }
      },
      {
        test : /\.json$/,
        type: 'javascript/auto', // json文件默认打包会打在一起，想单独打出来加type
        use: {
          loader : 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './config/'
          }
        }
      },
      {
        test: /\.(js|jsx)$/, // 匹配所有.js,jsx结尾的文件
        exclude: /node_modules/,  // 忽略node_modules文件夹
        use: {
          loader: 'babel-loader'  // 使用babel-loader转义
        }
      }
    ],
  }
})

module.exports = config