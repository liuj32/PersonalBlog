# webpack5

参考：
1. 基础配置：https://www.jianshu.com/p/c712fa8bfdff
2. 一个简单打包工具： https://github.com/ronami/minipack
3. 文档：https://webpack.docschina.org/configuration/

## v4->v5
1. production模式下，支持长效缓存，且支持在development模式下调试.
2. loader用`资源模块`来代替，可能会被淘汰
3. 重新考虑optimization.splitChunks的配置
4. 考虑移除一些默认值

