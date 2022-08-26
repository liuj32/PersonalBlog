# vue3笔记
> 2021/10/22

## api
1. defineComponent定义组件
接受参数(function | object)
作用：为了让TypeScript正确推导出组件选项内的类型。

2. composition
组件内的声明的变量和方法多了之后，需要将耦合性低一些代码和方法作为模块化提取出去，然后再组件内引用。vue2采用mixin，vue3采用composition这种方式明显好很多，能知道变量来自哪个模块，方便定位。

组合式函数：利用Vue组合式API来封装和复用有状态逻辑的函数。

为什么要有组合式api?
* 更好的逻辑复用
* 更灵活的代码组织
* 更好的类型推导
* 生产包体积更小


3. setup 返回一个对象,在能在页面中使用
4. ref
   JavaScript没有提供一种方式来拦截对局部变量的读写，因此我们始终只能够以对象属性的形式访问响应式状态，也就因此有了响应式对象和 ref。
   toRefs
   shallowRef
   defineExpose: 宏显示暴露，用于父组件通过ref访问子组件属性、方法。
5. reactive
   reactive局限：只能用于对象、数组、map、set

6. coumputed
7. watch
   watchEffect：
   创建侦听器就执行回调，追踪副作用依赖关系，分析出响应源
   watchPostEffect：能访问更新后的DOM
8. 生命周期：onMounted、onUpdated、onUnmounted

9.  defineProps：申明属性
   defineEmits：申明需要抛出的事件
   多个v-model绑定

11. useAttrs：访问所有透传attribute

12. 依赖注入 
    provide、inject、readonly(不可更改)


其他：
* 引用组件，不用注册
* getCurrentInstance：获取组件实例

## 内置组件
1. Teleport组件
脱离根元素，独立组件，它可以把你写的组件挂载到任何你想挂载的DOM上

2. Suspense组件
在等待组件树下的多个异步依赖项解析完成时，呈现加载状态。
让你的组件在渲染之前进行“等待”，并在等待时显示 fallback 的内容

## 搭配TypeScript使用 Vue
1. 使用ts优势
   * 编译时通过静态分析检测出很多常见错误，减少了生产环境的运行时错误。
   * 通过IDE基于类型的自动补全，改善了开发体验和效率。
   * Vue本身就是TypeScript编写，对TypeScript提供了头等支持。

## 渲染
1. 编译时优化
   * 静态提升
   * 修补标记 Flags
   * 树结构打平

## css
1. css 作用域
   * :deep()、:slotted()、:global()、
2. css Modules

3. css中的v-bind

```````````````````````````````````````````````````````````````````````````
响应式：声明式处理变化的一种范式。
SPA：不仅控制整个页面，还可以处理数据更新和导航，而无需重新加载页面。
SSR：服务端将Vue应用程序渲染成一个HTML字符串，使得可以从服务端得到渲染好的HTML，使得用户在JavaScript还在下载的过程中也能看到页面内容。
SSG：服务端渲染在所需数据为静态的情况下，可以使渲染提前完成，预先渲染整个应用。
pnpm：
monorepo：

自动追踪响应式依赖：

组件实例经历的一系列过程：设置数据侦听、模板编译、挂载实例到DOM、数据改变时更新DOM。

内存泄漏：
   1. 事件监听
   2. 定时器
   3. 异步回调创建一个侦听器(watch)，必须手动清除它。

异步组件：defineAsyncComponent，需要时从服务器加载相关组件

无渲染组件: 只包括了逻辑而不需要自己渲染内容，视图输出通过作用域插槽全权交给了消费者组件。

指令：有跟组件相同的生命周期钩子。

生成vite项目：npm init vue@latest
