# cli5
> 2022.08.22

Vue CLI基于webpack，而create-vue则基于Vite。

## cli服务
CLI服务构建于webpack和webpack-dev-server之上的，包含：
* 加载其他CLI插件的核心服务。
* 一个针对其他绝大多数应用优化过的内部的webpack配置。
* 项目内部的vue-cli-server命令，提供serve、build和inspect命令。


## 命令
1. 升级CLI:
npm update -g @vue/cli
yarn global upgrade --latest @vue/cli


2. vue-cli-service serve命令会启动一个开发服务器(基于webpack-dev-server), 并附带开箱即用的模块热重载(Hot-Module-Replacement)。

3. vue inspect > output.js：输出cli中的webpack配置。

4. 本地预览dist文件：
  * 安装一个node.js静态文件服务器，例如：serve
     npm install -g serve
  * serve -s dist // 启动服务

## npm 包

@vue/cli-service 会安装 yorkie，它会方便在package.json的gitHooks字段中方便指定Git hook。
```
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
   "lint-staged": {
    "*.{js,vue}": "vue-cli-service lint"
  }
}
```

## 浏览器兼容性
browserslist：制定了项目的目标浏览器范围，这个值会被@babel/preset-env和Autoprefixer用来确定需要转译的JavaScript特性和需要添加的css前缀。

有依赖需要polyfill：
transpileDependencies：为该依赖开启语法转换和根据使用情况检测polyfill。

## HTML和静态资源
preload：指定页面被加载后很快会用到的资源。

prefetch：告诉浏览器在页面加载完成后，利用空余时间提前获取用户未来可能会用到的资源。cli默认会为async chunk 生成的 JavaScript 文件(动态import)加上prefetch。

## CI自动化部署


## 管理node版本
n、nvm、nvm-windows

## 关键词
vendor bundles：