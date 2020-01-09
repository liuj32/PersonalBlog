
/**
 * 函数调用后不会被立即执行 之后连续 wait 时间段没有调用才会执行
 * 用法 如处理用户输入
 */
function debounce(func, wait) {
  let timer = null;
  
  return function(...args) {
    if (timer) clearTimeout(timer); // 如果在定时器未执行期间又被调用 该定时器将被清除 并重新等待 wait 秒
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  }
}