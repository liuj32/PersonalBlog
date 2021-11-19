/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  var m = s.length
  var n = t.length
  if (m < n) {
    return 0
  }
  var dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0))
  for(var i=0;i<=m;i++) {
    dp[i][n] = 1
  }
  for (var i=m-1;i>=0;i--) {
    for(var j=n-1;j>=0;j--) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i+1][j+1] + dp[i+1][j]
      } else {
        dp[i][j] = dp[i+1][j]
      }
    }
  }

  return dp[0][0]
};