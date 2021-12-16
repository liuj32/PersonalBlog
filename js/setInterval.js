var setInterval = (fn, delay) => {
  setTimeout((function fn() {
    fn()
    setTimeout(fn, delay)
  }, delay)
}

requestID = window.requestAnimationFrame(callback); 

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();