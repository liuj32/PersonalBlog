/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function(s) {
  var m = s.length
  var g = new Array(m).fill().map(() => new Array(m).fill(true))
  for(var i =m-1;i>=0;i--) {
      for(var j=i+1;j<m;j++) {
         g[i][j] = s[i] == s[j] && g[i+1][j-1]
      }
  }
  var dp = new Array(m).fill(m+1)
  for(var i=0;i<m;i++) {
      if (g[0][i]) {
          dp[i] = 0
      } else {
          for(var j=0;j<i;j++) {
              if (g[j+1][i]) {
                  dp[i] = Math.min(dp[i], dp[j] + 1)
              }
          }
      }
  }
  return dp[m-1]
};
