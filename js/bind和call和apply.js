
Function.prototype.bind = function(context, ...bindArgs) {
  // func 为调用 bind 的原函数
  const func = this;
  context = context || window;

  if (typeof func !== 'function') {
    throw new TypeError('Bind must be called on a function');
  }
  // bind 返回一个绑定 this 的函数
  return function(...callArgs) {
    let args = bindArgs.concat(callArgs);
    if (this instanceof func) {
      // 意味着是通过 new 调用的 而 new 的优先级高于 bind
      return new func(...args);
    }
    return func.call(context, ...args);
  }
}

// 通过隐式绑定实现
Function.prototype.call = function(context, ...args) {
  context = context || window;
  context.func = this;

  if (typeof context.func !== 'function') {
    throw new TypeError('call must be called on a function');
  }

  let res = context.func(...args);
  delete context.func;
  return res;
}

Function.prototype.apply = function(context, args) {
  context = context || window;
  context.func = this;

  if (typeof context.func !== 'function') {
    throw new TypeError('apply must be called on a function');
  }

  let res = context.func(...args);
  delete context.func;
  return res;
}