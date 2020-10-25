/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    var sum = nums.reduce((a, b) => a+b, 0)
    var half = Math.floor(sum / 2)
    var tempSum = 0
    var res = []
    for(var i=0;i<nums.length;i++) {
        for(var j=i+1;j<nums.length;j++){
            if (nums[i] < nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
        tempSum += nums[i]
        res.push(nums[i])
        if (tempSum > half) {
            return res
        }
    }
};