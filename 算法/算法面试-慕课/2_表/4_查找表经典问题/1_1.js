/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var record = new Map();
  for (var i=0;i<nums.length;i++) {
      var half = target - nums[i];
      if (record.has(half)) {
          return [record.get(half), i]
      }
      record.set(nums[i], i);
  }
};