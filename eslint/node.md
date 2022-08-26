# ESLint
> 2022.08.16

## 介绍
JavaScript代码检查工具，由Node.js编写。

### 格式化方法

##  规则
`配置文件`使用 "extends": "eslint:recommended" 来启用推荐的规则。

* 可能的错误或逻辑错误(Possible Errors)

* 最佳实践(Best Practices)

* 使用严格模式和严格模式指令(Strict Mode)

* 变量声明(Variables)

* Node.js 或 在浏览器中使用CommonJS(Node.js and CommonJS)

* 风格指南(Stylistic Issues)

* ES6(ECMAScript 6)

* Deprecated

* Removed

流行的风格指南：
1. eslint-config-standard

.eslintignore文件忽略eslint检查。

## 命令
./node_modules/.bin可用npx代替。

npx eslint --init：创建一个初始化eslint conifg file
npx eslint yourfile.js：执行检查

* 注释开启、关闭规则
/* eslint-disable */: 块注释临时禁止规则出现警告
/* eslint-enable */: 块注释临时开启规则出现警告
/* eslint-disable-next-line */、// eslint-disable-next-line
/* eslint-disable-line */、// eslint-disable-line

## 其他
glob 模式：带有模糊匹配路径，例如：**/*Spec.js

## 推荐资源
1. []()