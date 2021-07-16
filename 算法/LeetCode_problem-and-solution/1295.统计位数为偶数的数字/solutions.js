/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var res = 0
    for(var i=0;i<nums.length;i++) {
        var cnt = 0
        while(nums[i] >= 1) {
            cnt++
            nums[i] = nums[i] / 10
        }
        if (cnt % 2 === 0) {
            res++
        }
    }

    return res;
};