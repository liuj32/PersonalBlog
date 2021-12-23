/**
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var len = nums.length;
  if (len < 2) {
      return false;
  }
  var record = new Set();
  for (var i=0;i<len;i++) {
      if (record.has(nums[i])) {
          return true;
      }
      record.add(nums[i]);
      if (record.size === k+1) {
          record.delete(nums[i-k])
      }
  }

  return false;
};