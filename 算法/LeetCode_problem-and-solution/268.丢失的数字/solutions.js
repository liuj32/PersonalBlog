/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var maxNum = nums.length
    var total = maxNum * (maxNum + 1) / 2
    var sum = 0
    for(var num of nums) {
      sum += num
    }
    return total - sum
  };