/**
 * 面试题 08.03. 魔术索引
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  const binary = (left, right) => {
      if (left > right) {
          return -1
      }
      var midIdx = left + Math.floor((right - left) / 2)
      var leftIdx = binary(left, midIdx-1)
      if (leftIdx != -1) {
          return leftIdx
      } else if (midIdx == nums[midIdx]) {
          return midIdx
      } else {
          return binary(midIdx+1, right)
      }
  }

  return binary(0, nums.length-1)
};