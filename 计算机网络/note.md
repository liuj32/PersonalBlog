# 网络

## http

1. 临时重定向和永久重定向区别<br>
参考：https://ccie.lol/knowledge-base/redirect-301-and-302/

2. http状态码、常用字段
   
3. get和post
副作用、幂等
参考：https://www.html.cn/qa/other/19270.html

4. http缓存

5. https
对称加密、非对称加密、TLS握手

6. HTTP1.1 和 1.0的区别
  
7. HTTP2.0 的特点
二进制、多路复用、header压缩、服务端push

8. http1.x队头阻塞

9. http3.0
QUIC协议：基于udp，多路复用、0-RTT、纠错机制

10. HTTPS 什么情况下是不可靠的？中间人攻击？
    
11. cookie各字段
  name
  value
  domain: // 可以访问该cookie的域名，如果设置为“.google.com”，则所有以“google.com”结尾的域名都可以访问该Cookie。注意第一个字符必须为“.”。
  path // 可以访问cookie的页面路径
  size // cookie大小
  httponly // 不能通过document.cookie获取
  expire/Max-Age
  secure // 是否只能通过https传递此cookie

## tcp

1. 三次握手、四次挥手
  
2. tcp如何保证消息顺序以及可靠性到达<br>
参考：https://blog.csdn.net/dccmxj/article/details/52103800

3. tcp流量控制、拥塞控制<br>
参考：https://zhuanlan.zhihu.com/p/37379780
拥塞控制：慢开始(拥塞窗口、慢开始门限)、拥塞避免，快重传、快恢复

4. 滑动窗口<br>

4. tcp和udp区别<br>
参考：https://blog.fundebug.com/2019/03/22/differences-of-tcp-and-udp/<br>
参考：https://blog.csdn.net/hanzhen7541/article/details/79072036<br>

5. ARQ协议

6. TCP 能够建立多少链接？

## 域名

1. 利用多域名存储静态资源进行性能优化：网站的静态资源为什么要使用独立域名<br>
参考：cnblogs.com/goloving/p/9368858.html

2. 域名系统DNS (使用UDP)

## 其他

1. Web页面请求过程(URL请求过程)

2. CSRF( 跨站请求伪造)、XSS(跨站脚本攻击)
   
3. 交换机与路由器的区别

4. OSI 网络七层模型，各层作用

5. JWT
参考：https://jelly.jd.com/article/6243bef5e8054001c65f4511
## 推荐书籍
1. 《《深入理解计算机网络》》

## 参考文章
1. 