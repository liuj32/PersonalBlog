/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var stack = []
  var res = 0
  stack.push(-1) // 起点
  for(var i=0;i<s.length;i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        // 新的起点
        stack.push(i)
      } else {
        res = Math.max(res, i - stack[stack.length-1])
      }
    }
  }

  return res
};