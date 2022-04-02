# webpack

## 关键术语 loader|plugin|runtime|manifest
loader: webpack 只能理解 JavaScript 和 JSON 文件，loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中
plugin: 插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量

如何编写一个plugin：webpack插件是一个具有apply方法的JavaScript对象。apply方法会被 webpack compiler 调用，并且在整个编译生命周期都可以访问compiler对象。

runtime：webpack用来连接模块化应用程序所需的代码，包含连接模块所需的加载和解析逻辑。
manifest：记录模块的详细要点，便于webpack管理所有所需模块之间的交互
通过使用manifest数据，runtime能够检索出标识符，找出每个标识符背后对应的模块。

chunk: 打包过程中，模块会被合并成chunk，它有两种形式：
initinal(初始化), 是入口起点的chunk。此chunk包含入口起点指定的模块及其依赖项
non-initial(可以延迟加载的块)， 可能出现在动态导入或者SplitChunksPlugin中。


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

## webpack对比Rollup

## 为什么选用webpack?
参考：https://webpack.docschina.org/concepts/why-webpack/#esm---ecmascript-modules

## HMR(热更新)
参考：https://zhuanlan.zhihu.com/p/30669007

