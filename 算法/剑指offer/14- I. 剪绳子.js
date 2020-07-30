/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  var dp = []
  dp[0] = 0
  dp[1] = 1
  for(var i =2;i<=n;i++) {
      for(var j=1;j<=i;j++) {
         if (dp[i] == null) {
             dp[i] = 0
         }
         dp[i] = Math.max(dp[i],  j * Math.max(i-j, dp[i-j]))
      }
  }
  return dp[n]
};

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n <= 3) {
    return n - 1
  }
  var ans = 1
  while(n > 4) {
    ans *= 3
    n -= 3
  }
  ans *= n
  return ans
};