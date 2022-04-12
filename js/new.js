// 手动实现一个 new 关键字的功能的函数 _new(fun, args) --> new fun(args)
function _new(fun, ...args) {
  if (typeof fun !== 'function') {
      return new Error('参数必须是一个函数');
  }
  const obj = Object.create(fun.prototype);
  const res = fun.apply(obj, args);

  return res instanceof Object ? res : obj;
}
