// 暴力
var maximumProduct = function(nums) {
    nums.sort((a, b) => a- b)
    var len = nums.length
    return Math.max(nums[0] * nums[1] * nums[len-1], nums[len-1] * nums[len-2] * nums[len-3])
 };

 
 // o(N)
 // 在一个数组中找出最大的三个数，最小的两个数
 var maximumProduct = function(nums) {
    var min1 = Infinity, min2 = Infinity
    max1 = -Infinity, max2 = -Infinity, max3 = -Infinity
    var i = 0;
    for(var n of nums) {
        if (n < min1) {
            min2 = min1
            min1 = n
        } else if (n < min2) {
            min2 = n
        }
 
        if (n > max1) {
            max3 = max2
            max2 = max1
            max1 = n
        } else if (n > max2) {
            max3 = max2
            max2 = n
        } else if (n > max3) {
            max3 = n
        }
 
    }
 
    return Math.max(min1 * min2 * max1, max1 * max2 * max3)
 };