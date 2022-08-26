# MicroFrontEnds
> 2022.08.05

## 什么是single-spa?
将多个单页面应用聚合为一个整体应用的 JavaScript 微前端框架。
single-spa 是一种组织微前端路由的方案。

好处？ 
* 在同一页面上使用多个前端框架 而不用刷新页面 (React, AngularJS, Angular, Ember, 你正在使用的框架)
* 独立部署每一个单页面应用
* 新功能使用新框架，旧的单页应用不用重写可以共存
* 改善初始加载时间，延迟加载代码

## 框架原理
1. 统一管理应用app加载、初始化、挂载、卸载、移除。
   核心方法reroute()
2. 监听hashchange、popstate、重写pushState、replaceState 保证执行reroute来重新执行应用生命周期。
  重写事件监听addEventListener，保证需要卸载的app应用程序被卸载以及监听事件被移除后，再执行挂载的应用程序监听事件回调。

## Parcels 
指的是一个与框架无关的组件。
只有在涉及到跨框架的应用之间进行组件调用时，我们才需要考虑parcel的使用。

## 库
1. single-spa
协调微前端的挂载和卸载。
管理注册的应用程序，并负责其所有生命周期。

## 依赖共享
1. 添加你想要共享的依赖作为webpack externals
2. 使用 一个工作在浏览器中的模块加载工具，比如systemjs

## 其他
1. npm beta标签：不稳定版本。
   v5.0.0-alpha.0 -> v5.0.0-beta.0 -> v5.0.0-rc.0 -> v5.0.0
   alpha：内部测试版。最早的版本，一般用户不要使用，包含很多bug，功能不全。
   beta：公开测试版。给忠实用户测试用的，也有很多bug，还会增加很多功能。
   rc：候选版本。该版本不在增加新功能，类似一个发布前的预览版，离最终发布不远了。
2. webpack：module federation(模块联合)
3. 包格式：umd、esm、
4. git commit校验
   husky：使操作git hooks变得容易。
   gitHooks 配合lint-staged 工具。

## 关键词
cli：自动生成和管理webpack，babel，jest等配置。
Spotify：
CI/CD：打包部署？
prettier：代码格式工具
concurrently：同时运行脚本命令。
