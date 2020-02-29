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
11. vue vue-loader vue-template-compiler vue-style-loader
12. webpack-dev-server
13.  webpack-merge copy-webpack-plugin optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin  
  webpack-merge 合并配置
  copy-webpack-plugin 拷贝静态资源
  optimize-css-assets-webpack-plugin 压缩css
  uglifyjs-webpack-plugin 压缩js
  
14. happypack
15. webpack-parallel-uglify-plugin
16. cache-loader
17. webpack-bundle-analyzer
18. cross-env
19. @babel/parser @babel/traverse @babel/generator @babel/types
    
    @babel/parser 将源代码解析成 AST
    @babel/traverse 对AST节点进行递归遍历，生成一个便于操作、转换的path对象
    @babel/generator 将AST解码生成js代码
    @babel/types通过该模块对具体的AST节点进行进行增、删、改、查

20. 