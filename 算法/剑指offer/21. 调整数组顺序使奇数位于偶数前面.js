/**
 * @param {number[]} nums
 * @return {number[]}
 */

var exchange = function(nums) {
    for(var i=0;i<nums.length;i++) {
        if(nums[i] % 2 == 1) {
            var v = nums.splice(i, 1)
            nums.unshift(v)
        }
    }
    return nums
};

// 双指针
var exchange = function(nums) {
    var left = 0, right = nums.length-1
    while(left < right) {
        while(nums[left] % 2 == 1 && left < right) {
            left++
        }
        while(nums[right] % 2 == 0 && left < right) {
            right--
        }
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }
    return nums
};