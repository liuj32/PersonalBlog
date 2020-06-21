/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /** 递归*/
 var memo = []
var canPartition = function(nums) {
    memo = []
    var C = nums.reduce((a, b) => a+b, 0)
    for(var i=0;i<nums.length;i++) {
        memo[i] = []
    }
    if (C % 2 != 0) {
        return false
    }

    return tryPartition(nums, nums.length-1, C/2)
};

function tryPartition(nums, index, sum) {
    if (sum === 0) {
        return true;
    }
    if (index<0 || sum < 0) {
        return false
    }
    if (memo[index][sum] != null) {
        return memo[index][sum] === 1
    }

    memo[index][sum] = (tryPartition(nums, index-1, sum) ||
                        tryPartition(nums, index-1, sum-nums[index])) ? 1 : 0

    return  memo[index][sum] === 1
}


/** 动态规划 */
