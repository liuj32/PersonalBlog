# webpack5

参考：
1. 基础配置：https://www.jianshu.com/p/c712fa8bfdff
2. 一个简单打包工具： https://github.com/ronami/minipack
3. 文档：https://webpack.docschina.org/guides/

## v4->v5
1. production模式下，支持长效缓存，且支持在development模式下调试.
2. loader用`资源模块`来代替，可能会被淘汰
3. 重新考虑optimization.splitChunks的配置
4. 考虑移除一些默认值

## 最引人注目的特性
1. 代码分离:
   把代码分离到不同的bundle中，然后可以按需加载或并行加载这些文件。可以用于获取更小的bundle、控制资源加载优先级，使用合理可以极大影响加载时间。
2. 

## 笔记
1. 图像、字体使用内置的Asset Modules(asset/resource)
2. json默认导出没有警告，有名导出有警告
3. 使用自定义 parser 替代特定的 webpack loader, 可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入
4. 全局资源？
5. 清理dist文件可用clean: true
6. manifest: 可以追踪所有模块到输出`bundle`之间的映射
7. devtool: 方便映射错误。 inline-source-map无map文件，source-map有map文件
8. webpack-dev-server提供一个基本的web server
   webpack-dev-middleware 把webpack处理过的文件发送到一个server
9. 代码分离:
   入口起点：entry
   SplitChunksPlugin分离chunk
   动态导入

10. 构建性能：
一：通用环境：
* 更新到最新版本，webpack、nodejs、npm/yarn，较新的版本能更高效的建立模块树以及提高解析速度。
* loader应用于最少数量的必要模块，比如babel-loader，加入include选项
* DllPlugin为更改不频繁的代码生成单独的编译结果
  `小即是快`，较少编译结果的整体大小，尽量保持chunk体积小。
  使用数量更少/体积更小的library
  多页应用程序使用SplitChunksPlugin
  移除未使用代码
  只编译你当前正在开发的代码
* worker池， thread-loader将非常消耗资源的loader分流给一个work pool
二：开发环境：
* 增量编译
* 在内存中编译
* stats.toJson 加速
* Devtool
* 避免在生产环境下才会用到的工具，比如TerserPlugin来minify(压缩)和mangle(混淆破坏)代码是没有意义的。
* 最小化 entry chunk

11. 