/**
 * 根据逆波兰表示法，求表达式的值
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {    
  var operator = '+-*/';
  var stack = [];
  for(var i=0;i<tokens.length;i++) {
      if (operator.indexOf(tokens[i]) === -1) {
          stack.push(tokens[i])
      } else {
          var two = stack.pop();
          var one = stack.pop();
          var result = null;
          switch(tokens[i]) {
              case '+':
                  result = parseInt(one) + parseInt(two);
                  break;
              case '-':
                  result = parseInt(one) - parseInt(two);
                  break;
              case '*':
                  result = parseInt(one) * parseInt(two);
                  break;
              case '/':
                  result = parseInt(parseInt(one) / parseInt(two));
                  break;
              default:
                  break;                                          
          }

          stack.push(result);
      }
  }
  return stack.pop();
};


// 示例 1：

// 输入: ["2", "1", "+", "3", "*"]
// 输出: 9
// 解释: ((2 + 1) * 3) = 9
// 示例 2：

// 输入: ["4", "13", "5", "/", "+"]
// 输出: 6
// 解释: (4 + (13 / 5)) = 6
// 示例 3：

// 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// 输出: 22
// 解释: 
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
