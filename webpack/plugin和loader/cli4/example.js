const fs = require('fs')
const path = require('path')
const moment = require('moment')
const ZipPlugin = require('zip-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const yargs = require('yargs').argv
const pkg = require('./package.json')

const resolve = function (dir) {
  return path.join(__dirname, dir)
}

const proxy = {};
['/finance-common-operation-ws'].forEach((item) => {
  proxy[item] = {
    target: 'http://yapi.sui.work/mock/58',
    changeOrigin: true,
    changeHost: true,
    onProxyRes(proxyRes, req, res) {
      proxyRes.headers.connection = 'keep-alive'
      proxyRes.headers['cache-control'] = 'no-cache'
    }
  }
})

const oldModules = [['custody-account', 'login', 'ssui', 'ssvue', 'validate', 'jssdk-auth'], ['cache', 'client', 'collect', 'dialog', 'domain', 'format', 'host', 'jumpto-coupon', 'sui-sdk', 'toast', 'url', 'useragent', 'loan-act']]
const transpileDependencies = oldModules[0].map(_ => `@finance/${_}`).concat(oldModules[1].map(_ => `@common/${_}`))

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: yargs.env === 'test',
  transpileDependencies,
  // lintOnSave: 'error',
  devServer: {
    port: '8090',
    proxy,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: config => {
    config.entry.app = ['./src/index.js']
  },
  chainWebpack: (config) => {
    const currentTime = moment().format('YYYY-MM-DD_HH:mm:ss')
    config
      .plugin('define')
      .tap((args) => {
        return [{
          'process.env': {
            ...args[0]['process.env'],
            NODE_ENV: JSON.stringify(yargs.env || 'dev'),
          }
        }]
      })
      .end()
      .plugin('html')
      .tap((args) => {
        return [{
          ...args[0],
          packVersion: `<script>window._packVersion='${currentTime.replace('_', ' ')}';</script>`,
          firstScript: `<script id="_first-script">${
            fs.readFileSync(path.join(__dirname, './first-script.js'), 'utf-8')
          }</script>`,
          globalSetting: `<script src="js/global-setting.min.js"></script>`,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            minifyCSS: function(text, inline) {
              let autoprefixer = require('jstransformer')(require('jstransformer-autoprefixer'))
              let cleancss = require('jstransformer')(require('jstransformer-clean-css'))
              text = autoprefixer.render(text, {}).body
              text = cleancss.render(text, {}).body
              return text
            },
            minifyJS: function (text, inline) {
              let options = {
                'presets': [
                  ['env', {'modules': false}]
                ]
              }
              let babel = require('babel-core')
              let uglifyJS = require('uglify-js')
              let res = babel.transform(text, options).code
              return uglifyJS.minify(res).code
            }
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
          },
        }]
      })
      .end()
      .plugin('copy')
      .tap(args => [
          args[0].concat([
            { from: 'node_modules/@finance/global-setting/lib/global-setting.min.js',to:'js/' },
            { from: 'node_modules/@finance/vconsole/dist/vconsole.min.js',to:'js/' },
          ]),
        ])
      .end()
      .when(process.env.NODE_ENV === 'production', config => {
        config
          .plugin('zip')
          .use(ZipPlugin, [{
            path: path.join(__dirname, './publication'), // 打包存放的目录
            filename: `${pkg.name}.zip`, // 打包后的名称
            pathPrefix: `res-activity/${pkg.name}` // 追加一层目录
          }])
      })
      .when(yargs.report, config => {
        config
          .plugin('analyzer')
          .use(new BundleAnalyzerPlugin())
      })
    config.resolve.alias
      .set('$assets',resolve('src/assets'))
      .set('$img',resolve('src/assets/img'))
      .set('$components',resolve('src/components'))
      .set('$routes',resolve('src/routes'))
      .set('$burys',resolve('src/burys'))
      .set('$stores',resolve('src/stores'))
      .set('$services',resolve('src/services'))
      .set('$utils',resolve('src/utils'))
      .set('$views',resolve('src/views'))

    config.plugins.delete('pwa')
  },
}
