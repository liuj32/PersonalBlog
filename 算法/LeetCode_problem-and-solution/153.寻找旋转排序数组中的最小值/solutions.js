/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length
    if (len === 1) {
      return nums[0]
    }
    var left = 0, right = len -1
    while(left <= right) {
      if (nums[left] <= nums[right]) {
        return nums[left]
      }
  
      var midIndex = Math.floor((left + right) / 2)
      if (nums[midIndex] >= nums[left]) {
        left = midIndex + 1
      } else {
        right = midIndex
      }
    }
  };