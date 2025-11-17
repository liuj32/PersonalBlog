# react
> 2022/05/13

## 环境
1. 安装react脚手架：npm install -g create-react-app
2. 创建项目：create-react-app my-react-project

## react特点：
1. 可以重新渲染所有内容，并且不会重新生成DOM或重置state

2. 特性：声明式渲染，自定义组件，state，生命周期方法和 refs 等特性
## 特性
1. 函数、类(React.Component) 都能作为组件使用
   函数组件：不包含state,接收props作为参数, 返回需要渲染的元素。
   类组件：
2. JSX：类似于xml，是一个javascirpt语法扩展，可当做变量赋值.
   React DOM 使用camelCase来定义属性名称，而不是html属性名称的命名约定。例如：class变为className.
3. setState()更新数据
  组件生命周期：
  链接: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* 挂载
  constructor
  static getDerivedStateFromProps
  render
  componentWillMount
  componentDidMount：组件已经被渲染到DOM中后运行，推荐在这个生命周期发起ajax请求
* 更新
  componentWillReceiveProps: 组件属性改变
  static getDerivedStateFromProps(props, state)
  shouldComponentUpdate(nextProps, nextState) // 返回false，则不会调用render
  render
  getSnapshotBeforeUpdate // 返回值作为componentDidUpdate的第三个参数
  componentWillUpdate
  componentDidUpdate(prevProps, prevState, snapshot)：组件发生更新
* 卸载
  componentWillUnmount：组件从 DOM 中被移除
* 错误处理
  static getDerivedStateFromError(error)
  componentDidCatch(error, info)
* 其他
  setState
  forceUpdate


1. 事件
   jsx绑定事件：
   1. () => this.handleClick(),重新渲染会导致创建不同的回调函数
   2. this.handleClick = this.handleClick().bind(this)

2. 表单
   受控组件：可变状态（mutable state）通常保持在组件的state属性中，并且只能通过使用 setState()来更新。
   表单插件（Formik）
  
3. 状态提升：
   多个组件使用state，应将它提升至共同父组件中。
   如果某些数据可以由 props 或 state 推导得出，那么它就不应该存在于state 中。

4. 组合 vs 继承
   组件可作为属性传递，默认子组件为children
   组合：一个组件引用其他组件

5. React 哲学
   组件划分
   确定state、props


<!-- 6. 可变对象、改变对象
   不可变对象, 是否发生改变，从而确定何时对组件重新渲染。
   性能优化：prue components shouldComponentsUpdate() -->
## 高级指引

2. context
   
3. jsx
jsx表达式可为：字符串、React 元素、列表

4. 性能优化
使用生产版本
生产打包优化：插件，webpack(terser-webpack-plugin)
使用开发者工具中的分析器对组件进行分析
虚拟化长列表
组件更新：shouldComponentUpdate、React.PureComponent（浅比较）

5. 协调
Diffing 算法
O(n^3 ) ->  O(n)
两个不同类型的元素会产生出不同的树；
开发者可以使用 key 属性标识哪些子元素在不同的渲染中可能是不变的。

* 对比不同类型的元素
组件销毁： componentWillUnmount
组件创建以及插入到DOM中: UNSAFE_componentWillMount(过时) -> componentDidMount

* 对比同一类型的元素
更新实例props，调用实例componentDidUpdate
调用render(), diff 算法将在之前的结果以及新的结果中进行递归

6. render props
Render Props创建函数会抵消React.PureComponent的优势。

7. 类型检测
flow/typescirpt：
* 运行前识别某些类型的问题
* 增加自动补全功能
使用flow:
yarn add --dev flow-bin
package.json中：
{
  // ...
  "scripts": {
    "flow": "flow",
    // ...
  },
  // ...
}
yarn run flow init 初始化
yarn flow 运行
----------------------
使用typescript:
yarn add --dev typescript
package.json中：
{
  // ...
  "scripts": {
     "build": "tsc",
    // ...
  },
  // ...
}
yarn run tsc --init // 生成tsconfig.json配置文件
yarn build // 运行 TypeScript

8. 非受控组件
非受控组件： 
受控组件：

9. Web Components

## 重点
1. reconcilers
概念：不同的渲染器彼此共享一些代码(React DOM、React Native)，这一部分称之为reconcilers(负责计算树的哪些部分发生了变化)
尽管 Fiber 是 reconciler 的全新重写，但算法将大体相同。
Fiber reconciler（React Fiber架构）
React Fiber：主要目的是使Virtual DOM可以进行增量式渲染
fibers对象：存放组件树的附加信息
参考：https://github.com/acdlite/react-fiber-architecture
1. 异步setState()
不是异步，直接拼接视图，很难获得调度的控制权


## 关键词
副作用：数据获取，设置订阅，手动更改react组件dom都属于副作用。
引擎：

## Hook
1. 为什么要增加 Hook 以及如何在不重写整个应用的情况下将 Hook 跟 class 组件同时使用? 
代码复用、代码管理、class的屏障
React 没有提供将可复用性行为“附加”到组件的途径，有render props和高级组件可解决，但会重新组织组件结构
Hook可以从组件中提取状态逻辑，使得这些逻辑可以单独测试并使用。
难以理解的class，class组件会无意鼓励一些让优化措施无效的方案，此外class组件不能很好地压缩，并且会使热重载不稳定的情况
Hook在不编写class的情况下使用state以及其他react特性，Hook 是一种复用状态逻辑的方式 ，它不复用 state 本身。
react组件更像是函数，而Hook则拥抱了函数。

2. useEffect
useEffect Hook 可看做componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

Hook允许我们按照代码的用途分离他们，而不是像什么周期那样糅合在一起。
调用新的effect之前会对前一个的effect进行清理
useEffect(() => {}, [state])：依赖于state数据进行性能优化

 React 怎么知道哪个 state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序。

## 性能优化
跳过effect进行性能优化