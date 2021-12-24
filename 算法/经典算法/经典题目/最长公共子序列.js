// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  var m = text1.length
  var n = text2.length
  var dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0))
  var res = 0
  for(var i=1;i<=m;i++) {
    for(var j=1;j<=n;j++) {
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  return dp[m][n]
};