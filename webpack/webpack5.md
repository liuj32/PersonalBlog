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
  