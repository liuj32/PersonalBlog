##  模块化
  * commonJS
  * AMD 依赖前置 
  * CMD 就近依赖
  * es6 import/export
commonJS与es6区别：
commonjs 值引用，同步方式，es6地址引用，异步方式。

## AMD与CMD区别:
1. AMD定义时依赖模块就需要申明，cmd用到某个模块采取加载
2. 对依赖的执行时机不同：AMD加载完成后就执行依赖模块，且依赖模块的执行顺序与书写顺序不一定一致，cmd所有模块加载完成后，进入回调函数，遇到require才执行对应模块，书写顺序保持一致。

## 函数式编程
函数式编程可解决的问题？(http://interview.poetries.top/fe-blog-docs/blog-docs/javaScript2/11-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0.html)
可重用性、易推理性

函数可以接受并且返回任何类型的值。
1. 高阶函数
  一个函数接受或返回一个甚至多个函数，称之为高阶函数。例如：map、filter、forEach
2. 偏函数和柯里化
  柯里化：接受多个参数的函数转换成一系列使用一个参数的函数
  偏函数：类似柯里化，固定一个或者几个参数，返回一个函数来接受剩余的参数。
  ```
  function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
  }
  ```
3. 组合函数
  将每个函数当做一个“部件”，在需要时通过组装不同的“部件”，来达到自己想要的“模型”。
  专业术语：定义某种组合方式，来让他们成为一种新的组合。
  compose()：右->左
  pipe()：左->右
  ```
  function compose(...fns) {
    return function composed(result){
      // 拷贝一份保存函数的数组
      var list = fns.slice();

      while (list.length > 0) {
        // 将最后一个函数从列表尾部拿出
        // 并执行它
        result = list.pop()( result );
      }

      return result;
    };
  }
  ```
## defer与async区别
1. 都是异步
2. async 加载完成后就执行，执行过程中阻塞后面元素解析；乱序执行，加载完成后就执行。
   defer 加载脚本和解析后面文档并行进行，脚本的执行在所有元素解析完成后；脚本顺序执行。
参考：https://segmentfault.com/q/1010000000640869

## this
箭头函数中没有this, arguments, super，这些只依赖包含箭头函数的第一个普通函数
常见三种方式：
1. 在浏览器中，在全局范围内this指向window
2. 在函数中，this永远指向最后调用它的那个对象
3. 构造函数中，this指向new出来的那个新的对象。(手写new看具体过程)
4. call、apply、bind中的this指向绑定的那个对象上

## target、currentTarget
currentTarget：绑定事件的对象
target：触发事件的对象