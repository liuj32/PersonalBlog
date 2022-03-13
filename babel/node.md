# babel

## babel原理

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
