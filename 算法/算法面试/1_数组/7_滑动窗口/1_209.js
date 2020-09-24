/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let len = nums.length;
  if (len === 0) return 0;
  let minLen = 0;
  let i = 0, j =  -1;
  let sum = 0;
  while (i < len && j < len) {
      if (sum < s) {
           j++;
           sum += nums[j];
      } else {
          minLen = Math.min(minLen, (j - i + 1)) || (j - i + 1);
          sum -= nums[i];
          i++;
      }
  }
  return minLen;
};

var arr = [0, 1, 2]
var result = merminSubArrayLenge(arr, 3)

console.log(result)

