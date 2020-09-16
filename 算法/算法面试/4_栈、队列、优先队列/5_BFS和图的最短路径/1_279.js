/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  var stack = [];
  var isVisited = {}
  stack.push({num: n, step: 0})
  isVisited[n] = true;
  while(stack.length > 0) {
      var cur = stack.shift();
      var { num, step} = cur;

      if (num === 0) {
          return step;
      }

      for (var i=1; ;i++) {
          var temp = num - i* i;
          if (temp < 0) {
              break;
          }
          if (isVisited[temp] == null) {
              stack.push({num: temp, step: step +1})
              isVisited[temp] = true;
          }
      }
  }
};

示例 1:

输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
