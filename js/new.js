// 手动实现一个 new 关键字的功能的函数 _new(fun, args) --> new fun(args)
function _new(fun, ...args) {
  if (typeof fun !== 'function') {
      return new Error('参数必须是一个函数');
  }
  let obj = Object.create(fun.prototype);
  let res = fun.call(obj, ...args);
  if (res !== null && (typeof res === 'object' || typeof res === 'function')) {
      return res;
  }
  return obj;
}