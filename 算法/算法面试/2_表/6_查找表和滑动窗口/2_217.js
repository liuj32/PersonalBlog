/**
 * 给定一个整数数组，判断是否存在重复元素。
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var record = new Set();
  var len = nums.length;

  for(var i=0;i<len;i++) {
      if(record.has(nums[i])) {
          return true;
      } else {
          record.add(nums[i]);
      }
  }

  return false;
};