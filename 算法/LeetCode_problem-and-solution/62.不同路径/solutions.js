/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = new Array(m).fill([])
    for(var i=0;i<m;i++) {
      for(var j=0;j<n;j++) {
        if (i === 0 && j=== 0) {
          dp[i][j] = 1
          continue
        }
        // 左边
        var leftPaths = j-1 < 0 ? 0 : dp[i][j-1]
        // 上边
        var topPaths = i-1 < 0 ? 0 : dp[i-1][j]
        dp[i][j] = x + y
      }
    }

    return dp[i-1][j-1]
};