const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let indexLess = new ExtractTextWebpackPlugin('index.less');
let indexCss = new ExtractTextWebpackPlugin('index.css');
const Webpack = require('webpack')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.argv.indexOf('--mode=production') === -1

const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const CopyWebpackPlugin = require('copy-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'js/[name].[hash:8].js'
  },
  module: {
    noParse: /jquery/, //不去解析jquery中的依赖库
    rules: [
      {
        test: /\.ext$/,
        use: [
          'cache-loader',
          // ...loaders
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../dist/css',
              hmr: devMode
            }
          },
           'css-loader', {
             loader: 'postcss-loader',
             options: {
               plugins: [require('autoprefixer')]
             }
           }]  //从右向左解析
      },
      {
        test: /\.less$/,
        use:  [
            {
              loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../dist/css",
                hmr: devMode
              }
            },
            'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          }, 'less-loader']
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      },
      {
        test: /\.js$/,
        // use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env']
        //     }
        //   },
        use: [{
          loader: 'happypack/loader?id=happyBabel'
        }],
        exclude:/node_modules/
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }, 
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.runtime.esm.js',
      '@':path.resolve(__dirname,'../src')
    },
    extensions:['*','.js','.json','.vue']
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerHost: '127.0.0.1',
    //   analyzerPort: 8889
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new vueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? "[id].css" : '[id].[hash].css'
    }),    
    new HappyPack({
      id: 'happyBabel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }]
            ],
            cacheDirectory: true
          }
        }, 
        path.resolve(__dirname, './loaders/drop-console.js')
      ],
      threadPool: happyThreadPool
    }),
    new Webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json')
    }),
    new CopyWebpackPlugin([ // 拷贝生成的文件到dist目录 这样每次不必手动去cv
      {
        from: path.resolve(__dirname, './static'),
        to: path.resolve(__dirname, '../dist/static') 
      }
    ])
  ]
}
