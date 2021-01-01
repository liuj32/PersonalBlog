const Webpack = require("webpack")
const webapckConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')

module.exports = WebpackMerge(webapckConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    contentBase: '../dist'
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
})