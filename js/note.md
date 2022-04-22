# js 

## es5
1. 如何理解原型？如何理解原型链？

## es6
1. 继承方式
参考： https://juejin.im/post/5bcb2e295188255c55472db0

2. 为什么要使⽤模块化？都有哪⼏种⽅式可以实现模块化，各有什么特点？
⽴即执⾏函数、AMD 和 CMD、CommonJS、ES Module

3. Proxy 可以实现什么功能？

4. map, filter, reduce

## 异步编程

1. 并发与并⾏的区别？

2. 什么是回调函数？回调函数有什么缺点？如何解决回 调地狱问题？
   
3. Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执⾏和 then 函数执⾏有什么 区别?

4. async 及 await 的特点，它们的优点和缺点分别是 什么？await 原理是什么？

5. co模块

6. 从多线程到Event Loop全面梳理
参考： https://juejin.im/post/5d5b4c2df265da03dd3d73e5#heading-2

7. 浏览器与node事件循环区别
  浏览器：每轮事件循环仅出一个宏任务接着去执行微任务队列；node：只要轮到某个宏任务，则会执行队列中的所有当前任务。
  node：当前轮次遇到新的异步任务添加到队尾，等到下一轮次才会执行

## JS 进阶知识点及常考⾯试题
1. call、apply、bind的实现原理

2. new、instanceOf

3. 为什么 0.1 + 0.2 != 0.3

4. 垃圾回收机制

5. 为什么闭包不会被垃圾回收清除
参考: https://github.com/raxxarr/note/issues/3

## 深拷贝
1. 忽略undifined、symbol
2. 不能序列化函数
3. 日期对象变为字符串
4. 正则对象对位空对象
5. NaN、Infinity，会变为null
6. 无法拷贝对象原型链
7. 无法拷贝不可枚举属性
8. 不能解决循环应用