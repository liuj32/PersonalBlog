# webpack配置记录

## 需要安装的包
1. webpack webpack-cli
2. html-webpack-plugin
3. clean-webpack-plugin
4. style-loader css-loader less less-loader // css通过style添加到html中
5. postcss-loader autoprefixer
6. mini-css-extract-plugin  // 拆分css到一个文件
7. extract-text-webpack-plugin@next // 拆分多个css文件  未完成
8. url-loader file-loader 
9. babel-loader @babel/preset-env @babel/core  // 转换es6/7/8语法但是对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy等)
10. @babel/polyfill  // 未完成
11. 