/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var dp = []
    var top = cost.length
    dp[0] = 0, dp[1] = 0
    for(var i=2;i<=top;i++) {
      dp[i] = Math.min(dp[i-2] + cost[i - 2], dp[i-1] + cost[i-1])
    }
  
    return dp[top]
  };