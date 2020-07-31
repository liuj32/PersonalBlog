/**
 * 给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。
 * 
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    var len = nums.length
    if (len == 0) return 0

    var dp = []
    var sum = []
    sum[0] = 0
    for(var i=0;i<=len;i++) {
        dp[i] = [...Array(m+1)].map(() => Infinity)
        sum[i+1] = sum[i] + nums[i]
    }
    dp[0][0] = 0
    for(var i=1;i<=len;i++) {
        for(var j=1;j<=Math.min(i, m);j++) {
            for(var k=0;k<i;k++) {
                dp[i][j] = Math.min(dp[i][j],  Math.max(dp[k][j-1], sum[i] - sum[k]))
            }
        }
    }

    return dp[len][m]
}