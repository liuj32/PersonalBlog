# NODE

## 1.npm发包
* npm config set registry http://cnpm-registry.sui.work 设置源地址
1. npm init
2. package 包含一些描述字段信息
name
version
description
author
license
repository
main
3. npm adduser 第一次发包添加用户信息
4. npm login // 非第一次发包
5. npm publish
   发布 beta 版只需要运行以下命令： npm publish --tag=beta // 带--tag参数

   npm info [package] / npm dist-tag ls [package] // 查看包信息
   npm dist-tag add [package] latest // 为指定的版本加上tag, 用户默认安装的版本就是latest
   latest：稳定版
   legacy：
   next：最新版
   npm install xxxx --legacy-peer-deps 忽略
版本格式：主版本号（marjor）.次版本号（minor）.修订号（patch），版本号递增规则如下：
marjor：当你做了不兼容的 API 修改，
minor：当你做了向下兼容的功能性新增，
patch：当你做了向下兼容的问题修正。

6. npm beta标签：不稳定版本。
   v5.0.0-alpha.0 -> v5.0.0-beta.0 -> v5.0.0-rc.0 -> v5.0.0
   alpha：内部测试版。最早的版本，一般用户不要使用，包含很多bug，功能不全。
   beta：公开测试版。给忠实用户测试用的，也有很多bug，还会增加很多功能。
   rc：候选版本。该版本不在增加新功能，类似一个发布前的预览版，离最终发布不远了。

package.json的 dependencies 中^符号和~符的区别：
波浪符号（~）: 它会更新到当前minor version（也就是中间的那位数字）中最新的版本。body-parser:~1.15.2，这个库会去匹配更新到1.15.x的最新版本，如果出了一个新的版本为1.16.0，则不会自动升级。
插入符号（^）：它将会把当前库的版本更新到当前major version（也就是第一位数字）中最新的版本。放到我们的例子中就是：bluebird:^3.3.4，这个库会去匹配3.x.x中最新的版本，但是他不会自动更新到4.0.0。

注意： 运行 cnpm install xxx 默认的是插入符号（^）

## 2.packgage.json
npm install --save packageName 打包到生产环境bundle中
npm install --save-dev packageName 用于开发环境(比如：linter，测试库)
git commit校验
   husky：使操作git hooks变得容易。
   gitHooks 配合lint-staged 工具。