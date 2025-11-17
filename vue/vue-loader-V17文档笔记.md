# vue-loader-V17文档笔记
> 2022.11.03

## 配置
### 相关loader：
  1. vue-loader、vue-template-compiler
  2. file-loader: 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希以更好的缓存。
  3. url-loader: 有条件的将文件转换为内联的base-64URL，这样会减少小文件的http请求数。
  4. sass-loader、node-sass: 编译我们的`<style lange="scss">`标签。
  5. less、less-loader: 
  6. stylus、stylus-loader: 
  7. postcss-loader: 自动补全浏览器前缀
  8. babel-core babel-loader:
  9. typescript ts-loader
  10. pug pug-plain-loader: 模板处理
  11. eslint eslint-loader

### 相关plugin：
  1. VueLoaderPlugin: 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
  2. mini-css-extract-plugin
  3. eslint-plugin-vue
  4. stylelint-webpack-plugin

### 最终配置
{
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
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },      

    ]
  },

  resolve: {
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: ['.ts', '.js']
  },
}


## 样式隔离
1. Scoped CSS
2. Shadow DOM中的样式封装

## CSS Modules
`
<style module>
.red {
  color: red;
}  
</style>

<script>this.$style.red</script>
`

## 热重载

## 函数式组件

## 自定义块

## 代码校验 (Linting)
### ESLint 
1. 官方的 eslint-plugin-vue
`
// .eslintrc.js
module.exports = {
  extends: [
    "plugin:vue/essential"
  ]
}
`
命令：eslint --ext js,vue MyComponent.vue

2. eslint-loader

### styleLint
stylelint-webpack-plugin

## 测试
[@vue/test-utils](https://v1.test-utils.vuejs.org/zh/)