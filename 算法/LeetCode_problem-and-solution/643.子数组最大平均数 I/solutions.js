/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var n = nums.length
    var slideSum = 0
    for(var i=0;i<k;i++) {
      slideSum += nums[i]
    }
    var maxSum = slideSum
    for(var r=k;r<n;r++) {
      slideSum += nums[r] - nums[r - k]
      maxSum = Math.max(maxSum, slideSum)
    }
  
    return maxSum / k
  };