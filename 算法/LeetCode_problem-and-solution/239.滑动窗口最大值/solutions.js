/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var res = []
    var stack = []
    for(var i=0;i<nums.length;i++) {
      while (stack.length && i - stack[0] + 1 > k) {
        stack.shift()
      }
      while(stack.length && nums[stack[stack.length-1]] < nums[i]) {
        stack.pop()
      }
      stack.push(i)
      if (i >= k-1) {
        res.push(nums[stack[0]])
      }
    }
    return res
  };