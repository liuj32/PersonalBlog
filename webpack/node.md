# webpack

## 摇树优化：
  es6的模块引入是静态分析的。
  原理：编译时的优化，最基本的前提就是语法的静态分析，es6的模块机制提供了这种可能性。不需要运行时，便可进行代码层面的静态分析，确定相应的依赖关系。
每个模块间的依赖关系，依赖AST语法树。
模块文件 -> loader -> acore -> AST，通过分析语法树就可以分析这个模块是否还有依赖的模块。进而继续执行循环执行下一个模块的编译解析。

##  性能优化
  编译性能优化:
  优化webpack打包速度:
  优化打包体积:

  webpack内置优化：
  1. tree-shaking
  2. scope-hosting
   
## Webpack Proxy工作原理
  接受客户端发送的请求转发给其他服务器，解决浏览器的跨域问题（浏览器安全策略限制）。
  服务器与服务器之间请求数据并不会存在跨域行为，跨域行为是浏览器安全策略限制！

  webpack-dev-server：自动编译和更新浏览器
  http-proxy-middleware：http代理中间件，实现请求转发给其他服务器

## HMR(热更新)


## webpack对比Rollup

## HMR(热更新)
> https://zhuanlan.zhihu.com/p/30669007

