/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  var m = nums.length
  if (m === 1) {
      return nums[0]
  }
  var maxData1 = robMax(nums.slice(0, m-1))
  var maxData2 = robMax(nums.slice(1))
  return Math.max(maxData1, maxData2)
};

var robMax = function(nums) {
  var m = nums.length
  if (m === 0) {
      return 0
  }
  var dp = new Array(m).fill().map(() => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for(var i=1;i<m;i++) {
      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
      dp[i][1] = dp[i-1][0] + nums[i]
  }
  return Math.max(dp[m-1][0], dp[m-1][1])
}