@[TOC](git记录)
# 1、配置代理
git设置代理: 
   * git config --global http.proxy 'socks5://127.0.0.1:10805'
   
git取消代理
   * git config --global --unset http.proxy 
   
git获取代理配置
   * git config --global --get http.proxy
# 2、分支
git 新建并切换分支 
   * git checkout -b  '分支名'
    
git 切换分支 
 * git checkout   '分支名'
 
推送新建分支到远程
 * git push --set-upstream origin [branch]
#  3、重命名 commit message、 合并commit
1、重命名最近一次的commit message。
* git commit  --amend 进入编辑页面。
* 使用:wq!退出vim编辑。

2、合并多个commit messgae.
   * 找到要合并的commit id 之前的一个id,再使用  git rebase -i  父id
   * 在列出的  id中将pick 改为 r，:wq!退出。
   * 并重新修改message， :wq!退出。
   
2、将多个commit message合并为一个log
 * git reset --soft [id]
* git commit -m  ''
* 放弃合并 git rebase --abort
# 4、如何将暂存区 工作区 撤销以及删除、回退上次提交
1、如果还没有git add -A, 则直接使用git checkout -- filename 进行撤销。

2、如果已经git add file ，但是没有git commit -m ''，分两步操作：
   * git reset head filename
   * git checkout -- filename
    
3、如果已经git add file, 并且已经git  commit -m ''，分两步操作:
   * 使用git log 查看要恢复的commitId。
   * 使用git reset hard -- commitId。
    
4、回退上次提交
   * git reset --hard head~
   
# 5、git reflog 时光穿梭机
1、git reflog   //  查看最近操作记录
2、git reset --hard [commit id]  // 回到误操作的commit记录
3、git cherry-pick [commit id] // 将分支的某一次提交，添加到当前分支上
# 6、标签
1、 打标签
 * git tag [name]
 
2、删除标签
 * git tag -d [name]

# 7、配置别名
.gitConfig配置文件通常在C:\Users\Admin目录下，具体别名配置如下：
```
[alias]
  st = status
  ci = commit
  co = checkout
  br = branch
  rb = reset --hard ORIG_HEAD
  unstage = reset HEAD
  lg = log --graph --oneline --decorate
  last = log --graph --oneline --decorate origin/master..HEAD
  ```

【参考文章】
1、https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=100000271&idx=1&sn=5ec2f8cbf48a82674f182d44acad2d0b&scene=19#wechat_redirect
2、https://juejin.im/post/5cbd82165188250a926108bd
# 8、将vscode终端改为git bash命令行模式
分为三个步骤：
1.	打开设置
2.	点击setting.json文件
3.	在setting.json文件里面添加如下内容：
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
# 9、临时切换分支
情景：如果在A分支编辑内容，现在需要切换到B分支上处理其他事情，那么A分支可以不用commit。
1. git add . 添加到暂存区
2. git stash 压栈
3. git checkout B
4. git checkout A
5. git stash pop 出栈
# 10、git工具
* 可视化工具 ：SourceTree
* vscode插件：GitLens

# 11、发版分支(release-20200805)合master
1. 将release发版分支中commit message合并为一条信息
2. 切换到master分支，`git rebase release-20200805`
3. git push
4. git tag 20200805
5. git push --tags
6. 删除远程release分支：git push -delete origin release-20200805
7. 查看远程分支：git branch -r 

## 12 npm发包
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
   发布 beta 版只需要运行以下命令： npm publish --tag beta // 带--tag参数
   npm info [package] / npm dist-tag ls [package] // 查看包信息
   npm dist-tag add [package] latest // 切回之前的版本或者指定的版本, 用户默认安装的版本就是latest
版本格式：主版本号（marjor）.次版本号（minor）.修订号（patch），版本号递增规则如下：

marjor：当你做了不兼容的 API 修改，
minor：当你做了向下兼容的功能性新增，
patch：当你做了向下兼容的问题修正。

package.json的 dependencies 中^符号和~符的区别：
波浪符号（~）: 它会更新到当前minor version（也就是中间的那位数字）中最新的版本。body-parser:~1.15.2，这个库会去匹配更新到1.15.x的最新版本，如果出了一个新的版本为1.16.0，则不会自动升级。
插入符号（^）：它将会把当前库的版本更新到当前major version（也就是第一位数字）中最新的版本。放到我们的例子中就是：bluebird:^3.3.4，这个库会去匹配3.x.x中最新的版本，但是他不会自动更新到4.0.0。

注意： 运行 cnpm install xxx 默认的是插入符号（^）

## 