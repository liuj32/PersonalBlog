/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 3) {
    return nums.length
  }
  var i = 0
  for (var num of nums) {
    if (i < 2 || num > nums[i - 2]) {
      nums[i++] = num
    }
  }

  return i
};