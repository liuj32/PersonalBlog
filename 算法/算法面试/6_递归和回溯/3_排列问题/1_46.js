/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
var res = []
var permute = function(nums) {
    if (nums.length == 0) {
        return []
    }
    res = []

    help(nums, [])
    return res;
}

function help(nums, temp) {
    if (temp.length == nums.length) {
        res.push(temp)
        return
    }
    var arr = []
    for(var i=0;i<nums.length;i++) {
        if (temp.indexOf(nums[i]) == -1) {
            arr.push(nums[i])
        }
    }
    
    for(var i=0;i<arr.length;i++) {
        help(nums, temp.concat(arr[i]))
    }
}
//```````````````````````````````````````````````````//
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var res = []
var used = []
var permute = function(nums) {
    if (nums.length == 0) {
        return []
    }
    res = []
    used = []

    help(nums, [])
    return res;
}

function help(nums, temp) {
    if (temp.length == nums.length) {
        res.push(temp.concat())
        return
    }
    
    for(var i=0;i<nums.length;i++) {
        if (!used[i]) {
            temp.push(nums[i])
            used[i] = true;
            help(nums, temp)
            temp.pop()
            used[i] = false
        }
    }
}


// 示例:

// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
