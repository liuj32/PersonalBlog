// vue 整个过程

new Vue({})

// 初始化Vue实例
function _init() {
  // 挂载属性
  initLifeCycle(vm)
  // 初始化事件系统、钩子函数等
  initEvent(vm)
  // 编译slot、vnode
  initRender(vm)
  // 触发钩子
  callHook(vm, 'beforeCreate')
  // 添加injection功能
  initInjection(vm)
  // 完成数据响应性 props/data/watch/computed/methods
  initState(vm)
  // 添加provide功能
  initProvide(vm)
  // 触发钩子
  callHook(vm, 'created')

  // 挂载节点
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}

// 挂载节点实现
function mountComponent(vm) {
  // 获取render function
  if (this.options.render) {
    // template to render
    // Vue.compile = compileToFunctions
    let { render } = compileToFunctions() 
    this.options.render = render
  }
  // 触发钩子
  callHook(vm, 'beforeMounte')
  // 初始化观察者
  // render 渲染 vdom
  vdom = vm.render()
  // update：根据 diff 出的 patchs 挂载成真实的dom
  vm._update(vdom)
  // 触发钩子
  callHook(vm, 'mounted')  
}

// 更新节点实现
function queueWatcher(params) {
  nextTick(flushScheduleQueue)
}

// 清空队列
function flushScheduleQueue() {
  // 遍历队列中所有修改
  for() {
    // beforeUpdate
    watcher.before()

    // 依赖局部更新节点
    watcher.run() 
    callHook('updated')
  }
}

// 销毁实例实现
Vue.prototype.$destory = function() {
	 // 触发钩子
   callHook(vm, 'beforeDestory')
   // 自身及子节点
   remove()
   // 删除依赖
   watcher.teardown()
   // 删除监听
   vm.$off()
  // 触发钩子
  callHook(vm, 'destoryed')
}