/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var record = new Map()
    for(var i=0;i<nums.length;i++) {
        var half = target - nums[i]
        if(record.has(half)) {
            return [record.get(half), i]
        }
        record.set(nums[i], i)
    }
 };