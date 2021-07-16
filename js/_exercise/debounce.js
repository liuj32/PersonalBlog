function debounce(fn, delay) {
  return function(args) {
    var that = this
    clearTimeout(fn.id)
    fn.id = setTimeout(function() {
      fn.call(that, args)
    }, delay)
  }
}

function throttle(fn, delay) {
  return function() {
    var that = this
    var args = arguments
    if(!fn.id ) {
      fn.id = setTimeout(function() {
        fn.apply(that, args)
        timer = null
      }, delay)
    }
  }
}