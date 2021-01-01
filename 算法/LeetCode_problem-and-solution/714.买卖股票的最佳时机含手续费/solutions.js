/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    var dp = []
    dp[0] = 0 // dp[0] 不持有股票
    dp[1] = -prices[0] // dp[1] 持有股票
    for(var i=1;i<prices.length;i++) {
      dp[0] = Math.max(dp[0], dp[1] + prices[i] - fee)
      dp[1] = Math.max(dp[1], dp[0] - prices[i])
    }
  
    return dp[0]
  };