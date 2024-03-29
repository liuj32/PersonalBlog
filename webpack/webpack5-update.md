# webpack5


# V5这个版本的重点在于以下几点。

* 尝试用持久性缓存来提高构建性能。
* 尝试用更好的算法和默认值来改进长期缓存。
* 尝试用更好的 Tree Shaking 和代码生成来改善包大小。
* 尝试改善与网络平台的兼容性。
* 尝试在不引入任何破坏性变化的情况下，清理那些在实现 v4 功能时处于奇怪状态的内部结构。
* 试图通过现在引入突破性的变化来为未来的功能做准备，使其能够尽可能长时间地保持在 v5 版本上。

## 重大变更

### 长期缓存
1. 确定的 Chunk、模块 ID 和导出名称

2. 真正的内容哈希

### 开发支持
1. 模块联邦 - 新增  

### 支持崭新的 Web 平台特性
1. JSON 模块
2. import.meta
3. 资源模块
   Webpack 5 现在已经对表示资源的模块提供了内置支持
4. 原生 Worker 支持
5. URIs
6. 异步模块
7. 外部资源

### 构建优化
1. 嵌套的 tree-shaking
2. 内部模块 tree-shaking
3. 副作用分析
   Webpack 5 也可以根据对源代码的静态分析，自动将模块标记为无副作用。

### 性能优化
1. 持久缓存
2. 编译器闲置和关闭
3. 文件生成