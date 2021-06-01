/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var m = nums.length
    var res = new Array(m).fill(-1)
    var stack = []
    for(var i=0;i<m * 2 - 1;i++) {
      while(stack.length && nums[stack[stack.length - 1]] < nums[i % m]) {
        res[stack[stack.length - 1]] = nums[i % m]
        stack.pop()
      }
      stack.push(i % m)
    }
  
    return res
  };