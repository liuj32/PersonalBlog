/**
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var dp = []
  dp[0] = 1, dp[1] = 1
  for(var i=2;i<=n;i++) {
      for(var j=1;j<=i;j++) {
          if (dp[i] == null) {
              dp[i] = 0
          }
          dp[i] += dp[j-1] * dp[i-j]
      }
  }

  return dp[n]
};

