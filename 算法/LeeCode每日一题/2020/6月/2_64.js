/**
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @param {number} n
 * @return {number}
 */

var sumNums = function(n) {
  return n > 0 &&  (n + sumNums(n-1))
};


 

// 示例 1：

// 输入: n = 3
// 输出: 6
// 示例 2：

// 输入: n = 9
// 输出: 45