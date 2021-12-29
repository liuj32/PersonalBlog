> https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB

# 路由钩子
失活的组件里调用 beforeRouterLeave
全局的 beforeEach
重用的组件里 beforeRouterUpdate
路由配置里 beforeEnter
被激活的组件里 beforeRouterEnter
调用全局的 beforeResolve
导航被确认
全局的afterEach
触发dom更新
调用beforeRouterEnter中的next回调


# vue-router改变地址栏
hash模式改变hash回车，触发hashchage、popstate，不重新加载
history模式改变url回车，未触发hashchage、popstate，重新加载

# 总结
路由始终维护当前线路，路由切换的时候会把当前线路切换到目标线路，切换过程中会执行一系列钩子函数、更改url、渲染对应的组件，切换完毕后会将目标线路替换更新为当前线路，
为下一次切换做准备。