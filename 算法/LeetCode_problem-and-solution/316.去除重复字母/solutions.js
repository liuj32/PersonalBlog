/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var stack = []
    for(var i=0;i<s.length;i++) {
      if (stack.indexOf(s[i]) > -1) {
        continue
      }
      while (
        stack.length > 0
        && s[i] <= stack[stack.length-1]
        && s.indexOf(stack[stack.length-1], i) > -1
      ) {
        stack.pop()
      }
      stack.push(s[i])
    }
  
    return stack.join('')
  };