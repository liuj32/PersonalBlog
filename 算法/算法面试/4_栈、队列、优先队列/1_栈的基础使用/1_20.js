/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var left = "([{", right = "}])";
  var keyOfObj = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  var stack = []
  for(var i =0;i<s.length;i++) {
      if (left.indexOf(s[i]) != -1) {
          stack.push(s[i]);
      } else {
          var cur = stack.pop();
          if (keyOfObj[cur] != s[i]) {
              return false;
          }
      }
  }

  return stack.length === 0;
};



// 输入: "()[]{}"
// 输出: true