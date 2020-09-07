const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve('./src/index.js')],
  output: {
    filename: 'bundle-[hash:20].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ],
}