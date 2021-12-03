# web安全

1. 什么是 XSS 攻击？如何防范 XSS 攻击？什么是CSP？
  XSS：将可执行的代码注入到网页
  黑名单：不能出现某些字符，白名单：只能出现某些字符
  CSP：本质上建立白名单，告诉浏览器那些资源可被加载和执行，Content-Security-Policy
2. 什么是 CSRF 攻击？如何防范 CSRF 攻击？
  挟制用户在已登录的web应用上执行非本意操作的攻击方法
  原理：利用http携带cookie的特性进行的攻击，攻击网站拿不到cookie
3. 点击劫持 
* x-frame-options
* JS 防御

4. 什么是中间⼈攻击？如何防范中间⼈攻击？