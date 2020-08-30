/**
 * 剑指 Offer 59 - I. 滑动窗口的最大值
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 单调队列
var maxSlidingWindow = function(nums, k) {
    var stack = []
    var res = []
    for(var i=0;i<nums.length;i++) {
        while(stack.length && i - stack[0] + 1 > k) {
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

    return res;
};