/**
 * 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。
 * 
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    var dp = []
    var m = s1.length, n = s2.length, t = s3.length
    for(var i = 0;i<=m;i++) {
        dp[i] = []
    }
    if (m +n != t) {
        return false
    }
    dp[0][0] = true
    for(var i=0;i<=m;i++) {
        for(var j=0;j<=n;j++) {
            if (i > 0)
                dp[i][j] = dp[i][j] ||  dp[i-1][j] && s1[i-1] == s3[i+j-1]
            if (j > 0)
                dp[i][j] = dp[i][j] ||  dp[i][j-1] && s2[j-1] == s3[i+j-1]                
        }
    }

    return dp[m][n]
};