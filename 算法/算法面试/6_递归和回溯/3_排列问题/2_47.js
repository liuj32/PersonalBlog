/**
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */

var res = []
var used = []
var permuteUnique = function(nums) {
    res = []
    used = []
    if (nums.length == 0) {
        return [];
    }

    help(nums, [])
    return res;
};

function help(nums, temp) {
    if (nums.length == temp.length) {
        res.push(temp)
        return
    }

    var history = {}
    for(var i=0;i<nums.length;i++) {
        if(!used[i] && !history[nums[i]]) {
            used[i] = true;
            help(nums, temp.concat(nums[i]))
            used[i] = false;

            history[nums[i]] = true;
        }
        
    }
}