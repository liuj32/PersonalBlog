/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    var recordMap = new Map()
    var maxCount = nums.length / 2
    for (var i=0;i<nums.length;i++) {
      if (recordMap.has(nums[i])) {
        var value = recordMap.get(nums[i])
        recordMap.set(nums[i], ++value)
      } else {
        recordMap.set(nums[i], 1)
      }
  
      if (recordMap.get(nums[i]) > maxCount) {
        return nums[i]
      }
    }
  };

/**
 * 摩尔投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0
    var candidate = null
    for(var i=0;i<nums.length;i++) {
      if (count === 0) {
        candidate = nums[i]
      }
      count += (nums[i] === candidate) ? 1 : -1
    }
  
    return candidate
  };