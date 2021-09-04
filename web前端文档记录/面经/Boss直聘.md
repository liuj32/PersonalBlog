> 2021/7/17

1. 做后台系统与h5的区别
2. 埋点
cookieid、用户设备信息、页面地址、title、page_name、etype、
3. 微服务原理
将多个单页应用聚合为一个整体应用的JavaScript微前端框架
过程：输入url->加载主应用->注册子应用运行微前端->监听路由->匹配子路由->加载/卸载子应用->运行子应用生命周期->触发子路由
appsToUnload
appsToUnmount 卸载应用
appsToLoad 首次加载的应用
appsToMount 再次加载的应用



1. 函数式编程
函数是一等公民，把它看做一个值，可用于任何地方。
   * 确定抽象，构建函数。
   * 利用已有函数构建更复杂的抽象。
   * 通过已有的函数传递给其他函数来构建更加复杂的抽象。
5. 高阶函数
满足一项或者两项：
   * 以一个函数为参数
   * 以一个函数为返回结果
6. 函数柯里化(curry)
根据柯里化前的函数的参数数量决定柯里化后的函数需要执行多少次。
是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
7. 组合式函数
有两种函数组合的方式，pipe、compose,前者从左往右组合函数，后者相反。
接受一个或者多个函数，然后不断尝试依次调用这些函数的方法。
参考https://segmentfault.com/a/1190000015102804
8. 写了那些工具函数、验证函数
工具函数：isblank、yuanToFen、fenToYuan、safeGet、getEnumLabel、parseTime、copyObj
验证函数：validateString、validateInteger、validateVarName、validatePhone、
9.  dialog在页面中的位置
10. 项目中用到了那些算法
11. 封装了那些组件
safe-area-bottom安全区
<!-- 兼容iPhone X底部
.iphoneXPaddingBottom() {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
} -->
z-button
z-tag
z-empty
goods-detail
z-radio
z-radio-group
z-dialog
<!-- div.dialog-box
   div.dialog
   div.mask -->
<!-- css 兼容性
transform: translateZ(0); // 消除子元素层叠等级过高覆盖父级容器 -->