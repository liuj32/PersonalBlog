> vue-loader@v15.10.1

## 执行流程
npm run build
node_modules/bin/webpack -> webpack/bin/cli -> webpack-cli/bin/cli -> webpack/lib/webpack
初始化参数
处理参数processOptions: 
     命令行参数
     webapck生成compiler：
         加入webpack一些自身参数到options
         实例化Compiler
         执行webpack.config.js配置的plugins
               compilation: 通过SyncHook实例化，SyncHook来自于tapable。
         WebpackOptionsApply.process：实例化多个plugin，返回处理后的options。
     compiler.run()
          this.hooks.beforeRun.callAsync: 执行beforeRun对应hooks中的taps回调函数
          this.compile()
	this.newCompilation(): 实例化Compilation，执行compiler.hooks.compilation的taps回调。
                this.hooks.make.callAsync():  // 重点
                      compilation.addEntry(): 
                           this._addModuleChain(): 根据入口依赖创建module(NormalModuleFactory)，// 引入factory涉及parser、generator，为parse、generator钩子加入语法转换，较为复杂。
		this.buildModule()
	                       module.build(): 开始编译
                                                   doBuild()： 
			                   runLoaders // 加载、运行loaders，读依赖路径文件(应该为当前build的文件)，利用对应loader处理文件内容。
                                                                   parse: 解析文件。用到了acorn解析库得到ast，找出模块文件依赖，较为复杂
                                                    callback: 依赖排序
                                       callback: processModuleDependencies处理模块依赖
			         addModuleDependencies:  遍历依赖 -> this.buildModule() // 递归处理
                
                 compile -> callback: 
			写入编译后的文件到dist




## vue-loader(v15)
1. 重写了module.rules，主要是处理vue相关的loader.





## 为什么需要熟悉webpack
   1. compile钩子：
      * environment、afterEnvironment
      * beforeRun
      * run
      * normalModuleFactory、contextModuleFactory
      * beforeCompile、compile、thisCompilation、
      * compilation：tap很多插件钩子
      * make
      * afterCompile
      * shouldEmit、emit、assetEmitted、afterEmit、
      * done
      * 
    

   2. compilation:
       2.1 compilation执行流程：
            * addEntry
       2.2 compilation钩子:
            * addEntry
            * buildModule
            * finishModules
            * seal 
       2.3 compilation对象:
             options属性：打包配置对象

   3. 知道loader运行工具loader-runner执行流程。// 例如pitch
   4. 了解loader-utils、acorn、loader-runner、



## vue
### 编译
compile-sfc：parse -> parseComponent -> parseHTML

parseComponent: sfc(templte、script、styles)

### vue-loader:
作用：利用compile-sfc得到sfc，拼装templte、script、styles请求资源，加上热更新代码，最终得到转译后的代码字符串。
