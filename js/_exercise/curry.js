function curry(fn) {
  if(fn.length <= 1) {
    return fn
  }
  var generator = function(...args) {
    if (args.length === fn.length) return fn(...args)
    else {
      return (...args2) => {
        return generator(...args, ...args2)
      }
    }
  }

  return generator
}