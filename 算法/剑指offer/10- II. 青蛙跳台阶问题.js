/**
 * 青蛙跳台阶问题
 * 
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  var memo = []
  memo[0] = 1, memo[1] = 1
  for(var i=2;i<=n;i++) {
      memo[i] = (memo[i-1] + memo[i-2]) % 1000000007
  }
  return memo[n]
};