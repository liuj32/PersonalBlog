function debounce (func, wait) {
  let timer
  return function () {
    var context = this,
      args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

function throttler(func, wait) {
  let last = Date.now();

  let now
  let timer
  return function() {
    var context = this,
      args = arguments;
    now = Date.now()
    if (now - last > wait) {
      func.apply(context, args)
      last = now
    }
  }

}