# 浏览器

## 浏览器如何渲染网页
1. 处理 HTML 并构建 DOM 树。(建立起父亲、儿子、兄弟之间的关系)
2. 处理 CSS构建 CSSOM 树。
3. 将 DOM 与 CSSOM 合并成一个渲染树。
4. 根据渲染树来布局，计算每个节点的位置。
5. 调用 GPU 绘制，合成图层，显示在屏幕上(栅格化：合成线程会按照视口附近的图块来优先生成位图->浏览器进程根据指令生成页面，显示在屏幕上)
## 从输入url到页面展示过程
地址：http://img-repo.poetries.top/images/20210504134355.png

* 合成URL
* DNS域名解析
  客户端->浏览器缓存->本地的hosts文件->本地DNS解析器缓存
  本地DNS服务器：根DNS->顶级域DNS->权威DNS->响应主机IP
* 建立TCP连接
  三次握手
  SSL握手过程 ？
* 发送HTTP请求，服务器处理请求，返回响应结果
* 关闭TCP连接，四次挥手
* 浏览器渲染

## 重绘(repaint)、重排(回流reflow)

## 浏览器高度计算
地址：https://segmentfault.com/a/1190000016554851
1. height：
2. clientHeight：自身高度 + padding - 滚动条高度(17px)
3. offsetHeight：自身高度 + padding + border
4. scrollHeight：自身padding + 内容区高度

offsetHeight与clientHeight：多加上滚动条高度 + border

网页文档：
  宽：document.body.scrollWidth
  高：document.body.scrollHeight
浏览器窗口：
  宽：window.innerWidth
  高：window.innerHeight （不包含菜单栏）

## 多个标签页之间通信的几种方法
地址：https://juejin.cn/post/6844903589924569101