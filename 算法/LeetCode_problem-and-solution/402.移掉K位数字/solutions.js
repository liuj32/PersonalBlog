/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    var stk = []
    for(var digit of num) {
      while(stk.length && stk[stk.length-1]>digit && k) {
        k--
        stk.pop()
      }
      stk.push(digit)
    }
  
    for(;k>0;k--) {
      stk.pop()
    }
  
    var ans = ''
    var isLeadingZero = true
    for(var digit of stk) {
      if (isLeadingZero && digit === '0') {
        continue
      }
      isLeadingZero = false
      ans += digit
    }
    
    return ans === '' ? '0' : ans
  };