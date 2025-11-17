// webapck 配置

var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.export = {
  target：, // 目标环境，web/node
  output: {
    path： , //打包文件输出位置
    publicpath：, // 相对于服务器根目录 // dist/main.js
    libraryTarget：, // 模块化格式，例如：commonjs    
  },
  module: {
    rules: [
      // 普通的 `.scss` 文件和 `*.vue` 文件中的
      // `<style lang="scss">` 块都应用它
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },

      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },

      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },

      {
        test: /\.js?$/,
        loader: 'babel-loader'
        exclude: function | string,
      },

      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] } // 给vue文件添加个.ts后缀用于编译
      },

      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },

      {
        test: /\.pug$/,
        oneOf: [
          // 这条规则应用到 Vue 组件内的 `<template lang="pug">`
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // 这条规则应用到 JavaScript 内的 pug 导入
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },

      // CSS Modules
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      },

      {
        test: /\.css$/,
        oneOf: [ // 当规则匹配时，只使用第一个匹配规则。
          // 这里匹配 `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              }
            ]
          },
          // 这里匹配普通的 `<style>` 或 `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: false // 关闭热重载
        }
      },

      {
        enforce: 'pre', // loader的调用阶段, 前置(pre)、普通(normal)、行内(inline)、后置(post)、
        test: /\.(js|vue)$/,
        loader: 'eslint-loader', // 作为一个pre-loader运用
        exclude: /node_modules/
      },

    ]
  },
  resolve: {
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: ['.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
}
