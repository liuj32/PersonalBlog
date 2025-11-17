# vue-loader(v15.10.1)
> 2022.12.08



webpack:
  * MultiEntryPlugin：apply -> addEntry
  * Compilation: addEntry -> _addModuleChain -> buildModule， 处理依赖(processModuleDependencies)。
  * MultiModule：build
  * NormalModule:build -> parse
  * Parse:parse处理vue-loader得到的source为ast。


## 其他
### webpack
1. compilation: 
2. webpack关键类
  class Compilation extends Tapable {}
  class Parser extends Tapable {} // Tapable类
  class MultiModuleFactory extends Tapable {}
  class NormalModule extends Module {}
  class MultiModule extends Module {}
3. 代码结构
  很多回调函数式写法。


### 相关库
1. acorn // JavaScript parser
2. 