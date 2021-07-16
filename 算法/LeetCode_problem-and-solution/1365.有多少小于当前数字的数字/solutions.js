/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 暴力
var smallerNumbersThanCurrent = function(nums) {
    var res = []
    for(var i=0;i<nums.length;i++) {
        res[i] = 0
        for(var j=0;j<nums.length;j++) {
            if (nums[j] < nums[i]) {
                res[i]++
            }
        }
    }

    return res;
};

// 前缀和
var smallerNumbersThanCurrent = function(nums) {
    var res = []
    var cnt = [...Array(101)].fill(0)
    for(var num of nums) {
        cnt[num]++
    }
    for(var i=1;i<cnt.length;i++) {
        cnt[i] += cnt[i-1]
    }
    for(var i=0;i<nums.length;i++) {
        res[i] = nums[i] != 0 ?  cnt[nums[i] -1] : 0
    }

    return res
};