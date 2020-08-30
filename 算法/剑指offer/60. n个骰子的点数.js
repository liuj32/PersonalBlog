/**
 * 剑指 Offer 60. n个骰子的点数
 * 
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
    var dp = []
    dp = [...Array(n+1)].map(() => [])
    
    for(var i=1;i<=6;i++) {
        dp[1][i] = 1
    }
    for(var i=2;i<=n;i++) {
        for(var j=i;j<=6*i;j++) {
            for(var cur = 1;cur<=6;cur++) {
                if (j - cur <= 0) {
                    break;
                }
                if (dp[i][j] == null) {
                    dp[i][j] = 0
                }
                if (dp[i-1][j-cur] == null) {
                    dp[i-1][j-cur] = 0
                }                

                dp[i][j] += dp[i-1][j-cur]
            }
        }
    }
    var pow = Math.pow(6, n)
    var res = []
    for(var i=n;i<=n*6;i++) {
        res.push(parseFloat(dp[n][i] * 1 / pow.toFixed(5)))
    }
    return res
};