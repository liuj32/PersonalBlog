/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var i = 0
    var res = 0
    var positive = 1 // 正数
    // 去除字符前面的空格
    while(s[i] === ' ') {
      i++
    }
    if(s[i] === '+' || s[i] === '-'){
      positive = s[i] === '+' ? true : false
      i++
    } else if (s[i] < '0' || s[i] > '9') {
      // 第一位非数字
      return 0
    }
  
    while(i<s.length) {
      if (s[i] >= '0' && s[i] <= '9') {
        res = 10 * res + parseInt(s[i])
      } else {
        break
      }
      if (res > Math.pow(2, 31) - 1) {
        return positive ? Math.pow(2, 31) - 1 : -1 *  Math.pow(2, 31)
      }
      i++
    }
  
    return positive ? res : -res
  };