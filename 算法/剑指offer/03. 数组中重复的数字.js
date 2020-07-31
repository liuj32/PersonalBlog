/**
 * 找出数组中重复的数字。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  var memo = {}
  for(var i=0;i<nums.length;i++) {
      if (memo[nums[i]] == null) {
          memo[nums[i]] = 1
      } else {
          return nums[i]
      }
  }
};