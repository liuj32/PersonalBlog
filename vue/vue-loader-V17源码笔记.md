# vue-loader(v17)
> 2022.11.03

主文件：

compiler-sfc的parse解析vue文件得到`descriptor`组件描述对象。
name -> hash id

处理 script、处理 template、处理 styles 引入资源。

exportComponent在设置组件上设置一些属性，负载热加载接口。

最终：得到一个代码字符串。

parse过程：

其他:

loder-runner/LoaderRunner.js: 交由loader运行器处理此转换文本。

webpack: doBuild -> runLoaders


### parse核心逻辑
@vue/compile-sfc: parse => {
  descriptor
  errors
}
@vue/compiler-dom： parse
@vue/compiler-core: baseParse
                    parseChildren


parseChildren核心逻辑: 
  

## 其他
v15.10.1 -> vue^2.7.14
v16以上 -> vue3