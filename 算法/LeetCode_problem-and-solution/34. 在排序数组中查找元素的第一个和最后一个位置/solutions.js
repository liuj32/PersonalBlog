/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var lefIndex = binary(nums, target, true)
    var rightIndex = binary(nums, target, false) - 1
    var ans = [-1, -1]
    if (lefIndex <= rightIndex && rightIndex < nums.length && nums[lefIndex] === target && nums[rightIndex] == target) {
      return [lefIndex, rightIndex]
    }
    return ans
  }
  
  var binary = function(nums, target, lower) {
    var left = 0, right = nums.length - 1, ans = nums.length
    while(left <= right) {
      var mid = Math.floor((left + right) / 2)
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid -1
        ans = mid
      } else {
        left = mid + 1
      }
    }
  
    return ans
  }