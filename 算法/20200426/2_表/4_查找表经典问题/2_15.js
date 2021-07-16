/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var len = nums.length;
  var result = [];
  nums.sort((a, b) => a -b);

  for (var i=0;i<len;i++) {
      if (i-1 >= 0 && nums[i] === nums[i-1]) continue;
      if (len-1 >=0 && nums[i] + nums[len -1] * 2 < 0) continue;
      if (i+1 < len && nums[i] + nums[i + 1] * 2 > 0) continue;

      var one = -nums[i];
      var left = i+1, right = len -1;
      while (left < right) {
          if (left-1 > i && nums[left] === nums[left -1]) {
              left++;
              continue;
          }
          if (right+1 < len && nums[right] === nums[right+1]) {
              right--;
              continue;
          }

          if (nums[left] + nums[right] === one) {
              result.push([nums[i], nums[left], nums[right]])
              left++;
          } else if (nums[left] + nums[right] > one) {
               right--;
          } else {
              left++;
          }
      }
  }

  return result
};