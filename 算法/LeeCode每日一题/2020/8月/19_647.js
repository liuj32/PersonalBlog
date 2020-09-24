/**
 * 647. 回文子串
 * 
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  if (s.length == 0) return 0

  var dp = [], len = s.length
  dp[0] = 1
  for(var i=1;i<len;i++) {
      var count = 0;
      for(var j=i;j>=0;j--) {
          var l = j, r = i;
          while(l<=r) {
              if(s[l] != s[r]) {
                  break
              }
              l++
              r--
          }
         if(l > r) count++
      }

      dp[i] = dp[i-1] + count;
  }
  return dp[len-1]
};