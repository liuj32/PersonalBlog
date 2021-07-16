/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var tryPartition = (index, sum) => {
        if (sum === 0) {
            return true
        }
        if (sum < 0 || index < 0) {
            return false
        }
        if (dp[index][sum] != null) {
            return dp[index][sum] === 1
        }
        
        dp[index][sum] = (
            tryPartition(index-1, sum)
            || tryPartition(index-1, sum-nums[index])
        ) ? 1 : 0

        return dp[index][sum] === 1
    }

    var sum = nums.reduce((a, b) => a+b, 0)
    if (sum % 2 === 1) {
        return false
    }
    var dp = []
    for(var i=0;i<nums.length;i++) {
        dp[i] = []
    }

    return tryPartition(nums.length-1, sum / 2)
};