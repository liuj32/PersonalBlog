/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) {
      return 0
    }
    var res = 0
    var count = 1
    for(var i=1;i<nums.length;i++) {
      if (nums[i] > nums[i-1]) {
        count++
      } else {
        res = Math.max(res, count)
        count = 1
      }
    }
    return Math.max(res, count)
  };