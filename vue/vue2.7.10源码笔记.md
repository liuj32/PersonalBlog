# Vue(2.7.10)
> 2022.09.10

## 挂载
### 初始化过程、render：
1. 安装原型方法到Vue构造函数上
2. _init()：
* 初始化生命周期
* 事件
* render函数
* injecttion、state、provide
* $mount挂载 -> mountComponent
mountComponent：
实例化一个render watcher，调用updateComponent
updateComponent：_render -> _update()。
_render: 
调用$createElement -> 创建组件createComponent：安装Component中componentVNodeHook的钩子、创建Vnode。
componentVNodeHooks钩子：
  * init
  * prepatch
  * insert
  * destroy
挂载组件创建render watcher，在调用render函数时会获取数据，进行依赖收集。
_update：__patch__ -> patch：
  patch -> createElm -> createComponent -> vnode.init -> createComponentInstanceForVnode(调用this._init初始化组件) -> $mount

  createElm: 1. vnode为组件递归操作,
             2. 非组件为vnode创建elm，并添加到父元素下，调用一些createHooks钩子：更新attrs、class、DOMListeners、DOMPro、style等。

### 更新
更新数据属性过程：
reactiveSetter
Dep.notify
watcher.update
queueWatcher // 将watcher加入到queue
nextTick(flushSchedulerQueue) // flush the queue

### diff:
1. patch
* oldVnode未定义，createElm创建元素
* sameVnode(oldVnode, vnode)， patchVnode
* oldVnode为真元素/不同种vnode处理
 首次挂载： createElement -> createComponent：执行vNode的init钩子，为APP.vue的vNode创建componentInstance，再去挂载这个componentInstance。递归执行。


2. patchVnode
* updateChildren
* 添加vnodes， 
* 移除vnodes
* 设置elm.text为空
* 替换ele的text


3. updateChildren(双端比较)
* oldStartVnode -> newStartVnode
* oldEndVnode -> newEndVnode
* oldStartVnode -> newEndVnode
* oldEndVnode -> newStartVnode
* 找newStartVnode在oldChildren中的位置再移动，否则新增

addVnodes -> createElm
removeVnodes

### 总结：
vm(Vue) -> vnode(VueComponent) -> ...
||
new Vue().$mount() -> (child=componentInstance).$mount -> ...

main.js：
  render: h => h(App) // vNode(App.vue文件vNode)
vnode目前没有componentInstance， -> $mount它(App.vue) -> 执行App.vue中编译得到的render，得到App.vue中template模板的VNode(VueComponent)。依次递归下去。


## 响应式
observe(data) -> new observe(data)
defineReactive(data, key, val)：
  为每个数据属性实例化一个dep：new Dep()
  observe(val) // 继续观测val数据
  为key新增属性拦截器
    get: dep.depend()
    set: dep.notify()

初始化数据initState：
  initProp：defineReactive(props, key, value)
  initMethods：vm[key] = methods[key]
  initData：observe(data)
  initComputed：
  initWatch：

Dep.target用途：用来确定收集哪个watcher。

watcher场景：
1. 挂载组件实例化一个render watcher，render阶段进行依赖收集。
2. 观测data数据， // 用到的数据属性实例化一个watcher，再进行依赖收集。
3. 计算属性
4. 侦听属性

watch的类型
{
  isRenderWatcher, // 用于挂载、更新。
  deep,
  user：watch, // 侦听
  lazy：computed, // 计算watch
  sync, // 当前tick中执行
}

## 计算属性 VS 侦听属性
### 计算属性：
  lazy watcher
  针对每个计算属性，实例化一个lazy watcher，在组件中访问其值才进行求值、依赖收集。他的依赖项更新，其计算属性其他地方未使用不重新计算。

### 侦听属性：
  user watcher
  针对每个watch，实例化一个watcher，在实例化过程中访问vm中`watcher`属性的值进行依赖收集此watcher.

计算属性与侦听属性区别：
computed: lazy，实例化watcher时不计算其值，当其他地方使用此计算属性才计算、依赖收集。
watch: 实例化watcher过程会进行求值， 在get()过程中，执行getter，commputed是执行回调函数，watch是访问vm中的此观测属性值。

## 编译
compileToFunctions：templayte -> render
编译多层闭包封装目的：合并参数，警告、异常处理
编译核心：baseCompile
        parse(template) -> ast -> optimize(ast) -> generate(ast) -> code

1、parse:
  解析template为AST。
Vue AST结构：
  {
    attrs,
    attrsList,
    attrsMap,
    children,
    events,
    hasBindings,
    parent,
    tag,
    type,
  }

解析过程：
  parseHTML
    Start tag:
      `Fn(start)`handleStartTag 处理 attr
      start：preTransformNode、processfor、processif、procesOnce
    End tag:
      `Fn(end)`处理closeElement：key、ref、slotConent、component、transformNode：class/style、attrs
    text：
      `Fn(chars)`处理文本、表达式({{}})
    Comment:
      `Fn(comment)`处理注释

2、optimize目的: 
  第一步：标记所有非静态节点 // 针对元素节点, 儿子非静态，父节点也非静态
  第二步：标记静态根 // 针对元素节点

3、generate：
  将优化过的AST生成调用createElment函数格式的代码字符串。
  具体：根据AST元素节点类型，分别用不同的函数处理生成对应函数代码字符串。


AST：解析template语法节点得到的描述对象
vNode：描述dom、挂载相关属性的描述对象


## v-model
1. 普通元素例如：
   * input元素解析为on: { input }
   * select元素解析为on: { change }
   最后为el元素绑定事件。
   
2. 组件元素例如：<HelloWorld v-model="inputValue"/>
   父组件解析为：c('HelloWorld',{model:{value:(content),callback:function () {},expression:"content"}})
   子组件：通过createCompoment里的transformModel，为model上的数据解析到data.on上，然后等同于普通元素，生成patch函数阶段安装更新attr、class、events等回调函数，在patch阶段调用钩子执行更新。补充：createPatchFunction函数会安装更新attr、class、events等函数在cbs中的created、update钩子上。

## keep-alive
patch -> removeVnodes -> invokeDestroyHook -> destroy
keep-alive: render函数中有cache key则用缓存的componentInstance，避免后面重复实例化组件。
removeVnodes: 调用vnode的destroy钩子，非keepAlive执行vm.$destroy()，否则将其置为不活跃(vm._inactive = true)。
insert钩子: 有keep-alive跳过调用mounted钩子，保存到activatedChildren中。


## 高阶组件
接收组件返回组件的函数。

子组件中this.$vnode指向父组件调用子组件模板对应的VNode.
this.$vnode = {
  context, // 父组件实例/上下文
  componentInstance, // 子组件实例
  componentOptions,
}
this._self // 当前实例本身, this是一个代理对象

## 其他
### 工作流(workflow)
#### prettier
关键词：Reason、refmt、recast、Wadler
prettier受refmt启发的javascript代码格式化器，对ES2017、flow、jsx的语言特性有高级支持。
不像eslint，没有一百万个配置选项和规则，但更重要的是：一切都可以修复。

#### 发布流程
###### 相关包：
  minimist: 简化命令行参数
  chalk: 颜色
  semver: 版本号相关
  enquirer: 问答
  execa: 执行脚本
  conventional-changelog-cli: 

main：
* 确定目标版本targetVersion、验证版本号、是否确认发布
* run tests
* update all package versions and inter-dependencies
* build all packages with types
* generate changelog
* update pnpm-lock.yaml
  添加git log
* publish packages
* push to GitHub
