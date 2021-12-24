/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  var m = nums.length
  if (m <= 1) {
    return m
  }
  var ret = 1
  var dp = new Array(m).fill(1)
  for(var i=1;i<m;i++) {
     for(var j=0;j<i;j++) {
         if (nums[j] < nums[i]) {
           dp[i] = Math.max(dp[i], dp[j] + 1)
           ret = Math.max(ret, dp[i])
         }
     }
  }
  return ret
};
