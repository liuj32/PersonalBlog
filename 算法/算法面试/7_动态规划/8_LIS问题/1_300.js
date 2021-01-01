/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var memo = [], len = nums.length
  if (len == 0) {
      return 0
  }
  for(var i=0;i<len;i++) {
    memo[i] = 1;
  }

  for(var i=1;i<len;i++) {
      for(var j=0;j<i;j++) {
         if (nums[i] > nums[j]) {
             memo[i] = Math.max(1+memo[j], memo[i])
         }
      }
  }

  return Math.max(...memo)
};


// 示例:

// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4 
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。