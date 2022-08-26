# Babel
> 2022.08.12

## 概念
Babel是一个JavaScript编译器
主要用于将es2015+的语法编写的代码转换为向后兼容的JavaScript语法，以便能够运行在当前旧版本的浏览器或其他环境中。

功能：
* 语法转换
* 通过polyfill在目标环境中添加确实属性
* 源码转换

## npm包
@babel/core
@babel/cli 终端运行 Babel
@babel/preset-env 为目标浏览器中没有的功能进行代码转换和加载 polyfill
@babel/polyfill 包含core-js、regenerator runtime 模拟完整的es52015+环境
    * 不建议使用了，建议直接使用core-js/stable

### 预设
preset：即一组预先设定的插件
        useBuiltIns：'usage' // 一个优化措施，只包含所需要的polyfill

stage-x：实验性质的预设
Stage 0 - 设想（Strawman）：只是一个想法，可能有 Babel插件。
Stage 1 - 建议（Proposal）：这是值得跟进的。
Stage 2 - 草案（Draft）：初始规范。
Stage 3 - 候选（Candidate）：完成规范并在浏览器上初步实现。
Stage 4 - 完成（Finished）：将添加到下一个年度版本发布中。

## 转换命令
./node_modules/.bin/babel src --out-dir lib
npx babel src --out-dir lib
* 利用 npm@5.2.0 所自带的 npm 包运行器将 ./node_modules/.bin/babel 命令缩短为 npx babel。

## 其他
提到单一仓库（monorepo）模式：vue、vite、pnpm、babel

## babel插件编译过程
1. 加载配置文件
   尝试加载babel.config.js
   加载package.json
   尝试加载.babelrc
   合并参数
2. 加载plugins和presets，分别遍历他们(plugins 每一项会调用它的回调，返回包含 visitor 的对象）
3. 解析部分
   以utf-8格式读取入口文件得到代码
   之后解析生成ast
4. 遍历与转化部分
  遍历插件数组，生成最后的访问者对象
  开始遍历节点，碰到感兴趣的节点调用回调
5. 生成部分
  遍历ast,将得到的代码保存到数组中，最后拼接起来


## 参考
1. [the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)