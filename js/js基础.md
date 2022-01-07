1. 模块化
  * commonJS
  * AMD 依赖前置 
  * CMD 就近依赖
  * es6 import/export
commonJS与es6区别：
commonjs 值引用，同步方式，es6地址引用，异步方式。

AMD与CMD区别:
1. AMD定义时依赖模块就需要申明，cmd用到某个模块采取加载
2. 对依赖的执行时机不同：AMD加载完成后就执行依赖模块，且依赖模块的执行顺序与书写顺序不一定一致，cmd所有模块加载完成后，进入回调函数，遇到require才执行对应模块，书写顺序保持一致。