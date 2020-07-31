/**
 * 斐波那契数列
 * 
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  var memo = []
  memo[0] = 0, memo[1] = 1
  for(var i=2;i<=n;i++) {
      memo[i] = (memo[i-1] + memo[i-2]) % 1000000007
  }
  return memo[n]
};