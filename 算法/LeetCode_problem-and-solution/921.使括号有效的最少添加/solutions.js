/**
 * @param {string} S
 * @return {number}
 */
// 栈
var minAddToMakeValid = function(S) {
    var stack = []
    for(var c of S) {
      if (c == '(') {
          stack.push(c)
      } else {
          if (stack.length > 0 && stack[stack.length -1] == '(') {
              stack.pop()
          } else {
              stack.push(c)
          }
      }
    }
    return stack.length
};

var minAddToMakeValid = function(S) {
    var left = 0, right = 0
    for(var c of S) {
        if (c == '(') {
            left++
        } else {
            if (left > 0) {
                left--
            } else {
                right ++
            }
        }
    }

    return left + right
};