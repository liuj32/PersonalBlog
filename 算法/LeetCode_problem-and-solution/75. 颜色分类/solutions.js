/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 单指针
var sortColors = function(nums) {
    var len = nums.length
    var pth = 0;
    for(var i=0;i<len;i++) {
        if (nums[i] === 0) {
            [nums[pth], nums[i]] = [nums[i], nums[pth]]
            pth++
        }
    }
    for(var i=pth;i<len;i++) {
        if (nums[i] === 1) {
            [nums[pth], nums[i]] = [nums[i], nums[pth]]
            pth++
        }
    }
}