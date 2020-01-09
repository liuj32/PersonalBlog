
// foo 函数将会被调用 传入后台返回的数据
function foo(data) {
  console.log('通过jsonp获取后台数据:', data);
  document.getElementById('data').innerHTML = data;
}
/**
* 通过手动创建一个 script 标签发送一个 get 请求
* 并利用浏览器对 <script> 不进行跨域限制的特性绕过跨域问题
*/
(function jsonp() {
  let head = document.getElementsByTagName('head')[0]; // 获取head元素 把js放里面
  let js = document.createElement('script');
  js.src = 'http://domain:port/testJSONP?a=1&b=2&callback=foo'; // 设置请求地址
  head.appendChild(js); // 这一步会发送请求
})();

// 后台代码
// 因为是通过 script 标签调用的 后台返回的相当于一个 js 文件
// 根据前端传入的 callback 的函数名直接调用该函数
// 返回的是 'foo(3)'
function testJSONP(callback, a, b) {
return `${callback}(${a + b})`;
}