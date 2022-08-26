module.exports = {
  // 停止在父级目录中寻找配置
  "root": true,
  // 环境定义了一组预定义的全局变量
  "env": {
      "browser": true,
      "es2021": true // es语法、es全局全局变量
  },
  // 继承
  "extends": "eslint:recommended",
  // 为特定类型文件指定处理器、规则
  "overrides": [
  ],
  // 解析器选项
  "parserOptions": {
      "ecmaVersion": "latest", // es语法
      "sourceType": "module"
  },
  // 全局变量
  "globals": {
  },
  // 插件
  "plugins": [],
  // 共享设置
  "settings": {
  },
  // 规则
  "rules": {
  },
}
