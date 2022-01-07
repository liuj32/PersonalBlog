# Vue

## Vue 常考基础知识点
1. ⽣命周期钩⼦函数
  Init lifecycle and Events，往vm上挂载各种属性
  callHook: beforeCreated: 实例刚创建
  initInjection/initState: 初始化注入和 data 响应性
  created: 创建完成，属性已经绑定， 但还未生成真实dom
  template解析成render function
  beforeMount: 模板编译/挂载之前
  执行render function，生成真实的dom，并替换到dom tree中
  mounted: 组件已挂载
  beforeUpdate ->(Re-render and patch)-> updated
  beforeDestroy: 销毁开始
  销毁自身且递归销毁子组件以及事件监听
  destroyed: 完成后触发钩子
2. 组件通信
⽗⼦组件通信、兄弟组件通信、跨多层级组件通信、任意组件

3. extend 能做什么

4. mixin 和 mixins 区别

5. computed 和 watch 区别
  coumputed：实际上是一个惰性求值的观察者computed watcher,
  当他依赖状态发生改变时，就会通知这个watcher，computed watcher 通过 this.dep.subs.length 判断有没有订阅者,
  有的话,会重新计算,然后对比新旧值,如果变化了,会重新渲染。 (Vue 想确保不仅仅是计算属性依赖的值发生变化，而是当计算属性最终计算的值发生变化时才会触发渲染 watcher 重新渲染，本质上是一种优化。)

  watch: user watcher

  end：数据可看做watcher

6. keep-alive 组件有什么作⽤

7. v-show 与 v-if 区别

8. 组件中 data 什么时候可以使⽤对象

9.  v-for 数组 key设置为数组索引会有问题吗

## Vue 常考进阶知识点
1. 响应式原理
   
2. Object.defineProperty 的缺陷

3. 编译过程

4. NextTick 原理分析
作用：用于下次dom更新循环结束后执行延迟回调，获取更新后的dom
原理：定义了一个异步函数，根据不同环境分别尝试使用：
Promise
MutationObserver
setImmediate
setTimeout
多次调用，则将回调函数放到队列中，通过这个异步方法清空队列。

## vuex
1. 子组件怎么获取到store数据

## vue3
1. Object.defineproperty -> proxy
2. virtual Dom重构
3. Tree-sharking support
4. Compositon Api
5. 新增的三个组件Fragment、Teleport、Suspense