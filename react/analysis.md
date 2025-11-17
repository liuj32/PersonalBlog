## react 源码

##   关键词
JSX：jsx在运行时的返回结果（即React.createElement()的返回值）都是React Element。
Fiber节点：组件更新优先级、组件state、组件被打上的用于Renderer的标记，在mount时，Reconciler根据JSX当前屏幕上显示内容对应的Fiber树描述的组件内容生成组件对应的Fiber节点。
current Fiber：当前屏幕上显示内容对应的Fiber树。
workInProgress Fiber：正在内存中构建的Fiber树。

## 理念
时间切片：解决CPU瓶颈的关键是实现时间切片，而时间切片的关键是：将同步的更新变为可中断的异步更新。

React16架构：
Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
  1.时间切片
  2.优先级调度
Reconciler（协调器）—— 负责找出变化的组件（采用fiber架构）
Renderer（渲染器）—— 负责将变化的组件渲染到页面上

## 模式
1. Concurrent mode：多优先级更新架构，实现异步可中断的更新。可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整。


## 分析
### react-reconciler：核心文件
* render：
1. beginwork
2. completeWork

* commit：
before mutation阶段（执行DOM操作前）
mutation阶段（执行DOM操作）
layout阶段（执行DOM操作后）

### 状态更新
* 


## 相关数据结构
1. 单向链表
2. 小顶堆